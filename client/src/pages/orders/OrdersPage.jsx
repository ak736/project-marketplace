import React from 'react'
import OrderTable from '../../components/OrderTable'
import { useSelector } from 'react-redux';

const OrdersPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  
  return (
    <>
    <div className={`h-screen ${isDarkMode? `bg-gray-900`: ''}`}>
      <h2 className={`font-bold text-lg ${isDarkMode ? 'text-white' : ''}`}>Order History</h2>
      <p className={`text-sm text-gray-500 ${isDarkMode ? 'text-gray-300' : ''}`}>History of all your orders</p>
      
      <div className='flex justify-between'>
        
      </div>
      
      <div>
        <OrderTable />
      </div>
    </div>
      
    </>
  )
}

export default OrdersPage
