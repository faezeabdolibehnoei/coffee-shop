import Menu from "@/app/components/Menu";
import PageHeader from "@/app/components/PageHeader";

export default function MenuPage() {
  return (
    <>
      <PageHeader title="Menu" activePage="Menu" />
      <Menu />
    </>
  );
}