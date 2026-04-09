import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { Scale, Smartphone, Tablet, Database, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
}

const FruitJourney = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: "Apta Scaling",
            desc: "Timbangan digital otomatis",
            icon: <Scale size={28} />,
            color: "text-emerald-700",
        },
        {
            title: "Apta Grading",
            desc: "Sortasi buah digital",
            icon: <Smartphone size={28} />,
            color: "text-emerald-700",
        },
        {
            title: "Apta Lab",
            desc: "Monitoring mutu & losses",
            icon: <Tablet size={28} />,
            color: "text-emerald-700",
        },
        {
            title: "Apta Sounding",
            desc: "Pengukuran stok tangki",
            icon: <Database size={28} />,
            color: "text-emerald-700",
        },
        {
            title: "Apta Mill",
            desc: "Website admin terintegrasi",
            icon: <LayoutDashboard size={28} />,
            color: "text-emerald-700",
        }
    ];

    return (
        <section id="alur-kerja" ref={sectionRef} className="py-20 md:py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Alur Kerja Digital</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-light px-4">
                        Sistem ketertelusuran yang menghubungkan setiap titik kritis produksi dalam satu garis koordinasi digital.
                    </p>
                </div>

                <div className="relative">
                    {/* SVG Path Background */}
                    <div className="absolute top-[40px] left-0 w-full h-[150px] pointer-events-none hidden lg:block">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1440 100" preserveAspectRatio="none">
                            <path 
                                d="M 0,50 Q 180,50 360,50 T 720,50 T 1080,50 T 1440,50" 
                                fill="none" 
                                stroke="#f1f5f9" 
                                strokeWidth="4"
                            />
                            <motion.path 
                                d="M 0,50 Q 180,50 360,50 T 720,50 T 1080,50 T 1440,50" 
                                fill="none" 
                                stroke="#10b981"
                                strokeWidth="4"
                                style={{ pathLength }}
                                className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-0 relative">
                        {steps.map((step, i) => (
                            <StepPoint key={i} step={step} index={i} pathLength={pathLength} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Background Waves */}
            <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none translate-y-1/2">
                <svg viewBox="0 0 1440 320" className="w-full">
                    <path fill="#064E3B" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,202.7C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

const StepPoint = ({ step, index, pathLength }: { step: Step, index: number, pathLength: MotionValue<number> }) => {
    // Total steps is 5, so denominator for index mapping is 4 (steps.length - 1)
    const opacity = useTransform(pathLength, [index/4, (index+0.5)/4], [0.3, 1]);
    const scale = useTransform(pathLength, [index/4, (index+0.5)/4], [0.9, 1.1]);
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
        >
            <div className="relative mb-16">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-slate-50 z-20 relative group-hover:scale-110 transition-transform duration-300">
                    <div className={cn("transition-colors duration-300", step.color)}>
                        {step.icon}
                    </div>
                </div>
                <motion.div 
                    style={{ opacity, scale }}
                    className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl -z-10"
                />
            </div>
            <h4 className="text-xl font-headline font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                {step.title}
            </h4>
            <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
        </motion.div>
    );
};

export default FruitJourney;
