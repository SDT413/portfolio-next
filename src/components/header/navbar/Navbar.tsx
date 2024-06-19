import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useVisual } from "@/hooks/useVisual";
import { useActions } from "@/hooks/useActions";

const Navbar = () => {
  const visual = useVisual();
  const { setActiveTab } = useActions();

  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const toggleExpansion = () => {
    isExpanded
      ? (document.getElementsByTagName("html")[0].style.overflow = "auto")
      : (document.getElementsByTagName("html")[0].style.overflow = "hidden");
    setIsExpanded((prev: boolean) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className={styles.navbar}>
        <Link
          href="#home"
          className={
            visual.activeTab === "home"
              ? styles.navbar_link_active
              : styles.navbar_link
          }
          onClick={() => {
            setActiveTab("home");
            toggleExpansion();
          }}
        >
          Home
        </Link>
        <Link
          href="#about"
          className={
            visual.activeTab === "about"
              ? styles.navbar_link_active
              : styles.navbar_link
          }
          onClick={() => {
            setActiveTab("about");
            toggleExpansion();
          }}
        >
          About
        </Link>
        <Link
          href="#education"
          className={
            visual.activeTab === "education"
              ? styles.navbar_link_active
              : styles.navbar_link
          }
          onClick={() => {
            setActiveTab("education");
            toggleExpansion();
          }}
        >
          Education
        </Link>
        <Link
          href="#projects"
          className={
            visual.activeTab === "projects"
              ? styles.navbar_link_active
              : styles.navbar_link
          }
          onClick={() => {
            setActiveTab("projects");
            toggleExpansion();
          }}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={
            visual.activeTab === "contact"
              ? styles.navbar_link_active
              : styles.navbar_link
          }
          onClick={() => {
            setActiveTab("contact");
            toggleExpansion();
          }}
        >
          Contact
        </Link>
      </nav>
      <div className={styles.burger} onClick={toggleExpansion}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div
        className={styles.navbar_overlay}
        style={{ width: isExpanded ? "100%" : "0%" }}
      >
        <nav className={styles.navbar_mobile}>
          <Link
            href="#home"
            className={
              visual.activeTab === "home"
                ? styles.navbar_link_active
                : styles.navbar_link
            }
            onClick={() => {
              setActiveTab("home");
              toggleExpansion();
            }}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={
              visual.activeTab === "about"
                ? styles.navbar_link_active
                : styles.navbar_link
            }
            onClick={() => {
              setActiveTab("about");
              toggleExpansion();
            }}
          >
            About
          </Link>
          <Link
            href="#education"
            className={
              visual.activeTab === "education"
                ? styles.navbar_link_active
                : styles.navbar_link
            }
            onClick={() => {
              setActiveTab("education");
              toggleExpansion();
            }}
          >
            Education
          </Link>
          <Link
            href="#projects"
            className={
              visual.activeTab === "projects"
                ? styles.navbar_link_active
                : styles.navbar_link
            }
            onClick={() => {
              setActiveTab("projects");
              toggleExpansion();
            }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={
              visual.activeTab === "contact"
                ? styles.navbar_link_active
                : styles.navbar_link
            }
            onClick={() => {
              setActiveTab("contact");
              toggleExpansion();
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
