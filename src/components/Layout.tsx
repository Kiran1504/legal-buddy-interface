import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import ChatBot from "./ChatBot";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 relative">
          <nav className="w-full h-16 px-6 flex items-center justify-between border-b">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Left Logo"
              className="h-8 w-auto object-contain"
            />
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-light tracking-tight"
            >
              Legal Buddy
            </motion.h1>
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Right Logo"
              className="h-8 w-auto object-contain"
            />
          </nav>
          <div className="p-6">
            {children}
          </div>
        </main>
        <ChatBot />
      </div>
    </SidebarProvider>
  );
}