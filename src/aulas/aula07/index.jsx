import { useState } from "react";
import { Aula07CardProduto } from "../../components/aula07CardProduto"
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
      , price: '3.000'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-0.webp'
    }
    , {
      id: 2
      , name: 'Playstation 5'
      , price: '5.000'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-0.webp'
    }
    , {
      id: 3
      , name: 'Switch'
      , price: '2.000'
      , picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    }
  ])

  function cadastraProduto(event) {
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
}
