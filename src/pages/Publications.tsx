import { ExternalLink, FileText, Calendar, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const publications = [
  {
    title: 'Lightspeed Data Compute for the Space Era',
    authors: ['Paris Carbone', 'Bernardo Huberman', 'Thomas Sandholm'],
    venue: 'arXiv Preprint',
    year: '2026',
    abstract: 'We present a vision for distributed computing in Low Earth Orbit mega-constellations, addressing the fundamental challenges of moving computation to space-based systems while maintaining consistency and fault tolerance.',
    link: 'https://arxiv.org/abs/2601.17589',
    type: 'Preprint',
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-nebula/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-nebula-glow border border-nebula/30 mb-4">
              RESEARCH
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text-orbital">Publications</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our peer-reviewed research and technical papers advancing space-based computing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <article key={index} className="card-cosmic rounded-2xl p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary/20 text-primary border border-primary/30">
                    {pub.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {pub.year}
                  </span>
                </div>

                <h2 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {pub.title}
                </h2>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>{pub.authors.join(', ')}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pub.abstract}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cosmic rounded-lg text-sm inline-flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Paper</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
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

export default Publications;
