
"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string({ required_error: "Name is required." }).min(2, { message: "Name must be at least 2 characters." }),
  email: z.string({ required_error: "Email is required." }).email({ message: "Please enter a valid email address." }),
  message: z.string({ required_error: "Message is required." }).min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
};

export async function submitContactForm(data: { name: string, email: string, message: string }): Promise<{success: boolean; message: string}> {
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check the fields.",
    };
  }

  try {
    // In a real app, you would typically send an email, save to a database, etc.
    console.log("New contact form submission:", validated.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: "An error occurred while sending the message. Please try again later." };
  }
}
