import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, 
  Lock, 
  Eye, 
  GraduationCap, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Server,
  AlertTriangle,
  FileSearch,
  Activity,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = [
  {
    id: "security-posture",
    icon: Target,
    title: "Security Posture Assessment",
    shortDesc: "Comprehensive evaluation of your organization's security framework.",
    description: "Our Security Posture Assessment provides a thorough evaluation of your organization's current security state. We analyze your policies, procedures, infrastructure, and human factors to identify gaps and provide actionable recommendations.",
    benefits: [
      "Identify security gaps before attackers do",
      "Benchmark against industry standards",
      "Prioritized remediation roadmap",
      "Executive-level reporting",
      "Compliance alignment check"
    ],
    features: [
      { icon: FileSearch, text: "Policy & Procedure Review" },
      { icon: Server, text: "Infrastructure Analysis" },
      { icon: Activity, text: "Risk Assessment" },
      { icon: Brain, text: "Security Maturity Scoring" },
    ]
  },
  {
    id: "vapt",
    icon: Lock,
    title: "Vulnerability Assessment & Penetration Testing",
    shortDesc: "Identify and address vulnerabilities before they become critical threats.",
    description: "Our VAPT services combine automated vulnerability scanning with manual penetration testing by certified ethical hackers. We simulate real-world attacks to identify weaknesses in your systems, applications, and networks.",
    benefits: [
      "Discover unknown vulnerabilities",
      "Real-world attack simulation",
      "Detailed technical reports",
      "Remediation guidance",
      "Compliance documentation"
    ],
    features: [
      { icon: AlertTriangle, text: "Network Penetration Testing" },
      { icon: Lock, text: "Web Application Testing" },
      { icon: Server, text: "API Security Testing" },
      { icon: Shield, text: "Social Engineering Tests" },
    ]
  },
  {
    id: "soc",
    icon: Eye,
    title: "Security Operations Center (SOC)",
    shortDesc: "24/7 security monitoring and incident response with SOCradar integration.",
    description: "Our SOC services provide round-the-clock monitoring, threat detection, and incident response. Powered by SOCradar integration, we deliver advanced threat intelligence and automated response capabilities to protect your organization continuously.",
    benefits: [
      "24/7/365 security monitoring",
      "Real-time threat detection",
      "Rapid incident response",
      "SOCradar threat intelligence",
      "Reduced mean time to detect"
    ],
    features: [
      { icon: Eye, text: "Continuous Monitoring" },
      { icon: Activity, text: "Threat Intelligence" },
      { icon: AlertTriangle, text: "Incident Response" },
      { icon: Brain, text: "SIEM Management" },
    ]
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Cybersecurity Training Programs",
    shortDesc: "Empower your team with cutting-edge cybersecurity knowledge.",
    description: "Our comprehensive training programs are designed to build security awareness and technical skills across your organization. From executive briefings to hands-on technical workshops, we offer customized training for all levels.",
    benefits: [
      "Reduce human error risks",
      "Build security-first culture",
      "Compliance training coverage",
      "Hands-on practical exercises",
      "Customized curriculum"
    ],
    features: [
      { icon: Brain, text: "Security Awareness Training" },
      { icon: Shield, text: "Phishing Simulations" },
      { icon: Lock, text: "Technical Workshops" },
      { icon: GraduationCap, text: "Certification Prep" },
    ]
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

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
              Our <span className="text-gradient">Services & Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions designed to protect your organization 
              from evolving threats and ensure business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? "" : "bg-secondary/30"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Button asChild size="lg">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Features Grid */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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
                Need a Custom Solution?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Contact our security experts to discuss your specific requirements and 
                get a tailored cybersecurity solution for your organization.
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

export default Services;
