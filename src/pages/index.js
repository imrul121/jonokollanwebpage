import AboutEleven from "@/components/AboutSection/AboutEleven";
import AboutTen from "@/components/AboutSection/AboutTen";
import CallToSectionFour from "@/components/CallToSection/CallToSectionFour";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderEight from "@/components/Header/HeaderEight";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterEight from "@/components/MainFooter/FooterEight";
import FooterNine from "@/components/MainFooter/FooterNine";
import MapBox from "@/components/MapSection/MapBox";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import SliderEight from "@/components/SliderSection/SliderEight";
import TeamThree from "@/components/TeamSection/TeamThree";
import TestimonialsEight from "@/components/TestimonialsSection/TestimonialsEight";
import preloader from "@/images/update-01-10-2021/preloader-8.png";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home 08" preloader={preloader}>
      <Style
        font="DM Sans, sans-serif"
        bFont="DM Sans, sans-serif"
        black="#182e65"
        text="#7c8498"
        base="#ffc001"
        baseRgb="255, 192, 1"
        scrollToTopColor="var(--thm-black)"
        blackRgb="24, 46, 101"
      />
      <HeaderEight />
      <MobileMenu />
      <SearchPopup />
      <SliderEight />
      <CallToSectionFour />
      <AboutEleven />
      <ServiceEight />
      <AboutTen />
      <TestimonialsEight />
      <FeaturedSection className="featured-section__about-two" />
      <TeamThree className="team-three__about-two" />
      <ParallaxSection />
      <FooterEight />   
      <ContactSectionTwo />
      <ContactInfoTwo />
      <MapBox />
      <FooterNine />
    </Layout>
  );
};

export default Home;
