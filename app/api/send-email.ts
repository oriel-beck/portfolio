"use server";
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.EMAIL_API_KEY!);

export async function sendEmail(formData: FormData) {
    // const res = await sgMail.send({
    //     to: process.env.EMAIL_TO!,
    //     from: process.env.EMAIL_FROM!,
    //     subject: process.env.SUBJECT!,
    //     text: `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`
    // }).catch(console.log);
    const res = true;

    if (!res) return { error: "Failed to send the message" }
    return
}