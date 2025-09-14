"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-center">Perguntas Frequentes</h2>
          <p className="text-muted-foreground mb-8 text-center">
            Tem alguma dúvida? Confira as perguntas mais comuns.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona o diagnóstico completo?</AccordionTrigger>
              <AccordionContent>
                Nosso diagnóstico completo utiliza equipamentos modernos para uma análise profunda de todos os sistemas eletrônicos e mecânicos do seu veículo, garantindo a identificação precisa de qualquer problema.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Por que a manutenção preventiva é importante?</AccordionTrigger>
              <AccordionContent>
                A manutenção preventiva é crucial para evitar problemas maiores e mais caros no futuro. Ela garante a segurança, a eficiência e a longevidade do seu veículo, trocando peças e fluidos antes que causem falhas.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3">
              <AccordionTrigger>Vocês oferecem garantia nos serviços?</AccordionTrigger>
              <AccordionContent>
                Sim, todos os nossos serviços e peças instaladas possuem garantia. A satisfação e a confiança dos nossos clientes são nossa prioridade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Quais serviços vocês oferecem?</AccordionTrigger>
              <AccordionContent>
                Oferecemos diagnóstico completo, manutenção preventiva e corretiva, serviços em injeção eletrônica, freios, suspensão e motor.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-5">
              <AccordionTrigger>Qual o horário de funcionamento?</AccordionTrigger>
              <AccordionContent>
                Nosso horário de funcionamento é de segunda a sexta, das 8h às 18h.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
