import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | FitZone Pro</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg" as="link" to="/">
              Back to Home
            </Button>
            <Button variant="outline" size="lg" as="link" to="/classes">
              Browse Classes
            </Button>
          </div>
          <div className={styles.links}>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}
