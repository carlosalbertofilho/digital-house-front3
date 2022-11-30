import { useState } from "react";
import { Aula07CardProdutos } from "../../components/aula07CardProduto"
import './style.scss'

export function Aula07() {
  const [nameProduct, setNameProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState('')
  const [pictureProduct, setPictureProduct] = useState('')
  const [formErro, setFormErro] = useState(false)
  const [allProducts, setAllProdutcts] = useState([
    {
      id: 1
      , name: 'Xbox'
      , price: '3000.00'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
    }
    , {
      id: 2
      , name: 'Playstation 5'
      , price: '5000.00'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
    }
    , {
      id: 3
      , name: 'Switch'
      , price: '2000.00'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    }
  ])

  function addProduct(event) {
    event.preventDefault()

    const addNewProduct = {
      name: nameProduct
      , price: priceProduct
      , picture: pictureProduct
    }

    if (nameProduct === '' || priceProduct === '' || priceProduct < 0)
      setFormErro(true)
    else {
      setFormErro(false)
      setAllProdutcts([...allProducts, addNewProduct])
      // reset form
      setNameProduct('')
      setPriceProduct('')
      setPriceProduct('')
    }
  }

  return (
    <main className="aula07-component">
      <div className="title-wrapper">
        <h1>Cadastra Produtos</h1>
      </div>
      <form className={formErro ? 'form-error' : ''}
            onSubmit={event => addProduct(event)}>
        <div>
          <label htmlFor="nameProduct">Nome</label>
          <input type="text" id="nameProduct"
            onChange={event => setNameProduct(event.target.value)} />
        </div>
        <div>
          <label htmlFor="priceProduct">Preço</label>
          <input type="number" id="priceProduct"
            min="0.00" step="0.10"
            onChange={event => setPriceProduct(event.target.value)} />
        </div>
        <div>
          <label htmlFor="pictureProduct">Foto</label>
          <input type="text" id="pictureProduct"
            onChange={event => setPictureProduct(event.target.value)} />
        </div>
        <button type="submit">Cadastra Produto</button>
        <button type="reset">Limpar Formulário</button>
      </form>
      {
        formErro ? (<span>O formulário contém erros</span>)
          : null
      }
      <div className="title-wrapper">
        <h1>Lista de Produtos </h1>
      </div>
      <section className="products">
        {
          allProducts.map(
            product => {
              return (
                <Aula07CardProdutos productData={product} />
              )
            }
          )
        }
      </section>
    </main>
  )
}
