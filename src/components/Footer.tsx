import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/72955b1b-7946-44a7-9495-3e1ba6159790.png" 
                alt="IBBMP Logo" 
                className="w-10 h-10 bg-white/90 rounded-full p-1"
              />
              <span className="text-xl font-bold">IBBMP</span>
            </div>
            <p className="text-white/80 mb-4">
              Islamic Burial Board Mpumalanga - Preserving dignity in death according to Islamic traditions.
            </p>
            <p className="text-white/60 text-sm">
              15 Joosub Street, Cassim Park<br />
              Ermelo, 2350<br />
              NPC 2023-77600/08
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-white/80 hover:text-soft-gold transition-colors">
                About Us
              </Link>
              <Link to="/protocol" className="block text-white/80 hover:text-soft-gold transition-colors">
                Islamic Protocol
              </Link>
              <Link to="/support" className="block text-white/80 hover:text-soft-gold transition-colors">
                Support Us
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-soft-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Leadership Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leadership Contacts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/90">
              {[
                {
                  title: "Ameer",
                  name: "Mohammed Bhyat",
                  phone: "+27 82 095 2970",
                  email: "mbhyat7@gmail.com"
                },
                {
                  title: "Deputy Ameer",
                  name: "Ahmed Nazir Carrim",
                  phone: "+27 81 563 0242",
                  email: "ancarrim@gmail.com"
                },
                {
                  title: "Secretary",
                  name: "Mohammed Phiri",
                  phone: "+27 63 680 2679",
                  email: "cannonmphiri@gmail.com"
                },
                {
                  title: "Deputy Secretary",
                  name: "Yaseen Mohammed",
                  phone: "+27 82 786 2906",
                  email: "yaseenmohammed@icloud.com"
                }
              ].map((person, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-bold text-soft-gold">{person.title}</p>
                  <p>{person.name}</p>
                  <p>
                    <a 
                      href={`tel:${person.phone.replace(/\s+/g, '')}`} 
                      className="text-soft-gold/90 hover:text-white transition-colors"
                    >
                      {person.phone}
                    </a>
                  </p>
                  <p>
                    <a 
                      href={`mailto:${person.email}`} 
                      className="text-soft-gold/90 hover:text-white transition-colors"
                    >
                      {person.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Islamic Burial Board Mpumalanga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
