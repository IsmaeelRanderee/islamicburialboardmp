import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, AlertTriangle, Clock, FileX } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Hero Section with Geometric Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-preload"
          style={{
            backgroundImage: "url('/lovable-uploads/99fcf5f6-b283-4554-8659-1220d00b3353.png')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/72955b1b-7946-44a7-9495-3e1ba6159790.png" 
                alt="Islamic Burial Board Mpumalanga Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 rounded-full p-2 shadow-lg"
              />
            </div>
            <div className="hero-text-overlay p-8 rounded-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4 drop-shadow-lg">
                Islamic Burial Board
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 drop-shadow-lg">
                Mpumalanga
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white italic mb-2 drop-shadow-lg">
              "Verily, every soul shall taste death"
            </p>
            <p className="text-base sm:text-lg text-white/70 drop-shadow-lg">— Al-Qur'an</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Established in 2017, the Islamic Burial Board Mpumalanga serves as a vital bridge between Islamic burial traditions and South African regulatory requirements, ensuring dignity and respect for Muslim families during their most difficult times.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about">
              <Button size="lg" className="hero-button-primary px-8 py-4 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" className="hero-button-secondary px-8 py-4 text-lg">
                Support Us <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Sacred Mission</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              We strive to preserve Islamic burial rites while navigating complex South African health regulations, 
              providing essential support to bereaved families when they need it most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-icon-highlight" />,
                title: "Community Support",
                description: "Providing guidance and assistance to Muslim families during bereavement"
              },
              {
                icon: <Heart className="h-12 w-12 text-icon-highlight" />,
                title: "Religious Dignity",
                description: "Ensuring Islamic burial practices are respected and preserved"
              },
              {
                icon: <ArrowRight className="h-12 w-12 text-icon-highlight" />,
                title: "Regulatory Navigation",
                description: "Bridging the gap between religious requirements and legal obligations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-beige/30"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Critical Problem Section */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
              Muslim burial rites are deeply rooted in Islamic teachings and emphasize the sanctity of the human body, both in life and death. This has specific implications for procedures like autopsies, which can be seen as invasive and contrary to Islamic principles unless certain conditions are met.  
            </p>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto bg-charcoal text-white p-12 rounded-lg"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "We urgently need systemic respect for religious obligations — this is not just policy, it's dignity in death."
            </blockquote>
            <p className="text-lg text-soft-gold">— Islamic Burial Board Mpumalanga</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Cause</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Help us ensure that Muslims across South Africa receive the dignified burial they deserve, 
              in accordance with Islamic traditions and South African law.
            </p>
            <Link to="/support">
              <Button size="lg" className="support-button px-8 py-4 text-lg font-semibold">
                Support Our Mission
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
