export const elements = {
    searchBtn: document.querySelector('.search-btn'),
    tagsSection: document.querySelector('.tags ul'),
    firstSection: document.querySelector('.first-section'),
    results: document.querySelector('.result-titles ul'),
    resultsSection: document.querySelector('.results-section')
}

export const tags = [
   'رب گوجه',
    'پیاز',
    'سیر',
    'سیب زمینی',
    'ماست',
    'مرغ',
    'گوشت چرخ کرده',
    'پنیر پیتزا',
    'تخم مرغ',
    'بادمجان',
    'ماکارونی',
    'خیارشور',
    'روغن',
    'برنج',
    'نان تست',
    'نان باگت',
    'کدوسبز',
    'فلفل دلمه',
    'تن ماهی',
    'گوجه فرنگی',
    'قارچ',
    'نان',
    'سس مایونز',
    'کره'
];

export const foods = {
    استانبولی: ['رب گوجه', 'برنج', 'پیاز', 'گوجه فرنگی'],
    ماکارونی: ['رب گوجه', 'ماکارونی','گوشت چرخ کرده', 'پیاز', 'گوجه فرنگی'],
    کتلت: ['تخم مرغ', 'سیب زمینی','گوشت چرخ کرده', 'پیاز'],
    کباب_ترکی: ['قارچ', 'مرغ','فلفل دلمه', 'گوجه فرنگی', 'پیاز'],
    پلو_تن‌ماهی: ['برنج', 'تن ماهی', 'پیاز', 'رب گوجه'],
    خوراک: ['گوشت چرخ کرده', 'سیب زمینی', 'گوجه فرنگی', 'رب گوجه', 'پیاز'],
    ساندویچ_مرغ: ['مرغ', 'نان باگت'],
    خوراک_تن‌ماهی: ['فلفل دلمه', 'تن ماهی', 'پیاز', 'گوجه فرنگی'],
    کباب_کوبیده: ['مرغ', 'پیاز', 'کره'],
    تست_تخم_مرغ: ['تخم مرغ', 'نان تست', 'کره'],
    املت: ['گوجه فرنگی', 'تخم مرغ'],
    خوراک_کدو: ['کدو سبز', 'پیاز', 'گوجه فرنگی', 'سیر'],
    نیمرو_قارچ: ['تخم مرغ', 'قارچ'],
    چیغرتما: ['مرغ', 'تخم مرغ', 'کره'],
    تن‌ماهی_با_سیب‌زمینی: ['تن ماهی', 'سیب زمینی', 'رب گوجه'],
    کوکو_برنج: ['برنج', 'تخم مرغ'],
    میرزاقاسمی: ['بادمجان', 'سیر', 'گوجه فرنگی', 'تخم مرغ'],
    نان_سیر: ['نان باگت', 'سیر', 'پنیر پیتزا', 'کره'],
    املت_مخصوص: ['سیب زمینی', 'گوشت چرخ کرده', 'قارچ', 'پیاز', 'تخم مرغ'],
    چغوت_بریزو: ['گوشت چرخ کرده', 'پیاز', 'سیب زمینی', 'رب گوجه']
}
export const foodsURL = [
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8706625-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D9%88-%D8%B3%D8%B1%DB%8C%D8%B9%F0%9F%8D%9B',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8388987-%D9%85%D8%A7%DA%A9%D8%A7%D8%B1%D9%88%D9%86%DB%8C-%D9%81%D9%88%D8%B1%DB%8C-%F0%9F%8D%9D%F0%9F%8D%9D%F0%9F%8D%9D',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7908551-%DA%A9%D8%AA%D9%84%D8%AA-%D8%B3%D8%B1%DB%8C%D8%B9-%D9%88-%D8%A2%D8%B3%D8%A7%D9%86',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7806086-%D9%83%D8%A8%D8%A7%D8%A8-%D8%AA%D8%B1%D9%83%D9%89-%D9%81%D9%88%D8%B1%D9%8A-%F0%9F%98%8D',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7556924-%D9%BE%D9%84%D9%88-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D8%B3%D8%A7%D8%AF%D9%87-%D9%88-%D8%B3%D8%B1%DB%8C%D8%B9-%F0%9F%90%9F%F0%9F%90%9F',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7430930-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%D9%81%D9%88%D8%B1%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/6950310-%D8%B3%D8%A7%D9%86%D8%AF%D9%88%DB%8C%DA%86-%D9%85%D8%B1%D8%BA-%D9%81%D9%88%D8%B1%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/5192576-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D9%86%D8%A7%D9%87%D8%A7%D8%B1-%DB%8C%D8%A7-%D8%B4%D8%A7%D9%85-%D9%81%D9%88%D8%B1%DB%8C%F0%9F%98%89',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8734408-%DA%A9%D8%A8%D8%A7%D8%A8-%DA%A9%D9%88%D8%A8%DB%8C%D8%AF%D9%87-%D9%85%D8%B1%D8%BA',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8744681-%D8%AA%D8%B3%D8%AA-%D8%AA%D8%AE%D9%85-%D9%85%D8%B1%D8%BA%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8728805-%D8%A7%D9%85%D9%84%D8%AA',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8688124-%D8%AE%D9%88%D8%B1%D8%A7%DA%A9-%DA%A9%D8%AF%D9%88-%D8%B3%D8%A8%D8%B2-%D8%B1%DA%98%DB%8C%D9%85%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8520719-%D9%86%DB%8C%D9%85%D8%B1%D9%88-%D9%82%D8%A7%D8%B1%DA%86',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/8283553-%DA%86%DB%8C%D8%BA%D8%B1%D8%AA%D9%85%D8%A7',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7745616-%D8%AA%D9%86-%D9%85%D8%A7%D9%87%DB%8C-%D8%A8%D8%A7-%D8%B3%DB%8C%D8%A8-%D8%B2%D9%85%DB%8C%D9%86%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7654672-%DA%A9%D9%88%DA%A9%D9%88-%D8%A8%D8%B1%D9%86%D8%AC',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7653135-%D9%85%DB%8C%D8%B1%D8%B2%D8%A7-%D9%82%D8%A7%D8%B3%D9%85%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7610302-%D9%86%D8%A7%D9%86-%D8%B3%DB%8C%D8%B1-%D8%AE%D9%88%D8%B4%D9%85%D8%B2%D9%87',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/7567167-%D8%A7%D9%85%D9%84%D8%AA-%D9%85%D8%AE%D8%B5%D9%88%D8%B5-%D8%AD%D9%88%D8%B1%D8%A7%DB%8C%DB%8C',
    'https://cookpad.com/ir/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%20%D8%BA%D8%B0%D8%A7/6439392-%DA%86%D8%BA%D9%88%D8%AA-%D8%A8%D8%B1%DB%8C%D8%B2%D9%88-%F0%9F%98%8A'
]