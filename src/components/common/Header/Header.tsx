import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiActivity } from 'react-icons/fi'
import { useTheme } from '@/context/ThemeContext'
import Button from '../Button/Button'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/trainers', label: 'Trainers' },
    { to: '/classes', label: 'Classes' },
    { to: '/membership', label: 'Membership' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.header 
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <FiActivity className={styles.logoIcon} />
            <span>FitZone Pro</span>
          </Link>

          <nav className={styles.nav}>
            <div className={styles.navLinks}>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${styles.navLink} ${location.pathname === link.to ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.actions}>
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'night' ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>

              <Button variant="primary" size="md" as="link" to="/membership" className={styles.ctaButton}>
                Join Now
              </Button>

              <button
                className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}
