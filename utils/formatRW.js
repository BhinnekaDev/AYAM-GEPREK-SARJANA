export const formatRW = (value) => {
  const nomorRW = value.replace(/\D/g, "");
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
  const RW = nomorRW.slice(0, 3);
  return escapeHtml(RW);
};
