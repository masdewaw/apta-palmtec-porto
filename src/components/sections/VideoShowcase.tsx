import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { videoDemos, type VideoDemo } from '@/data/videoDemos';
import { cn } from '@/lib/utils';
import { Laptop, Tablet, Smartphone, CheckCircle2 } from 'lucide-react';

const DeviceMockup = ({ 
  type, 
  children, 
  className 
}: { 
  type: VideoDemo['deviceType']; 
  children: React.ReactNode; 
  className?: string;
}) => {
  if (type === 'laptop') {
    return (
      <div className={cn("relative mx-auto w-full max-w-[850px]", className)}>
        {/* Generic Laptop Screen */}
        <div className="relative rounded-t-lg border-[10px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden aspect-video">
          {/* Simple Bezel Camera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-600 z-10" />
          {children}
        </div>
        {/* Laptop Base / Hinge */}
        <div className="h-4 bg-slate-700 rounded-b-sm w-[102%] -ml-[1%] relative z-0 border-t border-slate-600/30" />
        <div className="h-2 bg-slate-900/40 rounded-b-xl w-[90%] mx-auto blur-md" />
      </div>
    );
  }

  if (type === 'tablet') {
    return (
      <div className={cn("relative mx-auto w-full max-w-[420px] aspect-[10/16]", className)}>
        {/* Android 8-inch Tablet */}
        <div className="relative h-full rounded-[2rem] border-[14px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden">
          {/* Punch-hole Camera */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-900 ring-1 ring-slate-700/50 z-10" />
          {children}
        </div>
        <div className="absolute -inset-2 blur-2xl bg-primary/5 rounded-[3rem] -z-10" />
      </div>
    );
  }

  return (
    <div className={cn("relative mx-auto w-full max-w-[280px] aspect-[9/19.5]", className)}>
      {/* Android Smartphone */}
      <div className="relative h-full rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Punch-hole Camera */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-950 ring-1 ring-slate-800/50 z-10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-900/30" />
        </div>
        {children}
      </div>
      <div className="absolute -inset-4 blur-2xl bg-primary/5 rounded-[4rem] -z-10" />
    </div>
  );
};

const VideoPlayer = ({ src, active }: { src: string; active: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Auto-play blocked", err));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const VideoShowcase = () => {
  const [activeTab, setActiveTab] = useState(videoDemos[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeDemo = videoDemos.find(d => d.id === activeTab) || videoDemos[0];

  return (
    <section id="demo" className="py-20 md:py-32 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Live Experience</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mt-2 font-headline leading-tight">
              Demo Aplikasi <span className="font-bold">Interaktif</span>
            </h2>
          </motion.div>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-start md:justify-center mb-12 md:mb-16 -mx-6 px-6 overflow-x-auto pb-4 no-scrollbar">
            <TabsList className="bg-slate-100/80 backdrop-blur-md p-1.5 h-auto flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 border border-slate-200/50 shadow-sm rounded-2xl min-w-max md:min-w-0 px-2 md:px-1.5">
              {videoDemos.map((demo) => (
                <TabsTrigger 
                  key={demo.id} 
                  value={demo.id}
                  className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-lg py-3 px-4 md:px-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 md:gap-2.5 whitespace-nowrap">
                    {demo.deviceType === 'laptop' && <Laptop className="w-4 h-4" />}
                    {demo.deviceType === 'tablet' && <Tablet className="w-4 h-4" />}
                    {demo.deviceType === 'smartphone' && <Smartphone className="w-4 h-4" />}
                    <span className="text-xs md:text-sm font-medium">{demo.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Info */}
            <div className="order-2 lg:order-1 space-y-8 lg:pr-12 px-2 md:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{activeDemo.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                      {activeDemo.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span>Interface Premium & User Friendly</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span>Sinkronisasi Data Real-time</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span>Keamanan Data Tingkat Tinggi</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Mockup */}
            <div className="order-1 lg:order-2 flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", damping: 25 }}
                  className="w-full max-w-full lg:max-w-none flex justify-center"
                >
                  <DeviceMockup type={activeDemo.deviceType}>
                    <VideoPlayer src={activeDemo.videoUrl} active={true} />
                  </DeviceMockup>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default VideoShowcase;
