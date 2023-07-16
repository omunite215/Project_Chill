import OptionButton from "./OptionButton";
import SubmitButton from "./SubmitButton";

const Form = () => {
  return (
    <form className="w-full flex flex-col justify-center items-center">
      <section className=" flex flex-col gap-12">
        <article className="flex flex-col gap-6">
          <label
            htmlFor="Service"
            className=" text-2xl font-ObjectSans font-medium text-PrimaryBlack text-left"
          >
            Service
          </label>
          <section className="flex sm:flex-row flex-col justify-start items-center gap-8">
            <OptionButton title="Web Design" />
            <OptionButton title="App Design" />
            <OptionButton title="Development" />
            <OptionButton title="Branding" />
          </section>
        </article>
        <article className="flex flex-col gap-6">
          <label
            htmlFor="Service"
            className=" text-2xl font-ObjectSans font-medium text-PrimaryBlack text-left"
          >
            Budget in USD
          </label>
          <section className="flex sm:flex-row flex-col justify-start items-center gap-8">
            <OptionButton title="5K - 10K" />
            <OptionButton title="10K - 50K" />
            <OptionButton title="More than 50K" />
          </section>
        </article>
        <section className="flex sm:flex-row flex-col justify-start items-center gap-8">
          <label htmlFor="firstName">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              className="bg-transparent placeholder:text-PrimaryBlack"
            />
          </label>
          <label htmlFor="lastName">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              className="bg-transparent placeholder:text-PrimaryBlack"
            />
          </label>
        </section>
        <section className="flex sm:flex-row flex-col justify-start items-center gap-8">
          <label htmlFor="mobileNumber">
            <input
              type="number"
              name="mobileNumber"
              id="mobileNumber"
              placeholder="Mobile number"
              className="bg-transparent placeholder:text-PrimaryBlack"
            />
          </label>
          <label htmlFor="emailAddress">
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Email address"
              className="bg-transparent placeholder:text-PrimaryBlack"
            />
          </label>
        </section>
        <label htmlFor="message">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message"
            className="w-full bg-transparent placeholder:text-PrimaryBlack"
          />
        </label>
        <SubmitButton />
      </section>
    </form>
  );
};

export default Form;
