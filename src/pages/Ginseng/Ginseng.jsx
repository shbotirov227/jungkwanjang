import { Link } from "react-router-dom";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Img1 from "../../assets/ginseng-img1.webp";
import Img2 from "../../assets/ginseng-img2.avif";
import Img3 from "../../assets/ginseng-img3.avif";
import Img4 from "../../assets/ginseng-img4.webp";
import Img5 from "../../assets/ginseng-img5.webp";
import Img6 from "../../assets/ginseng-img6.webp";
import Img7 from "../../assets/ginseng-img7.webp";
import Img8 from "../../assets/ginseng-img8.webp";
import Img9 from "../../assets/ginseng-img9.webp";
import Img10 from "../../assets/ginseng-img10.webp";
import Img11 from "../../assets/ginseng-img11.webp";
import Img12 from "../../assets/ginseng-img12.webp";
import Img13 from "../../assets/ginseng-img13.webp";
import Img14 from "../../assets/ginseng-img14.webp";
import Img15 from "../../assets/ginseng-img15.webp";
import Img16 from "../../assets/ginseng-img16.webp";
import { useTranslation } from "react-i18next";

const Ginseng = () => {

    const { t } = useTranslation();

    return (
        <Box className="">
            <Box className="py-36 text-center bg-[#545559]">
                <Heading className="text-4xl mb-5 text-[white]" as="h3">{t("ginseng.mainTitle")}</Heading>
                <Heading className="text-4xl font-semibold text-[white]" as="h3">{t("ginseng.mainTitleBold")}</Heading>
            </Box>

            <div className="">
                <Box className="w-[55%] container max-lg:w-full text-center m-auto my-10">
                    <Heading className="text-2xl font-semibold text-black" as="h3">{t("ginseng.title.1")}</Heading>
                    <Heading className="text-5xl text-red my-5" as="h3">{t("ginseng.title.2")}</Heading>
                    <Text className="text-sm" as="p">{t("ginseng.text.1")}</Text>
                </Box>

                <Image className="flex items-center m-auto mb-7" src={Img1} alt="ginseng-img1" />

                <Box className="w-[100%] container max-lg:flex-wrap m-auto flex items-start justify-between mb-10">
                    <Box className="w-[30%] m-auto flex items-center flex-col">
                        <Image className="flex items-center m-auto mb-7" src={Img2} alt="ginseng-img2" />
                        <Heading className="w-[60%] max-lg:w-full m-auto text-2xl font-[600]" as="h3">{t("ginseng.title.3")}</Heading>
                    </Box>
                    <Box className="w-[30%] m-auto flex items-center flex-col">
                        <Image className="flex items-center m-auto mb-7" src={Img3} alt="ginseng-img3" />
                        <Heading className="w-[60%] max-lg:w-full m-auto text-2xl font-[600]" as="h3">{t("ginseng.title.4")}</Heading>
                    </Box>
                    <Box className="w-[45%] max-lg:w-full max-lg:mt-7">
                        <Heading className="max-lg:text-center text-2xl mb-4 font-[600]" as="h3">{t("ginseng.title.5")}</Heading>
                        <Text className="text-sm mb-5" as="p">{t("ginseng.text.2")}</Text>
                        <Text className="text-sm" as="p">{t("ginseng.text.3")}</Text>
                    </Box>

                </Box>
                <Box className="container mb-10">
                    <Heading className="text-2xl mb-4 font-[600]" as="h3">{t("ginseng.title.6")}</Heading>
                    <Text as="p">{t("ginseng.text.4")}</Text>
                </Box>

                <Box className="container mb-[10]">
                    <Image className="w-[80%] flex items-center m-auto mb-11" src={Img4} alt="ginseng-img4" />
                    <Text className="mb-8 font-[600]" mb={30} as="p">{t("ginseng.title.7")}</Text>

                    <Text className="mb-8 font-[600]" as="p">{t("ginseng.title.8")}</Text>

                    <Image className="w-[90%] flex items-center m-auto mb-11" src={Img5} alt="ginseng-img5" />

                    <Text className="mb-8" as="p">{t("ginseng.text.5")}</Text>
                </Box>

                <Box className="container flex items-center justify-between mb-10">
                    <Box className="w-[50%]">
                        <Heading className="text-[25px] font-semibold" as="h3">{t("ginseng.title.9")} <span className="text-red">{t("ginseng.red.1")}</span></Heading>
                        <Heading className="text-sm font-[600] mt-3 mb-7" as="">{t("ginseng.title.10")}</Heading>
                        <Text as="p">{t("ginseng.text.6")}</Text>
                    </Box>
                    <Image className="w-[40%] flex items-center m-auto" src={Img6} alt="ginseng-img6" />
                </Box>

                <Box className="container flex items-center justify-between mb-10">
                    <Box className="w-[50%]">
                        <Heading className="text-[25px] font-semibold" as="h3">{t("ginseng.title.11")} <span className="text-red">{t("ginseng.red.1")}</span></Heading>
                        <Heading className="text-sm font-[600] mt-3 mb-7" as="">{t("ginseng.title.10")}</Heading>
                        <Text as="p">{t("ginseng.text.7")}</Text>
                    </Box>
                    <Image className="w-[40%] flex items-center m-auto" src={Img16} alt="ginseng-img16" />
                </Box>


                <Image className="container w-[65%] flex items-center m-auto mb-10" src={Img7} alt="ginseng-img7" />

                <Box className="container mb-12" as="ul">
                    <Heading className="text-xs mb-5" as="li">{t("ginseng.li.1")}</Heading>
                    <Heading className="text-xs mb-5" as="li">{t("ginseng.li.2")}</Heading>
                    <Heading className="text-xs mb-5" as="li">{t("ginseng.li.3")}</Heading>
                    <Heading className="text-xs mb-5" as="li">{t("ginseng.li.4")}</Heading>
                    <Heading className="text-xs mb-5" as="li">{t("ginseng.li.5")}</Heading>
                </Box>

                <Box className="container flex justify-between mb-10">
                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img8} alt="ginseng-img8" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.title.12")}</Heading>
                        <Text className="text-xs">{t("ginseng.text.8")}</Text>
                    </Box>

                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img9} alt="ginseng-img9" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.title.13")}</Heading>
                        <Text className="text-xs">{t("ginseng.text.9")}</Text>
                    </Box>

                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img10} alt="ginseng-img10" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.title.14")}</Heading>
                        <Text className="text-xs">{t("ginseng.text.10")}</Text>
                    </Box>
                </Box>

                <Image className="container w-[65%] flex items-center m-auto mb-10" src={Img11} alt="ginseng-img11" />

                <Box className="container flex justify-between m-auto mb-10">
                    <Box className="w-[45%]">
                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.15")}</h4>
                            <Text as="p">
                                {t("ginseng.text.11")}(<Link to="https://www.ncbi.nlm.nih.gov/" target="_blank">www.ncbi.nlm.nih.gov</Link>)
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.16")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.text.12")}</Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.17")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.title.13")}</Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.18")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.title.14")}</Text>
                        </Box>
                    </Box>

                    <Box className="w-[45%]">
                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.19")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.title.15")}</Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.20")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.title.16")}</Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.20")}</h4>
                            <Text className="text-sm font-light" as="p">{t("ginseng.title.17")}</Text>
                        </Box>
                    </Box>
                </Box>

                <Box className="py-10 mb-10 bg-[#FAFAFA]">
                    <Heading className="text-center font-semibold text-2xl mb-7" as="h3">{t("ginseng.title.22")}</Heading>

                    <Box className="container flex items-center justify-center">
                        <Box className="w-[35%]">
                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.1")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.23")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.18")}</Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.2")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.24")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.19")}</Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.3")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.25")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.20")}</Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.4")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.26")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.21")}</Text>
                            </Box>
                        </Box>

                        <Image className="w-[35%] flex items-center m-auto mb-10" src={Img12} alt="ginseng-img12" />

                        <Box className="w-[35%]">
                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.5")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.27")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.22")}</Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.6")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.28")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.23")}</Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">{t("ginseng.chinese.7")}</h4>
                                <h4 className="text-sm mb-3 font-semibold">{t("ginseng.title.29")}</h4>
                                <Text className="text-sm font-light" as="p">{t("ginseng.text.24")}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <div className="container">
                    <Heading className="text-center font-semibold text-2xl mb-7" as="h3">{t("ginseng.title.30")}</Heading>

                    <Box className="flex items-center justify-between mb-14">
                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img13} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.customerTitle.1")}</Heading>
                            <Text className="text-sm leading-6" as="p">{t("ginseng.customerText.1")}</Text>
                        </Box>

                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img14} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.customerTitle.2")}</Heading>
                            <Text className="text-sm leading-6" as="p">{t("ginseng.customerText.2")}</Text>
                        </Box>

                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img15} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">{t("ginseng.customerTitle.3")}</Heading>
                            <Text className="text-sm leading-6" as="p">{t("ginseng.customerText.3")}</Text>
                        </Box>
                    </Box>

                    <Box className="flex items-center justify-between mb-14">
                        <Image className="container w-[40%] flex items-center m-auto mb-5" src={Img16} alt="ginseng-img13" />
                        <Link to="/contact" className="bg-red py-5 px-6 rounded-xl text-[white] hover:bg-[#611a17] transition-all">{t("ginseng.btn")}</Link>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default Ginseng;