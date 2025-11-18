'use server';
/**
 * @fileOverview Provides AI-powered insights into biblical texts.
 *
 * - getBiblicalInsights - A function that provides insights based on user queries.
 * - BiblicalInsightsInput - The input type for the getBiblicalInsights function.
 * - BiblicalInsightsOutput - The return type for the getBiblicalInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BiblicalInsightsInputSchema = z.object({
  query: z.string().describe('The user query about a specific verse or passage.'),
});
export type BiblicalInsightsInput = z.infer<typeof BiblicalInsightsInputSchema>;

const BiblicalInsightsOutputSchema = z.object({
  historicalContext: z.string().describe('Historical context of the verse or passage.'),
  culturalContext: z.string().describe('Cultural context of the verse or passage.'),
  spiritualContext: z.string().describe('Spiritual context of the verse or passage.'),
});
export type BiblicalInsightsOutput = z.infer<typeof BiblicalInsightsOutputSchema>;

export async function getBiblicalInsights(input: BiblicalInsightsInput): Promise<BiblicalInsightsOutput> {
  return biblicalInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'biblicalInsightsPrompt',
  input: {schema: BiblicalInsightsInputSchema},
  output: {schema: BiblicalInsightsOutputSchema},
  prompt: `You are an AI assistant providing insights into biblical texts. A user will provide a question about a verse or passage, and you will provide historical, cultural, and spiritual context to deepen their understanding. Structure your response as follows:

Historical Context: {{historicalContext}}

Cultural Context: {{culturalContext}}

Spiritual Context: {{spiritualContext}}

User Query: {{{query}}} `,
});

const biblicalInsightsFlow = ai.defineFlow(
  {
    name: 'biblicalInsightsFlow',
    inputSchema: BiblicalInsightsInputSchema,
    outputSchema: BiblicalInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
