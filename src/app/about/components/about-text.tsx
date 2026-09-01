import InTextLink from "@/components/client/in-text-link";
import { codingExperience } from "@/lib/experience-info";

export default function AboutText(): React.JSX.Element {
  return (
    <p className="w-full md:w-2/3">
      I began pursuing programming during my first year of college in 2021 and
      now have over {codingExperience} years of programming experience. My
      favorite aspect of programming is creating applications that help users
      perform tasks more easily and efficiently. I have experience in multiple
      programming languages, including JavaScript, Python, C++, Java, and Visual
      Basic, with my main focus currently on JavaScript. Throughout my journey,
      I have created multiple applications for various businesses and personal
      projects, which you can view on my{" "}
      <InTextLink linkHREF={"/portfolio"}>portfolio</InTextLink> page. I have
      also earned multiple degrees and certifications that have deepened my
      understanding of programming principles, all of which you can view on my{" "}
      <InTextLink linkHREF={"/credentials"}>credentials</InTextLink> page.
      Finally, my <InTextLink linkHREF={"/contact"}>contact</InTextLink> page
      shows the best ways to connect with me. Thank you for viewing my
      portfolio.
    </p>
  );
}
