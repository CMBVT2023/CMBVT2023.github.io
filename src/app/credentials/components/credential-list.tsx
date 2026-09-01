import type { Credential } from "@/lib/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CredentialListProps {
  credentialsArray: Credential[];
}

export default function CredentialList({
  credentialsArray,
}: CredentialListProps) {
  const CredentialItems = credentialsArray.map((credential) => {
    return (
        <Card
          key={credential.credentialTitle}
          className="bg-primary-background/70 border-y-2 border-x-0 border-card-text rounded-none"
        >
          <CardHeader className="text-xl md:text-2xl">
            {credential.credentialTitle}
          </CardHeader>
          <CardContent className="text-sm md:text-lg text-card-text">
            {credential.credentialDescription}
          </CardContent>
        </Card>
    );
  });

  return (
    <ScrollArea className="w-full h-full max-h-full">
      {CredentialItems}
    </ScrollArea>
  );
}
