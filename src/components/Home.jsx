import React from "react";
import { withRouter } from "react-router";
import { datadogRum } from "@datadog/browser-rum";

const Home = () => {
  return (
    <div
      id="home"
      className="page"
      onClick={datadogRum.addTiming("ra_318_onclick")}
      onScroll={datadogRum.addTiming("ra_318_onscroll")}
      onLoad={datadogRum.addTiming("ra_318_onload")}
      onChange={datadogRum.addTiming("ra_318_onchange")}
      onError={datadogRum.addTiming("ra_318_onerror")}
      onBlur={datadogRum.addTiming("ra_318_onblur")}
      onFocus={datadogRum.addTiming("ra_318_onfocus")}>
      <div id="homeContent">
        <div className="page-title">Home Page</div>
        <h3> Welcome! </h3>
      </div>
    </div>
  );
};

export default withRouter(Home);
