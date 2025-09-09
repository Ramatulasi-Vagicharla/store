
export function getCart(){ return JSON.parse(typeof window!=='undefined' ? localStorage.getItem('cart') || '[]' : '[]') }
export function setCart(c){ localStorage.setItem('cart', JSON.stringify(c)) }
