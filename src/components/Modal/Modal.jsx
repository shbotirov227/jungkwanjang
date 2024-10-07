/* eslint-disable react/prop-types */
import { Box, Heading } from "@chakra-ui/react";
import i18next from "i18next";
// import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Modal = ({ toggle, isOpen }) => {

    const { t } = useTranslation();

    function changeLang(lang) {
        i18next.changeLanguage(lang)
    }

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <Box className={isOpen ? "block" : "hidden"}>
            <Box as="ul" className="overlay-menu shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 bg-[white] absolute w-[80%] h-[350px] transition-all rounded-2xl z-[15] left-0 right-0 top-[20rem] bottom-0 m-auto">
                <Heading as="li"><Link className={`${isActive("/") ? "text-red" : ""} inline-block w-full text-center hover:bg-[#f1f1f1] hover:text-red  py-4 transition-all font-medium`} to="/">{t("header.home")}</Link></Heading>
                <Heading as="li"><Link className={`${isActive("/about") ? "text-red" : ""} inline-block w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`} to="/about">{t("header.about")}</Link></Heading>
                <Heading as="li"><Link className={`${isActive("/ginseng") ? "text-red" : ""} inline-block w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`} to="/ginseng">{t("header.ginseng")}</Link></Heading>
                <Heading as="li"><Link className={`${isActive("/contact") ? "text-red" : ""} inline-block w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`} to="/contact">{t("header.contact")}</Link></Heading>

                <Box className="overlay-langs block text-center pt-5">
                    <button onClick={() => changeLang("uz")} className="px-3 py-2 text-sm font-semibold">UZ</button>
                    <button onClick={() => changeLang("en")} className="px-3 py-2 text-sm font-semibold">ENG</button>
                    <button onClick={() => changeLang("ru")} className="px-3 py-2 text-sm font-semibold">RU</button>
                </Box>
            </Box>
        </Box>
    )
}

export default Modal;