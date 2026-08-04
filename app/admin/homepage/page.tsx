import HeroForm from "@/components/admin/homepage/HeroForm";
import SliderForm from "@/components/admin/homepage/SliderForm";
import AboutForm from "@/components/admin/homepage/AboutForm";
import ServicesForm from "@/components/admin/homepage/ServicesForm";
import ProjectsForm from "@/components/admin/homepage/ProjectsForm";
import BlogForm from "@/components/admin/homepage/BlogForm";
import GalleryForm from "@/components/admin/homepage/GalleryForm";
import LogoForm from "@/components/admin/homepage/LogoForm";

export default function HomepageBuilder() {
  return (
    <main>

      <h1>Homepage Builder</h1>

      <HeroForm />
      <SliderForm />
      <AboutForm />
      <ServicesForm />
      <ProjectsForm />
      <BlogForm />
      <GalleryForm />
      <LogoForm />

    </main>
  );
}
