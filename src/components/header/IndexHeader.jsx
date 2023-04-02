import { useState } from "react"
import Logo from "@/assets/img/RickAndMorty.png" 
import MenuIcon from '@/components/icons/MenuIcon'
import CloseIcon from '@/components/icons/CloseIcon'
import NavLinkHeader from "@/components/header/NavLinkHeader"
export default () => {
    const [isOpenMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }
    return(
        <header className="container mx-auto flex items-center gap-8 p-4 md:p-0 ">
            <button className="md:hidden" onClick={handleOpenMenu} > <MenuIcon/> </button>
            <a href="#" className="bg-[url('')]" >
                <img src={Logo} alt="Rick And Morty" className="w-[150px] rounded-md ml-10 px-3 py-2 md:mb-1 md:mr-0 "/>
            </a>
            <nav className={`font-blond md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${isOpenMenu ? 'absolute z-50 top-0 left-0 flex w-4/6 h-full flex-col p-8 gap-y-[21px] bg-white ' : 'hidden'}`}>
                    <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
                        <CloseIcon/>
                    </button>
                    <NavLinkHeader title="Personajes"/>
            </nav>
        </header>
    )
}