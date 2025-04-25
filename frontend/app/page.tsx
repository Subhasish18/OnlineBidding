import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
