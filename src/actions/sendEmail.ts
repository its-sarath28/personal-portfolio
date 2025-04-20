"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // make sure this is set in .env.local

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!senderEmail || !message) {
    return { error: "Missing sender email or message." };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "iamsarathrs@gmail.com",
      subject: "New Message from Portfolio Contact Form",
      replyTo: senderEmail,
      html: `<p><strong>Sender Email:</strong> ${senderEmail}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again later.",
    };
  }
}
