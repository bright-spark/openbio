import AppNavbar from "@/components/app-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex min-h-screen w-full flex-col items-center pt-[100px]">
      <AppNavbar />

      {children}
    </div>
  );
}