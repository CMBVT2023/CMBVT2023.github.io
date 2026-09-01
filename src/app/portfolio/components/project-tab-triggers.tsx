import { TabsTrigger } from "@/components/ui/tabs";
import { projectTypes } from "../../../lib/projects-list";

export default function ProjectTabTriggers(): React.JSX.Element {
  const Tabs = projectTypes.map((type) => {
    return (
      <TabsTrigger
        value={type}
        key={`${type}-trigger`}
        className="text-sm md:text-2xl w-1/5"
      >
        {type}
      </TabsTrigger>
    );
  });

  return <>{Tabs}</>;
}
