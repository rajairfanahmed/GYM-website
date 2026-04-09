import { Helmet } from 'react-helmet-async'
import Hero from '@/components/sections/Hero/Hero'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - FitZone Pro</title>
        <meta name="description" content="Learn about FitZone Pro's mission, values, and commitment to helping you achieve your fitness goals." />
      </Helmet>

      <Hero
        title="About FitZone Pro"
        subtitle="Empowering individuals to reach their full potential through fitness, community, and expert guidance"
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
      />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                At FitZone Pro, we believe fitness is more than just physical transformation—it's about building confidence, 
                developing resilience, and creating lasting lifestyle changes. Our mission is to provide a premium fitness 
                experience that empowers every member to elevate their potential, regardless of where they start their journey.
              </p>
              <p>
                We combine cutting-edge equipment, evidence-based training methodologies, and a supportive community to create 
                an environment where success is inevitable. Every program, every class, and every interaction is designed with 
                your goals in mind.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Our Story</h2>
              <p>
                Founded in 2009, FitZone Pro began with a simple vision: create a fitness center that prioritizes results, 
                community, and member experience above all else. What started as a single location has grown into a recognized 
                leader in the fitness industry, serving over 5,000 active members.
              </p>
              <p>
                Our founders, both former athletes and certified trainers, saw a gap in the market for a gym that combined 
                premium facilities with personalized attention. Fifteen years later, that vision continues to drive everything 
                we do. We've helped thousands of members achieve transformations they never thought possible.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Why Choose Us</h2>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Expert Trainers</h3>
                  <p>Our certified professionals bring decades of combined experience and stay current with the latest fitness science.</p>
                </div>
                <div className={styles.card}>
                  <h3>Premium Facilities</h3>
                  <p>State-of-the-art equipment, spacious training areas, and immaculate cleanliness standards.</p>
                </div>
                <div className={styles.card}>
                  <h3>Proven Results</h3>
                  <p>98% member satisfaction rate and thousands of successful transformations speak for themselves.</p>
                </div>
                <div className={styles.card}>
                  <h3>Supportive Community</h3>
                  <p>Join a motivating environment where members celebrate each other's victories and progress.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Our Values</h2>
              <ul className={styles.values}>
                <li><strong>Excellence:</strong> We maintain the highest standards in everything we do, from equipment maintenance to program design.</li>
                <li><strong>Integrity:</strong> We deliver on our promises and build trust through transparency and honesty.</li>
                <li><strong>Community:</strong> We foster an inclusive environment where everyone feels welcome and supported.</li>
                <li><strong>Innovation:</strong> We continuously evolve our offerings to incorporate the latest fitness science and technology.</li>
                <li><strong>Results:</strong> We measure our success by your success and are committed to helping you achieve your goals.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
