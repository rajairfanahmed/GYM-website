import { Helmet } from 'react-helmet-async'
import { useState, FormEvent, ChangeEvent } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import Hero from '@/components/sections/Hero/Hero'
import Button from '@/components/common/Button/Button'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - FitZone Pro</title>
        <meta name="description" content="Get in touch with FitZone Pro. Visit us, call, or send a message to start your fitness journey." />
      </Helmet>

      <Hero
        title="Get In Touch"
        subtitle="We're here to help you start your fitness journey"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <p className={styles.intro}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <FiMapPin className={styles.icon} />
                  <div>
                    <h4>Address</h4>
                    <p>123 Fitness Avenue<br />Los Angeles, CA 90001</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiPhone className={styles.icon} />
                  <div>
                    <h4>Phone</h4>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiMail className={styles.icon} />
                  <div>
                    <h4>Email</h4>
                    <p>info@fitzonepro.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiClock className={styles.icon} />
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 5:00 AM - 10:00 PM<br />Sat-Sun: 7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Class Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
