export const formatAlamat = (value) => {
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

  const sanitizedValue = escapeHtml(value);

  const cleanedValue = sanitizedValue.replace(/[^a-zA-Z0-9 .]/g, "");

  return cleanedValue.trim();
};
