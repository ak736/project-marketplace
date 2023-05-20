import React from 'react'
import { useSelector } from 'react-redux';

const CryptoWalletPage = () => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={`h-screen ${darkMode? `bg-gray-900 text-white`: `text-black`}`}>CryptoWalletPage</div>
  )
}

export default CryptoWalletPage