import Services from "@/app/components/Services";
import PageHeader from "@/app/components/PageHeader";

export default function ServicePage() {
  return (
    <>
      <PageHeader title="Services" activePage="Service" />
      <Services />
    </>
  );
}