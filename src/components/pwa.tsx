'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from './analytics';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PWAManager() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
            trackEvent('pwa_sw_registered', 'pwa', 'Service Worker Registered', 1);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
            trackEvent('pwa_sw_error', 'pwa', 'Service Worker Error', 1);
          });
      });
    }

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
      trackEvent('pwa_install_prompt_shown', 'pwa', 'Install Prompt Available', 1);
    };

    // Check if app is already installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      trackEvent('pwa_installed', 'pwa', 'App Installed', 1);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if running as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      trackEvent('pwa_standalone_mode', 'pwa', 'Running as PWA', 1);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      trackEvent('pwa_install_accepted', 'pwa', 'Install Accepted', 1);
    } else {
      trackEvent('pwa_install_dismissed', 'pwa', 'Install Dismissed', 1);
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    trackEvent('pwa_install_banner_dismissed', 'pwa', 'Install Banner Dismissed', 1);
  };

  if (!isMounted || !showInstallPrompt || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50">
      <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-text-primary mb-1">
              Instalar App
            </h3>
            <p className="text-xs text-text-secondary mb-3">
              Instala mi portafolio como una app para acceso rápido y experiencia offline.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="px-3 py-1.5 bg-accent-green text-terminal-bg text-xs font-medium rounded hover:bg-accent-green/90 transition-colors"
              >
                Instalar
              </button>
              <button
                onClick={handleDismissInstall}
                className="px-3 py-1.5 text-text-secondary text-xs hover:text-text-primary transition-colors"
              >
                Ahora no
              </button>
            </div>
          </div>
          <button
            onClick={handleDismissInstall}
            className="flex-shrink-0 text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}