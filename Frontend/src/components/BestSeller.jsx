import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = React.useState([]);

    useEffect(() =>{
        const bestProduct = products.filter((item) => item.bestSeller === true);
        setBestSellers(bestProduct.slice(0,5));

    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8 '>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        </div>

        <div className='grid grid-cols'></div>
      
    </div>
  )
}

export default BestSeller
