import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary-foreground">
              <UtensilsCrossed className="h-6 w-6 text-foreground" />
              <span className="font-bold text-lg text-foreground">SnapEats</span>
            </Link>
            <p className="text-sm">
              Your favorite food, delivered fast to your door.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-foreground">About Us</Link></li>
              <li><Link to="#" className="text-sm hover:text-foreground">Contact</Link></li>
              <li><Link to="#" className="text-sm hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-foreground" />
              </Link>
              <Link to="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-foreground" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} SnapEats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;