import LuxuryRoomCol from "../../../public/images/LuxuryRoomCol.png"
import Image from "next/image";

export default function WelcomeSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-16 items-center">
            {/* Left – media collage */}
            <div className="relative">
                <Image src={LuxuryRoomCol} alt="LuxuryRoomCol" width={1920} height={1080} className="" />
            </div>

            {/* Right – text */}
            <div className="flex flex-col w-full">
                <div className="text-left mb-4">
                    <span className="section-tag">Discount</span>
                    <h2 className="section-title mb-3">Welcome to<br />Stayent</h2>
                    <div className="flex items-center justify-start gap-2">
                        <div className="border-b-2 border-[#D8A95B] w-16" />
                        <div className="border-b-2 border-[#D8A95B] w-4" />
                        <div className="border-b-2 border-[#D8A95B] w-4" />
                    </div>
                </div>
                <p className="text-sm text-black leading-relaxed mb-6">
                    Vestibulum auctor nec leo vel fermentum. Quisque mauris dolor, congue nec orci a, suscipit mollis erat. Curabitur sit amet nulla scelerisque nibh molestie egestas et vel magna.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae cursus lacus. Donec vitae tincidunt tellus. Nam sagittis sem id aliquam consectetur. Aliquam quam ligula, maximus et tincidunt et, maximus vitae velit. Donec nec euismod ligula, venenatis posuere turpis. Nulla nunc augue, malesuada eu mattis et, dapibus non nibh. Cras aliquet aliquam felis sed posuere. Donec tempus vitae ipsum sit amet convallis. Ut non urna rhoncus, tristique magna sed, ullamcorper elit.
                </p>
                {/* <button className="btn-amber px-8 py-4 rounded-full text-base font-medium! uppercase w-fit">
                    Start Planning
                </button> */}
            </div>
        </section>
    );
}