import { 
  InteriorDesignBg, FurnishingBg, FinishingBg, RenovationBg,
  DinninRoom1,
  DinninRoom2,
  DinninRoom3,
  DinninRoom4,
  DinninRoom5,
  DinninRoom6,
  DinninRoom7,
  DinninRoom8,
  DinninRoom9,
  DinninRoom10,

  LivingRoom1,
  LivingRoom2,
  LivingRoom3,
  LivingRoom4,
  LivingRoom5,
  LivingRoom6,
  LivingRoom7,
  LivingRoom8,
  LivingRoom9,
  LivingRoom10,

  CoffeeCorner1,
  CoffeeCorner2,
  CoffeeCorner3,
  CoffeeCorner4,
  CoffeeCorner5,
  CoffeeCorner6,
  CoffeeCorner7,
  CoffeeCorner8,
  CoffeeCorner9,
  CoffeeCorner10,

 } from "./constants/images"

const translations = {
    en: {
      navbar: {
        Story: "Our Story",
        Services: "Services",
        Numbers: "In Numbers",
        Projects: "Projects",
        Clients: "Our Clients",
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
        description: `We believe in creating spaces that inspire and enhance individual well-being. Our commitment lies in achieving a balance between beauty, functionality,and sustainability, delivering designs that uniquely reflect each client’s story. With a focus on innovation, quality, and integrity. we aim to transform interiors into meaningful environments that enrich daily life`
      },
      services: {
        title: "ZAIN SERVICES",
        description: "We ensure to deliver the best quality for our clients through our services. We ensure to deliver the best quality for our clients through our services.",
        list: {
          interiorDesign: {
            title: "Interior Design",
            brief: "Innovative designs for homes, offices, and commercial spaces",
            banner: InteriorDesignBg
          },
          furnishing: {
            title: "Execution & Supervision",
            brief: "High-quality implementation with meticulous attention to detail",
            banner: FurnishingBg
          },
          finishing: {
            title: "Color & Material Selection",
            brief: "Harmonizing colors, fabrics, and finishes for a cohesive look",
            banner: FinishingBg
          },
          renovation: {
            title: "Custom Furniture Design",
            brief: "Bespoke pieces that add character and elegance",
            banner: RenovationBg
          },
          renovation: {
            title: "Design Consultation",
            brief: "Expert advice to guide clients in making the right choices",
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
        legal: ["Terms of service", "Privacy Policy", "Conditions & Terms"],
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



const images = 
        {
            "Living Room" : [
                DinninRoom1,
                DinninRoom2,
                DinninRoom3,
                DinninRoom4,
                DinninRoom5,
                DinninRoom6,
                DinninRoom7,
                DinninRoom8,
                DinninRoom9,
                DinninRoom10,
            ],
            "Dining Room" : [
                LivingRoom1,
                LivingRoom2,
                LivingRoom3,
                LivingRoom4,
                LivingRoom5,
                LivingRoom6,
                LivingRoom7,
                LivingRoom8,
                LivingRoom9,
                LivingRoom10,
            ],
            "Office" : [
                "c",
                "",
                "",
                "",
            ],
            "Kitchen" : [
                "d",
                "",
                "",
                "",
            ],
            "Coffee corners" : [
                CoffeeCorner1,
                CoffeeCorner2,
                CoffeeCorner3,
                CoffeeCorner4,
                CoffeeCorner5,
                CoffeeCorner6,
                CoffeeCorner7,
                CoffeeCorner8,
                CoffeeCorner9,
                CoffeeCorner10,
            ],
        }




  
  export { translations, images };
  