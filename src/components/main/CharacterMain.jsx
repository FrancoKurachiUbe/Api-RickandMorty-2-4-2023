import { useContext, useEffect, useState } from 'react'
import DetailsModalMain from '@/components/main/DetailsModalMain'
import indexCharacterMain from '@/components/main/indexCharacterMain'

export default ({item, handleOpenCard}) => {
  
  return(
    <>
      <a className='rounded-xl bg-white drop-shadow-2xl hover:bg-[#a5f3fc]'onClick={() => handleOpenCard(item)}>
        <div className='relative px-3 py-3'>
            <img className='rounded-full mx-auto' src={item.image} alt="" />
            <h2 className='font-bold text-center text-xl font-serif'>{item.name}</h2>
            
            <span className={`absolute top-2 right-2 text-white w-20 py-1 text-center rounded-md text-lg 
            ${item.status === "Alive" ? 'bg-green-600' :
              item.status === 'Dead' ? 'bg-red-600' :
              'bg-black'}`}>
            {item.status}</span>
        </div>
      </a>        
    </>
  )
}
