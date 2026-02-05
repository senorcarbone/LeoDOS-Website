import { ArrowDown, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-earth-constellation.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Earth with satellite constellation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-orbit-slow" />
          {/* Middle Ring */}
          <div className="absolute inset-[80px] border border-orbital-cyan/30 rounded-full animate-orbit-reverse" />
          {/* Inner Ring */}
          <div className="absolute inset-[160px] border border-energy-amber/20 rounded-full animate-orbit" />
          
          {/* Satellite Dots */}
          <div className="absolute top-1/2 left-0 w-3 h-3 -translate-y-1/2 -translate-x-1/2">
            <div className="w-full h-full bg-primary rounded-full animate-pulse shadow-glow-cyan" />
          </div>
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full bg-energy-amber rounded-full animate-pulse shadow-glow-amber" />
          </div>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-nebula/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground">
              Funded by Swedish National Space Agency
            </span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="gradient-text-orbital text-glow-cyan">Leo</span>
            <span className="text-foreground">DOS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200 font-light">
            A Distributed Operating System for
          </p>
          <p className="text-2xl md:text-3xl font-orbitron gradient-text-energy mb-8 animate-fade-in-up animation-delay-300">
            LEO Mega-Constellations
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-500 leading-relaxed">
            Pioneering on-board satellite processing to revolutionize space-based computing. 
            Moving computation to the edge of space.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-700">
            <a
              href="https://arxiv.org/abs/2601.17589"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cosmic-solid rounded-lg font-orbitron flex items-center gap-2 group"
            >
              <span>Read Our Paper</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#mission"
              className="btn-cosmic rounded-lg font-orbitron flex items-center gap-2"
            >
              <span>Explore Mission</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-700">
        <span className="text-xs text-muted-foreground font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
