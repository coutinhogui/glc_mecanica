import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Sobre a GLC Mecânica</h2>
            <p className="text-muted-foreground mb-4">
              Fundada por Gustavo Lucas Coutinho, um entusiasta de carros com mais de 15 anos de experiência, a GLC Mecânica nasceu do desejo de oferecer um serviço automotivo honesto, transparente e de alta qualidade em Curitiba.
            </p>
            <p className="text-muted-foreground">
              Nossa missão é cuidar do seu veículo com a mesma dedicação que teríamos com o nosso, utilizando as melhores ferramentas e peças para garantir sua segurança e tranquilidade. Na GLC, cada cliente é um parceiro.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt="Gustavo Lucas Coutinho, mecânico responsável"
                width={450}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
