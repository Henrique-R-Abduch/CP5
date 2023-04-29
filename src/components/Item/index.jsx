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



        <img alt="item" className="Item-Image" src="//static.netshoes.com.br/produtos/jaqueta-corta-vento-windbreaker-mlb-new-york-yankees-retro-soundtrack-pretomulticolor-new-era/06/BRJ-0186-006/BRJ-0186-006_zoom1.jpg?ts=1667327701"/>
        <h3>JAQUETA CORTA VENTO WINDBREAKER MLB NEW YORK YANKEES RETRO</h3>
        <p>R$ 549,00</p>

        <button onClick={handleAddToShoppingCart} className='Item-Button'>
          {isInShoppingCart ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
          </button>
    </div>
  )
}

export default Item