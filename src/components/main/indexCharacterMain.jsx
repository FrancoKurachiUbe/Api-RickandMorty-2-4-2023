import { useEffect, useState } from 'react'
import ArrowLeft from '@/components/icons/ArrowLeft'
import ArrowRight from '@/components/icons/ArrowRight'

import CharacterMain from '@/components/main/CharacterMain'
import DetailsModalMain from './DetailsModalMain'
import MenuMain from './MenuMain'
//import MenuMain from '@/components/main/MenuMain'

export default () => {  
  const [character, setCharacter] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect (() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then(response => response.json())
        .then(personaje => personaje.results)
        .then(character => setCharacter(character))
        .catch(error => console.log(error))
  }, [currentPage])
  
  // Menu Secundario para pasar de pagina
  const arrowRight = () => {
    if(currentPage === 42) return
    setCurrentPage(currentPage => currentPage + 1)
  }
  const arrowLeft = () => {
    if(currentPage === 1) return
      setCurrentPage(currentPage => currentPage -1 )
  }

  const [isOpenModalCard, setOpenModalCard] = useState(null)

  const handleOpenCard = (item) => {
    console.log(item)
      setOpenModalCard(item)
  }
  const handleCloseCard = () => {
    setOpenModalCard(false)
  }

  return(
    <main className='bg-slate-200 px-3 sm:px-10'>
      <div className=' mx-auto py-10'>
        <MenuMain 
          arrowLeft={arrowLeft} 
          arrowRight={arrowRight} 
          currentPage={currentPage}
        />

        <div className='grid grid-cols-2 sm:grid-cols-3 sm:px-7 md:grid-cols-4 xl:grid-cols-5 gap-4 py-10 rounded-md bg-white'>
          { character.map(item => (
              <CharacterMain 
                key={item.id} 
                item={item} 
                handleOpenCard={handleOpenCard}/>                                
          ))}

          {isOpenModalCard && <DetailsModalMain 
              item={isOpenModalCard}
              setOpenModalCard={setOpenModalCard}
              handleCloseCard={handleCloseCard}
          />}  
        </div> 
      </div>
    </main>
  )
}