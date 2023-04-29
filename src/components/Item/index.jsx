import React, {useState} from 'react'
import './style.css'

const Item = () => {
  const [isInShoppingCart, setIsInShoppingCart] =useState(false);

  const handleAddToShoppingCart = () => {
    setIsInShoppingCart((prev)=>!prev);
  }

  return (
    <div className="Item-Wrapper">

      { isInShoppingCart && (
           <div className="Item-Badge">
           <p>Adicionando ao carrinho!</p>
         </div>
      )}



        <img alt="item" className="Item-Image" src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2/06/2FU-6367-006/2FU-6367-006_zoom1.jpg?ts=1657368380&ims=326x"/>
        <h3>Tenis Mizuno Wave Titan</h3>
        <p>R$ 299,99</p>

        <button onClick={handleAddToShoppingCart} className='Item-Button'>
          {isInShoppingCart ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
          </button>
    </div>
  )
}

export default Item