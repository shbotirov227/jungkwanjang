import React from "react";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Ginseng = React.lazy(() => import("./Ginseng"));

export {
    Home,
    About,
    Contact,
    Ginseng,
};
