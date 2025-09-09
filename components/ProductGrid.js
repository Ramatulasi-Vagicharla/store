
// import Link from 'next/link'

// function ProductCard({ p }) {
//   return (
//     <Link href={'/product/' + p.id} className="card">
//   <div className="img-wrap"><img src={p.image} alt={p.title} /></div>
//   <div className="card-body">
//     <h3 className="title">{p.title}</h3>
//     <div className="meta">
//       <span className="price">₹{p.price}</span>
//       <span className="category">{p.category}</span>
//     </div>
//   </div>
// </Link>

//     // <Link href={'/product/' + p.id}>
//     //   <a className="card">
//     //     <div className="img-wrap"><img src={p.image} alt={p.title} /></div>
//     //     <div className="card-body">
//     //       <h3 className="title">{p.title}</h3>
//     //       <div className="meta">
//     //         <span className="price">₹{p.price}</span>
//     //         <span className="category">{p.category}</span>
//     //       </div>
//     //     </div>
//     //   </a>
//     // </Link>
//   )
// }

// export default function ProductGrid({ products }) {
//   return (
//     <div className="grid">
//       {products.map(p => <ProductCard key={p.id} p={p} />)}
//     </div>
    
//   )
// }
import Link from 'next/link'

function ProductCard({ p }) {
  return (
    <Link href={`/product/${p.id}`} className="card" aria-label={p.title}>
      <div className="img-wrap">
        <img src={p.image} alt={p.title} />
      </div>
      <div className="card-body">
        <h3 className="title">{p.title}</h3>
        <div className="meta">
          <span className="price">₹{p.price}</span>
          <span className="category">{p.category}</span>
        </div>
      </div>
    </Link>
  )
}

export default function ProductGrid({ products }) {
  if(!products || products.length === 0) {
    return <div style={{padding:12}}>No products to display.</div>
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  )
}
