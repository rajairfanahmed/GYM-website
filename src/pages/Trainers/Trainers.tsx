import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import Hero from '@/components/sections/Hero/Hero'
import { trainers } from '@/utils/constants'
import styles from './Trainers.module.css'

export default function Trainers() {
  return (
    <>
      <Helmet>
        <title>Our Trainers - FitZone Pro</title>
        <meta name="description" content="Meet our team of expert certified trainers dedicated to helping you achieve your fitness goals." />
      </Helmet>

      <Hero
        title="Meet Our Expert Trainers"
        subtitle="Certified professionals dedicated to your success"
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.trainersGrid}>
            {trainers.map(trainer => (
              <Link key={trainer.id} to={`/trainers/${trainer.id}`} className={styles.trainerCard}>
                <div className={styles.trainerImage}>
                  <img src={trainer.image} alt={trainer.name} loading="lazy" />
                </div>
                <div className={styles.trainerContent}>
                  <h3>{trainer.name}</h3>
                  <p className={styles.role}>{trainer.role}</p>
                  <div className={styles.specializations}>
                    {trainer.specialization.map((spec, index) => (
                      <span key={index} className={styles.tag}>{spec}</span>
                    ))}
                  </div>
                  <p className={styles.experience}>{trainer.experience} years experience</p>
                  <div className={styles.socialLinks}>
                    {trainer.socialLinks.instagram && (
                      <a href={trainer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FiInstagram size={18} />
                      </a>
                    )}
                    {trainer.socialLinks.facebook && (
                      <a href={trainer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FiFacebook size={18} />
                      </a>
                    )}
                    {trainer.socialLinks.twitter && (
                      <a href={trainer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FiTwitter size={18} />
                      </a>
                    )}
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
