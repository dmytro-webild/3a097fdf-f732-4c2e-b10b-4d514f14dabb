"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Marketplace"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Your Trusted Marketplace"
      description="Buy and sell your favorite items with confidence. A secure platform designed for seamless transactions."
      testimonials={[
        {
          name: "Alice P.",
          handle: "@alice",
          testimonial: "The best platform to buy and sell my items safely.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
        },
        {
          name: "Bob K.",
          handle: "@bob",
          testimonial: "Fast transactions and great support. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-short-curly-hair-holding-smartphone-pointing-with-finger-it-smiling-cheerfully-standing-white-wall_141793-29176.jpg",
        },
        {
          name: "Charlie M.",
          handle: "@charlie",
          testimonial: "User friendly and very reliable for my small business.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67170.jpg",
        },
        {
          name: "Diana S.",
          handle: "@diana",
          testimonial: "Everything I needed in one place. Absolutely love it.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg",
        },
        {
          name: "Evan L.",
          handle: "@evan",
          testimonial: "Secure and fast. The only place I shop for electronics.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098593.jpg",
        },
      ]}
      buttons={[
        {
          text: "Start Selling",
          href: "#products",
        },
        {
          text: "Browse Items",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-holding-card-working-laptop_23-2148304910.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-working-his-office-laptop_329181-16292.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-working-his-office-businessperson-professional-environment_482257-32723.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/working-home-drinking-good-coffee_329181-14511.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-people-working-office_329181-16253.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-young-woman-recording-video-her-fashion-blog-about-open-box-new-shoes_662251-2276.jpg",
          alt: "User 5",
        },
      ]}
      avatarText="Trusted by 10,000+ happy sellers"
      marqueeItems={[
        {
          type: "text",
          text: "Verified Quality",
        },
        {
          type: "text",
          text: "Instant Payments",
        },
        {
          type: "text",
          text: "Secure Logistics",
        },
        {
          type: "text",
          text: "24/7 Support",
        },
        {
          type: "text",
          text: "Global Reach",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Connecting Communities through Trade"
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Pro Gadget",
          price: "$199",
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-small-grocery-carts_23-2147957600.jpg",
        },
        {
          id: "p2",
          name: "Luxury Jacket",
          price: "$299",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-laptop_23-2148539780.jpg",
        },
        {
          id: "p3",
          name: "Minimal Decor",
          price: "$49",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-gift-concept_23-2148102938.jpg",
        },
        {
          id: "p4",
          name: "Smart Speaker",
          price: "$129",
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-smart-home-device_23-2151039322.jpg",
        },
        {
          id: "p5",
          name: "Lifestyle Watch",
          price: "$89",
          imageSrc: "http://img.b2bpic.net/free-photo/handbag-with-money-flowers-near-sunglasses-lipstick_23-2148122212.jpg",
        },
        {
          id: "p6",
          name: "Home Kettle",
          price: "$59",
          imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263197.jpg",
        },
      ]}
      title="Explore Latest Listings"
      description="Discover high quality items from verified sellers across the nation."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Verified Sellers",
          description: "Shop with peace of mind knowing all sellers are verified.",
          imageSrc: "http://img.b2bpic.net/free-photo/orange-faded-flower-vase_23-2148073849.jpg",
        },
        {
          title: "Secure Payments",
          description: "Safe transactions backed by modern encryption technology.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-drinking-water-break_23-2148898075.jpg",
        },
        {
          title: "Fast Shipping",
          description: "Reliable logistics ensures your items arrive on time.",
          imageSrc: "http://img.b2bpic.net/free-photo/eucalyptus-white-vase-table_23-2149420689.jpg",
        },
      ]}
      title="Why Choose Us?"
      description="Experience a marketplace tailored to your needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          title: "Active Users",
          description: "A growing community.",
          imageSrc: "http://img.b2bpic.net/free-photo/headset-aa-white-surface_181624-21804.jpg",
        },
        {
          id: "m2",
          value: "50k+",
          title: "Daily Transactions",
          description: "Safe and sound.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-cup-from-shelf-homeware-store_169016-43471.jpg",
        },
        {
          id: "m3",
          value: "99%",
          title: "Satisfaction",
          description: "Rated by you.",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-word-home-blurred-background-with-glass-milk-cookies_169016-25347.jpg",
        },
      ]}
      title="Our Impact"
      description="Growing daily for you."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg",
        },
        {
          id: "2",
          name: "Mike D",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-woman-standing-outside-office-buildings-business-success-concept_58466-11854.jpg",
        },
        {
          id: "3",
          name: "Anna K",
          imageSrc: "http://img.b2bpic.net/free-photo/customer-experience-creative-collage_23-2149346502.jpg",
        },
        {
          id: "4",
          name: "John B",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-unknown-young-man-posing_23-2149417573.jpg",
        },
        {
          id: "5",
          name: "Lisa R",
          imageSrc: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
        },
      ]}
      cardTitle="What Users Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Need Help? Get in Touch."
      description="Our team is always here to assist with any questions you might have."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Support",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Marketplace, Inc."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
