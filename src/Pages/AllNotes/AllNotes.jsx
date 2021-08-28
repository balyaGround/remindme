import React from "react";
// import { Container, Button, Carousel } from "react-bootstrap";
import pinAllNote from "../../assets/images/pinAllNote.png";
import PinCard from "../../assets/images/PinCard.png";
import "../AllNotes/AllNotes.scss";

const AllNotesCreate = (noteData) => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="allNote__container">
        <h1>My All Notes</h1>
        <div className="allNote__top">
          <img src={pinAllNote} alt="" />
          <p>Pinned Notes</p>
        </div>
        {/* <Carousel fade> */}
        {/* <Carousel.Item> */}
        <div className="allNote__card">
          <div className="allNote__title">
            {noteData ? <h5>{noteData.title}</h5> : null}
            <img src={PinCard} alt="" />
          </div>
          <div className="allNote__time">
            <p>11 Juni 2021</p>
          </div>
          <div className="allNote__content">
            <p>
              As designer that understands how to<br></br>continually bring value to the business while<br></br> also advocating for the user is a golden egg<br></br> for organizations.
            </p>
          </div>
        </div>
        {/* </Carousel.Item> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default AllNotesCreate;
