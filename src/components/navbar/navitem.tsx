import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  setActiveItem: (item: string) => void;
  index: number;
}

export default function NavItem({
  name,
  href,
  isActive,
  setActiveItem,
  index,
}: NavItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <motion.a
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            isActive
              ? "text-primary bg-purple-100"
              : "text-gray-700 hover:text-primary hover:bg-purple-50"
          }`}
          onClick={() => setActiveItem(name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {name}
        </motion.a>
      </Link>
    </motion.div>
  );
}
