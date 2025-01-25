export const formatNoTelepon = (value) => {
  const No_Telepon = value.replace(/[^0-9]/g, "");
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

  const sanitizedValue = escapeHtml(No_Telepon);

  const cleanedValue = sanitizedValue.replace(/\D/g, "");

  if (cleanedValue.length === 0) {
    return "";
  } else if (cleanedValue.length === 1 && cleanedValue[0] !== "0") {
    return "";
  }

  if (!cleanedValue.startsWith("0")) {
    return "";
  }

  return cleanedValue.substring(0, 16);
};
