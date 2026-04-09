import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '@/components/sections/Hero/Hero'
import { services } from '@/utils/constants'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - FitZone Pro</title>
        <meta name="description" content="Explore our comprehensive fitness services including personal training, group classes, nutrition counseling, and more." />
      </Helmet>

      <Hero
        title="Our Services"
        subtitle="Comprehensive fitness solutions tailored to your goals"
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <Link key={service.id} to={`/services/${service.id}`} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.serviceFooter}>
                    {service.price && <span className={styles.price}>{service.price}</span>}
                    <span className={styles.link}>Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
