import "./leftcard.css";

const LeftCard = ({ data }) => {
    return (
        <>
            <div className="leftcard">
                <h1 className="title">Deteksi Jenis Pisang</h1>
                <div className="card_item">
                    {
                        data === "Pisang Cavendish" &&
                            <iframe title="cavendish" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_cavendish" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Ambon" &&
                            <iframe title="ambon" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_ambon_kuning" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Tanduk" &&
                            <iframe title="tanduk" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_tanduk" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Nangka" &&
                            <iframe title="nangka" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_nangka" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Susu" &&
                            <iframe title="susu" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_lampung" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Kepok" &&
                            <iframe title="kepok" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_kepok" frameborder="0"></iframe>
                    }
                    {
                        data === "Pisang Barangan" &&
                            <iframe title="barangan" height={700} width={600} src="https://id.wikipedia.org/wiki/Pisang_barangan" frameborder="0"></iframe>
                    }
                </div>
            </div>
        </>
    )
}

export default LeftCard;