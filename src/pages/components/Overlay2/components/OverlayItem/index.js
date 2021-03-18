import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import "./_index.scss";

export default function OverlayItem2({
  handleChangeOverlayClick,
  title,
  description,
  excerpt,
  bulletPoints,
  image1,
  image2,
  image3,
  image4,
  overlayId,
  link,
  handleClosingClick,
  className,
  animationRefLtR,
  animationRefLtR2,
  animationRefRtL,
}) {
  const ImageQuery = useStaticQuery(graphql`
    {
      leftPointer: file(
        relativePath: {
          eq: "images/Mobile/BUTTON OVERLAY - left arrow (prev).png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightPointer: file(
        relativePath: {
          eq: "images/Mobile/BUTTON OVERLAY - right arrow (next).png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      X: file(
        relativePath: {
          eq: "images/Mobile/BUTTON OVERLAY - X (close) lines.png"
        }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const renderBorderClass = () => {
    switch (overlayId) {
      case 0:
        return "foodieDiary";
      case 1:
        return "gameDeals";
      case 2:
        return "gameApp";
    }
  };
  useEffect(() => {
    if (title === "Game Apps" || title === "Game Deals") {
      console.log("hiding");
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [title]);

  const handleDelayUnmountingClick = (direction) => {
    if (direction === "ltr") {
      animationRefLtR.current.play();
      animationRefLtR.current.finished.then(() => {
        animationRefLtR.current.seek(0);
        overlayId - 1 < 0
          ? handleClosingClick()
          : handleChangeOverlayClick(overlayId - 1);
      });
    } else if (direction === "rtl") {
      animationRefRtL.current.play();
      animationRefRtL.current.finished.then(() => {
        animationRefRtL.current.seek(0);
        overlayId + 1 > 2
          ? handleClosingClick()
          : handleChangeOverlayClick(overlayId + 1);
      });
    } else {
      animationRefLtR2.current.play();
      animationRefLtR2.current.finished.then(() => {
        animationRefLtR2.current.seek(0);
        overlayId - 1 < 0
          ? handleClosingClick()
          : handleChangeOverlayClick(overlayId - 1);
      });
    }
  };

  return (
    <div className={` OverlayItem  ${className}`}>
      <div className="OverlayItem_Navbar">
        <div className="OverlayItem_arrows">
          {/* prev button */}
          <div
            onClick={() => {
              if (overlayId === 1) {
                handleDelayUnmountingClick("ltr");
              } else {
                handleDelayUnmountingClick("ltr2");
              }
            }}
            className="OverlayItem_button"
          >
            <Image fluid={ImageQuery.leftPointer.childImageSharp.fluid}></Image>
          </div>
          {/* next button */}
          <div
            onClick={() => {
              handleDelayUnmountingClick("rtl");
            }}
            className="OverlayItem_button"
          >
            <Image
              fluid={ImageQuery.rightPointer.childImageSharp.fluid}
            ></Image>
          </div>
        </div>
        {/* close button */}
        <div className="OverlayItem_close">
          <div
            onClick={() => {
              handleClosingClick();
            }}
            className="OverlayItem_button"
          >
            <Image fluid={ImageQuery.X.childImageSharp.fluid}></Image>
          </div>
        </div>
      </div>
      <div className="OverlayItem_main">
        <div className="OverlayItem_title h2">{title}</div>
        <div className="OverlayItem_description">{description}</div>
        <div className="OverlayItem_link">
          <a className="" target="_blank" href={link}>
            <button className="OverlayItem_visit">Visit Site</button>
          </a>
        </div>
        <div className="OverlayItem_excerpt p">{excerpt}</div>
        <div className="OverlayItem_image1">
          {image1 && <Image fluid={image1.childImageSharp.fluid}></Image>}
        </div>
        <div className="OverlayItem_bulletPoints h3">
          {bulletPoints.split("•").map((e, i) => {
            return (
              <div key={i} className="h4">
                • {e}
              </div>
            );
          })}
        </div>
        {image2 && (
          <div className="OverlayItem_image2">
            <div className={`OverlayItem_border-${renderBorderClass()}`}>
              <Image fluid={image2.childImageSharp.fluid}></Image>
            </div>
          </div>
        )}
        {image3 && (
          <div className="OverlayItem_image3">
            <div className={`OverlayItem_border-${renderBorderClass()}-blue`}>
              <Image fluid={image3.childImageSharp.fluid}></Image>
            </div>
          </div>
        )}
        {image4 && (
          <div className="OverlayItem_image4">
            <div className={`OverlayItem_border-${renderBorderClass()}-black`}>
              <Image fluid={image4.childImageSharp.fluid}></Image>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
