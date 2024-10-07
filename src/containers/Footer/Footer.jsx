import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import Img from "@/assets/footer-img.webp";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="bg-[#545559] py-14">
            <Box className="flex justify-between container">
                <Box className="w-[50%]">
                    <Image className="w-[50%] mb-8" src={Img} alt="footer-logo" />

                    <Text as="p" w="60%" fontSize="smaller" color="white">
                        {t("footer.text1")}
                        <Text as="p" className="mt-5">
                            {t("footer.text2")}
                        </Text>
                    </Text>
                </Box>

                <Box className="w-[45%]">
                    <Heading as="h4" fontWeight="700" mb="20" color="white">{t("footer.title1")}</Heading>
                    <Text as="p" display="flex" alignItems="center" fontSize="smaller" color="white" mb="15">
                        <FaLocationDot size={15} className="mr-3" />
                        <Link target="_blank" href="https://yandex.uz/maps/-/CDTDqZpD">
                            {t("footer.link1")}
                        </Link>
                    </Text>
                    <Text as="p" display="flex" alignItems="center" mb="15" fontWeight="600" fontSize="smaller" color="white">
                        <FaPhone size={15} className="mr-3" />
                        <span className="mr-3">{t("footer.link2")}</span>
                        <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="tel:+998 90 735 55 44"> +998 90 735 55 44</Link>
                    </Text>

                    <Text as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb={30}>
                        <IoMdMail size={15} className="mr-3" />
                        <span className="mr-3">{t("footer.link3")}</span>
                        <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="mailto:timur@goldmoon.biz"> timur@goldmoon.biz</Link>
                    </Text>


                    <Box className="w-[40%]">
                        <Heading as="h4" fontWeight="700" mb="20" color="white">{t("footer.title2")}</Heading>
                        <Box className="flex items-center justify-between">
                            <Link href="https://t.me/timurtgl" target="_blank"><SiTelegram fill="white" size={25} /></Link>
                            <Link href="https://www.instagram.com/jungkwanjanguzb" target="_blank"><SiInstagram fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><SiWhatsapp fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><FaXTwitter fill="white" size={25} /></Link>
                        </Box>
                    </Box>
                </Box>

                <Box className="flex flex-col items-start w-[30%]">
                    <Heading as="h4" fontWeight="700" mb="20" color="white">{t("footer.title3")}</Heading>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/" fontSize="smaller" color="white">{t("footer.link4")}</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/contact" fontSize="smaller" color="white">{t("footer.link5")}</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/about" fontSize="smaller" color="white">{t("footer.link6")}</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/ginseng" fontSize="smaller" color="white">{t("footer.link7")}</Link>
                </Box>

            </Box>

        </div>
    );
};

export default Footer;
