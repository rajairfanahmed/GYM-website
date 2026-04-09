import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Stat } from '@/types'
import styles from './Stats.module.css'

interface StatsProps {
  stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <div className={styles.statValue}>
                {isVisible ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <>{count}{suffix}</>
}
