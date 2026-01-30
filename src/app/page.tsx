'use client';

import React, { useState } from 'react';
import HandshakeScreen from '@/components/HandshakeScreen';
import LoadingBar from '@/components/LoadingBar';
import MainProposal from '@/components/MainProposal';
import SuccessScreen from '@/components/SuccessScreen';

import TimelineScreen from '@/components/TimelineScreen';
import { sendProposalNotification } from '@/lib/email';

type AppState = 'HANDSHAKE' | 'LOADING' | 'TIMELINE' | 'PROPOSAL' | 'SUCCESS';

export default function Home() {
    const [appState, setAppState] = useState<AppState>('HANDSHAKE');

    const handleHandshakeAccept = () => {
        setAppState('LOADING');
    };

    const handleLoadingComplete = () => {
        setAppState('TIMELINE');
    };

    const handleTimelineComplete = () => {
        setAppState('PROPOSAL');
    };

    const handleProposalAccept = () => {
        setAppState('SUCCESS');
        sendProposalNotification();
    };

    const handleProposalReject = () => {
        alert("Error: 406 Not Acceptable. Rejection is not a supported operation in this version of the kernel. Please try 'Merge' again.");
    };

    return (
        <main className="min-h-screen bg-background text-secondary font-sans selection:bg-primary selection:text-black">
            {appState === 'HANDSHAKE' && (
                <HandshakeScreen onAccept={handleHandshakeAccept} />
            )}

            {appState === 'LOADING' && (
                <LoadingBar onComplete={handleLoadingComplete} />
            )}

            {appState === 'TIMELINE' && (
                <TimelineScreen onNext={handleTimelineComplete} />
            )}

            {appState === 'PROPOSAL' && (
                <MainProposal
                    onAccept={handleProposalAccept}
                    onReject={handleProposalReject}
                />
            )}

            {appState === 'SUCCESS' && (
                <SuccessScreen />
            )}
        </main>
    );
}
