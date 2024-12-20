import { AnimatedEntrance } from "@/app/general components/AnimatedEntrance";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function MessageSection() {
    return (
        <div className="sm:px-20 sm:py-20 px-8 py-8 grid gap-5">
            <AnimatedEntrance>
                <p className="mt-4 text-lg">Congratulations on being accepted into American International School of Medicine.</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>It is with Great pride that I introduce to you an institution, which has grown over the years into an excellent school that provides medical education and training to meet the growing demands for health and health care professionals worldwide.</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>Standing by our mission we strive to provide the most efficient service; and we are committed to the preparation of our students for a lifelong process. To become educators, practitioners, leaders and biomedical researchers who can produce discoverers that enhance the understanding of life processes, leading to disease prevention and curing.</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>Our major strength lies in our ability to attract and maintain quality faculty and staff with the experiences necessary to provide the highest standard of training and services required to fulfil our mission.</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>At AISM, we offer a very dynamic and culturally diverse learning environment.</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>As President, I wish to personally extend the key to gateway of acquiring an excellent career in Medical and Health Care sciences. I am confident that your choice to be associated with AISM will be an experience you will always cherish. I wish you a memorable and earnest journey towards success. <Link href={"https://inspirery.com/colin-wilkinson/"} target="_blank" className="text-themelight">Read more</Link></p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p>Welcome to the American International School of Medicine &mdash; AISM</p>
            </AnimatedEntrance>

            <AnimatedEntrance>
                <p className="font-medium sign-font mt-10 sm:text-3xl text-2xl text-theme underline underline-offset-8">Dr. Colin A. Wilkinson</p>
            </AnimatedEntrance>
            <AnimatedEntrance>
                <p className="font-bold sm:text-lg uppercase text-themeDark -mt-3">Founder & Chairman</p>
            </AnimatedEntrance>
            <AnimatedEntrance className="flex items-center gap-3 justify-between w-fit">
                <Link href={""} className="alt-link sm:h-12 h-10 sm:w-12 w-10 rounded-lg grid place-items-center text-theme hover:text-white hover:bg-theme border-2 border-theme">
                    <FaFacebookF className="sm:text-2xl text-xl" />
                </Link>
                <Link href={""} className="alt-link sm:h-12 h-10 sm:w-12 w-10 rounded-lg grid place-items-center text-theme hover:text-white hover:bg-theme border-2 border-theme">
                    <FaInstagram className="sm:text-2xl text-xl" />
                </Link>
                <Link href={""} className="alt-link sm:h-12 h-10 sm:w-12 w-10 rounded-lg grid place-items-center text-theme hover:text-white hover:bg-theme border-2 border-theme">
                    <FaLinkedinIn className="sm:text-2xl text-xl" />
                </Link>
            </AnimatedEntrance>
        </div>
    )
}
