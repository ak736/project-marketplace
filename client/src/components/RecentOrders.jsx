import React from 'react'
import OrderTable from './OrderTable'


const RecentOrders = () => {


  return (
    <div className='mt-10 border border-gray-500 dark:border-gray-300 dark:bg-gray-800 rounded-lg p-6'>
        <div className='flex justify-between'>
        <h2 className='font-semibold dark:text-gray-300'>Recent Orders</h2>
        <h2 className='text-primary font-semibold cursor-pointer'>View all orders</h2>
        </div>
        <div>
          <OrderTable />
        </div>
    </div>
  )
}

export default RecentOrders
