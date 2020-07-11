import React from 'react';

class Home extends React.Component {
  
  render() {
     return (
        <div>
           <Header/>
           <Content/>
        </div>
     );
  }
}
class Header extends React.Component {
  render() {
     return (
        <div className="header">
        <h1> Home</h1> 
        
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
    const judul = ("Masterscrapy adalah layanan kursus online yang berbasis pada pendekatan konsultasi. Mengapa belajar dimasterscarpy:");
    const mamfaat = ["Bisa belajar dimana saja dan kapan saja.", 
                      "Sistem belajar online bukan cuma mendengarkan saja", 
                      "Konsep konsultasi yang membuat siswa berpikir kritis", 
                      "Pengajar profesional dari S1-S2.", 
                      "Kursus bisa online dan offline."];
    
    const listItems = mamfaat.map((faat) => <li key={faat}>{faat}</li>);

     return (
        <div className="App-body">
        <h2>{judul}</h2> 
      
        <ul>{listItems}</ul>
            <h2>Program Rahasia Pintar</h2>
            <button>SMA</button> <br/>
            <button>SMP</button> <br/>
            <button>SD</button>  <br/>
        </div>
     );
  }
}

export default Home;
