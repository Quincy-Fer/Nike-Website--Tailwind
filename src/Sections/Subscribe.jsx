import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-md font-palanquin ">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="">
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <div><Button label="Sign Up" fullWidth /></div>
      </div>
    </section>
  );
};

export default Subscribe;
