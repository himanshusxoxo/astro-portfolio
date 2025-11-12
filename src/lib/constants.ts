import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/SandeeepKrish',
  linkedin: 'https://www.linkedin.com/in/sandeep-yadav-92a27b294/',
  mail: 'yadavsandeep0718@gmail.com',

}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Sandeep Yadav',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'MCA : Model Institute of Engineering and Technology',
    link: 'https://www.mycamu.co.in/#/home/feed/profile',
    date: '2022 - 2024',
  },
  {
    title: '...',
    institution: 'BCA : Cluster University of Jammu',
    link: '',
    date: '2019 - 2022',
  },
  {
    title: '...',
    institution: 'Coursera',
    link: 'https://www.coursera.org/account-profile',
    date: '2018 - 2022',
  },
   {
    title: 'XII',
    institution: 'XII : Shiksha Niketan',
    link: 'https://shikshaniketanjk.in/',
    date: '2017 - 2019',
  }


]

export const EXPERIENCE = [
  {
    company: 'TWENTYFIVE TECHNOARTS',
    location: 'Jammu, India',
    position: 'Software Development Engineer',
    start: '2024 - 2025',
    link: 'https://www.facebook.com/25Technoarts/',

    tasks: [
      'Designed and implemented a hospital management system to fully digitalize operations, replacing paper-based workflows and integrating AI to assist intern doctors with real-time clinical insights.',
      'Contributed to SkincareConnect, a live AI-driven product, by enhancing the frontend architecture, developing new responsive modules, and deploying production-ready builds via XPanel.',
      'Engineered and optimized RESTful APIs to streamline communication between frontend, backend, and AI microservices; implemented secure authentication (JWT), request validation, pagination, and versioning with detailed API documentation using Swagger/Postman.',
      'Architected and maintained robust databases using MongoDB, designing scalable data models, efficient indexing, and aggregation pipelines to support AI analytics and real-time data processing.',
      'Integrated AI services within a modern frontend ecosystem built on React and Tailwind CSS, delivering a seamless, responsive user experience and enabling smooth interaction with machine learning components through well-structured REST endpoints.'

    ],
  },
]
