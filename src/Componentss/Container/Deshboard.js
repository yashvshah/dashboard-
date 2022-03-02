import React from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdSpeed,
  MdOutlinePayment,
} from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";

const Deshboard = () => {
  return (
    <>
      <div class="row grid-com">
        <div class="col-xs-6 col-sm-4 col-lg-2 grid-left-com pt-5">
          <MdAccountCircle size={120} />
          <h2>Owner Name</h2>
          <p>owner@gmail.com</p>
          <hr />
          <p>
            <MdSpeed />
            Deshboard
          </p>
          <p>
            <MdSupervisorAccount />
            My profile
          </p>
          <p>
            <AiOutlineHistory />
            History
          </p>
          <p>
            <IoMdAddCircle />
            Add Station
          </p>
          <p>
            <MdOutlinePayment />
            Payment
          </p>
          <p>
            <HiLocationMarker />
            My Location
          </p>
          <p>
            <IoMdHelpCircle />
            Help
          </p>
          <hr />
          <button class="btn btn-success">
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-xs-6 col-sm-8 col-lg-10 grid-right-com">
          <div className="row row-cols-2 m-5">
            <div className="col-xs-7 col-sm-6 col-lg-8 box"></div>
            <div className="col-xs-5 col-sm-6 col-lg-4 box"></div>
            <div className="col-xs-7 col-sm-6 col-lg-8 box"></div>
            <div className="col-xs-5 col-sm-6 col-lg-4 box"></div>
          </div>
        </div>
      </div>
      <div>
          <button type="button" className="btn btn-success position-absolute top-0 end-0"><IoMdAddCircle />Add Station</button>
      </div>
    </>
  );
};

export default Deshboard;
