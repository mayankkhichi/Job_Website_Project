import { useState } from "react";
import style from "./Card.module.css";
import { AiFillAmazonSquare } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
export default function Card() {
  const companyName = "Bajaj Allianz Insurance Company Limited";
  const jobRole = "Team Manager";
  const jobType = "Work from Home";
  const jobTIme = "Full time";
  const textRequire = "No test required";

  const [urgently, setUrgently] = useState(true);
  const [fastHrReply, setFastHr] = useState(true);
  const [wfh, setWFH] = useState(true);
  return (
    <div className={`${style.card} shadow-xl`}>
      <div
        className={`d-flex align-items-center justify-content-between ${style.header}`}
      >
        <div className={style.icons}>
          <AiFillAmazonSquare size={40} />
        </div>
        <div className={style.company}>
          <h1 className="fs-4">{jobRole}</h1>
          <p className="fs-6 mb-0">{companyName}</p>
        </div>
        <div>
          <button className={style.closeButton}>
            <SlArrowRight />
          </button>
        </div>
      </div>
      <div className={"d-flex align-items-center mt-2"}>
        {wfh ? <MdHomeFilled size={20} /> : <IoIosBusiness size={20} />}
        <p className="ps-2 mb-0 fs-6">{jobType}</p>
      </div>
      <div className={`d-flex align-items-center ${style.salary}`}>
        <FaWallet className="me-2 mt-1" />
        <p className="mb-0 mt-1">₹19,000 - ₹41,500</p>
      </div>
      <div className={style.time}>
        <p1>{jobTIme}</p1>
        <p2>{textRequire}</p2>
      </div>
      <div className={style.extra}>
        <p1>Urgently hiring</p1>
        <p2>Fast HR reply</p2>
      </div>
    </div>
  );
}
