import React from 'react'
import TopCarousel from '../Components/HomeComponents/TopCarousel'
import Button6 from '../Components/HomeComponents/Button6'
import FruitsVegetables from '../Components/HomeComponents/FruitsVegetables'
import DailyStaples from '../Components/HomeComponents/DailyStaples'
import SnackStore from '../Components/HomeComponents/SnackStore'
import CleaningHousehold from '../Components/HomeComponents/CleaningHousehold'
import BrandStore from '../Components/HomeComponents/BrandStore'
import OnlineStore from '../Components/HomeComponents/OnlineStore'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const Home = ()=>{


    return(
        <>
<main>
    <Navbar/>
    <div style={{height:"71px",width:"100px"}}></div>
<TopCarousel/>
<Button6/>
<FruitsVegetables/>
<DailyStaples/>
<SnackStore/>
<CleaningHousehold/>
<BrandStore/>
<OnlineStore/>
</main>
<Footer/>
        </>
    )
}


export default Home