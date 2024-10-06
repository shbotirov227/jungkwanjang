import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.avif";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { Button, Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Modal from "../../components/Modal/Modal";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import i18next from "i18next";

const Header = () => {

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [active, setActive] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}

    return (
        <div className="Header py-5 sticky shadow-[0_0_7px_#0003]">
            <div className="container flex items-center justify-between">
                <Link className="" to="/"><img src={Logo} alt="logo" /></Link>

                <div className="flex w-[30%] items-center justify-between">
                    <Link className={`${isActive("/") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent]  hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/">{t("header.home")}</Link>
                    <Link className={`${isActive("/about") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/about">{t("header.about")}</Link>
                    <Link className={`${isActive("/ginseng") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/ginseng">{t("header.ginseng")}</Link>
                    <Link className={`${isActive("/contact") ? "text-red border-b-2 border-b-red" : ""} hover:text-red border-b-2 border-b-[transparent] hover:border-b-2 hover:border-red py-2 px-4 transition-all font-medium`} to="/contact">{t("header.contact")}</Link>
                </div>

                <div className="flex gap-6 w-[18%] items-center justify-end">
                    <Select
                        className="inline-flex outline-none w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold cursor-pointer text-gray-900 shadow-sm ring-1 ring-outset ring-[#9C2824] hover:bg-gray-50"
                        maxWidth="70px"
                        value={language}
                        onChange={handleLanguageChange}
                        icon="null"
                    >
                        <option value="en"><Button oncClick={() => changeLang("en")} value="en">EN</Button></option>
                        <option value="ru"><Button oncClick={() => changeLang("ru")} value="ru">RU</Button></option>
                        <option value="uz"><Button oncClick={() => changeLang("uz")} value="uz">UZ</Button></option>
                    </Select>
                    <div className="flex items center justify-between ml-5">
                        <Link className="flex items-center" href="tel:+998 90 735 55 44">
                            <FaPhone size={20} className="mr-3" />
                            90 735 55 44
                        </Link>
                    </div>
                </div>

            </div>
            <Button onClick={() => setActive(!active)} display={{ base: "block", md: "none" }}>
                {isOpen ? <IoCloseOutline /> : <IoMenu />}
            </Button>
            {/* <button onClick={() => setActive(!active)} className="btn-burger">
                {active ? <IoClose color="#fff" /> : <IoMenu color="#fff" />}
            </button> */}
            <Modal toggle={toggle} isOpen={isOpen} />
        </div>
    );
};

export default Header;