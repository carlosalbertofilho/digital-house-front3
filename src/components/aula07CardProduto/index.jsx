import './style.scss'

export function SetimaAulaCardProdutos(props) {
  
  function comprarProduto() {
   console.log(props.productData)
  }

  return (
    <div className='aula07-card-produto-component'>
      <img src="{props.productData.picture}"/>
      <div className='card-body'>
        <h1>{props.productData.name}</h1>
        <span>R$ {props.productData.price},00</span>
      </div>
      <button type="button" onClick={comprarProduto}>Comprar</button>
    </div>
  )
}
