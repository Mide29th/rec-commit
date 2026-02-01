import React, { useState, useEffect } from 'react';
import { Lock, Wifi, MapPin } from 'lucide-react';
import { CONFIG } from '../constants/config';

interface HandshakeScreenProps {
    onAccept: () => void;
}

const HandshakeScreen: React.FC<HandshakeScreenProps> = ({ onAccept }) => {
    const [location, setLocation] = useState<string>("Detecting...");

    useEffect(() => {
        // Basic approximate location fetching
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.city && data.country_name) {
                    setLocation(`${data.city}, ${data.country_code}`);
                } else {
                    setLocation("Remote Client (Heart)");
                }
            })
            .catch(() => setLocation("Authenticated Source"));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 space-y-12 animate-fade-in bg-black overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative group cursor-none">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-slow group-hover:bg-primary/30 transition-colors"></div>
                <div className="relative bg-surface border border-primary/30 p-10 rounded-full shadow-[0_0_50px_rgba(212,175,55,0.1)] glass-gold group-hover:border-primary/50 transition-all duration-500">
                    <Lock className="w-20 h-20 text-primary animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2">
                    <span className="flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
                    </span>
                </div>
            </div>

            <div className="space-y-6 max-w-lg z-10">
                <div className="space-y-2">
                    <p className="text-primary/60 font-mono text-xs tracking-[0.3em] uppercase animate-pulse">System encrypted</p>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        {CONFIG.messages.handshake}
                    </h1>
                </div>

                <div className="bg-surface/40 backdrop-blur-md border border-white/5 rounded-xl p-6 font-mono text-sm text-muted space-y-3 shadow-2xl">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span>Source:</span>
                        <span className="text-secondary flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-primary" />
                            {location}
                        </span>
                    </div>
                    <div className="flex justify-center items-center py-1">
                        <div className="h-[1px] w-full bg-gradient-to-right from-transparent via-primary/30 to-transparent"></div>
                        <span className="px-3 text-[10px] text-primary/40">ENCRYPTED_TUNNEL</span>
                        <div className="h-[1px] w-full bg-gradient-to-right from-transparent via-primary/30 to-transparent"></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <span>Destination:</span>
                        <span className="text-white font-semibold">Lagos, NG</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Status:</span>
                        <span className="text-success flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                            Handshake Ready
                        </span>
                    </div>
                </div>
            </div>

            <button
                onClick={onAccept}
                className="group relative px-10 py-5 bg-black overflow-hidden rounded-full border border-primary/40 hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] btn-premium"
            >
                <div className="absolute inset-0 w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"></div>
                <div className="flex items-center gap-4 relative z-10 text-primary">
                    <Wifi className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                    <span className="font-bold tracking-[0.15em] uppercase text-sm">Accept Handshake</span>
                </div>
            </button>

            <div className="fixed bottom-8 text-[10px] text-muted/20 font-mono tracking-[0.4em] uppercase">
                Secure Protocol: TLS 1.3 | AES-256-GCM
            </div>
        </div>
    );
};

export default HandshakeScreen;

