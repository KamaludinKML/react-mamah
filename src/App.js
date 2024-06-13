import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/menu/Menu";
import Home from "./component/home/Home";

import DataMahasiswa from "./component/master_data/Mahasiswa";
import DataMahasiswaAdd from './component/master_data/MahasiswaAdd'
import DataMahasiswaEdit from './component/master_data/MahasiswaEdit'
import DataMahasiswaDelete from './component/master_data/MahasiswaDelete'


import DataProduk from "./component/master_data/Produk";
import DataProdukAdd from './component/master_data/ProdukAdd'
import DataProdukDelete from './component/master_data/ProdukDelete'
import DataProdukEdit from './component/master_data/ProdukEdit'

import DataTransaksi from "./component/master_data/Transaksi";
import DataTransaksiAdd from './component/master_data/TransaksiAdd'


import DataKaryawan from "./component/master_data/Karyawan";
import DataKaryawanAdd from './component/master_data/KaryawanAdd'
import DataKaryawanDelete from './component/master_data/KaryawanDelete'
import DataKaryawanEdit from './component/master_data/KaryawanEdit'

import DataUser from "./component/master_data/User";
import DataUserAdd from './component/master_data/UserAdd'
import DataUserDelete from './component/master_data/UserDelete'
import DataUserEdit from './component/master_data/UserEdit'





function App() {
  return (
    <Router basepath="./my-app">
      <div className="app-header">
        <Menu />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datamahasiswa" element={<DataMahasiswa />} />
          <Route path="/datatrainer" element={<DataTrainer />} />
          <Route path="/datamahasiswa_add" element={<DataMahasiswaAdd/>} />
          <Route path="/datamahasiswa_edit/:id" element={<DataMahasiswaEdit/>}/>
          <Route path="/datamahasiswa_delete/:id"element={<DataMahasiswaDelete/>} />
          <Route path="/datatrainer_add" element={<DataTrainerAdd/>} />
          <Route path="/datatrainer_delete/:id"element={<DataTrainerDelete/>} />
          <Route path="/datatrainer_edit/:id" element={<DataTrainerEdit/>}/>

          <Route path="/datatrainer_add" element={<DataTrainerAdd/>} />
          <Route path="/datatrainer_delete/:id"element={<DataTrainerDelete/>} />
          <Route path="/datatrainer_edit/:id" element={<DataTrainerEdit/>}/>

          <Route path="/datatrainer_add" element={<DataTrainerAdd/>} />
          <Route path="/datatrainer_delete/:id"element={<DataTrainerDelete/>} />
          <Route path="/datatrainer_edit/:id" element={<DataTrainerEdit/>}/>

          <Route path="/datatrainer_add" element={<DataTrainerAdd/>} />
          <Route path="/datatrainer_delete/:id"element={<DataTrainerDelete/>} />
          <Route path="/datatrainer_edit/:id" element={<DataTrainerEdit/>}/>

          <Route path="/datatrainer_add" element={<DataTrainerAdd/>} />
          <Route path="/datatrainer_delete/:id"element={<DataTrainerDelete/>} />
          <Route path="/datatrainer_edit/:id" element={<DataTrainerEdit/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
