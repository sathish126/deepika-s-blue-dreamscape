import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import TeddyBear from "@/components/TeddyBear";
import CelebrationCharacter from "@/components/CelebrationCharacter";
import InteractiveCake from "@/components/InteractiveCake";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  useEffect(() => {
    // Initial confetti on load
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ["#4A90D9", "#7BB3F0", "#FFD700", "#FF69B4"] });
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10">
        {/* ===== WELCOME SECTION ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ background: "var(--gradient-deep)" }}>
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex justify-center gap-4 mb-6">
              <TeddyBear className="w-24 h-24 md:w-32 md:h-32" waving holdingHeart />
              <CelebrationCharacter className="w-20 h-24 md:w-28 md:h-32" variant="celebrating" />
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground text-glow mb-4">
              Happy Birthday Deepika 🎉
            </motion.h1>

            <motion.p variants={fadeUp}
              className="font-body text-lg md:text-xl text-primary-foreground/80">
              A day as special and beautiful as you ✨
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-3">
              {["💙", "🎂", "✨", "🧸", "🎈"].map((emoji, i) => (
                <motion.span key={i}
                  className="text-3xl"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}>
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ===== MESSAGE SECTION ===== */}
        <section className="py-20 px-4" style={{ background: "var(--gradient-sky)" }}>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
              
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-primary text-center mb-10">
                You Are Extraordinary 💙
              </motion.h2>

              {[
                { title: "Your Passion ✨", text: "Your fire to chase what you believe in is nothing short of inspiring. The way you pour your heart into everything you do shows a spirit that refuses to settle for ordinary." },
                { title: "Your Strength 💪", text: "You carry your challenges with such grace and courage. You don't just face storms — you dance through them, emerging stronger and more radiant every time." },
                { title: "Your Heart 💙", text: "You have a way of making everyone around you feel seen and valued. Your kindness isn't just an act — it's who you are, and it touches lives more deeply than you know." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="rounded-2xl p-6 md:p-8 mb-6 box-glow"
                  style={{ background: "var(--gradient-card)", backdropFilter: "blur(10px)" }}>
                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-3">{item.title}</h3>
                  <p className="font-body text-foreground/80 leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="rounded-2xl p-6 md:p-8 box-glow text-center"
                style={{ background: "var(--gradient-card)", backdropFilter: "blur(10px)" }}>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-3">Dream Bigger 🚀</h3>
                <p className="font-body text-foreground/80 leading-relaxed text-lg">
                  Never stop chasing those dreams, Deepika. You are capable of building something truly extraordinary. 
                  The world needs your vision, your energy, and your unstoppable spirit. Keep growing, keep pushing, 
                  and never doubt the magic you carry within.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== MEMORIES / FEELINGS SECTION ===== */}
        <section className="py-20 px-4" style={{ background: "var(--gradient-deep)" }}>
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
              
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-primary-foreground text-center mb-10 text-glow">
                You Make Life Brighter 💙
              </motion.h2>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 md:p-8 mb-6"
                style={{ background: "hsla(210, 100%, 98%, 0.1)", backdropFilter: "blur(10px)" }}>
                <p className="font-body text-primary-foreground/90 leading-relaxed text-lg">
                  You have this magical way of turning ordinary moments into something beautiful. Your laughter is contagious, 
                  your kindness is unforgettable, and your positivity can brighten even the cloudiest days.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 md:p-8 mb-6"
                style={{ background: "hsla(210, 100%, 98%, 0.1)", backdropFilter: "blur(10px)" }}>
                <p className="font-body text-primary-foreground/90 leading-relaxed text-lg">
                  Every conversation with you feels meaningful. Every memory shared with you becomes a treasure. 
                  You don't just exist in moments — you make them matter.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 md:p-8 mb-6"
                style={{ background: "hsla(210, 100%, 98%, 0.1)", backdropFilter: "blur(10px)" }}>
                <p className="font-body text-primary-foreground/90 leading-relaxed text-lg">
                  The happiness you bring into the world is a gift that keeps on giving, and those around you 
                  are endlessly grateful for your warmth and your light.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl p-6 md:p-8"
                style={{ background: "hsla(210, 100%, 98%, 0.15)", backdropFilter: "blur(10px)", border: "1px solid hsla(210, 100%, 98%, 0.2)" }}>
                <p className="font-body text-primary-foreground/90 leading-relaxed text-lg italic">
                  We met just a few days ago, and we haven't had enough time to talk and share everything yet — 
                  but every little moment with you has filled me with happiness. Every conversation, every shared thought, 
                  every small exchange — they all mean the world to me. 
                </p>
                <p className="font-display text-2xl text-primary-foreground text-glow mt-4 text-center">
                  I want to keep this bond alive forever, until my very last breath 💙
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== TAMIL SECTION ===== */}
        <section className="py-20 px-4" style={{ background: "var(--gradient-sky)" }}>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              
              <motion.div variants={fadeUp} className="flex justify-center gap-6 mb-8">
                <TeddyBear className="w-20 h-20" holdingHeart />
                <CelebrationCharacter className="w-16 h-20" variant="dancing" />
                <TeddyBear className="w-20 h-20" holdingHeart />
              </motion.div>

              <motion.div variants={fadeUp}
                className="rounded-2xl p-8 box-glow"
                style={{ background: "var(--gradient-card)", backdropFilter: "blur(10px)" }}>
                <p className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  உன் கனவுகள் வானத்தைத் தொடட்டும்,<br />
                  உன் பாதைகள் வெற்றியில் மலரட்டும்.<br /><br />
                  நீ இருப்பது ஒரு இனிய சந்தோஷம்,<br />
                  நீ முன்னேறுவது என் மனத்தின் பெருமைமிகு ஓசைமோசம்.<br /><br />
                  இன்று உன் நாள் இனிமையால் நிறையட்டும்,<br />
                  என்றும் உன் சிரிப்பு உலகையே ஒளிரட்டும் 💙
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== CUTE VISUAL + CAKE SECTION ===== */}
        <section className="py-20 px-4" style={{ background: "var(--gradient-deep)" }}>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
              
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-primary-foreground mb-10 text-glow">
                Make a Wish! 🎂
              </motion.h2>

              <motion.div variants={fadeUp} className="flex justify-center gap-4 mb-8">
                <CelebrationCharacter className="w-20 h-24" variant="celebrating" />
                <TeddyBear className="w-24 h-28" waving holdingHeart />
                <CelebrationCharacter className="w-20 h-24" variant="dancing" />
              </motion.div>

              <motion.div variants={fadeUp}>
                <InteractiveCake />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== FINAL SURPRISE SECTION ===== */}
        <section className="py-24 px-4 relative" style={{ background: "var(--gradient-sky)" }}>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
              
              <motion.div variants={fadeUp}
                className="rounded-3xl p-10 md:p-14 box-glow"
                style={{ background: "var(--gradient-card)", backdropFilter: "blur(20px)" }}>
                
                <motion.p
                  className="font-display text-3xl md:text-5xl text-primary text-glow mb-6 leading-snug"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}>
                  "You are meant for something truly amazing"
                </motion.p>

                <motion.div
                  className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"
                  animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.p
                  className="font-display text-2xl md:text-3xl text-primary/80"
                  variants={fadeUp}>
                  Keep shining, keep growing, and keep being you ✨
                </motion.p>

                <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-2">
                  {["💙", "✨", "🌟", "✨", "💙"].map((e, i) => (
                    <motion.span key={i} className="text-2xl"
                      animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}>
                      {e}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-10 font-body text-muted-foreground text-sm">
                Made with 💙 just for you, Deepika
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
