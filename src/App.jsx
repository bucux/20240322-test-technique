
import './App.css'
import Header from './comps/header'
import Section from './comps/section'
import datas from './assets/json/datas.json'
import { useState } from 'react'

function App() {

  const [idFilm, setIdFilm] = useState('112233') // harry potter par défaut

  return (
    <div className="app-cont0" >
      <div className='app-cont1'>
        <img className = "affiche" src={datas.find(data => data.id === idFilm).background} alt="affiche film" />
      </div>
      <div className='app-cont2'>
        <Header datas={datas} setIdFilm={setIdFilm}/>
        <Section film={datas.find(data=>data.id === idFilm)}/>
        <p className='caca'>caca</p>
      </div>
    </div>
  )
}

export default App
