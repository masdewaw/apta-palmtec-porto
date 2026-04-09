import { motion } from "framer-motion";
import { Smartphone, Layout, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const TechStack = () => {
    const techItems = [
        {
            title: "Flutter (Desktop & Mobile)",
            description: "Antarmuka responsif untuk operasional lapangan. Memberikan pengalaman pengguna yang konsisten di berbagai perangkat keras.",
            icon: <Smartphone size={32} className="text-emerald-700" />,
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-100",
            span: "col-span-1 lg:col-span-1",
            index: 1
        },
        {
            title: "React TypeScript (Admin Web)",
            description: "Dashboard monitoring pusat dengan tipe data yang kuat untuk keamanan dan reliabilitas data perusahaan yang krusial.",
            icon: <Layout size={32} className="text-blue-700" />,
            bgColor: "bg-blue-50",
            borderColor: "border-blue-100",
            span: "col-span-1 lg:col-span-1",
            index: 2
        },
        {
            title: "Golang (High-Perf Backend)",
            description: "Pemrosesan data skala besar dengan latensi rendah, menangani ribuan transaksi data sensor secara simultan.",
            icon: <Database size={32} className="text-slate-700" />,
            bgColor: "bg-slate-100",
            borderColor: "border-slate-200",
            span: "col-span-1 lg:col-span-1",
            index: 3
        }
    ];

    return (
        <section id="teknologi" className="py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-20 space-y-4">
                    <h2 className="text-4xl font-headline font-bold text-primary">
                        Arsitektur Teknologi Masa Depan
                    </h2>
                    <div className="h-1.5 w-24 bg-emerald-700 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techItems.map((item) => (
                        <motion.div
                            key={item.index}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.index * 0.1 }}
                            className={cn(
                                "group p-10 rounded-3xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300",
                                item.span
                            )}
                        >
                            <div className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300",
                                item.bgColor,
                                "border",
                                item.borderColor
                            )}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-headline font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
