import "./index.css";

function GmatPrep() {
  return (
    <div className="prep-main" id="gmatprep">
      <a href="#gmatprep" className="gma">
        We help You Accelerate Your GMAT Prep in 3 ways
      </a>
      <div className="ccc">
        <div className="card-g">
          <h1 className="head-g">CONNECT</h1>
          <p className="para-g">
            Our Coaches will help you create a plan and help you with a highly
            effective learning path that’s unique to your goals and Target GMAT
            Score.
          </p>
        </div>
        <div className="card-g">
          <h1 className="head-g">CONSUME</h1>
          <p className="para-g">
            Concepts, Sessions, and More - Depending on the path that's best for
            you, you begin your learning journey through our “Learn Paths”
            optimized for scoring and success.
          </p>
        </div>
        <div className="card-g">
          <h1 className="head-g">CLARIFY</h1>
          <p className="para-g">
            Confidently clarify concepts and deep-dive into harder questions
            with our coaches. For On-Demand Prep, you can buy credits to gain
            personal access to Coaches too.
          </p>
        </div>
      </div>

      <div className="our">
        <h1 className="our-h">
          Our Students Have Seen Results By Applying Our
          <span className="magic">"Magic Method"</span>
        </h1>
        <p className="our-p">
          The most effective techniques revealed ever. That too, with a personal
          touch. Carefully designed & battle-tested On-Demand GMAT Mastery
          Program. Best-in-class platform with access to a highly interactive
          community. Access to Coaches & guides to help you address queries.
        </p>
        <div className="connect-ours">
          <h1 className="ours-h">01. Connect</h1>
          <p className="ours-p">
            Our Coaches will help you create an 'Optimized Learning Path' plan
            and help you with a highly effective learning path that’s unique to
            your goals and Target GMAT Score.
          </p>
          <ul>
            <li>GMAT Planner + Target Score Session</li>
            <li>Access to Cheatsheets</li>
            <li>Weekly Goal Progress & Analytics</li>
            <li> Review Session with Facilitator</li>
          </ul>
        </div>
        <div className="connect-ours">
          <h1 className="ours-h">02. Consume - Concepts + Techniques</h1>
          <p className="ours-p">
            Concepts, Sessions, and More - Depending on the path that's best for
            you, you begin your learning journey through our 'Learn Paths'
            optimized for scoring and success.
          </p>
          <ul>
            <li>Compute™ LIVE - 40+ Hours of GMAT Quant</li>
            <li>Compre™ LIVE - 40+ Hours of GMAT Verbal</li>
            <li>80+ Hours of On-Demand Recordings</li>
          </ul>
        </div>
        <div className="connect-ours">
          <h1 className="ours-h">03. Correct</h1>
          <p className="ours-p">
            We cover more than 55 sectional tests (1200+ Questions) to ensure
            you got it right from the start.
          </p>
          <ul>
            <li>
              {" "}
              Clear video explanation of 'How' to solve questions effectively
              and with incredible accuracy.
            </li>
            <li>
              Scores to visualize your performance and path corrections to
              increase your learning efficiency and effectiveness.
            </li>
            <li>Weekly Goal Progress & Analytics</li>
            <li> Review Session with Facilitator</li>
          </ul>
        </div>
        <div className="connect-ours">
          <h1 className="ours-h">04. Crack The GMAT - Mock The Mat</h1>
          <p className="ours-p">
            The best way to crack the GMAT in one go is to score well in the
            Mock Tests. They mirror your actual performance in the GMAT. We have
            5 Full-length tests to get you to the score improvement you need.
          </p>
          <ul>
            <li>
              5 Full Length Mock tests that mirror with accuracy your real-world
              GMAT score.
            </li>
            <li>
              GMAT Club CATs + Question Bank - Quant and Verbal to ensure you
              are moving ahead in the right direction and achieving your target
              score.
            </li>
            <li>Weekly Goal Progress & Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default GmatPrep;
