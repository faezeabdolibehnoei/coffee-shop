import Reservation from "@/app/components/Reservation";
import PageHeader from "@/app/components/PageHeader";

export default function ReservationPage() {
  return (
    <>
      <PageHeader title="Reservation" activePage="Reservation" />
      <Reservation />
    </>
  );
}