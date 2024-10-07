import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.avif";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { Button, Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Modal from "../../components/Modal/Modal";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import i18n from "i18next";

const Header = () => {

    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const toggle = () => setIsOpen(!isOpen);

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    // max-[1280px]:w-[90%] max-[1420px]:w-[90%]

    return (
        <div className="Header sticky py-5 z-50 top-0 bg-[white] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <div className="container flex items-center justify-between">
                <Link className="" to="/"><img src={Logo} alt="logo" /></Link>

                <div className="flex items-center justify-between max-lg:hidden">
                    <Link className={`${isActive("/") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent]  hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/">{t("header.home")}</Link>
                    <Link className={`${isActive("/about") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/about">{t("header.about")}</Link>
                    <Link className={`${isActive("/ginseng") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/ginseng">{t("header.ginseng")}</Link>
                    <Link className={`${isActive("/contact") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/contact">{t("header.contact")}</Link>
                </div>

                <div className="w-[30%] flex gap-6 items-center justify-end max-lg:hidden">
                    <Select
                        className="inline-flex outline-none w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold cursor-pointer text-gray-900 shadow-sm ring-1 ring-outset ring-[#9C2824] hover:bg-gray-50"
                        maxWidth="70px"
                        value={language}
                        onChange={handleLanguageChange}
                        icon="null"
                    >
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </Select>
                    <div className="flex items center justify-between ml-5">
                        <Link className="flex items-center" href="tel:+998 90 735 55 44">
                            <FaPhone size={20} className="mr-3" />
                            90 735 55 44
                        </Link>
                    </div>
                </div>

                <Button onClick={toggle} className="max-lg:block hidden" display={{ base: "block", md: "none" }}>
                    {isOpen ? <IoCloseOutline size={30} /> : <IoMenu size={30} />}
                </Button>
            </div>

            {isOpen ? (
                <Modal toggle={toggle} isOpen={isOpen} />
            ) : undefined}

        </div>
    );
};

export default Header;