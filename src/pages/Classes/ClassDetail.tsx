import { Helmet } from 'react-helmet-async'
import { useParams, Navigate, Link } from 'react-router-dom'
import { FiClock, FiUsers, FiCalendar } from 'react-icons/fi'
import Button from '@/components/common/Button/Button'
import { classes, trainers } from '@/utils/constants'
import styles from './ClassDetail.module.css'

export default function ClassDetail() {
  const { id } = useParams()
  const gymClass = classes.find(c => c.id === id)

  if (!gymClass) {
    return <Navigate to="/classes" replace />
  }

  const instructor = trainers.find(t => t.id === gymClass.instructorId)

  return (
    <>
      <Helmet>
        <title>{gymClass.name} - FitZone Pro</title>
        <meta name="description" content={gymClass.description} />
      </Helmet>

      <div className={styles.hero}>
        <img src={gymClass.image} alt={gymClass.name} />
        <div className={styles.heroOverlay} />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.header}>
                <h1>{gymClass.name}</h1>
                <div className={styles.difficulty} data-difficulty={gymClass.difficulty.toLowerCase()}>
                  {gymClass.difficulty}
                </div>
              </div>

              <p className={styles.description}>{gymClass.description}</p>

              <div className={styles.section}>
                <h2>Class Schedule</h2>
                <div className={styles.schedule}>
                  {gymClass.schedule.map((slot, index) => (
                    <div key={index} className={styles.scheduleItem}>
                      <FiCalendar className={styles.icon} />
                      <span className={styles.day}>{slot.day}</span>
                      <span className={styles.time}>{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {instructor && (
                <div className={styles.section}>
                  <h2>Instructor</h2>
                  <Link to={`/trainers/${instructor.id}`} className={styles.instructorCard}>
                    <img src={instructor.image} alt={instructor.name} />
                    <div>
                      <h4>{instructor.name}</h4>
                      <p>{instructor.role}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <div className={styles.detail}>
                  <FiClock className={styles.icon} />
                  <div>
                    <span className={styles.label}>Duration</span>
                    <span className={styles.value}>{gymClass.duration} minutes</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <FiUsers className={styles.icon} />
                  <div>
                    <span className={styles.label}>Capacity</span>
                    <span className={styles.value}>{gymClass.capacity} spots</span>
                  </div>
                </div>
                <Button variant="primary" size="lg" fullWidth as="link" to="/contact">
                  Book This Class
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
