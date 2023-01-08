import "./testimonial.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:"images/toyface4.jpg",
      icon: "images/twitter.png",
      desc:
        "I have had the pleasure of working with Chisom on several projects and have always been impressed with her technical skills and problem-solving abilities. she is a valuable asset to any team and I would highly recommend her for any software development project.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
      "images/toyface5.jpg",
      icon: "images/youtube.png",
      desc:
        "As a team lead, I have relied on Chisom to take on complex tasks and deliver high-quality results. she has consistently exceeded my expectations and have a great ability to think creatively and find innovative solutions to challenging problems.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "images/toyface1.jpg",
      icon: "images/linkedin.png",
      desc:
        "I have worked with many software developers in my career, but Chisom stands out as one of the best. She is a true professional and always go above and beyond to ensure that projects are completed on time and to the highest standards. I highly recommend her for any software development role.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="images/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              "{d.desc}"
            </div>
            <div className="bottom">
              {/* <h3>{d.name}</h3>
              <h4>{d.title}</h4> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

