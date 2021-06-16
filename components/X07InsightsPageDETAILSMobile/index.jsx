import React from "react";
import Frame145 from "../Frame145";
import Group212 from "../Group212";
import "./X07InsightsPageDETAILSMobile.css";

function X07InsightsPageDETAILSMobile(props) {
  const {
    bbmp,
    rectangle76,
    text8,
    text9,
    image9,
    text10,
    spanText,
    spanText2,
    spanText3,
    frame145Props,
    group212Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x07-insights-page-details-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{bbmp}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <p className="text-3 typography-body-smalltext-14-regular">{text8}</p>
        <div className="text-4 valign-text-middle typographyheadlineh4-extrabold-24">{text9}</div>
        <img className="image-9" src={image9} />
        <p className="text-5 typographybody16-regular">{text10}</p>
        <p className="text-6 valign-text-middle overpass-semi-bold-white-16px2">
          <span>
            <span>{spanText}</span>
            <span className="span1 ">{spanText2}</span>
            <span>{spanText3}</span>
          </span>
        </p>
        <Group212
          group862Props={group212Props.group862Props}
          group87Props={group212Props.group87Props}
          group862Props2={group212Props.group862Props2}
          frame5Props={group212Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X07InsightsPageDETAILSMobile;
