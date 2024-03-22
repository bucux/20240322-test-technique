
import './App.css'
import Header from './comps/header'
import Section from './comps/section'
import datas from './assets/json/datas.json'
import { useState } from 'react'

function App() {

  const [idFilm, setIdFilm] = useState('112233') // harry potter par défaut

  return (
    <div
      className="app-cont0"
      style={{
        backgroundImage: `url(${datas.find(data => data.id === idFilm).background})`,
        height: '100%',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
      <Header datas={datas} setIdFilm={setIdFilm}/>
      <Section film={datas.find(data=>data.id === idFilm)}/>
      <p className='caca'>caca</p>
    </div>
  )
}

export default App
