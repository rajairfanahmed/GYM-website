import { motion } from 'framer-motion'
import Button from '@/components/common/Button/Button'
import styles from './CTA.module.css'

interface CTAProps {
  title: string
  description?: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function CTA({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink
}: CTAProps) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <motion.h2 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p 
              className={styles.ctaDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
          )}
          <motion.div 
            className={styles.ctaActions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Button variant="primary" size="lg" as="link" to={ctaLink}>
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button variant="outline" size="lg" as="link" to={secondaryCtaLink}>
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
