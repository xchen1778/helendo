import Link from "next/link";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Link href="/">
            <img
              src="/logo-white.png"
              alt="helendo logo"
              className={styles.logo}
            />
          </Link>
          <p className={styles.footerText}>
            Helendo is a family business, specializing in making one-of-a-kind,
            vintage, traditional authentic and trendy decorative pillows.
          </p>
        </div>
        <div></div>
        <div className={styles.footerLinks}>
          <h2 className={styles.footerLinksTitle}>Quick Shop</h2>
          <a className={styles.footerLink}>Pillows</a>
          <a className={styles.footerLink}>Pillow Sets</a>
        </div>
        <div className={styles.footerLinks}>
          <h2 className={styles.footerLinksTitle}>Quick Links</h2>
          <a className={styles.footerLink}>About Us</a>
          <a className={styles.footerLink}>Contact Us</a>
        </div>
        <div className={styles.footerLinks}>
          <h2 className={styles.footerLinksTitle}>Shipping & Returns</h2>
          <a className={styles.footerLink}>Shipping Policy</a>
          <a className={styles.footerLink}>Return Policy</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerRights}>Copyright © 2022 Helendo.</p>
        <div className={styles.footerIcons}>
          <img src="/vi.webp" alt="visa" className={styles.footerIcon} />
          <img src="/mas.webp" alt="mastercard" className={styles.footerIcon} />
          <img
            src="/ae.webp"
            alt="american express"
            className={styles.footerIcon}
          />
          <img src="/di.webp" alt="discover" className={styles.footerIcon} />
          <img src="/ma.webp" alt="maestro" className={styles.footerIcon} />
          <img src="/dc.webp" alt="diners club" className={styles.footerIcon} />
          <img src="/jcb.webp" alt="jcb" className={styles.footerIcon} />
          <img src="/pp.webp" alt="paypal" className={styles.footerIcon} />
          <img src="/apa.webp" alt="apple pay" className={styles.footerIcon} />
          <img src="/gp.webp" alt="google pay" className={styles.footerIcon} />
          <img src="/ap.webp" alt="after pay" className={styles.footerIcon} />
          <img src="/kl.webp" alt="klarna" className={styles.footerIcon} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
