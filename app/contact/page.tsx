import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | My Portfolio" };

export default function ContactPage() {
  return (
    <PageShell>
      <Section id="contact" title="Contact">
        <FadeIn>
        <ContactForm />
        </FadeIn>
      </Section>
    </PageShell>
  );
}
