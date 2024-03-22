
import './css/header.css'

export default function Header({datas, setIdFilm}) {

  const clic = (id) => {
    setIdFilm(id)
  } 

  return (
    <div className='header-cont0'>
      {datas.map(data=>(
        <button key={data.id} onClick={()=>{clic(data.id)}}>{data.name}</button>
      ))}
    </div>
  )
}
