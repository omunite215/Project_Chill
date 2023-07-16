import Hero from "./WorksStuff/Sections/Hero";
import Brief from "./WorksStuff/Sections/Brief";
import { GetStarted } from "@/Common_Components";
import Feedbacks from "./WorksStuff/Sections/Feedbacks";

const page = () => {
  return (
    <main className="sm:px-16 px-6 flex flex-col justify-center items-center">
      <section className=" mt-20">
        <Hero
          title="Our works"
          heading="Bringing founder's ideas to life"
          image="/Decoration/GreenEllipse.svg"
          underLine="/Decoration/UnderlineGreen.svg"
          lastWordColor="#4DD78A"
        />
      </section>
      <section className=" mt-24">
        <Brief />
        <Feedbacks />
        <GetStarted />
      </section>
    </main>
  );
};

export default page;
