import React from "react";
import { Container, Col, Carousel, Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// const data = []

function CircularGoals() {
  const [colorCard, setcolorCard] = useState();

  const color = `${colorCard}`;
  function strokeColor() {
    if (color === "#FFBCC2") {
      return "#FF8888";
    }
    if (color === "#CCF0D7") {
      return "#34A69A";
    }
    if (color === "#FCF3A1") {
      return "#E5D119";
    }
    if (color === "#B1A8FF") {
      return "#A258FF";
    }
    if (color === "#FF8888") {
      return "#FF586A";
    }
  }
  console.log(strokeColor);
  const percentage = 80;

  return (
    <>
      <div className="bigContainer d-flex flex-row">
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <a href="#">
              <CircularProgressbar
                background
                strokeWidth={5}
                backgroundPadding={0}
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: { stroke: `${strokeColor()}` },
                  trail: { stroke: "none" },
                  background: { fill: `${color}` },
                  text: {
                    fill: "#342D50",
                    fontSize: "25px",
                  },
                }}
              />
            </a>
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
        <Container className="CircularCard d-flex flex-column align-items-center ">
          <div className="CircularCard" id="CircularCard" style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              background
              strokeWidth={5}
              backgroundPadding={0}
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: { stroke: `${strokeColor()}` },
                trail: { stroke: "none" },
                background: { fill: `${color}` },
                text: {
                  fill: "#342D50",
                  fontSize: "25px",
                },
              }}
            />
          </div>
          <p className="CardTitle mt-4" style={{ fontSize: "1.60rem" }}>
            Feed Fish
          </p>
        </Container>
      </div>

      {/* <div>
        <p>tes warna</p>
        <div className="ColorPicker">
          <Button
            style={{ backgroundColor: "#FFBCC2" }}
            onClick={() => setcolorCard("#FFBCC2")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FCF3A1" }}
            onClick={() => setcolorCard("#FCF3A1")}
          ></Button>
          <Button
            style={{ backgroundColor: "#B1A8FF" }}
            onClick={() => setcolorCard("#B1A8FF")}
          ></Button>
          <Button
            style={{ backgroundColor: "#FF8888" }}
            onClick={() => setcolorCard("#FF8888")}
          ></Button>
          <Button
            style={{ backgroundColor: "#CCF0D7" }}
            onClick={() => setcolorCard("#CCF0D7")}
          ></Button>
        </div>
      </div> */}
    </>
  );
}

export default CircularGoals;
