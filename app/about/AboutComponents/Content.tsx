import Image from "next/image";

const Content = () => {
  return (
    <article>
      <ul className="xl:max-w-[85.375rem] w-full sm:px-16 px-6 flex flex-col gap-10 justify-center items-start mt-10">
        <li className="flex justify-center items-start gap-1">
          <Image src="/Decoration/star.svg" width={20} height={20} alt="star" />
          <p>
            We are more than an agency. We want to be a team within your team,
            sharing knowledge, and helping one another grow to drive growth and
            push new boundaries. We are decent at video games too.
          </p>
        </li>
        <li>
          We are decent at video games too. We are a young, dynamic team that
          motivate one another by pushing what&rsquo;s possible with UX and
          technology.
        </li>
        <li>
          We love integrating with product teams and balancing the fun yet
          chaotic agency energy that keeps us razor-sharp with the continuity of
          working on our client&rsquo;s long-standing platforms that ensure our
          processes never drop.
        </li>
      </ul>
    </article>
  );
};

export default Content;
