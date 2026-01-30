import React from 'react';
import { GitCommit, Calendar, Star, Heart, ArrowRight } from 'lucide-react';

interface TimelineEvent {
    title: string;
    date: string;
    description: string;
    icon: React.ReactNode;
}

interface TimelineScreenProps {
    onNext: () => void;
}

const timelineEvents: TimelineEvent[] = [
    {
        title: "Scene 1: Discovery Phase",
        date: "The Beginning",
        description: "The moment our paths first crossed. Initialization of a connection that would soon become my most important dependency.",
        icon: <Star className="w-5 h-5" />
    },
    {
        title: "Bug Fixes / Color Grading",
        date: "The Support",
        description: "For all the times you fixed my bad days and added color to my monochrome world. You are my favorite debugger.",
        icon: <Heart className="w-5 h-5" />
    },
    {
        title: "System Architecture",
        date: "Long Distance Optimization",
        description: "Building the infrastructure to survive the distance. Optimized for low latency communication and high availability of love.",
        icon: <GitCommit className="w-5 h-5" />
    }
];

const TimelineScreen: React.FC<TimelineScreenProps> = ({ onNext }) => {
    return (
        <div className="min-h-screen bg-black text-white p-6 py-20 flex flex-col items-center animate-fade-in relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>

            <div className="max-w-4xl w-full space-y-12 relative z-10">
                <div className="text-center space-y-4 mb-16 animate-fade-in-up">
                    <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase">Project Milestones</h2>
                    <h1 className="text-3xl md:text-5xl font-bold font-display" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>The History of Us</h1>
                </div>

                <div className="space-y-12 md:space-y-16">
                    {timelineEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 400}ms` }}
                        >
                            <div className={`flex-1 w-full md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                                <div className="bg-surface/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl gold-glow-hover transition-all duration-500 hover:border-primary/40 group">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{event.title}</h3>
                                    <p className="text-primary/60 font-mono text-xs mt-1 mb-3">{event.date}</p>
                                    <p className="text-muted text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>

                            <div className="md:order-2 relative">
                                <div className="w-12 h-12 bg-black border border-primary/50 rounded-full flex items-center justify-center text-primary shadow-[0_0_20px_rgba(212,175,55,0.3)] z-20 relative">
                                    {event.icon}
                                </div>
                                {index !== timelineEvents.length - 1 && (
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-primary/20 md:hidden"></div>
                                )}
                            </div>

                            <div className="flex-1 w-full hidden md:block md:order-2"></div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-16 animate-fade-in-up" style={{ animationDelay: '1500ms' }}>
                    <button
                        onClick={onNext}
                        className="group flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                    >
                        <span>COMPILE CHANGES</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimelineScreen;
