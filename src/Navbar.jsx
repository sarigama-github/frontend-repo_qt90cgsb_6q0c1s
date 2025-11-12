import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/shop', label: 'Shop' },
  { to: '/events', label: 'Events' },
  { to: '/careers', label: 'Careers' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-[#E5E2DC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#4D411D]"></div>
          <span className="tracking-[0.2em] text-sm font-serif">PROPER TRIM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-[#4D411D] ${isActive ? 'text-[#4D411D]' : 'text-neutral-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/services" className="ml-4 inline-flex items-center rounded-full bg-[#4D411D] text-white px-4 py-2 text-sm hover:opacity-95 transition">
            Book Now
          </Link>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E5E2DC] bg-white">
          <div className="px-4 py-4 grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base transition-colors hover:text-[#4D411D] ${isActive ? 'text-[#4D411D]' : 'text-neutral-800'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/services" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-[#4D411D] text-white px-4 py-2 text-sm w-max">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
