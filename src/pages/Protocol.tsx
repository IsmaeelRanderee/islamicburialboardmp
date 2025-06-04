
import { motion } from "framer-motion";
import { Heart, Droplets, Users, Compass, Clock, Scale, BookOpen, Shield } from "lucide-react";

const Protocol = () => {
  const burialRites = [
    {
      icon: <Clock className="h-12 w-12 text-soft-gold" />,
      title: "Immediate Burial",
      description: "Muslims are typically buried as soon as possible, ideally within 24 hours of death. Delays are discouraged unless legally required or necessary to confirm death."
    },
    {
      icon: <Droplets className="h-12 w-12 text-soft-gold" />,
      title: "Ghusl (Ritual Washing)",
      description: "Body is washed an odd number of times (minimum once) by same-gender Muslims, unless a spouse or close relative. Emphasizes dignity, cleanliness, and care."
    },
    {
      icon: <Users className="h-12 w-12 text-soft-gold" />,
      title: "Kafan (Shrouding)",
      description: "Body is wrapped in simple white cloth: three pieces for men, five for women. Luxury items or ornate coffins are discouraged."
    },
    {
      icon: <Heart className="h-12 w-12 text-soft-gold" />,
      title: "Salat al-Janazah (Funeral Prayer)",
      description: "A communal prayer performed standing only. Includes supplications for the deceased's forgiveness and mercy."
    },
    {
      icon: <Compass className="h-12 w-12 text-soft-gold" />,
      title: "Burial",
      description: "The body is laid in the grave facing the Qibla (toward Mecca). Graves are simple, and mourning practices are modest and respectful."
    }
  ];

  const autopsyConsiderations = [
    {
      title: "Sanctity of the body",
      position: "Must be respected; mutilation forbidden"
    },
    {
      title: "Routine autopsies",
      position: "Not permitted without strong justification"
    },
    {
      title: "Legal autopsies",
      position: "Permissible when required by law"
    },
    {
      title: "Delay in burial",
      position: "Allowed only if necessary; should be minimized"
    },
    {
      title: "Reburial after autopsy",
      position: "Janazah rites should resume normally post-autopsy"
    }
  ];

  const permissibleCircumstances = [
    {
      heading: "Legal or Judicial Requirements",
      description: "When mandated by law or for a criminal investigation"
    },
    {
      heading: "Public Interest",
      description: "To identify causes of disease, prevent outbreaks, or protect public health"
    },
    {
      heading: "Medical Research",
      description: "With consent, minimal mutilation, and no alternative"
    },
    {
      heading: "Family Consent",
      description: "Only with approval from scholars and the deceased's family"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Understanding Muslim Burial Rites and Autopsy Guidelines in Islam
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed">
              A comprehensive guide to Islamic funeral practices and the religious considerations surrounding post-mortem examinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Muslim Burial Rites Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Muslim Burial Rites (Janazah) – Key Practices</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {burialRites.slice(0, 3).map((rite, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex justify-center mb-6">{rite.icon}</div>
      <h3 className="text-xl font-semibold text-charcoal mb-4">{rite.title}</h3>
      <p className="text-charcoal/70 leading-relaxed">{rite.description}</p>
    </motion.div>
  ))}
</div>

{/* Centered bottom row cards */}
<div className="flex flex-col lg:flex-row justify-center gap-8 mt-8 max-w-4xl mx-auto">
  {burialRites.slice(3).map((rite, index) => (
    <motion.div
      key={index + 3}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: (index + 3) * 0.2 }}
      viewport={{ once: true }}
      className="w-full lg:w-[300px] text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex justify-center mb-6">{rite.icon}</div>
      <h3 className="text-xl font-semibold text-charcoal mb-4">{rite.title}</h3>
      <p className="text-charcoal/70 leading-relaxed">{rite.description}</p>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Islamic Views on Autopsies */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Islamic Views on Autopsies</h2>
            <p className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed mb-8">
              Islamic teachings emphasize <strong>preserving the sanctity of the body</strong> after death. Autopsies are generally discouraged, unless necessary.
            </p>
          </motion.div>

          {/* Hadith Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto bg-charcoal text-white p-12 rounded-lg mb-16"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "Breaking the bone of a dead person is like breaking it when he is alive."
            </blockquote>
            <p className="text-lg text-soft-gold">— Prophet Muhammad ﷺ (Sunan Abu Dawood)</p>
          </motion.div>

          {/* Autopsy Guidelines */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500"
            >
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-semibold text-charcoal">❌ Routine or Non-Essential Autopsies</h3>
              </div>
              <div className="space-y-3 text-charcoal/80">
                <p className="flex items-start">
                  <span className="text-soft-gold mr-2">•</span>
                  Strongly discouraged
                </p>
                <p className="flex items-start">
                  <span className="text-soft-gold mr-2">•</span>
                  Considered a violation of the deceased's dignity
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500"
            >
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-semibold text-charcoal">✅ Permissible in Certain Circumstances</h3>
              </div>
              <div className="space-y-6">
                {permissibleCircumstances.map((circumstance, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-charcoal mb-2 flex items-start">
                      <span className="text-soft-gold mr-2 mt-1">•</span>
                      {circumstance.heading}:
                    </h4>
                    <p className="text-charcoal/70 ml-4 leading-relaxed">
                      {circumstance.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-6">Summary of Key Considerations</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Aspect</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Islamic Position</th>
                  </tr>
                </thead>
                <tbody>
                  {autopsyConsiderations.map((consideration, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? "bg-beige/30" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-medium text-charcoal">{consideration.title}</td>
                      <td className="px-6 py-4 text-charcoal/80">{consideration.position}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Islamic Legal Opinions */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Islamic Legal Opinions (Fatwas)</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-charcoal/30 p-8 rounded-lg border border-soft-gold/30">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-soft-gold mr-4" />
                <p className="text-xl text-white/90">
                  Leading Islamic authorities such as <strong className="text-soft-gold">Al-Azhar</strong> and the <strong className="text-soft-gold">Islamic Fiqh Council</strong> acknowledge that autopsies may be permitted under <strong className="text-soft-gold">darurah (necessity)</strong> if:
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Required by legal institutions",
                  "Necessary for public health or education", 
                  "No viable alternative exists",
                  "Respect and consent are maintained"
                ].map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-4"></div>
                    <p className="text-white/90 text-lg">{condition}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Protocol;
