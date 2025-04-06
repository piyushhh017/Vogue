import React from 'react'
import Header from '../Layout/UI/Header'
import storyData from '../Data/Story_data'
import '../css/story.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';
import topStory from '../Data/Top_Story'
import Footer from '../Layout/UI/Footer'
import { Link } from 'react-router-dom'

const Stories = () => {

  const lenis = new Lenis({
    duration: 1.2
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{

    const tl = gsap.timeline();

    tl.from('.h2, .work_photo-item',{

      opacity:0,
      y:20,
      duration:1,
      delay:0.5
    })

    tl.from('.description, .author, .date',{
      opacity:0,
      y:20,
      duration:0.5,
    })


    let workInfoItems = document.querySelectorAll('.work_photo-item');
    workInfoItems.forEach(function(item, index){
      item.style.zIndex = workInfoItems.length - index;
    })

    gsap.set('.work_photo-item',{
      clipPath: function (){
        return 'inset(0px 0px 0px 0px)'
      }
    })

    const animation = gsap.to('.work_photo-item:not(:last-child)',{
      clipPath: function (){
        return 'inset(0px 0px 100% 0px)'
      },
      stagger:0.5,
      ease:'none'
    })

    ScrollTrigger.create({
      trigger:'.work',
      start: 'top 10%',
      end:'bottom bottom',
      animation: animation,
      scrub:1,
    })

    gsap.from('.card',{
      opacity:0,
      stagger:0.5,
      duration:0.5,
      delay:0.5
    })

  })

  return (
    <div className='begin'>
      <Header />
      <div className="wrapp">

      <div className="spacer2">
          <h1>Top Stories of the Week</h1>
          <div className="storyCard">
            {topStory.map((v,i)=>{
              return(
                <div className="card" key={i}>
                  <div className='cover'>
                    <img src={v.img} alt={v.img} />
                  </div>
                  <div className="data">
                    <p className='genre'>{v.genre}</p>
                    <p> <Link to={`/stories/${v.id}`} className='content' > {v.content} </Link> </p>
                    <p className='author'>{v.author}</p>
                    <p className='date'>{v.date}</p>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>

        <div className="spacer">
          <h1>Trending</h1>
        </div>
        <section className='work'>

          <div className="work__left">
            <div className="work_text">

              {storyData.map((v,i)=>{
                return(
                  <div className="work_info" key={i}>
                      <h2 className='h2'>{v.title}</h2>
                      <p className='description' >{v.description}</p>
                      <p className='author authy' >{v.author}</p>
                      <p className='date daty' >{v.date}</p>
                  </div>
                )
              })}
              
            </div>
          </div>

          <div className="work__right">
            <div className="work_right-bl">
              <div className="work_photo">
                {storyData.map((v,i)=>{
                  return(
                    <div className="work_photo-item" title={v.id} key={i}>
                      <img src={v.photo} alt={v.photo} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </section>
        
      </div>
      <Footer />
    </div>
  )
}

export default Stories
