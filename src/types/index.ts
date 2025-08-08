// Global type definitions for the portfolio application

/**
 * Personal information interface
 */
export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  phone?: string
  location: string
  website: string
  avatar: string
  resume: string
}

/**
 * Social media links
 */
export interface SocialLinks {
  github: string
  linkedin?: string
  twitter?: string
  instagram?: string
  youtube?: string
  discord?: string
}

/**
 * Technology/Skill interface
 */
export interface Technology {
  id: string
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'mobile'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience: number
  description?: string
  color?: string
}

/**
 * Project interface
 */
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  images?: string[]
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'library' | 'other'
  status: 'completed' | 'in-progress' | 'planned' | 'archived'
  featured: boolean
  links: {
    demo?: string
    github?: string
    documentation?: string
    blog?: string
  }
  startDate: string
  endDate?: string
  teamSize?: number
  role?: string
  challenges?: string[]
  achievements?: string[]
  metrics?: {
    users?: number
    performance?: string
    coverage?: number
  }
}

/**
 * Work experience interface
 */
export interface Experience {
  id: string
  company: string
  position: string
  description: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
  startDate: string
  endDate?: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
  companyUrl?: string
  companyLogo?: string
}

/**
 * Education interface
 */
export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
  description?: string
  achievements?: string[]
  location: string
}

/**
 * Certification interface
 */
export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
  description?: string
}

/**
 * Blog post interface
 */
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  image?: string
  tags: string[]
  category: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  author: {
    name: string
    avatar: string
  }
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  company?: string
  budget?: string
  timeline?: string
  projectType?: string
}

/**
 * Newsletter subscription
 */
export interface NewsletterSubscription {
  email: string
  name?: string
  interests?: string[]
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * Pagination interface
 */
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * Filter options for projects
 */
export interface ProjectFilters {
  category?: string
  technology?: string
  status?: string
  featured?: boolean
  search?: string
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  primaryColor: string
  accentColor: string
  fontFamily: string
  animations: boolean
}

/**
 * SEO Meta data
 */
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

/**
 * Analytics event
 */
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  customParameters?: Record<string, any>
}

/**
 * Navigation item
 */
export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
  external?: boolean
  children?: NavigationItem[]
}

/**
 * Language option
 */
export interface Language {
  code: string
  name: string
  flag: string
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
  date: string
  featured: boolean
}

/**
 * Service offering
 */
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  pricing?: {
    type: 'fixed' | 'hourly' | 'project'
    amount: number
    currency: string
  }
  duration?: string
  deliverables?: string[]
}

/**
 * FAQ item
 */
export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
}

/**
 * Component props with common properties
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * Animation variants for Framer Motion
 */
export interface AnimationVariants {
  hidden: any
  visible: any
  exit?: any
}

/**
 * Form field configuration
 */
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  validation?: any
  options?: { value: string; label: string }[]
}

/**
 * Error boundary state
 */
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: any
}

/**
 * Loading state
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

/**
 * Generic API error
 */
export interface ApiError {
  message: string
  code?: string | number
  details?: any
}

/**
 * File upload interface
 */
export interface FileUpload {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'success' | 'error'
  url?: string
  error?: string
}