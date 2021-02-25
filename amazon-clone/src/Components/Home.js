import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home_image"
                src="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
                alt=""
                />
                
                <div className="home__row">
                    <Product
                    id="241679534"
                    title="Zero to One: Notes on start UPs or How To Build The Future"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Xygne8+qL.jpg"
                    price={190}
                    rating={3}
                    />

                    <Product
                    id="124579654"
                    title="Amazon ECho Dot(4th Gen) with clock"
                    image="data:image/jpeg;base64,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"
                    price={5499}
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    id="124579655"
                    title="Alan Walker Jacket-Galaxy 3D Jacket"
                    image="https://cdn.shopify.com/s/files/1/0040/1054/1154/products/YH03-1_b239e932-f033-4b70-8eb7-1beeb156683b_1024x1024.jpg?v=1571730851"
                    price={3000}
                    rating={5}
                    />
                <Product
                    id="124579614"
                    title="AR Black Dial Men's Watch"
                    image="https://customwatch.in/wp-content/uploads/2019/01/2Q4A3413-1.jpg"
                    price={1190}
                    rating={4}
                    />
                <Product
                    id="124579124"
                    title="Sony PS4 CUH-2208B Console, 1TB Slim with 3 Free Games: Detroit, The Last of Us, God of War"
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOU33d1w-tYCvLME9eVoeAnuEarWbVdRrXF6mlosZ8D1MkKF6UdMgQwBj0HLyrM3q8kGlqpUCYvjVvS_Bo8ycmj0B5bP1CIp6Bo3KvmzzZCzevNmY-IG_jNA&usqp=CAE"
                    price={27990}
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product 
                    id="124574512"
                    title="ASUS Republic of Gamers Strix XG49VQ 49 32:9 Ultra-Wide Curved 144 Hz FreeSync LCD Gaming Monitor"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj89BUHAgVZQVnoKN9kJ7e-HZ1-JxtPPbBMQ&usqp=CAU"
                    price={65020}
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
