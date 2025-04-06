import React from 'react'
import '../css/singleStory.css'
import Header from '../Layout/UI/Header'
import { useParams } from 'react-router-dom'
import topStory from '../Data/Top_Story'
import Footer from '/src/Layout/UI/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const SingleStory = () => {

    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from('.authorDetails',{
            y:20,
            opacity:0,
            duration:1,
            delay:1
        })
        tl.from('.bigCon',{
            y:20,
            opacity:0,
            duration:1
        })
    })

    const {id} = useParams();
    const news = topStory.filter((item) => item.id === parseInt(id))
    const newsDetail = news[0] 
    console.log(newsDetail.img);

  return (
    <div className='singleStory'>
      <Header />
      <div className='mainDiv'>
        <div className="photo">
            <img src={newsDetail.img} alt={newsDetail.img} />
        </div>
        <div className="details">
            <p className='genre'>{newsDetail.genre}</p>
            <p className='content'>{newsDetail.content}</p>
            <div className="authorDetails">
                <p className='author'>{newsDetail.author}</p>
                <p className='date'>{newsDetail.date}</p>
            </div>
            <p className='bigCon'>{newsDetail.bigDescription}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleStory
