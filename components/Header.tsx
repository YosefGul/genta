"use client"

import { useState } from "react"
import Logo from "./Logo"
import { MapPin, X, Users, GraduationCap, Layout, Book, Activity, Image, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (url: string) => {
    setIsOpen(false)
    router.push(url)

    // Sayfa geçişinden sonra en üste kaydır
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const navItems = [
    { name: "Akademik Eğitimciler", icon: GraduationCap, url: "/akademik-egitimciler" },
    { name: "Komite Kılavuzları", icon: Book, url: "/komite-kilavuzlari" },
    { name: "Komiteler", icon: Layout, url: "/komiteler" },
    { name: "Akış", icon: Activity, url: "/akis" },
    { name: "Galeri", icon: Image, url: "/galeri" },
    // ... (diğer nav öğeleri)
  ]

  // Başvuru formu URL'i yerine başvuru sayfasına yönlendirme
  const applicationPageUrl = "/basvuru"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      {/* Social Links and Location */}
      <div className="container flex h-8 items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{link.name}</span>
              </a>
            )
          })}
          <a
            href="https://maps.app.goo.gl/nodqPLxuPBsBd3gz6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <MapPin className="h-4 w-4" />
            <span className="sr-only">Location</span>
          </a>
        </div>
      </div>

      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <Logo />

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Başvur Butonu - Mobil */}
            <Link
              href={applicationPageUrl}
              className="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              <FileText className="mr-1 h-4 w-4" />
              Başvur
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
                  <svg
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3 5H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 12H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-950 sm:w-[400px]">
         
                <nav className="mt-8 flex flex-col gap-4">
                  <motion.button
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => handleNavigation("/ekip")}
                  >
                    <Users className="h-4 w-4" />
                    <span>Ekip</span>
                  </motion.button>
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.button
                        key={index}
                        className="flex items-center gap-2 rounded-md px-4 py-2 text-left text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 1) * 0.1 }}
                        onClick={() => handleNavigation(item.url || "/")}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </motion.button>
                    )
                  })}

                  {/* Başvur Butonu - Mobil Menü İçinde */}
                  <motion.button
                    onClick={() => handleNavigation(applicationPageUrl)}
                    className="mt-4 flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Başvur</span>
                  </motion.button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end px-4 lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                  <Link href="/ekip" passHref legacyBehavior>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Ekip</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.url || "/"} passHref legacyBehavior>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50">
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        <span>{item.name}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Başvur Butonu - Masaüstü */}
                <NavigationMenuItem>
                  <Link href={applicationPageUrl} passHref legacyBehavior>
                    <NavigationMenuLink className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Başvur</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

