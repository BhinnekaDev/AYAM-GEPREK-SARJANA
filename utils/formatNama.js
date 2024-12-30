const validNama = (nama) => {
  const nameLength = nama.trim().length;
  if (nameLength < 5 || nameLength > 10) {
    return "Nama harus antara 5 hingga 10 karakter.";
  }
  return null;
};

export default validNama;
