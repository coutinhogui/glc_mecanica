"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { answerFAQ } from '@/ai/flows/faq-gen-ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  question: z.string().min(10, { message: "Sua pergunta deve ter pelo menos 10 caracteres." }),
});

type FormValues = z.infer<typeof formSchema>;

const predefinedQuestions = [
    "Quais serviços vocês oferecem?",
    "Vocês fazem manutenção preventiva?",
    "Qual o horário de funcionamento?",
    "Vocês trabalham com injeção eletrônica?"
];

export default function Faq() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const processQuestion = async (question: string) => {
    setIsLoading(true);
    setAnswer(null);
    try {
      const result = await answerFAQ(question);
      setAnswer(result);
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Desculpe, não consegui encontrar uma resposta. Tente reformular a pergunta.",
      });
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    await processQuestion(data.question);
  };

  const handlePredefinedQuestionClick = async (question: string) => {
    setValue("question", question);
    await processQuestion(question);
    reset();
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mb-8">
              Tem alguma dúvida? Pergunte ao nosso assistente de IA ou confira as perguntas mais comuns.
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
            </Accordion>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Pergunte à nossa IA</CardTitle>
              <CardDescription>Digite sua pergunta sobre nossos serviços.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                <Input
                  {...register('question')}
                  placeholder="Ex: Vocês trabalham com carros importados?"
                  className="bg-card"
                  disabled={isLoading}
                />
                {errors.question && <p className="text-destructive text-sm">{errors.question.message}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Perguntar'}
                </Button>
              </form>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Ou tente uma destas:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {predefinedQuestions.map(q => (
                        <Button key={q} variant="outline" size="sm" onClick={() => handlePredefinedQuestionClick(q)} disabled={isLoading}>
                            {q}
                        </Button>
                    ))}
                </div>
              </div>

              {isLoading && !answer && (
                <div className="mt-6 flex items-center justify-center text-muted-foreground">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Buscando resposta...
                </div>
              )}

              {answer && (
                <div className="mt-6 p-4 bg-accent/30 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Resposta</h4>
                      <p className="text-muted-foreground">{answer}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
