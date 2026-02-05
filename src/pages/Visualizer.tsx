import { Satellite, ArrowLeft, Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Visualizer = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-energy-amber/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-energy-amber border border-energy-amber/30 mb-4">
              INTERACTIVE
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Constellation </span>
              <span className="gradient-text-energy">Visualizer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore LEO satellite constellations in real-time 3D visualization.
            </p>
          </div>

          {/* Placeholder for visualizer */}
          <div className="max-w-5xl mx-auto">
            <div className="card-cosmic rounded-3xl overflow-hidden aspect-video flex items-center justify-center relative">
              {/* Animated orbital visualization placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-orbit-slow" />
                  <div className="absolute inset-8 border border-orbital-cyan/40 rounded-full animate-orbit-reverse" />
                  <div className="absolute inset-16 border border-energy-amber/30 rounded-full animate-orbit" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-glow-cyan" />
                  </div>
                  {/* Satellites */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Satellite className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <div className="absolute bottom-8 right-0 translate-x-1/2">
                    <Satellite className="w-5 h-5 text-energy-amber animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              {/* Coming soon overlay */}
              <div className="relative z-10 text-center p-8 glass rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-semibold mb-2">Interactive Demo Coming Soon</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  We're building an immersive 3D visualization of LEO satellite networks 
                  with real-time data processing simulation.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Real-Time Tracking', desc: 'Live satellite positions from TLE data' },
                { title: 'Network Topology', desc: 'Inter-satellite link visualization' },
                { title: 'Data Flow', desc: 'Processing pipeline simulation' },
              ].map((item) => (
                <div key={item.title} className="card-cosmic rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-orbitron text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
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

export default Visualizer;
