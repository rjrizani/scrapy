import React from 'react';


const scaleNames = {
  j: 'Jumlah Mata Pelajaran',
  t: 'Total Biaya (Rupiah)'
};
//fungsi untuk logika matematika yang diterapkan
function toJumlah(Total) {
  return Total / 150000;
}

function toTotal(Jumlah) {
  return Jumlah * 150000;
}

function tryConvert(harga, convert) {
  const input = parseFloat(harga);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class HargaInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onHargaChange(e.target.value);
  }

  render() {
    const harga = this.props.harga;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>{scaleNames[scale]}:</legend>
        <input value={harga}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

//Lifting state up konsep di terapkan pada component Calculator
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleJumlahChange = this.handleJumlahChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.state = {harga: '', scale: 'j'};
  }

  handleJumlahChange(harga) {
    this.setState({scale: 'j', harga});
  }

  handleTotalChange(harga) {
    this.setState({scale: 't', harga});
  }

  render() {
    const scale = this.state.scale;
    const harga = this.state.harga;
    const Jumlah = scale === 't' ? tryConvert(harga, toJumlah) : harga;
    const Total = scale === 'j' ? tryConvert(harga, toTotal) : harga;

    return (
      <div className="App-body">
            <header >
            Kalkulator Biaya Kursus
            </header> <br/>
        <HargaInput
          scale="j"
          harga={Jumlah}
          onHargaChange={this.handleJumlahChange} />
        <HargaInput
          scale="t"
          harga={Total}
          onHargaChange={this.handleTotalChange} />
        <p> Biaya kursus dihitung dengan biaya Rp.150.000,00 per 3 kali pertemuan untuk 1 mata pelajaran</p>
      </div>
    );
  }
}

export default Calculator;
