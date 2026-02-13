export interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  linkedin?: string
  twitter?: string
  website?: string
  image: string
}

export const teamMembers = [
  {
    id: 1,
    name: "Angelina Bintoudi",
    role: "CEO",
    description: "Leading the vision for sustainable energy optimization through advanced AI and grid modernization.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/images/about/team/angelina-bintoudi.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "CTO",
    description: "Expert in machine learning and distributed systems, architecting our core optimization algorithms.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/images/about/team/member-2.jpg"
  },
  {
    id: 3,
    name: "Sarah Papadopoulos",
    role: "VP of Operations",
    description: "Overseeing deployment and scaling of energy management solutions across European markets.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/images/about/team/member-3.jpg"
  },
  {
    id: 4,
    name: "Nikos Georgiou",
    role: "Head of Engineering",
    description: "Building robust, scalable infrastructure to power millions of optimized energy connections daily.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    image: "/images/about/team/member-4.jpg"
  }
]
