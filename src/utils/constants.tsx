import { FiActivity, FiUsers, FiTrendingUp, FiAward, FiHeart, FiZap } from 'react-icons/fi'
import { Trainer, GymClass, Service, MembershipPlan, Testimonial, Feature, Stat } from '@/types'

// Features
export const features: Feature[] = [
  {
    icon: <FiActivity />,
    title: 'State-of-the-Art Equipment',
    description: 'Access cutting-edge fitness technology and premium equipment from industry-leading brands to maximize your workout efficiency.'
  },
  {
    icon: <FiUsers />,
    title: 'Expert Personal Trainers',
    description: 'Work with certified professionals who create personalized programs tailored to your unique goals and fitness level.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Proven Results',
    description: 'Join thousands of members who have transformed their lives with our science-backed training methodologies and nutrition guidance.'
  },
  {
    icon: <FiAward />,
    title: 'Award-Winning Facility',
    description: 'Train in a premium environment recognized for excellence in fitness innovation, cleanliness, and member satisfaction.'
  },
  {
    icon: <FiHeart />,
    title: 'Supportive Community',
    description: 'Be part of a motivating community that celebrates every milestone and supports your journey to better health.'
  },
  {
    icon: <FiZap />,
    title: 'Flexible Class Schedule',
    description: 'Choose from over 100 weekly classes designed to fit your schedule, from early morning to late evening sessions.'
  }
]

// Stats
export const stats: Stat[] = [
  { value: 5000, label: 'Active Members', suffix: '+' },
  { value: 100, label: 'Weekly Classes', suffix: '+' },
  { value: 15, label: 'Years Experience', suffix: '' },
  { value: 98, label: 'Success Rate', suffix: '%' }
]

// Trainers
export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    role: 'Head Strength Coach',
    specialization: ['Strength Training', 'Powerlifting', 'Sports Performance'],
    bio: 'Marcus brings 12 years of experience in strength and conditioning, having worked with professional athletes and Olympic competitors. His evidence-based approach combines biomechanics with progressive overload principles to deliver exceptional results.',
    experience: 12,
    certifications: ['NSCA-CSCS', 'USAW Level 2', 'FMS Level 2'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'Yoga & Mindfulness Director',
    specialization: ['Vinyasa Yoga', 'Meditation', 'Breathwork'],
    bio: 'With 10 years of dedicated practice and teaching, Sarah creates transformative experiences that unite body and mind. Her classes blend traditional yoga philosophy with modern movement science.',
    experience: 10,
    certifications: ['RYT-500', 'Yoga Medicine', 'Mindfulness-Based Stress Reduction'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  },
  {
    id: '3',
    name: 'David Rodriguez',
    role: 'HIIT & Cardio Specialist',
    specialization: ['HIIT', 'Metabolic Conditioning', 'Fat Loss'],
    bio: 'David specializes in high-intensity training protocols that maximize calorie burn and improve cardiovascular health. His dynamic classes are known for their energy and effectiveness.',
    experience: 8,
    certifications: ['NASM-CPT', 'AFAA Group Fitness', 'TRX Certified'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '4',
    name: 'Emily Thompson',
    role: 'Nutrition & Wellness Coach',
    specialization: ['Nutrition Coaching', 'Weight Management', 'Lifestyle Design'],
    bio: 'Emily combines her expertise in nutrition science with behavioral psychology to help clients build sustainable healthy habits. Her holistic approach addresses both physical and mental wellness.',
    experience: 9,
    certifications: ['Precision Nutrition Level 2', 'ACE Health Coach', 'Behavior Change Specialist'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '5',
    name: 'James Park',
    role: 'Functional Training Expert',
    specialization: ['Functional Movement', 'Mobility', 'Injury Prevention'],
    bio: 'James focuses on movement quality and functional strength that translates to real-life activities. His background in physical therapy informs his approach to safe, effective training.',
    experience: 11,
    certifications: ['FMS', 'SFMA', 'Certified Strength Coach'],
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '6',
    name: 'Nina Patel',
    role: 'Pilates & Core Specialist',
    specialization: ['Pilates', 'Core Conditioning', 'Posture Correction'],
    bio: 'Nina brings precision and mindfulness to every session, helping clients develop core strength and body awareness. Her Pilates-based approach improves posture, flexibility, and overall movement quality.',
    experience: 7,
    certifications: ['Comprehensive Pilates Certification', 'Barre Above', 'Pre/Postnatal Specialist'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    }
  }
]

// Classes
export const classes: GymClass[] = [
  {
    id: '1',
    name: 'Power HIIT',
    category: 'HIIT',
    instructor: 'David Rodriguez',
    instructorId: '3',
    duration: 45,
    difficulty: 'Intermediate',
    schedule: [
      { day: 'Monday', time: '6:00 AM' },
      { day: 'Wednesday', time: '6:00 AM' },
      { day: 'Friday', time: '6:00 AM' }
    ],
    capacity: 20,
    description: 'High-intensity interval training designed to torch calories and boost metabolism. This fast-paced class combines cardio and strength exercises for maximum results in minimum time.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Vinyasa Flow',
    category: 'Yoga',
    instructor: 'Sarah Mitchell',
    instructorId: '2',
    duration: 60,
    difficulty: 'Beginner',
    schedule: [
      { day: 'Tuesday', time: '7:00 AM' },
      { day: 'Thursday', time: '7:00 AM' },
      { day: 'Saturday', time: '9:00 AM' }
    ],
    capacity: 25,
    description: 'Flow through dynamic sequences that build strength, flexibility, and mindfulness. Perfect for all levels, this class emphasizes breath-movement connection.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'Strength Foundations',
    category: 'Strength Training',
    instructor: 'Marcus Chen',
    instructorId: '1',
    duration: 60,
    difficulty: 'Beginner',
    schedule: [
      { day: 'Monday', time: '5:00 PM' },
      { day: 'Wednesday', time: '5:00 PM' },
      { day: 'Friday', time: '5:00 PM' }
    ],
    capacity: 15,
    description: 'Learn proper lifting technique and build a solid strength foundation. This class covers fundamental movement patterns with progressive loading strategies.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Pilates Core',
    category: 'Pilates',
    instructor: 'Nina Patel',
    instructorId: '6',
    duration: 50,
    difficulty: 'Intermediate',
    schedule: [
      { day: 'Tuesday', time: '6:00 PM' },
      { day: 'Thursday', time: '6:00 PM' }
    ],
    capacity: 18,
    description: 'Develop core strength, improve posture, and enhance body awareness through controlled Pilates movements. Focus on precision and breath control.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    name: 'Boxing Bootcamp',
    category: 'Boxing',
    instructor: 'David Rodriguez',
    instructorId: '3',
    duration: 60,
    difficulty: 'Advanced',
    schedule: [
      { day: 'Monday', time: '7:00 PM' },
      { day: 'Thursday', time: '7:00 PM' }
    ],
    capacity: 16,
    description: 'Intense boxing-inspired workout combining technique drills, heavy bag work, and conditioning. Build power, speed, and endurance while learning proper boxing fundamentals.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    name: 'Functional Movement',
    category: 'Functional Training',
    instructor: 'James Park',
    instructorId: '5',
    duration: 45,
    difficulty: 'Intermediate',
    schedule: [
      { day: 'Tuesday', time: '5:30 PM' },
      { day: 'Friday', time: '5:30 PM' }
    ],
    capacity: 20,
    description: 'Train movements, not muscles. This class focuses on functional patterns that improve daily life performance and reduce injury risk.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop'
  },
  {
    id: '7',
    name: 'Cycling Endurance',
    category: 'Cycling',
    instructor: 'David Rodriguez',
    instructorId: '3',
    duration: 45,
    difficulty: 'Intermediate',
    schedule: [
      { day: 'Wednesday', time: '6:30 AM' },
      { day: 'Saturday', time: '8:00 AM' }
    ],
    capacity: 25,
    description: 'Rhythm-based indoor cycling class with motivating music and varied terrain. Build cardiovascular endurance while burning serious calories.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
  },
  {
    id: '8',
    name: 'Restorative Yoga',
    category: 'Yoga',
    instructor: 'Sarah Mitchell',
    instructorId: '2',
    duration: 75,
    difficulty: 'Beginner',
    schedule: [
      { day: 'Sunday', time: '5:00 PM' }
    ],
    capacity: 20,
    description: 'Gentle, meditative practice focused on deep relaxation and stress relief. Perfect for recovery days and cultivating mindfulness.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop'
  }
]

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals, fitness level, and schedule. Our certified trainers create customized programs that deliver results.',
    benefits: [
      'Personalized workout programming',
      'Form correction and technique coaching',
      'Accountability and motivation',
      'Progress tracking and adjustments',
      'Nutrition guidance'
    ],
    duration: '60 minutes',
    price: 'From $85/session',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    icon: 'FiUser'
  },
  {
    id: '2',
    title: 'Group Classes',
    description: 'Join our energizing group fitness classes led by expert instructors. From HIIT to yoga, we offer diverse options to keep your workouts exciting and effective.',
    benefits: [
      'Over 100 weekly class options',
      'All fitness levels welcome',
      'Motivating group atmosphere',
      'Expert instruction',
      'Variety of training styles'
    ],
    duration: '45-75 minutes',
    price: 'Included with membership',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
    icon: 'FiUsers'
  },
  {
    id: '3',
    title: 'Nutrition Counseling',
    description: 'Work with our certified nutrition coaches to develop sustainable eating habits that support your fitness goals and overall wellness.',
    benefits: [
      'Personalized meal planning',
      'Macro and calorie guidance',
      'Supplement recommendations',
      'Habit-based coaching',
      'Ongoing support and accountability'
    ],
    duration: '45 minutes',
    price: 'From $75/session',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    icon: 'FiHeart'
  },
  {
    id: '4',
    title: 'Cardio Training',
    description: 'Access premium cardio equipment including treadmills, bikes, rowers, and ellipticals. Our cardio zone features entertainment systems and heart rate monitoring.',
    benefits: [
      'State-of-the-art equipment',
      'Heart rate zone training',
      'Virtual training programs',
      'Entertainment systems',
      'Climate-controlled environment'
    ],
    duration: 'Flexible',
    price: 'Included with membership',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
    icon: 'FiActivity'
  },
  {
    id: '5',
    title: 'Strength Training',
    description: 'Train with premium free weights, machines, and functional training equipment. Our strength zone is designed for all experience levels.',
    benefits: [
      'Comprehensive equipment selection',
      'Olympic lifting platforms',
      'Cable machines and racks',
      'Functional training area',
      'Expert guidance available'
    ],
    duration: 'Flexible',
    price: 'Included with membership',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    icon: 'FiZap'
  },
  {
    id: '6',
    title: 'Yoga & Pilates',
    description: 'Improve flexibility, balance, and mind-body connection in our dedicated yoga and Pilates studio. Classes for all levels available daily.',
    benefits: [
      'Dedicated studio space',
      'Multiple class styles',
      'Props and equipment provided',
      'Experienced instructors',
      'Beginner-friendly options'
    ],
    duration: '50-75 minutes',
    price: 'Included with membership',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    icon: 'FiHeart'
  },
  {
    id: '7',
    title: 'Functional Training',
    description: 'Develop real-world strength and movement patterns with our functional training programs. Perfect for athletes and anyone seeking practical fitness.',
    benefits: [
      'Movement-based training',
      'Injury prevention focus',
      'Athletic performance enhancement',
      'Mobility and flexibility work',
      'Progressive programming'
    ],
    duration: '45-60 minutes',
    price: 'Included with membership',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    icon: 'FiTrendingUp'
  },
  {
    id: '8',
    title: 'Sports Performance',
    description: 'Elite training programs designed for athletes looking to gain a competitive edge. Sport-specific conditioning and skill development.',
    benefits: [
      'Sport-specific programming',
      'Speed and agility training',
      'Power development',
      'Performance testing',
      'Recovery protocols'
    ],
    duration: '60-90 minutes',
    price: 'From $100/session',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    icon: 'FiAward'
  }
]

// Membership Plans
export const membershipPlans: MembershipPlan[] = [
  {
    id: '1',
    name: 'Basic',
    price: 49,
    period: 'month',
    features: [
      'Access to gym floor and equipment',
      'Cardio and strength training areas',
      'Locker room and showers',
      'Mobile app access',
      'Free fitness assessment'
    ],
    ctaText: 'Get Started'
  },
  {
    id: '2',
    name: 'Premium',
    price: 79,
    period: 'month',
    popular: true,
    features: [
      'Everything in Basic',
      'Unlimited group fitness classes',
      'Guest privileges (2 per month)',
      'Towel service',
      'Priority class booking',
      '10% discount on personal training'
    ],
    ctaText: 'Most Popular'
  },
  {
    id: '3',
    name: 'Elite',
    price: 119,
    period: 'month',
    features: [
      'Everything in Premium',
      '4 personal training sessions/month',
      'Nutrition consultation included',
      'Unlimited guest privileges',
      'Access to all locations',
      'Premium locker rental',
      'Massage therapy discount'
    ],
    ctaText: 'Go Elite'
  },
  {
    id: '4',
    name: 'Family',
    price: 149,
    period: 'month',
    features: [
      'Up to 4 family members',
      'All Premium features for each member',
      'Kids club access',
      'Family training sessions',
      'Special family events',
      'Flexible billing options'
    ],
    ctaText: 'Join as Family'
  }
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Martinez',
    role: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
    rating: 5,
    text: 'FitZone Pro completely transformed my relationship with fitness. The trainers are incredibly knowledgeable and supportive, and the facility is always clean and well-maintained. I\'ve lost 30 pounds and gained so much confidence in just six months.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
    rating: 5,
    text: 'As someone who works long hours, I appreciate the flexible class schedule and the quality of instruction. The HIIT classes with David are intense but incredibly effective. I\'ve never been in better shape, and the community here keeps me motivated.'
  },
  {
    id: '3',
    name: 'Amanda Foster',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop',
    rating: 5,
    text: 'The yoga program at FitZone Pro is exceptional. Sarah\'s classes have helped me manage stress and improve my flexibility tremendously. The studio atmosphere is peaceful, and I always leave feeling refreshed and centered.'
  },
  {
    id: '4',
    name: 'Robert Johnson',
    role: 'Retired Athlete',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    rating: 5,
    text: 'After years of playing sports, I needed a place that understood athletic training. Marcus and the team created a program that keeps me strong and mobile. The functional training approach has been perfect for maintaining my fitness as I age.'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop',
    rating: 5,
    text: 'The nutrition coaching combined with personal training has been life-changing. Emily helped me develop sustainable habits, and I finally understand how to fuel my body properly. Down 25 pounds and feeling amazing!'
  }
]
