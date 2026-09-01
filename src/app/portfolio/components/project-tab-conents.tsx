import { TabsContent } from "@/components/ui/tabs";
import { projectsArray, projectTypes } from "../../../lib/projects-list";
import ProjectDisplay from "@/containers/projects/project-display";

export default function ProjectTabContents(): React.JSX.Element {
  const ProjectTabContents = projectTypes.map((type) => {
    const filteredProjects = projectsArray.filter(
      (project) => project.projectType === type,
    );
    return (
      <TabsContent
        value={type}
        key={`${type}-content`}
        className="w-full h-full max-h-full overflow-y-auto flex justify-center"
      >
        <ProjectDisplay projectsArray={filteredProjects} />
      </TabsContent>
    );
  });

  return <>{ProjectTabContents}</>;
}
