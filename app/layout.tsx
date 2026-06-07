import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thunder Studio AI | Premium AI Music Production",
  description: "Transform any song into a fully editable production project. Stem separation, MIDI generation, AI composition, BPM & key detection, and FL Studio export — all in one cinematic interface.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#e2e8f0] overflow-hidden">
        {/* Cinematic Background Grid + Vignette */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4px_4px]" />
          {/* Radial vignette for premium depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_75%)]" />
          {/* Top subtle glow bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-30" />
        </div>
        
        {children}
        
        <Toaster 
          position="top-center" 
          richColors 
          closeButton 
          className="sonner-toaster"
          toastOptions={{
            style: {
              background: 'rgba(20,22,30,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#e2e8f0',
              backdropFilter: 'blur(20px)',
            }
          }}
        />
      </body>
    </html>
  );
}
