import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center gradient-hero cyber-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 mx-auto rounded-3xl gradient-primary flex items-center justify-center mb-8 shadow-glow">
              <AlertTriangle className="w-12 h-12 text-primary-foreground" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Shield className="w-5 h-5" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
