import { Satellite, ExternalLink, Github, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Satellite className="w-8 h-8 text-primary" />
              <span className="font-orbitron text-2xl font-bold gradient-text-orbital">
                LeoDOS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              A Distributed Operating System for LEO mega-constellations. 
              Funded by the Swedish National Space Agency and RISE.
            </p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">DNR 2025-00306</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Team', path: '/team' },
                { name: 'Publications', path: '/publications' },
                { name: 'Open Source', path: '/opensource' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://arxiv.org/abs/2601.17589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <FileText className="w-3 h-3" />
                  <span>Latest Paper</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.rymdstyrelsen.se/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Globe className="w-3 h-3" />
                  <span>SNSA</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ri.se/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Globe className="w-3 h-3" />
                  <span>RISE</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 LeoDOS Project. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Built with passion for the future of space
            </span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
