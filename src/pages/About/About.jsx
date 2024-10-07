/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import AboutCard from "../../components/AboutCard/AboutCard";
import Certificate from "@/assets/certificate.webp";
import World from "@/assets/no_flag.webp";
import Img1 from "@/assets/about-img.webp";
import Img2 from "@/assets/about-img2.webp";
import Img3 from "@/assets/about-img3.webp";
import Img4 from "@/assets/about-img4.png";
import Brandname from "@/assets/brandname-title.webp";
import Background from "@/assets/background.png";
import DataComponent from "@/data/aboutCardData";

const About = () => {

    const { t } = useTranslation();
    const data = DataComponent();

    return (
        <div className="">
            <Trans i18nKey="">
                <Image className="m-auto mb-3" src={Img1} alt="img1" />

                <Box className="container">
                    <h2 className="font-semibold text-4xl text-center mx-auto my-10">
                        {t("about.block1.mainTitle")}
                    </h2>

                    <Box textAlign="justify">
                        <Text mb="40" lineHeight="2">
                            {t("about.block1.text1")}
                        </Text>

                        <Text mb="40" lineHeight="2">
                            <Text as="b">{t("about.block1.title1")}</Text>
                            <br></br>
                            {t("about.block1.text2")}
                        </Text>

                        <Text mb="40" lineHeight="2">
                            <Text as="b">{t("about.block1.title2")}</Text>
                            <br></br>
                            {t("about.block1.text3")}
                        </Text>

                        <Text mb="40" lineHeight="2">
                            <Text as="b">{t("about.block1.title3")}</Text>
                            <br></br>
                            {t("about.block1.text4")}
                        </Text>

                        <Text mb="40" lineHeight="2">
                            {t("about.block1.text5")}
                        </Text>

                        <Text as="b">
                            {t("about.block1.title4")}
                        </Text>
                    </Box>

                    <Box textAlign="justify" maxWidth="2xs">
                        <h2 className="font-semibold text-4xl text-center mx-auto my-10">
                            {t("about.block2.mainTitle")}
                            <h2 className="text-red mt-4">
                                {t("about.block2.mainTitleRed")}
                            </h2>
                        </h2>

                        <Text mb="40" lineHeight="2">
                            <Text as="b">JungKwanJang</Text> {t("about.block2.text1")}
                        </Text>
                    </Box>

                    <Flex className="max-xl:flex-col" alignItems={"center"} justifyContent={"space-between"}>
                        <Box className="font-semibold w-[45%] text-center max-xl:w-[70%] max-xl:mb-14 max-md:w-[80%] max-sm:w-[90%]">
                            <Heading className="text-2xl mb-10">
                                {t("about.block2.title1")}
                            </Heading>
                            <Text as="p" className="">
                                {t("about.block2.text2")}
                            </Text>
                        </Box>
                        <Box className="w-[45%] max-xl:w-[70%] max-md:w-[80%] max-sm:w-[90%] lg:text-center md:w-[80%] md:text-center sm:w-full sm:text-center">
                            <Heading className="text-2xl text-center mb-10">
                                {t("about.block2.title2")}
                            </Heading>
                            <Text as="p" mb="40" className="">
                                {t("about.block2.text3")}
                            </Text>
                            <Text as="p" className="">
                                {t("about.block2.text4")}
                            </Text>
                        </Box>
                    </Flex>

                    <Image
                        marginX={"auto"}
                        marginY={"50"}
                        src={Certificate}
                        alt="certificate"
                    />
                    <Image
                        marginX={"auto"}
                        marginY={"50"}
                        src={World}
                        alt="world"
                    />

                    <Box className="max-w-[85%] m-auto">
                        {data.map((el, index) => (
                            <AboutCard
                                key={index}
                                title={el.title}
                                subtitle={el.subtitle}
                                text={el.text}
                                image={el.img}
                                isReversed={index % 2 !== 0}
                            />
                        ))}
                    </Box>

                    <Box className="text-center w-[65%] m-auto mb-10 max-lg:w-[85%] max-md:w-[90%]">
                        <Heading as="h3" className="mb-14 font-semibold text-2xl">{t("about.block3.since")}</Heading>
                        <Heading as="h3" className="mb-5 font-semibold text-2xl">{t("about.block3.mainTitle")}</Heading>
                        <Heading as="h3" className="mb-5 font-semibold text-2xl">‘<span className="text-red">{t("about.block3.mainTitleRed")}</span>’</Heading>

                        <Text as="p" className="mb-5 text-[15px]">
                            {t("about.block3.text1")}
                        </Text>
                        <Text as="p" className="mb-5 text-[15px]">
                            {t("about.block3.text2")}
                        </Text>
                        <Text as="p" className="mb-5 text-[15px]">
                            {t("about.block3.text3")}
                        </Text>
                        <Text as="p" className="mb-5 text-[15px]">
                            {t("about.block3.text4")}
                        </Text>
                    </Box>

                    <Box className="flex items-center justify-center mb-10 gap-20 max-md:flex-col">
                        <Image src={Img2} className="max-xl:w-[50%] max-lg:w-[40%] max-md:w-[80%]" alt="about-img2" />
                        <Image src={Img3} className="max-xl:w-[50%] max-lg:w-[40%] max-md:w-[80%]" alt="about-img3" />
                    </Box>

                    <Box className="w-[80%] m-auto flex relative items-center justify-between gap-14 mb-20 max-lg:flex-col max-lg:w-full max-lg:mb-10">
                        <Box className="w-2/4 z-10 relative m-auto text-center max-lg:w-full max-lg:overflow-hidden max-lg:order-2" style={{ backgroundImage: 'url("@/assets/Background2.png")' }}>
                            <Image src={Background} className="min-w-[170%] h-[150%] absolute -z-10 -left-[3rem] -top-[2rem] max-lg:hidden" />
                            <Image src={Img4} className="m-auto mb-14" />
                            <Heading as="h3" className="mb-3 font-semibold text-2xl">{t("about.brandname.title1")}</Heading>
                            <Heading as="h4" className="mb-5 text-xl"><b>Jung</b> {t("about.brandname.textLeft1")}</Heading>
                            <Heading as="h4" className="mb-5 text-xl"><b>Kwan</b> {t("about.brandname.textLeft2")}</Heading>
                            <Heading as="h5" className="mb-5 text-xl"><b>Jang</b> {t("about.brandname.textLeft3")}</Heading>
                        </Box>
                        <Box className="w-2/4 z-10 max-lg:w-full max-lg:mt-4">
                            <Image src={Brandname} className="w-[50%] m-auto mb-10" />

                            <Heading as="h3" className="mb-4 font-semibold text-2xl">{t("about.brandname.title2")}</Heading>
                            <Text as="p" className="mb-5 text-[15px] leading-7 max-lg:w-full">
                            {t("about.brandname.textRight1")}
                            </Text>
                        </Box>

                    </Box>
                    <video className="z-10 max-lg:hidden" src="@/assets/video-carousel.mp4" width={300} height={200}>
                        <source src="@/assets/video-carousel.mp4" />
                    </video>
                </Box>
            </Trans>
        </div>
    );
};

export default About;
