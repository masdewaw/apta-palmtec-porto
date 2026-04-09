import React from 'react';
import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const AptaMillMap = () => {
    const factories = [
        {
            name: "Koperasi Prima Jasa",
            link: "https://www.google.com/maps/place/4%C2%B035'11.7%22N+97%C2%B054'39.1%22E/@4.586586,97.910867,17z/data=!4m4!3m3!8m2!3d4.586586!4d97.910867?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
            x: "22%",
            y: "18%",
            color: "bg-emerald-500",
            pulseColor: "bg-emerald-400"
        },
        {
            name: "PT. Erakarya Muktijaya",
            link: "https://www.google.com/maps/place/PT.+Erakarya+muktijaya/@3.5967492,98.6281708,17z/data=!4m6!3m5!1s0x30312e4320d46251:0xdb0f81051810e26!8m2!3d3.5982163!4d98.6283572!16s%2Fg%2F1pzsgqwk0?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
            x: "32%",
            y: "28%",
            color: "bg-primary",
            pulseColor: "bg-emerald-400"
        },
        {
            name: "PT. Arya Rama Persada",
            link: "https://www.google.com/maps/place/PT.+Arya+Rama+Persada/@3.0972005,99.5445458,12z/data=!4m6!3m5!1s0x3033b5d4bf863edf:0x79f75546f82e08b1!8m2!3d3.0992164!4d99.5946945!16s%2Fg%2F11kqry0d4m?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
            x: "42%",
            y: "38%",
            color: "bg-emerald-600",
            pulseColor: "bg-emerald-400"
        },
        {
            name: "PT. Pujud Karya Sawit",
            link: "https://www.google.com/maps/place/PABRIK+KELAPA+SAWIT+PT.PUJUD+KARYA+SAWIT/@1.4681936,100.1270596,9z/data=!4m6!3m5!1s0x302cb1917abcc8a5:0x1fdd499aba9198a5!8m2!3d1.3742422!4d100.5268272!16s%2Fg%2F11fsnpkynz?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
            x: "55%",
            y: "55%",
            color: "bg-emerald-400",
            pulseColor: "bg-emerald-300"
        }
    ];

    return (
        <section id="peta-pabrik" className="bg-[#0B0F1A] py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-24 space-y-6">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-light text-white font-headline tracking-tight leading-tight"
                    >
                        Peta Implementasi: <span className="font-bold text-emerald-400">Sumatera Area</span>
                    </motion.h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed px-4 md:px-0">
                        Pantau seluruh rantai produksi dari satu layar terpusat dengan protokol keamanan tingkat tinggi.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-8 shadow-sm border border-slate-200/50 relative">
                    <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-slate-50 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden flex items-center justify-center p-4 md:p-8">
                        {/* Sumatra/Medan Simplified Map Representation (SVG) */}
                        <div className="absolute inset-0 opacity-10">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFwJ2e7ftJyfEhMjZtwnlUG-rfiAS_WElw0wSefGQl31kT9F39idnW-aoilZtPjtnuyRqnUcF8RQW7MJ-C_A4ZWVBnkT_YPjzegWaCg7CQj6wYkm1zJA0pUtBLd3rke5_0EpcCpK_WeYA5gzqZMWkSiAeK0sYBTVLjCMSogeFN-f85oSRl9dgg-zvOjvi4871SiImbO7IJgbvXwpP-c967WvrOyPDKEVOizxOLc-upZEaqV2kyRMYxtaYrbS3jTWixfweUXLcDHRk" 
                                className="w-full h-full object-cover grayscale scale-[2] md:scale-100 origin-center" 
                                alt="Map Background"
                            />
                        </div>

                        {/* Pulsing Pins */}
                        {factories.map((factory, index) => (
                            <MapPin 
                                key={index}
                                x={factory.x} 
                                y={factory.y} 
                                label={factory.name} 
                                color={factory.color} 
                                pulseColor={factory.pulseColor}
                                link={factory.link}
                            />
                        ))}
                    </div>

                    {/* Info Panels - Bottom on mobile, Absolute on desktop */}
                    <div className="mt-6 md:mt-0 flex flex-col md:absolute md:top-14 md:right-14 gap-4 md:gap-6 w-full md:max-w-xs z-20">
                        <InfoCard 
                            icon={<RefreshCw size={24} className="text-emerald-600" />}
                            label="Network State"
                            value="Sinkronisasi Cepat"
                            progress={100}
                            progressColor="bg-emerald-500"
                        />
                        <InfoCard 
                            icon={<ShieldCheck size={24} className="text-blue-600" />}
                            label="Security"
                            value="OTP Head Office"
                            footer="Parameter kritikal memerlukan verifikasi biometrik atau OTP instan."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MapPin = ({ x, y, label, color, pulseColor, link }: { x: string, y: string, label: string, color: string, pulseColor: string, link: string }) => (
    <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute transition-all duration-500 hover:scale-125 hover:z-40 z-30 cursor-pointer" 
        style={{ top: y, left: x }}
    >
        <div className="relative group">
            {/* Ping Animation */}
            <div className={cn("absolute inset-0 animate-ping rounded-full h-10 w-10 -translate-x-1/4 -translate-y-1/4 opacity-40", pulseColor)} />
            {/* Core Pin */}
            <div className={cn("relative h-5 w-5 rounded-full border-2 border-white shadow-xl z-20", color)} />
            
            {/* Tooltip-like label */}
            <div className="absolute top-8 -left-16 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-100 min-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 flex items-center justify-center">
                <span className={cn("text-[11px] font-bold uppercase tracking-wider text-center", color.replace('bg-', 'text-'))}>
                    {label}
                </span>
            </div>
        </div>
    </a>
);

const InfoCard = ({ icon, label, value, progress, progressColor, footer }: { icon: React.ReactNode, label: string, value: string, progress?: number, progressColor?: string, footer?: string }) => (
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-100 shadow-2xl space-y-4"
    >
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                {icon}
            </div>
            <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mb-1">{label}</p>
                <p className="text-base font-bold text-slate-900 leading-none">{value}</p>
            </div>
        </div>
        {progress !== undefined && (
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className={cn("h-full", progressColor)} 
                />
            </div>
        )}
        {footer && (
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                {footer}
            </p>
        )}
    </motion.div>
);

export default AptaMillMap;
