import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-emerald-400">
              Bereket
            </Link>
            <p className="mt-2 text-slate-400 max-w-md">
              Full Stack Developer specializing in MERN stack and React Native mobile development.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:bereket@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="text-slate-500 text-sm">© {currentYear} Bereket. All rights reserved.</div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <div className="flex justify-center space-x-6">
            <Link href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-emerald-400 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
