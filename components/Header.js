import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaHome, FaMapMarkerAlt } from 'react-icons/fa'

export default function Header({
  query,
  setQuery,
  category,
  setCategory,
  sort,
  setSort,
  categories,
  theme,
  toggleTheme
}) {
  const [location, setLocation] = useState("Detecting location...")

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocation("Your Location"),
        () => setLocation("Location access denied")
      )
    } else {
      setLocation("Location not supported")
    }
  }, [])

  const formatCategory = (name) =>
    name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Left brand + location */}
        <div className="brand-location">
          <Link href="/" className="store-link">
            <FaHome size={22} style={{ marginRight: '6px' }} />
            ShopDash
          </Link>
          <div className="location">
            <FaMapMarkerAlt size={14} />
            <span>{location}</span>
          </div>
        </div>

        {/* Search bar centered */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search"
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{formatCategory(c)}</option>
            ))}
          </select>

          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="none">Sort</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

