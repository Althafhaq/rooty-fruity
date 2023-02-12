import "./uploadcard.css";
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { predictAtom } from "../../recoil/atom/predictAtom";
import { When } from "react-if";

const UploadCard = ({props, predict}) => {
    const [ upload, setUpload ] =  useState(false);
    const hiddenFileInput = React.useRef(null);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [data, setData] = useState("");
    const [_, setPredict] = useRecoilState(predictAtom);
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      setUpload(true);
      const fileUploaded = event.target.files[0];
      props.handleFile(fileUploaded);
    };

    const handleSubmit = async(event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const response = await axios({
          method: "post",
          url: "https://rooty-api-7men-master-yddj7bfthq-wm.a.run.app/predict",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        setPredict(response.data);
       
      } catch(error) {
        console.log(error)
      } 
    }

    const handleFileSelect = (event) =>{
      setUpload(true);
      setSelectedFile(event.target.files[0])
    }

    return (
        <div className="card" style={ upload? {background : "#05eb46"}: {background: "#C7C89A"}}>
            <img className="img-upload-card" src={selectedFile === null ? "./images/picture.svg" : URL.createObjectURL(selectedFile)} alt="" />
            <div className="btn-group"> 
              <button onClick={handleClick} className="btn-upload">Upload Gambar</button>
              <form onSubmit={handleSubmit} className="form">
                <input type="file"
                    ref={hiddenFileInput}
                    onChange={handleFileSelect}
                    style={{display:'none'}} 
                />
                <button type="submit" className="btn-submit">Deteksi Gambar</button>
              </form>
            </div>
        </div>
    )
}

export default UploadCard;