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

    // Required fields validation
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

    // Environment variable check
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

    // Files
    const files = formData
      .getAll("files")
      .filter(
        (item): item is File =>
          item instanceof File && item.size > 0
      );

    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();

        return {
          filename: file.name,
          content: Buffer.from(bytes),
          contentType: file.type || undefined,
        };
      })
    );

    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Check Gmail login before sending
    console.log("Checking Gmail SMTP connection...");

    await transporter.verify();

    console.log("Gmail SMTP connected successfully ✅");

    // Send Email
    const info = await transporter.sendMail({
      from: `"Website Quote Form" <${process.env.EMAIL_USER}>`,

      to: process.env.CONTACT_RECEIVER_EMAIL,

      replyTo: email,

      subject: `New Quote Request - ${firstName} ${lastName}`,

      attachments,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
          "
        >

          <div
            style="
              height: 6px;
              background: linear-gradient(
                90deg,
                #3127dc,
                #8f246f,
                #ed3211
              );
            "
          ></div>

          <div style="padding: 30px;">

            <h2
              style="
                color: #222222;
                margin: 0 0 25px;
              "
            >
              New Quote Request
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                    width: 180px;
                  "
                >
                  Name
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                  "
                >
                  ${escapeHtml(firstName)}
                  ${escapeHtml(lastName)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                  "
                >
                  Email
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                  "
                >
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                  "
                >
                  Phone
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                  "
                >
                  ${escapeHtml(countryCode)}
                  ${escapeHtml(phone)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                  "
                >
                  Country
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                  "
                >
                  ${escapeHtml(country)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                  "
                >
                  Budget
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                  "
                >
                  ${escapeHtml(
                    budget || "Not selected"
                  )}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    font-weight: bold;
                    vertical-align: top;
                  "
                >
                  Project Description
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #dddddd;
                    white-space: pre-wrap;
                  "
                >
                  ${escapeHtml(description)}
                </td>
              </tr>

            </table>

            <p
              style="
                margin-top: 20px;
                color: #777777;
                font-size: 13px;
              "
            >
              Sent from your website contact form.
            </p>

          </div>
        </div>
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

      // Local debugging only
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