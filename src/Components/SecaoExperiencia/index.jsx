import './style.css'

export default function SecaoExperiencia(props){
  return(
    <section id={props.tema} className={`${props.tema} secao-exp`}>
      <div className='container-exp'>
        <h2>Experiências De trabalho</h2>
        <hr/>
        <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
            Sites e Marketing Digital, nos empenhamos diariamente para entregar
            resultados que tragam impacto aos nossos clientes.</p>
        <div className='container-card'>
          {props.children}
        </div>
      </div>
    </section>
  )
}