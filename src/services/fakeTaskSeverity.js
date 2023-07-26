export const severity = [
  { _id: "61b017a20cce782d386e736f", name: "Normal" },
  { _id: "61b017cc0cce782d386e7370", name: "Important" },
  { _id: "61b017eb0cce782d386e7371", name: "Very Important" },
];

export function getSeverity() {
  return severity.filter((s) => s);
}
