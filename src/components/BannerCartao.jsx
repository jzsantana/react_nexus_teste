import React from 'react'
import './BannerCartao.css'
import CardCartao from './CardCartao'


const BannerCartao = () => {
  return (
    <div className='container-banner-cartao'>
        <h1 className='text-principal'>CONHEÇA NOSSOS CARTÕES</h1>
        
        <div className='container-cartao'>
          <CardCartao/>
          <CardCartao/>
          <CardCartao/>
        </div>
    </div>
  )
}

export default BannerCartao