import { Satellite, Globe, Cpu, Zap, Radio, Database } from 'lucide-react';

const features = [
  {
    icon: Satellite,
    title: 'LEO Constellation',
    description: 'Thousands of inter-linked satellites providing global coverage and low-latency connectivity.',
    stat: '7,578+',
    statLabel: 'Starlink Satellites',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'On-board satellite processing reduces data transmission to ground stations dramatically.',
    stat: '10x',
    statLabel: 'Data Reduction',
  },
  {
    icon: Radio,
    title: 'Spectrum Optimization',
    description: 'Intelligent bandwidth management across S, C, Ku, and Ka spectrum bands.',
    stat: '3GPP',
    statLabel: 'NTN Standard',
  },
  {
    icon: Globe,
    title: 'Earth Observation',
    description: 'Real-time wildfire detection, disaster monitoring, and environmental sensing.',
    stat: '24/7',
    statLabel: 'Global Coverage',
  },
  {
    icon: Database,
    title: 'Distributed State',
    description: 'Consistent stateful processing across the orbital mesh network.',
    stat: 'µs',
    statLabel: 'Latency',
  },
  {
    icon: Zap,
    title: 'Lightspeed Data',
    description: 'Compute at the speed of light—processing data where it\'s captured.',
    stat: '∞',
    statLabel: 'Scalability',
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="section-cosmic">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-4">
            MISSION OVERVIEW
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The Future of </span>
            <span className="gradient-text-orbital">Space Computing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Mobile broadband communication and earth observation use cases have pushed the boundaries 
            of space-based computing. We're developing the operating system for tomorrow's orbital infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-cosmic rounded-2xl p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-orbitron text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-border/50">
                <span className="font-orbitron text-2xl font-bold gradient-text-energy">
                  {feature.stat}
                </span>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {feature.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6 font-mono">FUNDED & SUPPORTED BY</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a
              href="https://www.rymdstyrelsen.se/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="font-orbitron text-lg text-foreground">Swedish National Space Agency</span>
            </a>
            <div className="w-px h-6 bg-border hidden md:block" />
            <a
              href="https://ri.se/en"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="font-orbitron text-lg text-foreground">RISE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
