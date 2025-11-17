import Testimonial from "@/app/components/Testimonial";
import PageHeader from "@/app/components/PageHeader";

export default function TestimonialPage() {
  return (
    <>
      <PageHeader title="Testimonial" activePage="Testimonial" />
      <Testimonial />
    </>
  );
}