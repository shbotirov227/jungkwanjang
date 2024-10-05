import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import Img from "@/assets/footer-img.webp";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";

const Footer = () => {
    return (
        <div className="bg-[#545559] py-14">
            <Box className="flex justify-between w-[90%] container">
                <Box className="w-[50%]">
                    <Image className="w-[50%] mb-8" src={Img} alt="footer-logo" />
                    <Text as="p" w="60%" fontSize="smaller" color="white">
                        World`s renowned, Korea Ginseng Corporation(KGC), with its subsidiary lines JungKwanJang, KORESELECT, GoodBASE, Donginbi is the #1 ginseng brand, with over 120 years of horticultural and scientific expertise.

                        <Text as="p" className="mt-5">
                            Official distributor of "JUNG KWAN JANG" products in the Republic of Uzbekistan
                        </Text>
                    </Text>
                </Box>

                <Box className="w-[45%]">
                    <Heading as="h4" fontWeight="700" mb="20" color="white">CONTACT US</Heading>
                    <Text as="p" display="flex" alignItems="center" fontSize="smaller" color="white" mb="15">
                        <FaLocationDot size={15} className="mr-3" />
                        <Link target="_blank" href="https://yandex.uz/maps/-/CDTDqZpD">
                            Chekhov Street 7а, Tashkent, Uzbekistan
                        </Link>
                    </Text>
                    <Text as="p" display="flex" alignItems="center" mb="15" fontWeight="600" fontSize="smaller" color="white">
                        <FaPhone size={15} className="mr-3" />
                        <span className="mr-3">Phone:</span>
                        <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="tel:+998 90 735 55 44"> +998 90 735 55 44</Link>
                    </Text>

                    <Text as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb={30}>
                        <IoMdMail size={15} className="mr-3" />
                        <span className="mr-3">Email:</span>
                        <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="mailto:timur@goldmoon.biz"> timur@goldmoon.biz</Link>
                    </Text>


                    <Box className="w-[40%]">
                        <Heading as="h4" fontWeight="700" mb="20" color="white">Stay Connected</Heading>
                        <Box className="flex items-center justify-between">
                            <Link href="https://t.me/timurtgl" target="_blank"><SiTelegram fill="white" size={25} /></Link>
                            <Link href="https://www.instagram.com/jungkwanjanguzb" target="_blank"><SiInstagram fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><SiWhatsapp fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><FaXTwitter fill="white" size={25} /></Link>
                        </Box>
                    </Box>
                </Box>

                <Box className="flex flex-col items-start w-[30%]">
                    <Heading as="h4" fontWeight="700" mb="20" color="white">CUSTOMER SUPPORT</Heading>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/" fontSize="smaller" color="white">Products</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/contact" fontSize="smaller" color="white">Contact Us</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/about" fontSize="smaller" color="white">About Us</Link>
                    <Link className="font-normal mb-2 leading-6 inline-block transition-all border-b border-b-[transparent] hover:border-b-[white]" href="/ginseng" fontSize="smaller" color="white">Ginseng</Link>
                </Box>

            </Box>

        </div>
    );
};

export default Footer;
