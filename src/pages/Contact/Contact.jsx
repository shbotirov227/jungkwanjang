import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Link, Text, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import Img from "@/assets/contact-img.avif"
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const botToken = "7812609734:AAG2rIv6FvYDp0RX8WlQ_kYPoLm6hNBT0Qs";
        const chatId = "YOUR_CHAT_ID";

        const message = `
            Foydalanuvchi Ma'lumotlari:
            Ism: ${formData.name}
            Email: ${formData.email}
            Xabar: ${formData.message}
        `;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
            }),
        })
            .then((response) => {
                response.json()
                console.log(response.json());
            })
            .then((data) => {
                if (data.ok) {
                    alert("Xabar yuborildi!");
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    alert("Xabar yuborishda xato!");
                }
            })
            .catch((error) => console.error("Error:", error));
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
                        <form action="" className="space-y-4">
                            <div className="flex gap-4">
                                <Input
                                    required={true}
                                    className="w-full"
                                    placeholder="First Name"
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    outline="none"
                                />
                                <Input
                                    required={true}
                                    className="w-full"
                                    placeholder="Last Name"
                                    variant="outline"
                                    border="1.5px solid #c4c4c4"
                                    transition="all ease 0.3s"
                                    _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                    borderRadius="7px"
                                    padding="10px 20px"
                                    outline="none"
                                />
                            </div>

                            {/* Telefon raqami */}
                            <InputMask mask="+\9\9\8 (99) 999-99-99">
                                {(inputProps) => (
                                    <Input
                                        {...inputProps}
                                        required={true}
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

                            {/* Xabar yozish uchun textarea */}
                            <Textarea
                                required={true}
                                className="w-full"
                                placeholder="Your Message"
                                outline="none"
                                border="1.5px solid #c4c4c4"
                                transition="all ease 0.3s"
                                _focus={{ borderColor: "#323131", transform: "scale(1.05)" }}
                                rows={7}
                                borderRadius="7px"
                                padding="15px 20px"
                            />

                            <Button className="w-full py-4 rounded-md text-[white] bg-red hover:bg-[#611a17] transition-all" type="submit">Submit</Button>
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
                    allow={true}
                    className="border border-[#c4c4c4] rounded-xl drop-shadow-lg"
                ></iframe>
                
            </div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Ismingiz" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Emailingiz" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Xabaringiz" value={formData.message} onChange={handleChange} required />
                <button type="submit">Yuborish</button>
            </form> */}
        </div>
    );
};

export default Contact;
