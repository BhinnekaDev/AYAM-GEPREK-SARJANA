export const formatKodePos = (value) => {
  if (typeof value !== "string") value = String(value);

  let kodePos = value.replace(/\D/g, "").slice(0, 5);

  if (kodePos.includes("e") || kodePos.includes("E")) {
    kodePos = kodePos.replace(/[eE]/g, "");
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

  return escapeHtml(kodePos);
};
