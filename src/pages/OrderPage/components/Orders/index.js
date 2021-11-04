import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../../fisebase'
import './Orders.scss'
import Order from '../Order'

function Orders() {
  const user = useSelector((state) => state.user)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          ),
        )
    } else {
      setOrders([])
    }
  }, [user])
  console.log(user)
  console.log(orders)
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.length ? (
          orders.map((order) => <Order order={order} />)
        ) : (
          <p>nothing</p>
        )}
      </div>
    </div>
  )
}

export default Orders
