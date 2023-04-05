import React from 'react'
import './Store.scss'
import Item from '../../components/Item/Item'
import Plat from '../../components/Plat/Plat'

function Store() {
  return (
    <div className="store">
        <Item />
        <Plat />
    </div>
  )
}

export default Store