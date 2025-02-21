export const formatRW = (value) => {
  if (typeof value !== "string") value = String(value);

  let nomorRW = value.replace(/\D/g, "").slice(0, 3);

  if (nomorRW.includes("e") || nomorRW.includes("E")) {
    nomorRW = nomorRW.replace(/[eE]/g, "");
  }
  const escapeHtml = (str) => {
    return str.replace(/[&<>"']/g, (char) => {
      switch (char) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        default:
          return char;
      }
    });
  };
  return escapeHtml(nomorRW);
};
