import {
    createHashRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "./App";
import Error from "./Content/Error/Error";

import Home from './Content/Home/Home';
import Projects from "./Content/Projects/Projects";
import AboutUs from './Content/About/AboutUs';
import Contact from './Content/contact/Contact';
import Programming from "./Content/Programming/Programming";
import ProgrammingIndex from "./Content/Programming/ProgrammingIndex";
import VR from "./Content/Programming/VR";

import Bus from "./utils/Bus";

window.flash = (message, type = "success") =>
    Bus.emit("flash", { message, type });

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="Development" element={<Programming/>}>
                <Route index element={<ProgrammingIndex/>} />
                <Route path="VR" element={<VR/>} />
            </Route>
            <Route path="Design" element={<Projects/>}/>
            <Route path="About" element={<AboutUs/>}/>
            <Route path="Contact" element={<Contact/>}/>

            <Route
                path="*"
                loader={() => {
                    throw { status: 404, message: "Page Not Found" };
                }}
            />

        </Route>

    )
)