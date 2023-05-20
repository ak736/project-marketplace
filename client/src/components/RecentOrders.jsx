import React from 'react'
import OrderTable from './OrderTable'
import { useSelector } from 'react-redux';


const RecentOrders = () => {

  const isDarkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`mt-10  ${isDarkMode? `border-gray-600`: `border-neutral-300 border` } border-neutral-300 rounded-lg p-6`}>
        <div className='flex justify-between'>
        <h2 className={`font-semibold  ${isDarkMode? `text-white`: `text-black` }`}>Recent Orders</h2>
        <h2 className='text-primary font-semibold cursor-pointer'>View all orders</h2>
        </div>
        <div>
          <OrderTable />
        </div>
    </div>
  )
}

export default RecentOrders
