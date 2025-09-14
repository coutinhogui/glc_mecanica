import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Car, ShieldCheck } from "lucide-react";

const services = [
  { 
    name: "Diagnóstico completo", 
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    description: "Análise detalhada de todos os sistemas do seu veículo para identificar problemas com precisão."
  },
  { 
    name: "Manutenção preventiva e corretiva", 
    icon: <Wrench className="h-10 w-10 text-primary" />,
    description: "Serviços para manter seu carro em perfeitas condições e corrigir falhas inesperadas."
  },
  { 
    name: "Injeção eletrônica", 
    icon: <Zap className="h-10 w-10 text-primary" />,
    description: "Especialistas em sistemas de injeção eletrônica para otimizar o desempenho e consumo."
  },
  { 
    name: "Freios, suspensão e motor", 
    icon: <Car className="h-10 w-10 text-primary" />,
    description: "Reparos e manutenção em componentes vitais para sua segurança e a vida útil do motor."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="text-center hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="pt-4">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
