import { Box } from "@chakra-ui/react";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

const Modal = ({ toggle, isOpen }) => {

    const { t } = useTranslation();
	function changeLang(lang) {
		i18next.changeLanguage(lang)
	}
    const [active, setActive] = useState(false);
    return (
        <>
            {/* <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                {isOpen ? <IoCloseOutline /> : <IoMenu />}
            </Box> */}

            <div className={`overlay ${active ? "active" : "deactive"}`}>

                <ul className="overlay-menu">
                    <li><a className="overlay-link" href="/">{t("header.home")}</a></li>
                    <li><a className="overlay-link" href="#about">{t("header.about")}</a></li>
                    <li><a className="overlay-link" href="#tours">{t("header.tours")}</a></li>
                    <li><a className="overlay-link" href="#contact">{t("header.contact")}</a></li>

                    <div className="overlay-langs">
                        <button onClick={e => { changeLang("uz") }} className="overlay-lang" to="/">UZ</button>
                        <button onClick={e => { changeLang("en") }} className="overlay-lang" to="/">ENG</button>
                        <button onClick={e => { changeLang("ru") }} className="overlay-lang" to="/">RU</button>

                    </div>
                    {/* <div className="icons">
                        <Link className="overlay-lang" target="_blank" rel="noreferrer" to="https://t.me/adkhamov_987"><FaTelegram /></Link>
                        <Link className="overlay-lang" target="_blank" rel="noreferrer" to="https://instagram.com/aurum_avia"><FaSquareInstagram /></Link>
                    </div> */}
                </ul>
            </div>
        </>
    )
}

export default Modal;