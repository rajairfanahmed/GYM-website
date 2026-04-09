import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import Hero from '@/components/sections/Hero/Hero'
import styles from './Gallery.module.css'

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', category: 'Facilities', alt: 'Modern gym equipment' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop', category: 'Facilities', alt: 'Weight training area' },
  { id: 3, url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop', category: 'Classes', alt: 'Group fitness class' },
  { id: 4, url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop', category: 'Classes', alt: 'Yoga class in session' },
  { id: 5, url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', category: 'Training', alt: 'Personal training session' },
  { id: 6, url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop', category: 'Equipment', alt: 'Cardio equipment zone' },
  { id: 7, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', category: 'Classes', alt: 'Cycling class' },
  { id: 8, url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop', category: 'Training', alt: 'Boxing training' },
  { id: 9, url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop', category: 'Training', alt: 'Functional training area' },
  { id: 10, url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop', category: 'Classes', alt: 'Meditation and mindfulness' },
  { id: 11, url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop', category: 'Facilities', alt: 'Nutrition bar' },
  { id: 12, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop', category: 'Training', alt: 'Athletic performance training' }
]

const categories = ['All', 'Facilities', 'Classes', 'Training', 'Equipment']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Gallery - FitZone Pro</title>
        <meta name="description" content="Explore our state-of-the-art facilities, classes, and training environments." />
      </Helmet>

      <Hero
        title="Our Facility"
        subtitle="Take a visual tour of our premium fitness center"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.gallery}>
            {filteredImages.map(image => (
              <div key={image.id} className={styles.galleryItem}>
                <img src={image.url} alt={image.alt} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.category}>{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
