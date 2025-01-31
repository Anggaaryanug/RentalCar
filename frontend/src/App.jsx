import Home from "./pages/Home";
import Kontak from "./pages/Kontak";
import Armada from "./pages/Armada";
import TentangKami from "./pages/TentangKami";
import HomePage from "./pages/AfterLogin/HomePage";
import DetailPesanan from "./pages/AfterLogin/DetailPesanan";
import MetodePembayaran from "./pages/AfterLogin/MetodePembayaran";
import HutanPinus from "./pages/AfterLogin/HutanPinus";
import Woodland from "./pages/AfterLogin/Woodland";
import TelagaBiru from "./pages/AfterLogin/TelagaBiru";
import PondokCai from "./pages/AfterLogin/PondokCai";
import EditAkun from "./pages/AfterLogin/EditAkun";
import Order from "./pages/AfterLogin/Order";
import Pembayaran from "./pages/AfterLogin/Pembayaran";
import DetailOrder from "./pages/AfterLogin/DetailOrder";
import RegisterPage from "./pages/RegisterPage";
import PesananSaya from "./pages/AfterLogin/PesananSaya";
import InformasiAkun from "./pages/AfterLogin/InformasiAkun";
import TentangKamiLogin from "./pages/AfterLogin/TentangKamiLogin";
import KontakLogin from "./pages/AfterLogin/Kontak";
import ArmadaLogin from "./pages/AfterLogin/ArmadaLogin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Kontak' Component={Kontak} />
          <Route path='/Armada' Component={Armada} />
          <Route path='/TentangKami' Component={TentangKami} />
          <Route path='/Sign' Component={RegisterPage} />
          <Route path='/HomePage' Component={HomePage} />
          <Route path='/Order' Component={Order} />
          <Route path='/Order/:id' Component={DetailOrder} />
          <Route path='/Detail/:no_transaksi' Component={DetailPesanan} />
          <Route path='/MetodePembayaran/:no_transaksi' Component={MetodePembayaran} />
          <Route path='/Pembayaran' Component={Pembayaran} />
          <Route path='/HutanPinus' Component={HutanPinus} />
          <Route path='/Woodland' Component={Woodland} />
          <Route path='/TelagaBiru' Component={TelagaBiru} />
          <Route path='/PondokCai' Component={PondokCai} />
          <Route path='/EditAkun' Component={EditAkun} />
          <Route path='/PesananSaya' Component={PesananSaya} />
          <Route path='/InformasiAkun' Component={InformasiAkun} />
          <Route path='TentangKamiLogin' Component={TentangKamiLogin}/>
          <Route path='ArmadaLogin' Component={ArmadaLogin}/>
          <Route path='KontakLogin' Component={KontakLogin}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
