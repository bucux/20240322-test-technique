
import './css/perso.css'

export default function Perso({actor}) {

  return (
    <div className='perso-cont0'>
      <h2>{actor.name}</h2>
      <img src={actor.picture} alt={"photo de " + actor.name} />
    </div>
  )
}
