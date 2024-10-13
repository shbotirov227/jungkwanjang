import Img1 from "@/assets/product-img1.png";
import Img2 from "@/assets/product-img2.png";
import Img3 from "@/assets/product-img3.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {

    const { t } = useTranslation();

    const products = [
        {
            id: 1,
            title: t("home.cardTitle.1"),
            quantity: t("home.cardQuantity.1"),
            description: t("home.cardText.1"),
            image: Img1,
            link: "/ginseng",
        },
        {
            id: 2,
            title: t("home.cardTitle.2"),
            quantity: t("home.cardQuantity.2"),
            description: t("home.cardText.2"),
            image: Img2,
            link: "/ginseng",
        },
        {
            id: 3,
            title: t("home.cardTitle.3"),
            "quantity": t("home.cardQuantity.3"),
            description: t("home.cardText.3"),
            image: Img3,
            link: "/ginseng",
        }
    ];

    return (
        <div className="Home container">
            <div className="bg-white text-gray-900">
                {/* Hero Section */}
                <section className="bg-red-600 text-white py-16">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold">{t("home.title")}</h1>
                        <p className="text-lg mt-4">{t("home.text")}</p>
                    </div>
                </section>

                {/* Product Showcase */}
                <section className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">{t("home.cardMaintitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-100 border border-[#efefef] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img src={product.image} alt={product.title} className="w-full h-64 lg:w-[350px] lg:h-[350px] object-contain rounded-md mb-4" />
                                <h3 className="text-2xl text-red font-semibold mb-2">{product.title}</h3>
                                <h3 className="text-sm font-red font-semibold mb-2">{product.quantity}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <a
                                    href={product.link}
                                    className="inline-block bg-red text-[white] py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
                                >
                                    {t("home.btn.1")}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-red-50 py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">{t("home.title2")}</h2>
                        <p className="text-lg mb-8">{t("home.text2")}</p>
                        <Link
                            to="/contact"
                            className="bg-red text-[white] py-3 px-8 rounded hover:bg-red-700 transition-colors duration-300"
                        >
                            {t("home.btn.2")}
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
