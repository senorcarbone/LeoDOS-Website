import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-orbitron text-xl font-semibold text-foreground">
                <span className="text-primary">Leo</span>DOS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              A Distributed Operating System for LEO mega-constellations. 
              Funded by the Swedish National Space Agency.
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">DNR 2025-00306</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-wider text-muted-foreground/70 uppercase mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Team', path: '/team' },
                { name: 'Publications', path: '/publications' },
                { name: 'Demo', path: '/demo' },
                { name: 'Open Source', path: '/opensource' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs tracking-wider text-muted-foreground/70 uppercase mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://arxiv.org/abs/2601.17589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>Latest Paper</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.rymdstyrelsen.se/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  SNSA
                </a>
              </li>
              <li>
                <a
                  href="https://ri.se/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  RISE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © 2025 LeoDOS Project
          </p>
          <p className="text-xs text-muted-foreground/70">
            KTH & RISE Research Institutes of Sweden
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
