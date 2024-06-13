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
    const response = await axios.get("https://localhost:7278/api/Transaksi");
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
      name: "ID Produk",
      selector: (row) => row.idproduk,
      sortable: true,
    },
    {
        name: "Quantity",
        selector: (row) => row.quantity,
        sortable: true,
    },
    {
        name: "Tanggal",
        selector: (row) => row.tanggal,
        sortable: true,
    },
    {
        name: "Harga Total",
        selector: (row) => row.hargatotal,
        sortable: true,
    },
    {
        name: "ID Karyawan",
        selector: (row) => row.idkaryawan,
        sortable: true,
    },
    {
      name: 'Ubah',
      selector: row => <Link to={"/datatransaksi_edit/"+row.id}
      className="btn btn-primary">Edit</Link>,
      sortable: true
    },
    {
      name: 'Hapus',
      selector: row => <Link to={"/datatransaksi_delete/"+row.id}
      className="btn btn-danger">Delete</Link>,
      sortable: true
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
