import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div>
          <h1>
            <a href="#">Jungminji</a>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* Home */}
        <section id="home">
          <p>안녕하세요, 프론트엔드 개발자 정민지입니다.</p>
          <a href="#about-me">
            <i
              className="bx bx-chevrons-down bx-flip-horizontal bx-tada"
              style={{ color: "#5db86b" }}
            ></i>
          </a>
        </section>

        {/* About Me */}
        <section id="about-me">
          <h2>About Me</h2>
          <div>
            {/* 소개 */}
            <section>
              <p>
                안녕하세요 저는 이러이러한 개발자입니다. 이러이러한 개발자가
                되고싶어요
              </p>
            </section>

            <section>
              <a href="https://github.com/jungminji0215" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://jungminji0215.tistory.com/"
                target="_blank"
                className="test"
              >
                <i
                  className="fa-solid fa-blog"
                  style={{ color: " #dd7631" }}
                ></i>
              </a>

              <div>
                <i
                  className="fa-regular fa-envelope"
                  style={{ color: "#d06c71" }}
                ></i>
              </div>

              <div>
                <i
                  className="fa-regular fa-file"
                  style={{ color: "#989a98" }}
                ></i>
              </div>
            </section>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <div>
            <ul>
              <li>
                <i className="fa-brands fa-html5"></i>
                <p>Frontend</p>
                <p>HTML, CSS, Javascript, Typescript, React, Next.js</p>
              </li>
              <li>
                <i className="fa-solid fa-server"></i>
                <p>Backend</p>
                <p>SpringBoot, Node.js</p>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>포트폴리오 사이트</li>
            <li>기술 면접 사이트</li>
          </ul>
        </section>

        {/* Career */}
        <section id="career">
          <h2>Career</h2>
          <ul className="workeduc-box">
            <li className="workeduc-content">
              {/* TODO 회사 로고 */}
              {/* <img src="" alt="bomapp logo" /> */}
              <span className="year">
                <i className="bx bxs-calendar"></i>2020 - 2021
              </span>
              <h3>웹 개발자 회사</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                iste voluptas voluptate sed. Delectus cupiditate, tempora, fugit
                iste deserunt amet perspiciatis obcaecati quam distinctio optio
                ex aperiam accusantium magni qui?
              </p>
            </li>

            <li className="workeduc-content">
              <span className="year">
                <i className="bx bxs-calendar"></i>2020 - 2021
              </span>
              <h3>웹 개발자 회사</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                iste voluptas voluptate sed. Delectus cupiditate, tempora, fugit
                iste deserunt amet perspiciatis obcaecati quam distinctio optio
                ex aperiam accusantium magni qui?
              </p>
            </li>

            <li className="workeduc-content">
              <span className="year">
                <i className="bx bxs-calendar"></i>2020 - 2021
              </span>
              <h3>웹 개발자 회사</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                iste voluptas voluptate sed. Delectus cupiditate, tempora, fugit
                iste deserunt amet perspiciatis obcaecati quam distinctio optio
                ex aperiam accusantium magni qui?
              </p>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section id="education">
          <h2>Education</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          nobis eaque unde. Temporibus id dolorum atque fugiat eaque, vel
          itaque. Suscipit blanditiis consectetur nulla voluptatum, nemo
          provident cumque ea veniam?
        </section>

        {/* Contact Me */}
        <section id="contact-me">
          <h2>Contact Me</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          nobis eaque unde. Temporibus id dolorum atque fugiat eaque, vel
          itaque. Suscipit blanditiis consectetur nulla voluptatum, nemo
          provident cumque ea veniam?
        </section>

        {/* Top Scroll */}
        <aside>
          <a href="#" title="위로 가기">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </aside>
      </main>

      {/* Footer */}
      <footer>
        <p>Copyright 2024.Jung Minji.All rights rederved.</p>
      </footer>
    </>
  );
}

export default App;
