import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  GraduationCap, 
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Award,
  Sparkles,
  Zap,
  ChevronRight
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

const services = [
  {
    icon: Target,
    title: "Security Posture Assessment",
    description: "Comprehensive evaluation of your organization's security framework and vulnerabilities.",
  },
  {
    icon: Lock,
    title: "VAPT Services",
    description: "Identify and address vulnerabilities before they become critical threats.",
  },
  {
    icon: Eye,
    title: "SOC Services",
    description: "24/7 security monitoring and incident response with SOCradar integration.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Empower your team with cutting-edge cybersecurity knowledge and skills.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "Delivering excellence in every security solution we provide.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative approach to solving complex security challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our operations.",
  },
  {
    icon: Sparkles,
    title: "Transparency",
    description: "Clear communication and honest reporting at every step.",
  },
];

const stats = [
  { value: "500+", label: "Clients Protected" },
  { value: "99.9%", label: "Threat Detection" },
  { value: "24/7", label: "Monitoring" },
  { value: "15+", label: "Years Experience" },
];

const Index = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero cyber-grid overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Advanced Cybersecurity Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Protecting Digital Assets with{" "}
                <span className="text-gradient">Advanced Security</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                All Systems GO provides comprehensive cybersecurity services to safeguard 
                your business against evolving threats. From vulnerability assessments to 
                24/7 security monitoring, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="xl" variant="hero">
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="hero-outline">
                  <Link to="/projects">
                    View Projects
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl gradient-primary shadow-glow animate-float flex items-center justify-center">
                  <Shield className="w-40 h-40 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-card shadow-elevated flex items-center justify-center animate-pulse-glow">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-card shadow-elevated flex items-center justify-center">
                  <Server className="w-12 h-12 text-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">All Systems GO</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              With years of experience and a team of certified professionals, we deliver 
              tailored security solutions that protect your business from modern threats.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: CheckCircle2, title: "Certified Experts", text: "Our team holds industry-leading certifications including CISSP, CEH, and OSCP." },
              { icon: Server, title: "24/7 Monitoring", text: "Round-the-clock security operations center keeping watch over your assets." },
              { icon: Target, title: "Proactive Approach", text: "We identify and address vulnerabilities before attackers can exploit them." },
              { icon: Shield, title: "Compliance Ready", text: "Ensure adherence to GDPR, ISO 27001, PCI DSS, and other standards." },
              { icon: Users, title: "Dedicated Support", text: "Personal account managers and rapid incident response teams." },
              { icon: Zap, title: "Fast Response", text: "Average incident response time under 15 minutes." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive cybersecurity solutions designed to protect every aspect of your digital infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link 
                      to="/services"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl gradient-primary p-12 lg:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Get in touch with our security experts today and discover how we can 
                protect your digital assets from evolving cyber threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="xl" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
});

Index.displayName = "Index";

export default Index;
