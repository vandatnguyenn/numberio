import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
const images = [
  {
    src: "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
    alt: "Image 1",
  },
  {
    src: "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
    alt: "Image 2",
  },
  {
    src: "http://cdn.voh.com.vn/voh//thumbnail/2022/07/31/cau-do-toan-hoc-voh-1.jpg",
    alt: "Image 3",
  },
];

const Banner = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel
        animation="slide"
        autoPlay={true}
        interval={6000}
        timeout={300}
        cycleNavigation={true}
        sx={{ width: "100%" }}
      >
        {images.map((image) => (
          <Paper
            key={image.src}
            sx={{
              height: "70vh",
              width: "100%",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
            {/* <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1>{image.title}</h1>
                <p>{image.description}</p>
            </div> */}
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
