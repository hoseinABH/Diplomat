const products = [
  {
    name:
      'گوشی موبایل سامسونگ مدل Galaxy Note20 Ultra SM-N985F/DS دو سیم کارت ظرفیت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/ed97aae370e4657ac7a82e663e50be30e9b91a28_1597133954.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'سامسونگ گوشی جدید سری A خود را با نام «A31» در تاریخ 27 آوریل 2020 معرفی کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل Galaxy A31با صفحه‌نمایش سوپر آمولد طراحی شده است و ظاهر هم زیبایی دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد  امکان کم کند. قاب جلویی آن را یک نمایشگر تمام صفحه پوشانده که البته جلوه‌ی زیبایی هم به آن داده است.',
    brand: 'Samsung Galaxy A31 SM-A315F/DS Dual SIM 128GB Mobile Phone',
    category: 'کالای دیجیتال',
    price: 31.139,
    countInStock: 3,
    rating: 4.3,
    numReviews: 71,
  },
  {
    name:
      'گوشی موبایل سامسونگ مدل Galaxy S20 Plus SM-G985F/DS دو سیم کارت ظرفیت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/4e2d8c43741f2d717115e1322b8075211225c37d_1597223600.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'سامسونگ سال 2019 را با متنوع کردن هرچند بیشتر سری گوشی‌های A خود آغاز کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل Galaxy A30s با صفحه‌نمایش سوپر آمولد طراحی  شده است و ظاهر هم زیبایی دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد امکان کم کند. ',
    brand: 'Samsung Galaxy S20 Plus SM-G985F/DS Dual SIM 128GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 22.999,
    countInStock: 12,
    rating: 4.3,
    numReviews: 112,
  },
  {
    name:
      'گوشی موبایل سامسونگ مدل Galaxy A30s SM-A307GN/DS دو سیم کارت ظرفیت 128',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/114170147.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'چندسالی است که معرفی سری محصولات بالارده «Galaxy S» در صدر اخبار مهم برای طرفداران دنیای فناوری اطلاعات قرار گرفته‌اند. گوشی موبایل «Samsung Galaxy S20 Plus» در فوریه 2020 روانه بازار شد تا ادامه دهنده راه این پرچم‌داران سامسونگ باشد. شاید مهم‌ترین تفاوت این محصول با برادر بزرگ‌ترش (Galaxy S20 Ultra) نبود سنسور پریسکوپ و باتری کمی‌ کوچکتر باشد.',
    brand: 'Samsung Galaxy A30s SM-A307GN/DS Dual SIM 128GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 0,
    countInStock: 0,
    rating: 5,
    numReviews: 3,
  },
  {
    name:
      'گوشی موبایل هوآوی مدل Y9s STK-L21 دو سیم کارت ظرفیت 128 گیگابایت    ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/119196513.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی موبایل مدل «Y9s» از سری محصولات شرکت مطرح هوآوی است که در رده گوشی‌های بزرگ و مدرن قرار می‌گیرد. حسگر دوربین سلفی در این گوشی با استفاده از موتوری کوچک در زمان گرفتن سلفی بالا می‌آید. نمایشگر این محصول دارای رزولوشن بالایی است؛ به‌طوری‌که در اندازه‌ی 6.59 اینچی‌اش، حدود 391 پیکسل را در هر اینچ جا داده است.',
    brand: 'Hawvi Y9s  SM-A307FN/DS Dual SIM 128GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 660000,
    countInStock: 5,
    rating: 2.4,
    numReviews: 500,
  },
  {
    name:
      'گوشی موبایل شیائومی مدل Redmi Note 9 M2003J15SS دو سیم‌ کارت ظرفیت 128 گیگابایت      ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/f92dfb141480b0800859d266e85063f09f6d3237_1595065027.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'نسل نهم از گوشی‌های Redmi Note خود را معرفی کرده است. گوشی « Redmi Note 9 » مانند نسخه‌های قبلی این سری از گوشی‌های شیائومی از صفحه‌نمایش بزرگ، باتری پرقدرت، طراحی جذاب دوربین و سخت‌افزار مناسب برای اجرای بازی برخوردار است.',
    brand: 'Redmi Note 9 M2003J15SS Dual SIM 128GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 533000,
    countInStock: 26,
    rating: 5,
    numReviews: 300,
  },
  {
    name:
      'گوشی موبایل نوکیا مدل Nokia 5.3 TA-1234 DS دو سیم کارت ظرفیت 64 گیگابایت ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/562ccfcb0a0bd3e18def9bd813b1af8e427a9512_1599845583.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی موبایل «5.3» از سری محصولات جدید و خوش‌ساختی است که از سوی شرکت مطرح «نوکیا» (Nokia) روانه بازار شده است. صفحه‌نمایش این گوشی موبایل در اندازه 6.55 اینچ است و از فناوری IPS بهره می برد. همچنین صحفه‌نمایش نوکیا 5.3 با استفاده از فناوری Corning Gorilla Glass 3 در برابر خط‌وخش و صدمات احتمالی محافظت می‌شود.',
    brand: 'Nokia 5.3 TA-1234 DS Dual SIM 64GB Mobile Phone',
    category: 'کالای دیجیتال',
    price: 5859600,
    countInStock: 3,
    rating: 4.8,
    numReviews: 300,
  },
  {
    name:
      'گوشی موبایل موتورولا مدل Moto G9 Plus XT2087-2 دو سیم کارت ظرفیت 128 گیگابایت   ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/4ffd7653b223a80835a15dfb3a26b2ecfae57f06_1607262316.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'موتورلا در سال‌های اخیر پیشرفت زیادی را از خود نشان داده است. این شرکت با بهره‌گیری از گرایش‌ روز محصولی زیبا روانه بازار کرده است. «Moto G9 Plus XT2087-2» گوشی موبایلی خوش‌ساخت است که حاشیه چندانی را در صفحه‌نمایش خود جا نداده است. از ویژگی‌های این محصول می‌توان به دوربین چهارگانه آن اشاره کرد.',
    brand: 'Motorola Moto G9 Plus XT2087-2 Dual SIM 128GB Mobile Phone    ',
    category: 'کالای دیجیتال',
    price: 3650000,
    countInStock: 35,
    rating: 2.3,
    numReviews: 300,
  },
  {
    name:
      'گوشی موبایل سامسونگ مدگوشی موبایل هوآوی مدل Mate 30pro LIO-N29 5G دو سیم کارت ظرفیت 256 گیگابایت      ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/e7b387d6b083113b0f782b2ea2697001879876fd_1607835282.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'در دنیای امروزی ما، گوشی‌های همراه اسمارت یکی از اعضای خانواده‌های ما شده و بسیاری از کارهایی که در روزمره انجام می‌دهیم، الزام به وجود آن‌ها دارد. با پیشرفت تکنولوژی این گوشی‌ها هم روزانه دارای تغییرات و پیشرفت می‌شوند. یکی از کمپانی‌های بزرگ و مطرح در سطح جهانی هوآوی است که گوشی‌هایی با محبوبیت و طرف‌داری بالایی تولید می‌کند و سالانه فروش بسیاری از بازار را به‌دلیل کیفیت به خود اختصاص می‌دهد.',
    brand: 'Huawei Mate 30pro LIO-N29 5G Dual SIM 256GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 3546000,
    countInStock: 69,
    rating: 4.8,
    numReviews: 800,
  },
  {
    name:
      'گوشی موبایل موتورولا مدل Motorola G8 Power Lite XT2055-1 دو سیم کارت ظرفیت 64 گیگابایت      ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/531b89d6ba6112f594974d647e60baba469dd33b_1595925663.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'موتورلا در سال‌های اخیر پیشرفت زیادی را از خود نشان داده است. این شرکت با بهره‌گیری از گرایش‌ روز محصولی زیبا روانه بازار کرده است. «Motorola G8 Power Lite» گوشی موبایلی خوش‌ساخت است که حاشیه چندانی را در صفحه‌نمایش خود جا نداده است. از ویژگی‌های این محصول می‌توان به دوربین دوگانه آن اشاره کرد؛ همچنین به‌گفته‌ شرکت سازنده، این دستگاه در برابر قطرات آب مقاوم است.',
    brand: 'Motorola G8 Power Lite XT2055-1 Dual SIM 64GB Mobile Phone    ',
    category: 'کالای دیجیتال',
    price: 499000,
    countInStock: 26,
    rating: 2.6,
    numReviews: 564,
  },
  {
    name: 'گوشی موبایل دوجی مدل S40 دو سیم کارت ظرفیت 32 گیگابایت ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/113451914.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'کمپانی دوجی در سال ۲۰۱۹ برای کاربرانی که خواهان گوشی‌های هوشمند زیبا ، کارآمد و در عین حال مقاوم بودند، گوشی مدل S40 را به بازار عرضه کرد. این گوشی ضمن داشتن ظاهری زیبا و چشم نواز، قابلیت‌ها و امکانات مختلفی دارد که آن را به دستگاهی کارا و مطمئن تبدیل کرده است.',
    brand: 'Doogee S40 Dual SIM 32GB Mobile Phone    ',
    category: 'کالای دیجیتال',
    price: 4599000,
    countInStock: 69,
    rating: 4.8,
    numReviews: 600,
  },

  {
    name:
      'گوشی موبایل شیائومی مدل Redmi 8A M1908C3KG دو سیم‌ کارت ظرفیت 32 گیگابایت   ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/114533821.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی مدل «Redmi 8A» از سری محصولات مقرون‌به‌صرفه شرکت مطرح شیائومی است که با پنل­ IPS LCD ساخته‌شده و فاصله لبه صفحه‌نمایش در آن بسیار کم است. این محصول با صفحه‌نمایش بدون حاشیه روانه بازار شده است، نمایشگر آن رزولوشن HD دارد و در اندازه‌ی 6.2 اینچی‌اش، حدود 271 پیکسل را در هر اینچ جا داده است.',
    brand: 'Xiaomi Redmi 8A M1908C3KG Dual SIM 32GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 4550000,
    countInStock: 32,
    rating: 5,
    numReviews: 1596,
  },
  {
    name:
      'گوشی موبایل شیائومی مدل Mi 10 5G M2001J2G تک سیم‌ کارت ظرفیت 256 گیگابایت  ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/8fbd7325f2e24b3031258db57fa89b33bff64324_1598879322.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی «Mi 10» از سری محصولات شرکت مطرح شیائومی است که با پنل سوپرآمولد و پشتیبانی از فناوری ارتباطی 5G روانه بازار شده است. نمایشگر Mi 10 از رزولوشن بالایی برخوردار است ؛ به‌طوری‌که در اندازه‌ی 6.67 اینچی آن، حدود 386 پیکسل را در هر اینچ جا داده است. در گوشی می 10 شیائومی نمایشگر تقریباً تمام قاب جلویی گوشی را پر کرده است.',
    brand: 'Xiaomi Mi 10 5G M2001J2G Single SIM 256GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 5400580,
    countInStock: 4,
    rating: 3.5,
    numReviews: 1596,
  },
  {
    name:
      'گوشی موبایل هوآوی مدل Y9 Prime 2019 STK-L21 دو سیم کارت ظرفیت 128 گیگابایت  ',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/114612944.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی مدل « Y9 Prime 2019» از سری محصولات شرکت مطرح هوآوی است که با صفحه‌نمایش کاملاً تمام‌صفحه و بدون بریدگی روانه بازار شده است. حسگر دوربین سلفی هم در این گوشی با استفاده از موتوری کوچک در زمان گرفتن سلفی بالا می‌آید. نمایشگر این محصول دارای رزولوشن بالایی است؛ به‌طوری‌که در اندازه‌ی 6.59 اینچی‌اش، حدود 391 پیکسل را در هر اینچ جا داده است.',
    brand: 'Huawei Y9 Prime 2019 STK-L21 Dual SIM 128GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 7850400,
    countInStock: 0,
    rating: 4.8,
    numReviews: 1596,
  },
  {
    name:
      'گوشی موبایل شیائومی مدل Redmi Note 8 M1908C3JG دو سیم‌ کارت ظرفیت 64 گیگابایت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'سامسونگ سال 2019 را با متنوع کردن هرچند بیشتر سری گوشی‌های A خود آغاز کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل Galaxy A30s با صفحه‌نمایش سوپر آمولد طراحی  شده است و ظاهر هم زیبایی دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد امکان کم کند.',
    brand: 'Xiaomi Redmi Note 8 M1908C3JG Dual SIM 64GB Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 562500,
    countInStock: 32,
    rating: 2.5,
    numReviews: 1596,
  },
  {
    name:
      'گوشی موبایل سامسونگ مدل Galaxy A71 SM-A715F/DS دو سیم‌کارت ظرفیت 128 گیگابایت همراه با رم 8 گیگابایت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'گوشی موبایل گلکسی A71 سامسونگ یکی از قدرتمندترین محصولات میان‌رده موجود در بازار است که حسگر انگشت زیرصفحه نمایش و دوربین چهار‌گانه روانه بازار شده است. سامسونگ سال 2019 را با متنوع کردن هرچند بیشتر سری گوشی‌های A خود آغاز کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل Galaxy A71 با صفحه‌نمایش سوپر آمولد طراحی شده است و ظاهر هم زیبایی دارد.',
    brand:
      'Samsung Galaxy A71 SM-A715F/DS Dual Sim 128GB With 8GB Ram Mobile Phone ',
    category: 'کالای دیجیتال',
    price: 1235000,
    countInStock: 69,
    rating: 4.4,
    numReviews: 1596,
  },
  {
    name:
      'گوشی موبایل اپل مدل iPhone 12 Pro A2408 دو سیم‌ کارت ظرفیت 128 گیگابایت',
    image:
      'https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433891.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
    description:
      'سامسونگ سال 2019 را با متنوع کردن هرچند بیشتر سری گوشی‌های A خود آغاز کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل Galaxy A30s با صفحه‌نمایش سوپر آمولد طراحی  شده است و ظاهر هم زیبایی دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد امکان کم کند.',
    brand: 'Apple iPhone 12 Pro Dual SIM 128GB A2408 Mobile Phone',
    category: 'کالای دیجیتال',
    price: 522000,
    countInStock: 3,
    rating: 4.9,
    numReviews: 80,
  },
];

export default products;
