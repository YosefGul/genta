'use server'

export async function submitContactForm(formData: FormData) {
  // Simulate form submission delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  // Here you would typically send the data to your backend
  console.log('Form submitted:', data)

  return { success: true, message: 'Mesajınız başarıyla gönderildi!' }
}

