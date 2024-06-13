import React, { useState, useEffect } from "react";
import "./Mahasiswa.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function DataKaryawan() {
  //define state
  const [datakaryawan, setDatakaryawan] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("https://localhost:7092/Karyawan/GetAllKaryawan");
    //get response data
    const data = await response.data;
    //assign response data to state "datamahasiswa"
    setDatakaryawan(data);
    console.log(data);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "nama_karyawan",
      selector: (row) => row.nama_karyawan,
      sortable: true,
    },
    {
        name: "tgl_lahir",
        selector: (row) => row.tgl_lahir,
        sortable: true,
    },
    {
        name: "jenis_kelamin",
        selector: (row) => row.jenis_kelamin,
        sortable: true,
    },
    {
        name: "alamat",
        selector: (row) => row.alamat,
        sortable: true,
    },
    {
        name: "noTlp",
        selector: (row) => row.noTlp,
        sortable: true,
    },
    {
      name: 'Ubah',
      selector: row => <Link to={"/datakaryawan_edit/"+row.id}
      className="btn btn-primary">Edit</Link>,
      sortable: true
    },
    {
      name: 'Hapus',
      selector: row => <Link to={"/datakaryawan_delete/"+row.id}
      className="btn btn-danger">Delete</Link>,
      sortable: true
    },
  ];
  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Data Karyawan</div>
        <div className="conten">
          <h2>Data Karyawan</h2>
          <Link to="/datakaryawan_add" className="btn btn-primary">+ Data Karyawan</Link>
          <DataTable columns={columns} data={datakaryawan.data} pagination />
        </div>
      </div>
    </div>
  );
}

export default DataKaryawan;
