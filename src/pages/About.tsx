
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Target } from "lucide-react";

const About = () => {
  const purposes = [
    {
      title: "Preserve and Uphold Islamic Burial Rites",
      description: "Ensure all funerals and burials follow correct Shari'ah (Islamic legal) procedures with consistency in ghusl (washing), kafan (shrouding), janazah salah (funeral prayer), and burial."
    },
    {
      title: "Provide Central Coordinated Response",
      description: "Streamline communication during times of death when families are vulnerable and emotional, creating a single point of contact for all funeral-related arrangements."
    },
    {
      title: "Support Bereaved Families",
      description: "Offer practical and emotional support, help with paperwork, burial permits, death certificates, and provide education about Islamic funeral practices."
    },
    {
      title: "Negotiate and Liaise with External Bodies",
      description: "Represent the Muslim community in dealings with municipalities, funeral homes, cemeteries, hospitals, and morgues to secure designated Muslim burial sections."
    },
    {
      title: "Ensure Financial Accessibility",
      description: "Create systems for burial funds, sadaqah, or waqf (endowment) to help those in need and offer affordable or subsidized burial options."
    },
    {
      title: "Plan for the Future",
      description: "Develop long-term strategies for acquiring and maintaining Muslim cemetery land, community education on end-of-life issues, and emergency preparedness for mass deaths."
    },
    {
      title: "Promote Unity and Accountability",
      description: "Prevent disorganized or conflicting practices by having a trusted, diverse, and transparent board that encourages community trust and cohesion."
    }
  ];

  const leadership = [
    {
      title: "Ameer",
      name: "Mohammed Bhyat"
    },
    {
      title: "Deputy Ameer",
      name: "Ahmed Nazir Carrim"
    },
    {
      title: "Secretary",
      name: "Mohammed Phiri"
    },
    {
      title: "Deputy Secretary",
      name: "Yaseen Mohammed"
    }
  ];

  return (
    <div className="min-h-screen bg-light-cream">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige to-light-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-charcoal mb-6">About IBBMP</h1>
            <p className="text-xl text-charcoal leading-relaxed">
              Established in 2017 to serve the Muslim community of Mpumalanga with dignity, 
              respect, and adherence to Islamic burial traditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Foundation</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-soft-gold mr-3" />
                  <div>
                    <p className="font-semibold text-charcoal">Founded</p>
                    <p className="text-charcoal/70">2017</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-soft-gold mr-3" />
                  <div>
                    <p className="font-semibold text-charcoal">Location</p>
                    <p className="text-charcoal/70">15 Joosub Street, Cassim Park, Ermelo, 2350</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-soft-gold mr-3" />
                  <div>
                    <p className="font-semibold text-charcoal">Registration</p>
                    <p className="text-charcoal/70">NPC 2023-77600/08</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-charcoal text-white p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To safeguard the sanctity of Islamic burial rites in Mpumalanga and beyond, while offering compassionate support to bereaved families through coordinated efforts with municipal authorities, health institutions, and service providers — all in accordance with the teachings of Islam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purposes */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Seven Core Purposes</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The Islamic Burial Board serves several important community, religious, and logistical purposes
            </p>
          </motion.div>

          <div className="space-y-6">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {index + 1}. {purpose.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">{purpose.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Leadership</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Dedicated individuals committed to serving the Muslim community with integrity and compassion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg glassmorphic-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{leader.title}</h3>
                <p className="font-medium text-charcoal mb-2">{leader.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
