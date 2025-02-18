export const formatRT = (value) => {
  if (typeof value !== "string") value = String(value);

  let nomorRT = value.replace(/\D/g, "").slice(0, 3);

  if (nomorRT.includes("e") || nomorRT.includes("E")) {
    nomorRT = nomorRT.replace(/[eE]/g, "");
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
  return escapeHtml(nomorRT);
};
