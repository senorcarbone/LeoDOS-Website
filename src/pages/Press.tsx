import { Mic2, Calendar, ExternalLink, Presentation, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const conferences = [
  {
    name: 'IEEE SMC-IT/SCC \'25',
    description: 'Space Mission Challenges for Information Technology / Space Computing Conference 2025',
    date: '2025',
    url: 'https://2025.smcit-scc.space/',
  },
  {
    name: 'IEEE CCNC \'26 Workshop',
    description: '1st International Workshop on Cooperative Multi-Orbit Platform for Accessible Satellite Communication Systems',
    date: '2026',
    url: 'https://ccnc2026.ieee-ccnc.org/node/11011',
  },
  {
    name: '2026 NASA cFS Symposium',
    description: 'Core Flight System Symposium - Presenting LeoDOS project and distributed computing for space systems',
    date: '2026',
    url: 'https://etd.gsfc.nasa.gov/capabilities/core-flight-system/events/',
    slidesUrl: 'https://www.slideshare.net/slideshow/leodos-project-nasa-cfs-symposium-talk-2026/285664275',
  },
];

const Press = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-stellar-blue/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-stellar-blue border border-stellar-blue/30 mb-4">
              CONFERENCES & TALKS
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Press & </span>
              <span className="gradient-text-orbital">Events</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing our research and vision with the global space technology community.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {conferences.map((conference) => (
              <article
                key={conference.name}
                className="card-cosmic rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mic2 className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-orbitron text-lg font-semibold text-foreground">
                      {conference.name}
                    </h3>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-muted/50 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {conference.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {conference.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={conference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Event</span>
                    </a>
                    {conference.slidesUrl && (
                      <a
                        href={conference.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Presentation className="w-4 h-4" />
                        <span>View Slides</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
