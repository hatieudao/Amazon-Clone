import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { API_PRODUCT } from '../../../../API'

import Product from '../Product'
import NotifyPopup from '../../../../components/NotifyPopup'
import './ListProducts.css'

function ListProduct() {
  const [products, setProducts] = useState([])
  const categories = window.location.href.split('/')
  const category = categories[categories.length - 1]

  useEffect(() => {
    if (category === '') {
      axios.get(API_PRODUCT).then((res) => {
        setProducts(products.concat(res.data))
      })
    } else if (category === 'clothing') {
      axios.get(`${API_PRODUCT}/category/men's closthing`).then((res) => {
        setProducts(products.concat(res.data))
      })
      axios.get(`${API_PRODUCT}/category/women's closthing`).then((res) => {
        setProducts(products.concat(res.data))
      })
    } else {
      axios.get(`${API_PRODUCT}/category/${category}`).then((res) => {
        setProducts(products.concat(res.data))
      })
    }
  }, [])

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  let timer = null
  const openPopup = () => {
    if (timer) clearTimeout(timer)
    setIsOpenPopup(true)
    timer = setTimeout(() => setIsOpenPopup(false), 4000)
  }

  return (
    <div className="listProducts">
      {products.map((item) => (
        <Product key={item.id} product={item} openPopup={openPopup} />
      ))}
      {isOpenPopup && (
        <div className="addSuccessfulPopup">
          <NotifyPopup content="Add Successfully" />
        </div>
      )}
    </div>
  )
}

export default ListProduct
