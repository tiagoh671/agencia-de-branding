import Banner from '../../assets/banner.png'
import './style.css'

export default function SecaoBanner(props){
  return(
    <section className='container-banner'>
      <div className={`container-left ${props.tema}`}>
        <img src={Banner} alt='banner'/>
      </div>
      <div className='container-right'>
        <p>BRANDING / UI / UX / TECNOLOGIA </p>
        <h1>Agência de Branding</h1>
        <span>e design digital</span>
      </div>
    </section>
  )
}