"use client"

import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "C", "C#", "JavaScript", "TypeScript", "Kotlin"],
    "Frameworks & Libraries": ["React", "Node.js", "Django", "Flask"],
    "Tools & Technologies": ["Git", "Visual Studio Code", "Android Studio", "SQLite", "Pytest"],
  }

  const projects = [
    {
      title: "Kenol Catholic Church System",
      description:
        "A comprehensive web application for church management including member database, daily readings, donations tracking, mass schedules, and sacramental records. Achieved 30% increase in user engagement.",
      technologies: ["Flask", "SQLite", "Pytest", "Python"],
      role: "Second Developer (2-person team)",
      github: "https://github.com/Nonniegathoni/Kenol-Catholic-Church-system",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Vibeflow Banking Fraud Detection",
      description:
        "Advanced fraud detection system with real-time transaction monitoring using machine learning algorithms. Features both web and mobile applications for comprehensive fraud prevention.",
      technologies: ["React.js", "JavaScript", "TypeScript", "Machine Learning"],
      role: "Lead Developer",
      github: "https://github.com/Nonniegathoni/vibeflow-banking-final",
      icon: <Smartphone className="w-6 h-6" />,
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
              Highly driven final-year software development student passionate about creating innovative solutions.
              Experienced in full-stack development, mobile applications, and machine learning integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              >
                <a href="mailto:Lucygathonilg05@gmail.com">
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
                  I'm a passionate software developer currently pursuing my Bachelor's degree in Software Development at
                  KCA University, with an expected graduation date of November 28th, 2025.
                </p>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  My journey in software development has been driven by curiosity and a desire to solve real-world
                  problems through technology. I actively participate in hackathons like Android254 to continuously
                  enhance my skills and stay updated with the latest technologies.
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
                    <p className="text-sm text-white/70">Expected: November 2025</p>
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
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-white/20 backdrop-blur-sm border-white/30">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      {category === "Programming Languages" && <Code className="w-5 h-5" />}
                      {category === "Frameworks & Libraries" && <Globe className="w-5 h-5" />}
                      {category === "Tools & Technologies" && <Database className="w-5 h-5" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-white/20 text-white hover:bg-white/30 border border-white/30"
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
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                          <ExternalLink className="w-4 h-4 ml-2" />
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
