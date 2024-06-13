import "./Mahasiswa.css";
import axios from "axios";
import React from "react";

function UserAdd() {
  const [formValue, setformValue] = React.useState({
    id: "",
    namauser: "",
    username: "",
    role: "",
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
    FormDataInput.append("nama", formValue.nama);
    FormDataInput.append("username", formValue.username);
    FormDataInput.append("role", formValue.role);
    alert("Data berhasil disimpan");
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://localhost:7092/User/CreateUser",
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
        <div className="Titel">Tambah Data User</div>
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
              name="namauser"
              placeholder="Masukkan Nama user"
              value={formValue.namauser}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Masukkan username"
              value={formValue.username}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="role"
              placeholder="Masukkan Harga Satuan"
              value={formValue.role}
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

export default UserAdd;
