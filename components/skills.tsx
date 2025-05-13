"use client"

import { motion } from "framer-motion"
import { Server, Database, Code, Smartphone, Cloud, Workflow } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Authentication & Authorization", "WebSockets"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "Mongoose ODM", "SQL", "Redis", "Firebase"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Expo", "Native Modules", "Mobile UI/UX", "App Store Deployment"],
  },
  {
    category: "DevOps & Tools",
    icon: <Cloud className="h-6 w-6" />,
    items: ["Git", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Netlify", "Heroku"],
  },
  {
    category: "Methodologies",
    icon: <Workflow className="h-6 w-6" />,
    items: [
      "Agile/Scrum",
      "Test-Driven Development",
      "Responsive Design",
      "Progressive Web Apps",
      "Cross-Browser Compatibility",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-800"
          >
            My Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto"
          >
            <p className="text-slate-600">
              A comprehensive toolkit that enables me to build complete web and mobile solutions
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mr-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
