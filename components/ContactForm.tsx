"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Phone, Mail } from 'lucide-react';
import { site } from '@/lib/site';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceType: z.string().min(1, 'Please select a service type'),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  eventDate: z.string().min(1, 'Please select an event date'),
  location: z.string().min(2, 'Please enter a location'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'), // Spam protection
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceTypes = [
  { value: 'celebrity', label: 'Celebrity & Event Photography' },
  { value: 'wedding', label: 'Wedding Photography' },
  { value: 'portrait', label: 'Portrait & Family Photography' },
  { value: 'corporate', label: 'Corporate Photography' },
  { value: 'fashion', label: 'Fashion Photography' },
  { value: 'other', label: 'Other Services' },
];

const budgetRanges = [
  { value: 'under-5k', label: 'Under AED 5,000' },
  { value: '5k-10k', label: 'AED 5,000 - 10,000' },
  { value: '10k-25k', label: 'AED 10,000 - 25,000' },
  { value: '25k-50k', label: 'AED 25,000 - 50,000' },
  { value: 'over-50k', label: 'Over AED 50,000' },
  { value: 'discuss', label: 'Let\'s Discuss' },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const watchedData = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Create WhatsApp deep link
        const whatsappMessage = `Hi! I'm interested in ${data.serviceType}. Name: ${data.name}, date: ${data.eventDate}, location: ${data.location}. Budget: ${data.budgetRange}.`;
        const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp after a short delay
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 2000);
        
        reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 bg-card border border-border rounded-lg"
      >
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10 text-primary-foreground" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
          Thank You for Your Inquiry
        </h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We&apos;ve received your request and will be in touch within 24 hours.
          You&apos;ll also be redirected to WhatsApp to continue our conversation.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-border text-foreground hover:bg-muted"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Let&apos;s Create Something Extraordinary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tell us your date, vision, and venue. We&apos;ll craft a bespoke plan and make the extraordinary feel effortless.
          </p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-foreground font-semibold">Phone</div>
              <a 
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-foreground font-semibold">WhatsApp</div>
              <a 
                href={site.whatsappUrl}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us (Dubai preferred)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-foreground font-semibold">Email</div>
              <a 
                href={`mailto:${site.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {site.email}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-card rounded-lg border border-border"
        >
          <h3 className="text-foreground font-semibold mb-2">Response Time</h3>
          <p className="text-muted-foreground text-sm">
            We typically respond within 2-4 hours during business hours (9 AM - 8 PM GST).
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="font-display text-xl text-foreground">
              Start Your Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <input
                {...register('honeypot')}
                type="text"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name *
                </Label>
                <Input
                  {...register('name')}
                  id="name"
                  className="bg-background border-border text-foreground focus:border-primary"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    {...register('email')}
                    id="email"
                    type="email"
                    className="bg-background border-border text-foreground focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className="bg-background border-border text-foreground focus:border-primary"
                    placeholder="+971 XX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <Label className="text-foreground">Service Type *</Label>
                <Select onValueChange={(value) => setValue('serviceType', value)}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select a service type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value} className="text-foreground focus:bg-primary focus:text-primary-foreground">
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-red-400 text-sm">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label className="text-foreground">Budget Range *</Label>
                <Select onValueChange={(value) => setValue('budgetRange', value)}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {budgetRanges.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value} className="text-foreground focus:bg-primary focus:text-primary-foreground">
                        {budget.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budgetRange && (
                  <p className="text-red-400 text-sm">{errors.budgetRange.message}</p>
                )}
              </div>

              {/* Event Date & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-foreground">
                    Event Date *
                  </Label>
                  <Input
                    {...register('eventDate')}
                    id="eventDate"
                    type="date"
                    className="bg-background border-border text-foreground focus:border-primary"
                  />
                  {errors.eventDate && (
                    <p className="text-red-400 text-sm">{errors.eventDate.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-foreground">
                    Location *
                  </Label>
                  <Input
                    {...register('location')}
                    id="location"
                    className="bg-background border-border text-foreground focus:border-primary"
                    placeholder="Dubai, UAE"
                  />
                  {errors.location && (
                    <p className="text-red-400 text-sm">{errors.location.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Tell Us About Your Vision *
                </Label>
                <Textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="bg-background border-border text-foreground focus:border-primary resize-none"
                  placeholder="Describe your event, style preferences, special requirements, and what makes this occasion unique to you..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 w-5 h-5" />
                    Send Inquiry
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}