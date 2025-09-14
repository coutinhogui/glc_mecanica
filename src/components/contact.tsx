import { MapPin, Phone, Mail } from 'lucide-react';
import Map from '@/components/map';

export default function Contact() {
  const address = "Rua Ary Rolim Costa, 719 – Fazendinha Curitiba/PR – CEP 81330-180";
  const phone = "(41) 99839-9144";
  const email = "glcmecanica@gmail.com";

  return (
    <section id="contact" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-muted-foreground">{address}</p>
                 <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  Ver no mapa
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                 <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <a href="tel:+5541998399144" className="text-muted-foreground hover:text-primary">{phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:glcmecanica@gmail.com" className="text-muted-foreground hover:text-primary">{email}</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-80 md:h-96 shadow-lg border">
              <Map address={address} />
          </div>
        </div>
      </div>
    </section>
  );
}
