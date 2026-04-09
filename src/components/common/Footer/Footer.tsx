import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import Button from '../Button/Button'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div className={styles.footerBrand}>
              <h3>FitZone Pro</h3>
              <p>Elevate Your Potential. Transform your body and mind with expert guidance and premium facilities.</p>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FiInstagram size={20} />
                </a>
                <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FiFacebook size={20} />
                </a>
                <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FiTwitter size={20} />
                </a>
                <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <div className={styles.footerLinks}>
              <Link to="/" className={styles.footerLink}>Home</Link>
              <Link to="/about" className={styles.footerLink}>About</Link>
              <Link to="/services" className={styles.footerLink}>Services</Link>
              <Link to="/classes" className={styles.footerLink}>Classes</Link>
              <Link to="/trainers" className={styles.footerLink}>Trainers</Link>
              <Link to="/membership" className={styles.footerLink}>Membership</Link>
              <Link to="/gallery" className={styles.footerLink}>Gallery</Link>
              <Link to="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} size={18} />
                <span>123 Fitness Avenue<br />Los Angeles, CA 90001</span>
              </div>
              <div className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} size={18} />
                <span>(555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} size={18} />
                <span>info@fitzonepro.com</span>
              </div>
              <div className={styles.contactItem}>
                <FiClock className={styles.contactIcon} size={18} />
                <span>Mon-Fri: 5AM-10PM<br />Sat-Sun: 7AM-8PM</span>
              </div>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <div className={styles.newsletter}>
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on classes, events, and special offers.</p>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.newsletterInput}
                  required
                />
                <Button variant="primary" size="md" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 FitZone Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
