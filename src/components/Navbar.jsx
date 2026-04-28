import React, { useState, useEffect } from 'react'
import { Moon, Sun, Download } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container flex-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-xl">
            K
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Kishore K</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-accent font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-text-secondary hover:text-accent">
            <Sun size={20} />
          </button>
          <a
            href="/resume.pdf"
            className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
