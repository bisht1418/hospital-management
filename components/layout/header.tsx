"use client"

import { useState } from "react"
import Link from "next/link"
import { useAppSelector } from "@/lib/hooks"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="text-lg font-bold">M</span>
            </div>
            <span className="text-xl font-bold">MediCare</span>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link href="/" className="text-sm font-medium">
              How it works
            </Link>
            <Link href="/why-oladoc" className="text-sm font-medium">
              Why Oladoc?
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/careers" className="text-sm font-medium">
              Careers
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4">
          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container border-t py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium">
              How it works
            </Link>
            <Link href="/why-oladoc" className="text-sm font-medium">
              Why Oladoc?
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/careers" className="text-sm font-medium">
              Careers
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button className="w-full">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
