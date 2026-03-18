import { motion } from "framer-motion";

interface TeddyBearProps {
  className?: string;
  holdingHeart?: boolean;
  waving?: boolean;
}

const TeddyBear = ({ className = "", holdingHeart = false, waving = false }: TeddyBearProps) => (
  <motion.div
    className={`inline-block ${className}`}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="55" cy="45" r="28" fill="#C4956A" />
      <circle cx="55" cy="45" r="16" fill="#E8C5A0" />
      <circle cx="145" cy="45" r="28" fill="#C4956A" />
      <circle cx="145" cy="45" r="16" fill="#E8C5A0" />

      {/* Body */}
      <ellipse cx="100" cy="170" rx="55" ry="45" fill="#D4A574" />

      {/* Head */}
      <circle cx="100" cy="85" r="48" fill="#D4A574" />

      {/* Face */}
      <ellipse cx="100" cy="98" rx="22" ry="16" fill="#E8C5A0" />

      {/* Eyes */}
      <circle cx="80" cy="78" r="5" fill="#333" />
      <circle cx="120" cy="78" r="5" fill="#333" />
      <circle cx="82" cy="76" r="2" fill="#fff" />
      <circle cx="122" cy="76" r="2" fill="#fff" />

      {/* Nose */}
      <ellipse cx="100" cy="92" rx="6" ry="4" fill="#333" />

      {/* Mouth */}
      <path d="M 93 98 Q 100 106 107 98" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Arms */}
      {waving ? (
        <motion.ellipse
          cx="45" cy="145" rx="18" ry="30"
          fill="#C4956A"
          style={{ transformOrigin: "55px 160px" }}
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      ) : (
        <ellipse cx="45" cy="155" rx="18" ry="28" fill="#C4956A" transform="rotate(-15 45 155)" />
      )}
      <ellipse cx="155" cy="155" rx="18" ry="28" fill="#C4956A" transform="rotate(15 155 155)" />

      {/* Feet */}
      <ellipse cx="72" cy="208" rx="22" ry="12" fill="#C4956A" />
      <ellipse cx="128" cy="208" rx="22" ry="12" fill="#C4956A" />

      {/* Heart */}
      {holdingHeart && (
        <motion.g
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: "100px 155px" }}
        >
          <path
            d="M100 170 L92 158 Q85 145 93 140 Q100 136 100 145 Q100 136 107 140 Q115 145 108 158 Z"
            fill="hsl(217, 91%, 60%)"
          />
        </motion.g>
      )}

      {/* Blush */}
      <circle cx="70" cy="95" r="8" fill="#FFB6C1" opacity="0.4" />
      <circle cx="130" cy="95" r="8" fill="#FFB6C1" opacity="0.4" />
    </svg>
  </motion.div>
);

export default TeddyBear;
