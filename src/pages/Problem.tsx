
import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Problem = () => {
  const challenges = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Time-Sensitive Delays",
      description: "Islamic tradition requires burial within 24 hours, but bureaucratic processes often cause significant delays."
    },
    {
      icon: <FileX className="h-8 w-8 text-red-500" />,
      title: "Autopsy Conflicts",
      description: "Mandatory autopsies for certain deaths directly conflict with Islamic principles of preserving the body's sanctity."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Regulatory Barriers",
      description: "Complex health department protocols create unnecessary obstacles during families' most vulnerable moments."
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Family Distress",
      description: "Delays and conflicts cause additional emotional trauma to already grieving Muslim families."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-islamic-green mb-6">The Critical Problem</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A fundamental clash exists between Islamic burial rights and South African health regulations, 
              creating unnecessary suffering for Muslim families during their most difficult times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-islamic-green mb-6">Key Challenges</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding the specific conflicts between religious obligations and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {challenge.icon}
                  <h3 className="text-xl font-semibold text-islamic-green ml-3">{challenge.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Issues */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-islamic-green mb-6">The Impact on Families</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-islamic-green mb-4">Department of Health Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Medical practitioners must complete Notice of Death (Form BI-1663)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Death certificates required before burial proceedings
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Unnatural deaths must be referred to Forensic Pathology Service (FPS)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Post-mortem examinations required for certain cases
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-islamic-green mb-4">Islamic Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Burial should occur as soon as possible, preferably within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Body washing (Ghusl) and shrouding (Kafan) must be performed
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Funeral prayer (Janazah) in congregation
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Body placed directly in earth, facing Mecca
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-islamic-green text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-3xl md:text-4xl font-serif italic mb-8">
              "We urgently need systemic respect for religious obligations — this is not just policy, it's dignity in death."
            </blockquote>
            <p className="text-xl text-emerald-200">— Islamic Burial Board Mpumalanga</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
