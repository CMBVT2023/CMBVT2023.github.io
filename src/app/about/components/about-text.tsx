import InTextLink from "@/components/client/in-text-link";
import {
  codingExperience,
  webDevelopmentExperience,
} from "@/lib/experience-info";

export default function AboutText(): React.JSX.Element {
  const SNHULink =
    "https://degrees.snhu.edu/?utm_campaign=PFBranded&pfsegment=BR&utm_source=google&utm_medium=pdsearch&utm_content=619164999348&snhu_segment=ol&adkeyword=southern%20new%20hampshire%20university&admatchtype=e&addevice=c&adnetwork=g&adcampaignid=314118801&adcampaignname=G:Brand_General:US&adgroupid=24994550241&adgroupname=Southern-New-Hampshire-University-ONLY-EXACT-BRAND-GENERAL:US&adlocationid=9032282&adplacement=&venpubid=ppcbrand&gclsrc=aw.ds&gad_source=1&gad_campaignid=314118801";
  const MJCLink = "https://www.mjc.edu/";
  const BVTLink = "https://www.bayvalleytech.com/";

  return (
    <p className="w-full md:w-2/3">
      As of now, I am attending{" "}
      <InTextLink linkHREF={SNHULink}>
        Southern New Hampshire University
      </InTextLink>{" "}
      in pursuit of a Bachelor degree in Computer science. Previously, I have
      completed two associate degrees at{" "}
      <InTextLink linkHREF={MJCLink}>MJC</InTextLink>, one in Computer
      Electronics and one in Computer Science - Programming and have attended a
      coding boot camp,{" "}
      <InTextLink linkHREF={BVTLink}>Bay Valley Tech</InTextLink>, that helped
      me become proficient in web development. I have almost {codingExperience}{" "}
      years of experience in programming, and have learned various languages
      like Python, C++, and Visual Basic, with my main focus currently being
      HTML and JavaScript. I am coming up on almost {webDevelopmentExperience}{" "}
      of experience in web development and plan to continue pursuing for a
      career as my ultimate goal is to eventually work my way up to becoming a
      fullstack engineer. Feel free to browse this site to see my{" "}
      <InTextLink linkHREF={"/portfolio"}>portfolio</InTextLink> and the{" "}
      <InTextLink linkHREF={"/credentials"}>certifications</InTextLink> I have
      acquired. Thank you for visiting my site and if wish to contact me, visit
      my <InTextLink linkHREF={"/contact"}>contact</InTextLink> page to find the
      best way to reach me.
    </p>
  );
}
