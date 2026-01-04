import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useQuery } from "@tanstack/react-query";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface TrainingAd {
  _id: string;
  title: string;
  description: string;
  image: string;
  status: string;
  created_at: string;
}

interface TrainingAdsResponse {
  cloud_name: string;
  message: string;
  training_advertisements: TrainingAd[];
}

const fetchTrainingAds = async (): Promise<TrainingAdsResponse> => {
  const response = await fetch("https://projekanda.top/get-training-advertisment");
  if (!response.ok) {
    throw new Error("Failed to fetch training advertisements");
  }
  return response.json();
};

const TrainingAdvertisement = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["training-advertisements"],
    queryFn: fetchTrainingAds,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-hero cyber-grid overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Training <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Enhance your cybersecurity skills with our comprehensive training programs 
              designed for professionals at all levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Advertisements Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Failed to load training programs. Please try again later.</p>
            </div>
          )}

          {data && data.training_advertisements.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {data.training_advertisements.map((ad) => (
                <motion.div
                  key={ad._id}
                  variants={fadeInUp}
                  className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-elevated transition-all"
                >
                  {/* Training Image */}
                  <div className="h-56 relative overflow-hidden bg-muted">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        ad.status === 'active' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {ad.status}
                      </span>
                    </div>
                  </div>

                  {/* Training Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {ad.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {ad.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Posted: {new Date(ad.created_at).toLocaleDateString()}</span>
                    </div>

                    <Button className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {data && data.training_advertisements.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No training programs available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Advance Your Skills?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us to learn more about our training programs and how they can 
              help you or your team stay ahead in cybersecurity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingAdvertisement;
