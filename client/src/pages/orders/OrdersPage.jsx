import React from 'react'
import OrderTable from '../../components/OrderTable'

const OrdersPage = () => {
  return (
    <>
    <h2 className='font-bold text-lg'>Order History</h2>
      <p className='text-sm text-gray-500'>History of all your orders</p>
    
        <div className='flex justify-between'>
        
        </div>
        <div className='dark:bg-gray-800 rounded-lg pb-5'>
          <OrderTable />
        </div>
    </>
  )
}

export default OrdersPage