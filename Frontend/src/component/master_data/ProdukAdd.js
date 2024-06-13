import "./Mahasiswa.css";
import axios from "axios";
import React from "react";

function ProdukAdd() {
  const [formValue, setformValue] = React.useState({
    id: "",
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

  const handleSubmit = async () => {
    // store the states in the form data
    const FormDataInput = new FormData();
    FormDataInput.append("id", formValue.id);
    FormDataInput.append("namaproduk", formValue.namaproduk);
    FormDataInput.append("stock", formValue.stock);
    FormDataInput.append("hargasatuan", formValue.hargasatuan);
    alert("Data berhasil disimpan");
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://localhost:7092/Produk/CreateProduk",
        data: FormDataInput,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error);
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

export default ProdukAdd;
