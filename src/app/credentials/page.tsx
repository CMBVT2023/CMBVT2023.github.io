import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CredentialsAccordion from "./containers/credentials-accordion";

export default function CredentialsPage() {
  

  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 max-h-full md:max-h-11/12 overflow-scroll">
      <CardHeader>
        <CardTitle className="text-base md:text-3xl">
          Certifications / Degrees
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <CredentialsAccordion />
      </CardContent>
    </Card>
  );
}
