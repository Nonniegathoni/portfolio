"use client"

import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = {
    "Frameworks": ["React", "Node.js", "Laravel"],
    "Programming Languages": ["Python", "Java", "C++", "C", "C#"],
    "Tools": ["Git", "Visual Studio Code", "Sublime"],
    "Databases": ["SQLite", "MySQL"],
    "Methodologies": ["Agile-like Coordination", "Personal Version Control", "Project-Specific Database Design"],
  }

  const projects = [
    {
      title: "Rooted Horizons EA",
      description:
        "A multi-page touring platform featuring a three-page destination architecture with dark/light mode functionality and animated UI elements for an enhanced user experience. Includes a custom booking system built with vanilla HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      role: "Developer",
      link: "https://rootedhorizons.netlify.app/",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Vibeflow - Online Banking Fraud Detection",
      description:
        "A website and mobile application featuring advanced algorithms and machine learning to monitor transactions in real-time, detect suspicious activity, and mitigate fraud risk.",
      technologies: ["React.js", "JavaScript", "TypeScript", "Machine Learning"],
      role: "Lead Developer",
      link: "https://vibeflow-nonnie70s-projects.vercel.app/",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Startpoint — Internship Lifecycle Management System",
      description:
        "A centralized solution for managing internship programs. Features include a central dashboard for posting openings, handling applications, tracking progress, an application portal with real-time notifications, evaluation and archiving modules, and integrated analytics for monitoring compliance and outcomes.",
      technologies: ["Flask", "SQLite", "Pytest", "Python"],
      role: "Second Developer (4-person team)",
      link: "https://github.com/Nonniegathoni/Startpoint",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Pealar HR Platform",
      description:
        "A web app built for an HR company to help client businesses manage employee leave requests. Staff apply for leave, managers approve or reject, and the HR company oversees everything with company-specific data isolation.",
      technologies: ["React", "Node.js", "Database"],
      role: "Developer",
      link: "#",
      icon: <Code className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen portfolio-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 overflow-hidden">
                <img
                  src="/lucy-photo.jpg"
                  alt="Lucy Gathoni Mugo - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Lucy Gathoni Mugo</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">Junior Software Developer</p>
<p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experienced in building full-stack web applications and managing company-wide technical infrastructure. 
              Proficient in Python, React, and JavaScript, with a background in developing high-accountability systems 
              like fraud detection and internship management platforms. Dedicated to translating complex business data 
              into clear, functional user interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              >
                <a href="mailto:lgathoni.mugo@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
              >
                <a href="https://github.com/Nonniegathoni" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
<p className="text-lg text-white/90 mb-6 leading-relaxed">
                  I specialize in building robust full-stack web applications that bridge the gap between complex 
                  business requirements and intuitive user experiences. From fraud detection systems that protect 
                  financial transactions to platforms that streamline organizational workflows, I bring a systematic 
                  approach to every project.
                </p>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  With a Bachelor&apos;s degree in Software Development from KCA University (2025), I combine 
                  strong academic foundations with hands-on experience in high-stakes environments. I actively participate 
                  in hackathons and collaborative projects to stay sharp and contribute to the developer community.
                </p>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+254757726970</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-white/20 backdrop-blur-sm border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white">Education</CardTitle>
                  </CardHeader>
<CardContent>
                    <p className="font-semibold text-white/90">KCA University</p>
                    <p className="text-white/80">Bachelor of Science in Software Development</p>
                    <p className="text-sm text-white/70">Graduated: 2025</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/20 backdrop-blur-sm border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white">Hackathons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      Active participant in Android254 and other tech events, focusing on collaborative coding and
                      mobile development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-white/20 backdrop-blur-sm border-white/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white flex items-center gap-2 text-base">
                      {category === "Programming Languages" && <Code className="w-5 h-5" />}
                      {category === "Frameworks" && <Globe className="w-5 h-5" />}
                      {category === "Tools" && <Database className="w-5 h-5" />}
                      {category === "Databases" && <Database className="w-5 h-5" />}
                      {category === "Methodologies" && <Code className="w-5 h-5" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/20 text-white hover:bg-white/30 border border-white/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-lg">{project.icon}</div>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-white/90 mb-2">Role: {project.role}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-white/30 text-white/90 hover:bg-white/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
<Button
                        asChild
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/20 bg-transparent"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-lg text-white/80 mb-12">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              >
                <a href="mailto:Lucygathonilg05@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
              >
                <a href="https://github.com/Nonniegathoni" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/20 bg-transparent backdrop-blur-sm"
              >
                <a href="https://www.linkedin.com/in/lucy-gathoni02" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2025 Lucy Gathoni Mugo. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
