import "./Mahasiswa.css";
import axios from "axios";
import React from "react";

function ProdukAdd() {
  const [formValue, setformValue] = React.useState({
    namaproduk: "",
    stock: "",
    hargasatuan: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // simpan state ke dalam form data
    const formData = {
      namaproduk: formValue.namaproduk,
      stock: formValue.stock,
      hargasatuan: formValue.hargasatuan,
    };

    try {
      // membuat permintaan post dengan axios
      const response = await axios.post(
        "https://localhost:7092/Produk/CreateProduk",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      alert("Data berhasil disimpan");
      window.location.href = "/dataproduk"; // Redirect setelah response berhasil
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Error menyimpan data: " + error.message);
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Tambah Data Produk</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
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

export default ProdukAdd;