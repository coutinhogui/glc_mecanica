import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: "Ana Silva",
    text: "Atendimento nota 10 e serviço impecável. O Gustavo resolveu um problema que outras oficinas não conseguiram. Recomendo de olhos fechados!",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1')
  },
  {
    name: "Carlos Pereira",
    text: "Confiança total na GLC Mecânica. Sempre sou bem atendido, os preços são justos e o serviço é de altíssima qualidade. Meu carro está em boas mãos.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2')
  },
  {
    name: "Mariana Costa",
    text: "Levei meu carro para a revisão e fiquei muito satisfeita. A transparência e o profissionalismo do Gustavo fazem toda a diferença. Super indico!",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3')
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col bg-background">
              <CardContent className="pt-6 flex-grow flex flex-col items-center text-center">
                <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
                {testimonial.image && (
                  <Image
                    src={testimonial.image.imageUrl}
                    alt={`Avatar de ${testimonial.name}`}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-2 border-primary"
                    data-ai-hint={testimonial.image.imageHint}
                  />
                )}
                <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
