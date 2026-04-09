import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { Testimonial } from '@/types'
import styles from './Testimonials.module.css'

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export default function Testimonials({ testimonials, title, subtitle }: TestimonialsProps) {
  const featured = testimonials[0]

  return (
    <section className={styles.testimonials}>
      <div className="container">
        {(title || subtitle) && (
          <motion.div 
            className={styles.testimonialsHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </motion.div>
        )}

        {featured && (
          <motion.div 
            className={styles.testimonialCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className={styles.testimonialRating}>
              {Array.from({ length: featured.rating }).map((_, i) => (
                <FiStar key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className={styles.testimonialText}>"{featured.text}"</p>
            <div className={styles.testimonialAuthor}>
              <img
                src={featured.image}
                alt={featured.name}
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialInfo}>
                <h4>{featured.name}</h4>
                <p>{featured.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
