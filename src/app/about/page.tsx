import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import AboutText from "./components/about-text";

export default function AboutPage() {
  return (
    <Card className="w-full lg:w-11/12 xl:w-4/5 h-fit">
      <CardHeader>
        <CardTitle className="text-xl md:text-3xl">About</CardTitle>
        <CardDescription className="text-base md:text-xl">
          Hello, my name is Cristiano Miranda and I am currently a Junior Web
          Developer.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full flex flex-col md:flex-row-reverse gap-5">
        <Image
          src={"/assets/Personal Photo.jpg"}
          alt="Personal Photo"
          width={918}
          height={1212}
          className="
                object-contain
                max-h-96
                md:w-1/3
                "
        />
        <AboutText />
      </CardContent>
    </Card>
  );
}
