import Top from "../Components/Top";
import BodySection from "../Components/Body";

import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Pre-Health (Pre-Medical) Sciences | AISM Rigorous Medical Curriculum & Clinical Training",
    description: "Prepare for your medical education with our comprehensive Pre-Health Sciences program, designed to build a strong foundation in the essential sciences before advancing to medical studies.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "APre-Health (Pre-Medical) Sciences | AISM Rigorous Medical Curriculum & Clinical Training",
        description: "Prepare for your medical education with our comprehensive Pre-Health Sciences program, designed to build a strong foundation in the essential sciences before advancing to medical studies.",
        url: aismMetadata.openGraph?.url + "/acedemic-programs/pre-med-course"
    }
};

const features = [
    { description: "Transition from High School to medical school in a single course" },
    { description: "Small class sizes to support your successful transition" },
    { description: "International students are welcome and fully supported" },
    { description: "Your own personal advisor to guide you through the program" },
    { description: "A broad array of volunteer internships" }
];

const applicationInfo = [
    { label: "Application Starts", date: "September, 2024" },
    { label: "Classes Starts", date: "January, 2025" }
];


export default function page() {
    return (
        <div className="mt-44">
            <Top 
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "acedemic-programs" },
                    { label: "Pre-Health (Pre-Medical) Sciences" }
                ]}
                title="Pre-Health (Pre-Medical) Sciences"
            />
            <BodySection 
                mainImage={{
                    src: "https://aism-edu.sirv.com/pexels-yankrukov-8197537.jpg",
                    alt: "Medical pathway",
                    height: 3795,
                    width: 5862
                }}
                title="Your pathway to medicine starts here"
                features={features}
                description="The American International School of Medicine began in 1999 and has graduated hundreds of medical doctors worldwide."
                applyLink={{
                    href: "/acedemic-programs/application-form",
                    label: "Apply Now"
                }}
                applicationInfo={applicationInfo}
                video={{
                    thumbnailSrc: "https://aism-edu.sirv.com/Thumbnails/videoframe_118994.png",
                    videoSrc: "https://aism-edu.sirv.com/Videos/AISM-Pre-Med.mp4"
                }}
            />
        </div>
    )
}
