import React, { useState, useCallback } from 'react';
import { Heart, GitCommit, ShieldCheck, AlertCircle, GitPullRequest, Code2, CheckCircle2 } from 'lucide-react';

interface MainProposalProps {
    onAccept: () => void;
    onReject: () => void;
}

const MainProposal: React.FC<MainProposalProps> = ({ onAccept, onReject }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [isMoved, setIsMoved] = useState(false);

    const moveButton = useCallback(() => {
        const x = Math.random() * (window.innerWidth - 100) - window.innerWidth / 2;
        const y = Math.random() * (window.innerHeight - 50) - window.innerHeight / 2;
        setNoButtonPos({ x, y });
        setIsMoved(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center animate-fade-in relative bg-black overflow-hidden font-sans">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-3xl w-full bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-10">
                {/* Code Block Header */}
                <div className="bg-[#1e1e1e] border-b border-white/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="ml-4 flex items-center gap-2 text-muted text-xs font-mono">
                            <Code2 className="w-3 h-3" />
                            <span>v1.0.0-PROPOSAL.tsx</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] text-primary font-mono uppercase tracking-wider">Pending Review</span>
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                    <div className="text-left space-y-6">
                        <div className="flex items-center gap-4 text-primary">
                            <GitPullRequest className="w-8 h-8" />
                            <h1 className="text-3xl md:text-5xl font-bold font-display" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                                Pull Request: Be My Girlfriend?
                            </h1>
                        </div>

                        <div className="font-mono text-sm space-y-4 bg-black/40 p-6 rounded-lg border border-white/5">
                            <p className="text-muted"><span className="text-primary">diff --git</span> a/heart b/heart</p>
                            <p className="text-muted"><span className="text-primary">index</span> 0000000..forever</p>
                            <div className="space-y-1">
                                <p className="text-success"><span className="mr-4">+</span> + // Feature: Long Distance Optimization (Stable)</p>
                                <p className="text-success"><span className="mr-4">+</span> + // Feature: Unlimited Support & Love</p>
                                <p className="text-success"><span className="mr-4">+</span> + // Conflict Resolution: Resolved with Love</p>
                                <p className="text-success"><span className="mr-4">+</span> + // Latency: 0ms (Cached in Heart)</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-muted italic">&quot;Merging this PR will create a new branch in our lives, optimized for maximum happiness.&quot;</p>
                        <div className="flex items-center justify-center gap-2 text-success">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs font-mono uppercase tracking-widest">All Checks Passed</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6 relative">
                        {/* Runaway Button */}
                        <div
                            className="w-full md:w-auto transition-all duration-200 ease-out"
                            style={{
                                transform: isMoved ? `translate(${noButtonPos.x}px, ${noButtonPos.y}px)` : 'none',
                                position: isMoved ? 'fixed' : 'relative',
                                zIndex: 100
                            }}
                        >
                            <button
                                onMouseEnter={moveButton}
                                onTouchStart={moveButton}
                                onClick={onReject}
                                className="w-full md:w-auto px-8 py-4 bg-white/5 text-muted hover:text-white transition-colors text-sm font-mono border border-white/10 rounded-lg whitespace-nowrap"
                            >
                                Close PR (No)
                            </button>
                        </div>

                        <button
                            onClick={onAccept}
                            className="w-full md:w-auto group relative px-12 py-5 bg-primary overflow-hidden rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <div className="flex items-center justify-center gap-3 relative z-10 text-black font-bold text-lg">
                                <GitCommit className="w-5 h-5" />
                                <span>REC & COMMIT</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-xs text-muted/30 font-mono flex items-center gap-4">
                <span>12 files changed</span>
                <span>•</span>
                <span className="text-success">+2,910 additions</span>
                <span>•</span>
                <span className="text-red-500">-0 deletions</span>
            </div>
        </div>
    );
};

export default MainProposal;
