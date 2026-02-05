import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, Satellite } from 'lucide-react';
import StarField from '@/components/StarField';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <StarField />
      
      <div className="text-center px-6 relative z-10">
        {/* 404 Number */}
        <div className="relative inline-block mb-8">
          <span className="font-orbitron text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary/30 to-transparent leading-none">
            404
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Satellite className="w-16 h-16 text-primary animate-float" />
          </div>
        </div>

        <h1 className="font-orbitron text-2xl md:text-4xl font-bold text-foreground mb-4">
          Lost in Orbit
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          This page has drifted beyond our constellation's reach. 
          Let's navigate you back to mission control.
        </p>

        <Link
          to="/"
          className="btn-cosmic-solid rounded-lg font-orbitron inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default NotFound;
