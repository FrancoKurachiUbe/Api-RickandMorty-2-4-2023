import ArrowLeft from '@/components/icons/ArrowLeft'
import ArrowRight from '@/components/icons/ArrowRight'

export default  ({arrowLeft, arrowRight, currentPage}) => {
    return(
        <div className=' flex flex-wrap gap-4 justify-between bg-white rounded-md w-full py-3 px-3 mb-3'>
            <h1 className='inline flex-1  font-serif text-xl xl:pl-10 '>Personajes</h1>
            <div className=' flex flex-auto sm:flex-none justify-between w-52 sm:w-44'>
                <button className='bg-[#38bdf8] text-white py-1 px-2 rounded-md' onClick={arrowLeft}>
                    <ArrowLeft/>
                </button>
                <div className=' bg-slate-200 text-center w-10 py-2 rounded-md'>
                    <span>{currentPage}</span>    
                </div>
                <button className='bg-[#38bdf8] text-white py-1 px-2 rounded-md' onClick={arrowRight}>
                    <ArrowRight/>
                </button>
            </div>
        </div>
    )
}