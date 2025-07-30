import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold">Code Your Cause</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Building custom digital solutions for nonprofits while empowering 
              students and newcomers with real-world experience.
            </p>
          </div>

          {/* For Organizations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Organizations</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#get-help" className="hover:text-background transition-colors">
                  Request Help
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>Project Types</li>
              <li>Success Stories</li>
            </ul>
          </div>

          {/* For Volunteers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Volunteers</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#volunteer" className="hover:text-background transition-colors">
                  Join Our Team
                </a>
              </li>
              <li>Mentorship Program</li>
              <li>Skill Building</li>
              <li>Community Impact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@codeyourcause.org" className="hover:text-background transition-colors">
                  hello@codeyourcause.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Canada</span>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Code Your Cause. Making technology accessible for everyone.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;