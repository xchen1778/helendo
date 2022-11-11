import { useRef, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ProductSlider from "../components/Product Slider/ProductSlider";
import Footer from "../components/Footer/Footer";
import AnimatedWords from "../components/AnimatedTexts/AnimatedWords";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Home() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Helendo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.landingPage}>
        <section className={styles.heroSection}>
          <div className={styles.heroLeftSpace}></div>
          <div className={styles.heroSlide}>
            <Swiper
              initialSlide={0}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: swiperNavPrevRef.current,
                nextEl: swiperNavNextRef.current,
              }}
              speed={800}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              loop
              className={styles.swiper}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                swiper.params.navigation.nextEl = swiperNavNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <img
                  src="/hero-slide-1.jpg"
                  className={styles.swiperSlideImage}
                  alt="slider image 1"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img
                  src="/hero-slide-2.jpg"
                  className={styles.swiperSlideImage}
                  alt="slider image 2"
                />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <img
                  src="/hero-slide-3.jpg"
                  className={styles.swiperSlideImage}
                  alt="slider image 3"
                />
              </SwiperSlide>
              <div
                className={styles.swiperNavPrev}
                ref={swiperNavPrevRef}
              ></div>
              <div
                className={styles.swiperNavNext}
                ref={swiperNavNextRef}
              ></div>
            </Swiper>
          </div>
        </section>
        <section className={styles.heroTextSection}>
          <div className={styles.heroHeadline}>
            <AnimatedWords
              texts={[{ text: "Happy pillows," }, { text: "happy life." }]}
            />
          </div>
          <button className={styles.heroButton}>
            shop now
            <span className={styles.heroButtonArrow}>
              <BsArrowRight />
            </span>
          </button>
        </section>
        <section className={styles.productSection}>
          <div className={styles.productSectionContent}>
            <div className={styles.productHeader}>
              <div className={styles.productTitle}>
                <AnimatedWords texts={[{ text: "Popular Products" }]} />
              </div>
              <button className={styles.productViewButton}>
                view all <BsArrowRight />
              </button>
            </div>
            <ProductSlider />
          </div>
        </section>
        <section className={styles.serviceSection}>
          <InView triggerOnce threshold={0.25}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{
                  opacity: 0,
                  y: "3%",
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: "3%",
                      }
                }
                transition={{ duration: 0.8 }}
              >
                <div className={styles.services}>
                  <div className={styles.service}>
                    <img
                      src="/truck.png"
                      alt="truck icon"
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>
                        Fast & free shipping
                      </h3>
                      <p className={styles.serviceContent}>
                        Every single order ships for free. No minimums, no
                        tiers, no fine print whatsoever.
                      </p>
                    </div>
                  </div>
                  <div className={styles.service}>
                    <img
                      src="/package.png"
                      alt="package icon"
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>
                        Easy-to-move design
                      </h3>
                      <p className={styles.serviceContent}>
                        Our innovative modular design is driven by the belief
                        that furniture should fit this home, and the next one.
                      </p>
                    </div>
                  </div>
                  <div className={styles.service}>
                    <img
                      src="/fabric.png"
                      alt="fabric icon"
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>Weaving heritage</h3>
                      <p className={styles.serviceContent}>
                        Our pillows are made in Panipat, India; home of a
                        globally-respected weaving community.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </section>
        <Footer />
      </main>
    </div>
  );
}
