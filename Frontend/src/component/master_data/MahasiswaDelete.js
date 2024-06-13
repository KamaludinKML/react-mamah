import "./Mahasiswa.css";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
function MahasiswaDelete() {
  const { id } = useParams();
  const [formValue, setformValue] = React.useState({
    mhs_nim: "",
    mhs_name: "",
  });
  React.useEffect(() => {
    fectData();
  }, []);
  const fectData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7278/api/Mahasiswa/MahasiswaByNim?mhs_nim=" + id
      );
      const data = await response.data;
      const datanim = data[0].mhs_nim;
      const datanama = data[0].mhs_name;

      setformValue({
        mhs_nim: datanim,
        mhs_name: datanama,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Data tidak ditemukan atau sudah dihapus!");
    }
  };
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const FormDataInput = new FormData();
    FormDataInput.append("mhs_nim", formValue.mhs_nim);
    FormDataInput.append("mhs_name", formValue.mhs_name);
    alert("Data berhasil dihapus");
    try {
      const response = await axios({
        method: "delete",
        url: "https://localhost:7278/api/Mahasiswa/Delete?mhs_nim=" + id,
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = "/datamahasiswa";
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div className="card">
      <div className="container">
        <div className="Titel">Hapus Data Mahasiswa {id}</div>
        <div className="conten">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="mhs_nim"
              placeholder="enter NIM"
              value={formValue.mhs_nim}
              onChange={handleChange}
              readOnly
            />
            <br />
            <br />
            <input
              type="text"
              name="mhs_name"
              placeholder="enter a Nama"
              value={formValue.mhs_name}
              onChange={handleChange}
              readOnly
            />
            <br />
            <br />
            <button type="submit" className="btn btn-danger">
              {" "}
              Hapus
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default MahasiswaDelete;
