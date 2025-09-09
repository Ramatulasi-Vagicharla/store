// components/ProductGrid.js
import Link from 'next/link'
import { FaStar, FaRegStar } from 'react-icons/fa'

function ProductCard({ p }) {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={p.image} alt={p.title} />
      </div>
      <div className="card-body">
        <h3 className="title">{p.title}</h3>
        <div className="meta">
          <span className="price">₹{p.price}</span>
          <span className="category">{p.category.toUpperCase()}</span>
        </div>
        <div className="rating">
          {renderStars(p.rating.rate)}
          <span className="rating-count">({p.rating.count})</span>
        </div>
        <div className="details-btn">
          <Link href={`/product/${p.id}`} className="btn view-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

function renderStars(rate) {
  const full = Math.floor(rate)
  const half = rate - full >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  const stars = []
  for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} className="star filled" />)
  if (half) stars.push(<FaStar key="half" className="star filled" />)
  for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e-${i}`} className="star" />)
  return stars
}

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <div className="empty">No products found.</div>
  }

  return (
    <div className="grid">
      {products.map((p) => <ProductCard key={p.id} p={p} />)}
    </div>
  )
}
