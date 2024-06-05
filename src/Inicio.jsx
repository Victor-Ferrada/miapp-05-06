import pato from './assets/pato.png';

function Inicio(){
  return(    
  <>
    <h1>Hola</h1>
    <h2>Esta es mi primera app</h2>
    <img className='pato' src={pato} alt="pato"/>
  </>
  )
}

export default Inicio;