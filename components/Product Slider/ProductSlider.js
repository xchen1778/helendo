import { useRef, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "./Productslider.module.scss";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function ProductSlider() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
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
          <Swiper
            direction={"horizontal"}
            slidesPerView={3}
            spaceBetween={60}
            modules={[Navigation]}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            speed={800}
            className={styles.swiper}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-1.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-2.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-3.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-1.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-2.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.singleProduct}>
                <img
                  src="/pillow-3.png"
                  alt="Essential Boucle Pillow"
                  className={styles.productImage}
                />
                <div className={styles.productAction}>
                  <div className={styles.productInfo}>
                    <h4 className={styles.productName}>
                      Essential Boucle Pillow
                    </h4>
                    <p className={styles.productPrice}>
                      $59 or as low as $5/mo
                    </p>
                  </div>
                  <div className={styles.productButton}>
                    <MdOutlineAddShoppingCart />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className={styles.swiperNavPrev} ref={swiperNavPrevRef}></div>
            <div className={styles.swiperNavNext} ref={swiperNavNextRef}></div>
          </Swiper>
        </motion.div>
      )}
    </InView>
  );
}

export default ProductSlider;
