import "./line.css";
import { IoIosArrowBack } from "react-icons/io";

  const Line = ({ top, width, transform, title }) => {

    return (
      <>
        <div className="line" style={{ top, width, transform }}>
        <div className="arrow-icon">
          <IoIosArrowBack className="arrow" />
          <span>{title}</span>
        </div>
        </div>
      </>
    )
 }

 export default Line;