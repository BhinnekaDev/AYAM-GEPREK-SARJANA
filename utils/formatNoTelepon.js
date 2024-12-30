const validNoTelepon = (noTelepon) => {
  const sanitizedPhone = noTelepon.replace(/[^0-9]/g, ""); // Menghapus non-angka

  if (!sanitizedPhone || sanitizedPhone.length < 10) {
    return "Nomor telepon harus berisi minimal 10 angka.";
  }

  return null; // Jika valid
};
