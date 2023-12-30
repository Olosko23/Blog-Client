import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 0,
      name: "John Doe",
      position: "CEO, Company ABC",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      id: 1,
      name: "Jane Smith",
      position: "CTO, Company XYZ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
    {
      id: 2,
      name: "John Smith",
      position: "CFO, Company IJK",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative max-w-7xl mx-auto overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
        What Our Users Say
      </h2>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Slider {...settings} className="slick-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center lg:text-left">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h1 className="font-semibold text-xl lg:text-2xl mb-2 text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-600 leading-6">{testimonial.content}</p>
                <p className="text-gray-500 mt-4">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
