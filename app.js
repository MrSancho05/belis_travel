// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mainMenu = document.querySelector(".mobile-menu");

// // Menyuni ochib-yopish
// mobileMenuToggle.addEventListener("click", () => {
//   mainMenu.classList.toggle("show");
// });

// // Tashqariga bosilganda menyuni yopish
// window.addEventListener("click", (e) => {
//   if (!mainMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
//     mainMenu.classList.remove("show");
//   }
// });

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
  });
}

// Language Switcher
const languageFlags = document.querySelectorAll(".lang-flag");
let currentLanguage = "uz"; // Default language

// Language data
const translations = {
  uz: {
    main_menu: [
      "Asosiy",
      "Kompaniya haqida",
      "Turlar",
      "Fikrlar",
      "Kontaktlar",
    ],
    authors: ["Anna Ivanova", "Sergey Petrov", "Elena Smirnova"],
    tours: ["Turkiyaga sayohat", "Maldiv orollariga sayohat", "Misrga sayohat"],
    popular_links: [
      "Maldiv orollari",
      "Bali",
      "Turkiya",
      "Misr",
      "Makka",
      "Yaponiya",
    ],
    payment: "Onlayn to‘lov",
    hero_title: "ORZUINGIZ MANZILIGA SAYOHAT",
    hero_subtitle:
      "O'zingiz uchun orzular dunyosini kashf eting! Noyob turlar, shaxsiy yondashuv va unutilmas taassurotlar",
    book_button: "BAND QILISH",
    features_titles: [
      "Individual yondashuv",
      "Yuqori darajadagi xizmat",
      "Eksklyuziv takliflar",
    ],
    features_desc: [
      "Sizning istaklaringizga moslashtirilgan shaxsiy marshrutlar va ekskursiyalar.",
      "Eng yaxshi mehmonxonalarda qulay yashash va ishonchli transfer",
      "Sayohatingizni unutilmas qiladigan maxsus ekskursiyalar va faoliyatlar.",
    ],
    destination_title: "Manzil",
    destination_subtitle:
      "Biz sizga dunyoning eng ajoyib joylariga unutilmas sayohatlarni taklif etamiz",
    about_title: `Kompaniya asoschisi Ganiev Lazizbek`,
    about_desc: [
      `Ganiev Lazizbek — Bellis Travel kompaniyasining asoschisi va
            mas’uliyatli rahbari sifatida turizm sohasida yillar davomida
            to‘plagan boy tajribasi va zamonaviy yondashuvi bilan ajralib
            turadi. U kompaniya faoliyatiga strategik fikrlash, innovatsion
            g‘oyalar va yuqori darajadagi xizmat madaniyatini olib kirgan.
            Lazizbek har bir mijoz uchun individual yondashuvni ustuvor deb
            biladi. Uning rahbarligida Bellis Travel zamonaviy texnologiyalar va
            ilg‘or xizmat standartlarini joriy etib, ishonchli hamkor va eng
            yaxshi sayohat yo‘lboshchisi sifatida tanildi. Bugungi kunga kelib,
            Bellis Travel Ganiev Lazizbekning dono rahbarligi ostida o‘z
            mijozlariga qulay, xavfsiz va unutilmas sayohatlar taqdim etib,
            turizm bozorida barqaror o‘sib bormoqda.`,
      "Bellis Travel - bu butun dunyo bo'ylab unutilmas sayohatlarni tashkil etadigan professionallar jamoasi. Biz har bir mijozga individual yondashuvni taklif etamiz va yuqori darajadagi xizmatni kafolatlaymiz.",
      "Bizning vazifamiz - sizning sayohatingizni qulay, xavfsiz va unutilmas qilishdir.",
    ],
    learn_more: "Ko'proq bilish",
    testimonials_title: "Mijozlarimiz sharhlari",
    contact_title: "Biz bilan bog'laning",
    contact_form: [
      "Ismingiz",
      "Emailingiz",
      "Telefoningiz",
      "Xabaringiz",
      "Yuborish",
    ],
    footer_nav: "Navigatsiya",
    footer_destinations: "Mashhur yo'nalishlar",
    footer_contacts: "Kontaktlar",
    copyright: "© 2025 Bellis Travel. Barcha huquqlar himoyalangan.",
    country_1: "Maldiv orollari",
    country_2: "Bali",
    country_3: "Turkiya",
    country_4: "Misr",
    country_5: "Italiya",
    country_6: "Yaponiya",
    contry_desc: [
      "Oppoq plyajlarda mazza qilib dam olish",
      "Boy madaniyatga ega ekzotik orol",
      "Tarixiy joylar va go'zal plyajlar",
      "Qadimiy piramidalar va qulay plyajlar",
      "San’at, moda va tarix uyg‘unlashgan zamonaviy mamlakat",
      "Gullar ochilgan bog‘lar, texnologiya va qadimiy ibodatxonalar",
    ],
    testimonials: [
      "Sayohat a’lo darajada tashkil etilgan! Hammasi juda yuqori darajada bo‘ldi. Unutilmas taassurot olishni istaganlarga Bellis Travelni tavsiya qilaman.",
      "Professional yondashuv va tafsilotlarga e’tibor. Bellis Travel tufayli ta’tilimiz juda ajoyib o‘tdi. Yana albatta murojaat qilamiz!",
      "Zo‘r tashkil etilgan sayohat uchun rahmat! Har bir narsa mayda detallarigacha o‘ylab chiqilgan edi. Bellis Travel — sifatni qadrlovchilar uchun eng yaxshi tanlov.",
    ],
    bron: "Qulay va xavfsiz! Tezkor to’lovlar orqali unutilmas sarguzashtingizni bron qiling!",
    info: "Ma'lumotlar",
    rekvisits: "Kompaniya Rekvizitlari",
  },
  ru: {
    main_menu: ["Главная", "О компани", "Туры", "Отзывы", "Контакты"],
    popular_links: ["Мальдивы", "Бали", "Турция", "Египет", "Мека", "Япония"],
    hero_title: "ПУТЕШЕСТВИЕ К МЕСТУ ВАШЕЙ МЕЧТЫ",
    hero_subtitle:
      "Откройте для себя мир мечты! Уникальные туры, персональный подход и незабываемые впечатления",
    book_button: "ЗАБРОНИРОВАТЬ",
    payment: "Онлайн оплата",
    features_titles: [
      "Индивидуальный подход",
      "Высокий уровень сервиса",
      "Эксклюзивные предложения",
    ],
    features_desc: [
      "Персонализированные маршруты и экскурсии, адаптированные под ваши пожелания.",
      "Комфортное проживание в лучших отелях и надежный трансфер",
      "Особенные экскурсии и активности, которые сделают ваше путешествие незабываемым.",
    ],
    destination_title: "Пункт назначения",
    destination_subtitle:
      "Мы предлагаем вам незабываемые путешествия по самым удивительным уголкам мира",
    about_title: "Основатель компании Ганиев Лазизбек",
    about_desc: [
      `Ганиев Лазизбек — основатель и ответственный руководитель компании Bellis Travel, выделяющийся своим многолетним опытом в сфере туризма и современным подходом. Он внедрил стратегическое мышление, инновационные идеи и высокую культуру обслуживания в деятельность компании. Лазизбек считает индивидуальный подход к каждому клиенту приоритетом. Под его руководством Bellis Travel внедрила современные технологии и передовые стандарты сервиса, став надёжным партнёром и одним из лучших туристических брендов. Сегодня компания под его мудрым руководством продолжает устойчивый рост, предлагая клиентам комфортные, безопасные и незабываемые путешествия.`,
      "Bellis Travel — это команда профессионалов, организующая незабываемые путешествия по всему миру. Мы предлагаем индивидуальный подход к каждому клиенту и гарантируем высокий уровень сервиса.",
      "Наша миссия — сделать ваше путешествие комфортным, безопасным и незабываемым.",
    ],
    learn_more: "Узнать больше",
    testimonials_title: "Отзывы наших клиентов",
    contact_title: "Свяжитесь с нами",
    contact_form: [
      "Ваше имя",
      "Ваш email",
      "Ваш телефон",
      "Ваше сообщение",
      "Отправить",
    ],
    footer_nav: "Навигация",
    footer_destinations: "Популярные направления",
    footer_contacts: "Контакты",
    copyright: "© 2025 Bellis Travel. Все права защищены.",
    country_1: "Мальдивы",
    country_2: "Бали",
    country_3: "Турция",
    country_4: "Египет",
    country_5: "Италия",
    country_6: "Япония",
    contry_desc: [
      "Отдых на белоснежных пляжах",
      "Экзотический остров с богатой культурой",
      "Исторические места и красивые пляжи",
      "Древние пирамиды и уютные пляжи",
      "Современная страна, где переплетаются искусство, мода и история",
      "Цветущие сады, технологии и древние храмы",
    ],
    testimonials: [
      "Отличная организация тура! Все было на высшем уровне. Рекомендую Bellis Travel всем, кто хочет получить незабываемые впечатления от путешествия.",
      "Профессиональный подход и внимание к деталям. Благодаря Bellis Travel наш отдых прошел идеально. Обязательно обратимся еще!",
      "Спасибо за прекрасно организованное путешествие! Все было продумано до мелочей. Bellis Travel — лучший выбор для тех, кто ценит качество.",
    ],
    authors: ["Анна Иванова", "Сергей Петров", "Елена Смирнова"],
    tours: ["Тур в Турцию", "Тур на Мальдивы", "Тур в Египет"],
    bron: "Удобно и безопасно! Забронируйте своё незабываемое приключение с помощью мгновенной оплаты!",
    info: "Информация",
    rekvisits: "Реквизиты компании",
  },
  en: {
    main_menu: ["Home", "About", "Tours", "Testimonials", "Contacts"],
    popular_links: ["Maldives", "Bali", "Turkey", "Egypt", "Mecca", "Japan"],
    hero_title: "JOURNEY TO THE PLACE OF YOUR DREAMS",
    hero_subtitle:
      "Discover the world of dreams! Unique tours, personal approach and unforgettable impressions",
    book_button: "BOOK NOW",
    payment: "Online payment",
    bron: "Convenient and secure! Book your unforgettable adventure with fast payments!",
    features_titles: [
      "Individual approach",
      "High level of service",
      "Exclusive offers",
    ],
    features_desc: [
      "Personalized routes and excursions adapted to your wishes.",
      "Comfortable accommodation in the best hotels and reliable transfer",
      "Special excursions and activities that will make your trip unforgettable.",
    ],
    destination_title: "Destination",
    destination_subtitle:
      "We offer you unforgettable journeys to the most amazing corners of the world",
    about_title: "The founder of the company is Lazizbek Ganiev.",
    about_desc: [
      `Lazizbek Ganiev is the founder and dedicated leader of Bellis Travel, known for his extensive experience in tourism and modern approach. He has introduced strategic thinking, innovative ideas, and a high standard of service culture into the company’s operations. Lazizbek prioritizes a personalized approach for every client. Under his leadership, Bellis Travel has implemented modern technologies and advanced service standards, earning a reputation as a reliable partner and a top travel brand. Today, thanks to his wise guidance, the company continues to grow steadily, offering customers comfortable, safe, and unforgettable journeys.`,
      "Bellis Travel is a team of professionals organizing unforgettable trips around the world. We offer a personalized approach to each client and guarantee high-quality service.",
      "Our mission is to make your journey comfortable, safe, and unforgettable.",
    ],
    learn_more: "Learn more",
    testimonials_title: "Customer reviews",
    contact_title: "Contact us",
    contact_form: [
      "Your name",
      "Your email",
      "Your phone",
      "Your message",
      "Send",
    ],
    footer_nav: "Navigation",
    footer_destinations: "Popular destinations",
    footer_contacts: "Contacts",
    copyright: "© 2025 Bellis Travel. All rights reserved.",
    country_1: "Maldives",
    country_2: "Bali",
    country_3: "Turkey",
    country_4: "Egypt",
    country_5: "Italy",
    country_6: "Japan",
    contry_desc: [
      "Relaxing on white sandy beaches",
      "An exotic island rich in culture",
      "Historical sites and beautiful beaches",
      "Ancient pyramids and comfortable beaches",
      "A modern country where art, fashion, and history come together",
      "Blooming gardens, technology, and ancient temples",
    ],
    testimonials: [
      "Excellent tour organization! Everything was at the highest level. I recommend Bellis Travel to anyone looking for unforgettable travel experiences.",
      "Professional approach and attention to detail. Thanks to Bellis Travel, our vacation was perfect. We will definitely use their service again!",
      "Thank you for a perfectly organized trip! Everything was thought out down to the smallest details. Bellis Travel is the best choice for those who value quality.",
    ],
    authors: ["Anna Ivanova", "Sergey Petrov", "Elena Smirnova"],
    tours: ["Tour to Turkey", "Tour to the Maldives", "Tour to Egypt"],
    info: "Information",
    rekvisits: "Company Details",
  },
};

// Function to change language
function changeLanguage(lang) {
  currentLanguage = lang;

  // Update active flag
  languageFlags.forEach((flag) => {
    flag.classList.remove("active");
    if (flag.classList.contains(lang)) {
      flag.classList.add("active");
    }
  });

  // Update menu items
  const menuItems = document.querySelectorAll(".main-menu li a");
  menuItems.forEach((item, index) => {
    item.textContent = translations[lang].main_menu[index];
  });

  const menuFooterItems = document.querySelectorAll(".footer-links ul li a");
  const popularFooterItems = document.querySelectorAll(
    ".popular-links ul li a"
  );
  menuFooterItems.forEach((item, index) => {
    item.textContent = translations[lang].main_menu[index];
  });

  popularFooterItems.forEach((item, index) => {
    item.textContent = translations[lang].popular_links[index];
  });

  // Update hero section
  document.querySelector(".hero h1").textContent =
    translations[lang].hero_title;
  document.querySelector(".hero p").textContent =
    translations[lang].hero_subtitle;
  document.querySelector(".hero .btn-primary").textContent =
    translations[lang].book_button + " ";

  // Update features section
  const featureTitles = document.querySelectorAll(".feature-box h3");
  const featureDescs = document.querySelectorAll(".feature-box p");
  featureTitles.forEach((title, index) => {
    title.textContent = translations[lang].features_titles[index];
  });
  featureDescs.forEach((desc, index) => {
    desc.textContent = translations[lang].features_desc[index];
  });

  // Update destinations section
  document.querySelector(".destinations h2").textContent =
    translations[lang].destination_title;
  document.querySelector(".section-description").textContent =
    translations[lang].destination_subtitle;

  // Update about section
  document.querySelector(".about-content h2").textContent =
    translations[lang].about_title;
  const aboutParas = document.querySelectorAll(".about-content p");
  aboutParas.forEach((para, index) => {
    if (index < translations[lang].about_desc.length) {
      para.textContent = translations[lang].about_desc[index];
    }
  });
  document.querySelector(".about-content .btn-primary").textContent =
    translations[lang].learn_more;

  // Update testimonials section
  document.querySelector(".testimonials h2").textContent =
    translations[lang].testimonials_title;
  document.querySelectorAll(".country").forEach((country, index) => {
    country.textContent = translations[lang]["country_" + (index + 1)];
  });

  document.querySelectorAll(".destination-info p").forEach((desc, index) => {
    desc.textContent = translations[lang].contry_desc[index];
  });

  document.querySelector(".payment h2").textContent =
    translations[lang].payment;
  document.querySelector(".payment-info p").textContent =
    translations[lang].bron;

  document.querySelectorAll(".destination-info a").forEach((desc, index) => {
    desc.textContent = translations[lang].learn_more;
  });

  document.querySelectorAll(".testimonial-slider p").forEach((desc, index) => {
    desc.textContent = translations[lang].testimonials[index];
  });

  document.querySelectorAll(".testimonial-author h4").forEach((desc, index) => {
    desc.textContent = translations[lang].authors[index];
  });

  const heading_3 = document.querySelectorAll('.additional-info h3');

  heading_3[0].textContent = translations[lang].info;
  heading_3[1].textContent = translations[lang].rekvisits;


  document
    .querySelectorAll(".testimonial-author span")
    .forEach((desc, index) => {
      desc.textContent = translations[lang].tours[index];
    });
  // Update contact section
  document.querySelector(".contact h2").textContent =
    translations[lang].contact_title;
  document.getElementById("name").placeholder =
    translations[lang].contact_form[0];
  document.getElementById("email").placeholder =
    translations[lang].contact_form[1];
  document.getElementById("phone").placeholder =
    translations[lang].contact_form[2];
  document.getElementById("message").placeholder =
    translations[lang].contact_form[3];
  document.querySelector(".contact-form .btn-primary").textContent =
    translations[lang].contact_form[4];

  // Update footer
  document.querySelectorAll(".footer-links h4")[0].textContent =
    translations[lang].footer_nav;
  document.querySelectorAll(".footer-links h4")[1].textContent =
    translations[lang].footer_destinations;
  document.querySelector(".footer-contact h4").textContent =
    translations[lang].footer_contacts;
  document.querySelector(".footer-bottom p").textContent =
    translations[lang].copyright;

  // Update footer menu items
  const footerMenuItems = document.querySelectorAll(
    ".footer-links:first-of-type ul li a"
  );
  footerMenuItems.forEach((item, index) => {
    if (index < translations[lang].main_menu.length) {
      item.textContent = translations[lang].main_menu[index];
    }
  });

  // Save language preference to localStorage
  localStorage.setItem("preferredLanguage", lang);
}

// Add event listeners to language flags
languageFlags.forEach((flag) => {
  flag.addEventListener("click", (e) => {
    e.preventDefault();
    let lang = "ru";
    if (flag.classList.contains("uz")) {
      lang = "uz";
    } else if (flag.classList.contains("en")) {
      lang = "en";
    }
    changeLanguage(lang);
  });
});

// Check for saved language preference
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang) {
    changeLanguage(savedLang);
  }

  // Add active class to current language flag
  languageFlags.forEach((flag) => {
    if (flag.classList.contains(currentLanguage)) {
      flag.classList.add("active");
    }
  });
});

// Testimonial Slider
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev-testimonial");
const nextButton = document.querySelector(".next-testimonial");

let currentSlide = 0;

function showSlide(index) {
  // Hide all slides
  testimonialSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Show the current slide and activate the corresponding dot
  testimonialSlides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= testimonialSlides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = testimonialSlides.length - 1;
  }
  showSlide(currentSlide);
}

// Add event listeners for testimonial controls
if (prevButton && nextButton) {
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
}

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainMenu = document.querySelector(".main-menu");

  if (mobileMenuToggle && mainMenu) {
    // Add mobile menu styles
    const mobileMenuStyle = document.createElement("style");
    mobileMenuStyle.textContent = `
            @media (max-width: 768px) {
                .main-menu {
                    position: fixed;
                    top: 0;
                    right: -300px;
                    width: 300px;
                    height: 100vh;
                    background-color: #0a1e3c;
                    flex-direction: column;
                    padding: 80px 20px 20px;
                    transition: right 0.3s ease;
                    z-index: 99;
                }
                
                .main-menu.active {
                    right: 0;
                    display: flex;
                }
                
                .main-menu li {
                    margin-bottom: 20px;
                }
                
                .main-menu a {
                    color: #fff;
                    font-size: 18px;
                }
                
                .mobile-menu-toggle {
                    position: relative;
                    z-index: 100;
                }
                
                .mobile-menu-toggle.active i:before {
                    content: "\\f00d";
                }
            }
        `;
    document.head.appendChild(mobileMenuStyle);

    mobileMenuToggle.addEventListener("click", () => {
      mainMenu.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mainMenu.classList.contains("active") &&
        !mainMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mainMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // if (!name || !email || !phone || !message) {
    //     alert(currentLanguage === 'uz' ? 'Iltimos, barcha maydonlarni to\'ldiring.' :
    //           currentLanguage === 'en' ? 'Please fill in all fields.' :
    //           'Пожалуйста, заполните все поля формы.');
    //     return;
    // }

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //     alert(currentLanguage === 'uz' ? 'Iltimos, to\'g\'ri email manzilini kiriting.' :
    //           currentLanguage === 'en' ? 'Please enter a valid email address.' :
    //           'Пожалуйста, введите корректный email адрес.');
    //     return;
    // }

    // Phone validation
    // const phoneRegex = /^\+?[0-9\s\-$$$$]{10,20}$/;
    // if (!phoneRegex.test(phone)) {
    //     alert(currentLanguage === 'uz' ? 'Iltimos, to\'g\'ri telefon raqamini kiriting.' :
    //           currentLanguage === 'en' ? 'Please enter a valid phone number.' :
    //           'Пожалуйста, введите корректный номер телефона.');
    //     return;
    // }

    // If validation passes, you would normally send the form data to a server
    // For this example, we'll just show a success message
    alert(
      currentLanguage === "uz"
        ? "Iltimos, ma'lumotlaringizni shu formadagi ijtimoiy tarmoqlarimiz orqali yuboring."
        : currentLanguage === "en"
        ? "Please send your information via the social media links provided in this form."
        : "Пожалуйста, отправьте вашу информацию через социальные сети, указанные в этой форме."
    );
    contactForm.reset();
  });
}

// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

// Add styles for the scroll to top button
const style = document.createElement("style");
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4ecdc4;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 99;
    }
    
    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background-color: #3dbdb4;
    }
    
    .lang-flag {
        position: relative;
        display: inline-block;
    }
    
    .lang-flag.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        background-color: #4ecdc4;
        border-radius: 50%;
    }
`;
document.head.appendChild(style);

// Show/hide scroll to top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-box, .destination-card, .about-content, .about-image"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Add initial styles for animation
const animationStyle = document.createElement("style");
animationStyle.textContent = `
    .feature-box, .destination-card, .about-content, .about-image {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(animationStyle);

// Run animation on scroll
window.addEventListener("scroll", animateOnScroll);
// Run once on page load
window.addEventListener("load", animateOnScroll);
