var scheduleData;

function fetchData() {
    var url = "https://github.com/KANARU-kernel/TCU_Schedule/raw/master/data.json";

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.onreadystatechange = function () {
        // if (xhr.readyState === 4 && xhr.status === 200) {
            // scheduleData = JSON.parse(xhr.responseText);
        // }
    // };
    // xhr.send();

    scheduleData = [
        [
            [
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saz151106",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saz151106",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・Global Culture(2)",
                    "Teacher": "寺澤 由紀子",
                    "ClassCode": "saz007648",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "中村 仁",
                    "ClassCode": "saz001125",
                    "Classroom": "12E"
                },
                {
                    "Subject": "宗教学",
                    "Teacher": "長島 大輔",
                    "ClassCode": "saa001119",
                    "Classroom": "12A"
                },
                {
                    "Subject": "政治学(1a)",
                    "Teacher": "坂井 亮太",
                    "ClassCode": "saa001107",
                    "Classroom": "21B"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saa151104",
                    "Classroom": "－"
                },
                {
                    "Subject": "Global Culture(2a)",
                    "Teacher": "寺澤 由紀子",
                    "ClassCode": "saa007649",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "中村 仁",
                    "ClassCode": "saa001126",
                    "Classroom": "12E"
                },
                {
                    "Subject": "政治学(1b)",
                    "Teacher": "坂井 亮太",
                    "ClassCode": "sab001108",
                    "Classroom": "21B"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "sab151105",
                    "Classroom": "－"
                },
                {
                    "Subject": "Global Culture(2b)",
                    "Teacher": "寺澤 由紀子",
                    "ClassCode": "sab007650",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "中村 仁",
                    "ClassCode": "sab001127",
                    "Classroom": "12E"
                }
            ],
            [
                {
                    "Subject": "再・教育学(1)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saz005203",
                    "Classroom": "61B"
                },
                {
                    "Subject": "再・政治学(1)",
                    "Teacher": "坂井 亮太",
                    "ClassCode": "saz001209",
                    "Classroom": "21B"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "中村 仁",
                    "ClassCode": "saz001237",
                    "Classroom": "12E"
                },
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saz511203",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saz511203",
                    "Classroom": "－"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "saa001234",
                    "Classroom": "31B"
                },
                {
                    "Subject": "教育学(1a)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saa005201",
                    "Classroom": "61B"
                },
                {
                    "Subject": "宗教学",
                    "Teacher": "長島 大輔",
                    "ClassCode": "saa001233",
                    "Classroom": "12A"
                },
                {
                    "Subject": "政治学(1a)",
                    "Teacher": "坂井 亮太",
                    "ClassCode": "saa001207",
                    "Classroom": "21B"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "saa001225",
                    "Classroom": "12N"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "saa511201",
                    "Classroom": "－"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "中村 仁",
                    "ClassCode": "saa001238",
                    "Classroom": "12E"
                },
                {
                    "Subject": "生物学",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "saa001234",
                    "Classroom": "31B"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "saa001234",
                    "Classroom": "31B"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "教育学(1b)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "sab005202",
                    "Classroom": "61B"
                },
                {
                    "Subject": "政治学(1b)",
                    "Teacher": "坂井 亮太",
                    "ClassCode": "sab001208",
                    "Classroom": "21B"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001229",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "sab001226",
                    "Classroom": "32A"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "久保 哲也\n栗原 祐二\n山口 良博",
                    "ClassCode": "sab511202",
                    "Classroom": "－"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "中村 仁",
                    "ClassCode": "sab001239",
                    "Classroom": "12E"
                },
                {
                    "Subject": "生物学",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "ソフトウェア工学概論",
                    "Teacher": "安井 浩之",
                    "ClassCode": "sab001243",
                    "Classroom": "12L"
                }
            ],
            [
                {
                    "Subject": "再・教育学(1)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saz001221",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "再・人文地理学",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "saz001303",
                    "Classroom": "71B"
                },
                {
                    "Subject": "再・論理学(1)",
                    "Teacher": "小草 泰",
                    "ClassCode": "saz001316",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saz131309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "再・CommunicationStrategies(3)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "saz001347",
                    "Classroom": "13L"
                },
                {
                    "Subject": "再・CriticalListening(2)",
                    "Teacher": "中村 優子",
                    "ClassCode": "saz001335",
                    "Classroom": "12H"
                },
                {
                    "Subject": "再・Test TakingSkills(2)",
                    "Teacher": "植野 貴志子",
                    "ClassCode": "saz005501",
                    "Classroom": "11F"
                },
                {
                    "Subject": "教育学(1a)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saa001219",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "人文地理学(a)",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "saa001301",
                    "Classroom": "71B"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "saa001310",
                    "Classroom": "32A"
                },
                {
                    "Subject": "論理学(1a)",
                    "Teacher": "小草 泰",
                    "ClassCode": "saa001314",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saa131307",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saa131307",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "CommunicationStrategies(3a)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "saa001348",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Critical Listening(2a)",
                    "Teacher": "中村 優子",
                    "ClassCode": "saa001336",
                    "Classroom": "12H"
                },
                {
                    "Subject": "Test Taking Skills(2a)",
                    "Teacher": "植野 貴志子",
                    "ClassCode": "saa005502",
                    "Classroom": "11F"
                },
                {
                    "Subject": "教育学(1b)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "sab001220",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "人文地理学(b)",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "sab001302",
                    "Classroom": "71B"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001320",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "sab001311",
                    "Classroom": "32A"
                },
                {
                    "Subject": "論理学(1b)",
                    "Teacher": "小草 泰",
                    "ClassCode": "sab001315",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "sab131308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "CommunicationStrategies(3b)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "sab001349",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Critical Listening(2b)",
                    "Teacher": "中村 優子",
                    "ClassCode": "sab001337",
                    "Classroom": "12H"
                },
                {
                    "Subject": "Test Taking Skills(2b)",
                    "Teacher": "植野 貴志子",
                    "ClassCode": "sab005503",
                    "Classroom": "11F"
                }
            ],
            [
                {
                    "Subject": "再・教育学(1)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saz001306",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "再・論理学(1)",
                    "Teacher": "小草 泰",
                    "ClassCode": "saz001403",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saz131309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "再・Academic English(2)",
                    "Teacher": "稲垣 亜希子",
                    "ClassCode": "saz005105",
                    "Classroom": "11F"
                },
                {
                    "Subject": "再・スペイン語(1)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "saz001415",
                    "Classroom": "12H"
                },
                {
                    "Subject": "教育学(1a)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saa001304",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "論理学(1a)",
                    "Teacher": "小草 泰",
                    "ClassCode": "saa001401",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saa131307",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "saa131307",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Academic English(2a)",
                    "Teacher": "稲垣 亜希子",
                    "ClassCode": "saa005106",
                    "Classroom": "11F"
                },
                {
                    "Subject": "スペイン語(1a)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "saa001416",
                    "Classroom": "12H"
                },
                {
                    "Subject": "教育学(1b)",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "sab001305",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001407",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "論理学(1b)",
                    "Teacher": "小草 泰",
                    "ClassCode": "sab001402",
                    "Classroom": "1BL"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "sab131308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "長田 剛\n木浪 信之\n砂畑 浩樹\n手束 文子\n中島 啓光\n深井 佳乃\n平山 博之\n糸井 充穂",
                    "ClassCode": "sab131308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Academic English(2b)",
                    "Teacher": "稲垣 亜希子",
                    "ClassCode": "sab005107",
                    "Classroom": "11F"
                },
                {
                    "Subject": "スペイン語(1b)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "sab001417",
                    "Classroom": "12H"
                }
            ],
            [
                {
                    "Subject": "確率論",
                    "Teacher": "山本 現",
                    "ClassCode": "saz001505",
                    "Classroom": "13M"
                },
                {
                    "Subject": "発達心理学",
                    "Teacher": "水野 直樹",
                    "ClassCode": "saz001503",
                    "Classroom": "13J"
                },
                {
                    "Subject": "幾何学(1)",
                    "Teacher": "橋本 義武",
                    "ClassCode": "saz171501",
                    "Classroom": "13P"
                },
                {
                    "Subject": "技術教育法(1)",
                    "Teacher": "殿村 洋文",
                    "ClassCode": "saz007612",
                    "Classroom": "13N"
                },
                {
                    "Subject": "電気工学概論(実習含)",
                    "Teacher": "鈴木 憲吏",
                    "ClassCode": "saz001502",
                    "Classroom": "13K"
                },
                {
                    "Subject": "理科教育法(1)",
                    "Teacher": "渡邉 大輔",
                    "ClassCode": "saz007621",
                    "Classroom": "12A"
                },
                {
                    "Subject": "再・スペイン語(1)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "saz001506",
                    "Classroom": "12H"
                },
                {
                    "Subject": "電気工学概論(実習含)",
                    "Teacher": "鈴木 憲吏",
                    "ClassCode": "saz001502",
                    "Classroom": "13K"
                },
                {
                    "Subject": "スペイン語(1a)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "saa001507",
                    "Classroom": "12H"
                },
                {
                    "Subject": "スペイン語(1b)",
                    "Teacher": "V・ブセタ",
                    "ClassCode": "sab001508",
                    "Classroom": "12H"
                }
            ]
        ],
        [
            [
                {
                    "Subject": "再・経済学(1)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saz001115",
                    "Classroom": "61C(1Q),61A(2Q)"
                },
                {
                    "Subject": "生涯スポーツ(ゴルフ)ゼミナール",
                    "Teacher": "椿原 徹也",
                    "ClassCode": "saz002101",
                    "Classroom": "9号館2階第１アリーナ"
                },
                {
                    "Subject": "再・アラビア語(1)",
                    "Teacher": "長渡 陽一",
                    "ClassCode": "saz002104",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "経済学(1a)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saa001113",
                    "Classroom": "61C"
                },
                {
                    "Subject": "アラビア語(1a)",
                    "Teacher": "長渡 陽一",
                    "ClassCode": "saa002105",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "再・化学(3)",
                    "Teacher": "吉田 真史",
                    "ClassCode": "saa172110",
                    "Classroom": "61B"
                },
                {
                    "Subject": "経済学(1b)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "sab001114",
                    "Classroom": "61A"
                },
                {
                    "Subject": "アラビア語(1b)",
                    "Teacher": "長渡 陽一",
                    "ClassCode": "sab002106",
                    "Classroom": "1BK"
                }
            ],
            [
                {
                    "Subject": "再・経済学(1)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saz001215",
                    "Classroom": "61C(1Q),61A(2Q)"
                },
                {
                    "Subject": "21世紀の社会問題と社会福祉",
                    "Teacher": "川上 富雄",
                    "ClassCode": "saz007657",
                    "Classroom": "11D"
                },
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "岩嶋 孝夫\n金堀 哲也\n趙 秋華",
                    "ClassCode": "saz132209",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "岩嶋 孝夫\n金堀 哲也\n趙 秋華",
                    "ClassCode": "saz132209",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "saz002208",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "再・フランス語(1)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "saz002214",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "再・中国語(1)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "saz002220",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "経済学(1a)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saa001213",
                    "Classroom": "61C"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "岩嶋 孝夫\n金堀 哲也\n趙 秋華",
                    "ClassCode": "saa132207",
                    "Classroom": "－"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "saa002209",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "フランス語(1a)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "saa002215",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "中国語(1a)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "saa002221",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "地学",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "清家 一馬",
                    "ClassCode": "sab002207",
                    "Classroom": "31B"
                },
                {
                    "Subject": "スポーツ･健康論",
                    "Teacher": "椿原 徹也",
                    "ClassCode": "sab007604",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "経済学(1b)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "sab001214",
                    "Classroom": "61A"
                },
                {
                    "Subject": "日本国憲法",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "sab002205",
                    "Classroom": "13L"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "岩嶋 孝夫\n金堀 哲也\n趙 秋華",
                    "ClassCode": "sab132208",
                    "Classroom": "－"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "sab002210",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "フランス語(1b)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "sab002216",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "中国語(1b)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "sab002222",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "地学",
                    "Teacher": "清家 一馬",
                    "ClassCode": "sab002207",
                    "Classroom": "31B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "清家 一馬",
                    "ClassCode": "sab002207",
                    "Classroom": "31B"
                }
            ],
            [
                {
                    "Subject": "再・経済学(1)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saz001331",
                    "Classroom": "61C(1Q),61A(2Q)"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "saz122310",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "再・Basic EnglishTraining",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "saz002321",
                    "Classroom": "13J"
                },
                {
                    "Subject": "再・Critical Reading(1)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "saz002327",
                    "Classroom": "12F"
                },
                {
                    "Subject": "再・Grammar(1)",
                    "Teacher": "磯野 睦子",
                    "ClassCode": "saz002333",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・Literature inEnglish(1)",
                    "Teacher": "染谷 昌弘",
                    "ClassCode": "saz002339",
                    "Classroom": "12J"
                },
                {
                    "Subject": "再・Test TakingSkills(1)",
                    "Teacher": "秋間 聖代",
                    "ClassCode": "saz002345",
                    "Classroom": "12H"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "saz002351",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "再・フランス語(1)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "saz002357",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "再・中国語(1)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "saz002363",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "経済学(1a)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "saa001329",
                    "Classroom": "61C"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "saa002309",
                    "Classroom": "11E"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saa002305",
                    "Classroom": "11F"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "saa122308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "saa122308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Basic EnglishTraining(a)",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "saa002322",
                    "Classroom": "13J"
                },
                {
                    "Subject": "Critical Reading(1a)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "saa002328",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Grammar(1a)",
                    "Teacher": "磯野 睦子",
                    "ClassCode": "saa002334",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Literature inEnglish(1a)",
                    "Teacher": "染谷 昌弘",
                    "ClassCode": "saa002340",
                    "Classroom": "12J"
                },
                {
                    "Subject": "Test Taking Skills(1a)",
                    "Teacher": "秋間 聖代",
                    "ClassCode": "saa002346",
                    "Classroom": "12H"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "saa002352",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "フランス語(1a)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "saa002358",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "中国語(1a)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "saa002364",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "経済学(1b)",
                    "Teacher": "高辻 成彦",
                    "ClassCode": "sab001330",
                    "Classroom": "61A"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "sab002310",
                    "Classroom": "61B"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab002306",
                    "Classroom": "11F"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "sab122309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "sab122309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Basic EnglishTraining(b)",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "sab002323",
                    "Classroom": "13J"
                },
                {
                    "Subject": "Critical Reading(1b)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "sab002329",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Grammar(1b)",
                    "Teacher": "磯野 睦子",
                    "ClassCode": "sab002335",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Literature inEnglish(1b)",
                    "Teacher": "染谷 昌弘",
                    "ClassCode": "sab002341",
                    "Classroom": "12J"
                },
                {
                    "Subject": "Test Taking Skills(1b)",
                    "Teacher": "秋間 聖代",
                    "ClassCode": "sab002347",
                    "Classroom": "12H"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "清水 紀子",
                    "ClassCode": "sab002353",
                    "Classroom": "1BG"
                },
                {
                    "Subject": "フランス語(1b)",
                    "Teacher": "富塚 真理子",
                    "ClassCode": "sab002359",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "中国語(1b)",
                    "Teacher": "黄 愛華",
                    "ClassCode": "sab002365",
                    "Classroom": "1BE"
                }
            ],
            [
                {
                    "Subject": "教育心理学",
                    "Teacher": "今野 紀子",
                    "ClassCode": "saz002411",
                    "Classroom": "12L"
                },
                {
                    "Subject": "応用体育(1)",
                    "Teacher": "金堀 哲也\n趙 秋華",
                    "ClassCode": "saz002409",
                    "Classroom": "－"
                },
                {
                    "Subject": "応用体育(2)",
                    "Teacher": "金堀 哲也\n趙 秋華",
                    "ClassCode": "saz002410",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・Basic EnglishTraining",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "saz002412",
                    "Classroom": "13J"
                },
                {
                    "Subject": "再・Critical Reading(1)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "saz002418",
                    "Classroom": "12F"
                },
                {
                    "Subject": "再・Global Society(2)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saz005423",
                    "Classroom": "11B"
                },
                {
                    "Subject": "再・LanguageSciences(2)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saz004434",
                    "Classroom": "12J"
                },
                {
                    "Subject": "通訳案内を学ぶゼミナール",
                    "Teacher": "島野 健仁郎",
                    "ClassCode": "saz004440",
                    "Classroom": "1BN"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "saa002403",
                    "Classroom": "11E"
                },
                {
                    "Subject": "法学",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "saa002407",
                    "Classroom": "13L"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "saa122308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "saa122308",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Basic EnglishTraining(a)",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "saa002413",
                    "Classroom": "13J"
                },
                {
                    "Subject": "Critical Reading(1a)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "saa002422",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Global Society(2a)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saa005424",
                    "Classroom": "11B"
                },
                {
                    "Subject": "Language Sciences(2a)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saa004435",
                    "Classroom": "12J"
                },
                {
                    "Subject": "西洋経済史",
                    "Teacher": "新保 良明",
                    "ClassCode": "sab002404",
                    "Classroom": "61B"
                },
                {
                    "Subject": "日本国憲法",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "sab002408",
                    "Classroom": "13L"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab002401",
                    "Classroom": "11F"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "sab122309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "門多 顕司\n大野 玲\n栗栖 牧生\n鈴木 ひろみ\n西川 浩之\n金子 核\n三原 国子\n尼子 淳",
                    "ClassCode": "sab122309",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Basic EnglishTraining(b)",
                    "Teacher": "鴨下 恵子",
                    "ClassCode": "sab002414",
                    "Classroom": "13J"
                },
                {
                    "Subject": "Critical Reading(1b)",
                    "Teacher": "松本 淳子",
                    "ClassCode": "sab002420",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Global Society(2b)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "sab005425",
                    "Classroom": "11B"
                },
                {
                    "Subject": "Language Sciences(2b)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "sab004436",
                    "Classroom": "12J"
                }
            ],
            [
                {
                    "Subject": "教育相談とカウンセリング(1)",
                    "Teacher": "今野 紀子",
                    "ClassCode": "saz002504",
                    "Classroom": "12L"
                },
                {
                    "Subject": "教育課程論",
                    "Teacher": "高橋 哲男",
                    "ClassCode": "saz007623",
                    "Classroom": "12K"
                },
                {
                    "Subject": "再・CommunicationSkills(1)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saz004514",
                    "Classroom": "12J"
                },
                {
                    "Subject": "再・Global Society(2)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saz005319",
                    "Classroom": "11B"
                },
                {
                    "Subject": "SDGsとESG探究ゼミナール",
                    "Teacher": "杉浦 正吾",
                    "ClassCode": "saz137627",
                    "Classroom": "13K"
                },
                {
                    "Subject": "Global Society(2a)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saa005320",
                    "Classroom": "11B"
                },
                {
                    "Subject": "Global Society(2b)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "sab005321",
                    "Classroom": "11B"
                }
            ]
        ],
        [
            [
                {
                    "Subject": "再・Critical Reading(1)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "saz003101",
                    "Classroom": "1BH"
                },
                {
                    "Subject": "Critical Reading(1a)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "saa003102",
                    "Classroom": "1BH"
                },
                {
                    "Subject": "Critical Reading(1b)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "sab003103",
                    "Classroom": "1BH"
                }
            ],
            [
                {
                    "Subject": "再・CriticalListening(3)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "saz003222",
                    "Classroom": "13L"
                },
                {
                    "Subject": "再・Critical Reading(1)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "saz003210",
                    "Classroom": "1BH"
                },
                {
                    "Subject": "再・微分積分学(2)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "saz003209",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "再・微分積分学(2)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "saz003209",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "再・日本の政治",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saz003203",
                    "Classroom": "11B"
                },
                {
                    "Subject": "視覚芸術史(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "saa002201",
                    "Classroom": "71B"
                },
                {
                    "Subject": "Critical Listening(3a)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "saa003223",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Critical Reading(1a)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "saa003211",
                    "Classroom": "1BH"
                },
                {
                    "Subject": "微分積分学(2a)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "saa003207",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "微分積分学(2a)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "saa003207",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "日本の政治(a)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saa003201",
                    "Classroom": "11B"
                },
                {
                    "Subject": "視覚芸術史(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "saa002301",
                    "Classroom": "71B"
                },
                {
                    "Subject": "Critical Listening(3b)",
                    "Teacher": "E・マディーン",
                    "ClassCode": "sab003224",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Critical Reading(1b)",
                    "Teacher": "丸山 令子",
                    "ClassCode": "sab003212",
                    "Classroom": "1BH"
                },
                {
                    "Subject": "微分積分学(2b)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "sab003208",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "微分積分学(2b)",
                    "Teacher": "津垣 正男",
                    "ClassCode": "sab003208",
                    "Classroom": "1BB"
                },
                {
                    "Subject": "日本の政治(b)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab003202",
                    "Classroom": "11B"
                }
            ],
            [
                {
                    "Subject": "介護等体験",
                    "Teacher": "井上 健\n高橋 哲男\n渡邉 大輔\n殿村 洋文",
                    "ClassCode": "saz003301",
                    "Classroom": "13J"
                }
            ],
            [
                {
                    "Subject": "教育実習事前事後指導(1)",
                    "Teacher": "井上 健\n高橋 哲男\n渡邉 大輔\n殿村 洋文",
                    "ClassCode": "saz003402",
                    "Classroom": "13J"
                }
            ],
            [
                {
                    "Subject": "栽培(実習含)",
                    "Teacher": "上地 由朗",
                    "ClassCode": "saz003501",
                    "Classroom": "13K"
                },
                {
                    "Subject": "教育実習事前事後指導(2)",
                    "Teacher": "井上 健\n高橋 哲男\n渡邉 大輔\n殿村 洋文",
                    "ClassCode": "saz003503",
                    "Classroom": "13J"
                }
            ]
        ],
        [
            [
                {
                    "Subject": "日本語基礎(1)",
                    "Teacher": "村田 朋美",
                    "ClassCode": "saz004114",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "再・国際関係論(1)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saz001103",
                    "Classroom": "61B"
                },
                {
                    "Subject": "再・心理学(1)",
                    "Teacher": "高田 純",
                    "ClassCode": "saz004103",
                    "Classroom": "61C"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saz144103",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "職業指導(1)",
                    "Teacher": "尾高 進",
                    "ClassCode": "saz004107",
                    "Classroom": "13F"
                },
                {
                    "Subject": "再・韓国語(1)",
                    "Teacher": "白雪 花",
                    "ClassCode": "saz004108",
                    "Classroom": "12D"
                },
                {
                    "Subject": "日本文学",
                    "Teacher": "原田 留美",
                    "ClassCode": "saa002110",
                    "Classroom": "11A"
                },
                {
                    "Subject": "国際関係論(1a)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saa001101",
                    "Classroom": "61B"
                },
                {
                    "Subject": "宗教学",
                    "Teacher": "長島 大輔",
                    "ClassCode": "saa001119",
                    "Classroom": "12A"
                },
                {
                    "Subject": "心理学(1a)",
                    "Teacher": "高田 純",
                    "ClassCode": "saa004101",
                    "Classroom": "61C"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saa144101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saa144101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "韓国語(1a)",
                    "Teacher": "白雪 花",
                    "ClassCode": "saa004109",
                    "Classroom": "12D"
                },
                {
                    "Subject": "国際関係論(1b)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "sab001102",
                    "Classroom": "61B"
                },
                {
                    "Subject": "心理学(1b)",
                    "Teacher": "高田 純",
                    "ClassCode": "sab004102",
                    "Classroom": "61C"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "sab144102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "sab144102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "韓国語(1b)",
                    "Teacher": "白雪 花",
                    "ClassCode": "sab004110",
                    "Classroom": "12D"
                }
            ],
            [
                {
                    "Subject": "日本語基礎(2)",
                    "Teacher": "村田 朋美",
                    "ClassCode": "saz004226",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "再・国際関係論(1)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saz001203",
                    "Classroom": "61B"
                },
                {
                    "Subject": "再・心理学(1)",
                    "Teacher": "高田 純",
                    "ClassCode": "saz004206",
                    "Classroom": "61C"
                },
                {
                    "Subject": "再・人文地理学",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "saz004203",
                    "Classroom": "71B"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saz144103",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "技術教育法(3)",
                    "Teacher": "尾高 進",
                    "ClassCode": "saz004215",
                    "Classroom": "13F"
                },
                {
                    "Subject": "再・Grammar(2)",
                    "Teacher": "沢村 静",
                    "ClassCode": "saz004216",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "再・外国語特別講義",
                    "Teacher": "秋山 義典",
                    "ClassCode": "sbz004230",
                    "Classroom": "11E"
                },
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "saz514203",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "久保 哲也\n栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "saz514203",
                    "Classroom": "－"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "saa001234",
                    "Classroom": "31B"
                },
                {
                    "Subject": "国際関係論(1a)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saa001201",
                    "Classroom": "61B"
                },
                {
                    "Subject": "宗教学",
                    "Teacher": "長島 大輔",
                    "ClassCode": "saa001233",
                    "Classroom": "12A"
                },
                {
                    "Subject": "心理学(1a)",
                    "Teacher": "高田 純",
                    "ClassCode": "saa004204",
                    "Classroom": "61C"
                },
                {
                    "Subject": "人文地理学(a)",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "saa004201",
                    "Classroom": "71B"
                },
                {
                    "Subject": "法学",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "saa002204",
                    "Classroom": "13L"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "saa001225",
                    "Classroom": "12N"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "久保 哲也\n栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "saa514201",
                    "Classroom": "－"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saa144101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "saa144101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Grammar(2a)",
                    "Teacher": "沢村 静",
                    "ClassCode": "saa004217",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "外国語特別講義(2a)",
                    "Teacher": "末田 美香子",
                    "ClassCode": "saa004222",
                    "Classroom": "13K"
                },
                {
                    "Subject": "外国語特別講義(1a)",
                    "Teacher": "秋山 義典",
                    "ClassCode": "sba004231",
                    "Classroom": "11E"
                },
                {
                    "Subject": "生物学",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "saa001234",
                    "Classroom": "31B"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "国際関係論(1b)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "sab001202",
                    "Classroom": "61B"
                },
                {
                    "Subject": "心理学(1b)",
                    "Teacher": "高田 純",
                    "ClassCode": "sab004205",
                    "Classroom": "61C"
                },
                {
                    "Subject": "人文地理学(b)",
                    "Teacher": "伊藤 慎悟",
                    "ClassCode": "sab004202",
                    "Classroom": "71B"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001229",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "日本国憲法",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "sab002205",
                    "Classroom": "13L"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "sab001226",
                    "Classroom": "32A"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "久保 哲也\n栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "sab514202",
                    "Classroom": "－"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "sab144102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "津村 耕司\n浅野 恵美\n金子 核\n田中 美枝子\n中島 啓光\n綿引 隆文\n平山 博之",
                    "ClassCode": "sab144102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "Grammar(2b)",
                    "Teacher": "沢村 静",
                    "ClassCode": "sab004218",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "外国語特別講義(2b)",
                    "Teacher": "末田 美香子",
                    "ClassCode": "sab004223",
                    "Classroom": "13K"
                },
                {
                    "Subject": "外国語特別講義(1b)",
                    "Teacher": "秋山 義典",
                    "ClassCode": "sbb004232",
                    "Classroom": "11E"
                },
                {
                    "Subject": "生物学",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "生物学(1)",
                    "Teacher": "宮崎 正峰",
                    "ClassCode": "sab001235",
                    "Classroom": "31B"
                },
                {
                    "Subject": "ソフトウェア工学概論",
                    "Teacher": "安井 浩之",
                    "ClassCode": "sab001243",
                    "Classroom": "12L"
                }
            ],
            [
                {
                    "Subject": "再・国際関係論(1)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saz001325",
                    "Classroom": "61C"
                },
                {
                    "Subject": "科学コミュニケーション論ゼミナール",
                    "Teacher": "五十嵐 美樹",
                    "ClassCode": "saz005222",
                    "Classroom": "保健・調理実習室"
                },
                {
                    "Subject": "応用体育(1)",
                    "Teacher": "栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "saz001120",
                    "Classroom": "－"
                },
                {
                    "Subject": "応用体育(2)",
                    "Teacher": "栗原 祐二\n重藤 誠市郎",
                    "ClassCode": "saz001121",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・代数学(1)",
                    "Teacher": "古田 公司",
                    "ClassCode": "saz174301",
                    "Classroom": "13P"
                },
                {
                    "Subject": "再・CommunicationStrategies(2)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saz004319",
                    "Classroom": "12A"
                },
                {
                    "Subject": "再・CriticalListening(1)",
                    "Teacher": "田中 美和",
                    "ClassCode": "saz004301",
                    "Classroom": "12G"
                },
                {
                    "Subject": "再・Critical Reading(2)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "saz004307",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・Critical Reading(3)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "saz004313",
                    "Classroom": "12F"
                },
                {
                    "Subject": "再・Grammar(2)",
                    "Teacher": "沢村 静",
                    "ClassCode": "saz004325",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "再・Literature inEnglish(2)",
                    "Teacher": "水戸 俊介",
                    "ClassCode": "saz004331",
                    "Classroom": "12E"
                },
                {
                    "Subject": "再・日本語表現",
                    "Teacher": "村田 朋美",
                    "ClassCode": "saz004341",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "代数学",
                    "Teacher": "古田 公司",
                    "ClassCode": "saz174301",
                    "Classroom": "13P"
                },
                {
                    "Subject": "国際関係論(1a)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "saa001323",
                    "Classroom": "61C"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "saa001310",
                    "Classroom": "32A"
                },
                {
                    "Subject": "CommunicationStrategies(2a)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saa004320",
                    "Classroom": "12A"
                },
                {
                    "Subject": "Critical Listening(1a)",
                    "Teacher": "田中 美和",
                    "ClassCode": "saa004302",
                    "Classroom": "12G"
                },
                {
                    "Subject": "Critical Reading(2a)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "saa004308",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Critical Reading(3a)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "saa004314",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Grammar(2a)",
                    "Teacher": "沢村 静",
                    "ClassCode": "saa004326",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "Literature inEnglish(2a)",
                    "Teacher": "水戸 俊介",
                    "ClassCode": "saa004332",
                    "Classroom": "12E"
                },
                {
                    "Subject": "外国語特別講義(2a)",
                    "Teacher": "末田 美香子",
                    "ClassCode": "saa004337",
                    "Classroom": "13K"
                },
                {
                    "Subject": "日本語表現(a)",
                    "Teacher": "村田 朋美",
                    "ClassCode": "saa004342",
                    "Classroom": "1BE"
                },
                {
                    "Subject": "国際関係論(1b)",
                    "Teacher": "伊藤 隆太",
                    "ClassCode": "sab001324",
                    "Classroom": "61C"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001320",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "倫理学(1)",
                    "Teacher": "山本 史華",
                    "ClassCode": "sab001311",
                    "Classroom": "32A"
                },
                {
                    "Subject": "CommunicationStrategies(2b)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "sab004321",
                    "Classroom": "12A"
                },
                {
                    "Subject": "Critical Listening(1b)",
                    "Teacher": "田中 美和",
                    "ClassCode": "sab004303",
                    "Classroom": "12G"
                },
                {
                    "Subject": "Critical Reading(2b)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "sab004309",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Critical Reading(3b)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "sab004315",
                    "Classroom": "12F"
                },
                {
                    "Subject": "Grammar(2b)",
                    "Teacher": "沢村 静",
                    "ClassCode": "sab004327",
                    "Classroom": "1BK"
                },
                {
                    "Subject": "Literature inEnglish(2b)",
                    "Teacher": "水戸 俊介",
                    "ClassCode": "sab004333",
                    "Classroom": "12E"
                },
                {
                    "Subject": "外国語特別講義(2b)",
                    "Teacher": "末田 美香子",
                    "ClassCode": "sab004338",
                    "Classroom": "13K"
                },
                {
                    "Subject": "日本語表現(b)",
                    "Teacher": "村田 朋美",
                    "ClassCode": "sab004343",
                    "Classroom": "1BE"
                }
            ],
            [
                {
                    "Subject": "再・Academic English(3)",
                    "Teacher": "岡野 恵",
                    "ClassCode": "saz004403",
                    "Classroom": "73C"
                },
                {
                    "Subject": "再・CommunicationStrategies(2)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saz004421",
                    "Classroom": "12A"
                },
                {
                    "Subject": "再・Critical Reading(2)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "saz004409",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・Grammar(1)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saz004427",
                    "Classroom": "12J"
                },
                {
                    "Subject": "再・Test TakingSkills(2)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "saz004415",
                    "Classroom": "12F"
                },
                {
                    "Subject": "法学",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "saa002407",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Academic English(3a)",
                    "Teacher": "岡野 恵",
                    "ClassCode": "saa004404",
                    "Classroom": "73C"
                },
                {
                    "Subject": "CommunicationStrategies(2a)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "saa004422",
                    "Classroom": "12A"
                },
                {
                    "Subject": "Critical Reading(2a)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "saa004410",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Grammar(1a)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saa004428",
                    "Classroom": "12J"
                },
                {
                    "Subject": "Test Taking Skills(2a)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "saa004416",
                    "Classroom": "12F"
                },
                {
                    "Subject": "哲学(1)",
                    "Teacher": "大野 晃徳",
                    "ClassCode": "sab001407",
                    "Classroom": "1BM"
                },
                {
                    "Subject": "日本国憲法",
                    "Teacher": "大沼 友紀恵",
                    "ClassCode": "sab002408",
                    "Classroom": "13L"
                },
                {
                    "Subject": "Academic English(3b)",
                    "Teacher": "岡野 恵",
                    "ClassCode": "sab004405",
                    "Classroom": "73C"
                },
                {
                    "Subject": "CommunicationStrategies(2b)",
                    "Teacher": "高橋 比路史",
                    "ClassCode": "sab004423",
                    "Classroom": "12A"
                },
                {
                    "Subject": "Critical Reading(2b)",
                    "Teacher": "伊藤 千里",
                    "ClassCode": "sab004411",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Grammar(1b)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "sab004429",
                    "Classroom": "12J"
                },
                {
                    "Subject": "Test Taking Skills(2b)",
                    "Teacher": "浜崎 絵梨",
                    "ClassCode": "sab004417",
                    "Classroom": "12F"
                }
            ],
            [
                {
                    "Subject": "教育原論",
                    "Teacher": "井上 健",
                    "ClassCode": "saz007622",
                    "Classroom": "13J"
                },
                {
                    "Subject": "再・Reading andWriting(1)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saz004508",
                    "Classroom": "12J"
                },
                {
                    "Subject": "ウェルビーイング社会構築ゼミナール",
                    "Teacher": "岩尾 徹\n鈴木 憲吏",
                    "ClassCode": "saz004516",
                    "Classroom": "13N"
                },
                {
                    "Subject": "教育方法学(ICT活用を含む)",
                    "Teacher": "渡邉 大輔",
                    "ClassCode": "saz007618",
                    "Classroom": "12H"
                },
                {
                    "Subject": "工業教育法(1)",
                    "Teacher": "殿村 洋文",
                    "ClassCode": "saz007619",
                    "Classroom": "13L"
                },
                {
                    "Subject": "情報教育法(1)",
                    "Teacher": "安井 浩之",
                    "ClassCode": "saz004503",
                    "Classroom": "12L"
                },
                {
                    "Subject": "環境と機械ゼミナール",
                    "Teacher": "丸山 恵史\n小玉 脩平",
                    "ClassCode": "saz114501",
                    "Classroom": "22A"
                },
                {
                    "Subject": "デジタル情報リテラシーゼミナール",
                    "Teacher": "瀬戸 久美子",
                    "ClassCode": "saz137629",
                    "Classroom": "13Q"
                },
                {
                    "Subject": "最適解ビジネスモデル論ゼミナール",
                    "Teacher": "岸 和幸",
                    "ClassCode": "saz137628",
                    "Classroom": "13P"
                },
                {
                    "Subject": "再・Reading andWriting(1a)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "saa004509",
                    "Classroom": "12J"
                },
                {
                    "Subject": "再・Reading andWriting(1b)",
                    "Teacher": "佐竹 幸信",
                    "ClassCode": "sab004510",
                    "Classroom": "12J"
                }
            ]
        ],
        [
            [
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saz275103",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "応用体育(1)",
                    "Teacher": "山田 盛朗\n栗原 祐二",
                    "ClassCode": "saz005101",
                    "Classroom": "－"
                },
                {
                    "Subject": "応用体育(2)",
                    "Teacher": "山田 盛朗\n栗原 祐二",
                    "ClassCode": "saz005102",
                    "Classroom": "－"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saa275101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saa275101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "再・化学(3)",
                    "Teacher": "吉田 真史",
                    "ClassCode": "saa172110",
                    "Classroom": "61B"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "sab275102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "sab275102",
                    "Classroom": "物理学実験室(62H)"
                }
            ],
            [
                {
                    "Subject": "再・社会学(1)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saz005215",
                    "Classroom": "13P"
                },
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "山田 盛朗\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saz135203",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "山田 盛朗\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saz135203",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・物理学実験",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saz275103",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "再・日本の政治",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saz005209",
                    "Classroom": "11B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "視覚芸術史(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "saa002201",
                    "Classroom": "71B"
                },
                {
                    "Subject": "社会学(1a)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saa005213",
                    "Classroom": "13P"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "山田 盛朗\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saa135201",
                    "Classroom": "－"
                },
                {
                    "Subject": "物理学実験(a)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saa275101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(1)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "saa275101",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "地学",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "小田島 庸浩",
                    "ClassCode": "saa002314",
                    "Classroom": "31B"
                },
                {
                    "Subject": "日本の政治(a)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saa005207",
                    "Classroom": "11B"
                },
                {
                    "Subject": "スポーツ･健康論",
                    "Teacher": "椿原 徹也",
                    "ClassCode": "sab007604",
                    "Classroom": "1BJ"
                },
                {
                    "Subject": "視覚芸術史(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "saa002301",
                    "Classroom": "71B"
                },
                {
                    "Subject": "社会学(1b)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "sab005214",
                    "Classroom": "13P"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "山田 盛朗\n江口 淳一\n栗原 祐二",
                    "ClassCode": "sab135202",
                    "Classroom": "－"
                },
                {
                    "Subject": "物理学実験(b)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "sab275102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "物理学実験(2)",
                    "Teacher": "中村 正人\n岡 笑美\n栗栖 牧生\n木浪 信之\n佐々田 博之\n西川 浩之\n深井 佳乃\n平山 博之",
                    "ClassCode": "sab275102",
                    "Classroom": "物理学実験室(62H)"
                },
                {
                    "Subject": "地学",
                    "Teacher": "清家 一馬",
                    "ClassCode": "sab002207",
                    "Classroom": "31B"
                },
                {
                    "Subject": "地学(1)",
                    "Teacher": "清家 一馬",
                    "ClassCode": "sab002207",
                    "Classroom": "31B"
                },
                {
                    "Subject": "日本の政治(b)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab005208",
                    "Classroom": "11B"
                }
            ],
            [
                {
                    "Subject": "再・社会学(1)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saz005303",
                    "Classroom": "13P"
                },
                {
                    "Subject": "再・基礎体育(1)",
                    "Teacher": "椿原 徹也\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saz325306",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・健康と運動(1)",
                    "Teacher": "椿原 徹也\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saz325306",
                    "Classroom": "－"
                },
                {
                    "Subject": "再・Academic English(2)",
                    "Teacher": "倉持 和歌子",
                    "ClassCode": "saz005307",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・Global Society(1)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "saz005313",
                    "Classroom": "12D"
                },
                {
                    "Subject": "再・イタリア語(1)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "saz005331",
                    "Classroom": "73C"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "saz005325",
                    "Classroom": "12F"
                },
                {
                    "Subject": "社会学(1a)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saa005301",
                    "Classroom": "13P"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "saa002309",
                    "Classroom": "11E"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "saa002305",
                    "Classroom": "11F"
                },
                {
                    "Subject": "基礎体育(1a)",
                    "Teacher": "椿原 徹也\n江口 淳一\n栗原 祐二",
                    "ClassCode": "saa325304",
                    "Classroom": "－"
                },
                {
                    "Subject": "Academic English(2a)",
                    "Teacher": "倉持 和歌子",
                    "ClassCode": "saa005308",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Global Society(1a)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "saa005314",
                    "Classroom": "12D"
                },
                {
                    "Subject": "イタリア語(1a)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "saa005332",
                    "Classroom": "73C"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "saa005326",
                    "Classroom": "12F"
                },
                {
                    "Subject": "デザイン概論(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "sab002302",
                    "Classroom": "12N"
                },
                {
                    "Subject": "社会学(1b)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "sab005302",
                    "Classroom": "13P"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "sab002310",
                    "Classroom": "61B"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab002306",
                    "Classroom": "11F"
                },
                {
                    "Subject": "日本文化論",
                    "Teacher": "岡山 理香",
                    "ClassCode": "sab007602",
                    "Classroom": "12N"
                },
                {
                    "Subject": "基礎体育(1b)",
                    "Teacher": "椿原 徹也\n江口 淳一\n栗原 祐二",
                    "ClassCode": "sab325305",
                    "Classroom": "－"
                },
                {
                    "Subject": "Academic English(2b)",
                    "Teacher": "倉持 和歌子",
                    "ClassCode": "sab005309",
                    "Classroom": "12C"
                },
                {
                    "Subject": "Global Society(1b)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "sab005315",
                    "Classroom": "12D"
                },
                {
                    "Subject": "イタリア語(1b)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "sab005333",
                    "Classroom": "73C"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "sab005327",
                    "Classroom": "12F"
                }
            ],
            [
                {
                    "Subject": "再・社会学(1)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saz005403",
                    "Classroom": "13P"
                },
                {
                    "Subject": "再・Global Society(1)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "saz005417",
                    "Classroom": "12D"
                },
                {
                    "Subject": "再・Test TakingSkills(3)",
                    "Teacher": "畑 和樹",
                    "ClassCode": "saz005411",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・イタリア語(1)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "saz005435",
                    "Classroom": "73C"
                },
                {
                    "Subject": "再・ドイツ語(1)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "saz005429",
                    "Classroom": "12F"
                },
                {
                    "Subject": "社会学(1a)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "saa005401",
                    "Classroom": "13P"
                },
                {
                    "Subject": "西洋史(1)",
                    "Teacher": "新保 良明",
                    "ClassCode": "saa002403",
                    "Classroom": "11E"
                },
                {
                    "Subject": "Global Society(1a)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "saa005418",
                    "Classroom": "12D"
                },
                {
                    "Subject": "Test Taking Skills(3a)",
                    "Teacher": "畑 和樹",
                    "ClassCode": "saa005412",
                    "Classroom": "12C"
                },
                {
                    "Subject": "イタリア語(1a)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "saa005436",
                    "Classroom": "73C"
                },
                {
                    "Subject": "ドイツ語(1a)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "saa005430",
                    "Classroom": "12F"
                },
                {
                    "Subject": "デザイン概論(1)",
                    "Teacher": "岡山 理香",
                    "ClassCode": "sab002302",
                    "Classroom": "12N"
                },
                {
                    "Subject": "社会学(1b)",
                    "Teacher": "岡村 逸郎",
                    "ClassCode": "sab005402",
                    "Classroom": "13P"
                },
                {
                    "Subject": "西洋経済史",
                    "Teacher": "新保 良明",
                    "ClassCode": "sab002404",
                    "Classroom": "61B"
                },
                {
                    "Subject": "日本史(1)",
                    "Teacher": "丸島 和洋",
                    "ClassCode": "sab002401",
                    "Classroom": "11F"
                },
                {
                    "Subject": "日本文化論",
                    "Teacher": "岡山 理香",
                    "ClassCode": "sab007602",
                    "Classroom": "12N"
                },
                {
                    "Subject": "Global Society(1b)",
                    "Teacher": "松本 弘法",
                    "ClassCode": "sab005419",
                    "Classroom": "12D"
                },
                {
                    "Subject": "Test Taking Skills(3b)",
                    "Teacher": "畑 和樹",
                    "ClassCode": "sab005413",
                    "Classroom": "12C"
                },
                {
                    "Subject": "イタリア語(1b)",
                    "Teacher": "清水 英夫",
                    "ClassCode": "sab005437",
                    "Classroom": "73C"
                },
                {
                    "Subject": "ドイツ語(1b)",
                    "Teacher": "山口 和洋",
                    "ClassCode": "sab005431",
                    "Classroom": "12F"
                }
            ],
            [
                {
                    "Subject": "再・Reading andWriting(1)",
                    "Teacher": "秋山 義典",
                    "ClassCode": "saz001516",
                    "Classroom": "12K"
                },
                {
                    "Subject": "数学教育法(1)",
                    "Teacher": "高橋 哲男",
                    "ClassCode": "saz007614",
                    "Classroom": "12D"
                },
                {
                    "Subject": "理科教育法(3)",
                    "Teacher": "鈴木 邦夫",
                    "ClassCode": "saz007613",
                    "Classroom": "12B"
                },
                {
                    "Subject": "再・プログラミング基礎",
                    "Teacher": "山口 勝己",
                    "ClassCode": "saz005509",
                    "Classroom": "12L"
                },
                {
                    "Subject": "再・Reading andWriting(1a)",
                    "Teacher": "秋山 義典",
                    "ClassCode": "saa001517",
                    "Classroom": "12K"
                },
                {
                    "Subject": "再・プログラミング基礎(a)",
                    "Teacher": "山口 勝己",
                    "ClassCode": "saa005507",
                    "Classroom": "12L"
                },
                {
                    "Subject": "再・Reading andWriting(1b)",
                    "Teacher": "秋山 義典",
                    "ClassCode": "sab001518",
                    "Classroom": "12K"
                },
                {
                    "Subject": "再・プログラミング基礎(b)",
                    "Teacher": "山口 勝己",
                    "ClassCode": "sab005508",
                    "Classroom": "12L"
                }
            ]
        ],
        [
            [
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006103",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006101",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006101",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006102",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006102",
                    "Classroom": "6号館学生実験室"
                }
            ],
            [
                {
                    "Subject": "生徒指導･進路指導の理論と方法",
                    "Teacher": "坂本 保宏",
                    "ClassCode": "saz006202",
                    "Classroom": "12C"
                },
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006103",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006103",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006101",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006101",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006102",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006102",
                    "Classroom": "6号館学生実験室"
                }
            ],
            [
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006303",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "教育社会学",
                    "Teacher": "井上 健",
                    "ClassCode": "saz007624",
                    "Classroom": "13J"
                },
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006303",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006301",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006301",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006302",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006302",
                    "Classroom": "6号館学生実験室"
                }
            ],
            [
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006303",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "再・生物学実験",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saz006303",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "教職総合ゼミナール",
                    "Teacher": "井上 健",
                    "ClassCode": "saz007617",
                    "Classroom": "13J"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006301",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(a)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "saa006301",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "生物学実験(b)",
                    "Teacher": "福田 達哉\n中島 保寿\n池田 佑美\n池島 宏子\n石井 義孝",
                    "ClassCode": "sab006302",
                    "Classroom": "6号館学生実験室"
                },
                {
                    "Subject": "再・CommunicationSkills(1)",
                    "Teacher": "大塩 真夕美",
                    "ClassCode": "saz002505",
                    "Classroom": "-"
                },
                {
                    "Subject": "再・Reading andWriting(1)",
                    "Teacher": "松野 達",
                    "ClassCode": "saz002507",
                    "Classroom": "-"
                },
                {
                    "Subject": "再・Reading andWriting(1a)",
                    "Teacher": "松野 達",
                    "ClassCode": "saa002508",
                    "Classroom": "-"
                },
                {
                    "Subject": "再・Reading andWriting(1b)",
                    "Teacher": "松野 達",
                    "ClassCode": "sab002509",
                    "Classroom": "-"
                },
                {
                    "Subject": "応用体育(1)",
                    "Teacher": "岩嶋 孝夫\n久保 哲也\n椿原 徹也\n山田 盛朗",
                    "ClassCode": "saz007609",
                    "Classroom": "-"
                },
                {
                    "Subject": "応用体育(2)",
                    "Teacher": "岩嶋 孝夫\n久保 哲也\n椿原 徹也\n山田 盛朗",
                    "ClassCode": "saz007610",
                    "Classroom": "-"
                },
                {
                    "Subject": "Test Taking Skills(2a)",
                    "Teacher": "秋山 義典\n日高 正司\n植野 貴志子\n三幣 友行\n稲垣 亜希子\n杉本 裕代",
                    "ClassCode": "saz007664",
                    "Classroom": "-"
                },
                {
                    "Subject": "Test Taking Skills(2b)",
                    "Teacher": "秋山 義典\n日高 正司\n植野 貴志子\n三幣 友行\n稲垣 亜希子\n杉本 裕代",
                    "ClassCode": "saz007665",
                    "Classroom": "-"
                },
                {
                    "Subject": "再・Test TakingSkills(2)",
                    "Teacher": "秋山 義典\n日高 正司\n植野 貴志子\n三幣 友行\n稲垣 亜希子\n杉本 裕代",
                    "ClassCode": "saz007663",
                    "Classroom": "-"
                },
                {
                    "Subject": "外国語特別講義(1a)",
                    "Teacher": "瀬戸 久美子",
                    "ClassCode": "saz007659",
                    "Classroom": "-"
                },
                {
                    "Subject": "外国語特別講義(1b)",
                    "Teacher": "瀬戸 久美子",
                    "ClassCode": "saz007660",
                    "Classroom": "-"
                },
                {
                    "Subject": "教育実習(1)",
                    "Teacher": "井上 健\n高橋 哲男\n渡邉 大輔\n殿村 洋文",
                    "ClassCode": "saz007639",
                    "Classroom": "-"
                },
                {
                    "Subject": "電気電子通信計測応用",
                    "Teacher": "岩尾 徹",
                    "ClassCode": "saa132507",
                    "Classroom": ""
                },
                {
                    "Subject": "教育実習(2)",
                    "Teacher": "井上 健\n高橋 哲男\n渡邉 大輔\n殿村 洋文",
                    "ClassCode": "saz007616",
                    "Classroom": "-"
                }
            ]
        ]
    ]
}

fetchData();
