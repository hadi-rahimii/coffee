import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="index.html" class={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 class="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </a>
        <button
          type="button"
          class={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          class={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div class={`${styles.navbar_nav} ml-auto p-4`}>
          <Link
              href="/"
              className={`${styles.nav_link} ${styles.active_nav_link}`}
            >
              Home
            </Link>

            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link}`}>
              Services
            </Link>
            <Link href="/menu" className={`${styles.nav_link}`}>
              Menu
            </Link>

           
            <div class={`${styles.dropdown}`}>
              <a
                href="#"
                class={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div class={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
              <Link href="/reservation" className={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href="/testimonial" className={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" class={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
