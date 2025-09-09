import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if(!id) return
    setLoading(true); setError(null)
    fetch('https://fakestoreapi.com/products/' + id)
      .then(r=>{ if(!r.ok) throw new Error('API '+r.status); return r.json() })
      .then(data=>setProduct(data))
      .catch(e=>setError(e.message || 'Error'))
      .finally(()=>setLoading(false))
  }, [id])

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const found = cart.find(item=>item.id===product.id)
    if(found) found.qty +=1; else cart.push({ id: product.id, title: product.title, price: product.price, qty: 1 })
    localStorage.setItem('cart', JSON.stringify(cart))
    setAdded(true)
    setTimeout(()=>setAdded(false), 1500)
  }

  const renderStars = (rate) => {
    const stars = []
    for(let i = 1; i <= 5; i++) {
      if(rate >= i) {
        stars.push(<FaStar key={i} />)
      } else if(rate >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />)
      } else {
        stars.push(<FaRegStar key={i} />)
      }
    }
    return stars
  }

  if(loading) return <div className="container"><p>Loading product...</p></div>
  if(error) return <div className="container"><p>Error: {error}</p></div>
  if(!product) return null

  return (
    <div className="container">
      <nav className="crumbs"><Link href="/">← Back to products</Link></nav>
      <div className="detail">
        <img src={product.image} alt={product.title} className="detail-image"/>
        <div className="detail-info">
          <h1>{product.title}</h1>
          <p className="price">₹{product.price}</p>
          <p className="category"><strong>Category:</strong> {product.category}</p>
          <p className="desc">{product.description}</p>
          <p className="rating">{renderStars(product.rating?.rate || 0)} <span>({product.rating?.count} reviews)</span></p>
          <div style={{ marginTop: 12 }}>
            <button className="btn" onClick={addToCart}>Add to Cart</button>
            {added && (
              <div style={{
                marginTop: 10,
                padding: "8px 12px",
                background: "#d1fae5",
                color: "#065f46",
                borderRadius: "6px",
                display: "inline-block",
                fontSize: "14px"
              }}>
                ✅ Item added to cart successfully
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
