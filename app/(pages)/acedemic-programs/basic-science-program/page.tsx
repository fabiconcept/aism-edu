import Top from "../Components/Top";
import BodySection from "../Components/Body";
import { aismMetadata } from "@/lib/Metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...aismMetadata,
    title: "Basic Science Program | AISM Rigorous Medical Curriculum & Clinical Training",
    description: "Delve into the core scientific principles of medicine with our Basic Science Program, focusing on the foundational knowledge necessary for clinical practice.",
    openGraph: {
        ...aismMetadata.openGraph,
        title: "Basic Science Program | AISM Rigorous Medical Curriculum & Clinical Training",
        description: "Delve into the core scientific principles of medicine with our Basic Science Program, focusing on the foundational knowledge necessary for clinical practice.",
        url: aismMetadata.openGraph?.url + "/acedemic-programs/basic-science-program"
    }
};

const features = [
    { description: "Comparable to the first two years of a USA medical school program" },
    { description: "The first four semesters are class room based" },
    { description: "Credit hours in a hospital setting developing patient communication skills" },
    { description: "The program is taught at our medical school in Guyana and Georgia" },
    { description: "Field studies and laboratory work is also included" },
    { description: "Apply during January, May or September of the academic year" },
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
                    { label: "Basic Science Program" }
                ]}
                title="Basic Science Program"
            />
            <BodySection 
                mainImage={{
                    src: "https://aism-edu.sirv.com/pexels-edward-jenner-4033148.jpg",
                    alt: "Basic Science Program",
                    height: 3795,
                    width: 5862
                }}
                title="Equivalent to the first two years of U.S. medical school."
                features={features}
                description="Start your medical journey with the AISM Basic Science Course, offering a comprehensive foundation comparable to the first two years of U.S. medical school. The first four semesters are classroom-based, followed by hands-on credit hours in hospital settings to develop essential patient communication skills. Taught at our campuses in Guyana and Georgia, the program includes field studies and lab work for a well-rounded experience. With three application windows—January, May, and September—you have flexible entry points to begin your path to a medical career."
                applyLink={{
                    href: "/acedemic-programs/application-form",
                    label: "Apply Now"
                }}
                applicationInfo={applicationInfo}
                video={{
                    thumbnailSrc: "https://aism-edu.sirv.com/Thumbnails/videoframe_4902.png",
                    videoSrc: "https://aism-edu.sirv.com/Videos/basic-science-aism.mp4"
                }}
            />
        </div>
    )
}
