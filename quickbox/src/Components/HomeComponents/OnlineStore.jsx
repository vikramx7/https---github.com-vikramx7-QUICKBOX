import React from 'react'
import Style from '../../Styles/HomeStyle/OnlineStore.module.css'
const OnlineStore = ()=>{

    return(
        <div className={Style.container}>
            <h1 className={Style.head}><span style={{color:"red"}}>QUICK BOX</span> - online grocery store</h1>
            <div>
<p>
Did you ever imagine that the freshest of <span style={{color:"#74d23d",fontWeight:"bold"}}>fruits and vegetables</span>, top quality pulses and food grains,  <span style={{color:"#74d23d",fontWeight:"bold"}}>dairy products</span> and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, quickbox.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products.
</p>
            </div>
        </div>
    )
}

export default OnlineStore