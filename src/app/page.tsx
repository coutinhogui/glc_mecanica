import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Gallery from '@/components/gallery';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
