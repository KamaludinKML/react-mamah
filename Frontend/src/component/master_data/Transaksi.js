import React, { useState, useEffect } from "react";
import "./Mahasiswa.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function DataTransaksi() {
  //define state
  const [datatransaksi, setDatatransaksi] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("https://localhost:7092/Transaksi/GetAllTransaksi");
    //get response data
    const data = await response.data;
    //assign response data to state "datamahasiswa"
    setDatatransaksi(data);
    console.log(data);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nama Produk",
      selector: (row) => row.namaproduk,
      sortable: true,
    },
    {
        name: "Quantity",
        selector: (row) => row.quantity,
        sortable: true,
    },
    {
      name: "Tanggal",
      selector: (row) => new Date(row.tanggal).toLocaleDateString(),
      sortable: true,
    },
    {
        name: "Harga Total",
        selector: (row) => row.hargatotal,
        sortable: true,
    },
    {
        name: "Nama Karyawan",
        selector: (row) => row.nama_karyawan,
        sortable: true,
    },
  ];
  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Data Transaksi</div>
        <div className="conten">
          <h2>Data Transaksi</h2>
          <Link to="/datatransaksi_add" className="btn btn-primary">+ Data Transaksi</Link>
          <DataTable columns={columns} data={datatransaksi.data} pagination />
        </div>
      </div>
    </div>
  );
}

export default DataTransaksi;
