// Origin: https://gist.github.com/Eric-Guo/25b52aac52b191afc075d7447da81a35
var orig = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "1684"
  ],
  [
    "Andorra",
    "ad",
    "376"
  ],
  [
    "Angola",
    "ao",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "1264"
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "1268"
  ],
  [
    "Argentina",
    "ar",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "297"
  ],
  [
    "Australia",
    "au",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "1242"
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "1246"
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "32"
  ],
  [
    "Belize",
    "bz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "1441"
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "1284"
  ],
  [
    "Brunei",
    "bn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "237"
  ],
  [
    "Canada",
    "ca",
    "1",
    1,
    [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "599",
    1
  ],
  [
    "Cayman Islands",
    "ky",
    "1345"
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "235"
  ],
  [
    "Chile",
    "cl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "61",
    2
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "61",
    1
  ],
  [
    "Colombia",
    "co",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "269"
  ],
  [
    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    "cd",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "1767"
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    [
      "809",
      "829",
      "849"
    ]
  ],
  [
    "Ecuador",
    "ec",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "372"
  ],
  [
    "Ethiopia",
    "et",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "1473"
  ],
  [
    "Guadeloupe",
    "gp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "1671"
  ],
  [
    "Guatemala",
    "gt",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "44",
    1
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "44",
    2
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "1876"
  ],
  [
    "Japan (日本)",
    "jp",
    "81"
  ],
  [
    "Jersey",
    "je",
    "44",
    3
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "7",
    1
  ],
  [
    "Kenya",
    "ke",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "686"
  ],
  [
    "Kosovo",
    "xk",
    "383"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "853"
  ],
  [
    "Macedonia (FYROM) (Македонија)",
    "mk",
    "389"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "223"
  ],
  [
    "Malta",
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "262",
    1
  ],
  [
    "Mexico (México)",
    "mx",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "1664"
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "234"
  ],
  [
    "Niue",
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "850"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "1670"
  ],
  [
    "Norway (Norge)",
    "no",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "92"
  ],
  [
    "Palau",
    "pw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "1",
    3,
    [
      "787",
      "939"
    ]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "250"
  ],
  [
    "Saint Barthélemy (Saint-Barthélemy)",
    "bl",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "1869"
  ],
  [
    "Saint Lucia",
    "lc",
    "1758"
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "1784"
  ],
  [
    "Samoa",
    "ws",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "1721"
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "252"
  ],
  [
    "South Africa",
    "za",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "47",
    1
  ],
  [
    "Swaziland",
    "sz",
    "268"
  ],
  [
    "Sweden (Sverige)",
    "se",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "670"
  ],
  [
    "Togo",
    "tg",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "690"
  ],
  [
    "Tonga",
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "1868"
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "1649"
  ],
  [
    "Tuvalu",
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "1340"
  ],
  [
    "Uganda",
    "ug",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "39",
    1
  ],
  [
    "Venezuela",
    "ve",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna",
    "wf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "212",
    1
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "358",
    1
  ]
];

var cn = {"AL":"\u963f\u5c14\u5df4\u5c3c\u4e9a","DZ":"\u963f\u5c14\u53ca\u5229\u4e9a","AF":"\u963f\u5bcc\u6c57","AR":"\u963f\u6839\u5ef7","AE":"\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd","AW":"\u963f\u9c81\u5df4","OM":"\u963f\u66fc","AZ":"\u963f\u585e\u62dc\u7586","AC":"\u963f\u68ee\u677e\u5c9b","EG":"\u57c3\u53ca","ET":"\u57c3\u585e\u4fc4\u6bd4\u4e9a","IE":"\u7231\u5c14\u5170","EE":"\u7231\u6c99\u5c3c\u4e9a","AD":"\u5b89\u9053\u5c14","AO":"\u5b89\u54e5\u62c9","AI":"\u5b89\u572d\u62c9","AG":"\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe","AT":"\u5965\u5730\u5229","AX":"\u5965\u5170\u7fa4\u5c9b","AU":"\u6fb3\u5927\u5229\u4e9a","BB":"\u5df4\u5df4\u591a\u65af","PG":"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a","BS":"\u5df4\u54c8\u9a6c","PK":"\u5df4\u57fa\u65af\u5766","PY":"\u5df4\u62c9\u572d","PS":"\u5df4\u52d2\u65af\u5766\u9886\u571f","BH":"\u5df4\u6797","PA":"\u5df4\u62ff\u9a6c","BR":"\u5df4\u897f","BY":"\u767d\u4fc4\u7f57\u65af","BM":"\u767e\u6155\u5927","BG":"\u4fdd\u52a0\u5229\u4e9a","MP":"\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b","BJ":"\u8d1d\u5b81","BE":"\u6bd4\u5229\u65f6","IS":"\u51b0\u5c9b","PR":"\u6ce2\u591a\u9ece\u5404","PL":"\u6ce2\u5170","BA":"\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3","BO":"\u73bb\u5229\u7ef4\u4e9a","BZ":"\u4f2f\u5229\u5179","BW":"\u535a\u8328\u74e6\u7eb3","BT":"\u4e0d\u4e39","BF":"\u5e03\u57fa\u7eb3\u6cd5\u7d22","BI":"\u5e03\u9686\u8fea","KP":"\u671d\u9c9c","GQ":"\u8d64\u9053\u51e0\u5185\u4e9a","DK":"\u4e39\u9ea6","DE":"\u5fb7\u56fd","DG":"\u8fea\u6208\u52a0\u897f\u4e9a\u5c9b","TL":"\u4e1c\u5e1d\u6c76","TG":"\u591a\u54e5","DO":"\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd","DM":"\u591a\u7c73\u5c3c\u514b","RU":"\u4fc4\u7f57\u65af","EC":"\u5384\u74dc\u591a\u5c14","ER":"\u5384\u7acb\u7279\u91cc\u4e9a","FR":"\u6cd5\u56fd","FO":"\u6cd5\u7f57\u7fa4\u5c9b","PF":"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a","GF":"\u6cd5\u5c5e\u572d\u4e9a\u90a3","TF":"\u6cd5\u5c5e\u5357\u90e8\u9886\u5730","MF":"\u6cd5\u5c5e\u5723\u9a6c\u4e01","VA":"\u68b5\u8482\u5188","PH":"\u83f2\u5f8b\u5bbe","FJ":"\u6590\u6d4e","FI":"\u82ac\u5170","CV":"\u4f5b\u5f97\u89d2","FK":"\u798f\u514b\u5170\u7fa4\u5c9b","GM":"\u5188\u6bd4\u4e9a","CG":"\u521a\u679c\uff08\u5e03\uff09","CD":"\u521a\u679c\uff08\u91d1\uff09","CO":"\u54e5\u4f26\u6bd4\u4e9a","CR":"\u54e5\u65af\u8fbe\u9ece\u52a0","GD":"\u683c\u6797\u7eb3\u8fbe","GL":"\u683c\u9675\u5170","GE":"\u683c\u9c81\u5409\u4e9a","GG":"\u6839\u897f\u5c9b","CU":"\u53e4\u5df4","GP":"\u74dc\u5fb7\u7f57\u666e","GU":"\u5173\u5c9b","GY":"\u572d\u4e9a\u90a3","KZ":"\u54c8\u8428\u514b\u65af\u5766","HT":"\u6d77\u5730","KR":"\u97e9\u56fd","NL":"\u8377\u5170","BQ":"\u8377\u5170\u52a0\u52d2\u6bd4\u533a","SX":"\u8377\u5c5e\u5723\u9a6c\u4e01","ME":"\u9ed1\u5c71\u5171\u548c\u56fd","HN":"\u6d2a\u90fd\u62c9\u65af","KI":"\u57fa\u91cc\u5df4\u65af","DJ":"\u5409\u5e03\u63d0","KG":"\u5409\u5c14\u5409\u65af\u65af\u5766","GN":"\u51e0\u5185\u4e9a","GW":"\u51e0\u5185\u4e9a\u6bd4\u7ecd","CA":"\u52a0\u62ff\u5927","GH":"\u52a0\u7eb3","IC":"\u52a0\u7eb3\u5229\u7fa4\u5c9b","GA":"\u52a0\u84ec","KH":"\u67ec\u57d4\u5be8","CZ":"\u6377\u514b\u5171\u548c\u56fd","ZW":"\u6d25\u5df4\u5e03\u97e6","CM":"\u5580\u9ea6\u9686","QA":"\u5361\u5854\u5c14","KY":"\u5f00\u66fc\u7fa4\u5c9b","CC":"\u79d1\u79d1\u65af\uff08\u57fa\u6797\uff09\u7fa4\u5c9b","KM":"\u79d1\u6469\u7f57","XK":"\u79d1\u7d22\u6c83","CI":"\u79d1\u7279\u8fea\u74e6","KW":"\u79d1\u5a01\u7279","HR":"\u514b\u7f57\u5730\u4e9a","KE":"\u80af\u5c3c\u4e9a","CK":"\u5e93\u514b\u7fa4\u5c9b","CW":"\u5e93\u62c9\u7d22","LV":"\u62c9\u8131\u7ef4\u4e9a","LS":"\u83b1\u7d22\u6258","LA":"\u8001\u631d","LB":"\u9ece\u5df4\u5ae9","LT":"\u7acb\u9676\u5b9b","LR":"\u5229\u6bd4\u91cc\u4e9a","LY":"\u5229\u6bd4\u4e9a","LI":"\u5217\u652f\u6566\u58eb\u767b","RE":"\u7559\u5c3c\u6c6a","LU":"\u5362\u68ee\u5821","RW":"\u5362\u65fa\u8fbe","RO":"\u7f57\u9a6c\u5c3c\u4e9a","MG":"\u9a6c\u8fbe\u52a0\u65af\u52a0","MV":"\u9a6c\u5c14\u4ee3\u592b","MT":"\u9a6c\u8033\u4ed6","MW":"\u9a6c\u62c9\u7ef4","MY":"\u9a6c\u6765\u897f\u4e9a","ML":"\u9a6c\u91cc","MK":"\u9a6c\u5176\u987f","MH":"\u9a6c\u7ecd\u5c14\u7fa4\u5c9b","MQ":"\u9a6c\u63d0\u5c3c\u514b","YT":"\u9a6c\u7ea6\u7279","IM":"\u66fc\u5c9b","MU":"\u6bdb\u91cc\u6c42\u65af","MR":"\u6bdb\u91cc\u5854\u5c3c\u4e9a","US":"\u7f8e\u56fd","UM":"\u7f8e\u56fd\u672c\u571f\u5916\u5c0f\u5c9b\u5c7f","AS":"\u7f8e\u5c5e\u8428\u6469\u4e9a","VI":"\u7f8e\u5c5e\u7ef4\u4eac\u7fa4\u5c9b","MN":"\u8499\u53e4","MS":"\u8499\u7279\u585e\u62c9\u7279","BD":"\u5b5f\u52a0\u62c9\u56fd","PE":"\u79d8\u9c81","FM":"\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a","MM":"\u7f05\u7538","MD":"\u6469\u5c14\u591a\u74e6","MA":"\u6469\u6d1b\u54e5","MC":"\u6469\u7eb3\u54e5","MZ":"\u83ab\u6851\u6bd4\u514b","MX":"\u58a8\u897f\u54e5","NA":"\u7eb3\u7c73\u6bd4\u4e9a","ZA":"\u5357\u975e","AQ":"\u5357\u6781\u6d32","GS":"\u5357\u4e54\u6cbb\u4e9a\u5c9b\u548c\u5357\u6851\u5a01\u9f50\u7fa4\u5c9b","SS":"\u5357\u82cf\u4e39","NR":"\u7459\u9c81","NI":"\u5c3c\u52a0\u62c9\u74dc","NP":"\u5c3c\u6cca\u5c14","NE":"\u5c3c\u65e5\u5c14","NG":"\u5c3c\u65e5\u5229\u4e9a","NU":"\u7ebd\u57c3","NO":"\u632a\u5a01","NF":"\u8bfa\u798f\u514b\u5c9b","PW":"\u5e15\u52b3","PN":"\u76ae\u7279\u51ef\u6069\u7fa4\u5c9b","PT":"\u8461\u8404\u7259","JP":"\u65e5\u672c","SE":"\u745e\u5178","CH":"\u745e\u58eb","SV":"\u8428\u5c14\u74e6\u591a","WS":"\u8428\u6469\u4e9a","RS":"\u585e\u5c14\u7ef4\u4e9a","SL":"\u585e\u62c9\u5229\u6602","SN":"\u585e\u5185\u52a0\u5c14","CY":"\u585e\u6d66\u8def\u65af","SC":"\u585e\u820c\u5c14","SA":"\u6c99\u7279\u963f\u62c9\u4f2f","BL":"\u5723\u5df4\u6cf0\u52d2\u7c73","CX":"\u5723\u8bde\u5c9b","ST":"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4","SH":"\u5723\u8d6b\u52d2\u62ff","KN":"\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af","LC":"\u5723\u5362\u897f\u4e9a","SM":"\u5723\u9a6c\u529b\u8bfa","PM":"\u5723\u76ae\u57c3\u5c14\u548c\u5bc6\u514b\u9686\u7fa4\u5c9b","VC":"\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af","LK":"\u65af\u91cc\u5170\u5361","SK":"\u65af\u6d1b\u4f10\u514b","SI":"\u65af\u6d1b\u6587\u5c3c\u4e9a","SJ":"\u65af\u74e6\u5c14\u5df4\u7279\u548c\u626c\u9a6c\u5ef6","SZ":"\u65af\u5a01\u58eb\u5170","SD":"\u82cf\u4e39","SR":"\u82cf\u91cc\u5357","SB":"\u6240\u7f57\u95e8\u7fa4\u5c9b","SO":"\u7d22\u9a6c\u91cc","TJ":"\u5854\u5409\u514b\u65af\u5766","TW":"\u53f0\u6e7e","TH":"\u6cf0\u56fd","TZ":"\u5766\u6851\u5c3c\u4e9a","TO":"\u6c64\u52a0","TC":"\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b","TA":"\u7279\u91cc\u65af\u5766-\u8fbe\u5e93\u5c3c\u4e9a\u7fa4\u5c9b","TT":"\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5","TN":"\u7a81\u5c3c\u65af","TV":"\u56fe\u74e6\u5362","TR":"\u571f\u8033\u5176","TM":"\u571f\u5e93\u66fc\u65af\u5766","TK":"\u6258\u514b\u52b3","WF":"\u74e6\u5229\u65af\u548c\u5bcc\u56fe\u7eb3","VU":"\u74e6\u52aa\u963f\u56fe","GT":"\u5371\u5730\u9a6c\u62c9","VE":"\u59d4\u5185\u745e\u62c9","BN":"\u6587\u83b1","UG":"\u4e4c\u5e72\u8fbe","UA":"\u4e4c\u514b\u5170","UY":"\u4e4c\u62c9\u572d","UZ":"\u4e4c\u5179\u522b\u514b\u65af\u5766","GR":"\u5e0c\u814a","ES":"\u897f\u73ed\u7259","EH":"\u897f\u6492\u54c8\u62c9","SG":"\u65b0\u52a0\u5761","NC":"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a","NZ":"\u65b0\u897f\u5170","HU":"\u5308\u7259\u5229","EA":"\u4f11\u8fbe\u53ca\u6885\u5229\u5229\u4e9a","SY":"\u53d9\u5229\u4e9a","JM":"\u7259\u4e70\u52a0","AM":"\u4e9a\u7f8e\u5c3c\u4e9a","YE":"\u4e5f\u95e8","IQ":"\u4f0a\u62c9\u514b","IR":"\u4f0a\u6717","IL":"\u4ee5\u8272\u5217","IT":"\u610f\u5927\u5229","IN":"\u5370\u5ea6","ID":"\u5370\u5ea6\u5c3c\u897f\u4e9a","GB":"\u82f1\u56fd","VG":"\u82f1\u5c5e\u7ef4\u4eac\u7fa4\u5c9b","IO":"\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730","JO":"\u7ea6\u65e6","VN":"\u8d8a\u5357","ZM":"\u8d5e\u6bd4\u4e9a","JE":"\u6cfd\u897f\u5c9b","TD":"\u4e4d\u5f97","GI":"\u76f4\u5e03\u7f57\u9640","CL":"\u667a\u5229","CF":"\u4e2d\u975e\u5171\u548c\u56fd","CN":"\u4e2d\u56fd","MO":"\u4e2d\u56fd\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a","HK":"\u4e2d\u56fd\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a"}

for (var key in orig) {
  var countryCode = orig[key][1].toUpperCase();
  if(countryCode in cn) {
    orig[key][0] = cn[countryCode];
  }
  else
      console.log("nope, " + countryCode + " not found in cn");
}

document.body.innerHTML = "<textarea rows=20 cols=60>" + JSON.stringify(orig) + "</textarea>";
