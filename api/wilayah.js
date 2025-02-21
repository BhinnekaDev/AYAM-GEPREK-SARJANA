import { useState, useEffect } from "react";

const useWilayah = () => {
  const [provinsiAPI, setProvinsiAPI] = useState([]);
  const [kabupatenAPI, setKabupatenAPI] = useState([]);
  const [kecamatanAPI, setKecamatanAPI] = useState([]);

  useEffect(() => {
    const fetchProvinsi = async () => {
      try {
        const response = await fetch(
          "https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json"
        );
        const data = await response.json();
        setProvinsiAPI(data);
      } catch (err) {
        console.error("Error fetching provinsi:", err);
      }
    };
    fetchProvinsi();
  }, []);

  const fetchKabupaten = async (provinsiId) => {
    try {
      const response = await fetch(
        `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${provinsiId}.json`
      );
      const data = await response.json();
      setKabupatenAPI([...data]);
    } catch (err) {
      console.error("Error fetching kabupaten:", err);
    }
  };

  const fetchKecamatan = async (kabupatenId) => {
    try {
      console.log("Mengambil Kecamatan untuk Kabupaten ID:", kabupatenId);
      const response = await fetch(
        `https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${kabupatenId}.json`
      );
      const data = await response.json();
      setKecamatanAPI([...data]);
    } catch (err) {
      console.error("Error fetching kecamatan:", err);
    }
  };

  return {
    provinsiAPI,
    kabupatenAPI,
    kecamatanAPI,
    fetchKabupaten,
    fetchKecamatan,
  };
};

export default useWilayah;
