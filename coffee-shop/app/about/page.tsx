import About from "@/app/components/About";
import PageHeader from "@/app/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" activePage="About" />
      <About />
    </>
  );
}