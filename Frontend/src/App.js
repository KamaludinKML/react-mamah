import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/menu/Menu";
import Home from "./component/home/Home";

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

          <Route path="/dataproduk" element={<DataProduk/>} />
          <Route path="/dataproduk_add" element={<DataProdukAdd/>} />
          <Route path="/dataproduk_delete/:id"element={<DataProdukDelete/>} />
          <Route path="/dataproduk_edit/:id" element={<DataProdukEdit/>}/>

          <Route path="/datatransaksi" element={<DataTransaksi/>} />
          <Route path="/datatransaksi_add" element={<DataTransaksiAdd/>} />
  
          <Route path="/datakaryawan" element={<DataKaryawan/>} />
          <Route path="/datakaryawan_add" element={<DataKaryawanAdd/>} />
          <Route path="/datakaryawan_delete/:id"element={<DataKaryawanDelete/>} />
          <Route path="/datakaryawan_edit/:id" element={<DataKaryawanEdit/>}/>

          <Route path="/datauser" element={<DataUser/>} />
          <Route path="/datauser_add" element={<DataUserAdd/>} />
          <Route path="/datauser_delete/:id"element={<DataUserDelete/>} />
          <Route path="/datauser_edit/:id" element={<DataUserEdit/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
