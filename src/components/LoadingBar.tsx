import React, { useEffect, useState } from 'react';
import { Package, Terminal, Cpu, Database, Heart } from 'lucide-react';

interface LoadingBarProps {
    onComplete: () => void;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [logIndex, setLogIndex] = useState(0);

    const logs = [
        { text: "npm install love@latest --save-exact", icon: <Terminal className="w-3 h-3" /> },
        { text: "fetching remote packages...", icon: <Package className="w-3 h-3" /> },
        { text: "resolving dependencies: [trust, loyalty, fun]", icon: <Cpu className="w-3 h-3" /> },
        { text: "linking heart-service-v4.2.0...", icon: <Database className="w-3 h-3" /> },
        { text: "running postinstall scripts...", icon: <Terminal className="w-3 h-3" /> },
        { text: "optimization complete. systems green.", icon: <Heart className="w-3 h-3 text-primary" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.floor(Math.random() * 8) + 2;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                return next;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        const nextLogIndex = Math.floor((progress / 100) * logs.length);
        if (nextLogIndex > logIndex && nextLogIndex < logs.length) {
            setLogIndex(nextLogIndex);
        }
    }, [progress, logIndex, logs.length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center animate-fade-in bg-black">
            <div className="w-full max-w-lg space-y-8">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-primary/60 font-mono text-[10px] tracking-widest uppercase">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Handshake Resolved: SECURE_CHANNEL_READY
                        </span>
                        <span>{progress}%</span>
                    </div>

                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
                        <div
                            className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-[#0d0d0d] border border-white/5 rounded-lg p-6 font-mono text-xs text-left space-y-3 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                    {logs.slice(0, logIndex + 1).map((log, i) => (
                        <div key={i} className="flex items-center gap-3 animate-fade-in opacity-80 hover:opacity-100 transition-opacity">
                            <span className="text-primary/40">{i + 1}</span>
                            <span className="text-primary/60">{log.icon}</span>
                            <span className={i === logIndex ? "text-white" : "text-muted"}>
                                {log.text}
                            </span>
                        </div>
                    ))}
                    <div className="flex items-center gap-2 text-primary animate-pulse">
                        <span className="text-primary/40">{logIndex + 2}</span>
                        <span className="text-primary/60"><Terminal className="w-3 h-3" /></span>
                        <span>_</span>
                    </div>
                </div>

                <div className="pt-4 flex items-center justify-center gap-4 text-muted/30 font-mono text-[10px] uppercase tracking-widest">
                    <span>Build: STABLE</span>
                    <span>•</span>
                    <span>Env: PRODUCTION</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingBar;
