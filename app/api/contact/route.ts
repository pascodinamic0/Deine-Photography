import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string(),
  budgetRange: z.string(),
  eventDate: z.string(),
  location: z.string(),
  message: z.string().min(10),
  honeypot: z.string().max(0), // Bot protection
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the data
    const validatedData = contactSchema.parse(body);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM (GoHighLevel, HubSpot, etc.)
    // 4. Send SMS/WhatsApp notifications
    
    console.log('Contact form submission:', validatedData);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will be in touch within 24 hours.',
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request.' 
      },
      { status: 500 }
    );
  }
}