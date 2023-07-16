import Image from "next/image";

const FeedbackCard = () => {
  return (
    <section className=" flex flex-col justify-start items-start gap-6">
      <p className=" max-w-sm">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
        dolor pulvinar lectus mauris. Enim gravida tincidunt eget at odio
        fermentum. Feugiat eget in vestibulum placerat id at suspendisse. Risus
        vestibulum rhoncus iaculis ut in commodo in. At vitae a amet mollis.”
      </p>
      <article className="flex justify-start items-center gap-4">
        <Image
          src="/Images/Profile.svg"
          height={40}
          width={40}
          alt="profile"
          className=" object-contain"
        />
        <section className="flex justify-start items-start gap-1 flex-col font-ObjectSans text-black leading-6">
          <h4 className="text-base">Maharram Hasanli</h4>
          <p className="text-sm">Ceo & founder of nothing</p>
        </section>
      </article>
    </section>
  );
};

export default FeedbackCard;
