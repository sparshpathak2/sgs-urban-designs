'use client'

import FAQs from "@/components/FAQs";
import HeroCarousel from "@/components/HeroCarousel3";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { IconArrowAutofitDown, IconArrowsMaximize, IconBoxMultiple, IconBrandSpeedtest, IconBrush, IconBugOff, IconCar, IconCarSuv, IconDiamond, IconDroplets, IconEngine, IconFlameOff, IconFlare, IconGasStation, IconHammerOff, IconIcons, IconLeaf2, IconLock, IconLockAccess, IconPalette, IconPlant, IconRulerMeasure, IconShieldCheck, IconSparkles, IconSquaresSelected, IconTools } from "@tabler/icons-react";
import { ArrowRightIcon, ArrowUpRight, Clock, MapPin, Store, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Libre_Baskerville } from "next/font/google";
import { useState } from "react";
import { FormModalComponent } from "@/components/FormModalComponent";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

// const products = [
//   {
//     title: "Modular Cleanroom Partitions",
//     description:
//       "Precision-engineered partitions that ensure controlled environments with seamless modular design.",
//     href: "/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Cleanroom+Partitions",
//   },
//   {
//     title: "Metal Doorsets",
//     description:
//       "High-strength metal doors crafted for durability, safety, and sleek architectural appeal.",
//     href: "/products?category=Fire+Rated+Doors&subCategory=Steel&subSubCategory=Single+Glazed",
//   },
//   {
//     title: "Cleanroom Equipment",
//     description:
//       "Advanced equipment designed to maintain hygiene, efficiency, and contamination control.",
//     href: "/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Cleanroom+Equipment",
//   },
//   {
//     title: "Office Partitions",
//     description:
//       "Smart, space-efficient partition systems that enhance privacy and modern office aesthetics.",
//     href: "/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Office+Partitions",
//   },
//   {
//     title: "Lab Furniture",
//     description:
//       "Ergonomic, chemical-resistant lab furniture built for performance and precision.",
//     href: "/products?category=Panels+%26+Partitions&subCategory=&subSubCategory=Lab+Furniture",
//   },
//   {
//     title: "Modular Kitchens",
//     description:
//       "Elegant and functional kitchen solutions customized for style and convenience.",
//     href: "/",
//   },
//   {
//     title: "Modular Wardrobe Furniture",
//     description:
//       "Space-optimized wardrobe systems tailored for modern living.",
//     href: "/",
//   },
//   {
//     title: "Fire Doors",
//     description:
//       "Certified fire-rated doors designed to protect life and property with proven reliability.",
//     href: "/products?category=Fire+Rated+Doors&subCategory=Wooden&subSubCategory=Laminate",
//   },
// ];

const products = [
  {
    title: "Modular Kitchen",
    description:
      "Stylish, space-efficient modular kitchen designs crafted for maximum functionality and modern aesthetics.",
    href: "/products?category=Interiors&subCategory=Kitchen&subSubCategory=Modular+Kitchen",
    image:
      "https://images.unsplash.com/photo-1654176154397-3133364f22e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "TV Cabinets",
    description:
      "Contemporary TV units that blend storage, elegance, and smart space utilization for your living room.",
    href: "/products?category=Interiors&subCategory=Living+Room&subSubCategory=TV+Cabinets",
    image:
      "https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?q=80&w=1578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wardrobes",
    description:
      "Custom-built wardrobe solutions offering optimal storage, seamless layouts, and premium finishes.",
    href: "/products?category=Interiors&subCategory=Bedroom&subSubCategory=Wardrobes",
    image:
      "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bathrooms",
    description:
      "Elegant and functional bathroom interiors designed with premium materials and modern sanitary fittings.",
    href: "/products?category=Interiors&subCategory=Bathroom&subSubCategory=Modern+Bathrooms",
    image:
      "https://images.unsplash.com/photo-1722858810036-e917b4dd3f3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const features = [
//   {
//     title: "Termite Free",
//     icon: IconBugOff,
//     description:
//       "Built to resist termites and ensure long-lasting protection for your spaces",
//   },
//   {
//     title: "Fire Resistant",
//     icon: IconFlameOff,
//     description:
//       "Designed with advanced materials to withstand high temperatures & enhance safety",
//   },
//   {
//     title: "Durable",
//     icon: IconShieldCheck,
//     description:
//       "Engineered for strength and longevity, performing flawlessly for years",
//   },
//   {
//     title: "Eco Friendly",
//     icon: IconPlant,
//     description:
//       "Crafted using sustainable materials with minimal environmental impact",
//   },
//   {
//     title: "Maintenance Free",
//     icon: IconHammerOff,
//     description:
//       "Enjoy hassle-free performance without the need for frequent upkeep",
//   },
//   {
//     title: "Design Flexibility",
//     icon: IconBrush,
//     description:
//       "Customizable designs to match every architectural style and requirement",
//   },
//   {
//     title: "Multi Finish",
//     icon: IconSquaresSelected,
//     description:
//       "Available in a wide range of premium textures and finishes",
//   },
//   {
//     title: "Fully Flush & Flat Surface",
//     icon: IconFlare,
//     description:
//       "Smooth, seamless surfaces that offer a sleek modern look",
//   },
//   {
//     title: "Security",
//     icon: IconLockAccess,
//     description:
//       "Enhanced locking systems and sturdy construction for complete peace of mind",
//   },
//   {
//     title: "Aesthetic Appeal",
//     icon: IconLeaf2,
//     description:
//       "Perfect blend of functionality and style to elevate any space",
//   },
//   {
//     title: "Versatility",
//     icon: IconIcons,
//     description:
//       "Ideal for homes, offices, hotels, and commercial establishments alike",
//   },
//   {
//     title: "Interlocking System",
//     icon: IconLock,
//     description:
//       "Precision-engineered joints for superior strength and stability",
//   },
// ];

const features = [
  {
    title: "Custom Built Designs",
    icon: IconRulerMeasure,
    description:
      "Every kitchen, wardrobe, TV unit, and bathroom is tailored to your exact space and style.",
  },
  {
    title: "Premium Materials",
    icon: IconDiamond,
    description:
      "High-quality boards, laminates, fittings, and hardware ensure long-lasting luxury.",
  },
  {
    title: "Soft-Close Mechanisms",
    icon: IconArrowAutofitDown,
    description:
      "Smooth and silent soft-close hinges & channels for a refined user experience.",
  },
  {
    title: "Space Optimization",
    icon: IconBoxMultiple,
    description:
      "Smart layouts and modular storage maximize every inch of your home.",
  },
  {
    title: "Water & Moisture Resistant",
    icon: IconDroplets,
    description:
      "Bathroom and kitchen units built to resist humidity and everyday splashes.",
  },
  {
    title: "Easy to Clean",
    icon: IconSparkles,
    description:
      "Surfaces designed for low maintenance and effortless daily cleaning.",
  },
  {
    title: "Modern Aesthetics",
    icon: IconPalette,
    description:
      "Minimalist, contemporary, and luxurious designs that elevate the visual appeal.",
  },
  {
    title: "Expert Installation",
    icon: IconTools,
    description:
      "Professionally measured, delivered, and installed with precision and care.",
  },
];


export default function Home() {

  const router = useRouter()
  const [open, setOpen] = useState(false)
  // Called when user confirms location in the popup
  // const handleLocationConfirmed = useCallback(() => {
  //   const userCity = "mumbai" // Replace with logic for actual detection
  //   router.push(`/dealer/${userCity}`)
  // }, [router])

  return (
    <>
      <div className="flex w-full flex-col">
        {/* <LocationPopup onConfirm={handleLocationConfirmed} /> */}
        {/* <LocationPopup /> */}
        <HeroCarousel />

        {/* Produts Section */}
        <div className="flex w-full items-center justify-center py-12 sm:py-20 px-4 md:px-28">

          <div className="flex flex-col gap-6 max-w-7xl w-full">
            <div className="flex flex-col sm:flex-row w-full justify-between gap-4">
              <div className="flex flex-col gap-4 w-full text-center">
                <div className="text-red-500 text-md">PRODUCTS</div>
                <div className={`${libre.className} font-semibold text-2xl md:text-3xl`}>We Value Quality, Admire <br /> Sustainability, Embrace Innovation.</div>
              </div>

              {/* <a
                href="/products"
                className="group flex gap-2 items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 whitespace-nowrap self-start"
              >
                <span className="text-sm">See More</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a> */}


            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">

              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col h-[320px] border border-gray-300 p-4 justify-between bg-white"
                >
                  <div className="flex flex-col gap-2">
                    <div className="text-xl md:text-2xl font-semibold">
                      {product.title}
                    </div>
                    <div className="leading-tight">{product.description}</div>
                  </div>

                  <a
                    href={product.href}
                    className="group flex gap-2 items-center bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-2"
                  >
                    <div className="text-sm">See More</div>
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              ))}

            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="relative h-[400px] group overflow-hidden"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Static Title */}
                  <div className="absolute top-4 left-4 z-10">
                    <h3 className="text-4xl font-semibold text-white drop-shadow-lg">
                      {product.title}
                    </h3>
                  </div>

                  {/* Overlay – visible by default on mobile, transitions only on sm+ */}
                  <div
                    className="
          absolute inset-0
          bg-black/40                   /* Always visible on mobile */
          sm:bg-black/0                 /* Reset for desktop */
          sm:group-hover:bg-black/60    /* Hover effect on desktop */
          sm:transition-colors sm:duration-300
          flex flex-col justify-end
          p-4
        "
                  >
                    {/* Description – visible by default on mobile */}
                    <div
                      className="
            opacity-100                  /* Always visible on mobile */
            sm:opacity-0                 /* Hidden on desktop initially */
            sm:group-hover:opacity-100   /* Fade in on hover desktop */
            sm:transition-opacity sm:duration-300
            text-white space-y-3
          "
                    >
                      <p className="text-xl font-semibold pr-16">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>

        {/* About Section */}
        <div className="flex w-full justify-center bg-white px-4 py-12 sm:py-20 sm:px-28">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0 max-w-7xl">

            {/* LEFT SECTION */}
            <div className="flex flex-col w-full sm:w-1/2 gap-7">
              {/* Top texts (stays above the image) */}
              <div className="flex flex-col gap-4">
                <div className="text-red-500 text-md">ABOUT US</div>
                <div className={`${libre.className} font-semibold text-2xl md:text-3xl`}>
                  Driven by Trust, Defined by Excellence.
                </div>
              </div>

              {/* Background image block:
        - on mobile (default) it has fixed height (h-64)
        - on sm+ it becomes flex-1 so it stretches to match right column height
    */}
              <div
                role="img"
                aria-label="Vipul Motors anniversary image"
                className="w-full h-64 sm:flex-1 bg-cover bg-left"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1723470915155-621e10d20dfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              >
                {/* screen-reader text (optional) */}
                <span className="sr-only">Anniversary image</span>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex w-full sm:w-1/2 flex-col gap-4 sm:px-12 justify-between">
              <div className="flex flex-col gap-3 text-gray-700 leading-relaxed">
                <p>
                  SGS Technical Solutions is a dynamic and innovation-driven manufacturing enterprise delivering precision-engineered solutions across modular kitchens (wooden & stainless steel), fire safety, cleanroom equipment, electrical panels, and insulation systems. Built on a foundation of quality craftsmanship, stringent compliance standards, and customer-centric service, we strive to set new benchmarks in safety, durability, and performance for industrial, commercial, and residential infrastructure.
                </p>
                <p>
                  Led by a team of seasoned industry professionals, SGS Technical Solutions combines advanced manufacturing capabilities with deep technical expertise to ensure robust product development, timely project execution, and unmatched service reliability.
                </p>
                <p>
                  At SGS Technical Solutions, we believe excellence is achieved through a blend of technical expertise, meticulous execution, and customer-centric service. Our team of skilled engineers, technicians, and project managers brings in-depth knowledge, hands-on experience, and dedication to every project, ensuring timely delivery without compromising quality.
                </p>
              </div>

              <a href="/about-us" className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-2">
                <div className="text-sm">Read More</div>
                <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {/* <div className="flex flex-col px-4 py-8 sm:py-20 sm:px-28 gap-4 sm:gap-10"> */}
        <div className="flex w-full items-center justify-center py-12 sm:py-20 px-4 sm:px-28">

          <div className="flex flex-col gap-6 max-w-7xl">

            <div className="flex flex-col w-full text-center gap-4">
              <div className="text-red-500 text-md">FEATURES</div>
              {/* <div className="font-semibold text-2xl md:text-3xl font-libre">We Value Quality, Admire <br /> Sustainability, Embrace Innovation.</div> */}
              <div className={`${libre.className} font-semibold text-2xl md:text-3xl`}>
                Crafting every door with precision,<br /> tailored for your safety.
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-4">

              {features.map((feature, index) => {
                const IconComponent = feature.icon

                return (
                  < div
                    key={index}
                    className="flex flex-col border border-gray-300 p-4 justify-between bg-white"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-red-500">
                        <IconComponent size={28} stroke={1.5} />
                      </div>
                      <div className="text-xl font-semibold">{feature.title}</div>
                      <div className="leading-tight">{feature.description}</div>
                    </div>
                  </div>
                )
              })}

            </div>

          </div>
        </div>

        {/* How it works? */}
        <div className="flex w-full items-center justify-center py-12 sm:py-20 px-4 md:px-28 bg-white">

          <div className="flex gap-6 sm:gap-10 max-w-7xl flex-col sm:flex-row">

            <div className="flex w-full sm:w-1/2 flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="text-red-500 text-md">HOW IT WORKS?</div>
                <div className={`${libre.className} font-semibold text-2xl md:text-3xl`}>Installation, warrantyservice and customer support.</div>
              </div>

              <div onClick={() => setOpen(true)} className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-2">
                <div className="text-sm">Know More</div>
                <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

            </div>

            <div className="flex w-full sm:w-1/2 flex-col gap-2">
              {/* 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full">
                  <div className="flex items-center justify-center w-9 h-9 font-bold text-lg rounded-full bg-red-500 text-white">1</div>
                </div>
                <div className="text-xl font-semibold">Place Your Order</div>
                <div>Built to resist termites and ensure long-lasting protection for your spaces</div>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full">
                  <div className="flex items-center justify-center w-9 h-9 font-bold text-lg rounded-full bg-red-500 text-white">2</div>
                </div>
                <div className="text-xl font-semibold">Technical Team Visits The Site</div>
                <div>Built to resist termites and ensure long-lasting protection for your spaces</div>
              </div>
              {/* 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full">
                  <div className="flex items-center justify-center w-9 h-9 font-bold text-lg rounded-full bg-red-500 text-white">3</div>
                </div>
                <div className="text-xl font-semibold">Your Order At Your Doorstep</div>
                <div>Built to resist termites and ensure long-lasting protection for your spaces</div>
              </div>
              {/* 4 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full">
                  <div className="flex items-center justify-center w-9 h-9 font-bold text-lg rounded-full bg-red-500 text-white">4</div>
                </div>
                <div className="text-xl font-semibold">Installation At Site</div>
                <div>Built to resist termites and ensure long-lasting protection for your spaces</div>
              </div>
              {/* 5 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full">
                  <div className="flex items-center justify-center w-9 h-9 font-bold text-lg rounded-full bg-red-500 text-white">5</div>
                </div>
                <div className="text-xl font-semibold">Customer Support 24/7</div>
                <div>Built to resist termites and ensure long-lasting protection for your spaces</div>
              </div>
            </div>

            {/* </div> */}
          </div>

        </div>

        {/* FAQs Section */}
        {/* <div className="flex flex-col w-full text-center px-4 sm:px-16 py-12 sm:py-24 gap-8">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className={`${libre.className} font-semibold text-2xl md:text-3xl`}>
            Frequently Asked Questions
          </h2>
        </div>
        <FAQs />
      </div> */}

        {/* Testimonials Section */}
        {/* <div className="w-full px-4 py-12 sm:px-16 sm:py-24 bg-white">
        <Testimonials />
      </div> */}

        {/* CTA Section */}
        {/* <div className="flex w-full items-center justify-center py-20 px-2 md:px-28 bg-red-50">

        <div className="flex gap-6 w-full max-w-7xl justify-between">
          <div className={`${libre.className} font-semibold text-2xl md:text-3xl text-red-500`}>Let's Work Together!</div>

          <a href="/contact-us" className="group flex gap-2 items-center border-1 border-red-500 hover:bg-red-600 text-red-500 hover:text-white w-fit h-fit px-4 py-2">
            <div className="text-sm">Let's Talk</div>
            <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div> */}

        <div className="flex w-full items-center justify-center py-8 sm:py-20 px-2 md:px-28 bg-red-500">

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-7xl sm:justify-between items-center">
            <div className={`${libre.className} font-semibold text-2xl md:text-3xl text-red-50`}>Let's Work Together!</div>

            <a href="/contact-us" className="group flex gap-2 items-center border-1 border-white text-white hover:text-white w-fit h-fit px-4 py-2">
              <div className="text-sm">Let's Talk</div>
              <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* WhatsApp Chatbot */}
        <a
          href="https://wa.me/919050725050"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp Chat"
            className="w-14 h-14 hover:scale-105 transition-transform"
          />
        </a>

      </div >

      <FormModalComponent open={open} setOpen={setOpen} />

    </>
  )

}