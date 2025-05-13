"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications using MERN stack. Architected and implemented RESTful APIs, database schemas, and front-end interfaces. Mentored junior developers and implemented CI/CD pipelines.",
    skills: ["React", "Node.js", "MongoDB", "Express", "AWS", "Docker"],
    type: "work",
  },
  {
    title: "Mobile App Developer",
    company: "MobileFirst Solutions",
    period: "2020 - 2022",
    description:
      "Developed cross-platform mobile applications using React Native. Implemented complex UI components, integrated with backend services, and published apps to App Store and Google Play.",
    skills: ["React Native", "Expo", "Redux", "Firebase", "REST APIs"],
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "WebSphere Technologies",
    period: "2018 - 2020",
    description:
      "Built and maintained web applications using the MERN stack. Collaborated with design and product teams to deliver user-friendly interfaces and robust backend systems.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Git"],
    type: "work",
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    period: "2014 - 2018",
    description:
      "Graduated with honors. Focused on web development, algorithms, and software engineering principles. Completed capstone project on real-time data visualization.",
    skills: [],
    type: "education",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-800"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto"
          >
            <p className="text-slate-600">My professional journey and educational background</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-emerald-200 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 p-2 rounded-full bg-white border-2 border-emerald-200">
                  {exp.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-emerald-500" />
                  )}
                </div>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-emerald-600 font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
