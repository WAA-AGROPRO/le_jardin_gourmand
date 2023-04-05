import React from 'react'
import './Item.scss'

function Item() {
  return (
    <div className="item">
        <div className="item__image">
            <img src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="item" />
        </div>
        <div className="item__legend">
            <p className="legend__title">title</p>
            <p className="legend__description">description</p>
            <p className="legend__price">price</p>
        </div>
    </div>
  )
}

export default Item