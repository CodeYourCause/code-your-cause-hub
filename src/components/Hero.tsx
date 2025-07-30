import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Digital Solutions
                </span>{" "}
                for{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Nonprofits
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We bridge the gap between nonprofits needing affordable tech solutions 
                and students seeking real-world experience. Together, we strengthen communities 
                through technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#get-help" className="flex items-center">
                  Need Digital Help? <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href="#volunteer" className="flex items-center">
                  Volunteer With Us <Heart className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Code className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Custom Solutions</div>
                  <div className="text-sm text-muted-foreground">Tailored for your needs</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-accent" />
                <div>
                  <div className="font-semibold">Experience Building</div>
                  <div className="text-sm text-muted-foreground">For students & newcomers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Diverse team collaborating on nonprofit digital solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;