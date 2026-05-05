import React from 'react'
import register from "../../../public/images/register.png";
import Image from "next/image";


const GetInTouch = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 shadow-[0px_6px_46.1px_0px_#0000001A] rounded-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium mb-4">Get In Touch</h2>
                    <p className="text-black font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.</p>
                </div>
                <div className="flex gap-12 items-center">
                    <div className='w-1/2'>
                        <h3 className="text-2xl sm:text-[40px] font-medium mb-10 leading-snug">We're always here to help, Contact us Today</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="text-sm text-black block">Your First Name<span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full border-b border-[#656565] focus:outline-none pb-2 bg-transparent" />
                                </div>
                                <div>
                                    <label className="text-sm text-black block">Your Last Name<span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full border-b border-[#656565] focus:outline-none pb-2 bg-transparent" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="text-sm text-black block">Email Address<span className="text-red-500">*</span></label>
                                    <input type="email" className="w-full border-b border-[#656565] focus:outline-none pb-2 bg-transparent" />
                                </div>
                                <div>
                                    <label className="text-sm text-black block">Phone Number<span className="text-red-500">*</span></label>
                                    <input type="number" className="w-full border-b border-[#656565] focus:outline-none pb-2 bg-transparent remove-number-spinner" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-black block">Write your Message</label>
                                <textarea rows={3} className="w-full border-b border-[#656565] focus:outline-none pb-2 bg-transparent resize-none" />
                            </div>
                            <button type="submit" className="bg-[#D8A95B] text-black font-medium uppercase tracking-widest px-10 py-4 rounded-full hover:bg-[#c49848] transition-colors text-sm">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-1/2 h-[520px]">
                        <Image src={register} alt="Hotel Lobby" width={600} height={500} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch