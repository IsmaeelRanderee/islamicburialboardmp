
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Users } from "lucide-react";

const Contact = () => {
  const contactOfficials = [
    {
      department: "Department of Health",
      contacts: [
        { name: "", department: "Department of Health", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Department of Health", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Department of Health", designation: "", contactNumber: "", signature: "" }
      ]
    },
    {
      department: "Department of Home Affairs",
      contacts: [
        { name: "", department: "Department of Home Affairs", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Department of Home Affairs", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Department of Home Affairs", designation: "", contactNumber: "", signature: "" }
      ]
    },
    {
      department: "Pathology Services",
      contacts: [
        { name: "", department: "Pathology Services", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Pathology Services", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "Pathology Services", designation: "", contactNumber: "", signature: "" }
      ]
    },
    {
      department: "SAPS",
      contacts: [
        { name: "", department: "SAPS", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "SAPS", designation: "", contactNumber: "", signature: "" },
        { name: "", department: "SAPS", designation: "", contactNumber: "", signature: "" }
      ]
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
            <h1 className="text-5xl font-bold text-charcoal mb-6">Contact Us</h1>
            <p className="text-xl text-charcoal leading-relaxed">
              Reach out to our dedicated team for emergency burial assistance, 
              guidance on Islamic burial practices, or general inquiries about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Organization Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-8">Islamic Burial Board Mpumalanga</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-soft-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                    <p className="text-charcoal/80">
                      15 Joosub Street<br />
                      Cassim Park<br />
                      Ermelo, Mpumalanga<br />
                      2350
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-soft-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Registration</h3>
                    <p className="text-charcoal/80">NPC 2023-77600/08</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leadership Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glassmorphic-gold p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-6">Team Contact Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Ameer</h4>
                  <p className="text-charcoal/80 mb-1">Mohammed Bhyat</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="tel:+27820952970"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      +27 82 095 2970
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="mailto:mbhyat7@gmail.com"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      mbhyat7@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Deputy Ameer</h4>
                  <p className="text-charcoal/80 mb-1">Ahmed Nazir Carrim</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="tel:+27815630242"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      +27 81 563 0242
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="mailto:ancarrim@gmail.com"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      ancarrim@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Secretary</h4>
                  <p className="text-charcoal/80 mb-1">Mohammed Phiri</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="tel:+27636802679"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      +27 63 680 2679
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="mailto:cannonmphiri@gmail.com"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      cannonmphiri@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Deputy Secretary</h4>
                  <p className="text-charcoal/80 mb-1">Yaseen Mohammed</p>
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="tel:+27827862906"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      +27 82 786 2906
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-soft-gold" />
                    <a 
                      href="mailto:yaseenmohamed@icloud.com"
                      className="text-soft-gold/90 hover:text-charcoal transition-colors text-sm"
                    >
                      yaseenmohamed@icloud.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Department Contacts */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Government Department Liaison</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              We maintain contact with key government departments to facilitate smooth burial processes. 
              These contacts are being established and updated regularly.
            </p>
          </motion.div>

          <div className="space-y-12">
            {contactOfficials.map((dept, deptIndex) => (
              <motion.div
                key={deptIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: deptIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="bg-charcoal text-white p-4">
                  <h3 className="text-xl font-semibold">{dept.department}</h3>
                </div>
                
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-charcoal">Name</th>
                          <th className="text-left py-3 px-4 font-semibold text-charcoal">Department</th>
                          <th className="text-left py-3 px-4 font-semibold text-charcoal">Designation</th>
                          <th className="text-left py-3 px-4 font-semibold text-charcoal">Contact Number</th>
                          <th className="text-left py-3 px-4 font-semibold text-charcoal">Signature</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dept.contacts.map((contact, contactIndex) => (
                          <tr key={contactIndex} className="border-b border-gray-100">
                            <td className="py-3 px-4 text-charcoal/70">
                              {contact.name || "To be confirmed"}
                            </td>
                            <td className="py-3 px-4 text-charcoal/70">{contact.department}</td>
                            <td className="py-3 px-4 text-charcoal/70">
                              {contact.designation || "To be confirmed"}
                            </td>
                            <td className="py-3 px-4 text-charcoal/70">
                              {contact.contactNumber || "To be confirmed"}
                            </td>
                            <td className="py-3 px-4 text-charcoal/70">
                              {contact.signature || "Pending"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-amber-800">
                <strong>Note:</strong> We are actively working to establish formal contact protocols 
                with all relevant government departments. Contact details will be updated as they become available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphic-dark p-8 rounded-lg text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Emergency Burial Assistance</h2>
            <p className="text-xl text-white/90 mb-8">
              Understanding the urgent nature of Islamic burial requirements, we provide 24/7 emergency assistance 
              to ensure families receive the support they need during difficult times.
            </p>
            <div className="bg-soft-gold/20 p-6 rounded-lg">
              <p className="text-lg font-semibold text-soft-gold mb-2">
                For immediate burial assistance or urgent inquiries:
              </p>
              <a 
                href="tel:+27820952970"
                className="text-white/90 hover:text-soft-gold transition-colors underline text-lg font-medium"
              >
                +27 82 095 2970
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
