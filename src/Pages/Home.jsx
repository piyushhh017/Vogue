import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase"
import { Flip } from "gsap/Flip";
import Header from '../Layout/UI/Header'
import '../css/home.css'

const Home = () => {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(CustomEase);
  gsap.registerPlugin(Flip);

  useGSAP(()=>{
    document.addEventListener('DOMContentLoaded', () =>{
      
      CustomEase.create(
        'hop',
        'M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1'
      )
    })

      CustomEase.create(
        'hop2',
        'M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1'
      )

      const mainTl = gsap.timeline();
      const revealerTl = gsap.timeline();
      const scaleTl = gsap.timeline();

      revealerTl.to('.r-1',{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1.5,
        ease: 'hop'
      }).to('.r-2',{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: 'hop'
      },
      '<'
    );

    scaleTl.to('.img:first-child',{
      scale:1,
      duration:2,
      ease:'power4.inOut'
    })

    const images = document.querySelectorAll('.img:not(:first-child)');

    images.forEach((img, index) =>{
      scaleTl.to(
        img,{
          opacity:1,
          scale:1,
          duration: 1.25,
          ease:'power3.out',
        },
        '>-0.5'
      )
    })

    mainTl.add(revealerTl).add(scaleTl, '-=1.25').add(() => {
      document
      .querySelectorAll('.img:not(.main)')
      .forEach((img) => img.remove());

      const state = Flip.getState('.main');

      const imagesContainer = document.querySelector('.images');
      imagesContainer.classList.add('stacked-container');

      document.querySelectorAll('.main').forEach((img, i) =>{
        img.classList.add('stacked');
        img.style.order = i;
        gsap.set('.img.stacked', {
          clearProps: 'transfrom, top, left',
        })
      })

      return Flip.from(state,{
        duration:1.5,
        ease:'hop',
        absolute: true,
        stagger:{
          amount: -0.3,
        }
      })
    }).fromTo('.header .logo h1, .vogue, .cont2',{
      opacity:0,
      y:40  
    },
    {
      opacity:1,
      duration:1,
      delay:1,
      zIndex:1,
      y:0
    }).fromTo('.links',{
      opacity:0,
    },
    {
      opacity:1,
      duration:0.3,
      stagger:1,
      zIndex:999
    }).fromTo(' .textCont',{
      opacity:0,
      y:20
    },
  
    {
      opacity:1,
      y:0
    }).fromTo(' .boldText',{
      opacity:0.2,
    },
  
    {
      opacity:1,
      // color:'white',
      fontStyle:'italic'
    })
  })


  return (
    <div className='container'>

      <Header />

      <div className="revealers">
        <div className="revealer r-1"></div>
        <div className="revealer r-2"></div>
      </div>
     
      <div className="images">
        <div className="img"><img src="src/Images/model1.jpg" alt="src/Images/model1.jpg" /></div>    
        <div className="img"><img src="src/Images/model2.jpg" alt="src/Images/model2.jpg" /></div>    
        <div className="img"><img src="src/Images/model3.jpg" alt="src/Images/model3.jpg" /></div>    
        <div className="img"><img src="src/Images/model4.jpg" alt="src/Images/model4.jpg" /></div>    
        <div className="img"><img src="src/Images/model5.jpg" alt="src/Images/model5.jpg" /></div>    
        <div className="img"><img src="src/Images/model6.jpg" alt="src/Images/model6.jpg" /></div>    
        <div className="img main"><img src="src/Images/model7.jpg" alt="src/Images/model7.jpg" /></div>    
        <div className="img main"><img src="src/Images/model8.jpg" alt="src/Images/model8.jpg" /></div>    
      </div>

      <div className="hero-content">
        <div className="siteLogo">
          <img className='vogue' src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" />
          <p className='textCont'>
          Immerse yourself in the world of <b>VOGUE</b>, the <br />
           ultimate destination for fashion, beauty, and culture..... <br /> <br />
          </p>
        </div>
      </div>

      <div className="cont2">
        <p>Showcasing you the best in <b className='boldText'> beauty, culture, <br /> 
        and design.</b> If <b className='boldText'> fashion </b> is a language, <br /> 
        <b className='boldText'> Vogue</b> is its most fluent speaker. </p>
      </div>

      {/* <div className="slider">
        <div className="list">
         <div className="item item1" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item2" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item3" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item4" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item5" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item6" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item7" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item8" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item9" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item10" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
        </div>
      </div>

      <div className="slider2">
        <div className="list">
          <div className="item item1" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item2" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item3" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item4" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item5" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item6" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item7" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item8" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item9" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
          <div className="item item10" id=""><img src="src/Images/vogueHeading.png" alt="src/Images/vogueHeading.png" /></div>
        </div>
      </div> */}

    </div>
  )
}

export default Home
