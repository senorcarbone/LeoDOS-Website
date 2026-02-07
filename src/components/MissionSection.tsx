import { Satellite, Globe, Cpu, Zap, Radio, Database } from "lucide-react";

import riseLogo from "@/assets/logos/rise-logo.svg";
import snsaLogo from "@/assets/logos/snsa-logo.svg";

const features = [
  {
    icon: Satellite,
    title: "LEO Constellation",
    description: "Thousands of inter-linked satellites providing global coverage and low-latency connectivity.",
    stat: "~10,000+",
    statLabel: "Starlink Satellites",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "On-board satellite processing reduces data transmission to ground stations dramatically.",
    stat: "10x",
    statLabel: "Data Reduction",
  },
  {
    icon: Radio,
    title: "Spectrum Optimization",
    description: "Intelligent bandwidth management across S, C, Ku, and Ka spectrum bands.",
    stat: "3GPP",
    statLabel: "NTN Standard",
  },
  {
    icon: Globe,
    title: "Earth Observation",
    description: "Real-time wildfire detection, disaster monitoring, and environmental sensing.",
    stat: "24/7",
    statLabel: "Global Coverage",
  },
  {
    icon: Database,
    title: "Distributed State",
    description: "Consistent stateful processing across the orbital mesh network.",
    stat: "↓ µs",
    statLabel: "Local First Execution",
  },
  {
    icon: Zap,
    title: "Lightspeed Data",
    description: "Compute at the speed of light—processing data where it's captured.",
    stat: "∞",
    statLabel: "Scalability",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs tracking-[0.2em] text-muted-foreground/70 uppercase">Mission Overview</span>
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 text-foreground leading-tight">
            The sky is no longer the limit—
            <br className="hidden md:block" />
            <span className="text-primary">it's the platform.</span>
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Thousands of satellites now orbit Earth, forming an interconnected mesh capable of delivering broadband
              anywhere and observing every corner of our planet in unprecedented detail. Yet today, these orbital fleets
              face a critical bottleneck: <span className="text-foreground font-medium">bandwidth</span>. Satellites can
              see wildfires, track storms, and monitor ecosystems—but transmitting all that data to Earth overwhelms the
              downlink spectrum.
            </p>

            <p className="text-lg text-foreground font-medium border-l-2 border-primary pl-6 my-8">
              LeoDOS reimagines satellites as compute nodes, not just relay stations.
            </p>

            <p>
              We're building a distributed operating system for LEO mega-constellations—enabling on-board processing
              that transforms raw imagery into actionable intelligence in orbit, before it ever reaches the ground.{" "}
              <span className="text-foreground">Less data transmitted. Faster insights. Smarter constellations.</span>
            </p>

            <p>
              As of February 2026, nearly 10,000 Starlink satellites circle the planet. By treating these constellations
              as a single, distributed computer, LeoDOS opens new possibilities for wildfire detection, climate
              monitoring, maritime tracking, and beyond.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg border border-border/30 bg-card/30 hover:border-border/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{feature.description}</p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-4 border-t border-border/30">
                <span className="font-orbitron text-xl font-semibold text-primary">{feature.stat}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{feature.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-20 pt-12 border-t border-border/30">
          <p className="text-xs tracking-wider text-muted-foreground/60 uppercase mb-8">Funded & Supported By</p>
          <div className="flex flex-wrap items-center gap-12 md:gap-16">
            <a
              href="https://www.rymdstyrelsen.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img src={snsaLogo} alt="Swedish National Space Agency" className="h-12 object-contain invert" />
            </a>
            <a
              href="https://ri.se/en"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={riseLogo}
                alt="RISE Research Institutes of Sweden"
                className="h-10 object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
