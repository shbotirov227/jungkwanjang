import Img1 from "../assets/about-card-img1.webp";
import Img2 from "../assets/about-card-img2.webp";
import Img3 from "../assets/about-card-img3.webp";
import Img4 from "../assets/about-card-img4.webp";
import Img5 from "../assets/about-card-img5.webp";
import { useTranslation } from "react-i18next";

const DataComponent = () => {
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
