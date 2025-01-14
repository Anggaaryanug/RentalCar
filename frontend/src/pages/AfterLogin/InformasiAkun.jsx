
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "../../css/AfterLogin/InformasiAkun.css";
import Header from "../../components/NavBarAfterLogin";

function InformasiAkun() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no_telp, setNomor_hp] = useState("");

  useEffect(() => {
    const initializeData = async () => {
      await refreshToken();
    };

    initializeData();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", { withCredentials: true });
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setNomor_hp(decoded.no_telp);

    } catch (error) {
      console.log(error);
    }
  };

 
    

  return (
    <>
      <Header />
      <main id='main'>
        <div className='info-akun-hero container'>
          <div className='column1'>
            <div className='photo'>
              <img src='assets/img/profil.png' alt='' />
            </div>
            <div className='text mt-4'>
              <h3 className=''>{name} </h3>
            </div>
          </div>

          <div className='column2 mt-4 ms-5'>
            <div className='photo'>
              <button type='submit' className='buttonEdit'>
                Edit
              </button>
            </div>
            <div className='text'>
              <button type='submit' className='buttonKeluar'>
                Keluar
              </button>
            </div>
          </div>
        </div>

        <section className='info-akun container'>
          <div className='card p-4 fw-bold'>
            <h2 className='card-tittle text-center mt-3'>Edit Informasi Akun</h2>
            <div className='card-body p-3 col-8'>
              <form action='' className='form mt-3'>
                <div className='colomn1'>
                  <h4>Nama Pengguna</h4>
                  <label htmlFor="" type='text'>{name}</label>
                  <h4>Tanggal Lahir</h4>
                  <label type='date' />
                  <h4>Email</h4>
                  <label htmlFor="" type='text'>{email}</label>
                </div>

                <div className='colomn2'>
                  <h4>Nomor Telepon</h4>
                  <label type='text'>{no_telp}</label>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default InformasiAkun;
