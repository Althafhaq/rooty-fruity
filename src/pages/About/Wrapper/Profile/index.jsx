import "./profile.css";

const Profile = () => {
    return (
       <div className="profile-card">
            <div className="profile-container">
                <img className="profile-image" src="/images/profile.png" alt="" />
            </div>
            <div className="profile-section">
                <table>
                    <tr>
                        <td>Nama</td>
                        <td>: Althaf Haq</td>
                    </tr>
                    <tr>
                        <td>Universitas</td>
                        <td>: Bina Insani University</td>
                    </tr>
                    <tr>
                        <td>Jurusan</td>
                        <td>: Teknik Informatika</td>
                    </tr>
                    <tr>
                        <td>Kata Motivasi</td>
                        <td>: "Jadikan kegagalanmu sebagai batu loncatan untuk bisa menggapai hal yang lebih tinggi dan tetaplah berada di jalan setan "</td>
                    </tr>
                </table>
            </div>
       </div>
    )
}

export default Profile;