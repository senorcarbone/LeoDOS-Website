import { Github, Code2, GitBranch, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const projects = [
  {
    name: 'leopymr',
    description: 'SpaceCoMP implementation in Python. A framework for distributed computing across satellite constellations.',
    language: 'Python',
    url: 'https://github.com/LeoDOS-Project/leopymr',
    topics: ['python', 'distributed-systems', 'spacecomp'],
  },
  {
    name: 'leo-viz',
    description: 'Walker Delta/Star satellite constellation visualization built in Rust with egui.',
    language: 'Rust',
    url: 'https://github.com/LeoDOS-Project/leo-viz',
    topics: ['rust', 'visualization', 'egui'],
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <article key={project.name} className="card-cosmic rounded-2xl p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
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
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
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
                Join us in building the future of space-based distributed computing. 
                Check out our repositories and get involved.
              </p>
              <a
                href="https://github.com/LeoDOS-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic rounded-lg font-orbitron text-sm inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Visit LeoDOS on GitHub</span>
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
