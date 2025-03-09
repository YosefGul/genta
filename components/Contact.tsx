"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, MapPin, Instagram, Send, Twitter, Linkedin, CreativeCommons } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/app/actions"
import { contactInfo } from "@/data/contact"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Adres bilgilerini URL-encoded formata dönüştür
  const addressEncoded = encodeURIComponent(
    `${contactInfo.address.street}, ${contactInfo.address.district}, ${contactInfo.address.postalCode} ${contactInfo.address.city}`,
  )

  // Google Static Maps API URL'i
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${addressEncoded}&zoom=15&size=600x300&markers=color:red|${addressEncoded}&key=YOUR_GOOGLE_MAPS_API_KEY`

  // Google Maps yönlendirme URL'i
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "Başarılı!",
          description: result.message,
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      }
    } catch (error) {
      toast({
        title: "Hata!",
        description: "Bir hata oluştu. Lütfen tekrar deneyiniz.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001529] to-gray-950 py-16 text-white">
      {/* Background Pattern */}
      <div className="bg-grid-white/[0.02] pointer-events-none absolute inset-0" />

      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center justify-center gap-3">
          <MessageCircle className="h-8 w-8 text-blue-400" />
          <h2 className="text-center text-4xl font-bold">İLETİŞİM</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input name="name" placeholder="Ad-Soyad" required className="border-gray-800 bg-gray-900/50" />
                </div>
                <div className="space-y-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-mail Adresi"
                    required
                    className="border-gray-800 bg-gray-900/50"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefon Numarası"
                    required
                    className="border-gray-800 bg-gray-900/50"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    name="subject"
                    placeholder="Konu Başlığı"
                    required
                    className="border-gray-800 bg-gray-900/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Mesajınız"
                  required
                  className="min-h-[150px] border-gray-800 bg-gray-900/50"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Gönderiliyor...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Gönder
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="mb-4 text-2xl font-semibold">Adres:</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                  <span>
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.district}, {contactInfo.address.postalCode} {contactInfo.address.city}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a href={`tel:${contactInfo.phone}`} className="transition-colors hover:text-blue-400">
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-blue-400">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Statik Harita */}
            <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-64 w-full transition-opacity hover:opacity-90"
              >
                {/* API anahtarı olmadığı için placeholder görüntü kullanıyoruz */}
                {/* Gerçek uygulamada aşağıdaki Image bileşenini kullanabilirsiniz */}
                {/* <Image
                  src={staticMapUrl || "/placeholder.svg"}
                  alt="GENTA Lokasyon Haritası"
                  fill
                  className="object-cover"
                /> */}

                {/* Placeholder harita görüntüsü */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="p-4 text-center">
                    <MapPin className="mx-auto mb-2 h-12 w-12 text-blue-400" />
                    <h4 className="text-lg font-semibold">
                      Şeyhli Mahallesi, Hayatı Üstün Caddesi, Merdane Sokak No:1
                    </h4>
                    <p className="text-gray-400">Pendik, 34906 İstanbul</p>
                    <p className="mt-4 text-sm text-blue-400">Haritada görüntülemek için tıklayın</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mb-20 mt-16 flex items-center justify-center gap-3 border-t border-gray-800 pt-8">
          <p className="text-gray-400">2024 | Tüm Hakları Saklıdır</p>
          <div className="flex justify-center space-x-4">
            {contactInfo.socialMedia.instagram && (
              <a href={contactInfo.socialMedia.instagram} className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/yusuf-ihsan-g%C3%BCl-237a821ab/" className="mx-auto mt-4 flex w-fit gap-3 text-center text-gray-400" target="_blank">Created By <CreativeCommons /> <span className="text-blue-700">Yusuf İhsan Gül</span></a>
      <div className="mt-4 text-center text-gray-400">Created with Ömer Ekin</div>
    </section>
    
  )
}

