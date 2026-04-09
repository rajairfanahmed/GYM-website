import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiClock, FiUsers } from 'react-icons/fi'
import Hero from '@/components/sections/Hero/Hero'
import { classes } from '@/utils/constants'
import styles from './Classes.module.css'

export default function Classes() {
  return (
    <>
      <Helmet>
        <title>Classes - FitZone Pro</title>
        <meta name="description" content="Explore our diverse range of group fitness classes led by expert instructors." />
      </Helmet>

      <Hero
        title="Group Fitness Classes"
        subtitle="Over 100 weekly classes to fit your schedule and goals"
        backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.classesGrid}>
            {classes.map(gymClass => (
              <Link key={gymClass.id} to={`/classes/${gymClass.id}`} className={styles.classCard}>
                <div className={styles.classImage}>
                  <img src={gymClass.image} alt={gymClass.name} loading="lazy" />
                  <div className={styles.difficulty} data-difficulty={gymClass.difficulty.toLowerCase()}>
                    {gymClass.difficulty}
                  </div>
                </div>
                <div className={styles.classContent}>
                  <h3>{gymClass.name}</h3>
                  <p className={styles.instructor}>with {gymClass.instructor}</p>
                  <p className={styles.description}>{gymClass.description}</p>
                  <div className={styles.classInfo}>
                    <div className={styles.infoItem}>
                      <FiClock size={16} />
                      <span>{gymClass.duration} min</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FiUsers size={16} />
                      <span>{gymClass.capacity} spots</span>
                    </div>
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
