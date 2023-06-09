import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const SearchPage = () => {
      const [traindata , settraindata] = useState([]);
      const handle_detail = async()=>{
        await fetch("http://localhost:8000/trains/getdetails/price" , {
          method: "GET",
          
        }).then((res)=> res.json()).then((res)=>{
          console.log(res?.data);
          settraindata(res?.data)
        }).catch((err)=>{
          console.log(err);
        })
      }
      useEffect(()=>{
            handle_detail();
      },[]);
  return (
    <div className="w-full h-screen bg-[#010024]">
      <div className='w-full text-center p-5 text-5xl text-white'>Train Details</div>
      <div className='flex w-full p-5 gap-5 md:justify-between justify-center  flex-wrap'>
        {
          traindata.map((value , idx) => (
            <Card data={value}/>
          ))
        }
      </div>
    </div>
  )
}

export default SearchPage