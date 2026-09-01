import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList } from "@/components/ui/tabs";
import ProjectTabTriggers from "./components/project-tab-triggers";
import ProjectTabContents from "./components/project-tab-conents";

export default function PortfolioPage() {
  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-full md:h-11/12 p-0">
      <Tabs className="w-full h-full">
        <CardHeader className="h-1/6 p-1 flex flex-col gap-1">
          <CardTitle className="text-xl md:text-3xl">Portfolio</CardTitle>
          <TabsList className="flex gap-2 w-full">
            <ProjectTabTriggers />
          </TabsList>
        </CardHeader>
        <CardContent className="w-full h-5/6 max-h-5/6 p-1">
          <ProjectTabContents />
        </CardContent>
      </Tabs>
    </Card>
  );
}
