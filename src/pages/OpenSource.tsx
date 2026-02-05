import { Github, ExternalLink, Code2, GitBranch, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const projects = [
  {
    name: 'LeoDOS Core',
    description: 'The distributed operating system kernel for LEO satellite constellations. Handles task scheduling, state management, and inter-satellite communication.',
    language: 'Rust',
    stars: 'Coming Soon',
    status: 'In Development',
    topics: ['distributed-systems', 'space-computing', 'real-time'],
  },
  {
    name: 'Orbital Stream',
    description: 'Stream processing framework optimized for constrained satellite environments. Built on Apache Flink principles.',
    language: 'Scala',
    stars: 'Coming Soon',
    status: 'In Development',
    topics: ['stream-processing', 'edge-computing', 'flink'],
  },
  {
    name: 'LEO Simulator',
    description: 'Simulation environment for testing distributed algorithms in orbital network topologies with realistic constraints.',
    language: 'Python',
    stars: 'Coming Soon',
    status: 'Planning',
    topics: ['simulation', 'testing', 'research'],
  },
];

const OpenSource = () => {
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
              OPEN SOURCE
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Building in the </span>
              <span className="gradient-text-orbital">Open</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to open science means sharing our tools and research with the global community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <article key={project.name} className="card-cosmic rounded-2xl p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 rounded text-xs font-mono bg-muted/50 text-muted-foreground">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">
                  {project.name}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded text-xs bg-primary/10 text-primary/80"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-energy-amber" />
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stars}
                    </span>
                  </div>
                  <button
                    disabled
                    className="flex items-center gap-1 text-xs text-muted-foreground/50 cursor-not-allowed"
                  >
                    <Github className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block card-cosmic rounded-2xl p-8 max-w-xl">
              <GitBranch className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-semibold mb-4">Want to Contribute?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Our repositories will be public soon. Stay tuned for opportunities to contribute 
                to the future of space-based distributed computing.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic rounded-lg font-orbitron text-sm inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Follow on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenSource;
