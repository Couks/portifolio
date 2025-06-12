"use client";

import type React from "react";

import { useState, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useAnimation,
} from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Calendar,
  Clock,
  Coffee,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import SectionLayout from "../section-layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/hooks/useTranslation";
import AnimatedButton from "../animated-button";

export default function Contact() {
  const { contact } = useTranslation();
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    priority: "normal",
  });
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  const messagePlaceholders = useMemo(() => [
    contact('form.placeholders.message1'),
    contact('form.placeholders.message2'),
    contact('form.placeholders.message3'),
    contact('form.placeholders.message4'),
  ], [contact]);

  // Typing animation effect
  useEffect(() => {
    const currentMessage = messagePlaceholders[currentPlaceholder];

    if (typingIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setTypingText((prev) => prev + currentMessage[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingText("");
        setTypingIndex(0);
        setCurrentPlaceholder(
          (prev) => (prev + 1) % messagePlaceholders.length
        );
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, currentPlaceholder, messagePlaceholders]);

  // Floating animation
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, priority: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `New Contact Form Submission - ${formData.priority} Priority`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          priority: formData.priority,
        }),
      });

      if (response.ok) {
        setFormState("success");
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState("idle");
          setFormData({ name: "", email: "", message: "", priority: "normal" });
        }, 3000);
      } else {
        setFormState("error");
        setTimeout(() => {
          setFormState("idle");
        }, 3000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
      }, 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };

  const formSuccessVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // const iconVariants = {
  //   hidden: { opacity: 0, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { type: "spring", stiffness: 260, damping: 20 },
  //   },
  //   hover: {
  //     scale: 1.2,
  //     rotate: 10,
  //     transition: { duration: 0.2 },
  //   },
  // };

  // Decorative elements
  const decorativeElements = [
    { icon: <Code />, top: "10%", left: "5%", delay: 0 },
    { icon: <Rocket />, top: "20%", right: "8%", delay: 0.1 },
    { icon: <Sparkles />, bottom: "15%", left: "7%", delay: 0.2 },
    { icon: <Coffee />, bottom: "25%", right: "5%", delay: 0.3 },
  ];

  return (
    <SectionLayout
      id="contact"
      title={contact('title')}
      subtitle={contact('subtitle')}
    >
      {/* Decorative floating elements */}
      {!prefersReducedMotion &&
        decorativeElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute z-50 text-primary/30 hidden md:block"
            style={{
              top: el.top || "auto",
              left: el.left || "auto",
              right: el.right || "auto",
              bottom: el.bottom || "auto",
            }}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ delay: el.delay }}
          >
            <motion.div
              className="text-3xl"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {el.icon}
            </motion.div>
          </motion.div>
        ))}

      <motion.div
        className="grid gap-8 lg:gap-16 lg:grid-cols-5 items-center max-w-5xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Left Column - Contact Info */}
        <motion.div className="space-y-8 lg:col-span-2" variants={itemVariants}>
          <motion.div className="space-y-6 hidden md:block" variants={itemVariants}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              {contact('info.title')}
            </h3>

            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-2xl shadow-sm backdrop-blur-lg w-full border border-foreground/5"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{contact('info.email')}</p>
                <a
                  href="mailto:matheuscastroks@gmail.com"
                  className="text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  matheuscastroks@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-2xl shadow-sm backdrop-blur-lg w-full border border-foreground/5"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{contact('info.location')}</p>
                <span className="text-base md:text-lg font-medium text-foreground">
                  Rio de Janeiro, RJ
                </span>
              </div>
            </motion.div>

            {/* Availability info */}
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-2xl shadow-sm backdrop-blur-lg w-full border border-foreground/5"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{contact('info.availability')}</p>
                <span className="text-base md:text-lg font-medium text-foreground">
                  {contact('info.response')}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4 hidden md:block" variants={itemVariants}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              {contact('connect.title')}
            </h3>
            <div className="flex space-x-4">
              <motion.div
                variants={socialVariants}
                whileHover="hover"
                className="p-4 bg-foreground/5 rounded-2xl shadow-sm border border-foreground/5"
              >
                <Link
                  href="https://github.com/Couks"       
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors flex flex-col items-center gap-2"
                >
                  <Github className="w-6 h-6" />
                  <span className="text-xs">{contact('connect.github')}</span>
                </Link>
              </motion.div>

              <motion.div
                variants={socialVariants}
                whileHover="hover"
                className="p-4 bg-foreground/5 rounded-2xl shadow-sm border border-foreground/5"
              >
                <Link
                  href="https://www.linkedin.com/in/matheus-castro-araujo/"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors flex flex-col items-center gap-2"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-xs">{contact('connect.linkedin')}</span>
                </Link>
              </motion.div>

              {/* Calendar booking option */}
              <motion.div
                variants={socialVariants}
                whileHover="hover"
                className="p-4 bg-foreground/5 rounded-2xl shadow-sm border border-foreground/5"
              >
                <Link
                  href="#schedule-call"
                  className="text-foreground/80 hover:text-primary transition-colors flex flex-col items-center gap-2"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="text-xs">{contact('connect.schedule')}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div className="lg:col-span-3 relative" variants={itemVariants}>
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-3xl backdrop-blur-lg border border-foreground/10"
                variants={formSuccessVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                </motion.div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                  {contact('success.title')}
                </h3>
                <p className="text-center text-base md:text-lg text-muted-foreground mb-4">
                  {contact('success.description')}
                </p>
                <motion.div
                  className="flex gap-2 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + star * 0.1 }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : formState === "error" ? (
              <motion.div
                key="error"
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-3xl backdrop-blur-lg border border-foreground/10"
                variants={formSuccessVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Mail className="w-10 h-10 text-red-500" />
                  </div>
                </motion.div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                  {contact('error.title')}
                </h3>
                <p className="text-center text-base md:text-lg text-muted-foreground mb-4">
                  {contact('error.description')}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5 p-8 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-3xl backdrop-blur-lg shadow-sm border border-foreground/10 relative overflow-hidden"
                variants={itemVariants}
              >
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={contact('form.placeholders.name')}
                    required
                    className="bg-foreground/5 border-foreground/10 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all duration-200"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={contact('form.placeholders.email')}
                    required
                    type="email"
                    className="bg-foreground/5 border-foreground/10 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 transition-all duration-200"
                  />
                </motion.div>

                {/* Project priority */}
                <motion.div className="space-y-3" variants={itemVariants}>
                  <RadioGroup
                    defaultValue="normal"
                    value={formData.priority}
                    onValueChange={handleRadioChange}
                    className="flex flex-wrap gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="low"
                        id="low"
                        className="text-green-500"
                      />
                      <Label htmlFor="low" className="text-sm">
                        {contact('form.priorities.low')}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="normal"
                        id="normal"
                        className="text-blue-500"
                      />
                      <Label htmlFor="normal" className="text-sm">
                        {contact('form.priorities.normal')}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="high"
                        id="high"
                        className="text-amber-500"
                      />
                      <Label htmlFor="high" className="text-sm">
                        {contact('form.priorities.high')}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="urgent"
                        id="urgent"
                        className="text-red-500"
                      />
                      <Label htmlFor="urgent" className="text-sm">
                        {contact('form.priorities.urgent')}
                      </Label>
                    </div>
                  </RadioGroup>
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <div className="relative">
                    <Textarea
                      className="min-h-[150px] bg-foreground/5 border-foreground/10 rounded-xl focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 resize-none transition-all duration-200"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={typingText || "..."}
                      required
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                      {formData.message.length} / 500
                    </div>
                  </div>
                </motion.div>

                <motion.div className="pt-2" variants={itemVariants}>
                  <AnimatedButton
                    href="#"
                    icon={formState === "submitting" ? 
                      <Loader2 className="w-5 h-5 animate-spin" /> : 
                      <Send className="w-5 h-5" />
                    }
                    label={formState === "submitting" ? contact('form.sending') : contact('form.send')}
                    variant="apple-primary"
                    className="w-full h-12 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={(e) => {
                      e.preventDefault();
                      if (formState !== "submitting") {
                        handleSubmit(e as unknown as React.FormEvent);
                      }
                    }}
                    disabled={formState === "submitting"}
                  />
                </motion.div>

                {/* Privacy note */}
                <motion.p
                  className="text-xs text-center text-muted-foreground mt-4"
                  variants={itemVariants}
                >
                  {contact('form.privacy')}
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
}
