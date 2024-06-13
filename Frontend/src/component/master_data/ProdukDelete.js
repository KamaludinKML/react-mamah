import "./Mahasiswa.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProdukDelete() {
  const { id } = useParams();
  const [produk, setProduk] = useState({
    id: "",
    namaproduk: "",
    stock: "",
    hargasatuan: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7092/Produk/GetByIdProduk?id=${id}`
      );
      const data = response.data;
      setProduk({
        id: data.id,
        namaproduk: data.namaproduk,
        stock: data.stock,
        hargasatuan: data.hargasatuan,
      });
    } catch (error) {
      console.log(error);
      alert("Data tidak ditemukan atau sudah dihapus!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `https://localhost:7092/Produk/DeleteProduk?id=${id}`
      );
      alert("Data berhasil dihapus");
      window.location.href = "/dataproduk";
    } catch (error) {
      console.error(error);
      alert("Error deleting data");
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Hapus Data Produk {id}</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
            <p>Yakin ingin menghapus produk {produk.namaproduk}?</p>
            <button type="submit" className="btn btn-danger">
              Hapus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProdukDelete;
