import React, { useState, useEffect } from "react";
import "./Mahasiswa.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataMahasiswa() {
  //define state
  const [datamahasiswa, setDatamahasiswa] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);
  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get("https://localhost:7278/api/Mahasiswa");
    //get response data
    const data = await response.data;
    //assign response data to state "datamahasiswa"
    setDatamahasiswa(data);
    console.log(data);
  };

  const columns = [
    {
      name: "Nim",
      selector: (row) => row.mhs_nim,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row) => row.mhs_name,
      sortable: true,
    },
    {
      name: "Ubaah",
      selector: (row) => (
        <Link
          to={"/datamahasiswa_edit/" + row.mhs_nim}
          className="btn btn-primary"
        >
          Edit
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Hapus",
      selector: (row) => (
        <Link
          to={"/datamahasiswa_delete/" + row.mhs_nim}
          className="btn btn-danger"
        >
          Delete
        </Link>
      ),
      sortable: true,
    },
  ];
  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Data Mahasiswa</div>
        <div className="conten">
          <h2>Data Mahasiswa</h2>
          <Link to="/datamahasiswa_add" className="btn btn-primary">
            + Data Mahasiswa
          </Link>
          <DataTable columns={columns} data={datamahasiswa.data} pagination />
        </div>
      </div>
    </div>
  );
}

export default DataMahasiswa;
