import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Laptop, 
  Trophy,
  GraduationCap,
  Clock,
  Briefcase,
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";
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

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs."
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous training, certification support, and conference attendance."
  },
  {
    icon: Laptop,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance focus."
  },
  {
    icon: Trophy,
    title: "Recognition",
    description: "Performance bonuses, peer recognition, and career advancement paths."
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team outings, hackathons, and company-wide celebrations."
  },
  {
    icon: Clock,
    title: "Time Off",
    description: "Generous PTO, parental leave, and sabbatical opportunities."
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Security Analyst",
    department: "Security Operations",
    location: "Remote / Hybrid",
    type: "Full-time",
    level: "Senior"
  },
  {
    id: 2,
    title: "Penetration Tester",
    department: "Red Team",
    location: "On-site",
    type: "Full-time",
    level: "Mid-Senior"
  },
  {
    id: 3,
    title: "SOC Engineer",
    department: "Security Operations",
    location: "Remote",
    type: "Full-time",
    level: "Mid"
  },
  {
    id: 4,
    title: "Security Consultant",
    department: "Consulting",
    location: "Hybrid",
    type: "Full-time",
    level: "Senior"
  },
  {
    id: 5,
    title: "Cybersecurity Trainer",
    department: "Training",
    location: "Remote",
    type: "Contract",
    level: "Senior"
  },
];

const Career = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build Your <span className="text-gradient">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Join a team of passionate cybersecurity professionals working to protect 
              organizations worldwide from evolving digital threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient">Culture</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                At All Systems GO, we believe in fostering an environment where innovation thrives, 
                collaboration is celebrated, and every team member can make a meaningful impact.
              </p>
              <p className="text-muted-foreground mb-8">
                We're a diverse team of security experts, ethical hackers, engineers, and 
                consultants united by a shared mission: to make the digital world safer for everyone. 
                Our culture emphasizes continuous learning, open communication, and work-life balance.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Innovation", "Collaboration", "Growth", "Impact"].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: "50+", label: "Team Members" },
                { stat: "12", label: "Countries" },
                { stat: "95%", label: "Retention Rate" },
                { stat: "4.8", label: "Glassdoor Rating" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-card shadow-card text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{item.stat}</div>
                  <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits & <span className="text-gradient">Perks</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We take care of our team so they can focus on what they do best—protecting our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore current opportunities to join our growing team of security professionals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {position.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0 group-hover:border-primary group-hover:text-primary">
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-12 lg:p-20 rounded-3xl gradient-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals. Send us your resume and 
                we'll reach out when a suitable position opens up.
              </p>
              <Button asChild size="xl" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
