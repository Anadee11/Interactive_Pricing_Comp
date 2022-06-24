import React from "react";
import check from "../assets/icon-check.svg";

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="itemList">
        <div className="item">
          <img src={check} alt="" />
          <p>Unlimited websites</p>
        </div>
        <div className="item">
          <img src={check} alt="" />
          <p>100% data ownership</p>
        </div>
        <div className="item">
          <img src={check} alt="" />
          <p>Email reports</p>
        </div>
      </div>
      <div className="bottom_btn">
        <button>Start my trial</button>
      </div>
    </div>
  );
};

export default Bottom;
