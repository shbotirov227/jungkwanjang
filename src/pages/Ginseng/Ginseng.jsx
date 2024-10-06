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

const Ginseng = () => {
    return (
        <Box className="">
            <Box className="py-36 text-center bg-[#545559]">
                <Heading className="text-4xl mb-5 text-[white]" as="h3">JungKwanJang</Heading>
                <Heading className="text-4xl font-semibold text-[white]" as="h3">The Ginseng Story</Heading>
            </Box>

            <div className="">
                <Box className="w-[55%] container text-center m-auto my-10">
                    <Heading className="text-2xl font-semibold text-black" as="h3">The Wisdom of a Thousand Years</Heading>
                    <Heading className="text-5xl text-red my-5" as="h3">The Ginseng Story</Heading>
                    <Text className="text-sm" as="p">
                        Ginseng's beginnings can be traced back to Korea one thousand years ago when its effects were first discovered. This was done by cooking and drying the plant. In the travel essay "高麗圖經" written by Xuanhe in 1123, who was an envoy of the Song Dynasty visiting Goryo, the power of ginseng was documented. It is still renowned today for its health benefits which have been verified by both Eastern and Western medical communities. In essence, it is a food for health created by the combination of history and science.
                    </Text>
                </Box>

                <Image className="flex items-center m-auto mb-7" src={Img1} alt="ginseng-img1" />

                <Box className="w-[100%] container m-auto flex items-start justify-between mb-10">
                    <Box className="w-[30%] m-auto flex items-center flex-col">
                        <Image className="flex items-center m-auto mb-7" src={Img2} alt="ginseng-img2" />
                        <Heading className="w-[60%] m-auto text-2xl font-[600]" as="h3">KOREAN GINSENG</Heading>
                    </Box>
                    <Box className="w-[30%] m-auto flex items-center flex-col">
                        <Image className="flex items-center m-auto mb-7" src={Img3} alt="ginseng-img3" />
                        <Heading className="w-[60%] m-auto text-2xl font-[600]" as="h3">UNPROCESSED GINSENG</Heading>
                    </Box>
                    <Box className="w-[45%]">
                        <Heading className="text-2xl mb-4 font-[600]" as="h3">What is Korean Ginseng?</Heading>
                        <Text className="text-sm mb-5" as="p">
                            Ginseng is widely desired for its numerous beneficial components. In the ginseng family, Korean ginseng stands out for its impressive levels of saponins and non-saponins that can't be found with other varieties.
                        </Text>
                        <Text className="text-sm" as="p">
                            Korean Ginseng contains a range of valuable saponins including Rb1 which may help regulate healthy liver and brain function. It is also abundant in non-saponin ingredients, one of the most notable being acidic polysaccharide which has been proven to manage cholesterol levels.
                        </Text>
                    </Box>

                </Box>
                <Box className="container mb-10">
                    <Heading className="text-2xl mb-4 font-[600]" as="h3">
                        Korean Ginseng Vs Korean Red Ginseng Vs American Ginseng Vs Chinese Ginseng Vs Japanese Ginseng
                    </Heading>

                    <Text as="p">
                        Korean Red Ginseng is a version of Korean Ginseng that has been through a traditional steaming and drying process, turning it red. This is done to enhance the root's benefits and protect it. Not all ginseng plants are equal in terms of their benefits; Korean Red Ginseng contains an abundance of saponins while American, Chinese, and Japanese Ginseng have less than 15 saponins. Saponins are naturally occurring compounds that are responsible for the capabilities of Ginseng.
                    </Text>
                </Box>

                <Box className="container mb-[10]">
                    <Image className="w-[80%] flex items-center m-auto mb-11" src={Img4} alt="ginseng-img4" />
                    <Text className="mb-8 font-[600]" mb={30} as="p">
                        Unprocessed ginseng becomes ginseng when processed according to the traditional Korean method
                    </Text>

                    <Text className="mb-8 font-[600]" as="p">
                        *Acidic polysaccharide, the main active ingredient of ginseng, helps to enhance anti-cancer immunity, to inhibit cholesterol
                    </Text>

                    <Image className="w-[90%] flex items-center m-auto mb-11" src={Img5} alt="ginseng-img5" />

                    <Text className="mb-8" as="p">
                        Crafting genuine ginseng is a combination of artistry, skill and scientific knowledge. We devote two years to getting each field ready for planting, then let each plant grow until it is at its best, and then permit the area to lie fallow for a decade before replanting.
                    </Text>
                </Box>

                <Box className="container flex items-center justify-between mb-10">
                    <Box className="w-[50%]">
                        <Heading className="text-[25px] font-semibold" as="h3">Health Efficacies of <span className="text-red">Korean Ginseng</span></Heading>
                        <Heading className="text-sm font-[600] mt-3 mb-7" as="">The All-Healing Herb</Heading>
                        <Text as="p">
                            The term "Panax" is the scientific name for ginseng, which is derived from the Greek language and translates to "all-healing". This particular genus of plants contains saponins called ginsenosides, a class of compounds that cannot be found in any other plant. We make sure to allow our ginseng to grow to full maturity in order to acquire the maximum amount of saponins in each root. Part of the Korean lifestyle and culture, ginseng boasts a number of natural health advantages.
                        </Text>
                    </Box>
                    <Image className="w-[40%] flex items-center m-auto" src={Img6} alt="ginseng-img6" />
                </Box>

                <Box className="container flex items-center justify-between mb-10">
                    <Box className="w-[50%]">
                        <Heading className="text-[25px] font-semibold" as="h3">Health Efficacies of <span className="text-red">Korean Ginseng</span></Heading>
                        <Heading className="text-sm font-[600] mt-3 mb-7" as="">The All-Healing Herb</Heading>
                        <Text as="p">
                            By promoting blood circulation and supporting bodily functions, Ginseng provides our body with the power to fight diseases; It is a way to make our body stronger.
                        </Text>
                    </Box>
                    <Image className="w-[40%] flex items-center m-auto" src={Img16} alt="ginseng-img16" />
                </Box>


                <Image className="container w-[65%] flex items-center m-auto mb-10" src={Img7} alt="ginseng-img7" />

                <Box className="container mb-12" as="ul">
                    <Heading className="text-xs mb-5" as="li">(1) Drs. V. D. Petkov (Bulgaria) and H. Nitta (Japan) - Study on the improvement of cognitive degradation caused by normal agin</Heading>
                    <Heading className="text-xs mb-5" as="li">(2) Professor Nakanishi (Japan) - Study on the inhibition of platelet aggregation and improvement of microvascular blood supply</Heading>
                    <Heading className="text-xs mb-5" as="li">(3) Dr. E. Bombardelli (Italy) - Study on the anti-fatigue and anti-stress properties of panax ginseng</Heading>
                    <Heading className="text-xs mb-5" as="li">(4) S. J. Fulder (England) - Study on improvement of physical functions of the elderly</Heading>
                    <Heading className="text-xs mb-5" as="li">(5) Dr. Kang, Sang Moo (USA) - Study on antiviral activity of ginseng extract against respiratory syncytial virus infection</Heading>
                </Box>

                <Box className="container flex justify-between mb-10">
                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img8} alt="ginseng-img8" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">2,839 Research Papers Associated with Ginseng</Heading>
                        <Text className="text-xs">
                            Scientific name : Panax Ginseng Source : National Center for Biotechnology Information (www.ncbi.nlm.nih.gov)
                        </Text>
                    </Box>

                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img9} alt="ginseng-img9" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">51 Research Areas Related to the Health Effects of Ginseng</Heading>
                        <Text className="text-xs">
                            Fatigue resistance, memory functions, enhancement of blood circulation, antioxidant functions, and more.
                        </Text>
                    </Box>

                    <Box className="w-[25%]">
                        <Image className="flex items-center m-auto mb-5" src={Img10} alt="ginseng-img10" />
                        <Heading className="text-2xl font-semibold mb-3" as="h3">40 Countries Conducted Research on the Health Effects of Ginseng</Heading>
                        <Text className="text-xs">
                            USA, Canada, UK, Germany, Italy,South Korea, China, Japan,Russia and others
                        </Text>
                    </Box>
                </Box>

                <Image className="container w-[65%] flex items-center m-auto mb-10" src={Img11} alt="ginseng-img11" />

                <Box className="container flex justify-between m-auto mb-10">
                    <Box className="w-[45%]">
                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Maintain A Healthy Body</h4>
                            <Text as="p">
                                Korean Ginseng has many health benefits that can be found here National Center for Biotechnology Information (<Link to="https://www.ncbi.nlm.nih.gov/" target="_blank">www.ncbi.nlm.nih.gov</Link>)
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Boost Your Immune System</h4>
                            <Text className="text-sm font-light" as="p">
                                Korean Ginseng increases your immune system's response to foreign objects that enter your body.
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Builds Stamina & Helps To Fight Fatigue</h4>
                            <Text className="text-sm font-light" as="p">
                                An alternative to caffeine, Korean Ginseng is an all-natural energy boost to help you get through your day.
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Promotes Healthy Blood Circulation</h4>
                            <Text className="text-sm font-light" as="p">
                                The ingredients in Korean Ginseng helps to increase blood circulation aiding in maintaining a healthy heart and arteries.
                            </Text>
                        </Box>
                    </Box>

                    <Box className="w-[45%]">
                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Supports Healthy Cognitive Health</h4>
                            <Text className="text-sm font-light" as="p">
                                Helps to maintain a healthy brain and help with cognitive functions.
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Benefits for Skincare</h4>
                            <Text className="text-sm font-light" as="p">
                                Utilizing the latest in modern technology, we're able to apply the same "all-healing" effects of Korean Ginseng to skincare.
                            </Text>
                        </Box>

                        <Box className="mb-8">
                            <h4 className="text-sm mb-3 font-semibold">Delivers A Plentiful Supply Of Antioxidants</h4>
                            <Text className="text-sm font-light" as="p">
                                Antioxidants play a big role in protecting your body from free radicals. Korean Ginseng is full of antioxidants that assist your cells in preventing diseases that may develop in your body.
                            </Text>
                        </Box>
                    </Box>
                </Box>

                <Box className="py-10 mb-10 bg-[#FAFAFA]">
                    <Heading className="text-center font-semibold text-2xl mb-7" as="h3">The Theory Of The Seven Benefits Of Ginseng in Oriental Medicine</Heading>

                    <Box className="container flex items-center justify-center">
                        <Box className="w-[35%]">
                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">補氣救脫</h4>
                                <h4 className="text-sm mb-3 font-semibold">Stamina Boosting</h4>
                                <Text className="text-sm font-light" as="p">
                                    Helps recover strength and promotes stamina
                                </Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">益血復脈</h4>
                                <h4 className="text-sm mb-3 font-semibold">Normalizing Metabolism Irregularities</h4>
                                <Text className="text-sm font-light" as="p">
                                    Promotes the production of blood and stabilizes the pulse
                                </Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">養心安神</h4>
                                <h4 className="text-sm mb-3 font-semibold">Calming Mental Instability</h4>
                                <Text className="text-sm font-light" as="p">
                                    Reduces strees and stabilizes the equilibrium of the mind
                                </Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">生津止渴</h4>
                                <h4 className="text-sm mb-3 font-semibold">Improving The Whole Body Function</h4>
                                <Text className="text-sm font-light" as="p">
                                    Complements body fluids and alleviates thirst
                                </Text>
                            </Box>
                        </Box>

                        <Image className="w-[35%] flex items-center m-auto mb-10" src={Img12} alt="ginseng-img12" />

                        <Box className="w-[35%]">
                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">托毒合瘡</h4>
                                <h4 className="text-sm mb-3 font-semibold">Detoxification and Improving Skin Conditions</h4>
                                <Text className="text-sm font-light" as="p">
                                    Gets rid of the poison in the body and resolves swellings or boils
                                </Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">健脾止瀉</h4>
                                <h4 className="text-sm mb-3 font-semibold">Strengthening Spleen and Stomach</h4>
                                <Text className="text-sm font-light" as="p">
                                    Strengthens the digestive organs and stops diarrthea
                                </Text>
                            </Box>

                            <Box className="mb-8">
                                <h4 className="text-sm mb-3">補肺定喘</h4>
                                <h4 className="text-sm mb-3 font-semibold">Nourish and Strengthen Respiratory System</h4>
                                <Text className="text-sm font-light" as="p">
                                    Strengthens the lungs and stops coughs
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <div className="container">
                    <Heading className="text-center font-semibold text-2xl mb-7" as="h3">What People Are Saying About Ginseng</Heading>

                    <Box className="flex items-center justify-between mb-14">
                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img13} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">Julia Barlund, KGC Customer</Heading>
                            <Text className="text-sm leading-6" as="p">
                                'EVERYTIME' is my daily routine. Everytime offers a great boost in energy and is for those who wish to prioritize their health and wellness
                            </Text>
                        </Box>

                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img14} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">Julia Barlund, KGC Customer</Heading>
                            <Text className="text-sm leading-6" as="p">
                                'EVERYTIME' is my daily routine. Everytime offers a great boost in energy and is for those who wish to prioritize their health and wellness
                            </Text>
                        </Box>

                        <Box className="w-[30%]">
                            <Image className="w-[100%] flex items-center m-auto mb-5" src={Img15} alt="ginseng-img13" />
                            <Heading className="text-2xl font-semibold mb-3" as="h3">Julia Barlund, KGC Customer</Heading>
                            <Text className="text-sm leading-6" as="p">
                                'EVERYTIME' is my daily routine. Everytime offers a great boost in energy and is for those who wish to prioritize their health and wellness
                            </Text>
                        </Box>
                    </Box>

                    <Box className="flex items-center justify-between mb-14">
                        <Image className="container w-[40%] flex items-center m-auto mb-5" src={Img16} alt="ginseng-img13" />
                        <Link to="/contact" className="bg-red py-5 px-6 rounded-xl text-[white] hover:bg-[#611a17] transition-all">Interested in Korean Red Ginseng? Click Here To Subscribe To Promotions</Link>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default Ginseng;