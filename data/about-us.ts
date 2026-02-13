export interface TeamMember {
  id: string
  nameKey: string
  roleKey: string
  bioKey: string
  linkedin: string
  image: string
  category: 'founder' | 'advisor'
}

export const teamMembers: TeamMember[] = [
  {
    id: "angelina-bintoudi",
    nameKey: "angelina.name",
    roleKey: "angelina.role",
    bioKey: "angelina.bio",
    linkedin: "https://www.linkedin.com/in/angelinabintoudi/",
    image: "/images/about/team/angelina-bintoudi.jpg",
    category: "founder",
  },
  {
    id: "christos-timplalexis",
    nameKey: "christos.name",
    roleKey: "christos.role",
    bioKey: "christos.bio",
    linkedin: "https://www.linkedin.com/in/christos-timplalexis-3a499381/",
    image: "/images/about/team/christos-timplalexis.jpg",
    category: "founder",
  },
  {
    id: "lampros-zyglakis",
    nameKey: "lampros.name",
    roleKey: "lampros.role",
    bioKey: "lampros.bio",
    linkedin: "https://www.linkedin.com/in/lampros-zyglakis-24257215b/",
    image: "/images/about/team/lampros-zyglakis.jpg",
    category: "founder",
  },
  {
    id: "dimitris-karanassos",
    nameKey: "dimitris.name",
    roleKey: "dimitris.role",
    bioKey: "dimitris.bio",
    linkedin: "https://www.linkedin.com/in/dkaranassos/",
    image: "/images/about/team/dimitris-karanassos.jpg",
    category: "founder",
  },
  {
    id: "dimosthenis-ioannidis",
    nameKey: "dimosthenis.name",
    roleKey: "dimosthenis.role",
    bioKey: "dimosthenis.bio",
    linkedin: "https://www.linkedin.com/in/dimosthenis-ioannidis-6562762/",
    image: "/images/about/team/dimosthenis-ioannidis.jpg",
    category: "founder",
  },
  {
    id: "dimitrios-tzovaras",
    nameKey: "tzovaras.name",
    roleKey: "tzovaras.role",
    bioKey: "tzovaras.bio",
    linkedin: "https://www.linkedin.com/in/dimitrios-tzovaras-46b9162/",
    image: "/images/about/team/dimitrios-tzovaras.jpg",
    category: "founder",
  },
  {
    id: "spiros-kopolas",
    nameKey: "spiros.name",
    roleKey: "spiros.role",
    bioKey: "spiros.bio",
    linkedin: "https://www.linkedin.com/in/spiros-kopolas-6b976375/",
    image: "/images/about/team/spiros-kopolas.jpg",
    category: "advisor",
  },
]
