import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We build custom digital solutions for nonprofits and community organizations that need affordable, high-quality technology."
    },
    {
      icon: Users,
      title: "Experience-Focused",
      description: "We provide students, newcomers, and early-career professionals with real-world project experience and mentorship."
    },
    {
      icon: Zap,
      title: "Impact-Oriented",
      description: "By strengthening the digital presence of community services, we help make a direct, lasting impact in people's lives."
    },
    {
      icon: Globe,
      title: "Community-Centered",
      description: "We believe in empowering local communities with technology that helps them serve better, grow stronger, and reach more people."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a community-driven organization that builds custom digital solutions — 
            websites, apps, and online systems — for nonprofits, community groups, and small organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why We Exist */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">The Problem</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Nonprofits have limited budgets for digital solutions</li>
                <li>• Students face the "experience gap" entering the workforce</li>
                <li>• Community organizations lack modern online presence</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-accent text-accent-foreground">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• High-quality solutions at affordable rates</li>
                <li>• Real-world experience for volunteers</li>
                <li>• Meaningful mentorship and skill building</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">The Impact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stronger community organizations</li>
                <li>• Career-ready graduates and newcomers</li>
                <li>• Better services for those who need them most</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;