'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering frequently asked questions about GLC Mechanics.
 *
 * The flow uses a prompt to generate answers based on the provided question and information about the services offered.
 * It exports:
 *   - `answerFAQ`: A function that takes a question as input and returns an AI-generated answer.
 *   - `FAQInput`: The input type for the `answerFAQ` function (a string).
 *   - `FAQOutput`: The output type for the `answerFAQ` function (a string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const FAQInputSchema = z.string().describe('The question to be answered.');
export type FAQInput = z.infer<typeof FAQInputSchema>;

// Define the output schema
const FAQOutputSchema = z.string().describe('The AI-generated answer to the question.');
export type FAQOutput = z.infer<typeof FAQOutputSchema>;

// Define the prompt
const faqPrompt = ai.definePrompt({
  name: 'faqPrompt',
  input: {schema: FAQInputSchema},
  output: {schema: FAQOutputSchema},
  prompt: `You are an AI assistant answering questions about GLC Mechanics.

  GLC Mecânica provides the following services:
  - Diagnóstico completo
  - Manutenção preventiva e corretiva
  - Injeção eletrônica
  - Freios, suspensão e motor

  Answer the following question based on the information above:

  Question: {{{input}}}
  Answer:`, // Changed question to input
});

// Define the flow
const faqFlow = ai.defineFlow(
  {
    name: 'faqFlow',
    inputSchema: FAQInputSchema,
    outputSchema: FAQOutputSchema,
  },
  async question => {
    // Call the prompt and return the output
    const {output} = await faqPrompt(question);
    return output!;
  }
);

/**
 * Answers a frequently asked question about GLC Mechanics using AI.
 * @param input The question to be answered.
 * @returns The AI-generated answer.
 */
export async function answerFAQ(input: FAQInput): Promise<FAQOutput> {
  return faqFlow(input);
}
