import Logo from '../../assets/logo.png'
import './style.css'

export default function Header(props){
  return(
    <header className={props.tipoTema}>
      <img src={Logo} alt='Logo' className='logo'/>
      <button onClick={props.botaoTema}><img src={props.imageTema} alt="Logo" className='imageTema' /></button> 
    </header>
  )
}
