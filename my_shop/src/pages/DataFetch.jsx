import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const DataFetch = () => {
 let [products, setProducts] = useState([])
 useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then(response=>response.json())
    .then(data=>setProducts(data.products))
    .catch(error=>console.log(error))
 },[])
  return (


    <div className='flex flex-wrap'>
      {
        products.map((product)=>{
            return <div className='w-[200px] h-[300px] border shadow-lg m-5 hover:shadow-2xl cursor-pointer'>
                <img src={product.images[0]} alt="" />
                <h1>{product.title}</h1>
                <h2>Price:{product.price}</h2>
                <h3>In Stock:{product.stock}</h3>
                <h3>Rating:{product.rateing}</h3>
                <Link to={`/product/${product.id}`}>
                View Details</Link>
            </div>
        })
      }
    </div>
  )
}

export default DataFetch
