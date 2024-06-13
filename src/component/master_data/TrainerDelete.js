import "./Mahasiswa.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function TrainerDelete() {
  const { id } = useParams();
  //define state
 // Define state
 const [trainer, setTrainer] = useState({
    id: "",
    nama: "",
    email: "",
    password: "",
    nohp: "",
    status: "",
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
        `https://localhost:7278/api/Trainer/TrainerByNim?id=${id}`
      );
      //get response data
      // Get response data
      const data = await response.data;
      const dataid = data[0].id;
      const datanama = data[0].nama;
      const dataemail = data[0].email;
      const datapassword = data[0].password;
      const datanohp = data[0].nohp;
    

      // Assign response data to state "trainer"
      setTrainer({
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
      await axios.delete(`https://localhost:7278/api/Trainer/Delete?id=${id}`);
      // Redirect back to the master data after successful deletion
      window.location.href = "/datatrainer";

      alert("Data berhasil dihapus");
    } catch (error) {
      console.error(error);
      alert("Error deleting data");
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Hapus Data Trainer {id}</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="id"
              placeholder={`ID:${trainer.id}`}
              readOnly
            />
            <br />
            <br />
            <input
              type="text"
              name="nama"
              placeholder={`NAMA: ${trainer.nama}`}
              readOnly
            />
            <br />
            <br />
            <input
              type="text"
              name="email"
              placeholder={`EMAIL: ${trainer.email}`}
              readOnly
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder={`PASSWORD: ${trainer.password}`}
              readOnly
            />
            <br />
            <br />
            <input
              type="text"
              name="nohp"
              placeholder={`NO HP: ${trainer.nohp}`}
              readOnly
            />
            <br />
            <br />
            <button type="submit" className="btn btn-danger">
              Hapus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrainerDelete;
