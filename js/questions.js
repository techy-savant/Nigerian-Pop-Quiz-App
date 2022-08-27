//creating an array and passing the number, questions, options, and answers

let questions = [
    {
        numb: 1,
        question: 'Nigeria was formed in which Year?',
        answer: '1914',
        options:[
            '1920',
            '1914',
            '1960',
            '1963',
        ]
    },
    {
        numb: 2,
        question: 'Nigeria gained independence from Britain in which Year',
        answer: '1960',
        options:[
            '1963',
            '1960',
            '1957',
            '1970',
        ]
    },
    {
        numb: 3,
        question: 'The devastating civil war of Nigeria started when and spanned how many years',
        answer: '1967 - 3 years',
        options:[
            '1971 - 3 years',
            '1959 - 4 years',
            '1967 - 3 years',
            '1964 - 3 years',
        ]
    },
    {
        numb: 4,
        question: 'Nigeria has experienced military rule for a collective total of ___ years?',
        answer: '29 years',
        options:[
            '18 years',
            '21 years',
            '29 years',
            '25 years',
        ]
    },
    {
        numb: 5,
        question: 'Why is Nigeria referred to as Giant of Africa',
        answer: 'Because of its population and economy',
        options:[
            'Because of it is the best country',
            'Because of its land mass',
            'Because of the beautiful women',
            'Because of its population and economy',
        ]
    },
    {
        numb: 6,
        question: 'The first man to own a car in Nigeria is',
        answer: 'Herbert Macaulay',
        options:[
            'Nicolas Joseph Cugnot',
            'Bitu Adekola',
            'Alvan Ikoku',
            'Herbert Macaulay',

        ]
    },
    {
        numb: 7,
        question: 'Who is the first athlete to win gold for Nigeria in a hurdle race event?',
        answer: 'Oluwatobi Amusan',
        options:[
            'Ese Brume',
            'Chioma Ajunwa',
            'Oluwatobi Amusan',
            'Chioma Onyekwere Lyons',

        ]
    },
    {
        numb: 8,
        question: 'Which year did Nigeria ditch British Right hand drive for the American German and France left hand drive',
        answer: '1972',
        options:[
            '1980',
            '1972',
            '1985',
            '1978',
        ]
    },
    {
        numb: 9,
        question: 'Nigeria is home to what percentage of the total languages spoken on Earth',
        answer: '7%',
        options:[
            '7%',
            '4%',
            '11%',
            '15%',
        ]
    },
    {
        numb: 10,
        question: 'Which state in Nigeria has more languages than 30 African countries',
        answer: 'Taraba',
        options:[
            'Edo',
            'Calabar',
            'Taraba',
            'Lagos',
        ]
    },
    {
        numb: 11,
        question: 'The Igbo Nation is older than the Yoruba Nation with how many years?',
        answer: '2550',
        options:[
            '800',
            '5500',
            '200',
            '2550',
        ]
    },
    {
        numb: 12,
        question: 'The oldest tribe in Nigeria is the',
        answer: 'Ijaw',
        options:[
            'Igbo',
            'Edo',
            'Ijaw',
            'Tiv',
        ]
    },
    {
        numb: 13,
        question: 'Approximately How many barrels of oil does Nigeria produce per day',
        answer: '1.2 million',
        options:[
            '20 million',
            '500 thousand',
            '1.2 million',
            '2.4 million',
        ]
    },
    {
        numb: 14,
        question: 'Which year did Nigeria surpass India as the worlds poverty Capital',
        answer: '2018',
        options:[
            '2018',
            '2014',
            '2016',
            '2021',
        ]
    },
    {
        numb: 15,
        question: "Is Nigeria lacking the resources to make it Economically stable ",
        answer: "No",
        options:[
            "Yes",
            "Definitely",
            "No",
            "I don't know",
        ]
    },
    {
        numb: 16,
        question: "What is Nigeria's Major Problem",
        answer: "Corruption",
        options:[
            "Corruption",
            "Hunger" ,
            "Kidnapping",
            "419",
        ]
    },
    {
        numb: 17,
        question: "How can Nigeria be saved?",
        answer: "Complete revitalisation of our Political, Economic, Social and Educational system",
        options:[
            "Killing all of our Politicians",
            "Bombing all Boko Haram, UGM infested states",
            "Complete revitalisation of our Political, Economic, Social and Educational system",
            "Just letting it be as it is",
        ]
    },
    {
        numb: 18,
        question: "What limits true National Unity among Nigerians",
        answer: "Tribalism & Nepotism",
        options:[
            "Wicked Leaders",
            "Ignorance",
            "Tribalism & Nepotism",
            "Brain drain",
        ]
    },
    {
        numb: 19,
        question: "What is Tribalism",
        answer: "Exalting one's tribe above other groups/tribe against one's better judgement",
        options:[
            "Loving your Tribe",
            "Exalting one's tribe above other groups/tribe against one's better judgement",
            "Hating other tribes",
            "Being selfish",
        ]
    },
    {
        numb: 20,
        question: "What is Political Apathy",
        answer: "Lack of Interest, enthusiasm or concern in affairs of the state/country",
        options:[
            "Political Enthusiasm",
            "Political Awareness",
            "Lack of Interest, enthusiasm or concern in affairs of the state/country",
            "Political Mugu",
        ]
    },
    {
        numb: 21,
        question: "Has Apathy lead to the enabling of our Corrupt Political System",
        answer: "Yes",
        options:[
            "Yes",
            "No",
            "Of course not",
            "I don't know",
        ]
    },
    {
        numb: 22,
        question: "Do Majority of Nigerians exhibit political Apathy",
        answer: "Yes",
        options:[
            "No",
            "Of course not",
            "Maybe",
            "Yes",
        ]
    },
    {
        numb: 23,
        question: "Which State Has the Highest Political Apathy Rate",
        answer: "Anambra",
        options:[
            "Kano",
            "Rivers",
            "Anambra",
            "Ebonyi",
        ]
    },
    {
        numb: 24,
        question: "Should we continue to allow Apathy lead us further down the rabbit hole of Poverty and economic decline?",
        answer: "Definitely not",
        options:[
            "Definitely not",
            "Yes",
            "Why not",
            "Of course",
        ]
    },
    {
        numb: 25,
        question: "What can we do to step up our game",
        answer: "Reject Political Apathy and Elect the best Candidate suitable for any Political role",
        options:[
            "Reject Political Apathy and Elect the best Candidate suitable for any Political role",
            "Vote for Candidates because they belong to your Tribe",
            "Vote for Candidates because they belong to your Party",
            "Do not vote at all",

        ]
    },
    
]