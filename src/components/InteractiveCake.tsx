import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const InteractiveCake = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blown, setBlown] = useState(false);

  const blowCandles = useCallback(() => {
    if (!candlesLit) return;
    setCandlesLit(false);
    setBlown(true);

    // Confetti burst
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#4A90D9", "#7BB3F0", "#FFD700", "#FF69B4", "#87CEEB"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#4A90D9", "#7BB3F0", "#FFD700", "#FF69B4", "#87CEEB"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    // Big center burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#4A90D9", "#7BB3F0", "#FFD700", "#FF69B4", "#87CEEB", "#fff"],
    });
  }, [candlesLit]);

  const relight = () => {
    setCandlesLit(true);
    setBlown(false);
  };

  const candlePositions = [55, 80, 105, 130, 155];

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="cursor-pointer relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={blowCandles}
      >
        <svg viewBox="0 0 210 200" className="w-56 h-56 md:w-72 md:h-72" xmlns="http://www.w3.org/2000/svg">
          {/* Plate */}
          <ellipse cx="105" cy="185" rx="100" ry="15" fill="hsl(210, 30%, 90%)" />
          
          {/* Bottom layer */}
          <rect x="25" y="140" width="160" height="45" rx="8" fill="hsl(217, 91%, 55%)" />
          <rect x="25" y="140" width="160" height="8" rx="4" fill="hsl(217, 91%, 65%)" />

          {/* Middle layer */}
          <rect x="40" y="100" width="130" height="45" rx="8" fill="hsl(200, 100%, 70%)" />
          <rect x="40" y="100" width="130" height="8" rx="4" fill="hsl(200, 100%, 80%)" />

          {/* Top layer */}
          <rect x="55" y="65" width="100" height="40" rx="8" fill="hsl(210, 100%, 85%)" />
          <rect x="55" y="65" width="100" height="8" rx="4" fill="hsl(210, 100%, 92%)" />

          {/* Decorations */}
          {[35, 65, 95, 125, 155].map((x, i) => (
            <circle key={`dec-${i}`} cx={x} cy="155" r="5" fill="hsl(45, 100%, 65%)" />
          ))}
          {[50, 80, 110, 140].map((x, i) => (
            <circle key={`dec2-${i}`} cx={x} cy="115" r="4" fill="hsl(330, 80%, 75%)" />
          ))}

          {/* Candles */}
          {candlePositions.map((x, i) => (
            <g key={`candle-${i}`}>
              <rect x={x - 3} y="42" width="6" height="25" rx="2" fill="hsl(330, 80%, 75%)" />
              <rect x={x - 2} y="42" width="2" height="25" rx="1" fill="hsl(330, 80%, 85%)" opacity="0.5" />
              <AnimatePresence>
                {candlesLit && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ellipse cx={x} cy="38" rx="5" ry="8" fill="hsl(45, 100%, 65%)"
                      style={{ animation: `candle-flicker 0.5s ease-in-out ${i * 0.1}s infinite` }} />
                    <ellipse cx={x} cy="36" rx="3" ry="5" fill="hsl(30, 100%, 55%)"
                      style={{ animation: `candle-flicker 0.4s ease-in-out ${i * 0.15}s infinite` }} />
                    <ellipse cx={x} cy="30" rx="8" ry="8" fill="hsl(45, 100%, 70%)" opacity="0.2" />
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          ))}
        </svg>

        {/* Instruction text */}
        <AnimatePresence>
          {candlesLit && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center font-display text-xl text-primary mt-2"
            >
              ✨ Tap the cake to make a wish! ✨
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {blown && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3"
          >
            <p className="font-display text-3xl text-primary text-glow">
              🎂 Happy Birthday Deepika! 🎂
            </p>
            <p className="text-muted-foreground font-body text-sm">May all your wishes come true 💙</p>
            <button
              onClick={(e) => { e.stopPropagation(); relight(); }}
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
            >
              Relight candles 🕯️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveCake;
