
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=chellagovindaraj@gmail.com` +
    `&su=${encodeURIComponent(`New message from ${formData.name}`)}` +
    `&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

  window.open(gmailUrl, "_blank");
};


  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "chellagovindaraj@gmail.com",
      link: "mailto:chellagovindaraj@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9043673461",
      link: "tel:+919043673461",
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/chella-g",
      link: "https://linkedin.com/in/chella-g",
      description: "Let's connect professionally"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/Chella23",
      link: "https://github.com/Chella23",
      description: "Check out my code"
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24h", icon: <Clock className="h-4 w-4" /> },
    { label: "Location", value: "India", icon: <MapPin className="h-4 w-4" /> },
    { label: "Availability", value: "Open", icon: <MessageCircle className="h-4 w-4" /> }
  ];

  return (
    <section id="contact" className="section-padding  from-background via-muted/10 to-background relative overflow-hidden mb-10">

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-responsive-xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-responsive-base font-medium">
            Ready to collaborate? Let's discuss your next project or just have a chat about technology
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 sm:mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card/80 backdrop-blur-sm border-border/50" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-lg sm:text-xl font-black text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
                alt="Professional workspace setup"
                className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg sm:text-xl font-bold mb-1">Let's Build Something Amazing</h4>
                <p className="text-sm opacity-90 font-medium">Together we can turn ideas into reality</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-6 flex items-center gap-3 text-foreground">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed font-medium">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <a 
                      href={info.link}
                      className="flex items-center gap-4 p-4 sm:p-6 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/30"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors text-foreground">{info.label}</p>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base mb-1 font-medium">{info.value}</p>
                        <p className="text-xs text-muted-foreground/70 font-medium">{info.description}</p>
                      </div>
                    </a>
                    {index < contactInfo.length - 1 && <Separator className="my-2 opacity-50" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="hover:shadow-2xl transition-all duration-500 animate-fade-in delay-500 bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl flex items-center gap-3 text-foreground font-bold">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Send className="h-5 w-5" />
                </div>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors text-foreground font-medium"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors text-foreground font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold text-foreground">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-muted/30 border border-border/50 rounded-md text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors resize-none font-medium"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-bold">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
