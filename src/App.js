import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/menu/Menu";
import Home from "./component/home/Home";

import DataMahasiswa from "./component/master_data/Mahasiswa";
import DataMahasiswaAdd from './component/master_data/MahasiswaAdd'
import DataMahasiswaEdit from './component/master_data/MahasiswaEdit'
import DataMahasiswaDelete from './component/master_data/MahasiswaDelete'

import DataTrainer from "./component/master_data/Trainer";
import DataTrainerAdd from './component/master_data/TrainerAdd'
import DataTrainerDelete from './component/master_data/TrainerDelete'
import DataTrainerEdit from './component/master_data/TrainerEdit'



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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
