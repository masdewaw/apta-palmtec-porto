import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled 
                ? "bg-white/80 backdrop-blur-xl py-3 border-slate-200 shadow-sm" 
                : "bg-transparent py-5 border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tight text-primary font-headline">
                    Palmtec
                </div>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <NavLink href="#beranda">Beranda</NavLink>
                    <NavLink href="#teknologi">Teknologi</NavLink>
                    <NavLink href="#alur-kerja">Alur Kerja Digital</NavLink>
                    <NavLink href="#infrastruktur">Infrastruktur IT</NavLink>
                    <NavLink href="#demo">Demo Aplikasi</NavLink>
                    <NavLink href="#peta-pabrik">Peta Pabrik</NavLink>
                </div>

                <div className="flex items-center gap-4">
                    <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white hidden sm:flex">
                        <a href="https://wa.me/628118622782" target="_blank" rel="noopener noreferrer">
                            Hubungi Kami
                        </a>
                    </Button>
                    <button 
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-in slide-in-from-top-4 duration-300">
                    <NavLink href="#beranda" onClick={() => setIsMobileMenuOpen(false)}>Beranda</NavLink>
                    <NavLink href="#teknologi" onClick={() => setIsMobileMenuOpen(false)}>Teknologi</NavLink>
                    <NavLink href="#alur-kerja" onClick={() => setIsMobileMenuOpen(false)}>Alur Kerja Digital</NavLink>
                    <NavLink href="#infrastruktur" onClick={() => setIsMobileMenuOpen(false)}>Infrastruktur IT</NavLink>
                    <NavLink href="#demo" onClick={() => setIsMobileMenuOpen(false)}>Demo Aplikasi</NavLink>
                    <NavLink href="#peta-pabrik" onClick={() => setIsMobileMenuOpen(false)}>Peta Pabrik</NavLink>
                    <Button asChild className="rounded-xl w-full bg-primary text-white">
                        <a href="https://wa.me/628118622782" target="_blank" rel="noopener noreferrer">
                            Hubungi Kami
                        </a>
                    </Button>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ href, children, active = false, onClick }: { href: string, children: React.ReactNode, active?: boolean, onClick?: () => void }) => (
    <a 
        href={href} 
        onClick={onClick}
        className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            active ? "text-primary border-b-2 border-primary pb-1" : "text-slate-600"
        )}
    >
        {children}
    </a>
);

export default Navbar;
