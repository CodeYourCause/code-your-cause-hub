import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, HandHeart, Laptop } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a nonprofit seeking digital solutions or someone looking 
            to gain meaningful experience while helping your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Nonprofits */}
          <Card className="text-center group hover:shadow-glow transition-all duration-300 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HandHeart className="h-10 w-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">For Nonprofits & Organizations</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get custom digital solutions tailored to your mission. From websites to 
                web apps, we'll help you serve your community better with affordable, 
                high-quality technology.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Custom websites & web applications
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Donation systems & member dashboards
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Automation tools & CRM setup
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Ongoing support & maintenance
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#get-help" className="flex items-center justify-center">
                  Request Help <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* For Volunteers */}
          <Card className="text-center group hover:shadow-accent transition-all duration-300 border-2 border-accent/20">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="h-10 w-10 text-accent-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">For Students & Professionals</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gain real-world experience while making a difference. Work on meaningful 
                projects, build your portfolio, and receive mentorship from experienced 
                developers and designers.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Real-world project experience
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mentorship from senior developers
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Portfolio-worthy projects
                </div>
                <div className="flex items-center justify-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Canadian work experience
                </div>
              </div>

              <Button variant="accent" size="lg" className="w-full" asChild>
                <a href="#volunteer" className="flex items-center justify-center">
                  Join Our Team <Heart className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;