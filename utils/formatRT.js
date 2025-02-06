export const formatRT = (value) => {
  const nomorRT = value.replace(/\D/g, "");
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
  const RT = nomorRT.slice(0, 3);
  return escapeHtml(RT);
};
