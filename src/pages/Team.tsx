import { ExternalLink, Linkedin, Globe, GraduationCap, ArrowLeft, Github } from 'lucide-react';
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
    bio: 'Paris is the research leader of the Distributed Computing group at RISE SICS. He holds a PhD in Distributed Computer Systems from KTH and has been a core open source committer for Apache Flink, a leading system in data stream processing. His work spans scalable data processing, consistent state management, and space-based distributed systems.',
    expertise: ['Distributed Systems', 'Stream Processing', 'Apache Flink', 'Space Computing'],
    links: {
      website: 'https://datasystems.nu',
      linkedin: 'https://www.linkedin.com/in/paris-carbone-20752726/',
      scholar: 'https://scholar.google.com/citations?user=qSJPU-UAAAAJ',
      rise: 'https://www.ri.se/en/person/paris-carbone',
    },
  },
  {
    name: 'Thomas Sandholm',
    role: 'Technical Advisor',
    title: 'AI & Distributed Systems Researcher',
    organization: 'KTH / RISE',
    image: thomasImage,
    bio: 'Thomas received his PhD from KTH in computational markets and statistical methods. His research focuses on the intersection of machine learning, distributed systems, and resource allocation. He brings deep expertise in market-based approaches to distributed computing and optimization.',
    expertise: ['Machine Learning', 'Computational Markets', 'Distributed Systems', 'Resource Allocation'],
    links: {
      linkedin: 'https://www.linkedin.com/in/thomassandholm/',
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
      linkedin: 'https://www.linkedin.com/in/bernardo-huberman-39b40823/',
      scholar: 'https://scholar.google.com/citations?user=b_GVwg0AAAAJ',
    },
  },
  {
    name: 'Klas Segeljakt',
    role: 'Researcher',
    title: 'Distributed Systems Researcher',
    organization: 'RISE Research Institutes of Sweden',
    image: null, // Placeholder - we'll need to add this image
    bio: 'Klas is a researcher focusing on distributed stream processing and data-intensive systems. He has contributed to projects including Arc and Arcon, novel systems for batch and stream programming. His work explores efficient runtime architectures for continuous data processing at scale.',
    expertise: ['Stream Processing', 'Systems Programming', 'Rust', 'Data Analytics'],
    links: {
      linkedin: 'https://www.linkedin.com/in/klas-segeljakt/',
      scholar: 'https://scholar.google.com/citations?user=k4bVwsIAAAAJ',
      github: 'https://github.com/segeljakt',
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
              <span className="text-primary">Space Computing</span>
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
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur group"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="relative lg:w-80 shrink-0">
                    <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden bg-muted/30">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-6xl font-orbitron text-muted-foreground/30">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
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
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
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
