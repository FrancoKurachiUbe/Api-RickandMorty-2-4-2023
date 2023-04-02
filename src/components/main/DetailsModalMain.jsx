import React, { useContext } from 'react';
export default ({item,
                setOpenModalCard = false,
                handleCloseCard = null
    }) => {

    return(
        <>
        <div className='fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full'>

            <div className='fixed z-10 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-white  drop-shadow-2xl rounded-lg max-w-xl p-5'>
                <div className='grid justify-items-end mb-2'>
                    <button onClick={handleCloseCard} className=' px-4 py-2 rounded-lg border-slate-300 border hover:bg-red-600 hover:text-white'>X</button>
                </div>
                <div className='relative p-4 bg-slate-100 max-w-xs mx-auto rounded-md'>
                    <span className={`absolute top-2 right-2 text-white w-20 py-1 text-center rounded-md text-lg bg-${item.status === "Alive" ? 'green-600' : item.status === 'Dead' ? 'red-600' : 'black'}`}>
                        {item.status}
                    </span>
                    <img src={item.image} alt="" className='mx-auto'/>
                    <h2 className='text-center text-2xl'>{item.name}</h2>
                    <ul>
                        <li className='font-bold'>Estado: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.status}</span>
                        </li>
                        <li className='font-bold'>Especie: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.species}</span>
                        </li>
                        <li className='font-bold'>Tipo: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.type}</span>
                        </li>
                        <li className='font-bold'>Genero: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.gender}</span>
                        </li>
                        <li className='font-bold'>Origen: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.origin.name}</span>
                        </li>
                        <li className='font-bold'>Localizacion: 
                            <span className='italic font-light ml-2 text-gray-400'>{item.location.name}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}