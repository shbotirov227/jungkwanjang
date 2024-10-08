import Img1 from "@/assets/product-img1.png";
import Img2 from "@/assets/product-img2.png";
import Img3 from "@/assets/product-img3.png";

const Home = () => {

    const products = [
        {
            id: 1,
            title: 'Korean Red Ginseng Extract',
            description: 'Powerful red ginseng extract to boost your immunity and energy levels.',
            image: Img1,
            link: '/ginseng',
        },
        {
            id: 2,
            title: 'Korean Red Ginseng Capsule',
            description: 'Easy-to-consume red ginseng capsules for daily energy support.',
            image: Img2,
            link: '/ginseng',
        },
        {
            id: 3,
            title: 'Korean Red Ginseng Tonic',
            description: 'Refreshing tonic made with premium red ginseng to enhance vitality.',
            image: Img3,
            link: '/ginseng',
        },
        // {
        //   id: 4,
        //   title: 'Korean Red Ginseng Candy',
        //   description: 'Delicious ginseng candies to enjoy the health benefits of ginseng anytime.',
        //   image: '/path-to-image-4.jpg',
        //   link: '#',
        // },
    ];

    return (
        <div className="Home container">
            <div className="bg-white text-gray-900">
                {/* Hero Section */}
                <section className="bg-red-600 text-white py-16">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold">Welcome to JungKwanJang</h1>
                        <p className="text-lg mt-4">Premium Korean Red Ginseng Products for Health and Wellness</p>
                    </div>
                </section>

                {/* Product Showcase */}
                <section className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Explore Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-100 border border-[#efefef] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <a
                                    href={product.link}
                                    className="inline-block bg-red text-[white] py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-red-50 py-16">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Boost Your Health with Korean Red Ginseng</h2>
                        <p className="text-lg mb-8">Experience the benefits of over 120 years of ginseng expertise.</p>
                        <a
                            href="#"
                            className="bg-red text-[white] py-3 px-8 rounded hover:bg-red-700 transition-colors duration-300"
                        >
                            Shop Now
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
