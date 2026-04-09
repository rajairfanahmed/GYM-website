import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import Button from '../Button/Button'
import styles from './Navigation.module.css'

interface NavLink {
  to: string
  label: string
}

interface NavigationProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export default function Navigation({ isOpen, onClose, links }: NavigationProps) {
  const location = useLocation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuInner}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>
          <nav className={styles.menuLinks}>
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`${styles.menuLink} ${location.pathname === link.to ? styles.menuLinkActive : ''}`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.menuCta}>
            <Button variant="primary" size="lg" fullWidth as="link" to="/membership">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
