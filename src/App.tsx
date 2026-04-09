import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/layout/Layout.tsx'
import Loading from './components/common/Loading/Loading.tsx'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About.tsx'))
const Services = lazy(() => import('./pages/Services/Services.tsx'))
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail.tsx'))
const Trainers = lazy(() => import('./pages/Trainers/Trainers.tsx'))
const TrainerDetail = lazy(() => import('./pages/Trainers/TrainerDetail.tsx'))
const Classes = lazy(() => import('./pages/Classes/Classes.tsx'))
const ClassDetail = lazy(() => import('./pages/Classes/ClassDetail.tsx'))
const Membership = lazy(() => import('./pages/Membership/Membership.tsx'))
const Gallery = lazy(() => import('./pages/Gallery.tsx'))
const Contact = lazy(() => import('./pages/Contact.tsx'))
const NotFound = lazy(() => import('./pages/NotFound.tsx'))

function App() {
  const location = useLocation()

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/trainers/:id" element={<TrainerDetail />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/classes/:id" element={<ClassDetail />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </Layout>
  )
}

export default App
