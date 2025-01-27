import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import productsData from "@/data/productsData";

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className="Home container">
            <div className="bg-white text-gray-900">
                <section className="bg-red-600 text-white py-16">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold">{t("home.title")}</h1>
                        <p className="text-lg mt-4">{t("home.text")}</p>
                    </div>
                </section>

                <section className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">{t("home.cardMainTitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {productsData.map((product) => (
                            <div key={product.id} className="bg-gray-100 border border-[#efefef] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img src={product.image} alt={t(product.title)} className="w-full h-64 lg:w-[350px] lg:h-[350px] object-contain rounded-md mb-4" />
                                <h3 className="text-2xl text-red font-semibold mb-2">{t(product.title)}</h3>
                                <h3 className="text-sm font-red font-semibold mb-2">{t(product.quantity)}</h3>
                                <p className="text-gray-700 mb-4">{t(product.description)}</p>
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
