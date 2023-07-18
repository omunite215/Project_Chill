import SubmitButton from "./SubmitButton";

const Form = () => {
  return (
    <form className="w-full flex flex-col justify-center items-center sm:px-16 px-6">
      <section className=" flex flex-col gap-12 sm:justify-start justify-center sm:items-start items-center">
        <article className="flex flex-col gap-6">
          <label
            htmlFor="Service"
            className=" text-2xl font-ObjectSans font-medium text-PrimaryBlack text-left"
          >
            Service
          </label>
          <section className="flex sm:flex-row flex-col justify-start items-center gap-8">
            <article>
              <input type="checkbox" id="webDesign" className="peer hidden" />
              <label
                htmlFor="webDesign"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-hover:bg-PrimaryPink peer-checked:bg-PrimaryPink cursor-pointer"
              >
                Web Design
              </label>
            </article>
            <article>
              <input type="checkbox" id="appDesign" className="peer hidden" />
              <label
                htmlFor="appDesign"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-hover:bg-PrimaryGreen peer-checked:bg-PrimaryGreen cursor-pointer"
              >
                App Design
              </label>
            </article>
            <article>
              <input type="checkbox" id="development" className="peer hidden" />
              <label
                htmlFor="development"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-hover:bg-PrimaryBlue peer-checked:bg-PrimaryBlue cursor-pointer"
              >
                Development
              </label>
            </article>
            <article>
              <input type="checkbox" id="branding" className="peer hidden" />
              <label
                htmlFor="branding"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-hover:bg-PrimaryRed peer-checked:bg-PrimaryRed cursor-pointer"
              >
                Branding
              </label>
            </article>
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
            <article>
              <input
                type="radio"
                id="basic"
                name="budget"
                className="peer hidden"
              />
              <label
                htmlFor="basic"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-checked:bg-PrimaryPink cursor-pointer"
              >
                5K - 10K
              </label>
            </article>
            <article>
              <input
                type="radio"
                id="popular"
                name="budget"
                className="peer hidden"
              />
              <label
                htmlFor="popular"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-checked:bg-PrimaryGreen cursor-pointer"
              >
                10K - 50K
              </label>
            </article>
            <article>
              <input
                type="radio"
                id="premium"
                name="budget"
                className="peer hidden"
              />
              <label
                htmlFor="premium"
                className="select-none transition-colors duration-200 ease-in-out border border-PrimaryBlack py-[0.88rem] px-[2.88rem] text-PrimaryBlack font-ObjectSans text-sm leading-5 peer-checked:text-white peer-checked:bg-PrimaryBlue cursor-pointer"
              >
                More than 50K
              </label>
            </article>
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
