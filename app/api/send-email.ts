"use server";
import { headers } from 'next/headers';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.EMAIL_API_KEY!);

const ratelimit = new Ratelimit({
    redis: kv,
    // 1 request from the same IP in 12 hours
    limiter: Ratelimit.slidingWindow(1, '12 h'),
});

export async function sendEmail(prevState: string | null, formData: FormData) {
    const ip = headers().get("x-forwarded-for") || '127.0.0.1';
    // You could alternatively limit based on user ID or similar
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(
        ip
    );
    if (success) {
        const res = await sgMail.send({
            to: process.env.EMAIL_TO!,
            from: process.env.EMAIL_FROM!,
            subject: process.env.SUBJECT!,
            text: `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`
        }).catch(console.log);

        if (!res) return "Failed to send the message";
        return null;
    } else {
        return `You are ratelimited, please try again at ${new Date(reset).toLocaleString("en-US", {
            dateStyle: 'short',
            timeStyle: 'short'
        })}`
    }

}