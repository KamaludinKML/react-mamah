import "./Mahasiswa.css";
import axios from "axios";
import React from "react";

function TrainerAdd() {
  const [formValue, setformValue] = React.useState({
    id:"",
    nama: "",
    email: "",
    password: "",
    nohp: "",
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
    FormDataInput.append("nama", formValue.nama);
    FormDataInput.append("email", formValue.email);
    FormDataInput.append("password", formValue.password);
    FormDataInput.append("nohp", formValue.nohp);

    alert("Data berhasil disimpan");
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://localhost:7278/api/Trainer",
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
        <div className="Titel">Tambah Data Trainer</div>
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
              name="nama"
              placeholder="enter a Nama"
              value={formValue.nama}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="email"
              placeholder="enter a Email"
              value={formValue.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="password"
              placeholder="enter a Password"
              value={formValue.password}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="nohp"
              placeholder="enter a Nohp"
              value={formValue.nohp}
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

    export default TrainerAdd;
