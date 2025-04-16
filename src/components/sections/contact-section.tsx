"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import SectionLayout from "../section-layout"
import AnimatedButton from "../animated-button"

export default function Contact() {
  return (
    <SectionLayout
      id="contact"
      title="Get in Touch"
      subtitle="I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to drop me a message!"
    >
      <div className="grid gap-16 lg:grid-cols-2">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-3xl shadow-lg backdrop-blur-md w-full max-w-md"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-foreground/90">matheuscastroks@gmail.com</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-3xl shadow-lg backdrop-blur-md w-full max-w-md"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-lg font-medium text-foreground/90">Rio de Janeiro, RJ</span>
            </motion.div>
          </div>
          <div className="flex space-x-4 mt-6 justify-start">
            <motion.div className="p-3 bg-foreground/10 rounded-full shadow-md" whileHover={{ scale: 1.2, rotate: 10 }}>
              <Link
                href="https://github.com/Couks"
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div className="p-3 bg-foreground/10 rounded-full shadow-md" whileHover={{ scale: 1.2, rotate: 10 }}>
              <Link
                href="https://www.linkedin.com/in/matheus-castro-araujo/"
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <form className="space-y-6 p-8 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-3xl backdrop-blur-sm">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                Name
              </label>
              <Input
                id="name"
                placeholder="How should I call you?"
                required
                className="bg-foreground/5 border-none h-12 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email
              </label>
              <Input
                id="email"
                placeholder="Your best email"
                required
                type="email"
                className="bg-foreground/5 border-none h-12 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                Message
              </label>
              <Textarea
                className="min-h-[150px] bg-foreground/5 border-none rounded-xl focus:ring-2 focus:ring-primary resize-none"
                id="message"
                placeholder="How can I help you?"
                required
              />
            </div>
            <AnimatedButton
              variant="apple"
              label="Send Message"
              href="#"
              icon={<Send className="w-6 h-6" />}
              className="w-full h-12 rounded-xl text-base font-medium bg-secondary hover:opacity-90 transition-opacity"
            />
         
          </form>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
