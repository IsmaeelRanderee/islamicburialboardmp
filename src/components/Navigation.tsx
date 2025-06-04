
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/protocol", label: "Burial Protocol" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glassmorphic-dark border-b border-soft-gold/20 fixed top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/72955b1b-7946-44a7-9495-3e1ba6159790.png" 
              alt="IBBMP Logo" 
              className="w-12 h-12 bg-white/90 rounded-full p-1 shadow-md"
            />
            <span className="text-2xl font-bold text-white font-serif">IBBMP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative hover:text-soft-gold ${
                  isActive(item.path) ? "text-soft-gold" : "text-white"
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-soft-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(item.path) ? "after:w-full" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Support Button */}
          <div className="hidden md:block">
            <Link to="/support">
              <Button className="support-button font-semibold px-6 py-2 shadow-lg transition-all duration-300">
                Support Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-soft-gold/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-soft-gold/20 glassmorphic-dark"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-soft-gold hover:bg-soft-gold/10 rounded-md mx-2 ${
                      isActive(item.path) ? "text-soft-gold bg-soft-gold/20" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2">
                  <Link to="/support" onClick={() => setIsOpen(false)}>
                    <Button className="w-full support-button font-semibold">
                      Support Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
