
import './css/perso.css'

export default function Perso({actor}) {

  return (
    <div className='perso-cont0'>
      <img src={actor.picture} alt={"photo de " + actor.name} />
      <h2>{actor.name}</h2>
    </div>
  )
}
