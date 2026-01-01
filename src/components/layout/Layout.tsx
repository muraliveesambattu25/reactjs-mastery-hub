import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenLeadModal={() => setIsLeadModalOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeadCaptureModal
        open={isLeadModalOpen}
        onOpenChange={setIsLeadModalOpen}
      />
    </div>
  );
}
