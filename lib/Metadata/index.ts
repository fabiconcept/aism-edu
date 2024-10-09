import { Metadata } from "next";

export const aismMetadata: Metadata = {
    title: 'American International School of Medicine | A Leading Global Medical Institution',
    description: "Discover AISM, a top-tier international medical school offering cutting-edge medical education. We prepare the next generation of medical professionals through exceptional academic programs, clinical rotations in the U.S., and global healthcare opportunities. Learn more about admissions, our Guyana campus, and how we shape the future of medicine.",
    keywords: [
        'AISM medical school',
        'international medical school',
        'medical education',
        'study medicine in Guyana',
        'clinical rotations in USA',
        'medical degree abroad',
        'healthcare education',
        'pre-medical programs',
        'basic sciences courses',
        'clinical sciences courses',
        'global medical careers',
        'medical research',
        'medical residency',
        'become a doctor',
        'MD programs',
        'Caribbean medical school',
        'medical school admission',
        'American International School of Medicine Guyana',
        'AISM global medical opportunities',
        'study medicine internationally',
        'medical career pathways',
        'physician training programs',
        'medical school faculty',
        'medical student success',
        'Guyana medical school',
        'clinical rotations AISM',
        'medical student admissions process',
        'AISM scholarships',
        'AISM campus life',
        'medical school Guyana',
        'AISM medical curriculum',
        'international health education',
        'AISM faculty',
        'student life at AISM',
        'medical student rotations USA',
        'AISM admission requirements'
    ],
    authors: [{ name: "AISM", url: "https://aism.edu/" }, { name: "Fabiconcept", url: "https://fabiconcept.online" }],
    creator: 'Dr. Colin Wilkinson MPH', 
    openGraph: {
        title: 'American International School of Medicine | A Leading Global Medical Institution',
        description: "AISM offers comprehensive medical education with global clinical rotations. Explore how we prepare medical professionals to excel in healthcare across the world. Admissions are now open for aspiring doctors.",
        url: 'https://aism.edu/',
        locale: 'en_US',
        images: [
            {
                url: 'https://aism.edu/images/aism-campus.jpg',  // Replace with an actual AISM image
                width: 1200,
                height: 800,
                alt: 'AISM Campus in Guyana',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Study Medicine at AISM | Global Medical Training',
        description: 'Pursue your medical career at AISM with world-class education, clinical rotations in the U.S., and a global medical network. Learn more about our programs and how to apply today!',
        images: ['https://aism.edu/images/aism-campus-twitter.jpg'],  // Replace with a relevant image
    },
    icons: {
        icon: 'https://aism-edu.sirv.com/icons/android-icon-192x192.png',
        shortcut: 'https://aism-edu.sirv.com/icons/ms-icon-310x310.png',
        apple: 'https://aism-edu.sirv.com/icons/ms-icon-310x310.png',
        other: {
            rel: 'https://aism-edu.sirv.com/icons/favicon.ico',
            url: 'https://aism-edu.sirv.com/icons/favicon.ico',
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};