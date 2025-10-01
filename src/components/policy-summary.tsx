"use client";

import { useState } from "react";
import { summarizePolicy } from "@/ai/flows/summarize-policy";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Wand2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PolicySummary({ policyText }: { policyText: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    try {
      const result = await summarizePolicy({ policyText });
      setSummary(result.summary);
    } catch (e) {
      console.error(e);
      setError("Failed to generate summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleSummarize} disabled={isLoading} variant="outline">
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2 h-4 w-4" />
            Summarizing...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Summarize with AI
          </>
        )}
      </Button>

      {error && (
        <div className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <p>{error}</p>
        </div>
      )}

      {summary && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-lg">
              <Wand2 className="h-5 w-5 text-primary" />
              AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-body text-foreground/90">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
