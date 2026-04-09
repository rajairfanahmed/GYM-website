import { motion } from 'framer-motion'
import { Feature } from '@/types'
import styles from './Features.module.css'

interface FeaturesProps {
  features: Feature[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
