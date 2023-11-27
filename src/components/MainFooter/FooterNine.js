import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { links, phone, email, address3, subscribeText, year, author, socials } =
  mainFooter;

const FooterNine = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <>
      <div className="footer-nine__bottom">
        <div className="auto-container">
          <p className="footer-nine__copyright">
            © Development Partner 2023 by <a target="_blank" href="https://www.bugsbeeit.com">BUGS BEE IT</a>
          </p>
         
        </div>
      </div>
    </>
  );
};

export default FooterNine;
