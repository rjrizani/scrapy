import React from 'react';

//Controlled Components form diterapkan disini ditandai dengan pengaturan state
//constructor
//fungsi bind(this) agar referensi nilai tidak berubah saat dieksekusi.
//fungsi handleSubmit() berguna untuk menerima submit form dan meneksekusi logika didalamnya
//berupa alert data form
//fungsi handleInputChange() untuk mengubah state awal yang diterima dan diinput oleh user.
//preventDefault berfungsi mencegah terrefresnya brosur ketika data disubmit
export default class Registrasi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nama: '',
            NomorWa: '',
            Umur: 4,
            Alamat: 'tulis alamatnya yah',
            Sosial: '',
            Wali: '',
            NoWali: ''
        };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  
     handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'xx' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
           [name]: value});
     }
  
     handleSubmit(event) {
        alert('Nama: ' + this.state.Nama +
        '   Nomor Wa: ' + this.state.NomorWa +
        '   Umur: ' + this.state.Umur +
        '   Alamat: ' + this.state.Alamat +
        '  Pendidikan: ' + this.state.Pendidikan +
        '  IG/FB: ' + this.state.Sosial +
        '  Nama Wali: ' + this.state.Wali +
        '  Nomor Wali: ' + this.state.NoWali 
        );
        
        event.preventDefault();
        }

    render() {
        return (
            <div className="App-body" >

            <header > <br/>
                <h1>Registrasi Form</h1>
            </header> 

             <form className="App-body" onSubmit={this.handleSubmit}>
                Nama: 
                <input type="text" name="Nama" value={this.state.Nama} onChange={this.handleInputChange} /> 
                Nomor HP/WA: 
                <input type="text" name="NomorWa" value={this.state.NomorWa} onChange={this.handleInputChange} /> 
                Umur(Tahun): 
                <input type="number" name="Umur" value={this.state.Umur} onChange={this.handleInputChange} /> 
                Alamat: 
                <textarea name="Alamat" value={this.state.Alamat} onChange={this.handleInputChange} /> 
                Pendidikan: 
                <select name="Pendidikan" value={this.state.Pendidikan} onChange={this.handleInputChange}> 
                    <option pendidikan="SMA">SMA</option>
                    <option pendidikan="SMP">SMP</option>
                    <option pendidikan="SD">SD</option>
                </select>
                Akun media sosial (Instagram/Facebook): 
                <input type="type" name="Sosial" value={this.state.Sosial} onChange={this.handleInputChange} /> 
                Nama Orang Tua/Wali: 
                <input type="text" name="Wali" value={this.state.Wali} onChange={this.handleInputChange} /> 
                Nomor Orang Tua/Wali: 
                <input type="text" name="NoWali" value={this.state.NoWali} onChange={this.handleInputChange}/> <br/>
                <input type="submit" value="Submit" />
             </form><br/>  
            </div>
        )
    }
    
}
