import { useRef } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const handleTurnPage = (event) => {
    const target = event.currentTarget;

    const dataPage = target.dataset.page;
    const index = target.dataset.index;

    const pageTurn = document.getElementById(dataPage);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };

  // 클릭시 contact me 로 이동
  // const pages = document.querySelectorAll(".book-page.page-right");
  // const contactMeBtn = document.querySelector(".btn.contact-me");

  // contactMeBtn.onClick = () => {
  //   pages.forEach((page, index) => {
  //     setTimeout(() => {
  //       page.classList.add("turn");

  //       setTimeout(() => {
  //         page.style.zIndex = 20 + index;
  //       }, 500);
  //     }, (index + 1) * 200 + 100);
  //   });
  // };

  // 페이지 엘리먼트를 참조할 배열을 생성
  const pagesRef = useRef([]);

  const handleContactMeClick = () => {
    pagesRef.current.forEach((page, index) => {
      console.log("===================================");
      console.log("page : ", page);
      console.log("index : ", index);

      setTimeout(() => {
        page.classList.add("turn");

        setTimeout(() => {
          page.style.zIndex = 20 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  };

  const handleMovePage = (pageIndex) => {
    console.log("페이지 이동합니다");

    pagesRef.current.forEach((page, index) => {
      console.log("---------------");
      console.log("page : ", page);
      console.log("index : ", index);

      if (index >= pageIndex) return;

      setTimeout(() => {
        page.classList.add("turn");

        setTimeout(() => {
          page.style.zIndex = 20 + index;
        }, 500);
      }, (index + 1) * 200 + 100);
    });
  };

  // const handleMovePage = () => {
  //   const targetIndex = 3; // 이동하려는 페이지 (3페이지의 index는 2)

  //   pagesRef.current.forEach((page, index) => {
  //     if (index <= targetIndex) {
  //       // 목표 페이지 이하의 페이지만 넘김
  //       setTimeout(() => {
  //         page.classList.add("turn"); // 페이지 넘김

  //         setTimeout(() => {
  //           page.style.zIndex = 20 + index; // z-index 설정
  //         }, 500); // 애니메이션 후 z-index 업데이트
  //       }, (index + 1) * 200 + 100); // 페이지별 지연 시간 설정
  //     } else {
  //       // 목표 페이지 이후의 페이지는 초기 상태로 유지
  //       page.classList.remove("turn");
  //       page.style.zIndex = 20 - index; // 뒤로 넘긴 페이지의 z-index 정리
  //     }
  //   });
  // };

  // TODO 앞으로 넘기기
  // let totalPages = pagesRef.current.length;
  // let pageNumber = 0;

  // const reverseIndex = () => {
  //   pageNumber--;

  //   if (pageNumber < 0) {
  //     pageNumber = totalPages - 1;
  //   }
  // };

  // opening animation

  const coverRight = useRef();
  const pageLeft = useRef();

  useEffect(() => {
    let totalPages = pagesRef.current.length;
    let pageNumber = 0;

    const reverseIndex = () => {
      pageNumber--;

      if (pageNumber < 0) {
        pageNumber = totalPages - 1;
      }
    };

    // cover right animation
    setTimeout(() => {
      if (coverRight.current) {
        coverRight.current.classList.add("turn");
      }
    }, 2100);

    setTimeout(() => {
      if (coverRight.current) {
        coverRight.current.style.zIndex = -1;
      }
    }, 2800);

    setTimeout(() => {
      if (pageLeft.current) {
        pageLeft.current.style.zIndex = 20;
      }
    }, 3200);

    pagesRef.current.forEach((_, index) => {
      setTimeout(() => {
        reverseIndex();
        pagesRef.current[pageNumber].classList.remove("turn");

        setTimeout(() => {
          reverseIndex();
          pagesRef.current[pageNumber].style.zIndex = 10 + index;
        }, 500);
      }, (index + 1) * 200 + 2100);
    });

    // 컴포넌트 언마운트 시 타이머 정리
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <div className="cover cover-left"></div>
      <div className="cover cover-right " ref={coverRight}></div>

      <div className="book">
        {/* page 0 */}
        {/* <div className="book-page page-left" ref={pageLeft}>
          <div className="profile-page">
            <img src="../../public/먼작귀.jpeg" alt="" />
            <h1>정민지</h1>
            <h3>프론트엔드 개발자</h3>

            <div className="social-media">
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bx-mail-send"></i>
              </a>
            </div>
            <p>
              안녕하세요 프론트엔드 개발자 정민지입니다. 안녕하세요 프론트엔드
              개발자 정민지입니다. 안녕하세요 프론트엔드 개발자 정민지입니다.
              안녕하세요 프론트엔드 개발자 정민지입니다. 안녕하세요 프론트엔드
              개발자 정민지입니다. 안녕하세요 프론트엔드 개발자 정민지입니다.
            </p>

            <div className="btn-box">
              <a href="#" className="btn">
                버튼1
              </a>
              <a
                href="#"
                className="btn contact-me"
                onClick={handleContactMeClick}
              >
                버튼2
              </a>
            </div>
          </div>
        </div> */}

        {/* page 1 & 2 */}
        <div
          className="book-page page-right turn"
          id="turn-1"
          ref={(el) => (pagesRef.current[0] = el)}
        >
          {/* page 1(work experience) */}
          <div className="page-front">
            {/* <div className="category page-1">포스트잇</div> */}
            <h1 className="title">Work Experience</h1>

            {/* <div className="workeduc-box">
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>

              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>

              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>
            </div> */}

            <span className="number-page">1</span>

            {/* next-button */}
            <span
              className="nextprev-btn"
              data-page="turn-1"
              onClick={handleTurnPage}
              data-index={1}
            >
              <i className="bx bx-chevron-right"></i>
            </span>
          </div>

          {/* page 2(education) */}
          <div className="page-back">
            <h1 className="title">education</h1>

            {/* <div className="workeduc-box">
              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>

              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>

              <div className="workeduc-content">
                <span className="year">
                  <i className="bx bxs-calendar"></i>2020 - 2021
                </span>
                <h3>웹 개발자 회사</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil iste voluptas voluptate sed. Delectus cupiditate,
                  tempora, fugit iste deserunt amet perspiciatis obcaecati quam
                  distinctio optio ex aperiam accusantium magni qui?
                </p>
              </div>
            </div> */}

            <span className="number-page">2</span>

            {/* prev-button */}
            <span
              className="nextprev-btn back"
              data-page="turn-1"
              onClick={handleTurnPage}
              data-index={2}
            >
              <i className="bx bx-chevron-left"></i>{" "}
            </span>
          </div>
        </div>

        {/* page 3 & 4 */}
        <div
          className="book-page page-right turn"
          id="turn-2"
          ref={(el) => (pagesRef.current[1] = el)}
        >
          {/* page 3 (my service) */}
          <div className="page-front">
            <div className="category page-3" onClick={() => handleMovePage(1)}>
              포스트잇
            </div>
            <h1 className="title">My Services</h1>
            {/* <div className="services-box">
              <div className="services-content">
                <i className="bx bx-code"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae autem dolores suscipit omnis cupiditate explicabo
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>

              <div className="services-content">
                <i className="bx bx-code"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae autem dolores suscipit omnis cupiditate explicabo
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>

              <div className="services-content">
                <i className="bx bx-code"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae autem dolores suscipit omnis cupiditate explicabo
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>

              <div className="services-content">
                <i className="bx bx-code"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae autem dolores suscipit omnis cupiditate explicabo
                </p>
                <a href="#" className="btn">
                  Read More
                </a>
              </div>
            </div> */}

            <span className="number-page">3</span>
            {/* next button */}
            <span
              className="nextprev-btn"
              data-page="turn-2"
              onClick={handleTurnPage}
              data-index={3}
            >
              <i className="bx bx-chevron-right"></i>
            </span>
          </div>

          {/* page 4 (my skills) */}
          <div className="page-back">
            <h1 className="title">My Skills</h1>
            {/* 
            <div className="skills-box">
              <div className="skills-content">
                <h3>Front-End</h3>
                <div className="content">
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                </div>
              </div>

              <div className="skills-content">
                <h3>Front-End</h3>
                <div className="content">
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                </div>
              </div>

              <div className="skills-content">
                <h3>Front-End</h3>
                <div className="content">
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                  <span>
                    <i className="bx bxl-html5"></i>HTML
                  </span>
                </div>
              </div>
            </div> */}

            <span className="number-page">4</span>

            {/* prev-button */}
            <span
              className="nextprev-btn back"
              data-page="turn-2"
              onClick={handleTurnPage}
              data-index={4}
            >
              <i className="bx bx-chevron-left"></i>
            </span>
          </div>
        </div>

        {/* page 5 & 6 */}
        <div
          className="book-page page-right turn"
          id="turn-3"
          ref={(el) => (pagesRef.current[2] = el)}
        >
          {/* page 5 (latest project or my portfolio) */}

          <div className="page-front">
            <div className="category page-5" onClick={() => handleMovePage(2)}>
              포스트잇
            </div>

            <h1 className="title">Latest Project</h1>

            {/* <div className="portfolio-box">
              <div className="img-box">
                <img src="../../public/먼작귀.jpeg" alt="" />
              </div>

              <div className="info-box">
                <div className="info-title">
                  <h3>Project Name</h3>
                  <a href="#">
                    Live Preview<i className="bx bx-link-external"></i>
                  </a>
                </div>
                <p>Texh Used : </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>

              <div className="btn-box">
                <a href="#" className="btn">
                  Source Code
                </a>
                <a href="#" className="btn">
                  More Project
                </a>
              </div>
            </div> */}

            <span className="number-page">5</span>
            {/* next button */}
            <span
              className="nextprev-btn"
              data-page="turn-3"
              onClick={handleTurnPage}
              data-index={5}
            >
              <i className="bx bx-chevron-right"></i>
            </span>
          </div>

          {/* page 6 (contact me) */}
          <div className="page-back">
            <h1 className="title">contact me</h1>

            {/* <div className="contact-box">
              <form action="#">
                <input
                  type="text"
                  className="field"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  placeholder="Email Address"
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="field"
                  placeholder="글을 작성하세요."
                  required
                ></textarea>
                <input type="submit" className="btn" value={"보내기"} />
              </form>
            </div> */}

            <span className="number-page">6</span>

            {/* prev-button */}
            <span
              className="nextprev-btn back"
              data-page="turn-3"
              onClick={handleTurnPage}
              data-index={6}
            >
              <i className="bx bx-chevron-left"></i>
            </span>

            {/* <a href="#" className="back-profile">
              <p>Profile</p>
              <i className="bx bxs-user"></i>
            </a> */}
          </div>
        </div>

        {/* page 7 & 8 */}
        <div
          className="book-page page-right turn"
          id="turn-4"
          ref={(el) => (pagesRef.current[3] = el)}
        >
          {/* page 7 (latest project or my portfolio) */}

          <div className="page-front">
            <div className="category page-8" onClick={() => handleMovePage(3)}>
              포스트잇
            </div>

            <h1 className="title">Latest Project</h1>

            {/* <div className="portfolio-box">
              <div className="img-box">
                <img src="../../public/먼작귀.jpeg" alt="" />
              </div>

              <div className="info-box">
                <div className="info-title">
                  <h3>Project Name</h3>
                  <a href="#">
                    Live Preview<i className="bx bx-link-external"></i>
                  </a>
                </div>
                <p>Texh Used : </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>

              <div className="btn-box">
                <a href="#" className="btn">
                  Source Code
                </a>
                <a href="#" className="btn">
                  More Project
                </a>
              </div>
            </div> */}

            <span className="number-page">7</span>
            {/* next button */}
            <span
              className="nextprev-btn"
              data-page="turn-4"
              onClick={handleTurnPage}
              data-index={6}
            >
              <i className="bx bx-chevron-right"></i>
            </span>
          </div>

          {/* page 8 (contact me) */}
          <div className="page-back">
            <h1 className="title">contact me</h1>

            {/* <div className="contact-box">
              <form action="#">
                <input
                  type="text"
                  className="field"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  placeholder="Email Address"
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="field"
                  placeholder="글을 작성하세요."
                  required
                ></textarea>
                <input type="submit" className="btn" value={"보내기"} />
              </form>
            </div> */}

            <span className="number-page">8</span>

            {/* prev-button */}
            <span
              className="nextprev-btn back"
              data-page="turn-4"
              onClick={handleTurnPage}
              data-index={8}
            >
              <i className="bx bx-chevron-left"></i>
            </span>

            {/* <a href="#" className="back-profile">
              <p>Profile</p>
              <i className="bx bxs-user"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
