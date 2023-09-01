import Card from "../Card/Card";
import style from "./CardContainer.module.css";
const CardContainer = () => {
  const Dogs = [
    {
      name: "Affenpinscher",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      id: 1,
      life_span: "10 - 12 years",
      height: {
        imperial: "9 - 11.5",
        metric: "23 - 29",
      },
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      },
      created: false,
    },
    {
      name: "Afghan Hound",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      id: 2,
      life_span: "10 - 13 years",
      height: {
        imperial: "25 - 27",
        metric: "64 - 69",
      },
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      image: {
        id: "hMyT4CDXR",
        width: 606,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
      },
      created: false,
    },
    {
      name: "African Hunting Dog",
      temperament: "Wild, Hardworking, Dutiful",
      id: 3,
      life_span: "11 years",
      height: {
        imperial: "30",
        metric: "76",
      },
      weight: {
        imperial: "44 - 66",
        metric: "20 - 30",
      },
      image: {
        id: "rkiByec47",
        width: 500,
        height: 335,
        url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
      },
      created: false,
    },
    {
      name: "Airedale Terrier",
      temperament:
        "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
      id: 4,
      life_span: "10 - 13 years",
      height: {
        imperial: "21 - 23",
        metric: "53 - 58",
      },
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      image: {
        id: "1-7cgoZSh",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
      },
      created: false,
    },
    {
      name: "Akbash Dog",
      temperament: "Loyal, Independent, Intelligent, Brave",
      id: 5,
      life_span: "10 - 12 years",
      height: {
        imperial: "28 - 34",
        metric: "71 - 86",
      },
      weight: {
        imperial: "90 - 120",
        metric: "41 - 54",
      },
      image: {
        id: "26pHT3Qk7",
        width: 600,
        height: 471,
        url: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
      },
      created: false,
    },
    {
      name: "Akita",
      temperament:
        "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
      id: 6,
      life_span: "10 - 14 years",
      height: {
        imperial: "24 - 28",
        metric: "61 - 71",
      },
      weight: {
        imperial: "65 - 115",
        metric: "29 - 52",
      },
      image: {
        id: "BFRYBufpm",
        width: 1280,
        height: 853,
        url: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
      },
      created: false,
    },
    {
      name: "Alapaha Blue Blood Bulldog",
      temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
      id: 7,
      life_span: "12 - 13 years",
      height: {
        imperial: "18 - 24",
        metric: "46 - 61",
      },
      weight: {
        imperial: "55 - 90",
        metric: "25 - 41",
      },
      image: {
        id: "33mJ-V3RX",
        width: 1828,
        height: 2065,
        url: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
      },
      created: false,
    },
    {
      name: "Alaskan Husky",
      temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
      id: 8,
      life_span: "10 - 13 years",
      height: {
        imperial: "23 - 26",
        metric: "58 - 66",
      },
      weight: {
        imperial: "38 - 50",
        metric: "17 - 23",
      },
      image: {
        id: "-HgpNnGXl",
        width: 500,
        height: 500,
        url: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
      },
      created: false,
    },
    {
      name: "Alaskan Malamute",
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
      id: 9,
      life_span: "12 - 15 years",
      height: {
        imperial: "23 - 25",
        metric: "58 - 64",
      },
      weight: {
        imperial: "65 - 100",
        metric: "29 - 45",
      },
      image: {
        id: "dW5UucTIW",
        width: 1023,
        height: 769,
        url: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
      },
      created: false,
    },
    {
      name: "American Bulldog",
      temperament:
        "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
      id: 10,
      life_span: "10 - 12 years",
      height: {
        imperial: "22 - 27",
        metric: "56 - 69",
      },
      weight: {
        imperial: "60 - 120",
        metric: "27 - 54",
      },
      image: {
        id: "pk1AAdloG",
        width: 1669,
        height: 1377,
        url: "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
      },
      created: false,
    },
    {
      name: "American Bully",
      temperament:
        "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
      id: 11,
      life_span: "8 – 15 years",
      height: {
        imperial: "14 - 17",
        metric: "36 - 43",
      },
      weight: {
        imperial: "30 - 150",
        metric: "14 - 68",
      },
      image: {
        id: "sqQJDtbpY",
        width: 1024,
        height: 683,
        url: "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
      },
      created: false,
    },
    {
      name: "American Eskimo Dog",
      temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
      id: 12,
      life_span: "12 - 15 years",
      height: {
        imperial: "15 - 19",
        metric: "38 - 48",
      },
      weight: {
        imperial: "20 - 40",
        metric: "9 - 18",
      },
      image: {
        id: "Bymjyec4m",
        width: 1000,
        height: 802,
        url: "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
      },
      created: false,
    },
    {
      name: "American Eskimo Dog (Miniature)",
      temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
      id: 13,
      life_span: "13 – 15 years",
      height: {
        imperial: "9 - 12",
        metric: "23 - 30",
      },
      weight: {
        imperial: "7 - 10",
        metric: "3 - 5",
      },
      image: {
        id: "_gn8GLrE6",
        width: 730,
        height: 487,
        url: "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
      },
      created: false,
    },
    {
      name: "American Foxhound",
      temperament:
        "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
      id: 14,
      life_span: "8 - 15 years",
      height: {
        imperial: "21 - 28",
        metric: "53 - 71",
      },
      weight: {
        imperial: "65 - 75",
        metric: "29 - 34",
      },
      image: {
        id: "S14n1x9NQ",
        width: 3000,
        height: 2400,
        url: "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
      },
      created: false,
    },
    {
      name: "American Pit Bull Terrier",
      temperament:
        "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
      id: 15,
      life_span: "10 - 15 years",
      height: {
        imperial: "17 - 21",
        metric: "43 - 53",
      },
      weight: {
        imperial: "30 - 60",
        metric: "14 - 27",
      },
      image: {
        id: "HkC31gcNm",
        width: 300,
        height: 244,
        url: "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
      },
      created: false,
    },
    {
      name: "American Staffordshire Terrier",
      temperament: "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
      id: 16,
      life_span: "12 - 15 years",
      height: {
        imperial: "17 - 19",
        metric: "43 - 48",
      },
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      image: {
        id: "rJIakgc4m",
        width: 357,
        height: 500,
        url: "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
      },
      created: false,
    },
    {
      name: "American Water Spaniel",
      temperament:
        "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
      id: 17,
      life_span: "10 - 12 years",
      height: {
        imperial: "15 - 18",
        metric: "38 - 46",
      },
      weight: {
        imperial: "25 - 45",
        metric: "11 - 20",
      },
      image: {
        id: "SkmRJl9VQ",
        width: 1600,
        height: 1264,
        url: "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg",
      },
      created: false,
    },
    {
      name: "Anatolian Shepherd Dog",
      temperament: "Steady, Bold, Independent, Confident, Intelligent, Proud",
      id: 18,
      life_span: "11 - 13 years",
      height: {
        imperial: "27 - 29",
        metric: "69 - 74",
      },
      weight: {
        imperial: "80 - 150",
        metric: "36 - 68",
      },
      image: {
        id: "BJT0Jx5Nm",
        width: 1216,
        height: 1131,
        url: "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
      },
      created: false,
    },
    {
      name: "Appenzeller Sennenhund",
      temperament: "Reliable, Fearless, Energetic, Lively, Self-assured",
      id: 19,
      life_span: "12 – 14 years",
      height: {
        imperial: "20 - 22",
        metric: "51 - 56",
      },
      weight: {
        imperial: "48 - 55",
        metric: "22 - 25",
      },
      image: {
        id: "HkNkxlqEX",
        width: 400,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg",
      },
      created: false,
    },
    {
      name: "Australian Cattle Dog",
      temperament: "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
      id: 21,
      life_span: "12 - 14 years",
      height: {
        imperial: "17 - 20",
        metric: "43 - 51",
      },
      weight: {
        imperial: "44 - 62",
        metric: "20 - 28",
      },
      image: {
        id: "IBkYVm4v1",
        width: 736,
        height: 850,
        url: "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
      },
      created: false,
    },
    {
      name: "Australian Kelpie",
      temperament: "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
      id: 22,
      life_span: "10 - 13 years",
      height: {
        imperial: "17 - 20",
        metric: "43 - 51",
      },
      weight: {
        imperial: "31 - 46",
        metric: "14 - 21",
      },
      image: {
        id: "Hyq1ge9VQ",
        width: 800,
        height: 533,
        url: "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg",
      },
      created: false,
    },
    {
      name: "Australian Shepherd",
      temperament:
        "Good-natured, Affectionate, Intelligent, Active, Protective",
      id: 23,
      life_span: "12 - 16 years",
      height: {
        imperial: "18 - 23",
        metric: "46 - 58",
      },
      weight: {
        imperial: "35 - 65",
        metric: "16 - 29",
      },
      image: {
        id: "B1-llgq4m",
        width: 1200,
        height: 733,
        url: "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg",
      },
      created: false,
    },
    {
      name: "Australian Terrier",
      temperament:
        "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
      id: 24,
      life_span: "15 years",
      height: {
        imperial: "10 - 11",
        metric: "25 - 28",
      },
      weight: {
        imperial: "14 - 16",
        metric: "6 - 7",
      },
      image: {
        id: "r1Ylge5Vm",
        width: 1081,
        height: 720,
        url: "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg",
      },
      created: false,
    },
    {
      name: "Azawakh",
      temperament: "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
      id: 25,
      life_span: "10 - 13 years",
      height: {
        imperial: "23 - 29",
        metric: "58 - 74",
      },
      weight: {
        imperial: "33 - 55",
        metric: "15 - 25",
      },
      image: {
        id: "SkvZgx94m",
        width: 1024,
        height: 768,
        url: "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg",
      },
      created: false,
    },
    {
      name: "Barbet",
      temperament: "Obedient, Companionable, Intelligent, Joyful",
      id: 26,
      life_span: "13 – 15 years",
      height: {
        imperial: "20 - 26",
        metric: "51 - 66",
      },
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      image: {
        id: "HyWGexcVQ",
        width: 853,
        height: 1280,
        url: "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg",
      },
      created: false,
    },
    {
      name: "Basenji",
      temperament:
        "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
      id: 28,
      life_span: "10 - 12 years",
      height: {
        imperial: "16 - 17",
        metric: "41 - 43",
      },
      weight: {
        imperial: "22 - 24",
        metric: "10 - 11",
      },
      image: {
        id: "H1dGlxqNQ",
        width: 740,
        height: 493,
        url: "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg",
      },
      created: false,
    },
    {
      name: "Basset Bleu de Gascogne",
      temperament: "Affectionate, Lively, Agile, Curious, Happy, Active",
      id: 29,
      life_span: "10 - 14 years",
      height: {
        imperial: "13 - 15",
        metric: "33 - 38",
      },
      weight: {
        imperial: "35 - 40",
        metric: "16 - 18",
      },
      image: {
        id: "BkMQll94X",
        width: 1280,
        height: 853,
        url: "https://cdn2.thedogapi.com/images/BkMQll94X.jpg",
      },
      created: false,
    },
    {
      name: "Basset Hound",
      temperament:
        "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
      id: 30,
      life_span: "12 - 15 years",
      height: {
        imperial: "14",
        metric: "36",
      },
      weight: {
        imperial: "50 - 65",
        metric: "23 - 29",
      },
      image: {
        id: "Sy57xx9EX",
        width: 1024,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg",
      },
      created: false,
    },
    {
      name: "Beagle",
      temperament:
        "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
      id: 31,
      life_span: "13 - 16 years",
      height: {
        imperial: "13 - 15",
        metric: "33 - 38",
      },
      weight: {
        imperial: "20 - 35",
        metric: "9 - 16",
      },
      image: {
        id: "Syd4xxqEm",
        width: 1000,
        height: 667,
        url: "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg",
      },
      created: false,
    },
    {
      name: "Bearded Collie",
      temperament: "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
      id: 32,
      life_span: "12 - 14 years",
      height: {
        imperial: "20 - 22",
        metric: "51 - 56",
      },
      weight: {
        imperial: "45 - 55",
        metric: "20 - 25",
      },
      image: {
        id: "A09F4c1qP",
        width: 733,
        height: 733,
        url: "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg",
      },
      created: false,
    },
    {
      name: "Beauceron",
      temperament: "Fearless, Friendly, Intelligent, Protective, Calm",
      id: 33,
      life_span: "10 - 12 years",
      height: {
        imperial: "24 - 27.5",
        metric: "61 - 70",
      },
      weight: {
        imperial: "80 - 110",
        metric: "36 - 50",
      },
      image: {
        id: "HJQ8ge5V7",
        width: 720,
        height: 563,
        url: "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg",
      },
      created: false,
    },
    {
      name: "Bedlington Terrier",
      temperament: "Affectionate, Spirited, Intelligent, Good-tempered",
      id: 34,
      life_span: "14 - 16 years",
      height: {
        imperial: "15 - 16",
        metric: "38 - 41",
      },
      weight: {
        imperial: "17 - 23",
        metric: "8 - 10",
      },
      image: {
        id: "ByK8gx947",
        width: 804,
        height: 531,
        url: "https://cdn2.thedogapi.com/images/ByK8gx947.jpg",
      },
      created: false,
    },
    {
      name: "Belgian Malinois",
      temperament:
        "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
      id: 36,
      life_span: "12 - 14 years",
      height: {
        imperial: "22 - 26",
        metric: "56 - 66",
      },
      weight: {
        imperial: "40 - 80",
        metric: "18 - 36",
      },
      image: {
        id: "r1f_ll5VX",
        width: 604,
        height: 453,
        url: "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg",
      },
      created: false,
    },
    {
      name: "Belgian Tervuren",
      temperament:
        "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
      id: 38,
      life_span: "10 - 12 years",
      height: {
        imperial: "22 - 26",
        metric: "56 - 66",
      },
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      image: {
        id: "B1KdxlcNX",
        width: 645,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg",
      },
      created: false,
    },
    {
      name: "Bernese Mountain Dog",
      temperament: "Affectionate, Loyal, Intelligent, Faithful",
      id: 41,
      life_span: "7 - 10 years",
      height: {
        imperial: "23 - 27.5",
        metric: "58 - 70",
      },
      weight: {
        imperial: "65 - 120",
        metric: "29 - 54",
      },
      image: {
        id: "S1fFlx5Em",
        width: 640,
        height: 427,
        url: "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg",
      },
      created: false,
    },
    {
      name: "Bichon Frise",
      temperament: "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
      id: 42,
      life_span: "15 years",
      height: {
        imperial: "9.5 - 11.5",
        metric: "24 - 29",
      },
      weight: {
        imperial: "10 - 18",
        metric: "5 - 8",
      },
      image: {
        id: "HkuYlxqEQ",
        width: 480,
        height: 360,
        url: "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg",
      },
      created: false,
    },
    {
      name: "Black and Tan Coonhound",
      temperament:
        "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
      id: 43,
      life_span: "10 - 12 years",
      height: {
        imperial: "23 - 27",
        metric: "58 - 69",
      },
      weight: {
        imperial: "65 - 100",
        metric: "29 - 45",
      },
      image: {
        id: "HJAFgxcNQ",
        width: 556,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg",
      },
      created: false,
    },
    {
      name: "Bloodhound",
      temperament: "Stubborn, Affectionate, Gentle, Even Tempered",
      id: 45,
      life_span: "8 - 10 years",
      height: {
        imperial: "23 - 27",
        metric: "58 - 69",
      },
      weight: {
        imperial: "80 - 110",
        metric: "36 - 50",
      },
      image: {
        id: "Skdcgx9VX",
        width: 586,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg",
      },
      created: false,
    },
    {
      name: "Bluetick Coonhound",
      temperament: "Friendly, Intelligent, Active",
      id: 47,
      life_span: "12 - 14 years",
      height: {
        imperial: "21 - 27",
        metric: "53 - 69",
      },
      weight: {
        imperial: "45 - 80",
        metric: "20 - 36",
      },
      image: {
        id: "rJxieg9VQ",
        width: 731,
        height: 599,
        url: "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg",
      },
      created: false,
    },
    {
      name: "Boerboel",
      temperament: "Obedient, Confident, Intelligent, Dominant, Territorial",
      id: 48,
      life_span: "10 - 12 years",
      height: {
        imperial: "22 - 27",
        metric: "56 - 69",
      },
      weight: {
        imperial: "110 - 200",
        metric: "50 - 91",
      },
      image: {
        id: "HyOjge5Vm",
        width: 1200,
        height: 669,
        url: "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg",
      },
      created: false,
    },
    {
      name: "Border Collie",
      temperament: "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
      id: 50,
      life_span: "12 - 16 years",
      height: {
        imperial: "18 - 22",
        metric: "46 - 56",
      },
      weight: {
        imperial: "30 - 45",
        metric: "14 - 20",
      },
      image: {
        id: "sGQvQUpsp",
        width: 1080,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
      },
      created: false,
    },
    {
      name: "Border Terrier",
      temperament:
        "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
      id: 51,
      life_span: "12 - 14 years",
      height: {
        imperial: "11 - 16",
        metric: "28 - 41",
      },
      weight: {
        imperial: "11.5 - 15.5",
        metric: "5 - 7",
      },
      image: {
        id: "HJOpge9Em",
        width: 674,
        height: 450,
        url: "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
      },
      created: false,
    },
    {
      name: "Boston Terrier",
      temperament: "Friendly, Lively, Intelligent",
      id: 53,
      life_span: "11 - 13 years",
      height: {
        imperial: "16 - 17",
        metric: "41 - 43",
      },
      weight: {
        imperial: "10 - 25",
        metric: "5 - 11",
      },
      image: {
        id: "rkZRggqVX",
        width: 1010,
        height: 673,
        url: "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg",
      },
      created: false,
    },
    {
      name: "Bouvier des Flandres",
      temperament: "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
      id: 54,
      life_span: "10 - 15 years",
      height: {
        imperial: "23.5 - 27.5",
        metric: "60 - 70",
      },
      weight: {
        imperial: "70 - 110",
        metric: "32 - 50",
      },
      image: {
        id: "Byd0xl5VX",
        width: 680,
        height: 454,
        url: "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg",
      },
      created: false,
    },
    {
      name: "Boxer",
      temperament:
        "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
      id: 55,
      life_span: "8 - 10 years",
      height: {
        imperial: "21.5 - 25",
        metric: "55 - 64",
      },
      weight: {
        imperial: "50 - 70",
        metric: "23 - 32",
      },
      image: {
        id: "ry1kWe5VQ",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg",
      },
      created: false,
    },
    {
      name: "Boykin Spaniel",
      temperament:
        "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
      id: 56,
      life_span: "10 - 14 years",
      height: {
        imperial: "14 - 18",
        metric: "36 - 46",
      },
      weight: {
        imperial: "25 - 40",
        metric: "11 - 18",
      },
      image: {
        id: "ryHJZlcNX",
        width: 577,
        height: 634,
        url: "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg",
      },
      created: false,
    },
    {
      name: "Bracco Italiano",
      temperament:
        "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
      id: 57,
      life_span: "10 - 12 years",
      height: {
        imperial: "21.5 - 26.5",
        metric: "55 - 67",
      },
      weight: {
        imperial: "55 - 88",
        metric: "25 - 40",
      },
      image: {
        id: "S13yZg5VQ",
        width: 750,
        height: 505,
        url: "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg",
      },
      created: false,
    },
    {
      name: "Briard",
      temperament:
        "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
      id: 58,
      life_span: "10 - 12 years",
      height: {
        imperial: "22 - 27",
        metric: "56 - 69",
      },
      weight: {
        imperial: "70 - 90",
        metric: "32 - 41",
      },
      image: {
        id: "rkVlblcEQ",
        width: 768,
        height: 576,
        url: "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg",
      },
      created: false,
    },
    {
      name: "Brittany",
      temperament: "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
      id: 59,
      life_span: "12 - 14 years",
      height: {
        imperial: "17.5 - 20.5",
        metric: "44 - 52",
      },
      weight: {
        imperial: "30 - 45",
        metric: "14 - 20",
      },
      image: {
        id: "HJWZZxc4X",
        width: 900,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg",
      },
      created: false,
    },
    {
      name: "Bull Terrier",
      temperament: "Trainable, Protective, Sweet-Tempered, Keen, Active",
      id: 61,
      life_span: "10 - 12 years",
      height: {
        imperial: "21 - 22",
        metric: "53 - 56",
      },
      weight: {
        imperial: "50 - 70",
        metric: "23 - 32",
      },
      image: {
        id: "VSraIEQGd",
        width: 1080,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg",
      },
      created: false,
    },
    {
      name: "Bull Terrier (Miniature)",
      temperament:
        "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
      id: 62,
      life_span: "11 – 14 years",
      height: {
        imperial: "10 - 14",
        metric: "25 - 36",
      },
      weight: {
        imperial: "25 - 33",
        metric: "11 - 15",
      },
      image: {
        id: "BkKZWlcVX",
        width: 674,
        height: 450,
        url: "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg",
      },
      created: false,
    },
    {
      name: "Bullmastiff",
      temperament:
        "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
      id: 64,
      life_span: "8 - 12 years",
      height: {
        imperial: "24 - 27",
        metric: "61 - 69",
      },
      weight: {
        imperial: "100 - 130",
        metric: "45 - 59",
      },
      image: {
        id: "r1ifZl5E7",
        width: 850,
        height: 638,
        url: "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg",
      },
      created: false,
    },
    {
      name: "Cairn Terrier",
      temperament: "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
      id: 65,
      life_span: "14 - 15 years",
      height: {
        imperial: "9 - 10",
        metric: "23 - 25",
      },
      weight: {
        imperial: "13 - 14",
        metric: "6 - 6",
      },
      image: {
        id: "Sk7Qbg9E7",
        width: 1254,
        height: 836,
        url: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
      },
      created: false,
    },
    {
      name: "Cane Corso",
      temperament: "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
      id: 67,
      life_span: "10 - 11 years",
      height: {
        imperial: "23.5 - 27.5",
        metric: "60 - 70",
      },
      weight: {
        imperial: "88 - 120",
        metric: "40 - 54",
      },
      image: {
        id: "r15m-lc4m",
        width: 645,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg",
      },
      created: false,
    },
    {
      name: "Cardigan Welsh Corgi",
      temperament:
        "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
      id: 68,
      life_span: "12 - 14 years",
      height: {
        imperial: "10.5 - 12.5",
        metric: "27 - 32",
      },
      weight: {
        imperial: "25 - 38",
        metric: "11 - 17",
      },
      image: {
        id: "SyXN-e9NX",
        width: 800,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg",
      },
      created: false,
    },
    {
      name: "Catahoula Leopard Dog",
      temperament:
        "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
      id: 69,
      life_span: "10 - 12 years",
      height: {
        imperial: "20 - 26",
        metric: "51 - 66",
      },
      weight: {
        imperial: "50 - 95",
        metric: "23 - 43",
      },
      image: {
        id: "BJcNbec4X",
        width: 650,
        height: 650,
        url: "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg",
      },
      created: false,
    },
    {
      name: "Caucasian Shepherd (Ovcharka)",
      temperament: "Alert, Quick, Dominant, Powerful, Calm, Strong",
      id: 70,
      life_span: "10 - 12 years",
      height: {
        imperial: "24 - 33.5",
        metric: "61 - 85",
      },
      weight: {
        imperial: "80 - 100",
        metric: "36 - 45",
      },
      image: {
        id: "r1rrWe5Em",
        width: 1024,
        height: 682,
        url: "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg",
      },
      created: false,
    },
    {
      name: "Cavalier King Charles Spaniel",
      temperament:
        "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
      id: 71,
      life_span: "10 - 14 years",
      height: {
        imperial: "12 - 13",
        metric: "30 - 33",
      },
      weight: {
        imperial: "13 - 18",
        metric: "6 - 8",
      },
      image: {
        id: "HJRBbe94Q",
        width: 961,
        height: 558,
        url: "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg",
      },
      created: false,
    },
    {
      name: "Chesapeake Bay Retriever",
      temperament:
        "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
      id: 76,
      life_span: "10 - 13 years",
      height: {
        imperial: "21 - 26",
        metric: "53 - 66",
      },
      weight: {
        imperial: "55 - 80",
        metric: "25 - 36",
      },
      image: {
        id: "9BXwUeCc2",
        width: 600,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg",
      },
      created: false,
    },
    {
      name: "Chinese Crested",
      temperament:
        "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
      id: 78,
      life_span: "10 - 14 years",
      height: {
        imperial: "11 - 13",
        metric: "28 - 33",
      },
      weight: {
        imperial: "10 - 13",
        metric: "5 - 6",
      },
      image: {
        id: "B1pDZx9Nm",
        width: 1200,
        height: 798,
        url: "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg",
      },
      created: false,
    },
    {
      name: "Chinese Shar-Pei",
      temperament:
        "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
      id: 79,
      life_span: "10 years",
      height: {
        imperial: "18 - 20",
        metric: "46 - 51",
      },
      weight: {
        imperial: "45 - 60",
        metric: "20 - 27",
      },
      image: {
        id: "B1ruWl94Q",
        width: 1049,
        height: 761,
        url: "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg",
      },
      created: false,
    },
    {
      name: "Chinook",
      temperament: "Friendly, Alert, Dignified, Intelligent, Calm",
      id: 80,
      life_span: "12 - 15 years",
      height: {
        imperial: "22 - 26",
        metric: "56 - 66",
      },
      weight: {
        imperial: "50 - 90",
        metric: "23 - 41",
      },
      image: {
        id: "Sypubg54Q",
        width: 600,
        height: 478,
        url: "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg",
      },
      created: false,
    },
    {
      name: "Chow Chow",
      temperament: "Aloof, Loyal, Independent, Quiet",
      id: 81,
      life_span: "12 - 15 years",
      height: {
        imperial: "17 - 20",
        metric: "43 - 51",
      },
      weight: {
        imperial: "40 - 70",
        metric: "18 - 32",
      },
      image: {
        id: "ry8KWgqEQ",
        width: 1010,
        height: 673,
        url: "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg",
      },
      created: false,
    },
    {
      name: "Clumber Spaniel",
      temperament:
        "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
      id: 84,
      life_span: "10 - 12 years",
      height: {
        imperial: "17 - 20",
        metric: "43 - 51",
      },
      weight: {
        imperial: "55 - 85",
        metric: "25 - 39",
      },
      image: {
        id: "rkeqWgq4Q",
        width: 762,
        height: 533,
        url: "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg",
      },
      created: false,
    },
    {
      name: "Cocker Spaniel",
      temperament:
        "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
      id: 86,
      life_span: "12 - 15 years",
      height: {
        imperial: "14 - 15",
        metric: "36 - 38",
      },
      weight: {
        imperial: "20 - 30",
        metric: "9 - 14",
      },
      image: {
        id: "1lFmrzECl",
        width: 1080,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg",
      },
      created: false,
    },
    {
      name: "Cocker Spaniel (American)",
      temperament: "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
      id: 87,
      life_span: "12 - 15 years",
      height: {
        imperial: "14 - 15",
        metric: "36 - 38",
      },
      weight: {
        imperial: "20 - 30",
        metric: "9 - 14",
      },
      image: {
        id: "HkRcZe547",
        width: 1024,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/HkRcZe547.jpg",
      },
      created: false,
    },
    {
      name: "Coton de Tulear",
      temperament:
        "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
      id: 89,
      life_span: "13 - 16 years",
      height: {
        imperial: "9 - 11",
        metric: "23 - 28",
      },
      weight: {
        imperial: "9 - 15",
        metric: "4 - 7",
      },
      image: {
        id: "SyviZlqNm",
        width: 2464,
        height: 1638,
        url: "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg",
      },
      created: false,
    },
    {
      name: "Dalmatian",
      temperament:
        "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
      id: 92,
      life_span: "10 - 13 years",
      height: {
        imperial: "19 - 23",
        metric: "48 - 58",
      },
      weight: {
        imperial: "50 - 55",
        metric: "23 - 25",
      },
      image: {
        id: "SkJ3blcN7",
        width: 1200,
        height: 800,
        url: "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg",
      },
      created: false,
    },
    {
      name: "Doberman Pinscher",
      temperament:
        "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
      id: 94,
      life_span: "10 years",
      height: {
        imperial: "24 - 28",
        metric: "61 - 71",
      },
      weight: {
        imperial: "66 - 88",
        metric: "30 - 40",
      },
      image: {
        id: "HyL3bl94Q",
        width: 1140,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg",
      },
      created: false,
    },
    {
      name: "Dogo Argentino",
      temperament:
        "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
      id: 95,
      life_span: "10 - 12 years",
      height: {
        imperial: "23.5 - 27",
        metric: "60 - 69",
      },
      weight: {
        imperial: "80 - 100",
        metric: "36 - 45",
      },
      image: {
        id: "S1nhWx94Q",
        width: 650,
        height: 467,
        url: "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg",
      },
      created: false,
    },
    {
      name: "Dutch Shepherd",
      temperament: "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
      id: 98,
      life_span: "15 years",
      height: {
        imperial: "22 - 24.5",
        metric: "56 - 62",
      },
      weight: {
        imperial: "50 - 70",
        metric: "23 - 32",
      },
      image: {
        id: "BkE6Wg5E7",
        width: 856,
        height: 511,
        url: "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg",
      },
      created: false,
    },
    {
      name: "English Setter",
      temperament:
        "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
      id: 101,
      life_span: "12 years",
      height: {
        imperial: "24 - 25",
        metric: "61 - 64",
      },
      weight: {
        imperial: "45 - 80",
        metric: "20 - 36",
      },
      image: {
        id: "By4A-eqVX",
        width: 1024,
        height: 683,
        url: "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg",
      },
      created: false,
    },
    {
      name: "English Shepherd",
      temperament:
        "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
      id: 102,
      life_span: "10 - 13 years",
      height: {
        imperial: "18 - 23",
        metric: "46 - 58",
      },
      weight: {
        imperial: "44 - 66",
        metric: "20 - 30",
      },
      image: {
        id: "H1QyMe5EQ",
        width: 1920,
        height: 1280,
        url: "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg",
      },
      created: false,
    },
    {
      name: "English Springer Spaniel",
      temperament:
        "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
      id: 103,
      life_span: "12 - 14 years",
      height: {
        imperial: "19 - 20",
        metric: "48 - 51",
      },
      weight: {
        imperial: "35 - 50",
        metric: "16 - 23",
      },
      image: {
        id: "Hk0Jfe5VQ",
        width: 1440,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg",
      },
      created: false,
    },
    {
      name: "English Toy Spaniel",
      temperament: "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
      id: 104,
      life_span: "10 - 12 years",
      height: {
        imperial: "10",
        metric: "25",
      },
      weight: {
        imperial: "8 - 14",
        metric: "4 - 6",
      },
      image: {
        id: "SkIgzxqNQ",
        width: 800,
        height: 696,
        url: "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg",
      },
      created: false,
    },
    {
      name: "English Toy Terrier",
      temperament:
        "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
      id: 105,
      life_span: "12 - 13 years",
      height: {
        imperial: "10 - 12",
        metric: "25 - 30",
      },
      weight: {
        imperial: "6 - 8",
        metric: "3 - 4",
      },
      image: {
        id: "SJ6eMxqEQ",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg",
      },
      created: false,
    },
    {
      name: "Eurasier",
      temperament:
        "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
      id: 107,
      life_span: "12 - 14 years",
      height: {
        imperial: "20.5 - 23.5",
        metric: "52 - 60",
      },
      weight: {
        imperial: "40 - 70",
        metric: "18 - 32",
      },
      image: {
        id: "S1VWGx9Nm",
        width: 800,
        height: 532,
        url: "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg",
      },
      created: false,
    },
    {
      name: "Field Spaniel",
      temperament: "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
      id: 108,
      life_span: "11 - 15 years",
      height: {
        imperial: "17 - 18",
        metric: "43 - 46",
      },
      weight: {
        imperial: "35 - 50",
        metric: "16 - 23",
      },
      image: {
        id: "SkJfGecE7",
        width: 1280,
        height: 906,
        url: "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg",
      },
      created: false,
    },
    {
      name: "Finnish Lapphund",
      temperament: "Friendly, Keen, Faithful, Calm, Courageous",
      id: 110,
      life_span: "12 - 15 years",
      height: {
        imperial: "16 - 21",
        metric: "41 - 53",
      },
      weight: {
        imperial: "33 - 53",
        metric: "15 - 24",
      },
      image: {
        id: "S1KMGg5Vm",
        width: 1066,
        height: 800,
        url: "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg",
      },
      created: false,
    },
    {
      name: "Finnish Spitz",
      temperament: "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
      id: 111,
      life_span: "12 - 15 years",
      height: {
        imperial: "15.5 - 20",
        metric: "39 - 51",
      },
      weight: {
        imperial: "23 - 28",
        metric: "10 - 13",
      },
      image: {
        id: "3PjHlQbkV",
        width: 500,
        height: 417,
        url: "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg",
      },
      created: false,
    },
    {
      name: "French Bulldog",
      temperament:
        "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
      id: 113,
      life_span: "9 - 11 years",
      height: {
        imperial: "11 - 12",
        metric: "28 - 30",
      },
      weight: {
        imperial: "28",
        metric: "13",
      },
      image: {
        id: "HyWNfxc47",
        width: 740,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
      },
      created: false,
    },
    {
      name: "German Pinscher",
      temperament:
        "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
      id: 114,
      life_span: "12 - 14 years",
      height: {
        imperial: "17 - 20",
        metric: "43 - 51",
      },
      weight: {
        imperial: "25 - 45",
        metric: "11 - 20",
      },
      image: {
        id: "B1u4zgqE7",
        width: 740,
        height: 480,
        url: "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg",
      },
      created: false,
    },
    {
      name: "German Shepherd Dog",
      temperament:
        "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
      id: 115,
      life_span: "10 - 13 years",
      height: {
        imperial: "22 - 26",
        metric: "56 - 66",
      },
      weight: {
        imperial: "50 - 90",
        metric: "23 - 41",
      },
      image: {
        id: "SJyBfg5NX",
        width: 600,
        height: 425,
        url: "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg",
      },
      created: false,
    },
    {
      name: "German Shorthaired Pointer",
      temperament:
        "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
      id: 116,
      life_span: "12 - 14 years",
      height: {
        imperial: "21 - 25",
        metric: "53 - 64",
      },
      weight: {
        imperial: "45 - 70",
        metric: "20 - 32",
      },
      image: {
        id: "SJqBMg5Nm",
        width: 1395,
        height: 1230,
        url: "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg",
      },
      created: false,
    },
    {
      name: "Giant Schnauzer",
      temperament:
        "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
      id: 119,
      life_span: "10 - 12 years",
      height: {
        imperial: "23.5 - 27.5",
        metric: "60 - 70",
      },
      weight: {
        imperial: "65 - 90",
        metric: "29 - 41",
      },
      image: {
        id: "H1NIzlcV7",
        width: 900,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg",
      },
      created: false,
    },
    {
      name: "Glen of Imaal Terrier",
      temperament: "Spirited, Agile, Loyal, Gentle, Active, Courageous",
      id: 120,
      life_span: "12 - 15 years",
      height: {
        imperial: "12.5 - 14",
        metric: "32 - 36",
      },
      weight: {
        imperial: "32 - 40",
        metric: "15 - 18",
      },
      image: {
        id: "H1oLMe94m",
        width: 645,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg",
      },
      created: false,
    },
    {
      name: "Golden Retriever",
      temperament:
        "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
      id: 121,
      life_span: "10 - 12 years",
      height: {
        imperial: "21.5 - 24",
        metric: "55 - 61",
      },
      weight: {
        imperial: "55 - 75",
        metric: "25 - 34",
      },
      image: {
        id: "HJ7Pzg5EQ",
        width: 900,
        height: 652,
        url: "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
      },
      created: false,
    },
    {
      name: "Gordon Setter",
      temperament: "Fearless, Alert, Loyal, Confident, Gay, Eager",
      id: 123,
      life_span: "10 - 12 years",
      height: {
        imperial: "23 - 27",
        metric: "58 - 69",
      },
      weight: {
        imperial: "45 - 80",
        metric: "20 - 36",
      },
      image: {
        id: "SJ5vzx5NX",
        width: 622,
        height: 467,
        url: "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg",
      },
      created: false,
    },
    {
      name: "Great Dane",
      temperament: "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
      id: 124,
      life_span: "7 - 10 years",
      height: {
        imperial: "28 - 32",
        metric: "71 - 81",
      },
      weight: {
        imperial: "110 - 190",
        metric: "50 - 86",
      },
      image: {
        id: "B1Edfl9NX",
        width: 800,
        height: 732,
        url: "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg",
      },
      created: false,
    },
    {
      name: "Great Pyrenees",
      temperament:
        "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
      id: 125,
      life_span: "10 - 12 years",
      height: {
        imperial: "25 - 32",
        metric: "64 - 81",
      },
      weight: {
        imperial: "85 - 115",
        metric: "39 - 52",
      },
      image: {
        id: "B12uzg9V7",
        width: 800,
        height: 550,
        url: "https://cdn2.thedogapi.com/images/B12uzg9V7.png",
      },
      created: false,
    },
    {
      name: "Greyhound",
      temperament:
        "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
      id: 127,
      life_span: "10 - 13 years",
      height: {
        imperial: "27 - 30",
        metric: "69 - 76",
      },
      weight: {
        imperial: "50 - 70",
        metric: "23 - 32",
      },
      image: {
        id: "ryNYMx94X",
        width: 1024,
        height: 681,
        url: "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg",
      },
      created: false,
    },
    {
      name: "Griffon Bruxellois",
      temperament:
        "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
      id: 128,
      life_span: "10 – 15 years",
      height: {
        imperial: "9 - 11",
        metric: "23 - 28",
      },
      weight: {
        imperial: "12",
        metric: "5",
      },
      image: {
        id: "ryoYGec4Q",
        width: 645,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg",
      },
      created: false,
    },
    {
      name: "Harrier",
      temperament:
        "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
      id: 129,
      life_span: "12 - 15 years",
      height: {
        imperial: "18 - 22",
        metric: "46 - 56",
      },
      weight: {
        imperial: "40 - 60",
        metric: "18 - 27",
      },
      image: {
        id: "B1IcfgqE7",
        width: 1920,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg",
      },
      created: false,
    },
    {
      name: "Havanese",
      temperament:
        "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
      id: 130,
      life_span: "14 - 15 years",
      height: {
        imperial: "8.5 - 11.5",
        metric: "22 - 29",
      },
      weight: {
        imperial: "7 - 13",
        metric: "3 - 6",
      },
      image: {
        id: "rkXiGl9V7",
        width: 800,
        height: 507,
        url: "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg",
      },
      created: false,
    },
    {
      name: "Irish Setter",
      temperament:
        "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
      id: 134,
      life_span: "10 - 11 years",
      height: {
        imperial: "24 - 27",
        metric: "61 - 69",
      },
      weight: {
        imperial: "35 - 70",
        metric: "16 - 32",
      },
      image: {
        id: "S1osGeqVm",
        width: 818,
        height: 522,
        url: "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg",
      },
      created: false,
    },
    {
      name: "Irish Terrier",
      temperament:
        "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
      id: 135,
      life_span: "12 - 16 years",
      height: {
        imperial: "18",
        metric: "46",
      },
      weight: {
        imperial: "25 - 27",
        metric: "11 - 12",
      },
      image: {
        id: "By-hGecVX",
        width: 800,
        height: 626,
        url: "https://cdn2.thedogapi.com/images/By-hGecVX.jpg",
      },
      created: false,
    },
    {
      name: "Irish Wolfhound",
      temperament:
        "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
      id: 137,
      life_span: "6 - 8 years",
      height: {
        imperial: "30 - 35",
        metric: "76 - 89",
      },
      weight: {
        imperial: "105 - 180",
        metric: "48 - 82",
      },
      image: {
        id: "Hyd2zgcEX",
        width: 1000,
        height: 630,
        url: "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg",
      },
      created: false,
    },
    {
      name: "Italian Greyhound",
      temperament:
        "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
      id: 138,
      life_span: "12 - 15 years",
      height: {
        imperial: "13 - 15",
        metric: "33 - 38",
      },
      weight: {
        imperial: "7 - 15",
        metric: "3 - 7",
      },
      image: {
        id: "SJAnzg9NX",
        width: 640,
        height: 377,
        url: "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg",
      },
      created: false,
    },
    {
      name: "Japanese Chin",
      temperament: "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
      id: 140,
      life_span: "12 - 14 years",
      height: {
        imperial: "8 - 11",
        metric: "20 - 28",
      },
      weight: {
        imperial: "4 - 9",
        metric: "2 - 4",
      },
      image: {
        id: "r1H6feqEm",
        width: 900,
        height: 581,
        url: "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg",
      },
      created: false,
    },
    {
      name: "Japanese Spitz",
      temperament:
        "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
      id: 141,
      life_span: "10 – 16 years",
      height: {
        imperial: "12 - 15",
        metric: "30 - 38",
      },
      weight: {
        imperial: "15 - 19",
        metric: "7 - 9",
      },
      image: {
        id: "HksaMxqNX",
        width: 600,
        height: 351,
        url: "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg",
      },
      created: false,
    },
    {
      name: "Keeshond",
      temperament: "Agile, Obedient, Playful, Quick, Sturdy, Bright",
      id: 142,
      life_span: "12 - 15 years",
      height: {
        imperial: "17 - 18",
        metric: "43 - 46",
      },
      weight: {
        imperial: "35 - 45",
        metric: "16 - 20",
      },
      image: {
        id: "S1GAGg9Vm",
        width: 1024,
        height: 683,
        url: "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg",
      },
      created: false,
    },
    {
      name: "Komondor",
      temperament: "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
      id: 144,
      life_span: "10 - 12 years",
      height: {
        imperial: "25.5 - 27.5",
        metric: "65 - 70",
      },
      weight: {
        imperial: "80 - 100",
        metric: "36 - 45",
      },
      image: {
        id: "Bko0fl547",
        width: 1030,
        height: 772,
        url: "https://cdn2.thedogapi.com/images/Bko0fl547.jpg",
      },
      created: false,
    },
    {
      name: "Kooikerhondje",
      temperament: "Benevolent, Agile, Alert, Intelligent, Active, Territorial",
      id: 145,
      life_span: "12 - 15 years",
      height: {
        imperial: "14 - 16",
        metric: "36 - 41",
      },
      weight: {
        imperial: "20 - 30",
        metric: "9 - 14",
      },
      image: {
        id: "kOMy84GQE",
        width: 1080,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg",
      },
      created: false,
    },
    {
      name: "Kuvasz",
      temperament:
        "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
      id: 147,
      life_span: "8 - 10 years",
      height: {
        imperial: "26 - 30",
        metric: "66 - 76",
      },
      weight: {
        imperial: "70 - 115",
        metric: "32 - 52",
      },
      image: {
        id: "BykZ7ecVX",
        width: 960,
        height: 768,
        url: "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg",
      },
      created: false,
    },
    {
      name: "Labrador Retriever",
      temperament:
        "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
      id: 149,
      life_span: "10 - 13 years",
      height: {
        imperial: "21.5 - 24.5",
        metric: "55 - 62",
      },
      weight: {
        imperial: "55 - 80",
        metric: "25 - 36",
      },
      image: {
        id: "B1uW7l5VX",
        width: 992,
        height: 667,
        url: "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
      },
      created: false,
    },
    {
      name: "Lagotto Romagnolo",
      temperament: "Keen, Loyal, Companionable, Loving, Active, Trainable",
      id: 151,
      life_span: "14 - 16 years",
      height: {
        imperial: "16 - 19",
        metric: "41 - 48",
      },
      weight: {
        imperial: "24 - 35",
        metric: "11 - 16",
      },
      image: {
        id: "ryzzmgqE7",
        width: 1600,
        height: 1200,
        url: "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg",
      },
      created: false,
    },
    {
      name: "Lancashire Heeler",
      temperament: "Clever, Friendly, Alert, Intelligent",
      id: 153,
      life_span: "12 – 15 years",
      height: {
        imperial: "10 - 12",
        metric: "25 - 30",
      },
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      image: {
        id: "S1RGml5Em",
        width: 680,
        height: 453,
        url: "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg",
      },
      created: false,
    },
    {
      name: "Leonberger",
      temperament:
        "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
      id: 155,
      life_span: "6 - 8 years",
      height: {
        imperial: "25.5 - 31.5",
        metric: "65 - 80",
      },
      weight: {
        imperial: "120 - 170",
        metric: "54 - 77",
      },
      image: {
        id: "ByrmQlqVm",
        width: 1024,
        height: 694,
        url: "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg",
      },
      created: false,
    },
    {
      name: "Lhasa Apso",
      temperament:
        "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
      id: 156,
      life_span: "12 - 15 years",
      height: {
        imperial: "10 - 11",
        metric: "25 - 28",
      },
      weight: {
        imperial: "12 - 18",
        metric: "5 - 8",
      },
      image: {
        id: "SJp7Qe5EX",
        width: 680,
        height: 444,
        url: "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg",
      },
      created: false,
    },
    {
      name: "Maltese",
      temperament:
        "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
      id: 161,
      life_span: "15 - 18 years",
      height: {
        imperial: "8 - 10",
        metric: "20 - 25",
      },
      weight: {
        imperial: "4 - 7",
        metric: "2 - 3",
      },
      image: {
        id: "B1SV7gqN7",
        width: 680,
        height: 453,
        url: "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
      },
      created: false,
    },
    {
      name: "Miniature American Shepherd",
      temperament: "Energetic, Loyal, Intelligent, Trainable",
      id: 165,
      life_span: "12 - 15 years",
      height: {
        imperial: "13 - 18",
        metric: "33 - 46",
      },
      weight: {
        imperial: "20 - 40",
        metric: "9 - 18",
      },
      image: {
        id: "BkHHQgcN7",
        width: 920,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg",
      },
      created: false,
    },
    {
      name: "Miniature Pinscher",
      temperament: "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
      id: 167,
      life_span: "15 years",
      height: {
        imperial: "10 - 12.5",
        metric: "25 - 32",
      },
      weight: {
        imperial: "8 - 11",
        metric: "4 - 5",
      },
      image: {
        id: "Hy3H7g94X",
        width: 1500,
        height: 1125,
        url: "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg",
      },
      created: false,
    },
    {
      name: "Miniature Schnauzer",
      temperament: "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
      id: 168,
      life_span: "12 - 14 years",
      height: {
        imperial: "12 - 14",
        metric: "30 - 36",
      },
      weight: {
        imperial: "11 - 20",
        metric: "5 - 9",
      },
      image: {
        id: "SJIUQl9NX",
        width: 800,
        height: 533,
        url: "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg",
      },
      created: false,
    },
    {
      name: "Newfoundland",
      temperament: "Sweet-Tempered, Gentle, Trainable",
      id: 171,
      life_span: "8 - 10 years",
      height: {
        imperial: "26 - 28",
        metric: "66 - 71",
      },
      weight: {
        imperial: "100 - 150",
        metric: "45 - 68",
      },
      image: {
        id: "Sk4DXl54m",
        width: 1174,
        height: 986,
        url: "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg",
      },
      created: false,
    },
    {
      name: "Norfolk Terrier",
      temperament:
        "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
      id: 172,
      life_span: "12 - 15 years",
      height: {
        imperial: "9 - 10",
        metric: "23 - 25",
      },
      weight: {
        imperial: "11 - 12",
        metric: "5 - 5",
      },
      image: {
        id: "B1ADQg94X",
        width: 1468,
        height: 1092,
        url: "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg",
      },
      created: false,
    },
    {
      name: "Norwich Terrier",
      temperament: "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
      id: 176,
      life_span: "12 - 15 years",
      height: {
        imperial: "10",
        metric: "25",
      },
      weight: {
        imperial: "11 - 12",
        metric: "5 - 5",
      },
      image: {
        id: "BkgKXlqE7",
        width: 1140,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg",
      },
      created: false,
    },
    {
      name: "Nova Scotia Duck Tolling Retriever",
      temperament: "Outgoing, Alert, Patient, Intelligent, Loving",
      id: 177,
      life_span: "12 - 14 years",
      height: {
        imperial: "17 - 21",
        metric: "43 - 53",
      },
      weight: {
        imperial: "35 - 50",
        metric: "16 - 23",
      },
      image: {
        id: "SyYtQe5V7",
        width: 630,
        height: 420,
        url: "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg",
      },
      created: false,
    },
    {
      name: "Old English Sheepdog",
      temperament: "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
      id: 178,
      life_span: "10 - 12 years",
      height: {
        imperial: "21",
        metric: "53",
      },
      weight: {
        imperial: "60 - 100",
        metric: "27 - 45",
      },
      image: {
        id: "HkZ57lq4m",
        width: 1334,
        height: 889,
        url: "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg",
      },
      created: false,
    },
    {
      name: "Olde English Bulldogge",
      temperament: "Friendly, Alert, Confident, Loving, Courageous, Strong",
      id: 179,
      life_span: "9 – 14 years",
      height: {
        imperial: "15 - 19",
        metric: "38 - 48",
      },
      weight: {
        imperial: "65 – 85",
        metric: "NaN",
      },
      image: {
        id: "B1d5me547",
        width: 554,
        height: 546,
        url: "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
      },
      created: false,
    },
    {
      name: "Papillon",
      temperament: "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
      id: 181,
      life_span: "13 - 17 years",
      height: {
        imperial: "8 - 11",
        metric: "20 - 28",
      },
      weight: {
        imperial: "3 - 12",
        metric: "1 - 5",
      },
      image: {
        id: "SkJj7e547",
        width: 960,
        height: 765,
        url: "https://cdn2.thedogapi.com/images/SkJj7e547.jpg",
      },
      created: false,
    },
    {
      name: "Pekingese",
      temperament:
        "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
      id: 183,
      life_span: "14 - 18 years",
      height: {
        imperial: "6 - 9",
        metric: "15 - 23",
      },
      weight: {
        imperial: "14",
        metric: "6",
      },
      image: {
        id: "ByIiml9Nm",
        width: 960,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg",
      },
      created: false,
    },
    {
      name: "Pembroke Welsh Corgi",
      temperament: "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
      id: 184,
      life_span: "12 - 14 years",
      height: {
        imperial: "10 - 12",
        metric: "25 - 30",
      },
      weight: {
        imperial: "25 - 30",
        metric: "11 - 14",
      },
      image: {
        id: "rJ6iQeqEm",
        width: 1280,
        height: 720,
        url: "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg",
      },
      created: false,
    },
    {
      name: "Perro de Presa Canario",
      temperament: "Strong Willed, Suspicious, Gentle, Dominant, Calm",
      id: 185,
      life_span: "10 - 12 years",
      height: {
        imperial: "22 - 25.5",
        metric: "56 - 65",
      },
      weight: {
        imperial: "88 - 110",
        metric: "40 - 50",
      },
      image: {
        id: "S1V3Qeq4X",
        width: 600,
        height: 483,
        url: "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg",
      },
      created: false,
    },
    {
      name: "Pharaoh Hound",
      temperament:
        "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
      id: 188,
      life_span: "12 - 14 years",
      height: {
        imperial: "21 - 25",
        metric: "53 - 64",
      },
      weight: {
        imperial: "40 - 60",
        metric: "18 - 27",
      },
      image: {
        id: "Byz6mgqEQ",
        width: 3918,
        height: 2938,
        url: "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg",
      },
      created: false,
    },
    {
      name: "Plott",
      temperament: "Bold, Alert, Loyal, Intelligent",
      id: 189,
      life_span: "12 - 14 years",
      height: {
        imperial: "20 - 25",
        metric: "51 - 64",
      },
      weight: {
        imperial: "40 - 60",
        metric: "18 - 27",
      },
      image: {
        id: "B1i67l5VQ",
        width: 640,
        height: 480,
        url: "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg",
      },
      created: false,
    },
    {
      name: "Pomeranian",
      temperament:
        "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
      id: 193,
      life_span: "15 years",
      height: {
        imperial: "8 - 12",
        metric: "20 - 30",
      },
      weight: {
        imperial: "3 - 7",
        metric: "1 - 3",
      },
      image: {
        id: "HJd0XecNX",
        width: 800,
        height: 532,
        url: "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg",
      },
      created: false,
    },
    {
      name: "Poodle (Miniature)",
      id: 196,
      life_span: "12 – 15 years",
      height: {
        imperial: "11 - 15",
        metric: "28 - 38",
      },
      weight: {
        imperial: "15 - 17",
        metric: "7 - 8",
      },
      image: {
        id: "Hkxk4ecVX",
        width: 1280,
        height: 853,
        url: "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg",
      },
      created: false,
    },
    {
      name: "Poodle (Toy)",
      id: 197,
      life_span: "18 years",
      height: {
        imperial: "9 - 11",
        metric: "23 - 28",
      },
      weight: {
        imperial: "6 - 9",
        metric: "3 - 4",
      },
      image: {
        id: "rJFJVxc4m",
        width: 620,
        height: 403,
        url: "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg",
      },
      created: false,
    },
    {
      name: "Pug",
      temperament:
        "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
      id: 201,
      life_span: "12 - 14 years",
      height: {
        imperial: "10 - 12",
        metric: "25 - 30",
      },
      weight: {
        imperial: "14 - 18",
        metric: "6 - 8",
      },
      image: {
        id: "HyJvcl9N7",
        width: 800,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg",
      },
      created: false,
    },
    {
      name: "Puli",
      temperament: "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
      id: 204,
      life_span: "12 - 16 Years years",
      height: {
        imperial: "16 - 17",
        metric: "41 - 43",
      },
      weight: {
        imperial: "25 - 35",
        metric: "11 - 16",
      },
      image: {
        id: "ryPgVl5N7",
        width: 1199,
        height: 829,
        url: "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg",
      },
      created: false,
    },
    {
      name: "Pumi",
      temperament: "Lively, Reserved, Intelligent, Active, Protective, Vocal",
      id: 205,
      life_span: "13 - 15 years",
      height: {
        imperial: "15 - 18.5",
        metric: "38 - 47",
      },
      weight: {
        imperial: "18 - 33",
        metric: "8 - 15",
      },
      image: {
        id: "SyRe4xcN7",
        width: 695,
        height: 391,
        url: "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg",
      },
      created: false,
    },
    {
      name: "Rat Terrier",
      temperament:
        "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
      id: 207,
      life_span: "12 - 18 years",
      height: {
        imperial: "10 - 13",
        metric: "25 - 33",
      },
      weight: {
        imperial: "8 - 25",
        metric: "4 - 11",
      },
      image: {
        id: "HkXWNl9E7",
        width: 825,
        height: 689,
        url: "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
      },
      created: false,
    },
    {
      name: "Redbone Coonhound",
      temperament:
        "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
      id: 208,
      life_span: "10 - 12 years",
      height: {
        imperial: "21 - 27",
        metric: "53 - 69",
      },
      weight: {
        imperial: "45 - 80",
        metric: "20 - 36",
      },
      image: {
        id: "HJMzEl5N7",
        width: 1537,
        height: 1323,
        url: "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg",
      },
      created: false,
    },
    {
      name: "Rhodesian Ridgeback",
      temperament:
        "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
      id: 209,
      life_span: "10 - 12 years",
      height: {
        imperial: "24 - 27",
        metric: "61 - 69",
      },
      weight: {
        imperial: "75 - 80",
        metric: "34 - 36",
      },
      image: {
        id: "By9zNgqE7",
        width: 1000,
        height: 667,
        url: "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg",
      },
      created: false,
    },
    {
      name: "Rottweiler",
      temperament:
        "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
      id: 210,
      life_span: "8 - 10 years",
      height: {
        imperial: "22 - 27",
        metric: "56 - 69",
      },
      weight: {
        imperial: "75 - 110",
        metric: "34 - 50",
      },
      image: {
        id: "r1xXEgcNX",
        width: 736,
        height: 595,
        url: "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg",
      },
      created: false,
    },
    {
      name: "Russian Toy",
      id: 211,
      life_span: "10 - 12 years",
      height: {
        imperial: "7.5 - 10.5",
        metric: "19 - 27",
      },
      weight: {
        imperial: "3 - 6",
        metric: "1 - 3",
      },
      image: {
        id: "HkP7Vxc4Q",
        width: 645,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg",
      },
      created: false,
    },
    {
      name: "Saint Bernard",
      temperament: "Friendly, Lively, Gentle, Watchful, Calm",
      id: 212,
      life_span: "7 - 10 years",
      height: {
        imperial: "25.5 - 27.5",
        metric: "65 - 70",
      },
      weight: {
        imperial: "130 - 180",
        metric: "59 - 82",
      },
      image: {
        id: "_Qf9nfRzL",
        width: 1080,
        height: 1084,
        url: "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png",
      },
      created: false,
    },
    {
      name: "Saluki",
      temperament: "Aloof, Reserved, Intelligent, Quiet",
      id: 213,
      life_span: "12 - 14 years",
      height: {
        imperial: "23 - 28",
        metric: "58 - 71",
      },
      weight: {
        imperial: "35 - 65",
        metric: "16 - 29",
      },
      image: {
        id: "fjFIuehNo",
        width: 750,
        height: 450,
        url: "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg",
      },
      created: false,
    },
    {
      name: "Samoyed",
      temperament: "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
      id: 214,
      life_span: "12 - 14 years",
      height: {
        imperial: "19 - 23.5",
        metric: "48 - 60",
      },
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      image: {
        id: "S1T8Ee9Nm",
        width: 1200,
        height: 797,
        url: "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg",
      },
      created: false,
    },
    {
      name: "Schipperke",
      temperament: "Fearless, Agile, Curious, Independent, Confident, Faithful",
      id: 216,
      life_span: "13 - 15 years",
      height: {
        imperial: "10 - 13",
        metric: "25 - 33",
      },
      weight: {
        imperial: "10 - 16",
        metric: "5 - 7",
      },
      image: {
        id: "SyBvVgc47",
        width: 1024,
        height: 681,
        url: "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg",
      },
      created: false,
    },
    {
      name: "Scottish Deerhound",
      temperament: "Docile, Friendly, Dignified, Gentle",
      id: 218,
      life_span: "8 - 10 years",
      height: {
        imperial: "28 - 32",
        metric: "71 - 81",
      },
      weight: {
        imperial: "70 - 130",
        metric: "32 - 59",
      },
      image: {
        id: "SkNjqx9NQ",
        width: 700,
        height: 480,
        url: "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg",
      },
      created: false,
    },
    {
      name: "Scottish Terrier",
      temperament: "Feisty, Alert, Independent, Playful, Quick, Self-assured",
      id: 219,
      life_span: "11 - 13 years",
      height: {
        imperial: "10",
        metric: "25",
      },
      weight: {
        imperial: "18 - 22",
        metric: "8 - 10",
      },
      image: {
        id: "Bklnce5NX",
        width: 1280,
        height: 976,
        url: "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg",
      },
      created: false,
    },
    {
      name: "Shetland Sheepdog",
      temperament:
        "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
      id: 221,
      life_span: "12 - 14 years",
      height: {
        imperial: "13 - 16",
        metric: "33 - 41",
      },
      weight: {
        imperial: "30",
        metric: "14",
      },
      image: {
        id: "rJa29l9E7",
        width: 824,
        height: 640,
        url: "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg",
      },
      created: false,
    },
    {
      name: "Shiba Inu",
      temperament: "Charming, Fearless, Keen, Alert, Confident, Faithful",
      id: 222,
      life_span: "12 - 16 years",
      height: {
        imperial: "13.5 - 16.5",
        metric: "34 - 42",
      },
      weight: {
        imperial: "17 - 23",
        metric: "8 - 10",
      },
      image: {
        id: "Zn3IjPX3f",
        width: 1080,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
      },
      created: false,
    },
    {
      name: "Shih Tzu",
      temperament:
        "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
      id: 223,
      life_span: "10 - 18 years",
      height: {
        imperial: "8 - 11",
        metric: "20 - 28",
      },
      weight: {
        imperial: "9 - 16",
        metric: "4 - 7",
      },
      image: {
        id: "BkrJjgcV7",
        width: 800,
        height: 600,
        url: "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg",
      },
      created: false,
    },
    {
      name: "Shiloh Shepherd",
      temperament: "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
      id: 225,
      life_span: "9 – 14 years",
      height: {
        imperial: "26 - 30",
        metric: "66 - 76",
      },
      weight: {
        imperial: "120 - 140",
        metric: "54 - 64",
      },
      image: {
        id: "SJJxjecEX",
        width: 1005,
        height: 803,
        url: "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg",
      },
      created: false,
    },
    {
      name: "Siberian Husky",
      temperament: "Outgoing, Friendly, Alert, Gentle, Intelligent",
      id: 226,
      life_span: "12 years",
      height: {
        imperial: "20 - 23.5",
        metric: "51 - 60",
      },
      weight: {
        imperial: "35 - 60",
        metric: "16 - 27",
      },
      image: {
        id: "S17ZilqNm",
        width: 1920,
        height: 1280,
        url: "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg",
      },
      created: false,
    },
    {
      name: "Silky Terrier",
      temperament: "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
      id: 228,
      life_span: "12 - 15 years",
      height: {
        imperial: "9 - 10",
        metric: "23 - 25",
      },
      weight: {
        imperial: "8 - 10",
        metric: "4 - 5",
      },
      image: {
        id: "ByzGsl5Nm",
        width: 1599,
        height: 1142,
        url: "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg",
      },
      created: false,
    },
    {
      name: "Smooth Fox Terrier",
      temperament:
        "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
      id: 232,
      life_span: "12 - 14 years",
      height: {
        imperial: "15.5",
        metric: "39",
      },
      weight: {
        imperial: "up - 18",
        metric: "NaN - 8",
      },
      image: {
        id: "Syszjx9Em",
        width: 1600,
        height: 1031,
        url: "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg",
      },
      created: false,
    },
    {
      name: "Soft Coated Wheaten Terrier",
      temperament:
        "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
      id: 233,
      life_span: "12 - 15 years",
      height: {
        imperial: "16 - 18",
        metric: "41 - 46",
      },
      weight: {
        imperial: "30 - 40",
        metric: "14 - 18",
      },
      image: {
        id: "HJHmix5NQ",
        width: 1200,
        height: 800,
        url: "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg",
      },
      created: false,
    },
    {
      name: "Spanish Water Dog",
      temperament:
        "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
      id: 235,
      life_span: "12 - 15 years",
      height: {
        imperial: "16 - 20",
        metric: "41 - 51",
      },
      weight: {
        imperial: "30 - 50",
        metric: "14 - 23",
      },
      image: {
        id: "HJf4jl9VX",
        width: 1200,
        height: 922,
        url: "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg",
      },
      created: false,
    },
    {
      name: "Spinone Italiano",
      temperament: "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
      id: 236,
      life_span: "10 - 12 years",
      height: {
        imperial: "22.5 - 27.5",
        metric: "57 - 70",
      },
      weight: {
        imperial: "61 - 85",
        metric: "28 - 39",
      },
      image: {
        id: "rk5Eoe5Nm",
        width: 1030,
        height: 772,
        url: "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg",
      },
      created: false,
    },
    {
      name: "Staffordshire Bull Terrier",
      temperament:
        "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
      id: 238,
      life_span: "12 - 14 years",
      height: {
        imperial: "14 - 16",
        metric: "36 - 41",
      },
      weight: {
        imperial: "24 - 38",
        metric: "11 - 17",
      },
      image: {
        id: "H1zSie9V7",
        width: 1280,
        height: 852,
        url: "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg",
      },
      created: false,
    },
    {
      name: "Standard Schnauzer",
      temperament:
        "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
      id: 239,
      life_span: "13 - 15 years",
      height: {
        imperial: "17.5 - 19.5",
        metric: "44 - 50",
      },
      weight: {
        imperial: "30 - 50",
        metric: "14 - 23",
      },
      image: {
        id: "tmzeu6ID_",
        width: 650,
        height: 585,
        url: "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg",
      },
      created: false,
    },
    {
      name: "Swedish Vallhund",
      temperament:
        "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
      id: 242,
      life_span: "12 - 14 years",
      height: {
        imperial: "11.5 - 13.5",
        metric: "29 - 34",
      },
      weight: {
        imperial: "20 - 30",
        metric: "9 - 14",
      },
      image: {
        id: "HJ-Dix94Q",
        width: 1280,
        height: 851,
        url: "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg",
      },
      created: false,
    },
    {
      name: "Thai Ridgeback",
      temperament:
        "Protective, Loyal, Independent, Intelligent, Loving, Familial",
      id: 243,
      life_span: "10 - 12 years",
      height: {
        imperial: "20 - 24",
        metric: "51 - 61",
      },
      weight: {
        imperial: "35 - 55",
        metric: "16 - 25",
      },
      image: {
        id: "zv89hR-O8",
        width: 1080,
        height: 720,
        url: "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg",
      },
      created: false,
    },
    {
      name: "Tibetan Mastiff",
      temperament:
        "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
      id: 244,
      life_span: "10 - 14 years",
      height: {
        imperial: "24 - 26",
        metric: "61 - 66",
      },
      weight: {
        imperial: "85 - 140",
        metric: "39 - 64",
      },
      image: {
        id: "SkM9sec47",
        width: 1600,
        height: 1375,
        url: "https://cdn2.thedogapi.com/images/SkM9sec47.jpg",
      },
      created: false,
    },
    {
      name: "Tibetan Spaniel",
      temperament:
        "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
      id: 245,
      life_span: "12 - 15 years",
      height: {
        imperial: "10",
        metric: "25",
      },
      weight: {
        imperial: "9 - 15",
        metric: "4 - 7",
      },
      image: {
        id: "Hyjcol947",
        width: 1023,
        height: 825,
        url: "https://cdn2.thedogapi.com/images/Hyjcol947.jpg",
      },
      created: false,
    },
    {
      name: "Tibetan Terrier",
      temperament:
        "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
      id: 246,
      life_span: "12 - 15 years",
      height: {
        imperial: "14 - 17",
        metric: "36 - 43",
      },
      weight: {
        imperial: "20 - 24",
        metric: "9 - 11",
      },
      image: {
        id: "6f5n_42mB",
        width: 981,
        height: 1226,
        url: "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
      },
      created: false,
    },
    {
      name: "Toy Fox Terrier",
      temperament: "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
      id: 248,
      life_span: "12 - 15 years",
      height: {
        imperial: "8 - 11",
        metric: "20 - 28",
      },
      weight: {
        imperial: "4 - 9",
        metric: "2 - 4",
      },
      image: {
        id: "B17ase9V7",
        width: 1200,
        height: 1024,
        url: "https://cdn2.thedogapi.com/images/B17ase9V7.jpg",
      },
      created: false,
    },
    {
      name: "Treeing Walker Coonhound",
      temperament:
        "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
      id: 250,
      life_span: "10 - 13 years",
      height: {
        imperial: "20 - 27",
        metric: "51 - 69",
      },
      weight: {
        imperial: "45 - 80",
        metric: "20 - 36",
      },
      image: {
        id: "SkRpsgc47",
        width: 1920,
        height: 1080,
        url: "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg",
      },
      created: false,
    },
    {
      name: "Vizsla",
      temperament: "Affectionate, Energetic, Loyal, Gentle, Quiet",
      id: 251,
      life_span: "10 - 14 years",
      height: {
        imperial: "21 - 24",
        metric: "53 - 61",
      },
      weight: {
        imperial: "50 - 65",
        metric: "23 - 29",
      },
      image: {
        id: "r1o0jx9Em",
        width: 2269,
        height: 1276,
        url: "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg",
      },
      created: false,
    },
    {
      name: "Weimaraner",
      temperament:
        "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
      id: 253,
      life_span: "12 - 15 years",
      height: {
        imperial: "23 - 27",
        metric: "58 - 69",
      },
      weight: {
        imperial: "55 - 90",
        metric: "25 - 41",
      },
      image: {
        id: "SyU12l9V7",
        width: 901,
        height: 954,
        url: "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg",
      },
      created: false,
    },
    {
      name: "Welsh Springer Spaniel",
      temperament: "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
      id: 254,
      life_span: "12 - 15 years",
      height: {
        imperial: "17 - 19",
        metric: "43 - 48",
      },
      weight: {
        imperial: "35 - 55",
        metric: "16 - 25",
      },
      image: {
        id: "BJ1gnx5Vm",
        width: 1331,
        height: 944,
        url: "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg",
      },
      created: false,
    },
    {
      name: "West Highland White Terrier",
      temperament:
        "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
      id: 256,
      life_span: "15 - 20 years",
      height: {
        imperial: "10 - 11",
        metric: "25 - 28",
      },
      weight: {
        imperial: "15 - 22",
        metric: "7 - 10",
      },
      image: {
        id: "Bkdx2g5Em",
        width: 1065,
        height: 1032,
        url: "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg",
      },
      created: false,
    },
    {
      name: "Whippet",
      temperament: "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
      id: 257,
      life_span: "12 - 15 years",
      height: {
        imperial: "18 - 22",
        metric: "46 - 56",
      },
      weight: {
        imperial: "25 - 35",
        metric: "11 - 16",
      },
      image: {
        id: "Hyv-ne94m",
        width: 1600,
        height: 1071,
        url: "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg",
      },
      created: false,
    },
    {
      name: "White Shepherd",
      temperament:
        "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
      id: 258,
      life_span: "12 – 14 years",
      height: {
        imperial: "22 - 25",
        metric: "56 - 64",
      },
      weight: {
        imperial: "60 - 85",
        metric: "27 - 39",
      },
      image: {
        id: "r14M3e9E7",
        width: 1200,
        height: 800,
        url: "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg",
      },
      created: false,
    },
    {
      name: "Wire Fox Terrier",
      temperament: "Fearless, Friendly, Bold, Keen, Alert, Quick",
      id: 259,
      life_span: "13 – 14 years",
      height: {
        imperial: "13 - 16",
        metric: "33 - 41",
      },
      weight: {
        imperial: "15 - 19",
        metric: "7 - 9",
      },
      image: {
        id: "SJ6f2g9EQ",
        width: 1000,
        height: 795,
        url: "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg",
      },
      created: false,
    },
    {
      name: "Wirehaired Pointing Griffon",
      temperament: "Loyal, Gentle, Vigilant, Trainable, Proud",
      id: 260,
      life_span: "12 - 14 years",
      height: {
        imperial: "20 - 24",
        metric: "51 - 61",
      },
      weight: {
        imperial: "45 - 70",
        metric: "20 - 32",
      },
      image: {
        id: "Bkam2l9Vm",
        width: 2328,
        height: 1604,
        url: "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg",
      },
      created: false,
    },
    {
      name: "Wirehaired Vizsla",
      id: 261,
      life_span: "12 - 14 years",
      height: {
        imperial: "21.5 - 25",
        metric: "55 - 64",
      },
      weight: {
        imperial: "45 - 65",
        metric: "20 - 29",
      },
      image: {
        id: "r1I4hl5Em",
        width: 1024,
        height: 770,
        url: "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg",
      },
      created: false,
    },
    {
      name: "Xoloitzcuintli",
      temperament:
        "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
      id: 262,
      life_span: "12 - 14 years",
      height: {
        imperial: "10 - 23",
        metric: "25 - 58",
      },
      weight: {
        imperial: "9 - 31",
        metric: "4 - 14",
      },
      image: {
        id: "HkNS3gqEm",
        width: 1500,
        height: 1350,
        url: "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg",
      },
      created: false,
    },
    {
      name: "Yorkshire Terrier",
      temperament: "Bold, Independent, Confident, Intelligent, Courageous",
      id: 264,
      life_span: "12 - 16 years",
      height: {
        imperial: "8 - 9",
        metric: "20 - 23",
      },
      weight: {
        imperial: "4 - 7",
        metric: "2 - 3",
      },
      image: {
        id: "B12BnxcVQ",
        width: 1024,
        height: 683,
        url: "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
      },
      created: false,
    },
  ];
  let cont = 0;
  return (
    <div className={style.mainContainer}>
      <h1>Contenedor de Cards =</h1>
      {Dogs.map((dog) => {
        if (dog.id <= 8) {
          return (
            <div>
              <Card
                name={dog.name}
                life_span={dog.life_span}
                weight={dog.weight.metric}
                temperament={dog.temperament}
                id={dog?.id}
              />
            </div>
          );
        }
        return;
      })}
    </div>
  );
};

export default CardContainer;
