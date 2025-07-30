import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const VolunteerForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest! We'll review your application and get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="volunteer" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Volunteer Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to gain real-world experience while making a difference? 
              Tell us about yourself and how you'd like to contribute to meaningful projects.
            </p>
          </div>

          <Card className="shadow-accent">
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="status">Current Status *</Label>
                  <Select name="status" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="recent-grad">Recent Graduate</SelectItem>
                      <SelectItem value="newcomer">Newcomer to Canada</SelectItem>
                      <SelectItem value="career-change">Career Changer</SelectItem>
                      <SelectItem value="early-career">Early Career Professional</SelectItem>
                      <SelectItem value="experienced">Experienced Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Primary Skills/Interests *</Label>
                  <Select name="skills" required>
                    <SelectTrigger>
                      <SelectValue placeholder="What would you like to contribute?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="graphic-design">Graphic Design</SelectItem>
                      <SelectItem value="project-management">Project Management</SelectItem>
                      <SelectItem value="qa-testing">QA & Testing</SelectItem>
                      <SelectItem value="content">Content Writing</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="other">Other (please specify below)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select name="experience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                      <SelectItem value="learning">Still Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="techSkills">Technical Skills & Tools</Label>
                  <Textarea 
                    id="techSkills" 
                    name="techSkills" 
                    placeholder="List programming languages, frameworks, design tools, or other technical skills you have..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select name="availability" required>
                    <SelectTrigger>
                      <SelectValue placeholder="How much time can you commit?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="few-hours">A few hours per week</SelectItem>
                      <SelectItem value="part-time">10-15 hours per week</SelectItem>
                      <SelectItem value="significant">15+ hours per week</SelectItem>
                      <SelectItem value="flexible">Flexible/Project-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea 
                    id="motivation" 
                    name="motivation" 
                    placeholder="Tell us about your goals, what you hope to learn, and how you want to contribute to the community..."
                    rows={4}
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio/LinkedIn (Optional)</Label>
                  <Input 
                    id="portfolio" 
                    name="portfolio" 
                    placeholder="Share links to your portfolio, GitHub, LinkedIn, or other relevant profiles"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea 
                    id="additionalInfo" 
                    name="additionalInfo" 
                    placeholder="Anything else you'd like us to know? Special interests, previous volunteer experience, etc."
                    rows={3}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="commitment" name="commitment" required />
                    <Label htmlFor="commitment" className="text-sm">
                      I understand this is a volunteer position and commit to communicating 
                      openly about my availability and any changes. *
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="learning" name="learning" required />
                    <Label htmlFor="learning" className="text-sm">
                      I'm eager to learn, accept feedback, and contribute positively 
                      to the team and community. *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;