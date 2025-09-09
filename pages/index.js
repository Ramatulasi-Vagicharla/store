
// import Head from 'next/head'
// import { useEffect, useMemo, useState } from 'react'
// import Header from '../components/Header'
// import ProductGrid from '../components/ProductGrid'

// export default function Home({ theme, toggleTheme }) {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [query, setQuery] = useState('')
//   const [category, setCategory] = useState('all')
//   const [sort, setSort] = useState('none')
//   const [categories, setCategories] = useState([])

//   const fetchData = async () => {
//     setLoading(true); setError(null)
//     try {
//       const res = await fetch('https://fakestoreapi.com/products')
//       if(!res.ok) throw new Error('API error ' + res.status)
//       const data = await res.json()
//       setProducts(data)
//     } catch (err) {
//       setError(err.message || 'Unknown error')
//     } finally { setLoading(false) }
//   }

//   useEffect(() => {
//     fetchData()
//     // fetch categories
//     fetch('https://fakestoreapi.com/products/categories').then(r=>r.json()).then(c=>setCategories(c)).catch(()=>{})
//   }, [])

//   const filtered = useMemo(() => {
//     let list = [...products]
//     if(category !== 'all') list = list.filter(p => p.category === category)
//     if(query.trim()) list = list.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
//     if(sort === 'asc') list.sort((a,b)=>a.price-b.price)
//     if(sort === 'desc') list.sort((a,b)=>b.price-a.price)
//     return list
//   }, [products, category, query, sort])

//   return (
//     <div className="page">
//       <Head><title>Fake Store Dashboard</title></Head>
//       <Header
//         query={query} setQuery={setQuery}
//         category={category} setCategory={setCategory}
//         sort={sort} setSort={setSort}
//         categories={categories}
//         theme={theme} toggleTheme={toggleTheme}
//       />
//       <main className="container">
//         {loading && <div className="skeleton-grid"><div className="skeleton-card"/><div className="skeleton-card"/><div className="skeleton-card"/></div>}
//         {error && <div className="error-box">Error: {error} <button onClick={fetchData} className="btn">Retry</button></div>}
//         {!loading && !error && <ProductGrid products={filtered} />}
//         {!loading && !error && filtered.length===0 && <p className="empty">No products match your search.</p>}
//       </main>
//     </div>
//   )
// }
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'

export default function Home({ theme, toggleTheme }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('none')
  const [categories, setCategories] = useState([])

  const fetchData = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if(!res.ok) throw new Error('API error ' + res.status)
      const data = await res.json()
      setProducts(data)
    } catch (err) {
      setError(err.message || 'Unknown error')
    } finally { setLoading(false) }
  }

  useEffect(() => {
    fetchData()
    // fetch categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(r=>{
        if(!r.ok) throw new Error('Categories fetch failed')
        return r.json()
      })
      .then(c=>setCategories(c))
      .catch(()=>setCategories([]))
  }, [])

  const filtered = useMemo(() => {
    let list = [...products]
    if(category !== 'all') list = list.filter(p => p.category === category)
    if(query.trim()) list = list.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    if(sort === 'asc') list.sort((a,b)=>a.price-b.price)
    if(sort === 'desc') list.sort((a,b)=>b.price-a.price)
    return list
  }, [products, category, query, sort])

  return (
    <div className="page">
      <Head><title> Store </title></Head>
      <Header
        query={query} setQuery={setQuery}
        category={category} setCategory={setCategory}
        sort={sort} setSort={setSort}
        categories={categories}
        theme={theme} toggleTheme={toggleTheme}
      />
      <main className="container">
        {loading && (
          <div className="skeleton-grid">
            {Array.from({ length: 8 }).map((_, i) => <div key={i} className="skeleton-card" />)}
          </div>
        )}

        {error && (
          <div className="error-box">
            <div style={{marginBottom:8}}>Error: {error}</div>
            <button onClick={fetchData} className="btn">Retry</button>
          </div>
        )}

        {!loading && !error && <ProductGrid products={filtered} />}

        {!loading && !error && filtered.length===0 && <p className="empty">No products match your search.</p>}
      </main>
    </div>
  )
}
