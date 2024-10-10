/* eslint-disable react/prop-types */
import { Box, Heading } from "@chakra-ui/react";
import i18next from "i18next";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Modal = ({ toggle, isOpen }) => {

    const { t } = useTranslation();

    function changeLang(lang) {
        i18next.changeLanguage(lang)
        toggle();
    }

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Scrollni cheklash
        } else {
            document.body.style.overflow = 'auto'; // Scrollni tiklash
        }

        // Komponent unmounted bo'lganda scrollni qayta tiklash
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <>
            <Box
                className={isOpen ? "block" : "hidden"}
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="rgba(0, 0, 0, 0.6)" // To'qroq rang
                backdropFilter="blur(10px)" // Blur effekti
                zIndex="10" // Modal orqasidagi fonni modal oldida ko'rsatish uchun
            ></Box>
            <Box className={isOpen ? "block" : "hidden"}>
                <Box
                    as="ul"
                    className="overlay-menu shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-5 bg-[white] fixed w-[65%] h-[450px] transition-all rounded-2xl z-[15] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <IoCloseOutline className="block ml-auto cursor-pointer size-7" onClick={toggle} size={30} />

                    <Heading as="li">
                        <Link
                            className={`${isActive("/") ? "text-red" : ""} inline-block rounded-xl w-full text-center hover:bg-[#f1f1f1] hover:text-red  py-4 transition-all font-medium`}
                            to="/"
                            onClick={toggle}
                        >
                            {t("header.home")}
                        </Link>
                    </Heading>
                    <Heading as="li">
                        <Link
                            className={`${isActive("/about") ? "text-red" : ""} inline-block rounded-xl w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`}
                            to="/about"
                            onClick={toggle}
                        >
                            {t("header.about")}
                        </Link>
                    </Heading>
                    <Heading as="li">
                        <Link
                            className={`${isActive("/ginseng") ? "text-red" : ""} inline-block rounded-xl w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`}
                            to="/ginseng"
                            onClick={toggle}
                        >
                            {t("header.ginseng")}
                        </Link>
                    </Heading>
                    <Heading as="li">
                        <Link
                            className={`${isActive("/contact") ? "text-red" : ""} inline-block rounded-xl w-full text-center hover:bg-[#f1f1f1] hover:text-red py-4 transition-all font-medium`}
                            to="/contact"
                            onClick={toggle}
                        >
                            {t("header.contact")}
                        </Link>
                    </Heading>

                    <Box className="overlay-langs block text-center pt-5">
                        <button onClick={() => changeLang("uz")} className="hover:text-red hover:bg-[#f1f1f1] rounded-xl transition-all px-3 py-2 text-sm font-semibold">UZ</button>
                        <button onClick={() => changeLang("en")} className="hover:text-red hover:bg-[#f1f1f1] rounded-xl mx-4 transition-all px-3 py-2 text-sm font-semibold">ENG</button>
                        <button onClick={() => (changeLang("ru"))} className="hover:text-red hover:bg-[#f1f1f1] rounded-xl transition-all px-3 py-2 text-sm font-semibold">RU</button>
                    </Box>

                    <div className="w-full hover:text-red transition-all flex items-center justify-center m-auto mt-10">
                        <Link className="flex items-center" to="tel:+998907355544">
                            <FaPhone size={20} className="mr-3" />
                            90 735 55 44
                        </Link>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Modal;