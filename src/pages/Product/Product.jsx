import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productInnerData from "@/data/productInnerData";
import { IoArrowBackSharp } from "react-icons/io5";
import { useEffect, useMemo, useState } from "react";

const Product = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const products = useMemo(() => productInnerData, []);

    useEffect(() => {
        const selectedProduct = products.find((item) => item.id === +id);
        setProduct(selectedProduct);
    }, [id, products]);

    if (!product) {
        return <div className="text-center my-28">{t("products.notFound")}</div>;
    }

    // console.log(product);

    return (
        <div className="p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <img src={product.img} alt={product.title} className="h-64 object-contain rounded-md mx-auto" />
                <h1 className="text-3xl font-bold mb-4 text-center">{t(product.title)}</h1>
                <p className="text-lg mb-6 text-gray-700 text-center">{t(product.description)}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.ingredientsTitle)}</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                        {product.ingredients.map((item, index) => (
                            <li key={index}>{t(item)}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.compositionTitle)}</h2>
                    <p className="text-gray-600 pl-5">{t(product.composition)}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.usageTitle)}</h2>
                    <p className="text-gray-600 pl-5">{t(product.usage)}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.attentionTitle)}</h2>
                    <p className="text-gray-600 pl-5">{t(product.attention)}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.benefitsTitle)}</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                        {product.benefits.map((benefit, index) => (
                            <li key={index}>{t(benefit)}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.targetTitle)}</h2>
                    <p className="text-gray-600 pl-5">{t(product.target)}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.howToDrinkTitle)}</h2>
                    <p className="text-gray-600">{t(product.howToDrink)}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{t(product.whyThisProductTitle)}</h2>
                    <p className="text-gray-600">{t(product.whyThisProduct)}</p>
                </section>

                <div className="text-center mt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center mx-auto bg-red text-[white] py-3 px-8 rounded hover:bg-red-700 transition-colors duration-300"
                    >
                        <IoArrowBackSharp className="mr-2" />
                        {t("products.backToProducts")}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product;