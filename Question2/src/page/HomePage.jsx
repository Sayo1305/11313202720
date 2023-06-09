import React from 'react'
import BG from "../../src/assets/train.jpg";
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex h-screen bg-[#010024]">
          <div className="w-1/2 h-screen flex flex-col gap-5 justify-center items-center p-5">
        <div className="w-full text-center text-5xl font-semibold text-white">Get Latest Update about the Trains, On your Hands</div>
        <div className="text-center font-medium text-white text-2xl">Know How? Click below</div>
        <div onClick={()=>{navigate('/train')}} className="p-2 bg-[#47b806] border border-black text-3xl cursor-pointer rounded-md font-semibold">Let's Go</div>
      </div>
      <div className="w-1/2 h-screen">
        <img src={BG} alt="" className="w-full h-full bg-cover"/>
      </div>
    </div>
  )
}

export default HomePage