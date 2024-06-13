import "./Mahasiswa.css";
import axios from "axios";
import React from "react";

function TransaksiAdd() {
  const [formValue, setformValue] = React.useState({
    id:"",
    idproduk: "",
    quantity: "",
    tanggal: "",
    hargatotal: "",
    id_karyawan: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async () => {
    // store the states in the form data
    const FormDataInput = new FormData();
    FormDataInput.append("id", formValue.id);
    FormDataInput.append("idproduk", formValue.idproduk);
    FormDataInput.append("quantity", formValue.quantity);
    FormDataInput.append("tanggal", formValue.tanggal);
    FormDataInput.append("hargatotal", formValue.hargatotal);
    FormDataInput.append("id_karyawan", formValue.id_karyawan);

    alert("Data berhasil disimpan");
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://localhost:7092/Transaksi/CreateTransaksi",
        data: FormDataInput,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Tambah Data Transaksi</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              placeholder="enter Id"
              value={formValue.id}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="idproduk"
              placeholder="enter ID Produk"
              value={formValue.idproduk}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="quantity"
              placeholder="enter Quantity"
              value={formValue.quantity}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="tanggal"
              placeholder="enter Tanggal"
              value={formValue.tanggal}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="hargatotal"
              placeholder="enter Hargatotal"
              value={formValue.hargatotal}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="id_karyawan"
              placeholder="enter ID Karyawan"
              value={formValue.id_karyawan}
              onChange={handleChange}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
}

    export default TransaksiAdd;
