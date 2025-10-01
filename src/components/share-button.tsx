"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Share, Check } from "lucide-react";

export function ShareButton() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    // This ensures window is defined, preventing build errors on the server
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const handleShare = () => {
    if (!navigator.clipboard) {
      toast({
        title: "Error",
        description: "Clipboard API not supported in your browser.",
        variant: "destructive",
      });
      return;
    }

    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      toast({
        title: "Copied to Clipboard!",
        description: "You can now share the link.",
      });
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }, (err) => {
      console.error('Could not copy text: ', err);
      toast({
        title: "Failed to Copy",
        description: "Could not copy link to clipboard.",
        variant: "destructive",
      });
    });
  };

  return (
    <Button onClick={handleShare} className="mt-6 w-full" variant="outline">
      {isCopied ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Share className="mr-2 h-4 w-4" />
          Share Platform
        </>
      )}
    </Button>
  );
}
