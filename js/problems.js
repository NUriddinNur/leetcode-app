
const problems = [
	{ 
        problemCount: 1,
        condition: 'sum',
		definition: 'array elementlari yig\'ndisini hisoblovchi sum funksiyasini yozing',
		tests: [
			{
				test: [4, 4, 4],
				answer: 12,
                explanation: 'Because 4 + 4 + 4 = 12'
			},
			{
				test: [-8, 5, 1],
				answer: -2,
                explanation: 'Because -8 + 5 + 1 = -2'
			},
            {
				test: [-1, 4, 6],
				answer: 9,
			},
            {
				test: [5, 6, 7],
				answer: 18,
			},
            {
				test: [111, 1, 2],
				answer: 114,
			},
		]
	},
    {
        problemCount: 2,
        condition: 'factorial',
        definition: 'kiritilgan sonning faktorialini xisoblovchi factorial funksiya yozing',
        tests: [
            {
                test: 5,
                answer: 120,
                explanation: 'Because 1 * 2 * 3 * 4 * 5 = 120'
            },
            {
                test: 6,
                answer: 720,
                explanation: 'Because 1 * 2 * 3 * 4 * 5 * 6= 720'
            },
            {
                test: 7,
                answer: 5040,
            },
            {
                test: 8,
                answer: 40320,
            },
            {
                test: 9,
                answer: 362880,
            },
        ]
    },
    {
        problemCount: 3,
        condition: 'tubSon',
        definition: 'kiritilgan son tub sonligini aniqlovchi tubSon funksiyasini tuzing',
        tests: [
            {
                test: 5,
                answer: true,
                explanation: "5 faqat 1 ga va 5 ga bo'linadi"
            },
            {
                test: 6,
                answer: false,
                explanation: '6 1 va 6 dan boshqa 2 va 3 ga qoldiqsiz bo"linadi'
            },
            {
                test: 13,
                answer: true,
            },
            {
                test: 0,
                answer: false,
            },
            {
                test: 9,
                answer: false,
            }
        ]
    },
    {
        problemCount: 4,
        condition: 'reverseString',
        definition: 'kiritilgan so\'zni teskari o\'giruvchi reverseString funksiyasini tuzing',
        tests: [
            {
                test: "Hello",
                answer: "olleH",
                explanation: "Hello --> olleH"
            },
            {
                test: "John",
                answer: "nhoJ",
                explanation: 'John --> nohJ'
            },
            {
                test: "UZB",
                answer: "BZU",
            },
            {
                test: "Tashkent",
                answer: "tnekhsaT",
            },
            {
                test: "MadRid",
                answer: "diRdaM",
            }
        ]
    },
    {
        problemCount: 5,
        condition: 'reverseNumber',
        definition: 'kiritilgan raqamni teskari o\'giruvchi reverseNumber funksiyasini tuzing',
        tests: [
            {
                test: "123",
                answer: "321",
                explanation: "123 --> 321"
            },
            {
                test: "01",
                answer: "10",
                explanation: '01 --> 10'
            },
            {
                test: "001",
                answer: "100",
            },
            {
                test: "0100",
                answer: "0100",
            },
            {
                test: "1212",
                answer: "2121",
            }
        ]
    },
    {
        problemCount: 6,
        condition: 'isPalindrom',
        definition: 'kiritilgan raqamni palindrom palindrommasligini aniqlovchi isPalindrom funksiyasini tuzing',
        tests: [
            {
                test: 123,
                answer: false,
                explanation: "123 Palinrom raqam emas"
            },
            {
                test: 121,
                answer: true,
                explanation: '121 Palindom raqam'
            },
            {
                test: 44,
                answer: true,
            },
            {
                test: 100,
                answer: false,
            },
            {
                test: 1221,
                answer: true,
            }
        ]
    }
]
