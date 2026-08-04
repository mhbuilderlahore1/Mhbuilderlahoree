import HeroForm from "@/components/admin/homepage/HeroForm";
import SliderForm from "@/components/admin/homepage/SliderForm";
import AboutForm from "@/components/admin/homepage/AboutForm";
import ServicesForm from "@/components/admin/homepage/ServicesForm";

export default function HomepageBuilder() {
  return (
    <main>

      <h1>Homepage Builder</h1>

      <HeroForm />

      <SliderForm />

      <AboutForm />

      <ServicesForm />

    </main>
  );
}
