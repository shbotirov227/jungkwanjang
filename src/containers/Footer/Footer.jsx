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
            <Box className="flex justify-between max-lg:grid container">
                <Box className="w-[50%] max-sm: max-md: max-lg:w-full max-lg:text-center max-lg:mb-10 max-xl:w-[45%]">
                    <Image className="w-[50%] max-lg:m-auto max-lg:mb-10 mb-8" src={Img} alt="footer-logo" />

                    <Text className="max-xl:w-[80%] max-lg:w-[100%] max-lg:grid-cols-2" as="h3" w="60%" fontSize="smaller" color="white">
                        {t("footer.text1")}
                        <Text as="p" className="mt-5">
                            {t("footer.text2")}
                        </Text>
                    </Text>
                </Box>

                <div className="max-lg:flex max-md:flex-wrap w-full flex justify-around">
                    <Box className="w-[45%] max-sm: max-md:text-center max-md:m-auto max-lg:w-[100%] max-xl:w-[55%]">
                        <Heading as="h4" fontWeight="700" mb="20" color="white">{t("footer.title1")}</Heading>
                        <Text className="max-sm:justify-center max-sm:items-center max-md:justify-center" as="h3" display="flex" alignItems="center" fontSize="smaller" color="white" mb="15">
                            <FaLocationDot size={15} className="mr-3" />
                            <Link target="_blank" href="https://yandex.uz/maps/-/CDTDqZpD">
                                {t("footer.link1")}
                            </Link>
                        </Text>
                        <Text className="max-sm:justify-center max-sm:items-center max-md:justify-center" as="p" display="flex" alignItems="center" mb="15" fontWeight="600" fontSize="smaller" color="white">
                            <FaPhone size={15} className="mr-3" />
                            <span className="mr-3">{t("footer.link2")}</span>
                            <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="tel:+998 90 735 55 44"> +998 90 735 55 44</Link>
                        </Text>

                        <Text className="max-sm:justify-center max-sm:items-center max-md:justify-center" as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb={30}>
                            <IoMdMail size={15} className="mr-3" />
                            <span className="mr-3">{t("footer.link3")}</span>
                            <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="mailto:timur@goldmoon.biz"> timur@goldmoon.biz</Link>
                        </Text>


                        <Box className="w-[50%] max-md:mr-auto max-md:mb-10 max-md:mt-10 max-lg:text-center max-lg:ml-auto max-lg:mt-10">
                            <Heading as="h4" fontWeight="700" mb="20" color="white">{t("footer.title2")}</Heading>
                            <Box className="flex items-center justify-between">
                                <Link href="https://t.me/tmrtgl" target="_blank"><SiTelegram fill="white" size={25} /></Link>
                                <Link href="https://www.instagram.com/jungkwanjanguzb" target="_blank"><SiInstagram fill="white" size={25} /></Link>
                                <Link href="/" target="_blank"><SiWhatsapp fill="white" size={25} /></Link>
                                <Link href="/" target="_blank"><FaXTwitter fill="white" size={25} /></Link>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="flex flex-col items-start w-[40%] max-sm: max-md: max-md:w-[80%] max-lg:w-[60%] max-xl:">
                        <Heading className="max-md:mx-auto" as="h4" fontWeight="700" mb="20" color="white">{t("footer.title3")}</Heading>
                        <Link className="max-md:text-center max-md:block max-md:m-auto font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/" fontSize="smaller" color="white">{t("footer.link4")}</Link>
                        <Link className="max-md:text-center max-md:block max-md:m-auto font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/contact" fontSize="smaller" color="white">{t("footer.link5")}</Link>
                        <Link className="max-md:text-center max-md:block max-md:m-auto font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/about" fontSize="smaller" color="white">{t("footer.link6")}</Link>
                        <Link className="max-md:text-center max-md:block max-md:m-auto font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/ginseng" fontSize="smaller" color="white">{t("footer.link7")}</Link>
                    </Box>
                </div>

            </Box>

        </div>
    );
};

export default Footer;
