import { Helmet } from 'react-helmet-async'
import { FiCheck } from 'react-icons/fi'
import Hero from '@/components/sections/Hero/Hero'
import Button from '@/components/common/Button/Button'
import { membershipPlans } from '@/utils/constants'
import styles from './Membership.module.css'

export default function Membership() {
  return (
    <>
      <Helmet>
        <title>Membership Plans - FitZone Pro</title>
        <meta name="description" content="Choose the perfect membership plan for your fitness journey. Flexible options to fit your lifestyle and goals." />
      </Helmet>

      <Hero
        title="Choose Your Plan"
        subtitle="Flexible membership options designed to fit your lifestyle"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.plansGrid}>
            {membershipPlans.map(plan => (
              <div key={plan.id} className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
                {plan.popular && <div className={styles.badge}>Most Popular</div>}
                <div className={styles.planHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.price}>
                    <span className={styles.amount}>${plan.price}</span>
                    <span className={styles.period}>/{plan.period}</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FiCheck className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  fullWidth
                  as="link"
                  to="/contact"
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>

          <div className={styles.faq}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h4>Can I cancel anytime?</h4>
                <p>Yes, all memberships are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Is there a joining fee?</h4>
                <p>We occasionally waive joining fees during promotions. Contact us to learn about current offers.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Can I freeze my membership?</h4>
                <p>Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Do you offer student discounts?</h4>
                <p>Yes, we offer 15% off for students with valid ID. Contact us for details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
