import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='col d-flex headerCol '>

      </div>
      <div className='col d-flex flex-row'>
      <div className='compareProductsCol col d-flex justify-content-start pt-5 pb-5'>
        <button className='btn btn-primary btn-lg compareProductsBtn'>Piyasadaki Sutleri Karsilastir</button></div>
        <div className='compareProductsCol col d-flex pt-5 pb-5'>
        <button className='btn btn-primary btn-lg compareProductsBtn'>Diyet Recetesi Siparis Et</button></div>
        <div className='compareProductsCol col d-flex pt-5 pb-5'>
        <button className='btn btn-primary btn-lg compareProductsBtn'>Saglik Kalitesi En Yuksek Urunler</button></div>
      </div>
      
      <container className="Testcontainer d-flex flex-wrap justify-content-around align-items-center  pt-5 pb-5">
        <div className='col d-flex placeholderCol h-100'></div>
        <div className='col productContainerCol m-2'>
      <div className='col productCol d-flex justify-content-center align-items-center p-0 m-0'>
      <img src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00070600000083/a252ca429b71dd9396ee1db6fcd8ea8b_large.png&width=256&type=webp&quality=80' width={'250px'} height={'175px'}/>
      </div>
      <ul className='list-group'>
      <li className='list-group-item productName'>Urun Ismi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Son Kullanma Tarihi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Kalori</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Karbonhidrat</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Protein</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Sugar</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Doymus Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Trans Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>GDO</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Hibrit mi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Bir İnsanın İçebileceği Miktar</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bulunma Miktarı</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bozulma Suresi</li>
        </ul>
      </div>
      <div className='col productContainerCol m-2'>
      <div className='col productCol2 d-flex justify-content-center align-items-center p-0 m-0'>
      <img src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00079403000146/8990ffd8367e02f66f34b67d99d6044b_40711547-02cc-4491-b323-8ace00e5c0de_large.png&width=256&type=webp&quality=80' width={'250px'} height={'175px'}/>
      </div>
      <ul className='list-group'>
      <li className='list-group-item productName'>Urun Ismi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Son Kullanma Tarihi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Kalori</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Karbonhidrat</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Protein</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Sugar</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Doymus Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Trans Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>GDO</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Hibrit mi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Bir İnsanın İçebileceği Miktar</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bulunma Miktarı</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bozulma Suresi</li>
        </ul>
      </div>
      <div className='col productContainerCol m-2'>
      <div className='col productCol3 d-flex justify-content-center align-items-center p-0 m-0'>
      <img src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00041383090103/a3242a5f9b814180ded8f8d818f69a42_large.png&width=256&type=webp&quality=80' width={'250px'} height={'175px'}/>
      </div>
      <ul className='list-group'>
        <li className='list-group-item productName'>Urun Ismi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Son Kullanma Tarihi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Kalori</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Karbonhidrat</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Protein</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Sugar</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Doymus Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Trans Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>GDO</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Hibrit mi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Bir İnsanın İçebileceği Miktar</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bulunma Miktarı</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bozulma Suresi</li>
      </ul>
      </div>
      <div className='col productContainerCol m-2'>
      <div className='col productCol3 d-flex justify-content-center align-items-center p-0 m-0'>
      <img src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00041383090103/a3242a5f9b814180ded8f8d818f69a42_large.png&width=256&type=webp&quality=80' width={'250px'} height={'175px'}/>
      </div>
      <ul className='list-group'>
      <li className='list-group-item productName'>Urun Ismi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Son Kullanma Tarihi</li>
      <li className='d-flex justify-content-start list-group-item productInfo'>Kalori</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Karbonhidrat</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Protein</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Sugar</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Doymus Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Trans Yağ</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>GDO</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Hibrit mi</li>
        <li className='d-flex justify-content-start list-group-item productInfo'>Bir İnsanın İçebileceği Miktar</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bulunma Miktarı</li>
        <li className='d-flex justify-content-start list-group-item last-group-item productInfo'>Doğada Bozulma Suresi</li>
        </ul>
      </div>
      <div className='col d-flex placeholderCol'></div>
      </container>
      
    </div>
    
     
    
  );
}

export default App;
