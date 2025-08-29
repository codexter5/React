import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    let params = useParams()
    let id = params.id

    const [product, setProduct]=useState([])

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(error=>console.log(error))
    }, [id])
  return (
    <div className='flex'>
        <div>
            <img src="" alt="" />
        </div>
        <div>

      <h1>{product.title}</h1>
      <h1>Description: {product.description}</h1>
      <h1>In Stocks: {product.stock}</h1>
      <h1>Rating: {product.rating}</h1>
        </div>
    </div>
  )
}

export default Products
