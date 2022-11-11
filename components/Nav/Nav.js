import Image from "next/image";
import Link from "next/link";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdPermIdentity,
} from "react-icons/md";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          className={styles.logo}
          src="/logo.png"
          width={100}
          height={100}
        />
      </Link>

      <div className={styles.menuItems}>
        <button>
          <MdFavoriteBorder />
        </button>
        <button>
          <MdOutlineShoppingCart />
        </button>
        <button>
          <MdPermIdentity />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
