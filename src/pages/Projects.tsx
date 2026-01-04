import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Server, Shield, Code, Briefcase, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

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

const projects = [
  {
    id: "checkin",
    title: "Checkin",
    description: "A comprehensive visitor management and access control system designed for enterprise environments. Features real-time tracking, badge printing, and integration with existing security infrastructure.",
    technologies: ["Access Control", "Real-time Monitoring", "Biometric Integration"],
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "e-invoicing",
    title: "E-Invoicing",
    description: "Secure electronic invoicing platform with end-to-end encryption, digital signatures, and compliance with international e-invoicing standards. Streamlines financial operations while maintaining data integrity.",
    technologies: ["Encryption", "Digital Signatures", "Compliance"],
    icon: Briefcase,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "second-defence",
    title: "Second Defence",
    description: "Multi-layered security solution providing backup protection for critical systems. Implements redundant security measures to ensure business continuity during primary system failures.",
    technologies: ["Backup Security", "Redundancy", "Disaster Recovery"],
    icon: Server,
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "college-management",
    title: "College Management System",
    description: "Integrated management platform for educational institutions with role-based access control, secure student data handling, and compliance with educational data protection regulations.",
    technologies: ["RBAC", "Data Protection", "Student Privacy"],
    icon: Code,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "e-legal-firm",
    title: "E-Legal Firm",
    description: "Digital transformation solution for law firms featuring secure document management, client portal access, case tracking, and attorney-client privilege protection mechanisms.",
    technologies: ["Document Security", "Client Portal", "Privilege Protection"],
    icon: Scale,
    color: "from-pink-500 to-rose-500"
  },
];

const Projects = () => {
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
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our expertise through successful implementations across 
              various industries and security domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-elevated transition-all"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-end relative overflow-hidden`}>
                  <div className="absolute inset-0 cyber-grid opacity-20" />
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-background/20 backdrop-blur flex items-center justify-center">
                    <project.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our cybersecurity expertise can help bring your project to life 
              while ensuring the highest levels of security and compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a Project
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

export default Projects;
