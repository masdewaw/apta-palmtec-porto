import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCw, Shield, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
    return (
        <section id="beranda" className="relative bg-white pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50/50 rounded-full blur-3xl -z-10" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light font-headline leading-tight text-primary tracking-tight">
                        Palmtec: Ekosistem <br/>
                        <span className="font-bold">Digitalisasi Pabrik</span> <br className="hidden sm:block"/>
                        Kelapa Sawit Terintegrasi
                    </h1>
                    
                    <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Transformasi operasional mill konvensional menjadi ekosistem data-driven yang presisi dengan Enterprise Solutions Module.
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        <Button asChild className="h-12 md:h-14 px-8 md:px-10 rounded-2xl text-base md:text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            <a href="#teknologi">Eksplorasi Solusi</a>
                        </Button>
                        <Button asChild variant="outline" className="h-12 md:h-14 px-8 md:px-10 rounded-2xl text-base md:text-lg font-bold border-slate-200 hover:bg-slate-50">
                            <a href="#demo">Lihat Demo</a>
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Content - Tablet Mockup */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-6 relative flex justify-center items-center px-4 md:px-0"
                >
                    {/* Tablet View */}
                    <div className="relative z-10 w-full max-w-lg aspect-[4/3] bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl overflow-hidden border-[8px] md:border-[12px] border-slate-900 ring-1 ring-slate-800">
                        <div className="absolute inset-0 bg-white overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem]">
                            <img 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjivxuPakQ19DD5pyOZpu4IG9K4Y-y8VQm-eAA_aU3xkF-NLAA55hbX_0WIKc1_xMmlo95EpLRRmdUlG037H9GwZr0mlfkljfKabh9fMWV_vDy1Gv37RHjmLclD4T8s5_TdJVaeODRyjaDWFtnFeZr2RyO8QIBH-tGvtcVL66hqFbImE2pw1iwk-jzW_vLE7HV58f10qCq0VYg-Kt9PI4smyIZsNXql6oV1Fbo7jAhoCUZiRE1gzD3rER3_JAvygN6jvbXAi0f-rE" 
                                alt="Palmtec Dashboard"
                            />
                        </div>
                    </div>

                    {/* Floating Badges */}
                    <FloatingBadge 
                        icon={<RefreshCw className="text-emerald-600" size={20} />} 
                        label="Latency" 
                        value="Sinkronisasi Cepat" 
                        className="scale-75 md:scale-100 -top-4 -right-2 md:-right-4"
                    />
                    <FloatingBadge 
                        icon={<Shield className="text-blue-600" size={20} />} 
                        label="Accuracy" 
                        value="Integritas Data 100%" 
                        className="scale-75 md:scale-100 bottom-6 md:bottom-12 -left-4 md:-left-8"
                    />
                    <FloatingBadge 
                        icon={<Factory className="text-amber-600" size={20} />} 
                        label="Scale" 
                        value="Akses Multi-Pabrik" 
                        className="scale-75 md:scale-100 -bottom-4 -right-4 md:-right-8"
                    />
                </motion.div>
            </div>
        </section>
    );
};

const FloatingBadge = ({ icon, label, value, className }: { icon: React.ReactNode, label: string, value: string, className: string }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className={cn(
            "absolute z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4",
            className
        )}
    >
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
            {icon}
        </div>
        <div>
            <p className="text-[0.65rem] uppercase tracking-widest text-slate-400 font-bold">{label}</p>
            <p className="text-sm font-headline font-bold text-slate-900">{value}</p>
        </div>
    </motion.div>
);

export default Hero;
