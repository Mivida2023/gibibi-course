"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl text-primary">
          <Link href="/" className="flex items-center gap-2">
            Gibibi Course
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Accueil
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Ressources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              À propos
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 