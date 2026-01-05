import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Eye, 
  Target,
  Sparkles,
  Award,
  Users,
  Shield,
  Zap,
  Building2,
  MapPin,
  ThumbsUp,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

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

const stats = [
  { icon: Building2, value: "2021", label: "Year Founded" },
  { icon: MapPin, value: "10+", label: "Locations Managed" },
  { icon: ThumbsUp, value: "97.4%", label: "Service Satisfaction" },
  { icon: BadgeCheck, value: "100%", label: "Bumiputera-status company" },
];

const values = [
  { name: "Quality", icon: Award },
  { name: "Teamwork", icon: Users },
  { name: "Integrity", icon: Shield },
  { name: "Transparency", icon: Sparkles },
  { name: "Agile", icon: Zap },
];

const teamMembers = [
  { name: "Michael Ramirez", role: "CEO Risetech" },
  { name: "Emily Roberts", role: "IT Project Manager" },
  { name: "John Anderson", role: "Network Administrator" },
  { name: "Muneeb Balbale", role: "Managing Director" },
  { name: "Benjamin Foster", role: "Network Security" },
  { name: "Robert Hughes", role: "Cloud Solutions" },
  { name: "Olivia Adams", role: "Help Desk Support" },
  { name: "David Lee", role: "Systems Engineer" },
];

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-hero cyber-grid overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Cyber Security <span className="text-gradient">Partner</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a leading provider of cybersecurity solutions, dedicated to empowering 
              individuals and organizations through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to All System Go! We specialize in cutting-edge cybersecurity solutions to keep 
              your organization ahead of evolving threats. Our services include Vulnerability Assessment 
              & Penetration Testing (VAPT), Security Posture Assessment (SPA), and an upcoming Security 
              Operations Center (SOC) in partnership with SOCRadar—ensuring you stay secure in today's 
              interconnected world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-card shadow-card"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground text-lg">
                The strive to be a digitalisation partner of choice in providing practices 
                built state-of-the art solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-card shadow-card"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground text-lg">
                To deliver value with integrity and professionalism in order for an always 
                innovative solution for our stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                variants={fadeInUp}
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-card shadow-card border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">{value.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Can We Work Together Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How Can We <span className="text-gradient">Work Together</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With my extensive experience in technology and training, along with a strong background 
                in risk management, I am confident that we can achieve exceptional results together. 
                Our combined expertise and unwavering commitment to excellence will ensure the success 
                of this project, delivering significant value to your organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-card shadow-elevated border border-border"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mb-6 shadow-glow">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  PROF. TS. DR. SHEIKH JEFRIZAL BIN JAMALUDDIN
                </h3>
                <p className="text-primary font-medium mb-4">
                  Managing Director All Systems Go Sdn Bhd
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the folks leading our company toward success. Lorem ipsum dolor sit amet 
              consectetur adipiscing elit posuere risus, massa nisl ultricies malesuada maecenas 
              consequat ornare sagittis ad montes dictum scelerisque.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
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
            className="text-center p-12 lg:p-20 rounded-3xl gradient-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Get in touch with our team today and discover how we can help secure 
                your organization's digital future.
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

export default AboutUs;
