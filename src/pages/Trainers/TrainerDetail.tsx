import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiAward } from 'react-icons/fi'
import Button from '@/components/common/Button/Button'
import { trainers } from '@/utils/constants'
import styles from './TrainerDetail.module.css'

export default function TrainerDetail() {
  const { id } = useParams()
  const trainer = trainers.find(t => t.id === id)

  if (!trainer) {
    return <Navigate to="/trainers" replace />
  }

  return (
    <>
      <Helmet>
        <title>{trainer.name} - FitZone Pro</title>
        <meta name="description" content={trainer.bio} />
      </Helmet>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.sidebar}>
              <div className={styles.imageWrapper}>
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <div className={styles.socialLinks}>
                {trainer.socialLinks.instagram && (
                  <a href={trainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FiInstagram size={20} />
                  </a>
                )}
                {trainer.socialLinks.facebook && (
                  <a href={trainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FiFacebook size={20} />
                  </a>
                )}
                {trainer.socialLinks.twitter && (
                  <a href={trainer.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FiTwitter size={20} />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.main}>
              <h1>{trainer.name}</h1>
              <p className={styles.role}>{trainer.role}</p>

              <div className={styles.section}>
                <h2>About</h2>
                <p>{trainer.bio}</p>
              </div>

              <div className={styles.section}>
                <h2>Specializations</h2>
                <div className={styles.tags}>
                  {trainer.specialization.map((spec, index) => (
                    <span key={index} className={styles.tag}>{spec}</span>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h2>Certifications</h2>
                <ul className={styles.certifications}>
                  {trainer.certifications.map((cert, index) => (
                    <li key={index}>
                      <FiAward className={styles.icon} />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Experience</h2>
                <p className={styles.experience}>{trainer.experience} years of professional training experience</p>
              </div>

              <Button variant="primary" size="lg" as="link" to="/contact">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
