import { BusinessNavbar } from "@/components/layout/BusinessNavbar";
import { BusinessFooter } from "@/components/layout/BusinessFooter";

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BusinessNavbar />
      <main className="flex-1">{children}</main>
      <BusinessFooter />
    </>
  );
}
