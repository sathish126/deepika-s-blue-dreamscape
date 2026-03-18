import { useEffect, useState } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; top: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    setSparkles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: 4 + Math.random() * 8,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-birthday-glow"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `sparkle 3s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
