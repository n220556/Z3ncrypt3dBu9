import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="space-y-4">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-muted-foreground leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary hover:shadow-glow">
            <a href="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </a>
          </Button>
          
          <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5">
            <a href="/projects" className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Browse Projects
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
