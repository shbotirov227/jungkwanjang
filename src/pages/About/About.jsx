/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import AboutCard from "../../components/AboutCard/AboutCard";
import data from "@/data/aboutCardData";
import Certificate from "@/assets/certificate.webp";
import World from "@/assets/no_flag.webp";
import Img1 from "@/assets/about-img.webp";
import Img2 from "@/assets/about-img2.webp";
import Img3 from "@/assets/about-img3.webp";
import Img4 from "@/assets/about-img4.png";
import Brandname from "@/assets/brandname-title.webp";
import Background from "@/assets/background.png";

const About = () => {
    return (
        <div className="">
            <Image className="m-auto mb-3" src={Img1} alt="img1" />

            <Box className="container">
                <h2 className="font-semibold text-4xl text-center mx-auto my-10">
                    CheongKwanJang to JungKwanJang
                </h2>

                <Box textAlign="justify">
                    <Text mb="40" lineHeight="2">
                        We are excited to announce a significant milestone in
                        our journey – the evolution of our brand name from "
                        <Text as="b">CheongKwanJang</Text>" to "
                        <Text as="b">JungKwanJang</Text>". This change is more
                        than just a new name; it marks a pivotal moment in our
                        commitment to excellence, innovation, and the well-being
                        of our communities.
                    </Text>

                    <Text mb="40" lineHeight="2">
                        <Text as="b">Why "JungKwanJang" ?</Text>
                        <br></br>
                        The name "<Text as="b">JungKwanJang</Text>" is rooted in
                        our desire to reflect both our heritage and our
                        forward-looking vision. It signifies "central",
                        "primary", or "essential", embodying our role in your
                        health regimen as a central wellspring of wellness and
                        vitality. "<Text as="b">Jung</Text>" emphasizes our core
                        mission to provide essential, premium quality health
                        products. Meanwhile, "<Text as="b">KwanJang</Text>"
                        continues to honor our tradition of excellence and
                        trustworthiness in manufacturing.
                    </Text>

                    <Text mb="40" lineHeight="2">
                        <Text as="b">Our Commitment Remains Unchanged</Text>
                        <br></br>
                        While our name evolves, our commitment to you remains
                        unwavering. <Text as="b">JungKwanJang</Text> will
                        continue to harness the power of nature, combined with
                        scientific innovation, to deliver products that support
                        your health and well-being. Our dedication to purity,
                        quality, and efficacy stands firm, as does our promise
                        to be your trusted partner in wellness.
                    </Text>

                    <Text mb="40" lineHeight="2">
                        <Text as="b">Looking Forward</Text>
                        <br></br>
                        This rebranding marks the beginning of a new chapter in
                        our journey. As <Text as="b">JungKwanJang</Text>, we are
                        even more determined to explore innovative solutions,
                        push the boundaries of health science, and provide you
                        with products that enhance your quality of life. We are
                        excited for what the future holds and deeply grateful
                        for the opportunity to continue serving you under our
                        new name.
                    </Text>

                    <Text mb="40" lineHeight="2">
                        Thank you for your steadfast support and trust in us.
                        Together, let's embark on this renewed journey towards
                        health and wellness.
                    </Text>

                    <Text as="b">
                        Your health, our science, one future - JungKwanJang.
                    </Text>
                </Box>

                <Box textAlign="justify" maxWidth="2xs">
                    <h2 className="font-semibold text-4xl text-center mx-auto my-10">
                        Heritage from Nature,
                        <h2 className="text-red mt-4">
                            ‘The World’s No.1 Ginseng Brand, JungKwanJang’
                        </h2>
                    </h2>

                    <Text mb="40" lineHeight="2">
                        <Text as="b">JungKwanJang</Text> (正官庄), the iconic
                        brand of herbal supplements with a history of 120 years,
                        has been adored by over 40 countries globally and is
                        known as the Worlds's number one Ginseng Brand based on
                        a report from the Euromonitor in 2012-2021. The overall
                        ginseng retail market was estimated to be around $490
                        million as of 2021, with{" "}
                        <Text as="b">Korea Ginseng Corp's JungKwanJang</Text>{" "}
                        brand leading the way with a 48.3% market share and
                        sales of around $2,203 million in the Vitamins & Dietary
                        Supplement Category.
                    </Text>
                </Box>

                <Flex className="max-xl:flex-col" alignItems={"center"} justifyContent={"space-between"}>
                    <Box className="font-semibold w-[45%] text-center max-xl:w-[70%] max-xl:mb-14 max-md:w-[80%] max-sm:w-[90%]">
                        <Heading className="text-2xl mb-10">
                            Our Mission
                        </Heading>
                        <Text as="p" className="">
                            “To make people’s lives better everyday by providing
                            them with the best, traditionally harvested, most
                            carefully selected Korean Red Ginseng products to
                            support health and well-being. We give our all for
                            the sake of our customers, so they can face any
                            challenges in life.”
                        </Text>
                    </Box>
                    <Box className="w-[45%] max-xl:w-[70%] max-md:w-[80%] max-sm:w-[90%] lg:text-center md:w-[80%] md:text-center sm:w-full sm:text-center">
                        <Heading className="text-2xl text-center mb-10">
                            THE MOST TRUSTED GINSENG BRAND
                        </Heading>
                        <Text as="p" mb="40" className="">
                            Renowned worldwide, Korea Ginseng Corporation (KGC),
                            with its subsidiary lines JungKwanJang, Koreselect,
                            GoodBASE, and Donginbi, is the number one brand of
                            ginseng with over 120 years of horticultural and
                            scientific expertise.
                        </Text>
                        <Text as="p" className="">
                            KGC brands use the most exceptional ginseng combined
                            with the finest herbs and ingredients to deliver
                            superior products to meet everyone’s needs. Each of
                            our JungKwanJang products are certified by the
                            Republic of Korea’s Ministry of Food and Science to
                            feature only premium ginseng extract, from the roots
                            of plants that have been allowed to mature for the
                            full six years required for optimal results.
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
                    <Heading as="h3" className="mb-14 font-semibold text-2xl">SINCE 1899</Heading>
                    <Heading as="h3" className="mb-5 font-semibold text-2xl">The Premium Brand of the Korean Royal Palace</Heading>
                    <Heading as="h3" className="mb-5 font-semibold text-2xl">‘<span className="text-red">JungKwanJang</span>’</Heading>

                    <Text as="p" className="mb-5 text-[15px]">
                        The origin of <b>Korea Ginseng Corporation</b> dates back to <b>1899</b> when the SamJeongGwa department was inaugurated within the Korean Empire's royal palace.
                    </Text>
                    <Text as="p" className="mb-5 text-[15px]">
                        From that time, the state has regulated the production and farming of red ginseng with a vertically-integrated system to uphold quality and supervision.
                    </Text>
                    <Text as="p" className="mb-5 text-[15px]">
                        For over a century, the renown of Korean red ginseng has been spread worldwide by the <b>"JungKwanJang"</b> name. In order to differentiate it from fake items, <b>"JungKwanJang"</b> was crafted by adding <b>"Jung"</b> meaning official product to <b>"Kwan Jang"</b>.
                    </Text>
                    <Text as="p" className="mb-5 text-[15px]">
                        This is why <b>"JungKwanJang"</b> continues to be a renowned red ginseng brand today.
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
                        <Heading as="h3" className="mb-3 font-semibold text-2xl">JungKwanJang</Heading>
                        <Heading as="h4" className="mb-5 text-xl"><b>Jung</b> means “rightness”</Heading>
                        <Heading as="h4" className="mb-5 text-xl"><b>Kwan</b> means “government”</Heading>
                        <Heading as="h5" className="mb-5 text-xl"><b>Jang</b> means “factories”</Heading>
                    </Box>
                    <Box className="w-2/4 z-10 max-lg:w-full max-lg:mt-4">
                        <Image src={Brandname} className="w-[50%] m-auto mb-10" />

                        <Heading as="h3" className="mb-4 font-semibold text-2xl">Therefore, JungKwanJang means “Products rightfully made in government-supervised factories”</Heading>
                        <Text as="p" className="mb-5 text-[15px] leading-7 max-lg:w-full">
                            The taegeuk mark in the logo of <b>JungKwanJang</b> signifies its status as a nationally renowned item from Korea. The vivid red color of the logo reflects the intensity of Jung Kwan Jang's dedication to producing highly dependable red ginseng products.
                        </Text>
                    </Box>

                </Box>
                <video className="z-10 max-lg:hidden" src="@/assets/video-carousel.mp4" width={300} height={200}>
                    <source src="@/assets/video-carousel.mp4" />
                </video>
            </Box>
        </div>
    );
};

export default About;
