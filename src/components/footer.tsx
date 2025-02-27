"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-4">
      <div className="container mx-auto flex  justify-center items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm"
        >
          &copy; {new Date().getFullYear()} Matheus Castro. Todos os direitos
          reservados.
        </motion.p>
      </div>
    </footer>
  );
}
