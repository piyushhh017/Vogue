import React from 'react'
import Header from '../Layout/UI/Header'
import Footer from '../Layout/UI/Footer'
import '../css/Credits.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Credits = () => {

  useGSAP(()=>{

    const tl = gsap.timeline()

    tl.from('.mainDiv2',{
      opacity:0,
      delay:0.3,
      duration:1,
      y:10
    })

    tl.from('.bold',{
      opacity:0.3,
      duration:0.5,
      delay:0.5,
      stagger:{
        from:'random',
        amount:1,
      },
      textDecoration:'none',
      // ease:'expo.out'
    })

  })

  return (
    <div className='credits'>
      <Header />
      <div className="mainDiv2">
        <p className='p1'>This issue of <b className='bold'>Glamour Vogue</b> was brought to life by an extraordinary creative team.
         Under the visionary leadership of  Editor-in-Chief, <b className='bold'>Olivia Sterling</b>, and Fashion Director,  <b className='bold'>Marcus Reynolds</b>, our editorial team curated an inspiring showcase of contemporary trends. 
         The stunning visuals were captured by renowned photographer <b className='bold'>Isabella Hart</b>, with styling by <b className='bold'>Samantha Bloom</b>, complemented by beauty expertise from makeup artist <b className='bold'>Rafael Cruz</b> and hair stylist <b className='bold'>Lila Chen</b>. 
         The elegance of this edition is accentuated by wardrobe selections from <b className='bold'> Maison Lumière</b> , <b className='bold'>Nova Couture</b> , and <b className='bold'>Celeste-Designs</b>. 
         Special thanks to our featured models <b className='bold'> Sophia Decker</b> ,<b className='bold'>Malik Santos</b> and <b className='bold'>Anya Patel,</b> whose presence transformed each shoot into a masterpiece. 
         Behind the scenes, Art Director, <b className='bold'>Julian Ford</b>, and Graphic Designer, <b className='bold'>Mia Delgado,</b> ensured every page radiated sophistication, while our dedicated production team,
         including <b className='bold'>Location Scout</b> , <b className='bold'>David Kim</b> , and Casting Director, <b className='bold'>Emily Ross</b> made this edition possible. 
         A heartfelt appreciation to our partners and sponsors who continue to support the vision of <b className='bold'>Vogue.</b> 
         </p>
         <p className='p2'>
         This edition is made possible through the support of our valued <b className='bold'> sponsors, </b> who continue to redefine luxury, innovation, and creativity in the fashion and beauty industry.
          We extend our deepest gratitude to <b className='bold'>Maison Élégance</b> , <b className='bold'>Lustre Cosmetics</b> , and <b className='bold'>Vera Jewelers</b> for their exclusive contributions to this collection, ensuring every detail is infused with sophistication.
          A special thank you to <b className='bold'>Aurora Skincare</b> for providing cutting-edge beauty formulations that enhance the artistry showcased.
         </p>
      </div>
      <Footer />
    </div>
  )
}

export default Credits
