import { motion } from 'framer-motion'

interface ModernSVGProps {
  color: string
}

export const ModernSVG: React.FC<ModernSVGProps> = ({ color }) => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle 
      cx="100" 
      cy="100" 
      r="80" 
      stroke={color} 
      strokeWidth="20" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M60 100L90 130L140 80" 
      stroke={color} 
      strokeWidth="20" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
    />
  </svg>
)

