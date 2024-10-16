import Top from "../Components/Top";
import BodySection from "../Components/Body";

const features = [
    { description: "12 weeks of detailed Healthcare information" },
    { description: "10 units program" },
    { description: "Time-zones flexibility" },
    { description: "100% Online" },
    { description: "Earn a Certificate upon completion" },
    { description: "$0 Tuition Fees" },
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
                    { label: "community-medicine-course" }
                ]}
                title="Community Medicine Course"
            />
            <BodySection 
                mainImage={{
                    src: "https://aism-edu.sirv.com/pexels-mikhail-nilov-7465697.jpg",
                    alt: "Community Medicine Course",
                    height: 4000,
                    width: 6000
                }}
                title="A Commitment to community for better health."
                features={features}
                description="To create the world’s first online course for healthcare. This will be offered globally for a duration of some 12 weeks. On finishing, students will have a full certificate of completion."
                applyLink={{
                    href: "#",
                    label: "Apply Now"
                }}
                applicationInfo={applicationInfo}
            />
        </div>
    )
}