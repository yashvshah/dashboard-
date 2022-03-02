import React from 'react'
import {
    MdAccountCircle,
    MdSupervisorAccount,
    MdSpeed,
    MdOutlinePayment,
  } from "react-icons/md";
  import { AiOutlineHistory } from "react-icons/ai";
  import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
  import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";

const Profile = () => {
  return (
    <>
    <div className="row grid-com">
      <div className="col-2 grid-left-com pt-5">
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
      <div className="col-10 grid-right-com">
          <h2 className='history'><MdSupervisorAccount />Profile</h2>
      </div>
    </div>
  </>
  )
}

export default Profile