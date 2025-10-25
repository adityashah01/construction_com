"use server"

import emailjs from "@emailjs/nodejs"

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Initialize EmailJS with server-side credentials
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
    })

    const templateParams = {
      to_email: "energeticnepal@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message,
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      templateParams,
    )

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
