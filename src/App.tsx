import React, { useState } from 'react';
import { CinematicLoader } from './components/effects/CinematicLoader';
import { InteractiveBackground } from './components/effects/InteractiveBackground';
import { LenisScroll } from './components/effects/LenisScroll';
import { TopHeaderBanner } from './components/brand/TopHeaderBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickSearchModal } from './components/layout/QuickSearchModal';
import { JoinModal } from './components/modals/JoinModal';
import { EventRegisterModal } from './components/modals/EventRegisterModal';
import { StartupPitchModal } from './components/modals/StartupPitchModal';
import { FloatingSocialBar } from './components/layout/FloatingSocialBar';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InitiativesPage } from './pages/InitiativesPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { StartupsPage } from './pages/StartupsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogsPage } from './pages/BlogsPage';
import { MentorshipPage } from './pages/MentorshipPage';
import { ContactPage } from './pages/ContactPage';

import { EventItem } from './lib/types';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('home');

  // Modal controls
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [selectedEventPass, setSelectedEventPass] = useState<EventItem | null>(null);

  return (
    <>
      {/* Cinematic Fullscreen Loader */}
      {loading && <CinematicLoader onComplete={() => setLoading(false)} />}

      {!loading && (
        <LenisScroll>
          <div className="relative min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Interactive Particle Circuit Canvas Background */}
            <InteractiveBackground />

            {/* Top Credential Reference Header Banner (3-Column Layout: E-Cell Logo | BITS Vizag College Logo | IIC Logo) */}
            <TopHeaderBanner className="z-50 relative" />

            {/* Glass Navbar */}
            <Navbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onOpenJoinModal={() => setJoinModalOpen(true)}
              onOpenSearchModal={() => setSearchModalOpen(true)}
            />

            {/* Main Content Router View */}
            <main className="flex-grow z-10 pt-4 md:pt-8">
              {activeTab === 'home' && (
                <HomePage
                  setActiveTab={setActiveTab}
                  onOpenJoinModal={() => setJoinModalOpen(true)}
                  onOpenPitchModal={() => setPitchModalOpen(true)}
                  onSelectEvent={(evt) => setSelectedEventPass(evt)}
                />
              )}

              {activeTab === 'about' && <AboutPage />}
              {activeTab === 'initiatives' && <InitiativesPage onOpenJoinModal={() => setJoinModalOpen(true)} />}
              {activeTab === 'events' && <EventsPage onSelectEvent={(evt) => setSelectedEventPass(evt)} />}
              {activeTab === 'team' && <TeamPage />}
              {activeTab === 'startups' && <StartupsPage onOpenPitchModal={() => setPitchModalOpen(true)} />}
              {activeTab === 'mentorship' && <MentorshipPage />}
              {activeTab === 'gallery' && <GalleryPage />}
              {activeTab === 'blogs' && <BlogsPage />}
              {activeTab === 'contact' && <ContactPage />}
            </main>

            {/* Footer */}
            <Footer
              setActiveTab={setActiveTab}
              onOpenJoinModal={() => setJoinModalOpen(true)}
            />

            {/* Modals & Overlays */}
            <FloatingSocialBar />
            
            <QuickSearchModal
              isOpen={searchModalOpen}
              onClose={() => setSearchModalOpen(false)}
              setActiveTab={setActiveTab}
            />

            <JoinModal
              isOpen={joinModalOpen}
              onClose={() => setJoinModalOpen(false)}
            />

            <EventRegisterModal
              event={selectedEventPass}
              onClose={() => setSelectedEventPass(null)}
            />

            <StartupPitchModal
              isOpen={pitchModalOpen}
              onClose={() => setPitchModalOpen(false)}
            />
          </div>
        </LenisScroll>
      )}
    </>
  );
};
export default App;
