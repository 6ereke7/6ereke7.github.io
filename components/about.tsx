"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Bereket - Full Stack Developer"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/80 to-transparent opacity-70"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800">About Me</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                I'm Bereket, a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js,
                React, and Node.js) and React Native for mobile app development.
              </p>
              <p>
                With a strong foundation in both front-end and back-end technologies, I create seamless, responsive, and
                user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in software development has equipped me with the skills to build everything from complex web
                applications to intuitive mobile experiences. I'm constantly learning and adapting to new technologies
                to deliver the best solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
