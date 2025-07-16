import React from 'react'

import Card from '../componentes/card'

import cameraimg from "../assets/Camera.png"

const Licamera = () => {
  return (
    <div className='PopupObj'>
      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='01' />

      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='02' />

      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='03' />

      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='04' />

      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='05' />

      <Card
        imagem={cameraimg}
        titulo='Selecione a Camera'
        id='1'
        selecionado='CAM SERHS SONY 01'
        numero='06' />
    </div>
  )
}

export default Licamera