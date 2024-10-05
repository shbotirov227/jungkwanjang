import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.avif";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="Header py-5 sticky shadow-[0_0_7px_#0003]">
            <div className="container flex items-center justify-between">
                <Link className="" to="/"><img src={Logo} alt="logo" /></Link>

                <div className="flex w-[30%] items-center justify-between">
                    <Link className={`${isActive("/") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent]  hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/">{t("home")}</Link>
                    <Link className={`${isActive("/about") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/about">{t("about")}</Link>
                    <Link className={`${isActive("/ginseng") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/ginseng">{t("ginseng")}</Link>
                    <Link className={`${isActive("/contact") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/contact">{t("contact")}</Link>
                </div>

                <div className="flex gap-6 w-[18%] items-center justify-end">
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

            </div>
        </div>
    );
};

export default Header;