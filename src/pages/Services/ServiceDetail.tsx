import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import Button from '@/components/common/Button/Button'
import { services } from '@/utils/constants'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - FitZone Pro</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className={styles.hero}>
        <img src={service.image} alt={service.title} />
        <div className={styles.heroOverlay} />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <h1>{service.title}</h1>
              <p className={styles.description}>{service.description}</p>

              <div className={styles.benefits}>
                <h2>What's Included</h2>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>
                      <FiCheck className={styles.checkIcon} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                {service.duration && (
                  <div className={styles.detail}>
                    <span className={styles.label}>Duration</span>
                    <span className={styles.value}>{service.duration}</span>
                  </div>
                )}
                {service.price && (
                  <div className={styles.detail}>
                    <span className={styles.label}>Price</span>
                    <span className={styles.value}>{service.price}</span>
                  </div>
                )}
                <Button variant="primary" size="lg" fullWidth as="link" to="/contact">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
