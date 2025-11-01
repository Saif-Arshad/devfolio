import React from "react";
import Hero from "./_components/Hero";
import Benifits from "./_components/Benifits";
import FAQSection from "./_components/FAQSection";
import ServiceDetails from "./_components/ServiceDetails";
import Process from "../../about-us/_components/Process";


// Service data configuration
const serviceData = {
  mobile: {
    title: "Mobile Development",
    description: "Build scalable, high-performance mobile apps to reach users on the devices they use most.",
    heroDescription: "We create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    benefitsDescription: "Mobile app development is essential for businesses looking to expand their digital presence and engage with customers on their preferred devices. With the increasing reliance on smartphones and tablets, having a mobile app can significantly boost user engagement, improve customer retention, and provide new revenue opportunities.",
    serviceDetailsDescription: "Our mobile development service encompasses the entire lifecycle of app creation, from initial concept and design to deployment and maintenance. We specialize in both native iOS and Android development, as well as cross-platform solutions using React Native and Flutter.",
    faqs: [
      {
        id: "mobile-platforms",
        question: "Which mobile platforms do you support?",
        answer: "We develop for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter for maximum reach and efficiency."
      },
      {
        id: "mobile-timeline",
        question: "How long does mobile app development take?",
        answer: "Timeline varies based on complexity, but typically 3-6 months for a standard mobile app, including design, development, testing, and deployment."
      },
      {
        id: "mobile-maintenance",
        question: "Do you provide app maintenance and updates?",
        answer: "Yes, we offer comprehensive post-launch support including bug fixes, feature updates, and platform compatibility maintenance."
      },
      {
        id: "mobile-cost",
        question: "What's the cost of mobile app development?",
        answer: "Cost depends on app complexity, features, and platform requirements. We provide detailed quotes after understanding your specific needs."
      },
      {
        id: "mobile-testing",
        question: "How do you ensure app quality?",
        answer: "We conduct thorough testing across multiple devices, screen sizes, and operating system versions to ensure optimal performance and user experience."
      },
      {
        id: "mobile-technologies",
        question: "What technologies do you use for mobile development?",
        answer: "We use Swift for iOS, Kotlin/Java for Android, React Native and Flutter for cross-platform development, along with modern backend technologies."
      }
    ]
  },
  web: {
    title: "Website Development",
    description: "Create fast, responsive, and conversion-focused websites that deliver strong digital presence and user trust.",
    heroDescription: "We build modern, responsive websites that are optimized for performance, SEO, and user experience across all devices.",
    benefitsDescription: "A professional website is crucial for establishing credibility and reaching your target audience online. Our web development services ensure your site loads quickly, ranks well in search engines, and converts visitors into customers.",
    serviceDetailsDescription: "Our web development service covers everything from custom website design to e-commerce solutions, content management systems, and ongoing optimization. We use the latest technologies to create fast, secure, and scalable websites.",
    faqs: [
      {
        id: "web-technologies",
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies including React, Next.js, Node.js, Python, and various databases to create fast and scalable websites."
      },
      {
        id: "web-responsive",
        question: "Are your websites mobile-responsive?",
        answer: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
      },
      {
        id: "web-seo",
        question: "Do you include SEO optimization?",
        answer: "Yes, we implement SEO best practices including meta tags, structured data, fast loading times, and mobile optimization."
      },
      {
        id: "web-maintenance",
        question: "Do you provide website maintenance?",
        answer: "We offer ongoing maintenance services including security updates, content updates, and performance monitoring."
      },
      {
        id: "web-ecommerce",
        question: "Can you build e-commerce websites?",
        answer: "Yes, we develop custom e-commerce solutions and integrate with popular platforms like Shopify and WooCommerce."
      },
      {
        id: "web-timeline",
        question: "How long does website development take?",
        answer: "Simple websites take 2-4 weeks, while complex e-commerce or custom applications can take 6-12 weeks depending on requirements."
      }
    ]
  },
  saas: {
    title: "SaaS Applications",
    description: "Launch powerful SaaS platforms with flexible architecture to serve users at scale and drive recurring revenue.",
    heroDescription: "We develop scalable SaaS applications that can handle thousands of users while maintaining performance and security.",
    benefitsDescription: "SaaS applications provide businesses with recurring revenue streams and scalable solutions. Our SaaS development expertise helps you launch products that can grow with your user base and adapt to changing market demands.",
    serviceDetailsDescription: "Our SaaS development service includes everything from initial architecture planning to deployment and scaling. We build applications that can handle high user loads, ensure data security, and provide seamless user experiences.",
    faqs: [
      {
        id: "saas-scalability",
        question: "How do you ensure SaaS scalability?",
        answer: "We design applications with microservices architecture, cloud-native technologies, and auto-scaling capabilities to handle growth seamlessly."
      },
      {
        id: "saas-security",
        question: "What security measures do you implement?",
        answer: "We implement comprehensive security including data encryption, secure authentication, regular security audits, and compliance with industry standards."
      },
      {
        id: "saas-pricing",
        question: "How do you structure SaaS pricing?",
        answer: "We help design flexible pricing models including freemium, subscription tiers, and usage-based pricing to maximize revenue potential."
      },
      {
        id: "saas-integration",
        question: "Can SaaS integrate with existing systems?",
        answer: "Yes, we build robust APIs and integration capabilities to connect with existing business systems and third-party services."
      },
      {
        id: "saas-analytics",
        question: "Do you include analytics and reporting?",
        answer: "We integrate comprehensive analytics, user tracking, and business intelligence features to help you understand user behavior and optimize performance."
      },
      {
        id: "saas-support",
        question: "What ongoing support do you provide?",
        answer: "We offer 24/7 monitoring, regular updates, feature enhancements, and technical support to ensure your SaaS runs smoothly."
      }
    ]
  },
  design: {
    title: "UI/UX Design",
    description: "Transform complex ideas into intuitive, user-friendly interfaces that boost engagement and retention.",
    heroDescription: "We create beautiful, user-centered designs that not only look great but also provide exceptional user experiences.",
    benefitsDescription: "Great UI/UX design is crucial for user engagement and business success. Our design services help you create interfaces that users love, leading to higher conversion rates and customer satisfaction.",
    serviceDetailsDescription: "Our UI/UX design service covers user research, wireframing, prototyping, visual design, and usability testing. We create designs that are both aesthetically pleasing and highly functional.",
    faqs: [
      {
        id: "design-process",
        question: "What's your design process?",
        answer: "Our process includes user research, wireframing, prototyping, visual design, and usability testing to ensure optimal user experience."
      },
      {
        id: "design-tools",
        question: "What design tools do you use?",
        answer: "We use industry-standard tools including Figma, Adobe Creative Suite, Sketch, and prototyping tools to create high-quality designs."
      },
      {
        id: "design-responsive",
        question: "Do you design for all devices?",
        answer: "Yes, we create responsive designs that work seamlessly across desktop, tablet, and mobile devices."
      },
      {
        id: "design-branding",
        question: "Do you handle branding and visual identity?",
        answer: "We can create complete brand identities including logos, color schemes, typography, and brand guidelines."
      },
      {
        id: "design-testing",
        question: "How do you test design usability?",
        answer: "We conduct user testing sessions, A/B testing, and usability audits to ensure our designs meet user needs and business goals."
      },
      {
        id: "design-iterations",
        question: "How many design revisions do you include?",
        answer: "We include multiple rounds of revisions and refinements to ensure the final design meets your vision and user requirements."
      }
    ]
  },
  cms: {
    title: "CMS Development",
    description: "Control over your website content with a custom or CMS-based solution tailored for easy updates and growth.",
    heroDescription: "We build content management systems that give you complete control over your website content without technical expertise.",
    benefitsDescription: "A good CMS allows you to manage your website content efficiently, update information quickly, and maintain your site without technical knowledge. This saves time and money while keeping your website fresh and relevant.",
    serviceDetailsDescription: "Our CMS development service includes both custom solutions and integration with popular platforms like WordPress, Webflow, and Shopify. We ensure your CMS is secure, user-friendly, and scalable.",
    faqs: [
      {
        id: "cms-platforms",
        question: "Which CMS platforms do you work with?",
        answer: "We work with WordPress, Webflow, Shopify, custom solutions, and can recommend the best platform for your specific needs."
      },
      {
        id: "cms-customization",
        question: "Can you customize existing CMS platforms?",
        answer: "Yes, we can customize themes, add custom functionality, and integrate third-party tools to meet your specific requirements."
      },
      {
        id: "cms-training",
        question: "Do you provide CMS training?",
        answer: "We provide comprehensive training sessions to help you and your team manage content effectively using your chosen CMS."
      },
      {
        id: "cms-security",
        question: "How do you ensure CMS security?",
        answer: "We implement security best practices including regular updates, secure hosting, user access controls, and security monitoring."
      },
      {
        id: "cms-migration",
        question: "Can you migrate existing content?",
        answer: "Yes, we can migrate content from existing websites or CMS platforms to your new system while preserving SEO and functionality."
      },
      {
        id: "cms-support",
        question: "What ongoing support do you provide?",
        answer: "We offer ongoing support including updates, backups, security monitoring, and technical assistance for your CMS."
      }
    ]
  }
};

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: any) => {
    const service = serviceData[params.id as keyof typeof serviceData] || serviceData.web;
    
    return (

        <div className="min-h-screen  pt-20">
            <Hero service={service} />
            <Benifits service={service} />
            <FAQSection service={service} />
            <ServiceDetails service={service} />
            <Process />
          
        </div>
    )
}

export default Page
