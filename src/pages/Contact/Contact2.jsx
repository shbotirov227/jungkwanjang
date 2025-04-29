/* eslint-disable no-nonoctal-decimal-escape */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import InputMask from 'react-input-mask';
import {
    Box, Button,
    // FormControl, FormHelperText, FormLabel,
    Heading, Image, Input, Link, Text, Textarea
} from "@chakra-ui/react";
// import { Form } from "react-router-dom";
import Img from "@/assets/contact-img.avif"
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { toast } from "react-toastify";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const chatId = import.meta.env.CHAT_ID;

    //     fetch(`http://localhost:5000/send-message`, {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             chat_id: chatId,
    //             formData
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.ok) {
    //                 toast.success("Xabar yuborildi!", {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });
    //                 setFormData({ firstName: "", lastName: "", phone: "", message: "" });
    //             } else {
    //                 toast.error("Xabar yuborishda xato!", {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });
    //             }
    //         })
    //         .catch((error) => console.error("Error:", error));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, phone, message } = formData;
        
        // Check if all fields are filled
        if (!firstName || !lastName || !phone || !message) {
            toast.error("Iltimos, barcha maydonlarni to'ldiring!", {
                position: "top-center",
                autoClose: 2000,
                delay: 200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            });
            return;
        }

        if (phone.replace(/[^0-9]/g, "").length !== 12) {
            toast.error("Iltimos, telefon raqamini to'liq kiriting!");
            return;
        }

        const chatId = import.meta.env.VITE_CHAT_ID;

        fetch(`http://localhost:5000/send-message`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, formData }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success("Xabar yuborildi!", {
                        position: "top-center",
                        autoClose: 2000,
                        delay: 200
                    });
                    setFormData({ firstName: "", lastName: "", phone: "", message: "" });
                } else {
                    toast.error("Xabar yuborishda xato!", {
                        position: "top-center",
                        autoClose: 2000,
                        delay: 200
                    });
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("Server bilan ulanishda xatolik yuz berdi!", {
                    position: "top-center",
                    autoClose: 2000,
                    delay: 200
                });
            });
    };


    return (
        <div className="container">
            <Box className="flex items-start justify-center gap-24 py-12">
                <Box className="w-[40%] text-center rounded-lg px-3 py-6 border border-[#c4c4c4] shadow-lg">
                    <Heading as="h3" className="mb-4 font-semibold text-lg">Contact Us</Heading>
                    <Text as="p" className="w-[60%] m-auto text-xs text-center">
                        Can’t find what you’re looking for? Contact our Customer Care Service
                        Our support representative will check your message within 24 business hour's time frame.
                    </Text>
                    <div className="p-6 bg-gray-100 max-w-lg mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex gap-4">
                                <Input
                                    // required
                                    className="w-full"
                                    placeholder="First Name"
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    outline="none"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <Input
                                    // required
                                    className="w-full"
                                    placeholder="Last Name"
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    outline="none"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <InputMask mask="+\9\9\8 (99) 999-99-99"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}>
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        // required
                                        className="w-full"
                                        type="tel"
                                        placeholder="Phone Number"
                                        variant="outline"
                                        border="1.5px solid #c4c4c4"
                                        transition="all ease 0.3s"
                                        _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                        borderRadius="7px"
                                        padding="10px 20px"
                                        outline="none"

                                    />
                                )}
                            </InputMask>

                            <Textarea
                                // required
                                className="w-full"
                                placeholder="Your Message"
                                outline="none"
                                border="1.5px solid #c4c4c4"
                                transition="all ease 0.3s"
                                _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                rows={7}
                                borderRadius="7px"
                                padding="15px 20px"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                className="w-full py-4 rounded-md text-[white] bg-red hover:bg-[#611a17] transition-all"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </Box>

                <Box className="w-[30%] bg-[#444444] p-12 pt-7 rounded-lg">
                    <Image src={Img} alt="contact-img" />

                    <Box className="mb-2 border-b border-[white]">
                        <Heading as="h4" className="text-[white] my-6 font-semibold text-md">KGC Official distributor</Heading>
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

                        <Text as="p" display="flex" alignItems="center" fontWeight="600" fontSize="smaller" color="white" mb={20}>
                            <IoMdMail size={15} className="mr-3" />
                            <span className="mr-3">Email:</span>
                            <Link className="font-normal leading-6 border-b transition-all border-b-[transparent] hover:border-b-[white]" href="mailto:timur@goldmoon.biz"> timur@goldmoon.biz</Link>
                        </Text>
                    </Box>
                    <Box className="mb-6 pb-6 border-b border-[white]">
                        <Heading as="h4" className="text-[white] my-6 font-semibold text-md">Opening Hours</Heading>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={15} fontWeight="400">Mon - Fri : 9am - 5pm</Text>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={15} fontWeight="400">Saturday: Closed</Text>
                        <Text as="p" color="white" display="flex" alignItems="center" fontSize="smaller" mb={5} fontWeight="400">Sunday: Closed</Text>
                    </Box>

                    <Box className="w-[60%]">
                        <Heading as="h4" fontWeight="700" mb="20" color="white">Stay Connected</Heading>
                        <Box className="flex items-center justify-between">
                            <Link href="https://t.me/timurtgl" target="_blank"><SiTelegram fill="white" size={25} /></Link>
                            <Link href="https://www.instagram.com/jungkwanjanguzb" target="_blank"><SiInstagram fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><SiWhatsapp fill="white" size={25} /></Link>
                            <Link href="/" target="_blank"><FaXTwitter fill="white" size={25} /></Link>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <div className="container w-[79%] mb-20" style={{ width: "50%%", height: "450px" }}>
                <iframe
                    src="https://yandex.uz/map-widget/v1/-/CDTDqZpD"
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