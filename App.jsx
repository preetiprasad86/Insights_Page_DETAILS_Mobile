import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X07InsightsPageDETAILSMobile from "./components/X07InsightsPageDETAILSMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|07-insights-page-details-mobile)">
          <X07InsightsPageDETAILSMobile {...x07InsightsPageDETAILSMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-23@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-22@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-11@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-60@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-218@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const group32Data = {
    place: "Contact",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-49@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-213@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-214@2x.svg",
    text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text20: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group212Data = {
    group862Props: group8622Data,
    group87Props: group87Data,
    group862Props2: group32Data,
    frame5Props: frame5Data,
};

const x07InsightsPageDETAILSMobileData = {
    bbmp: "BBMP",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76@2x.png",
    text8: "The Bruhat Bengaluru Mahanagara Palike or the BBMP is the authority managing the innumerable infrastructure and civic amenities in Greater Bengaluru. Therefore, getting clearance and approval from the BBMP before implementing the building construction is a crucial step. The BBMP authorities have the power to demolish the building already constructed or levy a huge price as a penalty for illegal construction under its jurisdiction.   However, you can be guaranteed that by following the right procedure with the submission of appropriate documents and paying the prescribed fee, the verification will be done by the concerned BBMP authorities and you will have all your documents approved and clearance within a span of 30 days.",
    text9: "How to submit building plan approval application?",
    image9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-9-1@2x.png",
    text10: <>The application forms for approval can be downloaded from the official website: ___ and submitted online or offline.<br />The choice of forms and the authorized officer to sanction the application is dependent on the size of the building plan. The different forms are attached for your perusal to give you better clarity on the terms and details asked in the set documents.<br />By duly filling in the suitable application form according to your building size and submitting the following original documents along will enable a hassle-free process</>,
    spanText: "Latest BBMP Khata Certificate",
    spanText2: <> <br /></>,
    spanText3: <>Latest Khata Extract<br />Latest Tax Paid Receipt</>,
    frame145Props: frame145Data,
    group212Props: group212Data,
};

