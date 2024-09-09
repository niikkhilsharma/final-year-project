import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";

export default function ContinueLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
