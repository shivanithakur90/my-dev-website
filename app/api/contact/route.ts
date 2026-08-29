import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = String(
      formData.get("firstName") || ""
    ).trim();

    const lastName = String(
      formData.get("lastName") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const countryCode = String(
      formData.get("countryCode") || ""
    ).trim();

    const phone = String(
      formData.get("phone") || ""
    ).trim();

    const country = String(
      formData.get("country") || ""
    ).trim();

    const budget = String(
      formData.get("budget") || ""
    ).trim();

    const description = String(
      formData.get("description") || ""
    ).trim();

    // =====================================================
    // REQUIRED FIELDS
    // =====================================================

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !country ||
      !description
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // ENVIRONMENT VARIABLES
    // =====================================================

    if (!process.env.EMAIL_USER) {
      console.error("EMAIL_USER is missing");

      return NextResponse.json(
        {
          success: false,
          message: "EMAIL_USER is missing.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.EMAIL_APP_PASSWORD) {
      console.error("EMAIL_APP_PASSWORD is missing");

      return NextResponse.json(
        {
          success: false,
          message: "EMAIL_APP_PASSWORD is missing.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.CONTACT_RECEIVER_EMAIL) {
      console.error("CONTACT_RECEIVER_EMAIL is missing");

      return NextResponse.json(
        {
          success: false,
          message: "CONTACT_RECEIVER_EMAIL is missing.",
        },
        {
          status: 500,
        }
      );
    }

    // =====================================================
    // FILES
    // =====================================================

    const files = formData
      .getAll("files")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    const attachments: {
      filename: string;
      content: Buffer;
      contentType?: string;
      cid?: string;
      contentDisposition?: "inline" | "attachment";
    }[] = [];

    const inlineImages: {
      cid: string;
      filename: string;
    }[] = [];

    const otherFiles: {
      filename: string;
    }[] = [];

    for (let index = 0; index < files.length; index++) {
      const file = files[index];

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const isImage = file.type.startsWith("image/");

      if (isImage) {
        const cid = `quote-image-${Date.now()}-${index}@website`;

        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type || undefined,
          cid,
          contentDisposition: "inline",
        });

        inlineImages.push({
          cid,
          filename: file.name,
        });
      } else {
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type || undefined,
          contentDisposition: "attachment",
        });

        otherFiles.push({
          filename: file.name,
        });
      }
    }

    // =====================================================
    // SAFE VALUES
    // =====================================================

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeCountryCode = escapeHtml(countryCode);
    const safePhone = escapeHtml(phone);
    const safeCountry = escapeHtml(country);
    const safeBudget = escapeHtml(
      budget || "Not selected"
    );

    const safeDescription = escapeHtml(description).replace(
      /\n/g,
      "<br />"
    );

    // =====================================================
    // INLINE IMAGE HTML
    // =====================================================

    const uploadedImagesHtml =
      inlineImages.length > 0
        ? `
          <tr>
            <td style="padding: 0 32px 24px 32px;">

              <div
                style="
                  border: 1px solid #e5e7eb;
                  border-radius: 12px;
                  overflow: hidden;
                  background: #ffffff;
                "
              >

                <div
                  style="
                    padding: 16px 18px;
                    background: #f8f9fb;
                    border-bottom: 1px solid #e5e7eb;
                  "
                >
                  <div
                    style="
                      font-size: 13px;
                      font-weight: 700;
                      color: #222222;
                    "
                  >
                    Uploaded Images
                  </div>
                </div>

                <div
                  style="
                    padding: 18px;
                    background: #ffffff;
                  "
                >

                  ${inlineImages
                    .map(
                      (image, index) => `
                        <div
                          style="
                            margin-bottom: ${
                              index === inlineImages.length - 1
                                ? "0"
                                : "18px"
                            };
                          "
                        >
                          <img
                            src="cid:${image.cid}"
                            alt="${escapeHtml(image.filename)}"
                            style="
                              display: block;
                              width: 100%;
                              max-width: 520px;
                              max-height: 360px;
                              height: auto;
                              object-fit: contain;
                              margin: 0 auto;
                              border-radius: 10px;
                              background: #f7f7f7;
                              border: 1px solid #eeeeee;
                            "
                          />

                          <div
                            style="
                              margin-top: 8px;
                              text-align: center;
                              font-size: 11px;
                              color: #888888;
                            "
                          >
                            ${escapeHtml(image.filename)}
                          </div>
                        </div>
                      `
                    )
                    .join("")}

                </div>
              </div>

            </td>
          </tr>
        `
        : "";

    // =====================================================
    // OTHER FILES HTML
    // =====================================================

    const otherFilesHtml =
      otherFiles.length > 0
        ? `
          <tr>
            <td style="padding: 0 32px 24px 32px;">

              <div
                style="
                  padding: 16px 18px;
                  background: #f8f9fb;
                  border: 1px solid #e5e7eb;
                  border-radius: 12px;
                "
              >
                <div
                  style="
                    margin-bottom: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #222222;
                  "
                >
                  Attached Files
                </div>

                ${otherFiles
                  .map(
                    (file) => `
                      <div
                        style="
                          margin-top: 6px;
                          font-size: 12px;
                          color: #666666;
                        "
                      >
                        📎 ${escapeHtml(file.filename)}
                      </div>
                    `
                  )
                  .join("")}

              </div>

            </td>
          </tr>
        `
        : "";

    // =====================================================
    // GMAIL SMTP
    // =====================================================

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    console.log("Checking Gmail SMTP connection...");

    await transporter.verify();

    console.log("Gmail SMTP connected successfully ✅");

    // =====================================================
    // SEND EMAIL
    // =====================================================

    const info = await transporter.sendMail({
      from: `"Website Quote Form" <${process.env.EMAIL_USER}>`,

      to: process.env.CONTACT_RECEIVER_EMAIL,

      replyTo: email,

      subject: `New Quote Request - ${firstName} ${lastName}`,

      attachments,

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f2f4f7;
              font-family: Arial, Helvetica, sans-serif;
              color: #202020;
            "
          >

            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                width: 100%;
                background: #f2f4f7;
              "
            >
              <tr>
                <td
                  align="center"
                  style="
                    padding: 40px 15px;
                  "
                >

                  <!-- MAIN CARD -->
                  <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    style="
                      width: 100%;
                      max-width: 650px;
                      background: #ffffff;
                      border-radius: 16px;
                      overflow: hidden;
                      border: 1px solid #e8e8e8;
                    "
                  >

                    <!-- TOP GRADIENT -->
                    <tr>
                      <td
                        style="
                          height: 7px;
                          font-size: 0;
                          line-height: 0;
                          background:
                            linear-gradient(
                              90deg,
                              #2c28db 0%,
                              #762581 40%,
                              #c52639 72%,
                              #ef3b08 100%
                            );
                        "
                      >
                        &nbsp;
                      </td>
                    </tr>

                    <!-- HEADER -->
                    <tr>
                      <td
                        style="
                          padding: 32px 32px 24px 32px;
                        "
                      >

                        <table
                          role="presentation"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tr>
                            <td
                              style="
                                background: #fff1eb;
                                color: #f4520b;
                                padding: 7px 12px;
                                border-radius: 20px;
                                font-size: 10px;
                                font-weight: 700;
                                text-transform: uppercase;
                                letter-spacing: 0.8px;
                              "
                            >
                              New Enquiry
                            </td>
                          </tr>
                        </table>

                        <h1
                          style="
                            margin: 16px 0 0 0;
                            padding: 0;
                            font-size: 28px;
                            line-height: 1.2;
                            font-weight: 700;
                            color: #1c1c1c;
                          "
                        >
                          New Quote Request
                        </h1>

                        <p
                          style="
                            margin: 9px 0 0 0;
                            padding: 0;
                            font-size: 13px;
                            line-height: 1.6;
                            color: #777777;
                          "
                        >
                          A new project enquiry has been submitted
                          through your website contact form.
                        </p>

                      </td>
                    </tr>

                    <!-- CONTACT DETAILS -->
                    <tr>
                      <td style="padding: 0 32px 24px 32px;">

                        <table
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          style="
                            width: 100%;
                            border-collapse: collapse;
                            border: 1px solid #e5e7eb;
                          "
                        >

                          <!-- NAME -->
                          <tr>
                            <td
                              width="32%"
                              style="
                                padding: 14px 16px;
                                border-right: 1px solid #e5e7eb;
                                border-bottom: 1px solid #e5e7eb;
                                background: #f8f9fb;
                                font-size: 12px;
                                font-weight: 700;
                                color: #333333;
                              "
                            >
                              Name
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e5e7eb;
                                font-size: 13px;
                                color: #222222;
                              "
                            >
                              ${safeFirstName} ${safeLastName}
                            </td>
                          </tr>

                          <!-- EMAIL -->
                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                border-right: 1px solid #e5e7eb;
                                border-bottom: 1px solid #e5e7eb;
                                background: #f8f9fb;
                                font-size: 12px;
                                font-weight: 700;
                                color: #333333;
                              "
                            >
                              Email
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e5e7eb;
                                font-size: 13px;
                                word-break: break-word;
                              "
                            >
                              <a
                                href="mailto:${safeEmail}"
                                style="
                                  color: #315fe8;
                                  text-decoration: none;
                                "
                              >
                                ${safeEmail}
                              </a>
                            </td>
                          </tr>

                          <!-- PHONE -->
                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                border-right: 1px solid #e5e7eb;
                                border-bottom: 1px solid #e5e7eb;
                                background: #f8f9fb;
                                font-size: 12px;
                                font-weight: 700;
                                color: #333333;
                              "
                            >
                              Phone
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e5e7eb;
                                font-size: 13px;
                              "
                            >
                              <a
                                href="tel:${safeCountryCode}${safePhone}"
                                style="
                                  color: #315fe8;
                                  text-decoration: none;
                                "
                              >
                                ${safeCountryCode} ${safePhone}
                              </a>
                            </td>
                          </tr>

                          <!-- COUNTRY -->
                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                border-right: 1px solid #e5e7eb;
                                border-bottom: 1px solid #e5e7eb;
                                background: #f8f9fb;
                                font-size: 12px;
                                font-weight: 700;
                                color: #333333;
                              "
                            >
                              Country
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                border-bottom: 1px solid #e5e7eb;
                                font-size: 13px;
                                color: #222222;
                              "
                            >
                              ${safeCountry}
                            </td>
                          </tr>

                          <!-- BUDGET -->
                          <tr>
                            <td
                              style="
                                padding: 14px 16px;
                                border-right: 1px solid #e5e7eb;
                                background: #f8f9fb;
                                font-size: 12px;
                                font-weight: 700;
                                color: #333333;
                              "
                            >
                              Budget
                            </td>

                            <td
                              style="
                                padding: 14px 16px;
                                font-size: 13px;
                                color: #222222;
                              "
                            >
                              ${safeBudget}
                            </td>
                          </tr>

                        </table>

                      </td>
                    </tr>

                    <!-- PROJECT DESCRIPTION -->
                    <tr>
                      <td style="padding: 0 32px 24px 32px;">

                        <div
                          style="
                            border: 1px solid #e5e7eb;
                            border-radius: 12px;
                            overflow: hidden;
                            background: #ffffff;
                          "
                        >

                          <div
                            style="
                              padding: 15px 18px;
                              background: #f8f9fb;
                              border-bottom: 1px solid #e5e7eb;
                              font-size: 12px;
                              font-weight: 700;
                              color: #333333;
                            "
                          >
                            Project Description
                          </div>

                          <div
                            style="
                              padding: 18px;
                              min-height: 55px;
                              font-size: 13px;
                              line-height: 1.7;
                              color: #333333;
                              word-break: break-word;
                            "
                          >
                            ${safeDescription}
                          </div>

                        </div>

                      </td>
                    </tr>

                    <!-- UPLOADED IMAGES -->
                    ${uploadedImagesHtml}

                    <!-- OTHER ATTACHMENTS -->
                    ${otherFilesHtml}

                    <!-- FOOTER -->
                    <tr>
                      <td
                        style="
                          padding: 22px 32px;
                          background: #171717;
                        "
                      >

                        <table
                          role="presentation"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tr>

                            <td>
                              <div
                                style="
                                  font-size: 13px;
                                  font-weight: 700;
                                  color: #ffffff;
                                "
                              >
                                Openxcell
                              </div>

                              <div
                                style="
                                  margin-top: 5px;
                                  font-size: 10px;
                                  line-height: 1.5;
                                  color: #9d9d9d;
                                "
                              >
                                Sent from your website contact form.
                              </div>
                            </td>

                            <td
                              align="right"
                              style="
                                font-size: 10px;
                                color: #9d9d9d;
                              "
                            >
                              Quote Request
                            </td>

                          </tr>
                        </table>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

    console.log("Email sent successfully ✅");
    console.log("Message ID:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Quote request sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error("CONTACT FORM FULL ERROR:");
    console.error(error);

    let errorMessage = "Email could not be sent.";

    if (error instanceof Error) {
      console.error("Error message:", error.message);

      if (process.env.NODE_ENV === "development") {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}