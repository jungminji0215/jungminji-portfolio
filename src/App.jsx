import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header__logo">
          <h1 className="header__logo__title">
            <a href="#">Jungminji</a>
          </h1>
        </div>
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__menu__item active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#about-me">
                About Me
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#career">
                Career
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#education">
                Education
              </a>
            </li>
            <li>
              <a className="header__menu__item" href="#contact-me">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="max-container">
        {/* Home */}
        <section id="home" className="section">
          <p className="home__title">
            안녕하세요! <br /> 프론트엔드 개발자{" "}
            <strong className="home__title--strong">정민지</strong>입니다.
          </p>
          <div className="home__scroll">
            {/* <span>스크롤</span> */}
            <a href="#about-me">
              <i className="bx bx-chevrons-down bx-flip-horizontal bx-tada home__scroll__icon"></i>
            </a>
          </div>
        </section>

        {/* About Me */}
        <section id="about-me" className="section">
          <h2 className="title">About Me</h2>
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
        <section id="skills" className="section">
          <h2 className="title">Skills</h2>
          <p className="description">이런 기술을 사용해봤습니다.</p>
          <div>
            <ul className="skills">
              <li className="skill">
                {/* <i className="fa-brands fa-html5 skill__icon"></i> */}
                <h3 className="skill__title">Frontend</h3>
                <p>
                  <i className="fa-brands fa-html5 skill__icon"></i>, CSS,
                  Javascript, Typescript, React, Next.js
                </p>
              </li>
              <li className="skill">
                {/* <i className="fa-solid fa-server skill__icon"></i> */}
                <h3 className="skill__title">Backend</h3>
                <p>SpringBoot, Node.js</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="title">Projects</h2>
          <p className="description">프로젝트 입니다.</p>
          <ul>
            <li>포트폴리오 사이트</li>
            <li>기술 면접 사이트</li>
          </ul>
        </section>

        {/* Career */}
        <section id="career" className="section">
          <h2 className="title">Career</h2>
          <p className="description">이런 일을 해왔습니다.</p>
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
        <section id="education" className="section">
          <h2 className="title">Education</h2>
          <p className="description">이러한 교육을 졸업, 수료 하였습니다.</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          nobis eaque unde. Temporibus id dolorum atque fugiat eaque, vel
          itaque. Suscipit blanditiis consectetur nulla voluptatum, nemo
          provident cumque ea veniam?
        </section>

        {/* Contact Me */}
        <section id="contact-me" className="section">
          <h2 className="title">Contact Me</h2>
          <p className="description">이메일로 연락 가능합니다.</p>
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
