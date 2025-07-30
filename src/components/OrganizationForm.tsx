import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const OrganizationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll review your request and get back to you within 2-3 business days.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="get-help" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request Digital Help
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your organization and the digital solution you need. 
              We'll review your request and schedule a discovery call to learn more.
            </p>
          </div>

          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Organization Request Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="orgName">Organization Name *</Label>
                    <Input id="orgName" name="orgName" required />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input id="contactName" name="contactName" required />
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
                  <Label htmlFor="orgType">Organization Type *</Label>
                  <Select name="orgType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                      <SelectItem value="charity">Registered Charity</SelectItem>
                      <SelectItem value="community">Community Group</SelectItem>
                      <SelectItem value="religious">Religious Organization</SelectItem>
                      <SelectItem value="education">Educational Institution</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="projectType">What type of solution do you need? *</Label>
                  <Select name="projectType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Simple Website</SelectItem>
                      <SelectItem value="webapp">Web App/Platform</SelectItem>
                      <SelectItem value="internal">Internal Tool</SelectItem>
                      <SelectItem value="branding">Branding & Design</SelectItem>
                      <SelectItem value="maintenance">Maintenance/Improvement</SelectItem>
                      <SelectItem value="unsure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    placeholder="Describe your digital needs, goals, and any specific features you have in mind..."
                    rows={4}
                    required 
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Select name="timeline">
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">ASAP (Within 2 weeks)</SelectItem>
                      <SelectItem value="soon">Within 1 month</SelectItem>
                      <SelectItem value="flexible">Within 2-3 months</SelectItem>
                      <SelectItem value="planning">Just planning ahead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Select name="budget">
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Looking for volunteer help</SelectItem>
                      <SelectItem value="low">Under $500</SelectItem>
                      <SelectItem value="medium">$500 - $2,000</SelectItem>
                      <SelectItem value="high">$2,000+</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="maintenance">Maintenance Capacity</Label>
                  <Textarea 
                    id="maintenance" 
                    name="maintenance" 
                    placeholder="Do you have someone who can maintain the solution after delivery? What's your technical capacity?"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" name="consent" required />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to being contacted about this request and understand that 
                    Code Your Cause is a volunteer-driven organization. *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrganizationForm;