import { ExternalLink, Calendar, FileText } from 'lucide-react';

const news = [
  {
    date: '2 February, 2026',
    title: 'Lightspeed Data Compute for the Space Era',
    description: 'New paper published on Arxiv exploring the future of space-based distributed computing systems.',
    link: 'https://arxiv.org/abs/2601.17589',
    type: 'Paper',
  },
];

const NewsSection = () => {
  return (
    <section className="section-cosmic border-t border-border/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-mono text-energy-amber border border-energy-amber/30 mb-4">
            LATEST UPDATES
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Mission </span>
            <span className="gradient-text-energy">News</span>
          </h2>
        </div>

        {/* News Cards */}
        <div className="max-w-3xl mx-auto">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-cosmic rounded-2xl p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date Badge */}
                <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">{item.date}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block card-cosmic rounded-2xl p-8 max-w-xl">
            <h3 className="font-orbitron text-xl font-semibold mb-4">Stay in Orbit</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Follow our journey as we build the future of distributed space computing.
            </p>
            <a
              href="https://www.rymdstyrelsen.se/innovation/beviljade-bidrag/innovationsutlysning-2025-inom-programmet-for-rymdteknik-med-dubbla-anvandningsomraden/leodos/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cosmic rounded-lg font-orbitron text-sm inline-flex items-center gap-2"
            >
              <span>View Grant Details</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
