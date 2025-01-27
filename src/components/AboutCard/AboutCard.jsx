/* eslint-disable react/prop-types */
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const AboutCard = ({ image, title, subtitle, text, isReversed }) => {

	return (
		<div className={`flex max-lg:flex-col items-center justify-between w-[100%] mb-28 ${isReversed ? "flex-row-reverse": "flex-row"}`}>
            <Box className={`${isReversed ? "ml-10" : "mr-10"} py-9 border-t-2 border-red`}>
                <Heading as="h4" className="text-2xl mb-4 font-[600] leading-8">{title}</Heading>
                <Heading as="h5" className="text-md mb-7">{subtitle}</Heading>
                <Text as="p" className="text-md leading-7">{text}</Text>
            </Box>
			<Image className="w-full max-xl:max-w-md rounded-tl-[50px] rounded-br-3xl" src={image} alt={title} />
		</div>
	);
};

export default AboutCard;
