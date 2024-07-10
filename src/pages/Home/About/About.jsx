import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-10">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" border-4 border-white absolute right-10 top-1/2 w-3/5 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-5 space-y-7">
          <h3 className="text-3xl font-bold text-orange-500">About us</h3>
          <h1 className="text-5xl font-bold w-[380px]">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
