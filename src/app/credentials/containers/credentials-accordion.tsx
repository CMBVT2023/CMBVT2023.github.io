import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CredentialList from "../components/credential-list";
import { credentialsArray } from "../data/credentials-array";

export default function CredentialsAccordion(): React.JSX.Element {
  const credentialInstitutes = [
    "Bay Valley Tech",
    "Modesto Junior College",
    "CompTIA",
    "TestOut",
    "Adobe",
    "LearnKey",
  ]

  const CredentialsArray = credentialInstitutes
  .map((institute) => {
    const filteredCredentials = credentialsArray.filter(
      (credential) => credential.credentialInstitute === institute,
    );
    return (
      <AccordionItem value={institute} key={institute}>
        <AccordionTrigger className="text-lg md:text-3xl">
          {institute}
        </AccordionTrigger>
        <AccordionContent className="w-full flex justify-center items-center">
          <CredentialList credentialsArray={filteredCredentials} />
        </AccordionContent>
      </AccordionItem>
    );
  });

  return (
    <Accordion type="single" collapsible>
      {CredentialsArray}
    </Accordion>
  );
}
