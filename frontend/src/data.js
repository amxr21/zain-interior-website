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
        title: "We Design pure art",
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
        description: "we offer integrated interior design solutions that blend creativity, luxury, and functionality to createunique spaces tailored to our clients’ needs.Our services include",
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
        title: "Book your consultation session now",
        subtitle: "to turn your ideas into a reality!",
      },
      realLife: {
        title: "ZAIN IN REAL LIFE",
        categories: ["Living Room", "Dining Room", "Office", "Kitchen", "Coffee corners"]
      },
      clients: {
        title: "Our Clients",
        subtitle: "Trusted by leading brands and businesses across Saudi Arabia, delivering excellence in every project."
      },
      statistics: {
        title: "Zain in numbers",
        subtitle: "At Zain Interior, we transform spaces into inspiring works of art. Design is our passion, blending style, creativity, innovation, and attention to detail to craft unforgettable environments that leave a lasting impression.",
        stats: [
          { number: "122", label: "happy clients" },
          { number: "65", label: "happy clients" },
          { number: "10", label: "partners" },
          { number: "36", label: "homes" }
        ]
      },
      footer: {
        about: `Zain is more than an interior design studio; it’s a space where people 
                truly experience the art of living. We create art, we design spaces, 
                and we bring your dreams to life.`,
        quickLinks: ["Our story", "Services", "Numbers"],
        legal: ["Terms of service", "Privacy Policy", "Conditions & Terms"],
        contact: {
          title: "Get in Touch",
          location: "Kingdom of Saudi Arabia, Jeddah. Zain headquarter, office. Flat no.368",
          email: "zain.interior.design@zain.com",
          connect: 
              {'Whatsapp': '', 'Instagram': '', 'Tiktok': '', 'email':''}
        },
        fromTo: "From Jeddah to the world",
        rights: "All rights reserved",
      }
    },
  
    ar: {
      navbar: {
        Story: "قصتنا",
        Services: "خدماتنا",
        Numbers: "بالأرقام  ",
        Projects: "مشاريعنا",
        Clients: "عملاؤنا",
        Contact: "حياكم!"
      },
      hero: {
        title: " نصمم لك فـــن خالــص",
        subtitle: "لأن كل تفصيلة تفرق"
      },
      quote: {
        text: "التصميم ما يعتمد على القوانين و القواعدل لكن",
        highlight: "عالخيــــــــال و الإبــــــــــــــــــــــداع"
      },
      about: {
        title: "قصــــة قصــــــــر زيــــــــــــن",
        description: `نؤمن بخلق مساحات تلهم وتعزز رفاهية الأفراد. نلتزم بتحقيق التوازن بين الجمال والوظيفية والاستدامة، لنقدم تصاميم تعكس قصة كل عميل بتميز. نركز على الابتكار والجودة والنزاهة، نسعى لتحويل المساحات الداخلية إلى بيئات ذات معنى تُثري الحياة اليومية`
      },
      services: {
        title: "خدمــــــا تنـــــــــا",
        description: "نقدم حلولاً متكاملة للتصميم الداخلي تجمع بين الإبداع والرفاهية والوظيفية لخلق مساحات فريدة تلبي احتياجات عملائنا. تشمل خدماتنا:",
        list: {
          interiorDesign: {
            title: "التصميم الداخلي",
            brief: "تصاميم مبتكرة للمنازل والمكاتب والمساحات التجارية",
            banner: InteriorDesignBg
          },
          furnishing: {
            title: "التنفيذ والإشراف",
            brief: "تنفيذ عالي الجودة مع اهتمام دقيق بالتفاصيل",
            banner: FurnishingBg
          },
          finishing: {
            title: "اختيار الألوان والخامات",
            brief: "ننسق بين الألوان والأقمشة والتشطيبات لتحقيق تناغم متكامل",
            banner: FinishingBg
          },
          renovation: {
            title: "تصميم أثاث مخصص",
            brief: "قطع فريدة تضيف طابعًا مميزًا وأناقة فائقة",
            banner: RenovationBg
          },
          renovation: {
            title: "استشارات تصميمية",
            brief: "نصائح خبراء لمساعدة العملاء على اتخاذ القرارات الصحيحة",
            banner: RenovationBg
          }
        }
      },
      consultation: {
        title: "احجز جلستك الاستشارية الآن!",
        subtitle: "سارع بحجز جلستك الاستشارية الآن للاستفادة من خبراتنا في التصميم الداخلي وتحويل أفكارك إلى واقع ينبض بالأناقة والإبداع!",
      },
      realLife: {
        title: "أعمال زيــــــــــن                         !",
        categories: ["غرفة المعيشة", "غرفة الطعام", "المكاتب", "المطابخ", "زوايا القهوة"]
      },
      clients: {
        title: "عملاؤنا",
        subtitle: "يثق بنا كبرى العلامات التجارية والشركات في المملكة العربية السعودية، نحقق التميز في كل مشروع."
      },
      statistics: {
        title: "زين في أرقام",
        subtitle: "في زين للديكور الداخلي، نحول المساحات إلى أعمال فنية ملهمة. التصميم هو شغفنا الذي يجمع بين الأناقة والإبداع والابتكار والاهتمام بالتفاصيل لصنع بيئات لا تُنسى تترك أثرًا دائمًا.",
        stats: [
          { number: "122", label: "عميل سعيد" },
          { number: "65", label: "غرف و مكاتب" },
          { number: "10", label: "شركاء" },
          { number: "36", label: "عمل منجز" }
        ]
      },
      footer: {
        about: `زين ليست مجرد استوديو للتصميم الداخلي، بل هي مساحة حيث يُجسد الناس حقًا فن العيش. نصنع الفن، نصمم المساحات، ونحول أحلامك إلى واقع.`,
        quickLinks: ["قصتنا", "خدماتنا", "بالأرقام"],
        legal: ["شروط الخدمة", "سياسة الخصوصية", "الشروط والأحكام"],
        contact: {
          title: "تواصل معنا",
          location: "المملكة العربية السعودية، جدة. المقر الرئيسي لزين، مكتب. شقة رقم 368",
          email: "zain.interior.design@zain.com",
          connect: {'واتساب': '', 'انستقرام': '', 'تيك توك': '', 'البريد الإلكتروني':''}
        ,
        },
        fromTo: "من جدة إلى العالم",
        rights: "جميع الحقوق محفوظة"
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
  