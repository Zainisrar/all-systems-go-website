import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Folder, Calendar, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useQuery } from "@tanstack/react-query";

interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  status: string;
  created_at: string;
}

interface ProjectsResponse {
  cloud_name: string;
  message: string;
  projects: Project[];
}

const fetchProjects = async (): Promise<ProjectsResponse> => {
  const response = await fetch("https://projekanda.top/get-all-projects");
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const project = data?.projects.find((p) => p._id === id);

  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>

          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          )}

          {isError && (
            <div className="text-center py-20">
              <p className="text-destructive text-lg">Failed to load project details.</p>
            </div>
          )}

          {!isLoading && !isError && !project && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Project not found.</p>
            </div>
          )}

          {project && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 bg-muted">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto max-h-[500px] object-contain"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center">
                  <Folder className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {project.name}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Created: {new Date(project.created_at).toLocaleDateString()}</span>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>

                {/* All data fields except image and _id */}
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Project Details</h2>
                  <dl className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(project).map(([key, value]) => {
                      if (key === 'image' || key === '_id') return null;
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
                    <Link to="/contact">Contact Us About This Project</Link>
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

export default ProjectDetail;
