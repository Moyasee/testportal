"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="glow-container">
        <nav className="fixed w-full z-50 pt-6">
          <div className="nav-container flex justify-between items-center">
            <div className="flex items-center">
              <img src="logo.svg" alt="Portal Logo" className="w-8 h-8 mr-6" />
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="nav-btn px-4 py-2">Log in</button>
              <button className="nav-btn-primary px-4 py-2">Sign Up</button>
            </div>
          </div>
        </nav>

        <HeroGeometric 
          title1="Welcome to Portal"
          title2="Your gateway to infinite possibilities"
        />

        

        <footer className="bg-black/30 backdrop-blur-lg py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Portal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
} 