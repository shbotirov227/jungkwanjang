import { useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Button, Heading, Image, Input, Link, Text, Textarea } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import Img from "@/assets/contact-img.avif";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";

const mapSrc = "https://yandex.uz/map-widget/v1/-/CDTDqZpD";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", surname: "", phone: "", message: "" });
    const { t } = useTranslation();
    const inputRef = useRef(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const notify = () => toast.success("Xabar yuborildi !", {
        position: "top-center",
        delay: 2000
    });

    const isValidForm = () => {
        if (!formData.name || !formData.surname || !formData.phone || !formData.message) {
            toast.error("Barcha maydonlarni to'ldiring!");
            return false;
        }
        if (!/^\+\d{12}$/.test(formData.phone)) {
            toast.error("Telefon raqami noto'g'ri!");
            return false;
        }
        return true;
    };

    // fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidForm()) return;

        fetch("https://jungkwanjang-backend.vercel.app/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    toast.success("Xabar yuborildi!", {
                        position: "top-center",
                        delay: 2000
                    });
                    setFormData({ name: "", surname: "", phone: "", message: "" });
                } else {
                    toast.error("Xabar yuborishda xato!", {
                        position: "top-center",
                        delay: 2000
                    });
                }
            })
            .catch((error) => toast.error("Xato:", error, {
                position: "top-center",
                delay: 2000
            }));
    };

    return (
        <div className="container">
            <ToastContainer />
            <Box className="flex flex-wrap justify-center gap-10 py-12">
                <Box
                    className="max-2xl:w-[50%] max-xl:w-[70%] max-md:w-[85%] w-[50%] text-center rounded-lg p-6 border border-[#c4c4c4] shadow-lg"
                    w={{ base: "100%", md: "60%", lg: "40%" }}
                >
                    <Heading as="h3" className="mb-4 font-semibold text-lg">{t("contact.heading")}</Heading>
                    <Text as="p" className=" m-auto text-xs text-center">
                        {t("contact.description")}
                    </Text>
                    <div className="p-6 bg-gray-100 max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex gap-4 flex-col md:flex-row">
                                <Input
                                    required
                                    className="w-full"
                                    placeholder={t("contact.firstName")}
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    onChange={handleChange}
                                />
                                <Input
                                    required
                                    className="w-full"
                                    placeholder={t("contact.lastName")}
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    onChange={handleChange}
                                />
                            </div>

                            <InputMask
                                ref={inputRef}
                                mask="+\9\9\8 (99) 999-99-99"
                                onChange={handleChange}
                            >
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        required
                                        className="w-full"
                                        type="tel"
                                        placeholder={t("contact.phoneNumber")}
                                        variant="outline"
                                        border="1.5px solid #c4c4c4"
                                        transition="all ease 0.3s"
                                        _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                        borderRadius="7px"
                                        padding="10px 20px"
                                    />
                                )}
                            </InputMask>

                            <Textarea
                                required
                                className="w-full"
                                placeholder={t("contact.messagePlaceholder")}
                                outline="none"
                                border="1.5px solid #c4c4c4"
                                transition="all ease 0.3s"
                                _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                rows={7}
                                borderRadius="7px"
                                padding="15px 20px"
                                onChange={handleChange}
                            />

                            <Button
                                onClick={notify}
                                onSubmit={(e) => handleSubmit(e)}
                                disabled={!formData.name || !formData.surname || !formData.phone || !formData.message}
                                className="w-full py-4 rounded-md text-[white] bg-red hover:bg-[#611a17] transition-all"
                                type="submit"
                            >
                                {t("contact.submitButton")}
                            </Button>
                        </form>
                    </div>
                </Box>

                <Box
                    className="max-2xl:w-[35%] max-xl:w-[60%] max-md:w-[85%] bg-[#444444] p-12 pt-7 rounded-lg"
                    w={{ base: "100%", md: "60%", lg: "30%" }}
                >
                    <Box className="mb-2 border-b border-[white]">
                        <Heading as="h4" className="text-[white] text-[28px] font-semibold">Official distributor of</Heading>
                        <Image className="mt-6 mb-10" src={Img} alt="contact-img" />
                        <Text as="p" display="flex" alignItems="center" fontSize="smaller" color="white" mb="15">
                            <FaLocationDot size={15} className="mr-3" />
                            <Link target="_blank" href="https://yandex.uz/maps/-/CDTDqZpD">
                                {t("footer.link1")}
                            </Link>
                        </Text>
                        <Text as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb="15">
                            <FaPhone size={15} className="mr-3" />
                            <span className="mr-3">{t("footer.link2")}</span>
                            <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="tel:+998 90 735 55 44">+998 90 735 55 44</Link>
                        </Text>

                        <Text as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb={20}>
                            <IoMdMail size={15} className="mr-3" />
                            <span className="mr-3">{t("footer.link3")}</span>
                            <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="mailto:timur@goldmoon.biz">timur@goldmoon.biz</Link>
                        </Text>
                    </Box>
                    <Box className="mb-6 pb-6 border-b border-[white]">
                        <Heading as="h4" className="text-[white] my-6 font-semibold text-md">{t("contact.openingHours")}</Heading>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={15} fontWeight="400">{t("contact.monFri")}</Text>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={15} fontWeight="400">{t("contact.saturday")}</Text>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={5} fontWeight="400">{t("contact.sunday")}</Text>
                    </Box>

                    <Box className="w-[60%]">
                        <Heading as="h4" width="100%" fontWeight="700" mb="20" color="white">{t("footer.title2")}</Heading>
                        <Box className="flex items-center justify-between">
                            <Link href="https://t.me/tmrtgl" target="_blank"><SiTelegram fill="white" size={25} /></Link>
                            <Link href="https://www.instagram.com/jungkwanjanguzb" target="_blank"><SiInstagram fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><SiWhatsapp fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><FaXTwitter fill="white" size={25} /></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div className="container w-[84%] max-2xl:w-[90%] mb-20 h-[500px]">
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                    allow="true"
                    className="border border-[#c4c4c4] rounded-xl drop-shadow-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
