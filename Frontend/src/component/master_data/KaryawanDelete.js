import "./Mahasiswa.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function KaryawanDelete() {
  const { id } = useParams();
  //define state
  // Define state
  const [karyawan, setKaryawan] = useState({
    id: "",
    nama_karyawan: "",
    tgl_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    noTlp: "",
  });

  //useEffect hook
  React.useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    try {
      //fetching
      const response = await axios.get(
        `https://localhost:7092/Karyawan/GetByIdKaryawan?id=${id}`
      );
      //get response data
      // Get response data
      const data = await response.data;
      const dataid = data[0].id;
      const datanama = data[0].nama;
      const dataemail = data[0].email;
      const datapassword = data[0].password;
      const datanohp = data[0].nohp;

      // Assign response data to state "karyawan"
      setKaryawan({
        id: dataid,
        nama: datanama,
        email: dataemail,
        password: datapassword,
        nohp: datanohp,
      });
    } catch (error) {
      console.log(error);
      alert("Data tidak ditemukan atau sudah dihapus!");
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // make axios post request
      await axios.delete(
        `https://localhost:7092/Karyawan/DeleteKaryawan?id=${id}`
      );
      // Redirect back to the master data after successful deletion
      window.location.href = "/datakaryawan";

      alert("Data berhasil dihapus");
    } catch (error) {
      console.error(error);
      alert("Error deleting data");
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Hapus Data Karyawan {id}</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
            <p>yakin</p>
            <button type="submit" className="btn btn-danger">
              Hapus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KaryawanDelete;
