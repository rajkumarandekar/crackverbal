import "./index.css";

function Subscribe() {
  return (
    <div className="subscribe-main" id="subscribe">
      <div className="sub">
        <h1 className="sub-h1">Subscribe To Our Newsletter</h1>
        <p className="paraa1">
          Where We Share Weekly Insights On All Things Carrer & GET A FREE EBOOK
          IN YOUR MAIL
        </p>
        <p className="email-p">Email Address :</p>
        <input type="email" className="email-input" placeholder="Email here" />
        <button className="btn-b">Subscribe</button>
        <p className="by-para">
          By subscribing, you agree to ours
          <span className="terms"> Terms of Service</span> and
          <span className="terms"> privacy policy</span>
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
