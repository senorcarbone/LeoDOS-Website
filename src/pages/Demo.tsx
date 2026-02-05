import { ArrowLeft, Maximize2, ExternalLink, Play, Grid3X3, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Demo = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const demoUrl = 'https://leodos-project.github.io/leopymr/';

  const toggleFullscreen = () => {
    const iframe = document.getElementById('demo-iframe');
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-4">
              INTERACTIVE
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Algorithm </span>
              <span className="text-primary">Demo</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interactive step-by-step visualization of the Task Processor Mapping Algorithm.
            </p>
          </div>

          {/* Demo iframe */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">LeoPyMR Demo</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
                    title="Toggle fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              {/* Iframe */}
              <iframe
                id="demo-iframe"
                src={demoUrl}
                className="w-full aspect-video min-h-[600px] bg-white"
                title="LeoPyMR Algorithm Demo"
                allow="fullscreen"
              />
            </div>

            {/* Instructions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Grid3X3, 
                  title: 'Configure', 
                  desc: 'Set the grid size (N x N) and generate random or manual input' 
                },
                { 
                  icon: Play, 
                  title: 'Control', 
                  desc: 'Use play/pause and step controls to walk through the algorithm' 
                },
                { 
                  icon: Eye, 
                  title: 'Observe', 
                  desc: 'Watch starred, primed, and covered line states evolve' 
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-border/50 bg-muted/10">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-orbitron text-sm font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
