import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

       <p className="para">
          I am a Full Stack Developer specialising in the design and development of
          scalable, secure, and high-performance web applications using React.js,
          Next.js, TypeScript, Node.js, Express.js, and MongoDB.
          <br />
          <br />
          I focus on building robust solutions with clean architecture, maintainable
          code, responsive interfaces, secure APIs, and seamless integrations,
          while adhering to modern development practices.
          <br />
          <br />
          My experience spans real-time applications, authentication systems,
          third-party integrations, Redis, Socket.io, Stripe, OpenAI, and
          Tailwind CSS, with a strong emphasis on performance, security, and
          reliability.
          <br />
          <br />
          Driven by continuous learning, I am further developing my expertise in
          Cloud and DevOps, with a focus on AWS, Docker, CI/CD, and modern
          deployment practices.
        </p>

      </div>
    </div>
  );
};

export default About;