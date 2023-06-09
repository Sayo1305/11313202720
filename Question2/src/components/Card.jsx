import React from 'react'

const Card = ({data}) => {
      console.log(data)
  return (
    <div  className='w-[400px] p-5 h-[300px] gap-5 rounded-md bg-blue-800 flex flex-col shadow-lg'>
      <div className='w-full text-5xl text-center text-white font-semibold'>
            {data?.trainName}
      </div>
      <div className='w-full text-center font-semibold '>Train Number: {data?.trainNumber}</div>
      <div className='flex w-full'>
        Seat Available : 
        <div>
        <div>AC: {data?.seatsAvailable?.AC}</div>
            <div>sleeper: {data?.seatsAvailable?.sleeper}</div>
        </div>
            
      </div>
      <div>
        <div>Deaparture Time : </div>
        <div className='flex gap-5'>
        <div>{data?.departureTime?.Hours}Hour</div>
        <div>{data?.departureTime?.Minutes}Minutes</div>
        <div>{data?.departureTime?.Seconds}Seconds</div>
        </div>
        
      </div>
    </div>
  )
}

export default Card