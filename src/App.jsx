import { useEffect, useState } from 'react'
import './App.css'
import IndexCharacterMain from '@/components/main/indexCharacterMain'
import Indexheader from '@/components/header/indexheader'

const App = () => {
  return (
  <>
    <Indexheader/>
    <IndexCharacterMain/>
  </>
  )
}

export default App
