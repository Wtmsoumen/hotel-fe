"use client";

import ListingFAQ from "../listing/components/ListingFAQ";
import HeroSection from "./components/HeroSection";
import register from "../../public/images/register.png";
import phoneTextCU from "../../public/images/phoneTextCU.svg"
import mailCU from "../../public/images/mailCU.svg"
import locationCU from "../../public/images/locationCU.svg"
import Image from "next/image";
import Link from "next/link";
import GetInTouch from "./components/GetInTouch";


export default function ContactUsPage() {

    let contactInfo = [
        {
            title: "Phone Number",
            icon: phoneTextCU,
            link: [{ name: "+(251) 854-6308", href: "tel:+(251) 854-6308" }, { name: "+(469) 537-2410", href: "tel:+(469) 537-2410" }],
        },
        {
            title: "Email Address",
            icon: mailCU,
            link: [{ name: "hello@example.com", href: "mailto:hello@example.com" }],
        },
        {
            title: "Our Location",
            icon: locationCU,
            link: [{ name: "123 Seaside Retreat Lane, Palm Cove, FL 33140, United States", href: "https://maps.app.goo.gl/iAtfNdNu62ZUpPKp6" }],
        }
    ]

    return (
        <>
            <HeroSection />
            <section className="py-10 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
                    <h2 className="section-title leading-tight text-3xl sm:text-4xl lg:text-[48px] font-medium">
                        Plan your perfect stay—<br />contact us today
                    </h2>
                    <p className="text-black text-sm leading-relaxed font-light w-full sm:w-[50%]">
                        Start your journey to luxury and relaxation with ease. Contact us today to reserve your villa, customize your stay, and ensure every detail is perfect. Your dream escape is just a click away!
                    </p>
                    <div className="w-full flex items-center justify-between pt-10">
                        {contactInfo.map((v, i) =>
                            <div key={i} className={`flex w-[33%] h-[-webkit-fill-available] pt-8 `}>
                                <div className={`${i === 0 ? `` : `border-l`} mr-12 h-[-webkit-fill-available]`} />
                                <div className="flex flex-col items-center">
                                    <div className="mb-4 bg-[#D8A95B1F] w-20 h-20 rounded-[20px] rotate-45 flex items-center justify-center">
                                        <Image src={v?.icon} alt={v?.title} width={24} height={24} className="h-12.5 w-auto -rotate-45" />
                                    </div>
                                    <h3 className={`font-medium text-lg mb-2 text-black`}>{v.title}</h3>
                                    {v.link.map((val: any, i) =>
                                        <Link className={`text-sm leading-relaxed text-[#1A1A1A] px-10`} target="_blank" key={i} href={`${val?.href}`}>{val?.name}</Link>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <GetInTouch />
            <ListingFAQ />
        </>
    );
}