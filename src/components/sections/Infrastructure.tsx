import React from 'react';
import { motion } from "framer-motion";
import { Server, Database, Network } from "lucide-react";

const Infrastructure = () => {
    return (
        <section id="infrastruktur" className="bg-white py-20 md:py-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Visual Side */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl relative"
                        >
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlNedO3pgyBrx9kyEWpLyCygCOhvwICr-5bwJ7Qho4xzVUMKOQprD95uRY0LHj0TkQ7Lu8efVWWFQO6vcePd38TJyWBSH3-Nqly0_Va-ajhyGjkRNmVgKpVwA459PfTR9cTwEN8lXKuZURzbq3DpvxSQNTrxDYvBs8s6S0UvUpyHuGca7PLzgClZuHvYsTfBC2GErn1uJbLr_mcywqVyVqIgkLBWHvOJjDWdXXq_hnjeTAFFvS6u4vxverYzpkKSxmQUVLeHmDeC8" 
                                alt="Server Room" 
                                className="w-full h-full object-cover mix-blend-overlay opacity-40"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4 md:space-y-6">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-white/20">
                                        <Database className="text-white w-8 h-8 md:w-12 md:h-12" />
                                    </div>
                                    <h4 className="text-white font-headline font-bold text-lg md:text-2xl uppercase tracking-widest text-shadow px-4">
                                        In-House Infrastructure
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 bg-primary text-white p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl max-w-[240px] md:max-w-xs shadow-2xl border border-primary-container z-20"
                        >
                            <p className="text-xs md:text-sm font-medium leading-relaxed italic opacity-90">
                                "Menjamin operasional tetap berjalan meski tanpa koneksi internet satelit."
                            </p>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-primary font-headline leading-tight tracking-tight px-4 md:px-0"
                            >
                                Arsitektur Tanpa Henti <br/>
                                <span className="font-bold">(Zero Downtime)</span>
                            </motion.h2>
                            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Infrastruktur Palmtec dirancang khusus untuk kondisi remote area dengan keterbatasan sinyal.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
                            <Feature 
                                icon={<Server size={32} className="text-emerald-700" />}
                                title="Local Server Edge"
                                desc="Data diproses di lokasi secara instan tanpa ketergantungan pada cloud pusat untuk operasi kritikal."
                                delay={0.2}
                            />
                            <Feature 
                                icon={<Network size={32} className="text-emerald-700" />}
                                title="Internal Mesh Network"
                                desc="Jaringan khusus area pabrik yang menghubungkan semua terminal secara nirkabel 24/7."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-slate-50 select-none -z-0 opacity-40 font-headline hidden xl:block tracking-widest">
                STABLE
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="space-y-5"
    >
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-sm">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900 font-headline tracking-tight">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
);

export default Infrastructure;
