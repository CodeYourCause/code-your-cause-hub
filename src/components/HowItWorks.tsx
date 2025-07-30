import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  MessageSquare, 
  Target, 
  Users, 
  Lightbulb, 
  Code, 
  CheckCircle 
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Send,
      title: "Community Request Intake",
      description: "Nonprofits submit a request form describing their digital needs. We follow up to schedule an initial discovery call.",
    },
    {
      icon: MessageSquare,
      title: "Initial Discovery Meeting",
      description: "Our team meets with the organization to understand goals, constraints, and capacity for maintaining the solution.",
    },
    {
      icon: Target,
      title: "Project Categorization & Scoping",
      description: "We categorize and scope the project, define success metrics, and estimate timelines for delivery.",
    },
    {
      icon: Users,
      title: "Team Formation",
      description: "We assign a dedicated team based on project complexity, typically 2-4 people with mentorship support.",
    },
    {
      icon: Lightbulb,
      title: "Planning Phase",
      description: "The team runs a kickoff meeting and develops a detailed project plan with user stories and tech stack decisions.",
    },
    {
      icon: Code,
      title: "Build Phase",
      description: "Team works in short, agile sprints with regular updates and internal reviews to ensure quality.",
    },
    {
      icon: CheckCircle,
      title: "Review & Feedback",
      description: "MVP is demoed to the client for feedback, and adjustments are made based on priorities.",
    }
  ];

  const projectTypes = [
    { name: "Simple Website", color: "bg-blue-100 text-blue-800", example: "Mosque or event site" },
    { name: "Web App/Platform", color: "bg-green-100 text-green-800", example: "Donation system, member dashboard" },
    { name: "Internal Tool", color: "bg-purple-100 text-purple-800", example: "Google Sheet automation, CRM setup" },
    { name: "Branding & Design", color: "bg-orange-100 text-orange-800", example: "Logo, brand guidelines" },
    { name: "Maintenance/Improvement", color: "bg-gray-100 text-gray-800", example: "Existing tool updates" }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our streamlined process ensures high-quality deliverables while providing 
            valuable experience for our volunteer team members.
          </p>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Project Types We Handle</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {projectTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardContent className="p-4">
                  <Badge className={`${type.color} mb-2`}>
                    {type.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{type.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              
              <Card className="flex-1 group hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
