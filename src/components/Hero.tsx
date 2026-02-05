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
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/30 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-mono text-muted-foreground">
              Funded by Swedish National Space Agency
            </span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-100">
            <span className="text-primary">Leo</span>
            <span className="text-foreground">DOS</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 animate-fade-in-up animation-delay-200 font-light tracking-wide">
            A Distributed Operating System for
          </p>
          <p className="text-2xl md:text-3xl font-orbitron text-primary mb-12 animate-fade-in-up animation-delay-300">
            LEO Mega-Constellations
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-in-up animation-delay-500 leading-relaxed">
            Pioneering on-board satellite processing to revolutionize space-based computing. 
            Moving computation to the edge of space.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-700">
            <a
              href="https://arxiv.org/abs/2601.17589"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-orbitron text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <span>Read Our Paper</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#mission"
              className="px-8 py-3 border border-border rounded-lg font-orbitron text-sm flex items-center gap-2 hover:bg-muted/30 transition-colors text-muted-foreground hover:text-foreground"
            >
              <span>Explore Mission</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-700">
        <span className="text-xs text-muted-foreground/60 font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
