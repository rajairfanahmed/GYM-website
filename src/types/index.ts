import { ReactNode } from 'react'

// Trainer
export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  experience: number;
  certifications: string[];
  image: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Class
export interface GymClass {
  id: string;
  name: string;
  category: string;
  instructor: string;
  instructorId: string;
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  schedule: {
    day: string;
    time: string;
  }[];
  capacity: number;
  description: string;
  image: string;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration?: string;
  price?: string;
  image: string;
  icon: string;
}

// Membership
export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year';
  features: string[];
  popular?: boolean;
  ctaText: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

// Feature
export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

// Stat
export interface Stat {
  icon?: string;
  value: number;
  label: string;
  suffix?: string;
}

