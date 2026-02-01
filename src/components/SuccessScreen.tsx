import React, { useEffect } from 'react';
import { CheckCircle2, Heart, Github, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../constants/config';

const SuccessScreen: React.FC = () => {

    useEffect(() => {
        const duration = 10 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: ReturnType<typeof setInterval> = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Gold and White confetti
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#ffffff', '#F9E2AF'] });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#D4AF37', '#ffffff', '#F9E2AF'] });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-black overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full"></div>

            <div className="relative z-10 space-y-12 max-w-2xl">
                <div className="relative inline-block scale-125 md:scale-150 mb-8">
                    <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full animate-pulse-slow"></div>
                    <CheckCircle2 className="w-24 h-24 text-primary relative z-10 animate-scale-up" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        Deployment Successful! <br />
                        <span className="text-primary text-2xl md:text-5xl block mt-4 font-mono font-medium tracking-normal">v1.0.0 Live.</span>
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-muted/60 font-mono text-sm tracking-widest uppercase">
                        <Github className="w-4 h-4" />
                        <span>Merged into main branch</span>
                    </div>
                </div>

                <div className="bg-surface/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl gold-glow shadow-2xl relative group">
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-black text-[10px] font-bold font-mono uppercase rounded shadow-lg">
                        Commit Finalized
                    </div>

                    <p className="text-xl md:text-3xl text-white font-light leading-relaxed italic" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        &quot;{CONFIG.messages.success}&quot;
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4 text-primary">
                        <Heart className="w-6 h-6 fill-current animate-pulse" />
                        <span className="h-[1px] w-20 bg-primary/30"></span>
                        <Heart className="w-6 h-6 fill-current animate-pulse" />
                    </div>
                </div>

                <p className="text-muted/40 font-mono text-[10px] tracking-[0.4em] uppercase pt-8">
                    Establishing eternal connection... 100% complete
                </p>
            </div>

            <div className="fixed bottom-8 right-8 animate-bounce opacity-30 hover:opacity-100 transition-opacity">
                <a href="#" className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                    <span>View Production Logs</span>
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>
    );
};

export default SuccessScreen;

