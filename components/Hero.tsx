import ContactButton from "./ContactButton";
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section className="hero">

      <h1>
        MHBuilder Lahore Building Contractor
      </h1>

      <p>
        Professional Construction Company in Lahore
      </p>

      <div className="buttons">
        <ContactButton
          title="Contact Us"
          link="/contact"
        />

        <ScrollButton
          target="#about"
        />
      </div>

    </section>
  );
}
