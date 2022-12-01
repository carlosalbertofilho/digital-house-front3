import { useEffect, useState } from 'react'
import './style.scss'

export function Aula13() {

  const [contador, setContador] = useState(0)

  const adicionarContador = () => {
    setContador(contador + 1)
  };

  useEffect( () => {
    console.log("Carregou")
  }, [])


  return (
    <main className='aula13-component'>
      <h1 className='title-wrapper'> Contador </h1>
      <button onClick={ adicionarContador }>Adicionar</button>
      <span>Número Atual: { contador }</span>

    </main>
  );
}
