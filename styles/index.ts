const styles = {
  boxWidth: "xl:max-w-[85.375rem] w-full",

  heading1:
    "font-ObjectSans text-PrimaryBlack xs:text-[34px] text-[30px] font-bold italic xs:leading-10 leading-8",
  subHeading:
    "text-[2.125rem] leading-10 text-PrimaryBlack font-semibold font-RocGrotesk",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween: "flex justify-between items-center",
  flexEnd: "flex flex-1 items-center justify-end",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
