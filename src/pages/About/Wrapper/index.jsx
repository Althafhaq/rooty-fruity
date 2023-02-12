import LeftCard from "../../../components/LeftCard";
import RightCard from "../../../components/RightCard";
import Profile from "./Profile";
import "./wrapper.css";

const Wrapper = () => {
    return (
       <div className="wrapper">
            {/* <div className="title-about">
                <img src="/images/bananas.png" alt="" />
            </div> */}
            <div className="detail">
                <div>
                    <p className="detail-about">Tujuan Dari RuotyFruity adalah</p>
                    <p className="detail-text">tujuannya dibuat website ini adalah untuk membantu para petani  
                        buah dalam mengindentifikasi buah pisang apakah buah ini masih 
                        segar atau sudah membusuk sehingga memudahkan dan mempercepat
                        pekerjaan para petani.</p>
                </div>
                <div className="about-us">
                    <p className="detail-about">Tentang Saya</p>
                </div>
                <Profile />
            </div>
       </div>
    )
}

export default Wrapper;