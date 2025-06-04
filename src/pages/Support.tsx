
import { motion } from "framer-motion";
import { Heart, DollarSign, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-soft-gold/10 to-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-charcoal mb-6">Support Our Mission</h1>
            <p className="text-xl text-charcoal leading-relaxed">
              Your generous contribution helps us provide emergency burial assistance, 
              legal support, and maintain dignified burial spaces for Muslim communities across Mpumalanga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">How You Can Help</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Every contribution, no matter the size, makes a meaningful difference in preserving Islamic burial traditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Heart className="h-12 w-12 text-soft-gold" />,
                title: "Emergency Burial Fund",
                description: "Help families who cannot afford burial expenses during their time of need"
              },
              {
                icon: <Users className="h-12 w-12 text-soft-gold" />,
                title: "Legal Assistance",
                description: "Support our efforts to navigate complex regulatory requirements"
              },
              {
                icon: <DollarSign className="h-12 w-12 text-soft-gold" />,
                title: "Cemetery Maintenance",
                description: "Maintain and develop Muslim burial sections in cemeteries"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-charcoal mb-6">Banking Details</h2>
              <p className="text-xl text-charcoal">
                Make your donation directly to our dedicated account
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glassmorphic-gold p-8 rounded-lg shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-6">Account Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-charcoal/70 text-sm">Account Name</p>
                      <p className="text-lg font-semibold text-charcoal">Islamic Burial Board Mpumalanga NPC</p>
                    </div>
                    <div>
                      <p className="text-charcoal/70 text-sm">Bank</p>
                      <p className="text-lg font-semibold text-charcoal">First National Bank (FNB)</p>
                    </div>
                    <div>
                      <p className="text-charcoal/70 text-sm">Account Type</p>
                      <p className="text-lg font-semibold text-charcoal">Gold Business Account</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-6">Banking Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-charcoal/70 text-sm">Account Number</p>
                      <p className="text-lg font-semibold font-mono text-charcoal">63117762096</p>
                    </div>
                    <div>
                      <p className="text-charcoal/70 text-sm">Branch Code</p>
                      <p className="text-lg font-semibold font-mono text-charcoal">210835</p>
                    </div>
                    <div>
                      <p className="text-charcoal/70 text-sm">SWIFT Code</p>
                      <p className="text-lg font-semibold font-mono text-charcoal">FIRNZAJJ</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Your Impact</h2>
            <p className="text-xl text-charcoal leading-relaxed mb-8">
              When you support the Islamic Burial Board Mpumalanga, you're not just making a donation — 
              you're investing in dignity, respect, and the preservation of sacred traditions for future generations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-charcoal mb-2">24/7</div>
                <p className="text-charcoal/70">Emergency burial assistance available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-charcoal mb-2">100+</div>
                <p className="text-charcoal/70">Families served annually</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-charcoal mb-2">7</div>
                <p className="text-charcoal/70">Years of dedicated service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
