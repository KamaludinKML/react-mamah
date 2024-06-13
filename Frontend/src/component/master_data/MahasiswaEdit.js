import "./Mahasiswa.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MahasiswaEdit() {
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    mhs_nim: "",
    mhs_name: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7278/api/Mahasiswa/MahasiswaByNim?mhs_nim=${id}`
      );
      const data = await response.data;
      const datamhs_nim = data[0].mhs_nim;
      const datamhs_name = data[0].mhs_name;

      setFormValue({
        mhs_nim: datamhs_nim,
        mhs_name: datamhs_name,
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
        `https://localhost:7278/api/Mahasiswa/Update?mhs_nim=${id}`, // Ganti dengan endpoint yang sesuai untuk menyimpan perubahan
        formValue, // Gunakan formValue langsung sebagai data yang akan dikirim
      );

      // Redirect kembali ke halaman master data setelah perubahan berhasil disimpan
      window.location.href = "/datamahasiswa";

      alert("Data berhasil diubah");
    } catch (error) {
      console.error(error);
      alert("Error saat mengubah data");
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="title">Edit Data Mahasiswa {id}</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="mhs_nim"
              placeholder="Enter NIM"
              value={formValue.mhs_nim}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="mhs_name"
              placeholder="Enter Nama"
              value={formValue.mhs_name}
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


export default MahasiswaEdit;
