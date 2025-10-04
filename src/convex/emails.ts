"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    business: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      const emailBody = `
New Contact Form Submission

Name: ${args.name}
Email: ${args.email}
${args.business ? `Business/Company: ${args.business}` : ''}
${args.phone ? `Phone: ${args.phone}` : ''}

Message:
${args.message || 'No message provided'}

---
This email was sent from the NUV Growth contact form.
      `.trim();

      const { data, error } = await resend.emails.send({
        from: 'NUV Contact Form <onboarding@resend.dev>',
        to: ['thenuvhq@gmail.com'],
        subject: args.business || `New Contact from ${args.name}`,
        text: emailBody,
        replyTo: args.email,
      });

      if (error) {
        console.error("Email sending error:", error);
        throw new Error(`Failed to send email: ${error.message}`);
      }

      return { success: true, data };
    } catch (error) {
      console.error("Email action error:", error);
      throw error;
    }
  },
});
