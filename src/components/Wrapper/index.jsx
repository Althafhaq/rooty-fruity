import { useState } from "react";
import { When } from "react-if";
import LeftCard from "../LeftCard";
import Line from "../Line/line";
import RightCard from "../RightCard";
import "./wrapper.css";
import { predictAtom } from "../../recoil/atom/predictAtom";
import { useRecoilValue } from "recoil";

const Wrapper = () => {
    const predict = useRecoilValue(predictAtom);
    return (
       <div className="wrapper">
            <LeftCard data={predict.prediction} />
            <RightCard />
       </div>
    )
}

export default Wrapper;