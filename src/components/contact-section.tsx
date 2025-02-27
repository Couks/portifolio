"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-12 md:py-24 lg:py-32 pb-32 bg-apple overflow-hidden"
    >
      <div className="container mx-auto flex items-center justify-center px-4 md:px-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-lg/relaxed text-foreground/80">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to drop me a message!
            </p>
            <div className="space-y-8">
              <motion.div
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-3xl shadow-lg backdrop-blur-md w-full max-w-md"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-foreground/90">
                  matheuscastroks@gmail.com
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-6 p-6 bg-gradient-to-r from-foreground/10 to-foreground/20 rounded-3xl shadow-lg backdrop-blur-md w-full max-w-md"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-8 h-8 text-primary" />
                <span className="text-lg font-medium text-foreground/90">
                  Rio de Janeiro, RJ
                </span>
              </motion.div>
            </div>
            <div className="flex space-x-8 mt-6 justify-start">
              <motion.div
                className="p-3 bg-foreground/10 rounded-full shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Link
                  href="https://github.com/Couks"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github className="w-8 h-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div
                className="p-3 bg-foreground/10 rounded-full shadow-md"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
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
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6 p-8 bg-foreground/5 rounded-3xl backdrop-blur-sm">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground/80"
                >
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
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground/80"
                >
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
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80"
                >
                  Message
                </label>
                <Textarea
                  className="min-h-[150px] bg-foreground/5 border-none rounded-xl focus:ring-2 focus:ring-primary resize-none"
                  id="message"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <Button
                variant="apple"
                type="submit"
                className="w-full h-12 rounded-xl text-base font-medium bg-secondary hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
