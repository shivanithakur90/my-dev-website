const defaultColumns = [
  {
    key: "feature",
    label: "Features",
    type: "feature",
    widthClassName: "w-[24%]",
  },
  {
    key: "openxcell",
    label: "OpenXcell",
    highlighted: true,
  },
  {
    key: "traditional",
    label: "Traditional Dev Shop",
  },
  {
    key: "diy",
    label: "DIY, single tools",
  },
  {
    key: "inHouse",
    label: "Hire in-house",
  },
];

const defaultRows = [
  {
    feature: "Time to working software",
    openxcell: "Week 1",
    traditional: "2–3 months",
    diy: "Hours, but limited",
    inHouse: "3–6 months to hire",
  },
  {
    feature: "Tool selection",
    openxcell: "Best-fit, multi-tool",
    traditional: "Hand-coded only",
    diy: "Locked to one tool",
    inHouse: "You decide",
  },
  {
    feature: "You own it",
    openxcell: "Yes — fully",
    traditional: "Yes",
    diy: "Vendor dependent",
    inHouse: "Yes",
  },
  {
    feature: "Approach",
    openxcell: "Deep, multi-SaaS",
    traditional: "From scratch",
    diy: "Tool-limited",
    inHouse: "You teach them",
  },
  {
    feature: "Pricing",
    openxcell: "Fixed scope",
    traditional: "T&M, creep risk",
    diy: "Subscription",
    inHouse: "Salaries + overhead",
  },
  {
    feature: "SaaS integration depth",
    openxcell: "AI-native FDE",
    traditional: "Usually",
    diy: "Locked to tool",
    inHouse: "Varies",
  },
];

/**
 * @typedef {{ key: string; label: import("react").ReactNode; highlighted?: boolean; widthClassName?: string }} ComparisonColumn
 * @typedef {{ id?: string; values?: Record<string, import("react").ReactNode>; [key: string]: import("react").ReactNode | Record<string, import("react").ReactNode> | undefined }} ComparisonRow
 * @typedef {{
 *   eyebrow?: import("react").ReactNode;
 *   eyebrowIcon?: import("react").ReactNode;
 *   title?: import("react").ReactNode;
 *   description?: import("react").ReactNode;
 *   columns?: ComparisonColumn[] | Record<string, import("react").ReactNode>;
 *   rows?: ComparisonRow[];
 *   sectionClassName?: string;
 * }} ComparisonSectionProps
 */

function normalizeColumns(columns) {
  if (Array.isArray(columns)) {
    return columns;
  }

  if (columns && typeof columns === "object") {
    return Object.entries(columns).map(([key, label], index) => ({
      key,
      label,
      type: index === 0 || key === "feature" ? "feature" : "value",
      highlighted: key === "openxcell",
      widthClassName: key === "feature" ? "w-[24%]" : "",
    }));
  }

  return defaultColumns;
}

function getCellValue(row, column) {
  if (row.values && Object.prototype.hasOwnProperty.call(row.values, column.key)) {
    return row.values[column.key];
  }

  return row[column.key];
}

/** @param {ComparisonSectionProps} props */
export default function ComparisonSection({
  eyebrow = "How we're different",
  eyebrowIcon = "⑂",
  title = "OpenXcell vs. the alternatives",
  description = "An AI-native, forward-deployed, results-driven approach — versus the three other options most mid-market companies consider.",
  columns = defaultColumns,
  rows = defaultRows,
  sectionClassName = "pb-0 pt-[50px] md:py-[50px]",
}) {
  const normalizedColumns = normalizeColumns(columns);
  const firstColumn = normalizedColumns[0];
  const lastColumn = normalizedColumns[normalizedColumns.length - 1];

  return (
    <section className={`w-full bg-[#fcf9ff] ${sectionClassName}`}>
      <div className="container">
        <div className="mx-auto max-w-full text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#e7e7e7] bg-white px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#242424] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">
            <span className="text-[#ff5708]">{eyebrowIcon}</span>
            {eyebrow}
          </div>

          <h2 className="mt-6 text-[30px] font-semibold leading-[1.08] tracking-[-1.8px] text-[#171717] sm:text-[35px] lg:text-[45px] lg:tracking-[-2px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-[1.55] text-[#656565] sm:text-[17px]">
            {description}
          </p>
        </div>

        <div className="mt-12 overflow-x-auto pb-3 lg:mt-14">
          <div className="min-w-[950px] px-2 pt-3">
            <table className="w-full table-fixed border-separate border-spacing-0 text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr>
                  {normalizedColumns.map((column) => (
                    <th
                      key={column.key}
                      className={
                        column.highlighted
                          ? "rounded-t-xl bg-[#ff5708] px-4 py-4 text-center text-[16px] font-semibold text-white shadow-[0_-5px_18px_rgba(255,87,8,0.18)]"
                          : `${column.widthClassName || ""} px-4 py-4 text-center font-semibold text-[#555] ${
                              column === firstColumn ? "text-left" : ""
                            }`
                      }
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => {
                  const isFirstRow = rowIndex === 0;
                  const isLastRow = rowIndex === rows.length - 1;

                  return (
                    <tr key={row.id || getCellValue(row, firstColumn) || rowIndex}>
                      {normalizedColumns.map((column) => {
                        const isFirstColumn = column === firstColumn;
                        const isLastColumn = column === lastColumn;
                        const value = getCellValue(row, column);

                        if (column.highlighted) {
                          return (
                            <td
                              key={column.key}
                              className={`border-b border-white/15 bg-gradient-to-b from-[#ff6c36] to-[#ee4b08] px-4 py-4 text-center font-semibold text-white shadow-[7px_0_16px_rgba(70,30,15,0.15),-7px_0_16px_rgba(70,30,15,0.10)] ${
                                isLastRow ? "rounded-b-xl" : ""
                              }`}
                            >
                              {value}
                            </td>
                          );
                        }

                        return (
                          <td
                            key={column.key}
                            className={`border-b border-[#dedede] bg-white px-4 py-4 text-center text-[#666] ${
                              isFirstColumn
                                ? "border-l text-left font-medium text-[#555]"
                                : "border-r"
                            } ${isFirstRow ? "border-t" : ""} ${
                              isFirstRow && isFirstColumn ? "rounded-tl-lg" : ""
                            } ${
                              isLastRow && isFirstColumn ? "rounded-bl-lg" : ""
                            } ${
                              isFirstRow && isLastColumn ? "rounded-tr-lg" : ""
                            } ${
                              isLastRow && isLastColumn ? "rounded-br-lg" : ""
                            }`}
                          >
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
