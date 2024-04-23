import React from "react";
import MainTitle from "../../common/MainTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    img: "/assets/img1.jpg",
    description: `  The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.`,
    name: "Adam Steve",
    position: "Event Manager, British",
  },

  {
    id: 2,
    img: "/assets/img1.jpg",
    description: `  The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.`,
    name: "Joseph William",
    position: "Software Developer, Google",
  },

  {
    id: 3,
    img: "/assets/img1.jpg",
    description: `  The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.`,
    name: "Maluka Kamil",
    position: "Business Consultant, Zoom",
  },
];

const Testimonials = () => {
  return (
    <div className="wrapper mt-20 ">
      <div>
        <MainTitle title="What Our Users Say About Us" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonialData?.map(({ id, img, description, name, position }) => (
          <SingleTestimonial
            key={id}
            src={img}
            description={description}
            name={name}
            position={position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
