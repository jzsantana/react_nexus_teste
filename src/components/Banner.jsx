import React from 'react'
import './Banner.css'
import Iphone from '../assets/iphone2.svg'
import NexusLogo from '../assets/nexusLogo2.svg'

const Banner = () => {
  return (
    <div className='banner-content'>
       
        <div className='text-banner'>
         <img src={NexusLogo} alt="Logo do banco NEXUS" />
            <h1>
                A EVOLUÇÃO DO BANCO<br></br>
                DIGITAL AO SEU ALCANCE
            </h1>
            <p>Faça como milhares de pessoas e abra uma conta<br></br> nexus agora mesmo</p>

            <button className='btn_banner' onClick={()=> console.log(`olá`)}>
            CRIAR UMA CONTA AGORA
            </button>
        </div>

        <div className="mockup">
            <img src={Iphone} alt="" />
        </div>
    </div>
  )
}

export default Banner