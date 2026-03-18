import { motion } from "framer-motion";

interface Props {
  className?: string;
  variant?: "celebrating" | "waving" | "dancing";
}

const CelebrationCharacter = ({ className = "", variant = "celebrating" }: Props) => {
  const isDancing = variant === "dancing";
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={isDancing ? { rotate: [-5, 5, -5] } : { y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 160 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="80" cy="140" rx="35" ry="40" fill="hsl(217, 91%, 60%)" />

        {/* Head */}
        <circle cx="80" cy="70" r="35" fill="#FFD5B4" />

        {/* Hair */}
        <path d="M45 60 Q50 25 80 30 Q110 25 115 60 Q115 40 100 35 Q80 20 60 35 Q45 40 45 60Z" fill="#333" />

        {/* Eyes */}
        <circle cx="68" cy="65" r="4" fill="#333" />
        <circle cx="92" cy="65" r="4" fill="#333" />
        <circle cx="69.5" cy="63.5" r="1.5" fill="#fff" />
        <circle cx="93.5" cy="63.5" r="1.5" fill="#fff" />

        {/* Smile */}
        <path d="M 68 80 Q 80 92 92 80" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Blush */}
        <circle cx="58" cy="78" r="6" fill="#FFB6C1" opacity="0.5" />
        <circle cx="102" cy="78" r="6" fill="#FFB6C1" opacity="0.5" />

        {/* Arms */}
        {variant === "celebrating" ? (
          <>
            <motion.line x1="45" y1="130" x2="20" y2="100" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ transformOrigin: "45px 130px" }}
            />
            <motion.line x1="115" y1="130" x2="140" y2="100" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round"
              animate={{ rotate: [10, -10, 10] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ transformOrigin: "115px 130px" }}
            />
          </>
        ) : (
          <>
            <line x1="45" y1="135" x2="25" y2="155" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round" />
            <line x1="115" y1="135" x2="135" y2="155" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round" />
          </>
        )}

        {/* Legs */}
        <line x1="65" y1="175" x2="60" y2="195" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round" />
        <line x1="95" y1="175" x2="100" y2="195" stroke="#FFD5B4" strokeWidth="8" strokeLinecap="round" />

        {/* Party hat */}
        <polygon points="80,20 65,50 95,50" fill="hsl(45, 100%, 65%)" />
        <circle cx="80" cy="18" r="5" fill="hsl(330, 80%, 75%)" />
      </svg>
    </motion.div>
  );
};

export default CelebrationCharacter;
