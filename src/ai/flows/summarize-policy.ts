'use server';

/**
 * @fileOverview A policy summarization AI agent.
 * 
 * - summarizePolicy - A function that handles the policy summarization process.
 * - SummarizePolicyInput - The input type for the summarizePolicy function.
 * - SummarizePolicyOutput - The return type for the summarizePolicy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePolicyInputSchema = z.object({
  policyText: z
    .string()
    .describe('The full text of the policy to be summarized.'),
});
export type SummarizePolicyInput = z.infer<typeof SummarizePolicyInputSchema>;

const SummarizePolicyOutputSchema = z.object({
  summary: z.string().describe('A brief, user-friendly summary of the policy.'),
});
export type SummarizePolicyOutput = z.infer<typeof SummarizePolicyOutputSchema>;

export async function summarizePolicy(input: SummarizePolicyInput): Promise<SummarizePolicyOutput> {
  return summarizePolicyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePolicyPrompt',
  input: {schema: SummarizePolicyInputSchema},
  output: {schema: SummarizePolicyOutputSchema},
  prompt: `Summarize the following policy in a brief, user-friendly manner:\n\n{{{policyText}}}`, 
});

const summarizePolicyFlow = ai.defineFlow(
  {
    name: 'summarizePolicyFlow',
    inputSchema: SummarizePolicyInputSchema,
    outputSchema: SummarizePolicyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
