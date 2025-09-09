
// import Link from 'next/link'

// export default function Header({ query, setQuery, category, setCategory, sort, setSort, categories, theme, toggleTheme }) {
//   return (
//     <header className="header">
//       <div className="header-inner container">
//         <div className="brand">
//   <Link href="/">FakeStore</Link>
// </div>

//         <div className="controls">
//           <input className="search" placeholder="Search products..." value={query} onChange={e=>setQuery(e.target.value)} />
//           <select value={category} onChange={e=>setCategory(e.target.value)} aria-label="Filter">
//             <option value="all">All categories</option>
//             {categories.map(c=> <option key={c} value={c}>{c}</option>)}
//           </select>
//           <select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort">
//             <option value="none">Sort</option>
//             <option value="asc">Price: Low → High</option>
//             <option value="desc">Price: High → Low</option>
//           </select>
//           <button className="btn theme-toggle" onClick={toggleTheme}>{theme==='light' ? '🌙' : '☀️'}</button>
//         </div>
//       </div>
//     </header>
//   )
// }
import Link from 'next/link'

export default function Header({ query, setQuery, category, setCategory, sort, setSort, categories, theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="brand">
          <Link href="/">Store</Link>
        </div>
        <div className="controls">
          <input
            className="search"
            placeholder="Search products..."
            value={query}
            onChange={e=>setQuery(e.target.value)}
            aria-label="Search products"
          />
          <select value={category} onChange={e=>setCategory(e.target.value)} aria-label="Filter by category">
            <option value="all">All categories</option>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort by price">
            <option value="none">Sort</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
          <button className="btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme==='light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

