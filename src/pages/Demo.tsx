import { ArrowLeft, ExternalLink, Play, Grid3X3, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Demo = () => {
  const demoUrl = 'https://www.leodos.org/demo';

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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Interactive step-by-step visualization of the Task Processor Mapping Algorithm.
            </p>

            {/* CTA Button */}
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Launch Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Feature cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
