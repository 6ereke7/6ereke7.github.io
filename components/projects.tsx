"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, user authentication, shopping cart, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
  {
    title: "Task Management App",
    description:
      "A mobile application for managing tasks, with features like task creation, categorization, reminders, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    type: "mobile",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with private chats, group conversations, and media sharing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile app for tracking workouts, nutrition, and fitness goals with data visualization and progress reports.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Charts.js"],
    liveUrl: "#",
    githubUrl: "#",
    type: "mobile",
  },
  {
    title: "Content Management System",
    description: "A custom CMS for managing digital content with user roles, content scheduling, and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Express", "MongoDB", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
  {
    title: "Restaurant Ordering System",
    description:
      "A comprehensive solution for restaurants with menu management, order processing, and customer management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-800"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto"
          >
            <p className="text-slate-600">A selection of my recent work across web and mobile platforms</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" className="rounded-full">
              All Projects
            </Button>
            <Button variant="outline" className="rounded-full">
              Web Apps
            </Button>
            <Button variant="outline" className="rounded-full">
              Mobile Apps
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/70 text-white hover:bg-black/80">
                      {project.type === "web" ? "Web App" : "Mobile App"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-slate-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
            <Link href="https://github.com/" target="_blank">
              View More Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
