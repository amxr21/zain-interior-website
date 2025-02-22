import { InteriorDesignBg, FurnishingBg, FinishingBg, RenovationBg } from "./constants/images"

const translations = {
    en: {
      navbar: {
        Story: "Our Story",
        Services: "Services",
        Numbers: "In Numbers",
        Contact: "Get in Touch"
      },
      hero: {
        title: "We Design pure ART",
        subtitle: "Because every detail matter"
      },
      quote: {
        text: "Design is not about rules and theories but",
        highlight: "imagination"
      },
      about: {
        title: "ABOUT ZAIN INTERIOR",
        description: `Zain Interior, based in Saudi Arabia, specializes in transforming spaces 
                      with innovative designs and exceptional craftsmanship. Having successfully 
                      served over 40 satisfied clients, we create elegant, functional, and modern 
                      interiors for homes and businesses. Our expert team focuses on delivering 
                      personalized solutions, ensuring quality and customer satisfaction in every 
                      project, reflecting style and innovation.`
      },
      services: {
        title: "ZAIN SERVICES",
        description: "We ensure to deliver the best quality for our clients through our services. We ensure to deliver the best quality for our clients through our services.",
        list: {
          interiorDesign: {
            title: "Interior Design",
            brief: "Creating functional and aesthetically pleasing spaces through layout planning, color schemes, and decor selection.",
            banner: InteriorDesignBg
          },
          furnishing: {
            title: "Furnishing",
            brief: "Providing stylish and comfortable furniture solutions that enhance the functionality and appeal of any space.",
            banner: FurnishingBg
          },
          finishing: {
            title: "Finishing",
            brief: "Applying the final touches, including paint, flooring, and decorative details, to complete the interior look.",
            banner: FinishingBg
          },
          renovation: {
            title: "Renovation",
            brief: "Revamping existing spaces by upgrading structures, materials, and designs to meet modern standards and aesthetics.",
            banner: RenovationBg
          }
        }
      },
      consultation: {
        title: "Book your consultation session now"
      },
      realLife: {
        title: "ZAIN IN REAL LIFE",
        categories: ["Living Room", "Dining Room", "Office", "Kitchen", "Coffee corners"]
      },
      statistics: {
        title: "Zain in numbers",
        stats: [
          { number: "+122", label: "happy clients" },
          { number: "+65", label: "happy clients" },
          { number: "+10", label: "partners" },
          { number: "+36", label: "homes" }
        ]
      },
      footer: {
        about: `Zain is more than an interior design studio; it’s a space where people 
                truly experience the art of living. We create art, we design spaces, 
                and we bring your dreams to life.`,
        quickLinks: ["Our story", "Services", "Numbers"],
        legal: ["Terms of service", "Conditions & Terms"],
        contact: {
          location: "Kingdom of Saudi Arabia, Khobar",
          email: "zain.interior.design@zain.com",
          connect: "Connect: Whatsapp, Instagram, Tiktok, more"
        },
        rights: "From Khobar to the world - All rights reserved"
      }
    },
  
    ar: {
      navbar: {
        story: "قصتنا",
        services: "الخدمات",
        numbers: "بالأرقام",
        contact: "تواصل معنا"
      },
      hero: {
        title: "نصمم فنًا خالصًا",
        subtitle: "لأن كل التفاصيل مهمة"
      },
      quote: {
        text: "التصميم ليس مجرد قواعد ونظريات بل",
        highlight: "خيال"
      },
      about: {
        title: "عن زين للتصميم الداخلي",
        description: `زين للتصميم الداخلي، ومقرها المملكة العربية السعودية، متخصصة في تحويل المساحات 
                      من خلال التصاميم المبتكرة والحرفية الاستثنائية. بعد أن خدمنا أكثر من 40 عميلًا راضيًا، 
                      نصمم مساحات داخلية أنيقة وعملية وحديثة للمنازل والشركات. يركز فريقنا المتخصص على 
                      تقديم حلول مخصصة، وضمان الجودة ورضا العملاء في كل مشروع، مما يعكس الأسلوب والابتكار.`
      },
      services: {
        title: "خدمات زين",
        description: "نحن نحرص على تقديم أعلى جودة لعملائنا من خلال خدماتنا. نحرص على تقديم أفضل جودة لعملائنا من خلال خدماتنا.",
        list: ["التصميم الداخلي", "التأثيث", "التشطيب", "التجديد"]
      },
      consultation: {
        title: "احجز جلسة استشارة الآن"
      },
      realLife: {
        title: "زين في الحياة الواقعية",
        categories: ["غرفة المعيشة", "غرفة الطعام", "المكتب", "المطبخ", "زوايا القهوة"]
      },
      statistics: {
        title: "زين بالأرقام",
        stats: [
          { number: "+122", label: "عميل سعيد" },
          { number: "+65", label: "عميل سعيد" },
          { number: "+10", label: "شريك" },
          { number: "+36", label: "منزل" }
        ]
      },
      footer: {
        about: `زين أكثر من مجرد استوديو تصميم داخلي؛ إنه مساحة حيث يمكن للناس 
                تجربة فن العيش الحقيقي. نحن نصنع الفن، نصمم المساحات، 
                ونحول أحلامكم إلى واقع.`,
        quickLinks: ["قصتنا", "الخدمات", "بالأرقام"],
        legal: ["شروط الخدمة", "الأحكام والشروط"],
        contact: {
          location: "المملكة العربية السعودية، الخبر",
          email: "zain.interior.design@zain.com",
          connect: "تواصل: واتساب، انستغرام، تيك توك، المزيد"
        },
        rights: "من الخبر إلى العالم - جميع الحقوق محفوظة"
      }
    }
  };
  
  export default translations;
  