import { ArrowDown, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-earth-constellation.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Earth from space at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Subtle institution badge */}
          <div className="mb-12">
            <span className="text-xs tracking-[0.3em] text-muted-foreground/70 uppercase font-light">
              Swedish National Space Agency
            </span>
          </div>

          {/* Title - Clean, typographic */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-primary">Leo</span>
            <span className="text-foreground">DOS</span>
          </h1>

          {/* Subtitle - Editorial style */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light leading-relaxed">
            A Distributed Operating System
          </p>
          <p className="text-xl md:text-2xl text-foreground/60 mb-16 font-light">
            for LEO Mega-Constellations
          </p>

          {/* Description - Refined */}
          <p className="text-base md:text-lg text-foreground/90 max-w-xl mx-auto mb-16 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Pioneering on-board satellite processing to revolutionize space-based computing. 
            Moving computation to the edge of space.
          </p>

          {/* CTAs - Minimal, elegant */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://arxiv.org/abs/2601.17589"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-foreground text-background rounded font-medium text-sm flex items-center gap-2 hover:bg-foreground/90 transition-all duration-300"
            >
              <span>Read the Paper</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#mission"
              className="px-8 py-3 border border-border/50 rounded font-medium text-sm flex items-center gap-2 hover:border-foreground/30 transition-all duration-300 text-muted-foreground hover:text-foreground"
            >
              <span>Learn More</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
