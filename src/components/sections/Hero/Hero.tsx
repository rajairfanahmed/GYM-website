import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Button from '@/components/common/Button/Button'
import styles from './Hero.module.css'

interface HeroProps {
  title: string
  subtitle?: string
  ctaPrimary?: {
    text: string
    to: string
  }
  ctaSecondary?: {
    text: string
    to: string
  }
  backgroundImage?: string
  videoBackground?: string
  children?: ReactNode
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  videoBackground,
  children
}: HeroProps) {
  return (
    <section className={styles.hero}>
      {(backgroundImage || videoBackground) && (
        <div className={styles.heroBackground}>
          {videoBackground ? (
            <video autoPlay loop muted playsInline>
              <source src={videoBackground} type="video/mp4" />
            </video>
          ) : backgroundImage ? (
            <img src={backgroundImage} alt="" loading="eager" />
          ) : null}
          <div className={styles.heroOverlay} />
        </div>
      )}

      <div className={styles.heroContent}>
        {children || (
          <>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                {subtitle}
              </motion.p>
            )}
            {(ctaPrimary || ctaSecondary) && (
              <motion.div 
                className={styles.heroActions}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                {ctaPrimary && (
                  <Button variant="primary" size="lg" as="link" to={ctaPrimary.to}>
                    {ctaPrimary.text}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button variant="outline" size="lg" as="link" to={ctaSecondary.to}>
                    {ctaSecondary.text}
                  </Button>
                )}
              </motion.div>
            )}
          </>
        )}
      </div>


      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.8 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <span>Scroll</span>
        <FiChevronDown size={20} />
      </motion.div>
    </section>
  )
}
