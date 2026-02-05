import { useState, useEffect } from 'react';
import { Menu, X, Satellite } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    { name: 'Publications', path: '/publications' },
    { name: 'Visualizer', path: '/visualizer' },
    { name: 'Open Source', path: '/opensource' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Satellite className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-energy-amber" />
              <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-orbitron text-2xl font-bold gradient-text-orbital">
              LeoDOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link font-medium text-sm tracking-wide ${
                  isActive(link.path) ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://arxiv.org/abs/2601.17589"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cosmic rounded-lg text-sm font-orbitron"
            >
              Latest Paper
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-fade-in-up">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://arxiv.org/abs/2601.17589"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cosmic-solid rounded-lg text-sm font-orbitron text-center mt-2"
              >
                Latest Paper
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
