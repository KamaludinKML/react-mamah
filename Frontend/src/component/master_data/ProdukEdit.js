import "./Mahasiswa.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProdukEdit() {
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
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
        "https://localhost:7092/Produk/GetByIdProduk?id=" + id
      );
      const data = await response.data;
      const dataId = data[0].id;
      const dataNama = data[0].namaproduk;
      const dataStock = data[0].stock;
      const dataHarga = data[0].hargasatuan;

      setFormValue({
        id: dataId,
        namaproduk: dataNama,
        stock: dataStock,
        hargasatuan: dataHarga,
      });
    } catch (error) {
      console.error(error);
      alert("Data tidak ditemukan!");
    }
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        "https://localhost:7092/Produk/UpdateProduk?id=" + id,
        formValue
      );

      window.location.href = "/dataproduk";

      alert("Data berhasil diubah");
    } catch (error) {
      console.error(error);
      alert("Error saat mengubah data");
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="title">Edit Data Produk {id}</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              placeholder="Masukkan Id"
              value={formValue.id}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="namaproduk"
              placeholder="Masukkan Nama produk"
              value={formValue.namaproduk}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="stock"
              placeholder="Masukkan stock"
              value={formValue.stock}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="hargasatuan"
              placeholder="Masukkan Harga Satuan"
              value={formValue.hargasatuan}
              onChange={handleChange}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProdukEdit;
