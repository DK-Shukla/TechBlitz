'use server';

import dbConnect from '@/lib/db';
import Registration from "@/models/Registration";
import SiteSettings from "@/models/SiteSettings";
import { z } from 'zod';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  collegeName: z.string().min(2, 'College Name is required'),
  email: z.string().email('Invalid email address'),
  year: z.string().min(1, 'Year is required'),
  semester: z.string().min(1, 'Semester is required'),
  domains: z.array(z.string()).min(1, 'Select at least one domain'),
  rollNumber: z.string().optional(),
});

export async function submitRegistration(data: any) {
  try {
    await dbConnect();
    
    // Check if registration is open
    const settings = await SiteSettings.findOne().lean();
    if (settings && settings.registrationOpen === false) {
      return { success: false, error: 'Registration is currently closed.' };
    }

    // Validate data
    const validatedData = registerSchema.parse(data);

    // Save to DB
    await Registration.create({
      ...validatedData,
      status: 'Registered',
    });

    // Email sending simulation (actual implementation would use Resend/SendGrid)
    // await sendConfirmationEmail(validatedData.email, validatedData.fullName);

    return { success: true };
  } catch (error: any) {
    console.error('Registration failed:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: (error as any).errors[0].message };
    }
    return { success: false, error: 'Internal server error. Please try again.' };
  }
}
