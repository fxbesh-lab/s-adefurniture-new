import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-9xl font-playfair font-bold text-primary">404</h1>
        <h2 className="text-3xl font-playfair font-semibold">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="btn-hero text-lg px-8 py-6 mt-4">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
