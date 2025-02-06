export const formatKodePos = (value) => {
  const kodePos = value.replace(/\D/g, "");

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

  return escapeHtml(kodePos.slice(0, 5));
};
