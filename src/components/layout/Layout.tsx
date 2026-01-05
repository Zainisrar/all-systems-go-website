import { forwardRef, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Chatbot } from "../Chatbot";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <Chatbot />
      </div>
    );
  }
);

Layout.displayName = "Layout";
