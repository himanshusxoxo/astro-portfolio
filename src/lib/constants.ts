import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/SandeeepKrish',
  linkedin: 'https://www.linkedin.com/in/sandeep-yadav-92a27b294/',
  mail: 'himanshusxoxo@gmail.com',

}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Himanshu Sharma',
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
//   {
//     title: 'Computer Science',
//     institution: 'MCA : Model Institute of Engineering and Technology',
//     link: 'https://www.mycamu.co.in/#/home/feed/profile',
//     date: '2022 - 2024',
//   },
  {
    title: 'Computer Science',
    institution: 'BCA : Cluster University of Jammu',
    link: 'https://clujammu.ac.in/v1/',
    date: '2019 - 2022',
  },
  // {
  //   title: '...',
  //   institution: 'Coursera',
  //   link: 'https://www.coursera.org/account-profile',
  //   date: '2018 - 2022',
  // },
   {
    title: 'XII',
    institution: 'XII : Sri Ranbir Higher Secondary School',
    link: 'https://www.srmlschool.com/',
    date: '2017 - 2019',
  }


]

export const EXPERIENCE = [
  {
    company: 'Richa Global Exports Private Limited',
    location: 'Gurgaon, India',
    position: 'Java Full Stack Developer',
    start: '2025 - Present',
    link: 'https://www.richaglobal.com/',

    tasks: [
      'Working as a full-stack developer on R-Connect, an enterprise-level application built using J-Hipster, Spring Boot, Angular and Java.',
      'Responsible for developing and maintaining RESTful APIs, implementing complex business logic using Java, JPA and Hibernate.',
      'Collaborate closely with cross functional team to deliver scalable, high performance solutions aligned with business requirements and also added new functionality and features to the project.',
      'Designed and integrated a dynamic reporting engine using Jasper Reports, enabling real-time generation of mission-critical business documents (PDF/Excel) with complex Data Structure.',
      'Designed and enhanced dynamic UI components with Angular CLI, ensuring seamless user interaction and performance.'

    ],
  },
]
