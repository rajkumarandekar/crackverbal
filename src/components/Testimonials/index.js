import React from "react";
import "./index.css";
import ReviewCard from "../ReviewCard";

const Testimonials = () => {
  const cardData = [
    {
      name: "John Doe",
      username: "Score 730",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794244/b01614b4-bd81-4bdb-862d-cbadbbe12bbe_IMG_0963_201_zf1bog.png",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794796/buss_logo_vsuhmg.jpg",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "Jan 2, 2023",
    },

    {
      name: "Jane Smith",
      username: "Score 760",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794320/b7c11299-e18a-4813-a15c-2874ee260280_IMG_1691_z8mccw.jpg",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794848/logo-905d98a3-a9a0-40f3-a0c4-9abf7f396156_ii8sqx.png",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "Feb 14, 2023",
    },
    {
      name: "Alice Johnson",
      username: "Score 770",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794365/LOdnCV5qbsRgsnq90Ymlk4Jo_mrn0dl.jpg",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794919/university-of-michigan_vogn85.jpg",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "Mar 3, 2023",
    },
    {
      name: "Bob Williams",
      username: "Score 750",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794441/Yia1YdgJuqUQsQY4tLnoDsOZ_tdoem8.jpg",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794958/Schulich_Digital_Horiz_08.2020_fkiukr.png",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "Apr 30, 2023",
    },
    {
      name: "Eva Davis",
      username: "Score 760",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794482/7eccb8e6-952a-43a4-9ab8-4c09167131a0_Reelcovers_20_281000_20_C3_97_201000_20px_29_20_281_29_vq2bd0.png",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694795007/University_of_Cambridge-Logo.wine_jrtjrf.png",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "May 13, 2023",
    },
    {
      name: "Jane Smith",
      username: "Score 780",
      imgSrc: "https://media.giphy.com/media/s87bdDMOhTCMM/giphy.gif",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694795052/1_ktnw6k.jpg",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "June 2, 2023",
    },
    {
      name: "Jane Smith",
      username: "Score 730",
      imgSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694794533/OrDaOkpDvSPd7FYTnoMwRjsW_jeitik.gif",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694795093/foster_330x130_lj8lax.png",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "July 9, 2023",
    },
    {
      name: "James Cameron",
      username: "Score 700",
      imgSrc: "https://media.giphy.com/media/6pWLRs9lwYI0sHXi6u/giphy.gif",
      logoSrc:
        "https://res.cloudinary.com/dofzu13gt/image/upload/v1694795147/NUS_logo_full-horizontal_w5gusg.jpg",
      rating: 5,
      review:
        "This would have saved me so much time a few months ago! The actionable items are on point!",
      date: "Sep 2, 2023",
    },
  ];

  return (
    <>
      <div className="rev-r" id="testimonials">
        <a href="/reviews" className="rev-h">
          Recent Reviews of Our Alumni
        </a>{" "}
      </div>
      <div className="vid-rev">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ev739wXDMWg?si=iqiBnEa1If5kJJBQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DlM4gqClios?si=uuHo67Yo6Aduv9XD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
      <div className="main-review">
        {cardData.map((data, index) => (
          <ReviewCard key={index} data={data} />
        ))}
        <div className="btn-con">
          <button type="button" className="btn-t">
            Read More Testimonials
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
