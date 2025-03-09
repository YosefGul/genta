"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone, Users2 } from "lucide-react"
import { teamMembers } from "@/data/team"

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Users2 className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold text-center">KOORDİNATÖR EKİBİ</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center h-full"
            >
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-400">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                    priority={index < 2} // İlk iki üye için priority true
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={90}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col min-h-[200px]">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4 px-4 flex-1">{member.role}</p>
                <div className="flex space-x-4 mb-4 justify-center">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors p-2"
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-blue-400 transition-colors p-2"
                    aria-label={`${member.name} E-posta`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="hover:text-blue-400 transition-colors p-2"
                    aria-label={`${member.name} Telefon`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <p className="truncate">E-mail: {member.email}</p>
                  <p>Telefon Numarası: {member.phone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

