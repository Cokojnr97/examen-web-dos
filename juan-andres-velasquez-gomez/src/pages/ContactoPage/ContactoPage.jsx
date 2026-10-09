import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ContactInfoList from "../../components/Contactos/ContactInfo/ContactInfoList";
import ContactCard from "../../components/Contactos/ContactCard/ContactCard";
import ContactForm from "../../components/Contactos/ContactForm/ContactForm";
import { canalesDeContacto } from "../../data/contactData";

const ContactoPage = () => {
  return (
    <div className="container">
      <HeroBanner
        title="Contacto & Consultas del Archivo"
        subtitle="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <ContactCard
          title="Canales de Atención"
          description="Nuestros bibliotecarios e investigadores responden consultas en días hábiles."
        >
          <ContactInfoList items={canalesDeContacto} />
        </ContactCard>

        <ContactCard
          title="Enviar Mensaje"
          description="Completa el siguiente formulario para radicar tu inquietud."
        >
          <ContactForm />
        </ContactCard>
      </section>
    </div>
  );
};

export default ContactoPage;