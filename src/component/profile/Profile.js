import React, { Component } from 'react';

import './Profile.css';

class Profile extends Component {
render() {
    return (
        <div className="card">
            <div className="container">
                <div className="Title">
                Profile
                </div>
                <div className="conten">
                <b>Belajar React Js</b>
                <br/>
                Membuat website sederhana dengan react JS
                </div>
                <br></br>
                <div>
                    <h3>BIODATA</h3>
                    <table>
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td>M Nasrullah Kamaludin</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>:</td>
                            <td>Kota Kediri</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>kamalnasrullah12az@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Institusi Pendidikan Terakhir</td>
                            <td>:</td>
                            <td>SMKN 1 KEDIRI</td>
                        </tr>
                        <tr>
                            <td>Cita - Cita</td>
                            <td>:</td>
                            <td>Saya ingin membanggakan kedua Orang Tua </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
    }
}
export default Profile;