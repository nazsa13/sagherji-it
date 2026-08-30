(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');

  // Scroll handler
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  function setMenuState(open) {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (menuIcon) menuIcon.style.display = open ? 'none' : 'inline-flex';
    if (closeIcon) closeIcon.style.display = open ? 'inline-flex' : 'none';
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll('.mobile-link, .mobile-quote, .mobile-theme-toggle').forEach(function (el) {
      el.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        setMenuState(false);
      }
    });
  }

  // Hero carousel
  var carousel = document.getElementById('heroCarousel');
  if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var current = 0;
    var total = slides.length;

    if (total > 1) {
      setInterval(function () {
        slides[current].classList.remove('active');
        current = (current + 1) % total;
        slides[current].classList.add('active');
      }, 4000);
    }
  }

  // Dark mode toggle
  var htmlEl = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var themeToggleMobile = document.getElementById('theme-toggle-mobile');

  function setTheme(dark) {
    if (dark) {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sun = btn.querySelector('.sun-icon');
      var moon = btn.querySelector('.moon-icon');
      if (sun && moon) {
        sun.style.display = dark ? 'none' : 'block';
        moon.style.display = dark ? 'block' : 'none';
      }
    });
  }

  var saved = localStorage.getItem('theme');
  if (saved === 'light') setTheme(false); else setTheme(true);

  function toggleTheme() {
    var isDark = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  var I18N = {
    en: {
      nav_home: 'Home', nav_services: 'Services', nav_projects: 'Projects', nav_about: 'About', nav_contact: 'Contact', nav_quote: 'Get Quote',
      hero_badge: 'Next-Gen Tech Solutions',
      hero_title_securing: 'Securing Today,', hero_title_powering: 'Powering Tomorrow',
      hero_desc: 'We provide smart, integrated technological solutions for modern security, energy, and communication needs. Transforming the way you live and work.',
      hero_explore: 'Explore Our Services', hero_learn: 'Learn More', hero_projects: 'View Our Projects', hero_enquire: 'Enquire Now',
      stats_projects: 'Successful Projects', stats_engineers: 'Expert Engineers', stats_years: 'Years Experience',
      services_label: 'What We Do', services_title: 'Our Specialized Solutions',
      svc_security_title: 'Security Systems', svc_security_desc: 'Advanced intrusion detection, motion sensors, and crystal-clear 4K video surveillance with remote monitoring for complete protection.',
      svc_lighting_title: 'Lighting Solutions', svc_lighting_desc: 'Design & Supply energy-efficient LED systems with intelligent controls for residential, commercial, and industrial spaces.',
      svc_telecom_title: 'Telecom & Networking Solutions', svc_telecom_desc: 'End-to-end network infrastructure including IP telephony, routers, switches, and wireless backhaul — from copper to fibre to lightbeam.',
      svc_access_title: 'Access Control & Time Attendance', svc_access_desc: 'Comprehensive entry management with biometric readers, smart cards, PIN pads, and integrated time & attendance tracking with automated salary calculation.',
      svc_auto_title: 'Automation & Control Systems', svc_auto_desc: 'Integrated building automation for smart control of lighting, HVAC, shading, and energy management through a single platform.',
      svc_solar_title: 'Solar Energy Solutions', svc_solar_desc: 'Harness the power of the sun with our high-efficiency PV panels and smart energy storage systems.',
      learn_more: 'Learn More',
      btn_view_projects: 'View Our Projects', btn_enquire_now: 'Enquire Now',
      features_title_pre: 'Building the Future of', features_title_hl: 'Integrated Security',
      features_desc: 'We are currently expanding our digital presence to serve you better. Our new platform will feature a full product catalog, online technical support, and real-time project tracking.',
      features_li1: 'Comprehensive site surveys and needs assessment',
      features_li2: 'Professional installation by certified technicians',
      features_li3: 'Lifetime maintenance and 24/7 technical support',
      features_li4: 'Cloud-based management for all security systems',
      features_float_title: 'Fast Installation', features_float_sub: 'Within 48 Hours',
      about_label: 'Who We Are', about_title: 'Trusted Since 1994',
      about_p1: 'Sagherji Integrated Technologies is a premier provider of smart security, energy, communication solutions, lighting, and smart home solutions across Syria and the Middle East. We combine decades of engineering expertise with cutting-edge technology to deliver systems that are reliable, scalable, and future-ready.',
      about_p2: 'From biometric access control and 4K surveillance to solar energy and unified telecom platforms, every solution we deploy is tailored to the unique needs of our clients — whether residential, commercial, or government.',
      val_reliability: 'Reliability', val_reliability_desc: 'Every system backed by 24/7 support and lifetime maintenance.',
      val_innovation: 'Innovation', val_innovation_desc: 'Continuously adopting the latest technologies to stay ahead.',
      val_partnership: 'Partnership', val_partnership_desc: 'Close collaboration with clients from design through deployment.',
      stats_delivered: 'Projects Delivered', stats_engineers2: 'Expert Engineers', stats_years2: 'Years Experience', stats_satisfaction: 'Client Satisfaction',
      contact_title: "Let's Secure Your", contact_title2: 'Project Together',
      contact_desc: 'Have a question or ready to start your journey with us? Our team is standing by to provide expert consultation.',
      contact_hq: 'Our Headquarters', contact_hq_val: 'Maysaloon St.<br/>Damascus - SYRIA',
      contact_call: 'Call Us', contact_email: 'Email Support',
      form_name: 'Name', form_email: 'Email', form_phone: 'Phone', form_property: 'Property Type', form_personal: 'Personal', form_business: 'Business', form_message: 'Message', form_send: 'Send Message', form_msg_ph: 'Tell us about your project...',
      consult_title: 'Get a Free Consultation', consult_name: 'Name', consult_email: 'Email', consult_phone: 'Phone', consult_property: 'Property Type', consult_msg: 'Message', consult_submit: 'Request Consultation', consult_note: 'We respect your privacy. No spam, ever.',
      footer_desc: 'Leading provider of integrated security and smart technology solutions. We protect what matters most to you.',
      footer_solutions: 'Solutions', footer_company: 'Company', footer_about: 'About Us', footer_portfolio: 'Our Portfolio', footer_careers: 'Careers',
      footer_newsletter: 'Newsletter', footer_newsletter_desc: 'Stay updated with the latest tech news.', footer_enter_email: 'Enter email', footer_join: 'Join',
      footer_copy: 'SAGHERJI Integrated Technologies. All rights reserved.',
      partners_title: 'Our Partners', clients_title: 'Our Clients', and_more: 'and more...',
      projects_title: 'Our Projects', projects_sub: 'Explore our portfolio of integrated security, energy, and communication solutions.', projects_soon: 'Coming Soon', projects_soon_p: "We're building a dedicated page for each project category. Check back soon!",
      page_title_security: 'Security Systems',
      page_sub_security: 'Comprehensive protection combining intrusion detection, wireless alarms, motion sensors, and crystal-clear 4K video surveillance with 24/7 remote monitoring.',
      sec_integrated_title: 'Integrated Security, One Platform',
      sec_integrated_p1: 'Our security systems combine intrusion detection alarms, motion sensors, and high-resolution CCTV into a single unified platform. Wireless alarm panels communicate instantly with monitoring stations, while 4K cameras with night vision capture every detail — day or night.',
      sec_integrated_p2: 'Smart analytics distinguish between people, vehicles, and animals, reducing false alarms while making it easy to search recorded footage. All alerts and live feeds are accessible remotely via mobile app.',
      sec_bullet1: 'Wireless alarm panels & motion sensors',
      sec_bullet2: '4K / 8MP cameras with HDR & night vision',
      sec_bullet3: 'Smart motion detection & line-crossing alerts',
      sec_bullet4: 'Remote viewing & 30-day Cloud/ NVR storage',
      sec_full_title: 'Full Coverage, Any Scale',
      sec_full_p1: 'Whether you need a single camera for a small shop or a hundred-camera deployment for a large facility, we design and install systems that scale with your needs.',
      sec_full_p2: 'Our NVRs support PoE (Power over Ethernet) for simple single-cable installation, and all systems can be accessed securely from anywhere in the world through our encrypted mobile app.',
      light_page_title: 'Lighting Solutions',
      light_page_sub: 'Design & Supply energy-efficient LED systems with intelligent controls for residential, commercial, and industrial spaces.',
      light_intel_title: 'Intelligent Illumination',
      light_intel_p1: 'Transform any space with our smart lighting solutions. From automated dimming and color tuning to occupancy-based scheduling, our systems reduce energy consumption while enhancing comfort and ambience.',
      light_intel_p2: 'All fixtures can be controlled via smartphone, wall panel, or voice assistant — giving you full flexibility to create the perfect lighting scene for any moment.',
      light_bullet1: 'High-efficiency LED with DALI dimming.',
      light_bullet2: 'Motion & daylight sensor integration',
      light_bullet3: 'Scene control via app, voice, or panel',
      light_bullet4: 'Up to 70% energy savings',
      light_designed_title: 'Designed for Any Space',
      light_designed_p1: 'Whether you are outfitting a modern office, a luxury villa, or an industrial property, our smart lighting solutions are scalable and customizable. We use open standards like DALI, KNX, and Zigbee to ensure compatibility with the widest range of fixtures.',
      light_designed_p2: 'Our team provides end-to-end service; from lighting design and fixture selection to installation, programming, and ongoing support.',
      telecom_page_title: 'Telecom & Networking Solutions',
      telecom_page_sub: 'Complete network infrastructure — IP telephony, routing, switching, wireless backhaul, and lightbeam connectivity for mission-critical communications.',
      telecom_full_title: 'Full-Spectrum Network Infrastructure',
      telecom_full_p1: 'We design and deploy complete network ecosystems — from enterprise IP telephony and structured cabling to high-capacity wireless backhaul and lightbeam links. Whether you need a resilient LAN for a multi-building campus or a carrier-grade VoIP platform, we deliver end-to-end.',
      telecom_full_p2: 'Our team engineers solutions using leading hardware from MikroTik, Ubiquiti, Grandstream, and more. We handle routing, switching, firewalling, and wireless bridging so your business stays connected at every level.',
      telecom_bullet1: 'IP telephony, VoIP & SIP trunking',
      telecom_bullet2: 'Routers, switches & enterprise firewalls',
      telecom_bullet3: 'Wireless backhaul & lightbeam dishes',
      telecom_bullet4: 'Fibre & copper structured cabling',
      telecom_connected_title: 'Connected Anywhere, Everywhere',
      telecom_connected_p1: 'From a single-site office to a multi-building campus or remote outpost, our solutions bridge the gap. Lightbeam dishes connect buildings without trenching fibre, while our mesh wireless networks blanket large areas with reliable coverage.',
      telecom_connected_p2: 'We manage the full lifecycle — site survey, link budget calculation, installation, commissioning, and ongoing support — so your infrastructure just works.',
      access_page_title: 'Access Control & Time Attendance',
      access_page_sub: 'Comprehensive entry management with biometric readers, smart cards, PIN pads, and integrated time & attendance tracking with automated salary calculation for the modern workplace.',
      access_workforce_title: 'Complete Workforce Management',
      access_workforce_p1: 'From fingerprint and facial recognition readers at every door to centralized time attendance software, our solutions give you full visibility over who enters your facility and when. The system automatically calculates salaries based on actual hours worked — factoring in overtime, late penalties, and shift differentials — and integrates directly with payroll and ERP systems for seamless workforce management.',
      access_workforce_p2: 'Supporting fingerprint, facial, palm vein, RFID card, and PIN-based authentication, we tailor the right mix of modalities for each entry point.',
      access_bullet1: 'Biometric, card, and PIN authentication',
      access_bullet2: 'Automated salary calculation based on hours worked',
      access_bullet3: 'Overtime, late penalty & shift differential handling',
      access_bullet4: 'Cloud-based user & visitor management',
      access_bullet5: 'Integration with payroll, ERP, CCTV & alarm systems',
      access_mgmt_title: 'Complete Access Management',
      access_mgmt_p1: 'From single-door standalone units to enterprise systems managing hundreds of access points, our solutions give you full control over who enters your premises and when.',
      access_mgmt_p2: 'Set custom access schedules, receive instant alerts on unauthorized attempts, and generate detailed reports — all from a centralized dashboard accessible via web or mobile.',
      auto_page_title: 'Automation & Control Systems',
      auto_page_sub: 'Integrated building automation for smart control of lighting, HVAC, shading, and energy management through a single platform.',
      auto_central_title: 'Centralized Intelligence',
      auto_central_p1: 'Bring every subsystem in your facility under one intuitive interface. Our automation platforms integrate lighting, HVAC, shading, access control, and energy monitoring into a unified dashboard accessible from any device.',
      auto_central_p2: 'We design systems that learn from occupant behavior, automatically adjusting settings to maximize comfort while minimizing energy waste.',
      auto_bullet1: 'BACnet, KNX & Modbus protocol support',
      auto_bullet2: 'Centralized touch panel & mobile app control',
      auto_bullet3: 'Occupancy-based HVAC & lighting scheduling',
      auto_bullet4: 'Energy analytics & real-time consumption tracking',
      auto_scale_title: 'Seamless Scalability',
      auto_scale_p1: 'From single-room automation to enterprise-grade building management, our solutions grow with you. Each system is built on open standards, allowing future expansion without vendor lock-in.',
      auto_scale_p2: 'Our certified engineers handle programming, commissioning, and end-user training, ensuring a smooth transition to an intelligent, future-ready facility.',
      solar_page_title: 'Solar Energy Solutions',
      solar_page_sub: 'Harness the power of the sun with high-efficiency PV panels and smart energy storage systems tailored for homes and businesses.',
      solar_clean_title: 'Clean Energy, Lower Bills',
      solar_clean_p1: 'Our solar energy solutions are designed to reduce your carbon footprint while cutting electricity costs. We handle everything from site assessment and system design to installation and ongoing maintenance.',
      solar_clean_p2: 'Using premium-grade photovoltaic panels and advanced inverters, our systems deliver maximum yield even in challenging weather conditions. Pair them with our smart battery storage for 24/7 energy independence.',
      solar_bullet1: 'High-efficiency monocrystalline panels',
      solar_bullet2: 'Lithium-ion battery storage options',
      solar_bullet3: 'Real-time monitoring via mobile app',
      solar_bullet4: '25-year performance warranty',
      solar_why_title: 'Why Choose Our Solar Solutions?',
      solar_why_p1: 'We partner with world-leading manufacturers to bring you the most reliable and efficient solar technology available. Our certified installers ensure every system is optimized for your specific roof layout and energy consumption pattern.',
      solar_why_p2: 'From residential villas to large-scale commercial rooftops, we have the expertise to deliver projects on time and within budget. Our after-sales support includes regular performance checks and rapid response maintenance.',
      intrusion_page_title: 'Intrusion Detection',
      intrusion_page_sub: 'Advanced wireless alarm systems, motion sensors, and real-time alerts that give you complete peace of mind — day and night.',
      intrusion_intel_title: 'Intelligent Perimeter Protection',
      intrusion_intel_p1: 'Our intrusion detection systems go beyond simple alarms. We deploy a layered approach using PIR motion sensors, glass-break detectors, door/window contacts, and outdoor beam sensors to create a virtual fence around your property.',
      intrusion_intel_p2: 'Every event is instantly relayed to your smartphone via our secure cloud platform, so you always know what is happening — whether you are at home, in the office, or travelling abroad.',
      intrusion_bullet1: 'Wireless sensors with tamper detection',
      intrusion_bullet2: '24/7 central station monitoring option',
      intrusion_bullet3: 'Smartphone push notifications & remote arm/disarm',
      intrusion_bullet4: 'Backup battery and cellular communication',
      intrusion_seamless_title: 'Seamless Integration',
      intrusion_seamless_p1: 'Our intrusion systems integrate effortlessly with CCTV cameras, smart locks, and home automation platforms. Arm and disarm via keypad, mobile app, or even voice command.',
      intrusion_seamless_p2: 'We offer flexible packages for apartments, villas, offices, and warehouses — each designed to match the specific risk profile and budget of the client.',
      toast_success: 'Message sent successfully!', toast_consult: 'Consultation request sent!', toast_sub: 'Subscribed! Thank you.'
    },
    ar: {
      nav_home: 'الرئيسية', nav_services: 'الخدمات', nav_projects: 'المشاريع', nav_about: 'من نحن', nav_contact: 'تواصل معنا', nav_quote: 'احصل على عرض',
      hero_badge: 'حلول تقنية للجيل القادم',
      hero_title_securing: 'تأمين الحاضر،', hero_title_powering: 'تمكين المستقبل',
      hero_desc: 'نقدّم حلولاً تقنية ذكية ومتكاملة لاحتياجات الأمن الحديث والطاقة والاتصالات. نُحوّل طريقة عيشك وعملك.',
      hero_explore: 'استكشف خدماتنا', hero_learn: 'اعرف المزيد', hero_projects: 'عرض مشاريعنا', hero_enquire: 'استفسر الآن',
      stats_projects: 'مشاريع ناجحة', stats_engineers: 'مهندس خبير', stats_years: 'سنة خبرة',
      services_label: 'ماذا نفعل', services_title: 'حلولنا المتخصصة',
      svc_security_title: 'أنظمة الأمان', svc_security_desc: 'كشف تسلل متقدّم، حساسات حركة، ومراقبة فيديو بدقة 4K مع متابعة عن بُعد لحماية كاملة.',
      svc_lighting_title: 'حلول الإضاءة', svc_lighting_desc: 'تصميم وتوريد أنظمة LED موفّرة للطاقة مع تحكم ذكي للمساحات السكنية والتجارية والصناعية.',
      svc_telecom_title: 'حلول الاتصالات والشبكات', svc_telecom_desc: 'بنية تحتية متكاملة تشمل هاتف IP، الموجّهات، المحوّلات، والربط اللاسلكي — من النحاس إلى الألياف إلى الحزمة الضوئية.',
      svc_access_title: 'التحكم بالدخول والحضور', svc_access_desc: 'إدارة دخول شاملة بقارئات بيومترية وبطاقات ذكية ورموز PIN مع تتبع الحضور وحساب رواتب آلي.',
      svc_auto_title: 'الأتمتة وأنظمة التحكم', svc_auto_desc: 'أتمتة مباني متكاملة للتحكم الذكي بالإضاءة والتكييف والتظليل وإدارة الطاقة عبر منصة واحدة.',
      svc_solar_title: 'حلول الطاقة الشمسية', svc_solar_desc: 'استفد من طاقة الشمس عبر ألواحنا الكهروضوئية عالية الكفاءة وأنظمة تخزين ذكية.',
      learn_more: 'اعرف المزيد',
      btn_view_projects: 'عرض مشاريعنا', btn_enquire_now: 'استفسر الآن',
      features_title_pre: 'نبني مستقبل', features_title_hl: 'الأمن المتكامل',
      features_desc: 'نوسّع حالياً حضورنا الرقمي لخدمتك بشكل أفضل. ستوفر منصتنا الجديدة كتالوج منتجات كامل ودعم فني عبر الإنترنت وتتبع مشاريع لحظي.',
      features_li1: 'مسوحات موقع شاملة وتقييم احتياجات',
      features_li2: 'تركيب احترافي بواسطة فنيين معتمدين',
      features_li3: 'صيانة مدى الحياة ودعم فني 24/7',
      features_li4: 'إدارة سحابية لجميع أنظمة الأمان',
      features_float_title: 'تركيب سريع', features_float_sub: 'خلال 48 ساعة',
      about_label: 'من نحن', about_title: 'موثوقون منذ 1994',
      about_p1: 'صاغرجي للتقنيات المتكاملة مزوّد رائد لحلول الأمن الذكي والطاقة والاتصالات والإضاءة والمنزل الذكي في سوريا والشرق الأوسط. نجمع عقوداً من الخبرة الهندسية مع أحدث التقنيات لتقديم أنظمة موثوقة وقابلة للتوسع وجاهزة للمستقبل.',
      about_p2: 'من التحكم البيومتري والمراقبة بدقة 4K إلى الطاقة الشمسية ومنصات الاتصالات الموحّدة، كل حل ننفّذه مصمّم لاحتياجات عملائنا — سكني أو تجاري أو حكومي.',
      val_reliability: 'الموثوقية', val_reliability_desc: 'كل نظام مدعوم بدعم 24/7 وصيانة مدى الحياة.',
      val_innovation: 'الابتكار', val_innovation_desc: 'نتبنى باستمرار أحدث التقنيات لنبقى في المقدمة.',
      val_partnership: 'الشراكة', val_partnership_desc: 'تعاون وثيق مع العملاء من التصميم حتى التنفيذ.',
      stats_delivered: 'مشاريع منجزة', stats_engineers2: 'مهندس خبير', stats_years2: 'سنة خبرة', stats_satisfaction: 'رضا العملاء',
      contact_title: 'لنؤمّن مشروعك', contact_title2: 'معاً',
      contact_desc: 'لديك سؤال أو جاهز للبدء؟ فريقنا مستعد لتقديم استشارة خبيرة.',
      contact_hq: 'مقرنا', contact_hq_val: 'شارع ميسلون<br/>دمشق، سوريا',
      contact_call: 'اتصل بنا', contact_email: 'الدعم عبر البريد',
      form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_phone: 'الهاتف', form_property: 'نوع العقار', form_personal: 'شخصي', form_business: 'تجاري', form_message: 'الرسالة', form_send: 'إرسال الرسالة', form_msg_ph: 'أخبرنا عن مشروعك...',
      consult_title: 'احصل على استشارة مجانية', consult_name: 'الاسم', consult_email: 'البريد الإلكتروني', consult_phone: 'الهاتف', consult_property: 'نوع العقار', consult_msg: 'الرسالة', consult_submit: 'طلب استشارة', consult_note: 'نحترم خصوصيتك. لا رسائل مزعجة.',
      footer_desc: 'مزود رائد لحلول الأمن المتكامل والتقنيات الذكية. نحمي ما يهمك أكثر.',
      footer_solutions: 'الحلول', footer_company: 'الشركة', footer_about: 'من نحن', footer_portfolio: 'محفظتنا', footer_careers: 'الوظائف',
      footer_newsletter: 'النشرة البريدية', footer_newsletter_desc: 'ابق على اطلاع بآخر الأخبار التقنية.', footer_enter_email: 'أدخل البريد', footer_join: 'انضمام',
      footer_copy: 'صاغرجي للتقنيات المتكاملة. جميع الحقوق محفوظة.',
      partners_title: 'شركاؤنا', clients_title: 'عملاؤنا', and_more: 'والمزيد...',
      projects_title: 'مشاريعنا', projects_sub: 'استكشف محفظتنا من حلول الأمن والطاقة والاتصالات المتكاملة.', projects_soon: 'قريباً', projects_soon_p: 'نبني صفحة مخصصة لكل فئة مشاريع. عُد قريباً!',
      page_title_security: 'أنظمة الأمان',
      page_sub_security: 'حماية شاملة تجمع كشف التسلل، الإنذارات اللاسلكية، حساسات الحركة، والمراقبة بالفيديو بدقة 4K مع متابعة عن بُعد على مدار الساعة.',
      sec_integrated_title: 'أمن متكامل، منصة واحدة',
      sec_integrated_p1: 'تجمع أنظمة الأمان لدينا بين إنذارات كشف التسلل وحساسات الحركة وكاميرات المراقبة عالية الدقة في منصة موحدة. تتواصل لوحات الإنذار اللاسلكية فورًا مع محطات المراقبة، بينما تلتقط كاميرات 4K المزودة بالرؤية الليلية كل التفاصيل — ليلاً ونهارًا.',
      sec_integrated_p2: 'تميّز التحليلات الذكية بين الأشخاص والمركبات والحيوانات، مما يقلل الإنذارات الكاذبة ويسهّل البحث في التسجيلات. جميع التنبيهات والبث المباشر متاحة عن بُعد عبر تطبيق الجوال.',
      sec_bullet1: 'لوحات إنذار لاسلكية وحساسات حركة',
      sec_bullet2: 'كاميرات 4K / 8MP بتقنية HDR ورؤية ليلية',
      sec_bullet3: 'كشف حركة ذكي وتنبيهات تجاوز الخط',
      sec_bullet4: 'مشاهدة عن بُعد وتخزين سحابي / NVR لمدة 30 يومًا',
      sec_full_title: 'تغطية كاملة، بأي حجم',
      sec_full_p1: 'سواء كنت تحتاج كاميرا واحدة لمتجر صغير أو نشر مئة كاميرا لمنشأة كبيرة، نصمم ونركّب أنظمة تتوسع مع احتياجاتك.',
      sec_full_p2: 'تدعم أجهزة التسجيل الشبكي (NVR) لدينا تقنية PoE (الطاقة عبر الإيثرنت) لتركيب بسيط بكابل واحد، ويمكن الوصول إلى جميع الأنظمة بشكل آمن من أي مكان في العالم عبر تطبيقنا المشفّر.',
      light_page_title: 'حلول الإضاءة',
      light_page_sub: 'تصميم وتوريد أنظمة LED موفّرة للطاقة مع تحكم ذكي للمساحات السكنية والتجارية والصناعية.',
      light_intel_title: 'إضاءة ذكية',
      light_intel_p1: 'حوّل أي مساحة بحلول الإضاءة الذكية لدينا. من التعتيم الآلي وضبط الألوان إلى الجدولة القائمة على الإشغال، تقلل أنظمتنا استهلاك الطاقة مع تعزيز الراحة والأجواء.',
      light_intel_p2: 'يمكن التحكم بجميع التركيبات عبر الهاتف الذكي أو لوحة الحائط أو المساعد الصوتي — مما يمنحك مرونة كاملة لخلق مشهد الإضاءة المثالي لكل لحظة.',
      light_bullet1: 'LED عالي الكفاءة مع تعتيم DALI',
      light_bullet2: 'تكامل حساسات الحركة وضوء النهار',
      light_bullet3: 'التحكم بالمشاهد عبر التطبيق أو الصوت أو اللوحة',
      light_bullet4: 'توفير طاقة يصل إلى 70٪',
      light_designed_title: 'مصمم لكل مساحة',
      light_designed_p1: 'سواء كنت تجهز مكتبًا عصريًا أو فيلا فاخرة أو منشأة صناعية، حلول الإضاءة الذكية لدينا قابلة للتوسع والتخصيص. نستخدم معايير مفتوحة مثل DALI وKNX وZigbee لضمان التوافق مع أوسع نطاق من التركيبات.',
      light_designed_p2: 'يقدم فريقنا خدمة متكاملة؛ من تصميم الإضاءة واختيار التركيبات إلى التركيب والبرمجة والدعم المستمر.',
      telecom_page_title: 'حلول الاتصالات والشبكات',
      telecom_page_sub: 'بنية تحتية متكاملة للشبكات — هاتف IP، التوجيه، التبديل، الربط اللاسلكي، واتصال الحزمة الضوئية للاتصالات الحرجة.',
      telecom_full_title: 'بنية تحتية شبكية متكاملة',
      telecom_full_p1: 'نصمم وننشر منظومات شبكية كاملة — من هاتف IP المؤسسي والكابلات الهيكلية إلى الربط اللاسلكي عالي السعة وروابط الحزمة الضوئية. سواء كنت تحتاج شبكة محلية مرنة لحرم متعدد المباني أو منصة VoIP بمستوى المشغّل، نقدّم حلاً متكاملاً.',
      telecom_full_p2: 'يهندس فريقنا الحلول باستخدام أجهزة رائدة من MikroTik وUbiquiti وGrandstream وغيرها. نتولى التوجيه والتبديل والحماية والربط اللاسلكي ليبقى عملك متصلاً على كل المستويات.',
      telecom_bullet1: 'هاتف IP وVoIP وربط SIP',
      telecom_bullet2: 'موجّهات ومحوّلات وجدران حماية مؤسسية',
      telecom_bullet3: 'ربط لاسلكي وأطباق الحزمة الضوئية',
      telecom_bullet4: 'كابلات هيكلية من الألياف والنحاس',
      telecom_connected_title: 'متصل في كل مكان',
      telecom_connected_p1: 'من مكتب في موقع واحد إلى حرم متعدد المباني أو موقع ناءٍ، حلولنا تسد الفجوة. تربط أطباق الحزمة الضوئية المباني دون حفر للألياف، بينما تغطي شبكاتنا اللاسلكية الشبكية مساحات واسعة بتغطية موثوقة.',
      telecom_connected_p2: 'ندير دورة الحياة كاملة — مسح الموقع، حساب ميزانية الربط، التركيب، التشغيل، والدعم المستمر — لتعمل بنيتك التحتية بسلاسة.',
      access_page_title: 'التحكم بالدخول والحضور',
      access_page_sub: 'إدارة دخول شاملة بقارئات بيومترية وبطاقات ذكية ورموز PIN مع تتبع الحضور وحساب رواتب آلي لمكان العمل العصري.',
      access_workforce_title: 'إدارة متكاملة للقوى العاملة',
      access_workforce_p1: 'من قارئات البصمة والتعرف على الوجه عند كل باب إلى برنامج مركزي للحضور، تمنحك حلولنا رؤية كاملة لمن يدخل منشأتك ومتى. يحسب النظام الرواتب تلقائيًا بناءً على ساعات العمل الفعلية — مع احتساب العمل الإضافي وخصومات التأخير وفروقات المناوبات — ويتكامل مباشرة مع أنظمة الرواتب وERP لإدارة سلسة للقوى العاملة.',
      access_workforce_p2: 'بدعم مصادقة البصمة والوجه وعروق الكف وبطاقات RFID ورموز PIN، نكيّف المزيج المناسب من الوسائط لكل نقطة دخول.',
      access_bullet1: 'مصادقة بيومترية وبطاقات ورموز PIN',
      access_bullet2: 'حساب رواتب آلي حسب ساعات العمل',
      access_bullet3: 'معالجة العمل الإضافي وخصم التأخير وفروقات المناوبات',
      access_bullet4: 'إدارة المستخدمين والزوار سحابياً',
      access_bullet5: 'تكامل مع الرواتب وERP والمراقبة والإنذار',
      access_mgmt_title: 'إدارة دخول متكاملة',
      access_mgmt_p1: 'من وحدات مستقلة لباب واحد إلى أنظمة مؤسسية تدير مئات نقاط الدخول، تمنحك حلولنا تحكمًا كاملاً في من يدخل منشأتك ومتى.',
      access_mgmt_p2: 'اضبط جداول دخول مخصصة، واستقبل تنبيهات فورية عند محاولات غير مصرح بها، وأنشئ تقارير مفصلة — كل ذلك من لوحة تحكم مركزية عبر الويب أو الجوال.',
      auto_page_title: 'الأتمتة وأنظمة التحكم',
      auto_page_sub: 'أتمتة مباني متكاملة للتحكم الذكي بالإضاءة والتكييف والتظليل وإدارة الطاقة عبر منصة واحدة.',
      auto_central_title: 'ذكاء مركزي',
      auto_central_p1: 'اجمع كل الأنظمة الفرعية في منشأتك تحت واجهة بديهية واحدة. تدمج منصات الأتمتة لدينا الإضاءة والتكييف والتظليل والتحكم بالدخول ومراقبة الطاقة في لوحة تحكم موحدة يمكن الوصول إليها من أي جهاز.',
      auto_central_p2: 'نصمم أنظمة تتعلم من سلوك الشاغلين، وتعدّل الإعدادات تلقائيًا لتعظيم الراحة مع تقليل هدر الطاقة.',
      auto_bullet1: 'دعم بروتوكولات BACnet وKNX وModbus',
      auto_bullet2: 'تحكم عبر لوحة لمس مركزية وتطبيق جوال',
      auto_bullet3: 'جدولة التكييف والإضاءة حسب الإشغال',
      auto_bullet4: 'تحليلات الطاقة وتتبع الاستهلاك لحظيًا',
      auto_scale_title: 'توسع سلس',
      auto_scale_p1: 'من أتمتة غرفة واحدة إلى إدارة مباني بمستوى المؤسسات، حلولنا تنمو معك. كل نظام مبني على معايير مفتوحة تسمح بالتوسع المستقبلي دون احتكار مورّد.',
      auto_scale_p2: 'يتولى مهندسونا المعتمدون البرمجة والتشغيل وتدريب المستخدم النهائي، لضمان انتقال سلس إلى منشأة ذكية وجاهزة للمستقبل.',
      solar_page_title: 'حلول الطاقة الشمسية',
      solar_page_sub: 'استفد من طاقة الشمس عبر ألواح كهروضوئية عالية الكفاءة وأنظمة تخزين ذكية مصممة للمنازل والشركات.',
      solar_clean_title: 'طاقة نظيفة، فواتير أقل',
      solar_clean_p1: 'صُممت حلول الطاقة الشمسية لدينا لتقليل بصمتك الكربونية مع خفض تكاليف الكهرباء. نتولى كل شيء من تقييم الموقع وتصميم النظام إلى التركيب والصيانة المستمرة.',
      solar_clean_p2: 'باستخدام ألواح كهروضوئية ممتازة ومحولات متقدمة، تقدم أنظمتنا أقصى إنتاج حتى في الظروف الجوية الصعبة. ادمجها مع تخزين البطاريات الذكي لاستقلالية طاقة على مدار الساعة.',
      solar_bullet1: 'ألواح أحادية البلورة عالية الكفاءة',
      solar_bullet2: 'خيارات تخزين بطاريات ليثيوم-أيون',
      solar_bullet3: 'مراقبة لحظية عبر تطبيق الجوال',
      solar_bullet4: 'ضمان أداء لمدة 25 عامًا',
      solar_why_title: 'لماذا تختار حلولنا الشمسية؟',
      solar_why_p1: 'نتشارك مع مصنّعين عالميين روّاد لنقدم لك التقنية الشمسية الأكثر موثوقية وكفاءة. يضمن المثبتون المعتمدون لدينا تحسين كل نظام وفق تخطيط سطحك ونمط استهلاكك للطاقة.',
      solar_why_p2: 'من الفيلات السكنية إلى أسطح المباني التجارية الكبيرة، لدينا الخبرة لتسليم المشاريع في الوقت المحدد وضمن الميزانية. يشمل دعمنا بعد البيع فحوصات أداء دورية وصيانة سريعة الاستجابة.',
      intrusion_page_title: 'كشف التسلل',
      intrusion_page_sub: 'أنظمة إنذار لاسلكية متقدمة، حساسات حركة، وتنبيهات لحظية تمنحك راحة بال كاملة — ليلاً ونهارًا.',
      intrusion_intel_title: 'حماية محيطية ذكية',
      intrusion_intel_p1: 'تتجاوز أنظمة كشف التسلل لدينا الإنذارات البسيطة. ننشر نهجًا متعدد الطبقات باستخدام حساسات حركة PIR وكواشف كسر الزجاج وملامسات الأبواب/النوافذ وحساسات الأشعة الخارجية لإنشاء سياج افتراضي حول ممتلكاتك.',
      intrusion_intel_p2: 'يُرسل كل حدث فورًا إلى هاتفك الذكي عبر منصتنا السحابية الآمنة، لتبقى على اطلاع دائم بما يحدث — سواء كنت في المنزل أو المكتب أو مسافرًا.',
      intrusion_bullet1: 'حساسات لاسلكية مع كشف العبث',
      intrusion_bullet2: 'خيار مراقبة محطة مركزية 24/7',
      intrusion_bullet3: 'إشعارات فورية وتسليح/تعطيل عن بُعد',
      intrusion_bullet4: 'بطارية احتياطية واتصال خلوي',
      intrusion_seamless_title: 'تكامل سلس',
      intrusion_seamless_p1: 'تتكامل أنظمة التسلل لدينا بسهولة مع كاميرات المراقبة والأقفال الذكية ومنصات المنزل الذكي. فعّل أو عطّل عبر لوحة مفاتيح أو تطبيق جوال أو حتى الأوامر الصوتية.',
      intrusion_seamless_p2: 'نقدّم حزمًا مرنة للشقق والفيلات والمكاتب والمستودعات — كل منها مصمم ليناسب ملف المخاطر وميزانية العميل.',
      toast_success: 'تم إرسال الرسالة بنجاح!', toast_consult: 'تم إرسال طلب الاستشارة!', toast_sub: 'تم الاشتراك! شكراً لك.'
    }
  };

  function setLang(lang) {
    var dict = I18N[lang] || I18N.ar;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    requestAnimationFrame(function () {
      document.querySelectorAll('.nav-logo').forEach(function (img) {
        img.src = lang === 'ar' ? 'Sagherji-Ar.png' : 'Sagherji%20Integrated%20Technologies.png';
        img.alt = lang === 'ar' ? 'شعار صاغرجي للتقنيات المتكاملة' : 'Sagherji Integrated Technologies Logo';
      });
    });
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.placeholder !== undefined) el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
    var navKeys = ['nav_home','nav_services','nav_projects','nav_about','nav_contact'];
    document.querySelectorAll('.nav-link, .mobile-link').forEach(function (el, i) {
      var k = navKeys[i % navKeys.length];
      if (dict[k] && !el.hasAttribute('data-i18n')) el.textContent = dict[k];
    });
    document.querySelectorAll('.nav-links .btn-quote, .mobile-quote').forEach(function (el) {
      if (!el.hasAttribute('data-i18n') && dict.nav_quote) el.textContent = dict.nav_quote;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'ar' ? 'En' : 'ع';
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });
    var consultTitle = document.getElementById('consultTitle');
    if (consultTitle && dict.consult_title) consultTitle.textContent = dict.consult_title;
  }

  var savedLang = localStorage.getItem('lang');
  setLang(savedLang === 'en' ? 'en' : 'ar');
  window.setLang = setLang;
  window.I18N = I18N;
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cur = htmlEl.getAttribute('lang') === 'ar' ? 'ar' : 'en';
      setLang(cur === 'ar' ? 'en' : 'ar');
    });
  });

  // Partner logo: horizontal wheel scroll
  document.querySelectorAll('.partners-section:not(.partners-center)').forEach(function (section) {
    var wrapper = section.querySelector('.partners-track-wrapper');
    if (!wrapper) return;

    section.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  });

  // Partner logo: auto-scroll
  document.querySelectorAll('.partners-track-wrapper').forEach(function (wrapper) {
    var section = wrapper.closest('.partners-section');
    if (section && section.classList.contains('partners-center')) return;
    if (wrapper.scrollWidth <= wrapper.clientWidth) return;

    var isPaused = false;
    var animId = null;

    function step() {
      if (!isPaused) {
        wrapper.scrollLeft += 1;
        if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
          wrapper.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    }

    wrapper.addEventListener('mouseenter', function () { isPaused = true; });
    wrapper.addEventListener('mouseleave', function () { isPaused = false; });

    animId = requestAnimationFrame(step);
  });

  // Consultation popup
  var POPUP_KEY = 'sagherji_consult_dismissed';
  var POPUP_DELAY = 2500;

  function createConsultPopup() {
    if (document.getElementById('consultOverlay')) return document.getElementById('consultOverlay');
    var curLang = htmlEl.getAttribute('lang') === 'en' ? 'en' : 'ar';
    var d = I18N[curLang] || I18N.ar;
    var overlay = document.createElement('div');
    overlay.id = 'consultOverlay';
    overlay.className = 'consult-overlay';
    overlay.innerHTML = '<div class="consult-modal" role="dialog" aria-modal="true" aria-labelledby="consultTitle">'
      + '<div class="consult-header">'
      + '<h2 id="consultTitle" class="consult-title" data-i18n="consult_title">' + d.consult_title + '</h2>'
      + '<button class="consult-close" aria-label="Close popup"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>'
      + '</div>'
      + '<div class="consult-body">'
      + '<form class="consult-form" id="consultForm" novalidate>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_name">' + d.consult_name + '</label><input type="text" name="name" class="consult-input" placeholder="John Doe" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_email">' + d.consult_email + '</label><input type="email" name="email" class="consult-input" placeholder="john@example.com" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_phone">' + d.consult_phone + '</label><input type="tel" name="phone" class="consult-input" placeholder="+963 900 000 000" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_property">' + d.consult_property + '</label><div class="consult-radio-group"><label class="consult-radio"><input type="radio" name="propertyType" value="Personal" checked /> <span data-i18n="form_personal">' + d.form_personal + '</span></label><label class="consult-radio"><input type="radio" name="propertyType" value="Business" /> <span data-i18n="form_business">' + d.form_business + '</span></label></div></div>'
      + '<div class="consult-field consult-field-full"><label class="consult-label" data-i18n="consult_msg">' + d.consult_msg + '</label><textarea name="message" class="consult-input consult-textarea" rows="4" data-i18n-placeholder="form_msg_ph" placeholder="' + d.form_msg_ph + '"></textarea></div>'
      + '<button type="submit" class="consult-submit" data-i18n="consult_submit">' + d.consult_submit + '</button>'
      + '<p class="consult-note" data-i18n="consult_note">' + d.consult_note + '</p>'
      + '</form>'
      + '</div></div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  var consultOverlay = createConsultPopup();
  var consultForm = document.getElementById('consultForm');

  function openConsult() {
    consultOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeConsult(persist) {
    consultOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (persist) {
      try { sessionStorage.setItem(POPUP_KEY, '1'); } catch (e) {}
    }
  }

  consultOverlay.addEventListener('click', function (e) {
    if (e.target === consultOverlay) closeConsult(true);
  });

  consultOverlay.querySelector('.consult-close').addEventListener('click', function () { closeConsult(true); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && consultOverlay.classList.contains('open')) closeConsult(true);
  });

  function showToast(msg, type) {
    var t = document.getElementById('appToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'appToast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = 'toast show ' + (type || '');
    setTimeout(function () { t.classList.remove('show'); }, 4000);
  }

  function submitToVercel(payload) {
    return fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) return res.json().then(function (j) { throw new Error(j.error || 'Failed'); });
      return res.json();
    });
  }

  if (consultForm) {
    var consultSuccess = document.createElement('div');
    consultSuccess.className = 'form-success';
    consultSuccess.textContent = 'Thank you! Your request has been sent. We will contact you shortly.';
    var consultError = document.createElement('div');
    consultError.className = 'form-error';
    consultForm.appendChild(consultSuccess);
    consultForm.appendChild(consultError);

    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!consultForm.checkValidity()) { consultForm.reportValidity(); return; }
      var data = new FormData(consultForm);
      var btn = consultForm.querySelector('.consult-submit');
      var payload = {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        propertyType: data.get('propertyType'),
        message: data.get('message'),
        formType: 'consultation'
      };
      btn.disabled = true;
      btn.textContent = 'Sending...';
      consultSuccess.classList.remove('show');
      consultError.classList.remove('show');
      submitToVercel(payload)
        .then(function () {
          consultSuccess.classList.add('show');
          var _d = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d.toast_consult, 'success');
          consultForm.reset();
          setTimeout(function () { closeConsult(true); consultSuccess.classList.remove('show'); }, 2500);
        })
        .catch(function () {
          consultError.textContent = 'Failed to send. Please try again or email info@sagherji.com';
          consultError.classList.add('show');
          showToast('Failed to send. Please try again.', 'error');
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = 'Request Consultation';
        });
    });
  }

  var dismissed = false;
  try { dismissed = sessionStorage.getItem(POPUP_KEY) === '1'; } catch (e) {}

  if (!dismissed) {
    setTimeout(openConsult, POPUP_DELAY);
  }

  document.querySelectorAll('.btn-quote, .btn-enquire, .btn-section-enquire, .btn-project, .btn-section-project').forEach(function (btn) {
    var href = btn.getAttribute('href');
    if (href && href.indexOf('#contact') !== -1) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openConsult();
      });
    } else if (btn.classList.contains('btn-quote')) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openConsult();
      });
    }
  });

  document.querySelectorAll('.contact-form').forEach(function (form) {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    var successEl = document.createElement('div');
    successEl.className = 'contact-success';
    successEl.textContent = 'Thank you! Your message has been sent. We will reply shortly.';
    var errorEl = document.createElement('div');
    errorEl.className = 'contact-error';
    form.parentNode.appendChild(successEl);
    form.parentNode.appendChild(errorEl);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var fd = new FormData(form);
      var nameVal = (fd.get('name') || '').trim();
      var emailVal = (fd.get('email') || '').trim();
      var phoneVal = (fd.get('phone') || '').trim();
      var propertyTypeVal = fd.get('propertyType') || 'Personal';
      var messageVal = (fd.get('message') || '').trim();
      if (!nameVal || !emailVal || !phoneVal || !messageVal) {
        errorEl.textContent = 'Please fill in all fields.';
        errorEl.classList.add('show');
        successEl.classList.remove('show');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        errorEl.textContent = 'Please enter a valid email address.';
        errorEl.classList.add('show');
        return;
      }
      var btn = form.querySelector('.btn-submit');
      var origText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      successEl.classList.remove('show');
      errorEl.classList.remove('show');

      var payload = {
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        propertyType: propertyTypeVal,
        message: messageVal,
        formType: 'contact'
      };

      submitToVercel(payload)
        .then(function () {
          successEl.classList.add('show');
          var _d2 = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d2.toast_success, 'success');
          form.reset();
          setTimeout(function () { successEl.classList.remove('show'); }, 5000);
        })
        .catch(function () {
          errorEl.textContent = 'Failed to send. Please email directly to info@sagherji.com';
          errorEl.classList.add('show');
          showToast('Failed to send. Please try again.', 'error');
        })
        .then(function () {
          if (btn) { btn.disabled = false; btn.textContent = origText; }
        });
    });
  });

  document.querySelectorAll('.footer-newsletter').forEach(function (wrap) {
    var input = wrap.querySelector('.newsletter-input');
    var btn = wrap.querySelector('.newsletter-btn');
    if (!input || !btn || wrap.dataset.bound) return;
    wrap.dataset.bound = '1';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var email = input.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email.', 'error');
        return;
      }
      btn.disabled = true;
      var orig = btn.textContent;
      btn.textContent = '...';
      submitToVercel({ name: 'Newsletter', email: email, message: 'Newsletter subscription request', formType: 'newsletter' })
        .then(function () {
          var _d3 = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d3.toast_sub, 'success');
          input.value = '';
        })
        .catch(function () { showToast('Failed to subscribe. Try again.', 'error'); })
        .then(function () { btn.disabled = false; btn.textContent = orig; });
    });
  });
})();
