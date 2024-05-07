import Logo from '../../assets/logo.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'
import Dribble from '../../assets/dribble.png'
import Behance from '../../assets/behance.png'
import Google from '../../assets/google-plus.png'
import './style.css'

export default function Footer(props){
  return(
      <footer className={`container-footer ${props.tema}`}>
        <div className='container-conteudo'>
          <img src={Logo} alt='logo-footer' id='logo'/>
          <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
          ferramentas e tecnologias personalizadas.</p>
          <div className='container-redes'>
            <a href="#" target='_blank'><img src={Facebook} alt='facebook-image'/></a>
            <a href="#" target='_blank'><img src={Twitter} alt='twitter-image'/></a>
            <a href="#" target='_blank'><img src={Linkedin} alt='linkedin-image'/></a>
            <a href="#" target='_blank'><img src={Dribble} alt='dribble-image'/></a>
            <a href="#" target='_blank'><img src={Behance} alt='behance-image'/></a>
            <a href="#" target='_blank'><img src={Google} alt='google-image'/></a>
          </div>
        </div>
        <p>Copyright 2024 © <a href="https://github.com/tiagoh671" target='_blank' className='link'>tiagoh671</a></p>
      </footer>
  )
}