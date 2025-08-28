import { Mail, Github, Linkedin, MapPin, Clock, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  from_name: z.string().min(2, 'Name must be at least 2 characters'),
  from_email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: '',
      from_email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_obw4hks',
        'template_uqojjx6',
        data,
        '7vmI46_5MKe7jnBZt'
      );
      
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
      });
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="from_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="from_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What would you like to discuss?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project, questions, or how we can work together..."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Direct Contact */}
          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:z3ncrypt3dbu9@gmail.com"
                    className="text-primary hover:underline"
                  >
                    z3ncrypt3dbu9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground text-sm">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">India (Remote Available)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-semibold">Connect Online</h2>
            
            <div className="space-y-4">
              <a 
                href="https://github.com/n220556"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors border border-border/50"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my projects and contributions</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/raj-kumar-pentester/"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card-hover transition-colors border border-border/50"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Professional network and updates</p>
                </div>
              </a>
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-6 bg-gradient-subtle border-border/50">
            <div className="space-y-4">
              <h3 className="font-semibold">Available for:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Cybersecurity consulting projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Penetration testing engagements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Security training and workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Full-time cybersecurity roles
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
