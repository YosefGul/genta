"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { teamMembers, categories, years, type TeamMember } from "@/data/teamMembers"
import { Users, Search, Filter, Mail, Instagram, Linkedin, Twitter, ChevronDown, Calendar, X } from "lucide-react"
import Header from "@/components/Header"
import Contact from "@/components/Contact"

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(2023)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Filtreleme işlemi
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? member.category === selectedCategory : true) &&
      member.year === selectedYear,
  )

  // Kategoriye göre gruplama
  const groupedMembers = filteredMembers.reduce(
    (acc, member) => {
      if (!acc[member.category]) {
        acc[member.category] = []
      }
      acc[member.category].push(member)
      return acc
    },
    {} as Record<string, TeamMember[]>,
  )

  // Modal dışına tıklandığında kapatma
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setSelectedMember(null)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-[#001529] text-white">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-blue-400" />
            <h1 className="text-center text-4xl font-bold">GENTA Ekibi</h1>
          </div>

          {/* Filtreler */}
          <div className="mb-12 rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            <div className="mb-6 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              {/* Arama */}
              <div className="relative w-full max-w-md md:w-auto md:flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  type="text"
                  placeholder="Üye Ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-gray-700 bg-gray-800/50 pl-10 text-white"
                />
                {searchTerm && (
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-white"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex w-full flex-wrap justify-center gap-3 md:w-auto md:justify-end">
                {/* Yıl Seçimi */}
                <div className="flex space-x-2">
                  {years.map((year) => (
                    <Button
                      key={year}
                      variant={selectedYear === year ? "default" : "outline"}
                      onClick={() => setSelectedYear(year)}
                      className={`flex items-center gap-2 ${
                        selectedYear === year
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
                      }`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{year}</span>
                    </Button>
                  ))}
                </div>

                {/* Kategori Filtresi */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-gray-700 bg-gray-800/50 text-white"
                    >
                      <Filter className="h-4 w-4" />
                      <span>{selectedCategory || "Tüm Kategoriler"}</span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-gray-700 bg-gray-800">
                    <DropdownMenuItem onSelect={() => setSelectedCategory(null)} className="hover:bg-gray-700">
                      Tüm Kategoriler
                    </DropdownMenuItem>
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onSelect={() => setSelectedCategory(category)}
                        className="hover:bg-gray-700"
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Sonuç bilgisi */}
            <div className="text-sm text-gray-400">
              {filteredMembers.length} üye bulundu
              {selectedCategory && ` - ${selectedCategory} kategorisinde`}
              {` - ${selectedYear} yılında`}
            </div>
          </div>

          {/* Kategoriye göre gruplandırılmış üyeler */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedYear}-${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {Object.keys(groupedMembers).length > 0 ? (
                Object.entries(groupedMembers).map(([category, members]) => (
                  <div key={category} className="mb-16">
                    <h2 className="mb-6 border-b border-gray-800 pb-2 text-2xl font-bold">{category}</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {members.map((member, index) => (
                        <TeamMemberCard
                          key={member.id}
                          member={member}
                          index={index}
                          onClick={() => setSelectedMember(member)}
                        />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="mx-auto mb-4 h-16 w-16 text-gray-600" />
                    <h3 className="mb-2 text-xl font-semibold">Üye Bulunamadı</h3>
                    <p className="text-gray-400">
                      Arama kriterlerinize uygun üye bulunamadı. Lütfen filtreleri değiştirin.
                    </p>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Üye Detay Modalı */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={handleClickOutside}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-gray-800 bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-gray-800/80 p-2 text-white hover:bg-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative h-48 rounded-t-xl bg-gradient-to-r from-blue-600 to-indigo-600">
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gray-900">
                      <Image
                        src={selectedMember.image || "/placeholder.svg"}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-20">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
                    <p className="text-blue-400">{selectedMember.title}</p>
                    <div className="mt-2 flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <span>{selectedMember.category}</span>
                      <span>•</span>
                      <span>{selectedMember.year}</span>
                      {selectedMember.department && (
                        <>
                          <span>•</span>
                          <span>{selectedMember.department}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {selectedMember.bio && (
                    <div className="mb-6">
                      <h3 className="mb-2 text-lg font-semibold">Hakkında</h3>
                      <p className="text-gray-300">{selectedMember.bio}</p>
                    </div>
                  )}

                  {selectedMember.social && (
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">İletişim</h3>
                      <div className="space-y-2">
                        {selectedMember.social.email && (
                          <a
                            href={`mailto:${selectedMember.social.email}`}
                            className="flex items-center gap-3 text-gray-300 transition-colors hover:text-blue-400"
                          >
                            <Mail className="h-5 w-5" />
                            <span>{selectedMember.social.email}</span>
                          </a>
                        )}
                        {selectedMember.social.instagram && (
                          <a
                            href={selectedMember.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 transition-colors hover:text-blue-400"
                          >
                            <Instagram className="h-5 w-5" />
                            <span>Instagram</span>
                          </a>
                        )}
                        {selectedMember.social.linkedin && (
                          <a
                            href={selectedMember.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 transition-colors hover:text-blue-400"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {selectedMember.social.twitter && (
                          <a
                            href={selectedMember.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 transition-colors hover:text-blue-400"
                          >
                            <Twitter className="h-5 w-5" />
                            <span>Twitter</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </div>
  )
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
  onClick: () => void
}

function TeamMemberCard({ member, index, onClick }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card
        className="h-full cursor-pointer overflow-hidden border-gray-800 bg-gray-900/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="mb-2 inline-block rounded-full bg-blue-600/80 px-2 py-1 text-xs font-semibold">
              {member.year}
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="mb-1 line-clamp-1 text-xl font-bold">{member.name}</h3>
          <p className="mb-2 text-sm text-blue-400">{member.title}</p>
          <p className="text-xs text-gray-400">{member.category}</p>
        </CardContent>

        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <div className="text-xs text-gray-500">{member.department}</div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full p-0 text-blue-400 hover:bg-blue-900/20 hover:text-blue-300"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">İletişim</span>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

