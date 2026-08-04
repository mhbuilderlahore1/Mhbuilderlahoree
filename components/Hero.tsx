import ContactButton from "./ContactButton";
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section>

      <h1>MHBuilder Lahore Building Contractor</h1>

      <p>
        Professional Construction Company in Lahore
      </p>

      <ContactButton
        title="Contact Us"
        link="/contact"
      />

      <ScrollButton
        target="#about"
      />

    </section>
  );
}
