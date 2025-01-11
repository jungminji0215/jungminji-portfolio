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
      <main>
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
          <div className="about-me max-container">
            {/* 소개 */}
            <section className="about-me__description">
              <p className="about-me__description__message">
                성장과 도전의 가치를 알고 <br />
                배우고 부딪히며 꾸준히 발전하고있는 <br />
                정민지입니다.
              </p>
            </section>

            <section className="about-me__info_items">
              <div className="about-me__item">
                <div className="about-me__item__title">
                  <i className="fa-solid fa-user about-me__item__title__icon"></i>
                  <p>이름</p>
                </div>
                <p className="about-me__item__content">정민지</p>
              </div>

              <div className="about-me__item">
                <div className="about-me__item__title">
                  <i className="fa-regular fa-envelope about-me__item__title__icon"></i>
                  <p>이메일</p>
                </div>
                <p className="about-me__item__content">
                  wjdalswl0215@gmail.com
                </p>
              </div>

              <div className="about-me__item">
                <div className="about-me__item__title">
                  <i className="fa-regular fa-file about-me__item__title__icon"></i>
                  <p>이력서</p>
                </div>
                <a className="about-me__item__content"> 링크 </a>
              </div>

              <div className="about-me__item">
                <div className="about-me__item__title">
                  <i className="fa-brands fa-github about-me__item__title__icon"></i>
                  <p>깃허브</p>
                </div>
                <a
                  href="https://github.com/jungminji0215"
                  target="_blank"
                  className="about-me__item__content"
                >
                  https://github.com/jungminji0215
                </a>
              </div>

              <div className="about-me__item">
                <div className="about-me__item__title">
                  <i className="fa-solid fa-blog about-me__item__title__icon"></i>
                  <p>블로그</p>
                </div>
                <a
                  href="https://jungminji0215.tistory.com/"
                  target="_blank"
                  className="about-me__item__content"
                >
                  https://jungminji0215.tistory.com/
                </a>
              </div>
            </section>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2 className="title">Skills</h2>
          <p className="description">이런 기술을 사용해봤습니다.</p>
          {/* <div> */}
          <ul className="skills">
            <li className="skills__items">
              <h3 className="skill__item__title">Frontend</h3>
              <div className="skill__item__icons">
                <img
                  src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"
                  className="skill__item__icon"
                />
                <img
                  src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css&logoColor=white"
                  className="skill__item__icon"
                />
                <img
                  src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"
                  className="skill__item__icon"
                />
                <img
                  src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"
                  className="skill__item__icon"
                />
                <img
                  src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"
                  className="skill__item__icon"
                />
                <img
                  src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white"
                  className="skill__item__icon"
                />
              </div>
            </li>
            <li className="skills__items">
              <h3 className="skill__item__title">Backend</h3>
              <div className="skill_item__icons">
                <img
                  src="https://img.shields.io/badge/Spring-3DDC84?style=flat-square&logo=Spring&logoColor=white"
                  className="skill__item__icon"
                />
              </div>
            </li>
          </ul>
          {/* </div> */}
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

          <ul className="career">
            <li className="career__item">
              {/* TODO 회사 로고 */}
              {/* <img src="" alt="bomapp logo" /> */}
              <div className="career__item__year">
                <i className="bx bxs-calendar career__item__year__icon"></i>2020
                - 2021
              </div>
              <h3 className="career__company">보맵</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              </p>
            </li>

            <li className="career__item">
              {/* TODO 회사 로고 */}
              {/* <img src="" alt="bomapp logo" /> */}
              <div className="career__item__year">
                <i className="bx bxs-calendar career__item__year__icon"></i>2020
                - 2021
              </div>
              <h3 className="career__company">보맵</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              </p>
            </li>

            <li className="career__item">
              {/* TODO 회사 로고 */}
              {/* <img src="" alt="bomapp logo" /> */}
              <div className="career__item__year">
                <i className="bx bxs-calendar  career__item__year__icon"></i>
                2020 - 2021
              </div>
              <h3 className="career__company">슈퍼키친</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              </p>
            </li>
            <li className="career__item">
              {/* TODO 회사 로고 */}
              {/* <img src="" alt="bomapp logo" /> */}
              <div className="career__item__year">
                <i className="bx bxs-calendar career__item__year__icon"></i>2020
                - 2021
              </div>
              <h3 className="career__company">슈퍼키친</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
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
        {/* <aside>
          <a href="#" title="위로 가기">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </aside> */}
      </main>

      {/* Footer */}
      <footer>
        <p>Copyright 2024.Jung Minji.All rights rederved.</p>
      </footer>
    </>
  );
}

export default App;
