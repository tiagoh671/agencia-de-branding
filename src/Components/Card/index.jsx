import './style.css'

export default function Card(props){
  return(
    <div className='card'>
      <p>{props.data}</p>
      <h3>{props.cargo}</h3>
      <p>{props.empresa}</p>
      <p>{props.funcao}</p>
    </div>
  )
}