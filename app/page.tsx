import Profile from "@/components/Profile";
import LinkStack from "@/components/LinkStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Profile />
      <LinkStack />
      <Projects />
      <Footer />
    </main>
  );
}
