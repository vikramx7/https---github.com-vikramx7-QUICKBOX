import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Shortnav from '../Components/FreshFruitsComponents/Shortnav'
import Style from '../Styles/FreshFruits.module.css'
import CategoryFruits from '../Components/FreshFruitsComponents/CategoryFruits'
import Footer from '../Components/Footer'
import { LinkOverlay } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
const FreshFruits = ()=>{
    return(
        <>
   
       <Navbar></Navbar>
     <Shortnav/>
     
     <CategoryFruits/>

     <div className={Style.overlap}></div>
     <Footer/>
        </>
    )
}


export default FreshFruits