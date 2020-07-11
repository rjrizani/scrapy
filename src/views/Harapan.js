import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrementAsync } from './actions';


export default function Harapan() {
    //Lifecycle methond dengan menggunakan useEffect function yang berguna seperti componentDidMount 
    //untuk auto turun kebawah page.
    // useEffect(()=>{
    // window.scrollTo(0,window.innerHeight,'smooth');
    // },[]);

    //fungsi useEffect digunakan seperti konsep lifecylce ketika masuk ke page Harapan title berubah
    //ketika keluar dari page harapan title kembali ke awal.
    //side effect hook
    useEffect(()=>{
      document.title = `Motivasi Positif: ${counter}`;
      return () =>{
        document.title = `Rahasia Pintar`; }
    });
 
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const _add = () => {
        dispatch(incrementAsync());
    }

    const _substract = () => {
        dispatch(decrementAsync());
    }

  return (
    <div className="App-body">
        <header > <br/>
        Pemberi Harapan 
        </header> <br/>
        <textarea style={{width: '300px',height: '100px'}} type="text" placeholder="Ketik harapanmu disini" /> <br/>
      <div>Jumlah Pemberi Harapan: {counter}</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button style={{ width: 100 }} onClick={_substract}>Substract</button>
        <button style={{ width: 100 }} onClick={_add}>Add</button>
      </div>
      <h3>Bahaya Putus Asa dan Manfaat Menjaga Harapan</h3> 
      <p style={{paddingRight: '80px'}}>
      HARAPAN adalah sinar terang yang membelah gelapnya cobaan. 
      Harapan adalah pembimbing yang cerdas dalam pekatnya kesulitan, 
      ilmu yang menjadi petunjuk dalam sulitnya permasalahan, 
      penguasa perkasa yang mendorong tekad saat terjadi penurunan dan
       pendongkrak semangat saat terjadi stagnasi. <br/>

Sebaliknya, putus asa adalah penyakit mematikan bagi jiwa manusia. 
Putus asa adalah penyakit yang paling gigih dilawan oleh syariat islam, 
karena hidup adalah gerak dan dinamika. Antusias adalah kudanya. Ia adalah kendaraan 
cita-cita untuk meraih keluhuran dalam berbagai bidang kehidupan. Sementara putus asa 
adalah musuh bebuyutan yang akan melemahkan tekad, menghentikan langkah dan meniadakan harapan.
(https://www.islampos.com/bahaya-putus-asa-dan-manfaat-menjaga-harapan-35339/) 
<br/>
Sehingga penting bagi kita untuk memiliki harapan untuk memotivasi diri untuk terus berkarya dan berkembang
kearah yang positif.
      </p>
    </div>
  );
}



