import Img1 from "../assets/about-card-img1.webp";
import Img2 from "../assets/about-card-img2.webp";
import Img3 from "../assets/about-card-img3.webp";
import Img4 from "../assets/about-card-img4.webp";
import Img5 from "../assets/about-card-img5.webp";
import { useTranslation } from "react-i18next";

const DataComponent = () => {

    // "textRight2": "The three leaves above the taegeuk symbolize the perfect harmony of heaven, earth, and mankind. The three roots of ginseng represent the love of human life and the vitality of nature. Together, the taegeuk and the three leaves signify the balance between the mind, body, and the energy of nature.",
    // "textRight3": "The name 'JungKwanJang' stands for 120 years of craftsmanship, reliability, and excellence. The quality of the products has been maintained for generations, winning the hearts of those who care about their health."

    const { t } = useTranslation();

    const data = [
        {
            title: t("about.aboutCard.title1"),
            subtitle: t("about.aboutCard.span1"),
            text: t("about.aboutCard.text1"),
            img: Img1,
        },
        {
            title: t("about.aboutCard.title2"),
            subtitle: t("about.aboutCard.span2"),
            text: t("about.aboutCard.text2"),
            img: Img2,
        },
        {
            title: t("about.aboutCard.title3"),
            subtitle: t("about.aboutCard.span3"),
            text: t("about.aboutCard.text3"),
            img: Img3,
        },
        {
            title: t("about.aboutCard.title4"),
            subtitle: t("about.aboutCard.span4"),
            text: t("about.aboutCard.text4"),
            img: Img4,
        },
        {
            title: t("about.aboutCard.title5"),
            text: t("about.aboutCard.text5"),
            img: Img5,
        },
    ];

    return data;
};

export default DataComponent;
