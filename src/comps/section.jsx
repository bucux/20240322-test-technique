
import './css/section.css'
import Perso from './perso'

export default function Section({film}) {

  return (
    <div className='section-cont0'>
      <h1>{film.name}</h1>
      {film.actors.map((actor, index)=>(
        <Perso key={index} actor={actor}/>
      ))}
    </div>
  )
}
