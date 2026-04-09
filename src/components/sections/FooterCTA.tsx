import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone, Globe } from "lucide-react";

const CTA = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-40">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden gradient-primary rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 flex flex-col items-center text-center space-y-8 md:space-y-10 shadow-[0_50px_100px_rgba(0,53,39,0.2)]"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white font-headline leading-tight max-w-4xl tracking-tight relative z-10">
                    Siap Mendigitalisasi Operasi <span className="font-bold">Pabrik Anda?</span>
                </h2>
                
                <p className="text-emerald-100 text-xl max-w-2xl font-light relative z-10">
                    Konsultasikan kebutuhan spesifik pabrik Anda dengan tim ahli transformasi digital kami.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 relative z-10 w-full md:w-auto px-4 md:px-0">
                    <Button className="h-14 md:h-16 px-6 md:px-12 rounded-2xl bg-white text-primary hover:bg-slate-50 font-bold text-base md:text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto">
                        Jadwalkan Demo Gratis
                        <ArrowRight size={20} />
                    </Button>
                    <Button variant="outline" className="h-14 md:h-16 px-6 md:px-12 rounded-2xl border-white/30 text-white hover:bg-white/10 font-bold text-base md:text-lg flex items-center justify-center gap-3 bg-transparent transition-all w-full sm:w-auto">
                        Unduh Brosur Teknis
                        <Download size={20} />
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="text-2xl font-bold text-primary font-headline">Palmtec</div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
                            Solusi integrasi pabrik sawit masa depan. Membangun fondasi digital untuk industri yang berkelanjutan.
                        </p>
                        <div className="flex space-x-5 text-slate-400">
                           <a href="https://apta.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Website">
                               <Globe size={20}/>
                           </a>
                           <a href="mailto:info@apta.id" className="hover:text-primary transition-colors" title="Email">
                               <Mail size={20}/>
                           </a>
                           <a href="https://wa.me/628118622782" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="WhatsApp">
                               <Phone size={20}/>
                           </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <FooterColumn title="Produk">
                        <FooterLink href="#teknologi">Teknologi</FooterLink>
                        <FooterLink href="#alur-kerja">Alur Kerja Digital</FooterLink>
                        <FooterLink href="#infrastruktur">Infrastruktur IT</FooterLink>
                        <FooterLink href="#demo">Demo Aplikasi</FooterLink>
                        <FooterLink href="#peta-pabrik">Peta Pabrik</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Perusahaan">
                        <FooterLink href="https://apta.id/">Tentang Kami</FooterLink>
                        <FooterLink href="https://apta.id/about-us">Karir</FooterLink>
                        <FooterLink href="https://apta.id/blog">Blog</FooterLink>
                        <FooterLink href="https://apta.id/aptaworks-academy">Aptaworks Academy</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Bantuan">
                        <FooterLink href="https://apta.id/about-us">Pusat Bantuan</FooterLink>
                        <FooterLink href="https://apta.id/our-services">Layanan Kami</FooterLink>
                        <FooterLink href="https://apta.id/about-us">Kontak Support</FooterLink>
                        <FooterLink href="https://apta.id/our-works">Karya Kami</FooterLink>
                    </FooterColumn>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
                    <p className="text-[10px] md:text-xs text-slate-400 font-medium md:font-bold uppercase tracking-widest max-w-xs md:max-w-none leading-relaxed">
                        © {new Date().getFullYear()} Palmtec. Solusi Enterprise Terintegrasi. <br className="md:hidden" /> Semua Hak Dilindungi.
                    </p>
                    <div className="flex items-center gap-6 md:gap-8 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <a href="https://id.linkedin.com/company/aptaworks" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/aptaworks/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-8">
        <h6 className="font-headline font-bold text-primary text-xs uppercase tracking-widest">{title}</h6>
        <ul className="space-y-4">
            {children}
        </ul>
    </div>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li>
        <a href={href} className="text-sm text-slate-500 hover:text-primary font-bold transition-colors block">
            {children}
        </a>
    </li>
);

export { CTA, Footer };
