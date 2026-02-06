import { ExternalLink, FileText, Calendar, Users, ArrowLeft, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const publications = [
  {
    title: "Lightspeed Data Compute for the Space Era",
    authors: ["Thomas Sandholm", "Bernardo A. Huberman", "Klas Segeljakt", "Paris Carbone"],
    venue: "arXiv Preprint",
    year: "2026",
    abstract:
      "We present a vision for distributed computing in Low Earth Orbit mega-constellations, addressing the fundamental challenges of moving computation to space-based systems while maintaining consistency and fault tolerance.",
    link: "https://arxiv.org/abs/2601.17589",
    type: "Preprint",
  },
  {
    title: "SkyMemory: A LEO Edge Cache for Transformer Inference Optimization and Scale Out",
    authors: ["Thomas Sandholm", "Lin Cheng", "Bernardo A. Huberman"],
    venue: "IEEE CCNC/COMPASS",
    year: "2025",
    abstract:
      "SkyMemory introduces a novel edge caching architecture for LEO satellites that optimizes transformer-based inference workloads, enabling efficient scale-out of AI models in orbital computing environments.",
    link: "https://arxiv.org/abs/2505.14427",
    slidesLink:
      "https://www.slideshare.net/slideshow/skymemory-a-leo-edge-cache-for-transformer-inference-optimization-and-scale-out/285119984",
    type: "Workshop",
  },
  {
    title: "LeoDist: A Distributed Ledger On-board LEO Satellites",
    authors: ["Thomas Sandholm", "Sayandev Mukherjee", "John Feland", "Bernardo A. Huberman"],
    venue: "IEEE SMC-IT/SCC 2025",
    year: "2025",
    abstract:
      "LeoDist presents a distributed ledger system designed specifically for on-board LEO satellite environments, addressing the unique challenges of consensus and data integrity in space-based networks.",
    link: "https://2025.smcit-scc.space/details/smc-it-scc-2025-papers/16/SCC-61-LeoDist-A-Distributed-Ledger-On-board-LEO-Satellites",
    slidesLink: "https://easychair.org/smart-slide/slide/kfLL",
    type: "Conference",
  },
  {
    title: "A Cloud in the Sky: Geo-Aware On-board Data Services for LEO Satellites",
    authors: ["Thomas Sandholm", "Sayandev Mukherjee", "Bernardo A. Huberman"],
    venue: "arXiv Preprint",
    year: "2024",
    abstract:
      "This paper explores geo-aware data services for LEO satellite constellations, presenting architectures that leverage orbital mechanics to provide location-aware computing and storage capabilities.",
    link: "https://arxiv.org/abs/2410.07586",
    type: "Preprint",
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

                <h2 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground mb-3">{pub.title}</h2>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>{pub.authors.join(", ")}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pub.abstract}</p>

                <div className="flex items-center gap-4 flex-wrap">
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
                  {pub.slidesLink && (
                    <a
                      href={pub.slidesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    >
                      <Presentation className="w-4 h-4" />
                      <span>View Slides</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
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
