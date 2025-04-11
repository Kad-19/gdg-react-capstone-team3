
import React from 'react'
import Destinations from './Destinations'
import  Blogs  from './Blogs'
import heroImage from '../assets/image/unsplash_dHHhDXaCh70.svg'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';

function Package (){
  return(
    <section>

          <div className="relative flex">
              <img
                className="relative z-0 w-full top-0 left-0  object-cover min-h-screen bg-center md:top-0 sm:top-0"
                src={heroImage}
                alt="hero image"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white">
                <div>
                  <h1 className="text-center text-[clamp(1rem,5vw,3rem)]">Travel Packeges</h1>
                  <span className="inline-flex items-center text-[clamp(0.5rem,2vw,2.5rem)] space-x-2 pl-3">
                    <Link 
                    to='/'
                    className="text-center">Home</Link>
                    <MdArrowForwardIos className="text-[clamp(0.2rem,1vw,1rem)]" />
                    <Link 
                    to = '/contact'
                    className="text-center">Contact</Link>
                  </span>
                </div>
              </div>
            </div>

    </section>
  )
}

function Packages (){
  return(
    <>
    <Package/>
    <Destinations/>
    <Blogs/>
    </>
  )
}

export default Packages;




 