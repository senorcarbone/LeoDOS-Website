import { ExternalLink, Linkedin, Globe, GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

import bernardoImage from '@/assets/team/bernardo-huberman.jpg';
import thomasImage from '@/assets/team/thomas-sandholm.jpg';
import parisImage from '@/assets/team/paris-carbone.jpg';

const team = [
  {
    name: 'Paris Carbone',
    role: 'Principal Investigator',
    title: 'Senior Researcher & Head of Distributed Computing',
    organization: 'RISE Research Institutes of Sweden',
    image: parisImage,
    bio: 'Paris leads the Distributed Computing group at RISE SICS and is an Associate Professor at KTH. He is a core Apache Flink committer and pioneer in distributed stream processing systems. His research focuses on scalable data processing, consistent state management, and now space-based computing.',
    expertise: ['Distributed Systems', 'Stream Processing', 'Apache Flink', 'Stateful Computing'],
    links: {
      website: 'https://datasystems.nu',
      linkedin: 'https://www.linkedin.com/in/pariscarbone/',
      scholar: 'https://scholar.google.com/citations?user=qSJPU-UAAAAJ',
      rise: 'https://www.ri.se/en/person/paris-carbone',
    },
  },
  {
    name: 'Bernardo Huberman',
    role: 'Distinguished Advisor',
    title: 'Distinguished Visiting Scientist',
    organization: 'RISE Research Institutes of Sweden',
    image: bernardoImage,
    bio: 'A technology pioneer and futurist, Bernardo has played a key role as a thought leader in emergent technologies. His early foresights have shaped our digital reality. He brings decades of experience in complex systems, social computation, and distributed architectures to the LeoDOS project.',
    expertise: ['Complex Systems', 'Social Computation', 'Emergent Technologies', 'Systems Theory'],
    links: {
      linkedin: 'https://www.linkedin.com/in/bernardo-huberman-39b40823',
      scholar: 'https://scholar.google.com/citations?user=b_GVwg0AAAAJ',
    },
  },
  {
    name: 'Thomas Sandholm',
    role: 'Technical Advisor',
    title: 'AI & Optimization Expert',
    organization: 'Strategic Machine / CMU',
    image: thomasImage,
    bio: 'A world-renowned expert in AI, game theory, and optimization. His groundbreaking work on strategic reasoning and market design brings unique perspectives to distributed resource allocation in space systems. His expertise helps shape the optimization strategies for orbital computing.',
    expertise: ['Artificial Intelligence', 'Game Theory', 'Optimization', 'Market Design'],
    links: {
      website: 'http://www.cs.cmu.edu/~sandholm/',
      linkedin: 'https://www.linkedin.com/in/tuomas-sandholm-15b1045',
    },
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-4">
              THE TEAM
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Pioneers of </span>
              <span className="gradient-text-orbital">Space Computing</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A world-class team of researchers and technologists pushing the boundaries 
              of distributed computing beyond Earth's atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-cosmic pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="card-cosmic rounded-3xl overflow-hidden group"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="relative lg:w-80 shrink-0">
                    <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/50 lg:block hidden" />
                    </div>
                    
                    {/* Role Badge */}
                    <div className="absolute bottom-4 left-4 right-4 lg:right-auto">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 lg:p-10">
                    <div className="mb-6">
                      <h2 className="font-orbitron text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        {member.name}
                      </h2>
                      <p className="text-primary font-medium mb-1">{member.title}</p>
                      <p className="text-sm text-muted-foreground">{member.organization}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      {member.links.website && (
                        <a
                          href={member.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 text-sm"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Website</span>
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 text-sm"
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {member.links.scholar && (
                        <a
                          href={member.links.scholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 text-sm"
                        >
                          <GraduationCap className="w-4 h-4" />
                          <span>Scholar</span>
                        </a>
                      )}
                      {member.links.rise && (
                        <a
                          href={member.links.rise}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>RISE Profile</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
