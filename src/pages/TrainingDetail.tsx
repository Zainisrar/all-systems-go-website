import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useQuery } from "@tanstack/react-query";

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
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const TrainingDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["training-advertisements"],
    queryFn: fetchTrainingAds,
  });

  const ad = data?.training_advertisements.find((a) => a._id === id);

  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/training-advertisement">
              <ArrowLeft className="w-4 h-4" />
              Back to Training Programs
            </Link>
          </Button>

          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Failed to load training details.</p>
            </div>
          )}

          {!isLoading && !isError && !ad && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Training program not found.</p>
            </div>
          )}

          {ad && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 bg-muted">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-auto max-h-[500px] object-contain"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {ad.title}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    ad.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {ad.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Posted: {new Date(ad.created_at).toLocaleDateString()}</span>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {ad.description}
                  </p>
                </div>

                {/* All raw data display */}
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Training Details</h2>
                  <dl className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(ad).map(([key, value]) => {
                      if (key === 'image') return null;
                      return (
                        <div key={key} className="space-y-1">
                          <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {key.replace(/_/g, ' ')}
                          </dt>
                          <dd className="text-sm text-foreground font-medium">
                            {key.includes('date') || key.includes('created') || key.includes('updated')
                              ? new Date(String(value)).toLocaleDateString()
                              : String(value)}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Contact Us About This Training</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TrainingDetail;
