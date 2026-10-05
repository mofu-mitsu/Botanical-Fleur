export interface SubFlower {
  name: string;
  reading?: string;
  meanings?: string[];
  note?: string;
}

export interface FlowerData {
  id: string;
  name: string;
  reading?: string;
  scientificName?: string;
  month: number;
  day: number;
  meanings: string[];
  description: string;
  category: string;
  svgType: string;
  flowerColor: string;
  secondaryColor?: string;
  bgGradient?: string;
  anniversaryNote?: string;
  triviaList?: string[];
  subFlowers?: SubFlower[];
  isGachaSpecial?: boolean;
  rarity?: 'Normal' | 'Rare' | 'Super Rare' | 'UR' | string;
}

export const SPECIAL_FLOWERS: Record<string, FlowerData> = {
  "12-17": {
      "id": "12-17",
      "name": "ローゼル（ハイビスカス・ローゼル）",
      "reading": "ろーぜる",
      "scientificName": "Hibiscus sabdariffa",
      "month": 12,
      "day": 17,
      "meanings": [
          "常に愛らしい",
          "新しい恋",
          "繊細な美"
      ],
      "description": "ルビーのように輝く肉厚の真紅の萼（がく）を持つハーブ。ハイビスカスティーの原料として古くからクレオパトラにも愛されました。",
      "category": "ハーブ・低木",
      "svgType": "roselle",
      "flowerColor": "#be123c",
      "secondaryColor": "#f43f5e",
      "bgGradient": "from-rose-600/15 via-red-400/10 to-amber-300/10"
  },
  "11-13": {
      "id": "11-13",
      "name": "ナナミノキ（七実の木）",
      "reading": "ななみのき",
      "scientificName": "Ilex chinensis",
      "month": 11,
      "day": 13,
      "meanings": [
          "名誉",
          "栄光",
          "祝福",
          "大望"
      ],
      "description": "冬に光沢のある深紅の美しい果実を枝いっぱいにたわわに実らせるモチノキ科の常緑高木。勝利と実りの象徴です。",
      "category": "花木・常緑高木",
      "svgType": "holly",
      "flowerColor": "#dc2626",
      "secondaryColor": "#15803d",
      "bgGradient": "from-red-600/15 via-rose-400/10 to-emerald-500/10"
  },
  "11-10": {
      "id": "11-10",
      "name": "ガマ（蒲・因幡の白兎）",
      "reading": "がま",
      "scientificName": "Typha latifolia",
      "month": 11,
      "day": 10,
      "meanings": [
          "救護",
          "慈愛",
          "従順",
          "予言"
      ],
      "description": "水辺にフランクフルトのような茶色の穂をつける湿地植物。『古事記』で大国主命が傷ついた白兎を包んで救った神話で有名です。",
      "category": "水生植物",
      "svgType": "cattail",
      "flowerColor": "#78350f",
      "secondaryColor": "#15803d",
      "bgGradient": "from-amber-600/15 via-emerald-400/10 to-teal-500/10"
  },
  "11-9": {
      "id": "11-9",
      "name": "ムラサキシキブ（紫式部）",
      "reading": "むらさきしきぶ",
      "scientificName": "Callicarpa japonica",
      "month": 11,
      "day": 9,
      "meanings": [
          "聡明",
          "気品",
          "上品",
          "愛され上手"
      ],
      "description": "秋の深まりとともに宝石のように艶やかな紫色の小粒な果実を鈴なりにつける、平安の雅を感じさせる名木です。",
      "category": "花木",
      "svgType": "callicarpa",
      "flowerColor": "#7c3aed",
      "secondaryColor": "#c4b5fd",
      "bgGradient": "from-purple-600/15 via-indigo-400/10 to-violet-500/10"
  },
  "11-7": {
      "id": "11-7",
      "name": "ユーカリ",
      "reading": "ゆーかり",
      "scientificName": "Eucalyptus",
      "month": 11,
      "day": 7,
      "meanings": [
          "新生",
          "再生",
          "思い出",
          "慰め"
      ],
      "description": "山火事の後に真っ先に芽吹く驚異の生命力を持つ銀緑色の常緑樹。爽快な芳香は心をリフレッシュさせてくれます。",
      "category": "花木・常緑高木",
      "svgType": "eucalyptus",
      "flowerColor": "#6ee7b7",
      "secondaryColor": "#059669",
      "bgGradient": "from-teal-500/15 via-emerald-400/10 to-blue-400/10"
  },
  "11-6": {
      "id": "11-6",
      "name": "シノブ（信夫・トキワシノブ）",
      "reading": "しのぶ",
      "scientificName": "Davallia mariesii",
      "month": 11,
      "day": 6,
      "meanings": [
          "愛嬌",
          "誠実",
          "忍耐",
          "魅惑"
      ],
      "description": "銀白色の毛に覆われた根茎が猫の手のように愛らしいシダ植物。夏の風鈴の「釣りしのぶ」としても江戸時代から親しまれています。",
      "category": "シダ植物・観葉植物",
      "svgType": "fern",
      "flowerColor": "#15803d",
      "secondaryColor": "#cbd5e1",
      "bgGradient": "from-emerald-600/15 via-teal-400/10 to-cyan-500/10"
  },
  "10-20": {
      "id": "10-20",
      "name": "アサ（麻・ヘンプ）",
      "reading": "あさ",
      "scientificName": "Cannabis sativa",
      "month": 10,
      "day": 20,
      "meanings": [
          "運命",
          "感謝",
          "健やか",
          "結果"
      ],
      "description": "日本の伝統的な神事や繊維文化を数千年にわたり支えてきた神聖な植物。ぐんぐん真っ直ぐに育つ生命力の象徴です。",
      "category": "伝統繊維作物",
      "svgType": "hemp",
      "flowerColor": "#15803d",
      "secondaryColor": "#86efac",
      "bgGradient": "from-emerald-600/15 via-green-400/10 to-teal-500/10"
  },
    "9-14": {
    "id": "9-14",
    "name": "フシグロセンノウ（節黒仙翁）",
    "reading": "ふしぐろせんのう",
    "scientificName": "Lychnis miqueliana",
    "month": 9,
    "day": 14,
    "meanings": ["転機", "誠実", "機転", "豊かな才能"],
    "description": "茎の節が黒紫色に染まることから名付けられた、山野の木陰に鮮やかな朱赤色の花を咲かせるナデシコ科の日本固有植物です。茶花としても古くから愛好されてきました。",
    "category": "山野草・多年草",
    "svgType": "lychnis_miqueliana",
    "flowerColor": "#ea580c",
    "secondaryColor": "#f97316",
    "bgGradient": "from-orange-500/15 via-red-400/10 to-amber-300/10",
    "subFlowers": [
      {
        "name": "リコリス（彼岸花・曼珠沙華）",
        "meanings": ["情熱", "独立", "再会", "想うはあなた一人"],
        "note": "秋分の頃に真紅の大輪を開く"
      }
    ],
    "triviaList": [
      "京都の仙翁寺で愛育されたことから「仙翁」の名がつき、節が黒い特徴からフシグロセンノウと呼ばれます。"
    ]
  },
  "9-2": {
      "id": "9-2",
      "name": "ヒルザキツキミソウ（昼咲月見草）",
      "reading": "ひるざきつきみそう",
      "scientificName": "Oenothera speciosa",
      "month": 9,
      "day": 2,
      "meanings": [
          "自由な心",
          "無言の愛",
          "清純"
      ],
      "description": "夜ではなく昼間に可憐な淡いピンク色の花をパッと開く月見草。風に揺れる姿は清々しく爽やかです。",
      "category": "野草",
      "svgType": "wildflower",
      "flowerColor": "#fbcfe8",
      "secondaryColor": "#fef08a",
      "bgGradient": "from-pink-300/15 via-rose-200/10 to-teal-400/10"
  },
  "7-23": {
      "id": "7-23",
      "name": "ブーゲンビリア",
      "reading": "ぶーげんびりあ",
      "scientificName": "Bougainvillea",
      "month": 7,
      "day": 23,
      "meanings": [
          "情熱",
          "あなたしか見えない",
          "魅力"
      ],
      "description": "太陽の光を浴びて鮮やかなマゼンタピンクの紙のような苞を咲き乱れさせる、南国の生命力あふれるつる性花木です。",
      "category": "熱帯花木",
      "svgType": "bougainvillea",
      "flowerColor": "#db2777",
      "secondaryColor": "#ffffff",
      "bgGradient": "from-pink-500/15 via-rose-400/10 to-orange-400/10"
  },
  "6-3": {
      "id": "6-3",
      "name": "ドクダミ（十薬）",
      "reading": "どくだみ",
      "scientificName": "Houttuynia cordata",
      "month": 6,
      "day": 3,
      "meanings": [
          "野生",
          "白い追憶",
          "自己犠牲"
      ],
      "description": "十字型に見える純白の美しい苞葉とハート形の葉を持つ日本の名薬草。「十の薬効がある」として十薬とも呼ばれます。",
      "category": "野草・薬草",
      "svgType": "wildflower",
      "flowerColor": "#ffffff",
      "secondaryColor": "#facc15",
      "bgGradient": "from-emerald-500/15 via-teal-300/10 to-green-500/10"
  },
  "6-2": {
      "id": "6-2",
      "name": "マツヨイグサ（待宵草）",
      "reading": "まつよいぐさ",
      "scientificName": "Oenothera stricta",
      "month": 6,
      "day": 2,
      "meanings": [
          "物言わぬ恋",
          "浴後の美人",
          "移り気"
      ],
      "description": "夕暮れ時にそっと黄色い花を開き、朝には萎んで淡い紅色に染まる幻想的でロマンチックな月見草の仲間です。",
      "category": "野草",
      "svgType": "wildflower",
      "flowerColor": "#facc15",
      "secondaryColor": "#fef08a",
      "bgGradient": "from-yellow-400/15 via-amber-200/10 to-indigo-400/10"
  },
  "6-1": {
      "id": "6-1",
      "name": "びっくりグミ（大王茱萸・ダイオウグミ）",
      "reading": "びっくりぐみ",
      "scientificName": "Elaeagnus multiflora var. hortensis",
      "month": 6,
      "day": 1,
      "meanings": [
          "心の純潔",
          "野生美",
          "大望"
      ],
      "description": "普通のグミの倍以上もある大きな赤い実をつけることから「びっくり」と名付けられた、初夏の甘酸っぱい果樹です。",
      "category": "果樹",
      "svgType": "fruit",
      "flowerColor": "#dc2626",
      "secondaryColor": "#ef4444",
      "bgGradient": "from-red-500/15 via-amber-300/10 to-emerald-400/10"
  },
  "5-22": {
      "id": "5-22",
      "name": "アスチルベ（泡盛草）",
      "reading": "あすちるべ",
      "scientificName": "Astilbe",
      "month": 5,
      "day": 22,
      "meanings": [
          "恋の訪れ",
          "自由",
          "気まま",
          "熱心な気持ち"
      ],
      "description": "ふんわりと立ち上がる円錐花序が泡立つ波のように幻想的で美しい宿根草。シェードガーデンの女王です。",
      "category": "宿根草",
      "svgType": "wildflower",
      "flowerColor": "#f472b6",
      "secondaryColor": "#fda4af",
      "bgGradient": "from-pink-400/15 via-rose-300/10 to-purple-400/10"
  },
  "5-16": {
      "id": "5-16",
      "name": "ヤマブキ（山吹）",
      "reading": "やまぶき",
      "scientificName": "Kerria japonica",
      "month": 5,
      "day": 16,
      "meanings": [
          "気品",
          "崇高",
          "金運",
          "待ち焦がれる"
      ],
      "description": "「山吹色」の語源となった黄金色の鮮やかな五弁花。しなやかに垂れ下がる枝一面に咲き誇ります。",
      "category": "花木",
      "svgType": "wildflower",
      "flowerColor": "#eab308",
      "secondaryColor": "#facc15",
      "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-400/10"
  },
  "5-10": {
      "id": "5-10",
      "name": "アカンサス（葉アザミ）",
      "reading": "あかんさす",
      "scientificName": "Acanthus mollis",
      "month": 5,
      "day": 10,
      "meanings": [
          "芸術",
          "技巧",
          "不死",
          "離れない結びつき"
      ],
      "description": "古代ギリシャ建築のコリント式円柱の彫刻モチーフとして有名な堂々たる植物。夏にダイナミックな花穂を立ち上げます。",
      "category": "宿根草",
      "svgType": "wildflower",
      "flowerColor": "#9333ea",
      "secondaryColor": "#e2e8f0",
      "bgGradient": "from-purple-500/15 via-teal-400/10 to-emerald-500/10"
  },
  "4-28": {
      "id": "4-28",
      "name": "ヒメハギ（姫萩）",
      "reading": "ひめはぎ",
      "scientificName": "Polygala japonica",
      "month": 4,
      "day": 28,
      "meanings": [
          "隠者",
          "信じる心",
          "控えめな美徳"
      ],
      "description": "日当たりのよい野山に咲く、萩に似た紫紅色の小さな可憐な花。漢方では生薬「遠志」として重用されます。",
      "category": "野草・薬草",
      "svgType": "wildflower",
      "flowerColor": "#c084fc",
      "secondaryColor": "#f472b6",
      "bgGradient": "from-purple-500/15 via-indigo-300/10 to-pink-400/10"
  },
  "4-23": {
      "id": "4-23",
      "name": "ウド（独活）",
      "reading": "うど",
      "scientificName": "Aralia cordata",
      "month": 4,
      "day": 23,
      "meanings": [
          "忘れてはいけない思い",
          "柔軟",
          "清らかな愛"
      ],
      "description": "春の山菜として名高いウコギ科の多年草。夏には線香花火のような球状の繊細な白花を咲かせます。",
      "category": "山菜・薬用植物",
      "svgType": "wildflower",
      "flowerColor": "#f8fafc",
      "secondaryColor": "#86efac",
      "bgGradient": "from-emerald-500/15 via-lime-300/10 to-teal-500/10",
      "subFlowers": [
          {
              "name": "えんどう豆（エンドウ）",
              "meanings": [
                  "いつまでも続く楽しみ",
                  "永遠の悲しみ",
                  "必ずくる幸福"
              ],
              "note": "春を告げる甘い豆"
          }
      ],
      "triviaList": [
          "「ウドの大木」という慣用句がありますが、実は木ではなく巨大な多年草です。"
      ]
  },
  "4-20": {
      "id": "4-20",
      "name": "ナシ（梨の花と実）",
      "reading": "なし",
      "scientificName": "Pyrus pyrifolia",
      "month": 4,
      "day": 20,
      "meanings": [
          "愛情",
          "博愛",
          "慰め",
          "和やかな愛情"
      ],
      "description": "春に純白の清らかな花を一斉に咲かせ、秋に瑞々しく甘い果実を実らせる日本の伝統的な果樹です。",
      "category": "果樹",
      "svgType": "fruit",
      "flowerColor": "#ffffff",
      "secondaryColor": "#fef08a",
      "bgGradient": "from-amber-400/15 via-yellow-200/10 to-teal-500/10",
      "subFlowers": [
          {
              "name": "ストロベリーキャンドル（クリムソンクローバー）",
              "meanings": [
                  "素朴な愛らしさ",
                  "胸に灯る光",
                  "人知れぬ愛"
              ],
              "note": "イチゴのような真紅の花穂"
          }
      ],
      "triviaList": [
          "梨の白花は和歌や古典でも春の季語として愛されてきました。"
      ]
  },
  "3-31": {
      "id": "3-31",
      "name": "ムルチコーレ（黄花小菊）",
      "reading": "むるちこーれ",
      "scientificName": "Coleostephus multicaulis",
      "month": 3,
      "day": 31,
      "meanings": [
          "明るい笑顔",
          "誠実",
          "元気"
      ],
      "description": "春の訪れとともに鮮やかな黄金色の小花を無数に咲かせるキク科の植物。見る人に太陽のような明るい笑顔を届けます。",
      "category": "春の花",
      "svgType": "marguerite",
      "flowerColor": "#facc15",
      "secondaryColor": "#eab308",
      "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-400/10",
      "triviaList": [
          "「ムルチコーレ」はラテン語で「多くの茎を持つ」という意味です。"
      ]
  },
  "3-25": {
      "id": "3-25",
      "name": "ジャケツイバラ（蛇結茨）",
      "reading": "じゃけついばら",
      "scientificName": "Biancaea decapetala",
      "month": 3,
      "day": 25,
      "meanings": [
          "賢者",
          "情熱",
          "神秘"
      ],
      "description": "鋭い棘のあるつるが蛇のように絡み合い、春に黄金色の鮮烈な花房を立ち上げるマメ科の力強い植物です。",
      "category": "つる性木本",
      "svgType": "wildflower",
      "flowerColor": "#eab308",
      "secondaryColor": "#facc15",
      "bgGradient": "from-amber-500/15 via-yellow-400/10 to-emerald-500/10",
      "triviaList": [
          "枝が蛇が絡み合ったように見えることから名付けられました。"
      ]
  },
  "12-14": {
  "id": "12-14",
  "name": "フユザクラ（冬桜）",
  "reading": "ふゆざくら",
  "scientificName": "Cerasus × parvifolia",
  "month": 12,
  "day": 14,
  "meanings": [
    "二度めぐる",
    "冷静",
    "精神の美"
  ],
  "description": "春だけでなく、晩秋から真冬の澄んだ寒空の下でも可憐な一重の白花を咲かせる二季咲きの桜。厳しい冬を越えて再び春に咲く性質から、「二度めぐる」という人生の再生と絆を祝う奇跡の花言葉を紡ぎます。",
  "category": "花木・二季咲き桜",
  "svgType": "cherry_blossom",
  "flowerColor": "#fdf2f8",
  "secondaryColor": "#fbcfe8",
  "bgGradient": "from-sky-300/15 via-pink-200/10 to-indigo-500/10",
  "triviaList": [
    "❄️「二度めぐる」――春と秋〜冬の年に2回咲くフユザクラの性質から紡がれた、最高の巡り合わせの花言葉！",
    "落葉した寒々しい冬の枝に、ぽつりぽつりと咲く純白や淡紅色の五弁花は、凛とした「冷静」と「精神の美」を宿します。",
    "群馬県の桜山公園（国指定名勝）の冬桜などが有名で、雪景色の中で咲く姿は息を呑むほどの幻想的な美しさです。"
  ],
  "rarity": "Super Rare"
},
  "8-9": {
  "id": "8-9",
  "name": "ユウスゲ（夕菅）",
  "reading": "ゆうすげ",
  "scientificName": "Hemerocallis citrina var. vespertina",
  "month": 8,
  "day": 9,
  "meanings": [
    "麗しき姿",
    "媚びない美しさ"
  ],
  "description": "夏の高原の夕暮れ時に、レモンイエローの清楚な花を静かに開き、翌朝にはひっそりと閉じる一夜花。「麗しき姿」「媚びない美しさ」という、誰にも媚びず夕涼みに咲く気高さを誇ります。",
  "category": "高原植物・多年草",
  "svgType": "lily",
  "flowerColor": "#fef08a",
  "secondaryColor": "#fef9c3",
  "bgGradient": "from-indigo-900/15 via-yellow-300/10 to-teal-400/10",
  "triviaList": [
    "夏の夕方4〜5時頃から開き始め、翌日の午前中には閉じてしまう儚い「一夜花」です。",
    "夕闇の中に浮かび上がる淡いレモン色の花は、柑橘系の上品で甘い芳香を放ち、「媚びない美しさ」そのもの！",
    "葉がスゲ（菅）に似ていて夕方に咲くことから「夕菅」。高原の夜風とともに咲くロマンチックな夏告げ花です。"
  ],
  "rarity": "Normal"
},
  "7-12": {
  "id": "7-12",
  "name": "アキレア（西洋鋸草）",
  "reading": "あきれあ",
  "scientificName": "Achillea millefolium",
  "month": 7,
  "day": 12,
  "meanings": [
    "真心をもって",
    "戦闘",
    "勇敢",
    "治療"
  ],
  "description": "ノコギリのような細かい切れ込み葉の上に、小花を密に傘状につけるハーブ。ギリシャ神話の英雄アキレウスが傷ついた兵士を癒した伝説から「真心をもって」「戦闘」「勇敢」「治療」の武勇と仁愛を併せ持ちます。",
  "category": "薬用ハーブ・多年草",
  "svgType": "wildflower",
  "flowerColor": "#f43f5e",
  "secondaryColor": "#fecdd3",
  "bgGradient": "from-rose-500/15 via-red-300/10 to-emerald-500/10",
  "triviaList": [
    "⚔️「戦闘」「勇敢」と「治療」「真心をもって」が同居する英雄ハーブ！ギリシャ神話のアキレウス（アキレス）が語源です。",
    "細かく切れ込んだ葉がノコギリに似ているため和名は「西洋鋸草（ノコギリソウ）」。別名「兵士の傷薬」とも呼ばれます。",
    "止血や抗炎症作用に優れ、古代から戦場で命を救う神聖な薬草として兵士たちの鎧に忍ばせられました。"
  ],
  "rarity": "Normal"
},
  "7-6": {
  "id": "7-6",
  "name": "ハマナス（浜茄子・浜梨）",
  "reading": "はまなす",
  "scientificName": "Rosa rugosa",
  "month": 7,
  "day": 6,
  "meanings": [
    "悲しくも美しい恋",
    "見張り",
    "照り映える美しさ"
  ],
  "description": "北国の海風吹き抜ける砂浜に、凛として紅紫色の芳香高き一重花を咲かせる野生のバラ。秋には真っ赤な実（ローズヒップ）を結び、「悲しくも美しい恋」というどこまでも情緒的な恋心を伝えます。",
  "category": "野生バラ・落葉低木",
  "svgType": "rose",
  "flowerColor": "#e11d48",
  "secondaryColor": "#ffe4e6",
  "bgGradient": "from-rose-600/15 via-pink-400/10 to-cyan-500/10",
  "triviaList": [
    "北海道の花（道花）としても名高く、厳しい海岸の砂浜で甘美な香りを放ち咲く「悲しくも美しい恋」のシンボル！",
    "名前に「ナス」とつきますがナス科ではなく野生のバラ。浜に生える梨のような実から「浜梨（ハマナシ）」が訛ったものです。",
    "秋に結ぶ真っ赤な実はビタミンCの爆弾（ローズヒップ）で、ジャムやお茶としても親しまれています。"
  ],
  "rarity": "Normal"
},
    "6-30": {
    "id": "6-30",
    "name": "セージ（薬用サルビア）",
    "reading": "せーじ",
    "scientificName": "Salvia officinalis",
    "month": 6,
    "day": 30,
    "meanings": [
      "知恵",
      "尊敬",
      "家族愛",
      "救済"
    ],
    "description": "ベルベットのようなシルバーグリーンの起毛葉と青紫色の美しい花穂を持つ万能薬草。「庭にセージを植えている家から病人は出ない」と古くから西洋で重宝されてきました。",
    "category": "ハーブ・多年草",
    "svgType": "sage",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#cbd5e1",
    "bgGradient": "from-purple-500/15 via-indigo-400/10 to-emerald-200/10",
    "subFlowers": [
      {
        "name": "ビヨウヤナギ（未央柳）",
        "meanings": ["気高さ", "多情", "薬用"],
        "note": "黄金色の長い雄しべが美しい花"
      }
    ],
    "triviaList": [
      "学名サルビア（Salvia）はラテン語の「salvare（救う・癒す）」に由来します。",
      "古代ローマ時代から神聖な儀式や治療薬として重用され、知恵と長寿の象徴とされています。",
      "肉料理の臭み消しやソーセージ（Sausage）の香りづけとしても欠かせない名香草です。"
    ]
  },
  "1-10": {
    "id": "1-10",
    "name": "フリージア",
    "reading": "ふりーじあ",
    "scientificName": "Freesia refracta",
    "month": 1,
    "day": 10,
    "meanings": [
      "親愛の情",
      "期待",
      "あどけなさ",
      "純潔"
    ],
    "description": "早春に甘くフルーティな芳香を漂わせる南アフリカ原産の球根花。明るく無垢な姿と透き通るような優美な香りは、新しい季節への期待感を胸いっぱいに膨らませてくれます。",
    "category": "花",
    "svgType": "freesia",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fde047",
    "bgGradient": "from-yellow-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "植物学者エクロンが親友の医師フリーゼ（Freese）の名を贈ったことから「親愛の情」という花言葉が生まれました。",
      "黄色や白色のフリージアはキンモクセイのような甘い香りが特に強く、香水の原料にも使われます。",
      "花言葉は色によっても異なり、白は「あどけなさ」、黄色は「期待」、紫は「憧れ」です。"
    ]
  },
  "1-12": {
    "id": "1-12",
    "name": "キンセンカ（金盞花）",
    "reading": "きんせんか",
    "scientificName": "Calendula officinalis",
    "month": 1,
    "day": 12,
    "meanings": [
      "乙女の美しい姿",
      "慈愛",
      "別れの悲しみ",
      "静かな想い"
    ],
    "description": "黄金色やオレンジ色の杯のような輝かしい花を咲かせるカレンデュラ。「金盞」とは黄金の杯を意味し、ヨーロッパではハーブティーや肌を守る万能ハーブとして愛されています。",
    "category": "花",
    "svgType": "marigold",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fbbf24",
    "bgGradient": "from-amber-500/15 via-orange-400/10 to-yellow-500/10",
    "triviaList": [
      "学名カレンデュラはラテン語の「カレンダー（朔日）」が語源。毎月咲くほど開花期間が長いことが由来です。",
      "黄色い色素成分ルテインが豊富で、古くからスープやチーズの着色料、家庭の民間常備薬として重宝されてきました。",
      "太陽の動きに合わせて花が開き、夕方に閉じる「太陽に従う花」としても知られています。"
    ]
  },
  "1-14": {
    "id": "1-14",
    "name": "シュウメイギク（秋明菊）",
    "reading": "しゅうめいぎく",
    "scientificName": "Anemone hupehensis",
    "month": 1,
    "day": 14,
    "meanings": [
      "淡い思い",
      "忍耐",
      "薄れゆく愛"
    ],
    "description": "キクの名を持ちながら実はアネモネの仲間（キンポウゲ科）。秋の澄んだ空にすっと伸びた茎の先に、凛とした風情ある花を咲かせ、京都の寺院や古庭園で愛されています。",
    "category": "花",
    "svgType": "anemone",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "名前に「菊」と付きますが、実はアネモネの仲間で花びらのように見える部分は「萼（がく）」です。",
      "中国原産で、古い時代に日本へ渡来し、京都の貴船神社周辺に多く自生したことから「貴船菊（キブネギク）」とも呼ばれます。",
      "風に揺れる細い茎と優美な花姿は、日本の茶花として千利休の時代から格別に重宝されてきました。"
    ]
  },
    "1-13": {
    "id": "1-13",
    "name": "ローズマリー（迷迭香）",
    "reading": "ろーずまりー",
    "scientificName": "Salvia rosmarinus",
    "month": 1,
    "day": 13,
    "meanings": [
      "記憶",
      "追憶",
      "静かな力強さ",
      "変わらぬ愛"
    ],
    "description": "地中海沿岸原産の芳香豊かな常緑低木。青紫色の可憐な小花を咲かせ、「海の雫（Ros marinus）」という優雅な学名を持ちます。古代から記憶力を高める神秘のハーブとして愛されてきました。",
    "category": "ハーブ・低木",
    "svgType": "rosemary",
    "flowerColor": "#6366f1",
    "secondaryColor": "#c7d2fe",
    "bgGradient": "from-indigo-500/15 via-blue-400/10 to-teal-500/10",
    "subFlowers": [
      {
        "name": "センリョウ（千両）",
        "meanings": ["富", "財産", "恵まれた才能", "利益"],
        "note": "冬を彩る縁起樹"
      }
    ],
    "triviaList": [
      "ラテン語の「Ros（雫）」と「Marinus（海）」が語源で、海風が吹き寄せる断崖に自生することに由来します。",
      "シェイクスピアの戯曲『ハムレット』でも「これはローズマリー、物思いを呼び覚ます花」と語られています。",
      "ハンガリー王妃エリザベートが愛用した若返りの水「ハンガリーウォーター」の主成分としても有名です。"
    ]
  },
  "1-15": {
    "id": "1-15",
    "name": "オンシジウム",
    "reading": "おんしじうむ",
    "scientificName": "Oncidium",
    "month": 1,
    "day": 15,
    "meanings": [
      "一緒に踊って",
      "可憐",
      "気立てのよさ"
    ],
    "description": "黄色い小さな花が枝一面に群れ咲く姿が、まるでドレスをひるがえして軽やかに踊る乙女たちに見えることから「ダンシング・レディ・オーキッド」と呼ばれる陽気な蘭です。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "英語圏では「Dancing Lady Orchid（踊る令嬢のラン）」と呼ばれ、舞踏会でワルツを踊る姿そのもの！",
      "中南米の熱帯雨林原産で、木々の枝に着生して育つため、とても風通しが良く日光が大好きです。",
      "チョコレートのような甘いバニラ香を放つ「シャリーベイビー」という人気品種もあります。"
    ]
  },
  "1-20": {
    "id": "1-20",
    "name": "デンドロビウム",
    "reading": "でんどろびうむ",
    "scientificName": "Dendrobium",
    "month": 1,
    "day": 20,
    "meanings": [
      "華やかな魅力",
      "わがままな美人",
      "思いやり"
    ],
    "description": "節のある茎にびっしりと豪華絢爛な花を連ねて咲かせる洋ラン。ギリシャ語で「樹木の上で生きる」という意味を持ち、野生味と圧倒的な美しさを兼ね備えています。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#d946ef",
    "secondaryColor": "#f0abfc",
    "bgGradient": "from-purple-500/15 via-pink-400/10 to-emerald-500/10",
    "triviaList": [
      "名前のギリシャ語「dendron（樹木）」＋「bios（生命）」は、高い木の幹に着生して暮らす生態が由来です。",
      "原種は1000種以上あり、熱帯のジャングルからヒマラヤの高地まで過酷な環境に適応した驚異の生命力を誇ります。",
      "冬でも室内の窓辺で長く咲き続けるため、冬のフラワーギフトとして世界中で親しまれています。"
    ]
  },
  "1-26": {
    "id": "1-26",
    "name": "イチョウ（銀杏）",
    "reading": "いちょう",
    "scientificName": "Ginkgo biloba",
    "month": 1,
    "day": 26,
    "meanings": [
      "荘厳",
      "長寿",
      "鎮魂"
    ],
    "description": "2億年以上前から姿を変えずに生き続ける「生きた化石」。秋には街路樹を黄金色に染め上げ、神社や寺院で千年以上もの命を繋ぐ神聖な巨木です。",
    "category": "樹木",
    "svgType": "ginkgo",
    "flowerColor": "#eab308",
    "secondaryColor": "#ca8a04",
    "bgGradient": "from-yellow-500/15 via-amber-400/10 to-emerald-500/10",
    "triviaList": [
      "恐竜がいた中生代ジュラ紀から地球上に存在し、世界でたった1属1種の「生きた化石」として植物学上奇跡の樹木です。",
      "扇形の葉には葉脈が二股に分かれ続ける原始的な特徴があり、火災を防ぐ防火樹としても都市を守ってきました。",
      "種子である「銀杏（ぎんなん）」は茶碗蒸しや秋の味覚として日本の食卓を彩ります。"
    ]
  },
  "1-29": {
    "id": "1-29",
    "name": "キンカン（金柑）",
    "reading": "きんかん",
    "scientificName": "Fortunella japonica",
    "month": 1,
    "day": 29,
    "meanings": [
      "思い出",
      "感謝"
    ],
    "description": "冬の寒さの中で黄金色の小さな果実をたわわに実らせる常緑低木。「金柑」の響きから「金冠（黄金の冠）」に通じ、富と繁栄を呼ぶおめでたい植物として大切にされています。",
    "category": "野菜・実",
    "svgType": "kumquat",
    "flowerColor": "#f97316",
    "secondaryColor": "#fb923c",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "柑橘類の中で唯一「皮ごと丸ごと」食べられる果実で、実は果肉よりも果皮に甘みとビタミンCが凝縮されています。",
      "のど飴や甘露煮として親しまれ、古くから風邪予防や健康維持の民間薬として愛されてきました。",
      "黄金色の実がたくさん付く姿は、家運隆盛と子孫繁栄の象徴として新年の庭木に大人気です。"
    ]
  },
  "2-4": {
    "id": "2-4",
    "name": "ボケ（木瓜）",
    "reading": "ぼけ",
    "scientificName": "Chaenomeles speciosa",
    "month": 2,
    "day": 4,
    "meanings": [
      "先駆者",
      "指導者",
      "妖精の輝き"
    ],
    "description": "立春のまだ寒冷な早春に、梅に似た深紅や淡紅色の艶やかな花をつける名木。春の訪れを誰よりも先駆けて告げる姿から「先駆者」という力強い花言葉を持ちます。",
    "category": "樹木",
    "svgType": "cherry_blossom",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-emerald-500/10",
    "anniversaryNote": "立春（春の始まり）",
    "triviaList": [
      "実がウリ（瓜）に似ており、木になる瓜であることから「木瓜（もけ）」が転じて「ボケ」になりました。",
      "枝には鋭いトゲがあり、外敵を防ぐ力強さがあることから武士の間でも親しまれました。",
      "果実はとても良い香りがし、ボケ酒やジャム、咳止めの民間薬として古くから用いられています。"
    ]
  },
  "2-12": {
    "id": "2-12",
    "name": "レンギョウ（連翹）",
    "reading": "れんぎょう",
    "scientificName": "Forsythia suspensa",
    "month": 2,
    "day": 12,
    "meanings": [
      "期待",
      "希望",
      "集中力"
    ],
    "description": "春の訪れとともに、葉が出るよりも先に枝いっぱいに黄金色の花を咲きこぼれさせる落葉低木。春の光を浴びて黄金のトンネルを作る希望に満ちた姿です。",
    "category": "樹木",
    "svgType": "mimosa",
    "flowerColor": "#eab308",
    "secondaryColor": "#fde047",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-teal-500/10",
    "triviaList": [
      "英名「Golden Bells（金の鐘）」と呼ばれ、下を向いて咲く小花がまるで金のベルのように見えます。",
      "漢方では果実を「連翹（れんぎょう）」と呼び、解毒や消炎作用のある重要な生薬として使われます。",
      "生命力が非常に旺盛で、枝が地面に触れるとそこから根を出して増えるほどの旺盛さを持っています。"
    ]
  },
  "2-16": {
    "id": "2-16",
    "name": "ラッパスイセン（喇叭水仙）",
    "reading": "らっぱすいせん",
    "scientificName": "Narcissus pseudonarcissus",
    "month": 2,
    "day": 16,
    "meanings": [
      "尊敬",
      "報われぬ恋",
      "心づかい"
    ],
    "description": "中心の副花冠がまるでラッパのように大きく突き出し、春の訪れのファンファーレを吹き鳴らすような水仙。ウェールズの国花でもあり、凛とした気高さを誇ります。",
    "category": "花",
    "svgType": "freesia",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "イギリスの詩人ワーズワースが愛し、「黄金の水仙（Daffodils）」として詠んだことで世界中に知られます。",
      "ラッパのように突き出た部分は植物学的には「副花冠（ふくかかん）」と呼ばれ、花粉を運ぶ昆虫を誘導します。",
      "ヨーロッパでは厳しい冬を越えて咲く「春の勝利」のシンボルとして愛されています。"
    ]
  },
  "2-18": {
    "id": "2-18",
    "name": "キンギョソウ（金魚草）",
    "reading": "きんぎょそう",
    "scientificName": "Antirrhinum majus",
    "month": 2,
    "day": 18,
    "meanings": [
      "おしゃべり",
      "でしゃばり",
      "清純な心"
    ],
    "description": "ふっくらとした花びらが口をパクパク動かす金魚にそっくりな愛らしい花。ヨーロッパでは口を開けたドラゴンの顔に見立て「スナップドラゴン」と呼ばれます。",
    "category": "花",
    "svgType": "sweet_pea",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "花の側面を指で優しくつまむと、まるで金魚がパクパクとおしゃべりしているように口を開閉します！",
      "英名「Snapdragon（噛みつきドラゴン）」は、ドラゴンの口のような花の形が由来です。",
      "花が枯れて種子になると、なんと人間の頭蓋骨（スカル）そっくりの不思議な形になることでも有名です。"
    ]
  },
  "2-27": {
    "id": "2-27",
    "name": "オーニソガラム",
    "reading": "おーにそがらむ",
    "scientificName": "Ornithogalum umbellatum",
    "month": 2,
    "day": 27,
    "meanings": [
      "純粋",
      "才能",
      "無垢"
    ],
    "description": "純白の星形の花をたくさん咲かせる球根植物。キリスト誕生の夜に夜空で輝いた星になぞらえて「ベツレヘムの星」とも呼ばれ、聖なる無垢の象徴とされています。",
    "category": "花",
    "svgType": "gardenia",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "英名「Star of Bethlehem（ベツレヘムの星）」と呼ばれ、聖夜の導きの星に例えられます。",
      "ギリシャ語の「ornithos（鳥）」＋「gala（ミルク）」が語源で、乳白色の美しい鳥の羽のようだからと名付けられました。",
      "切花として驚くほど長持ちし、つぼみが下から順に次々と咲いて1ヶ月以上楽しめます。"
    ]
  },
  "3-7": {
    "id": "3-7",
    "name": "オキナグサ（翁草）",
    "reading": "おきなぐさ",
    "scientificName": "Pulsatilla cernua",
    "month": 3,
    "day": 7,
    "meanings": [
      "清純な心",
      "告げられぬ恋",
      "何も求めない"
    ],
    "description": "うつむきがちに咲く深紅の釣鐘状の花と、花後の綿毛がまるでお爺さん（翁）の白髪に見えることから名付けられた日本の絶滅危惧植物。ひっそりとした奥ゆかしさがあります。",
    "category": "花",
    "svgType": "scabiosa",
    "flowerColor": "#881337",
    "secondaryColor": "#be123c",
    "bgGradient": "from-rose-900/15 via-red-700/10 to-emerald-500/10",
    "triviaList": [
      "花が終わった後につく白く長い綿毛の姿が、白髪の老人（翁）にそっくりなことから名付けられました。",
      "花言葉「告げられぬ恋」は、恥ずかしそうに下を向いて咲く奥ゆかしい花の佇まいから生まれました。",
      "宮沢賢治の童話『おきなぐさ』でも、夕陽に輝く美しい綿毛の描写が情感豊かに描かれています。"
    ]
  },
  "3-19": {
    "id": "3-19",
    "name": "アザミ（薊）",
    "reading": "あざみ",
    "scientificName": "Cirsium japonicum",
    "month": 3,
    "day": 19,
    "meanings": [
      "独立",
      "安心",
      "厳格",
      "触れないで"
    ],
    "description": "鋭いトゲのある葉と、鮮やかな赤紫色の球状の花を咲かせる野性の植物。スコットランドを外敵の夜襲から救った救国の花として、スコットランドの国花になっています。",
    "category": "花",
    "svgType": "scabiosa",
    "flowerColor": "#9333ea",
    "secondaryColor": "#a855f7",
    "bgGradient": "from-purple-600/15 via-pink-400/10 to-emerald-500/10",
    "triviaList": [
      "夜襲を仕掛けた敵兵がアザミのトゲを踏んで悲鳴をあげ、奇襲を防いだことからスコットランドの国花になりました。",
      "トゲがあるため近寄りがたいですが、花の根は「ヤマゴボウ」として味噌漬けなどで美味しく食べられます。",
      "ギリシャ神話では、狩猟の女神アルテミスが亡き恋人を想って流した涙からアザミが咲いたと伝えられます。"
    ],
    "subFlowers": [
          {
                "name": "ハッカ（薄荷）",
                "meanings": [
                      "徳",
                      "美徳",
                      "清涼感"
                ],
                "note": "爽やかなメントールが香る和種薄荷"
          }
    ]
  },
  "3-22": {
    "id": "3-22",
    "name": "ハナズオウ（花蘇芳）",
    "reading": "はなずおう",
    "scientificName": "Cercis chinensis",
    "month": 3,
    "day": 22,
    "meanings": [
      "高貴",
      "豊かな生涯",
      "喜び"
    ],
    "description": "春、葉が出る前に木の幹や枝全体を鮮やかな赤紫色の小花で埋め尽くす見事な花木。蘇芳（すおう）で染めたような美しい高貴な色合いから名付けられました。",
    "category": "樹木",
    "svgType": "cherry_blossom",
    "flowerColor": "#c026d3",
    "secondaryColor": "#e879f9",
    "bgGradient": "from-fuchsia-500/15 via-purple-300/10 to-emerald-500/10",
    "triviaList": [
      "古い時代に貴重だった染料「蘇芳（スオウ）」の深い赤紫色に花の色が似ていることから命名されました。",
      "幹や太い枝から直接花が吹き出すように咲く「幹生花（かんせいか）」という珍しい特徴を持ちます。",
      "西洋種はキリストの弟子ユダが首を吊った木という伝説があり「ユダの木」とも呼ばれます。"
    ]
  },
  "3-23": {
    "id": "3-23",
    "name": "スイートアリッサム",
    "reading": "すいーとありっさむ",
    "scientificName": "Lobularia maritima",
    "month": 3,
    "day": 23,
    "meanings": [
      "美しさに優る価値",
      "優美",
      "飛躍"
    ],
    "description": "甘いハチミツのような香りを漂わせながら、小さな花が絨毯のように一面を埋め尽くすグラウンドカバーの女王。寄り添い合って咲く姿が温かなぬくもりを感じさせます。",
    "category": "花",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-pink-400/10 via-rose-100/30 to-emerald-500/10",
    "triviaList": [
      "花から漂う甘い香りはまさに天然のハチミツのようで、ミツバチや蝶をたくさん引き寄せます。",
      "小さな株がこんもりと広がり、春から秋まで途切れることなく咲き続ける驚異の花期を誇ります。",
      "花言葉「美しさに優る価値」は、派手さよりも香りや健気さで人を幸せにする魅力から贈られました。"
    ]
  },
  "3-27": {
    "id": "3-27",
    "name": "ジギタリス",
    "reading": "じぎたりす",
    "scientificName": "Digitalis purpurea",
    "month": 3,
    "day": 27,
    "meanings": [
      "熱愛",
      "不誠実",
      "隠されぬ愛"
    ],
    "description": "すっと高く伸びた花茎に、指サックのような鐘形の花を穂状にびっしり咲かせる壮麗な宿根草。ラテン語で「手袋の指」を意味し、イングリッシュガーデンの主役です。",
    "category": "花",
    "svgType": "digitalis",
    "flowerColor": "#db2777",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-600/15 via-purple-400/10 to-emerald-500/10",
    "triviaList": [
      "学名Digitalisはラテン語の「digit（指）」が語源で、英名でも「Foxglove（狐の手袋）」と呼ばれます。",
      "全草に強い薬効成分ジギトキシンを含み、古くから心臓病の強心剤として西洋医学を支えた名薬草です。",
      "花の内側にある独特の斑点は、ハナバチが蜜のありかへたどり着くための「案内標識（ネクターガイド）」です。"
    ]
  },
  "4-2": {
    "id": "4-2",
    "name": "シロツメクサ（白詰草・クローバー）",
    "reading": "しろつめくさ",
    "scientificName": "Trifolium repens",
    "month": 4,
    "day": 2,
    "meanings": [
      "約束",
      "幸福",
      "私を思って"
    ],
    "description": "野原一面に白い球形の花を咲かせるクローバー。江戸時代、オランダからガラス器を輸入する際に割れ防止の「詰め物」として使われたことから「白詰草」と名付けられました。",
    "category": "花",
    "svgType": "clover",
    "flowerColor": "#10b981",
    "secondaryColor": "#34d399",
    "bgGradient": "from-emerald-500/15 via-green-400/10 to-teal-500/10",
    "triviaList": [
      "江戸時代にオランダから輸入されたガラス器の木箱の「緩衝材（詰め草）」として日本に入ってきたのが名前の由来！",
      "四つ葉のクローバーが見つかる確率は約1万分の1！4枚の葉は「希望・誠実・愛情・幸運」を表します。",
      "花冠（はなかんむり）や首飾りを編んで遊んだ子ども時代の温かい思い出の象徴です。"
    ]
  },
  "4-3": {
    "id": "4-3",
    "name": "ラナンキュラス",
    "reading": "らなんきゅらす",
    "scientificName": "Ranunculus asiaticus",
    "month": 4,
    "day": 3,
    "meanings": [
      "とても魅力的",
      "晴れやかな魅力",
      "光輝を放つ"
    ],
    "description": "薄紙のように繊細な花びらが何百枚も幾重にも重なり合う、ゴージャスで気品溢れる春の球根花。シルクのような光沢と圧倒的な美しさで見る人を魅了します。",
    "category": "花",
    "svgType": "camellia",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "名前はラテン語の「rana（カエル）」が語源！原種がカエルの住む湿地に自生していたことに由来します。",
      "1つの花に100〜200枚もの花びらが重なっており、開くにつれて幾何学的な究極の造形美を見せてくれます。",
      "近年は花びらがキラキラと光る「フレックス」や「ラックス」シリーズなど進化が止まらない大人気花です。"
    ]
  },
  "4-11": {
    "id": "4-11",
    "name": "ヒヤシンス",
    "reading": "ひやしんす",
    "scientificName": "Hyacinthus orientalis",
    "month": 4,
    "day": 11,
    "meanings": [
      "スポーツ",
      "ゲーム",
      "控えめな愛らしさ"
    ],
    "description": "甘く濃厚な香りを部屋いっぱいに満たしながら、鈴のような小花を房状にびっしり咲かせる春の風物詩。水耕栽培でも親しまれ、生命の目覚めを告げる球根花です。",
    "category": "花",
    "svgType": "freesia",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#60a5fa",
    "bgGradient": "from-blue-500/15 via-indigo-300/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ神話で太陽神アポロンと円盤投げのスポーツを楽しんでいた美少年ヒュアキントスが名前の由来です。",
      "土を使わずにガラス瓶で水耕栽培できる手軽さから、理科の実験や冬の室内インテリアとして大人気です。",
      "香水のトップノートとしても愛される清涼感と甘みのあるグリーンフローラル香を持ちます。"
    ]
  },
  "4-15": {
    "id": "4-15",
    "name": "コデマリ（小手毬）",
    "reading": "こでまり",
    "scientificName": "Spiraea cantoniensis",
    "month": 4,
    "day": 15,
    "meanings": [
      "優雅",
      "品位",
      "友情"
    ],
    "description": "小さな白い花が集まって直径数センチの小さな手毬（てまり）を作り、しなやかに枝垂れた枝を埋め尽くす春の花木。純白の手毬が連なる姿は上品な華やぎに満ちています。",
    "category": "樹木",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "小さな手毬のような花のかたまりが枝沿いに整然と並ぶ姿から「小手毬」と名付けられました。",
      "中国原産で、江戸時代初期に日本に渡来し、生け花や庭木として長く愛されてきました。",
      "花言葉「品位」の通り、どんな花とも調和して相手を引き立てる優雅さを持っています。"
    ]
  },
  "4-19": {
    "id": "4-19",
    "name": "イチハツ（一初）",
    "reading": "いちはつ",
    "scientificName": "Iris tectorum",
    "month": 4,
    "day": 19,
    "meanings": [
      "使者",
      "知恵",
      "火の用心"
    ],
    "description": "アヤメの仲間の中で「一番初め（一初）」に咲くことから名付けられた紫の優美なアヤメ科植物。昔は茅葺き屋根の上に植えて大風や火災除けとして大切にされました。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#6366f1",
    "secondaryColor": "#a5b4fc",
    "bgGradient": "from-indigo-500/15 via-purple-300/10 to-emerald-500/10",
    "triviaList": [
      "アヤメ類の中で春いちばん最初に咲き出すことから「一初（いちはつ）」と名付けられました。",
      "昔の日本で茅葺き屋根の頂上に植えて「火災除け」「大風除け」にしたため学名に「tectorum（屋根の）」と付きます。",
      "花弁の中央に白いトサカのようなギザギザの突起があるのがイチハツ独自の特徴です。"
    ]
  },
  "4-25": {
    "id": "4-25",
    "name": "バイモ（貝母）",
    "reading": "ばいも",
    "scientificName": "Fritillaria verticillata",
    "month": 4,
    "day": 25,
    "meanings": [
      "謙虚な心",
      "才能",
      "威厳"
    ],
    "description": "淡い黄緑色の鐘形の花が、網目模様を内側にひっそりと隠しながらうつむいて咲く茶花の名品。球根が二枚貝の殻を合わせたような形をしていることから貝母と呼ばれます。",
    "category": "花",
    "svgType": "scabiosa",
    "flowerColor": "#84cc16",
    "secondaryColor": "#bef264",
    "bgGradient": "from-lime-500/15 via-emerald-400/10 to-teal-600/10",
    "triviaList": [
      "地下にある白い球根が、二枚貝を合わせたような形をしていることから「貝母（ばいも）」と名付けられました。",
      "花の内部を覗くと、淡い黄緑地に繊細な紫の網目模様が広がっており「アミガサユリ」の別名もあります。",
      "生薬としては「貝母（ばいも）」と呼ばれ、咳止めや去痰の特効薬として古来珍重されてきました。"
    ]
  },
  "5-4": {
    "id": "5-4",
    "name": "ストケシア",
    "reading": "すとけしあ",
    "scientificName": "Stokesia laevis",
    "month": 5,
    "day": 4,
    "meanings": [
      "追想",
      "追憶",
      "清らかな親しみ"
    ],
    "description": "初夏から夏にかけて、矢車菊やアザミに似た涼しげな青紫色の花を次々と咲かせる宿根草。「ルリギク（瑠璃菊）」とも呼ばれ、涼やかな存在感で庭を彩ります。",
    "category": "花",
    "svgType": "stokesia",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-500/15 via-sky-300/10 to-teal-500/10",
    "anniversaryNote": "みどりの日・ダーリンちゃんの誕生日",
    "triviaList": [
      "イギリスの植物愛好家ストークス博士の名前にちなんで命名されました。",
      "澄んだ瑠璃色の花弁が涼しげで、暑い初夏に一筋の涼風を届けてくれる庭のオアシスです。",
      "一度植えると毎年必ず初夏に芽吹いて花を咲かせる、非常に丈夫で育てやすい優良植物です。"
    ]
  },
  "5-14": {
    "id": "5-14",
    "name": "イベリス（キャンディタフト）",
    "reading": "いべりす",
    "scientificName": "Iberis sempervirens",
    "month": 5,
    "day": 14,
    "meanings": [
      "初恋の思い出",
      "心をひきつける"
    ],
    "description": "太陽に向かって純白の花を砂糖菓子のようにこんもりと咲かせる花。イベリア半島原産であることから名付けられ、甘い砂糖菓子の房（キャンディタフト）とも呼ばれます。",
    "category": "花",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "スペインやポルトガルがある「イベリア半島」に多く自生していたことから「イベリス」と名付けられました。",
      "砂糖菓子を束ねたように見えることから英名「Candytuft（キャンディタフト）」の可愛い愛称を持ちます。",
      "外側の2枚の花びらだけが大きく発達しており、遠くからでも昆虫が見つけやすい賢い構造をしています。"
    ]
  },
  "5-26": {
    "id": "5-26",
    "name": "オリーブ",
    "reading": "おりーぶ",
    "scientificName": "Olea europaea",
    "month": 5,
    "day": 26,
    "meanings": [
      "平和",
      "知恵",
      "安らぎ"
    ],
    "description": "銀色に輝く葉と豊かな果実を実らせる地中海の聖樹。ノアの箱舟の伝説で鳩がオリーブの若葉をくわえて持ち帰ったことから、世界中で「平和の象徴」とされています。",
    "category": "樹木",
    "svgType": "foliage",
    "flowerColor": "#65a30d",
    "secondaryColor": "#a3e635",
    "bgGradient": "from-lime-600/15 via-emerald-500/10 to-teal-600/15",
    "triviaList": [
      "旧約聖書のノアの箱舟の物語で、大洪水が引いたことを知らせる鳩がオリーブの小枝をくわえてきたことから平和のシンボルになりました。",
      "国連の旗のシンボルマークにも、世界平和を願ってオリーブの枝が描かれています。",
      "数千年も生き続ける樹齢を誇り、地中海沿岸では古代ギリシャ時代からのオリーブ古木が今も実をつけています。"
    ]
  },
  "6-4": {
    "id": "6-4",
    "name": "ウツギ（卯の花）",
    "reading": "うつぎ",
    "scientificName": "Deutzia crenata",
    "month": 6,
    "day": 4,
    "meanings": [
      "秘密",
      "古風",
      "風情"
    ],
    "description": "「夏は来ぬ」の唱歌でも名高い日本の初夏を告げる白い小花。幹の中が空洞（うつろ）になっていることから「空木（うつぎ）」と呼ばれ、純白の花穂を風にそよがせます。",
    "category": "樹木",
    "svgType": "jasmine",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "枝の芯が空洞（うつろ）になっている木、ということから「空木（うつぎ）」と名付けられました。",
      "旧暦4月（卯月）に咲くことから「卯の花（うのはな）」と呼ばれ、おから料理の別名の語源にもなっています。",
      "昔は畑の境界線に植えられ、魔除けや境界樹として生活に深く根付いていました。"
    ]
  },
  "6-5": {
    "id": "6-5",
    "name": "マリーゴールド",
    "reading": "まりーごーるど",
    "scientificName": "Tagetes patula",
    "month": 6,
    "day": 5,
    "meanings": [
      "可憐な愛情",
      "変わらぬ愛",
      "健康",
      "友情"
    ],
    "description": "聖母マリアの祝日にいつも咲いていたことから「マリア様の黄金の花」と名付けられた太陽の花。害虫を遠ざけるコンパニオンプランツとしても世界中で大活躍しています。",
    "category": "花",
    "svgType": "marigold",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#f97316",
    "bgGradient": "from-amber-500/15 via-yellow-400/10 to-emerald-500/10",
    "anniversaryNote": "世界環境デー",
    "triviaList": [
      "名前は「Mary is gold（聖母マリアの黄金）」に由来し、年に何度も巡る聖母の祭日に咲き続けていたことから名付けられました。",
      "根からセンチュウを遠ざける成分を分泌するため、トマトやナスの最高の相棒（コンパニオンプランツ）として農家にも大人気！",
      "メキシコの「死者の日」では、死者の魂を導く神聖な花として街中がマリーゴールドのオレンジ色で埋め尽くされます。"
    ]
  },
  "6-12": {
    "id": "6-12",
    "name": "ライラック",
    "reading": "らいらっく",
    "scientificName": "Syringa vulgaris",
    "month": 6,
    "day": 12,
    "meanings": [
      "思い出",
      "友情",
      "青春の思い出",
      "純潔"
    ],
    "description": "初夏の風に甘く爽やかな芳香を乗せるリラの花。ハート形の葉と淡い紫色の房状の花が青春の甘酸っぱい思い出を想起させ、札幌市の木としても愛されています。",
    "category": "樹木",
    "svgType": "lilac",
    "flowerColor": "#a855f7",
    "secondaryColor": "#c084fc",
    "bgGradient": "from-purple-500/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "フランス語では「リラ（Lilas）」と呼ばれ、初夏の心地よい季節を「リラ冷え」と呼ぶなど季節の言葉になっています。",
      "通常は花びらが4枚ですが、稀に見つかる「5枚花びらのライラック」を見つけると幸福になれるという素敵な言い伝えがあります。",
      "葉っぱが綺麗なハート形をしており、恋のお守りとしても親しまれています。"
    ]
  },
  "6-16": {
    "id": "6-16",
    "name": "シャクヤク（芍薬）",
    "reading": "しゃくやく",
    "scientificName": "Paeonia lactiflora",
    "month": 6,
    "day": 16,
    "meanings": [
      "恥じらい",
      "はにかみ",
      "謙虚",
      "威厳"
    ],
    "description": "「立てば芍薬、座れば牡丹、歩く姿は百合の花」と讃えられる東洋の代表的美人花。幾重にも重なる優美で大輪の花びらが初夏の光に輝き、圧倒的な気品と香りを漂わせます。",
    "category": "花",
    "svgType": "peony",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "生薬としても名高く「芍薬甘草湯」など筋肉の緊張や痛みを和らげる漢方の要薬として重宝されます。",
      "夕方になると花びらを閉じて恥じらうように眠る性質から「恥じらい」「はにかみ」の花言葉がつきました。",
      "ヨーロッパでも「5月のバラ」として愛され、ウェディングブーケの王道として高い人気を誇ります。"
    ]
  },
    "6-22": {
    "id": "6-22",
    "name": "アジサイ（紫陽花）",
    "reading": "あじさい",
    "scientificName": "Hydrangea macrophylla",
    "month": 6,
    "day": 22,
    "meanings": ["移り気", "辛抱強さ", "団結", "和気あいあい"],
    "description": "雨の季節にしっとりと咲き誇る日本の初夏の象徴。土壌の酸度によって青から紫、ピンクへと七変化する幻想的な花色が魅了します。",
    "category": "花木・落葉低木",
    "svgType": "hydrangea",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#818cf8",
    "bgGradient": "from-sky-500/15 via-indigo-300/10 to-teal-400/10",
    "subFlowers": [
      {
        "name": "ガザニア（勲章菊）",
        "meanings": ["あなたを誇りに思う", "身近な愛", "きらびやか"],
        "note": "勲章のような鮮烈な輝きを放つ夏の花"
      }
    ],
    "triviaList": [
      "アジサイの青〜赤の色彩変化は、土壌中のアルミニウムイオンを吸い上げる量によって変化します。"
    ]
  },
  "6-23": {
    "id": "6-23",
    "name": "タチアオイ（立葵）",
    "reading": "たちあおい",
    "scientificName": "Alcea rosea",
    "month": 6,
    "day": 23,
    "meanings": [
      "大望",
      "野心",
      "気高く威厳に満ちた美"
    ],
    "description": "夏空に向かって2メートル以上もまっすぐ背を伸ばし、華やかな大輪の花を下から順に咲き上がらせる豪快な花。てっぺんの花が咲くと梅雨が明けると言い伝えられます。",
    "category": "花",
    "svgType": "hibiscus",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-emerald-500/10",
    "triviaList": [
      "梅雨の始まりとともに下から咲き始め、一番上のつぼみが咲き切る頃に梅雨が明けるため「梅雨葵（ツユアオイ）」とも呼ばれます。",
      "英名「Hollyhock」は「聖地の花」を意味し、十字軍がシリアから持ち帰った神聖な歴史を持ちます。",
      "花びらは古くからハーブティーや染料、お菓子の天然着色料として利用されてきました。"
    ]
  },
  "7-9": {
    "id": "7-9",
    "name": "セルリア（ブラッシングブライド）",
    "reading": "せるりあ",
    "scientificName": "Serruria florida",
    "month": 7,
    "day": 9,
    "meanings": [
      "可憐な心",
      "ほのかな思慕",
      "優れた知識"
    ],
    "description": "淡いピンクと白のグラデーションが頬を赤らめた花嫁を思わせることから「頬を染める花嫁（Blushing Bride）」と呼ばれる南アフリカの希少花。ウェディングの憧れです。",
    "category": "花",
    "svgType": "gardenia",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "英名「Blushing Bride（頬を染める花嫁）」は、プロポーズされた乙女が恥じらって頬を赤らめた姿そのもの！",
      "イギリスの故ダイアナ妃のウェディングブーケにも使われたことで世界的な憧れの花となりました。",
      "南アフリカの限られた山岳地帯にしか自生しないプロテア科の貴重なワイルドフラワーです。"
    ]
  },
  "7-24": {
    "id": "7-24",
    "name": "ボタン（牡丹）",
    "reading": "ぼたん",
    "scientificName": "Paeonia suffruticosa",
    "month": 7,
    "day": 24,
    "meanings": [
      "風格",
      "高貴",
      "富貴"
    ],
    "description": "「百花の王」として古来中国の宮廷で愛されてきた絢爛豪華な花。幾重にも重なる薄紅や深紅の花びらは、猛禽類すら圧倒する覇気と揺るぎなき「風格」を放ちます。",
    "category": "花",
    "svgType": "peony",
    "flowerColor": "#be123c",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-700/15 via-pink-500/10 to-amber-500/10",
    "triviaList": [
      "「立てば芍薬、座れば牡丹、歩く姿は百合の花」と美人の代名詞として称えられます。",
      "唐代の則天武后の時代から国花格として扱われ、富と権力のシンボルとされました。",
      "おてんばで腕っぷしが強くても、一目置かざるを得ない気品と知略のオーラを放ちます。"
    ],
    "rarity": "Normal"
  },
  "7-26": {
    "id": "7-26",
    "name": "ラークスパー（千鳥草）",
    "reading": "らーくすぱー",
    "scientificName": "Consolida ajacis",
    "month": 7,
    "day": 26,
    "meanings": [
      "陽気",
      "快活",
      "信頼"
    ],
    "description": "青や紫の繊細な小花が千鳥が飛ぶ姿に似ていることから「千鳥草」と呼ばれる夏の花。ヒバリ（Lark）の足の爪（Spur）のような後ろの距（きょ）がチャームポイントです。",
    "category": "花",
    "svgType": "delphinium",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#60a5fa",
    "bgGradient": "from-blue-500/15 via-indigo-300/10 to-teal-500/10",
    "triviaList": [
      "花の形が空を舞うヒバリ（Lark）の後ろ足の爪（Spur）に似ていることから「ラークスパー」と名付けられました。",
      "和名「千鳥草（ちどりそう）」は、小花がまるで無数の千鳥が群れ飛ぶ姿に見えることが由来です。",
      "デルフィニウムの一年草タイプで、初夏の花壇に清涼感あふれるブルーを添えてくれます。"
    ]
  },
  "7-27": {
    "id": "7-27",
    "name": "キキョウ（桔梗）",
    "reading": "ききょう",
    "scientificName": "Platycodon grandiflorus",
    "month": 7,
    "day": 27,
    "meanings": [
      "誠実",
      "気品",
      "清楚",
      "従順"
    ],
    "description": "秋の七草の一つとして古来日本で愛されてきた、凛とした青紫色の星形の花。開花直前の蕾が風船のようにふっくら膨らむことから、英名では「バルーン・フラワー」と呼ばれます。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#4338ca",
    "secondaryColor": "#818cf8",
    "bgGradient": "from-indigo-700/15 via-purple-500/10 to-teal-600/10",
    "triviaList": [
      "五角形の端正な星形の花びらは、明智光秀や坂本龍馬の家紋（桔梗紋）としても有名です。",
      "開花前の風船のように丸く膨らむ蕾の姿から、英語では「Balloon flower（風船の花）」と親しまれています。",
      "根は古くから「桔梗根（キキョウコン）」として喉の痛みや咳を鎮める漢方薬の生薬として重宝されてきました。"
    ]
  },
  "7-29": {
  "id": "7-29",
  "name": "ダリア",
  "reading": "だりあ",
  "scientificName": "Dahlia pinnata",
  "month": 7,
  "day": 29,
  "meanings": [
    "華麗",
    "優雅",
    "気品",
    "栄華"
  ],
  "description": "幾重にも重なる幾何学的な花びらが高貴な美しさを誇るメキシコ原産の名花。「華麗」「優雅」「気品」という、王妃のドレスのような豪華絢爛さを放ちます。",
  "category": "球根・園芸花",
  "svgType": "dahlia",
  "flowerColor": "#be123c",
  "secondaryColor": "#fecdd3",
  "bgGradient": "from-rose-600/15 via-red-400/10 to-amber-500/10",
  "subFlowers": [
    {
      "name": "サボテン（仙人掌）",
      "reading": "さぼてん",
      "meanings": [
        "燃える心",
        "偉大",
        "温かい心"
      ],
      "note": "夏を生き抜く強靭な友（過酷な砂漠で瑞々しい生命と花を育む多肉植物）"
    }
  ],
  "triviaList": [
    "ナポレオンの妻ジョゼフィーヌが愛してやまなかった貴婦人の花として有名です。",
    "補足席には、灼熱の太陽の下で燃える心を宿す「サボテン」が力強く同席！",
    "花の形がポンポン咲き、コラレット咲き、カクタス咲きなど多彩を極めるのも魅力です。"
  ],
  "rarity": "Normal"
},

  "8-15": {
    "id": "8-15",
    "name": "ピンクッション",
    "reading": "ぴんくっしょん",
    "scientificName": "Leucospermum cordifolium",
    "month": 8,
    "day": 15,
    "meanings": [
      "どこでも成功を",
      "陽気",
      "降り注ぐ愛"
    ],
    "description": "まるで裁縫用の針刺し（ピンクッション）に無数の待ち針が刺さっているようなエキゾチックな南アフリカの花。ダイナミックで日持ちが抜群に良いトロピカルフラワーです。",
    "category": "花",
    "svgType": "scabiosa",
    "flowerColor": "#ea580c",
    "secondaryColor": "#f97316",
    "bgGradient": "from-orange-500/15 via-amber-400/10 to-teal-500/10",
    "triviaList": [
      "針刺し（Pincushion）に待ち針がびっしり刺さっているようなユニークな姿から名付けられました。",
      "針のように見える1本1本が実は雄しべ（花柱）で、めしべを守りながら花粉を鳥の頭にくっつける仕組みです。",
      "乾燥した過酷な南アフリカの原野で力強く育つため「どこでも成功を」という前向きな花言葉が付きました。"
    ]
  },
  "9-6": {
    "id": "9-6",
    "name": "ヨルガオ（夜顔）",
    "reading": "よるがお",
    "scientificName": "Ipomoea alba",
    "month": 9,
    "day": 6,
    "meanings": [
      "夜の思い出",
      "妖艶",
      "妖しい魅力"
    ],
    "description": "夕暮れとともに白く大きな大輪の花を開き、夜の闇の中で甘く高貴な香りを漂わせるつる植物。朝顔とは対照的に月明かりの下でひっそり咲く神秘的な姿です。",
    "category": "花",
    "svgType": "gardenia",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "夕方に開き、夜の間に咲き誇って翌朝の朝日が昇る頃にしぼむ「夜行性」の神秘的な花です。",
      "源氏物語で有名な「夕顔（ユウガオ）」はウリ科のカンピョウの花で、こちらの「夜顔」はヒルガオ科のアサガオの仲間です。",
      "夜行性のスズメガを引き寄せるため、夜になると一段と濃厚で甘い芳香を空気中に漂わせます。"
    ]
  },
  "9-9": {
    "id": "9-9",
    "name": "シオン（紫苑）",
    "reading": "しおん",
    "scientificName": "Aster tataricus",
    "month": 9,
    "day": 9,
    "meanings": [
      "追憶",
      "君を忘れない",
      "遠方にある人を思う"
    ],
    "description": "秋の澄み渡る空に優美な薄紫色の花を群れ咲かせる日本の伝統秋草。今昔物語にも親を亡くした兄弟が墓前に植えて偲んだ物語が描かれる「忘れな草」と対をなす花です。",
    "category": "花",
    "svgType": "cornflower",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#a78bfa",
    "bgGradient": "from-purple-500/15 via-indigo-300/10 to-teal-500/10",
    "anniversaryNote": "重陽の節句（菊の節句）",
    "triviaList": [
      "日本の伝統色「紫苑色（しおんいろ）」の語源になった高貴で優しい青紫色をしています。",
      "今昔物語集には、亡き父親を偲んで墓の周りにシオンを植え、毎日のように父を思い出した心優しい息子の話が記されています。",
      "背丈が2メートル近くまで高くなり、秋風に揺れる姿は遠く離れた大切な人を思う切なさを漂わせます。"
    ]
  },
  "9-20": {
    "id": "9-20",
    "name": "ヤブラン（藪蘭）",
    "reading": "やぶらん",
    "scientificName": "Liriope muscari",
    "month": 9,
    "day": 20,
    "meanings": [
      "隠された心",
      "忍耐",
      "謙遜"
    ],
    "description": "日陰の藪（やぶ）のような場所でも青々とした細長い葉を保ち、秋には涼しげな紫色の小花を穂状に咲かせる下草の名脇役。どんな環境でも耐え忍ぶ強い芯を持ちます。",
    "category": "観葉・ハーブ",
    "svgType": "delphinium",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#a78bfa",
    "bgGradient": "from-purple-600/15 via-indigo-400/10 to-emerald-500/10",
    "triviaList": [
      "藪（やぶ）のような暗い木陰でも元気に育ち、ランのような優美な葉を持つことから名付けられました。",
      "乾燥にも日陰にも寒さにもめっぽう強く、都市のビル陰や庭のグラウンドカバーとして日本中で大活躍しています。",
      "冬になると花穂にツヤツヤとした黒真珠のような丸い種子が実り、冬の庭のアクセントになります。"
    ]
  },
  "9-23": {
    "id": "9-23",
    "name": "ヒガンバナ（曼珠沙華）",
    "reading": "ひがんばな",
    "scientificName": "Lycoris radiata",
    "month": 9,
    "day": 9,
    "meanings": [
      "情熱",
      "独立",
      "再会",
      "あきらめ"
    ],
    "description": "秋のお彼岸の頃、葉が出るより前に大地から突如茎を伸ばし、深紅の妖艶な大輪を咲かせる仏教の吉兆花「天上の花（曼珠沙華）」。燃え盛るような情熱と神秘を宿します。",
    "category": "花",
    "svgType": "spider_lily",
    "flowerColor": "#dc2626",
    "secondaryColor": "#f87171",
    "bgGradient": "from-red-600/20 via-rose-500/10 to-emerald-500/10",
    "anniversaryNote": "秋分の日・お彼岸",
    "triviaList": [
      "仏教の経典では「曼珠沙華（まんじゅしゃげ）」と呼ばれ、天から降ってくるめでたい吉兆の花とされます。",
      "花が咲く時には葉がなく、葉が伸びる時には花がないことから「葉見ず花見ず（お互いを想い合う）」の別名があります。",
      "田んぼのあぜ道に多いのは、球根の毒性でモグラやネズミがあぜに穴を開けるのを防ぐ先人の知恵でした。"
    ]
  },
  "10-9": {
    "id": "10-9",
    "name": "ホトトギス（杜鵑草）",
    "reading": "ほととぎす",
    "scientificName": "Tricyrtis hirta",
    "month": 10,
    "day": 9,
    "meanings": [
      "永遠にあなたのもの",
      "秘めた意志"
    ],
    "description": "紫の斑点模様が野鳥のホトトギスの胸の斑紋に似ていることから名付けられた日本の固有種。秋の深まりとともに茶花として愛され、静かな気品をたたえます。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#7e22ce",
    "secondaryColor": "#c084fc",
    "bgGradient": "from-purple-600/15 via-fuchsia-400/10 to-teal-500/10",
    "triviaList": [
      "鳥のホトトギスの胸毛にある斑点模様に花びらの模様がそっくりなことから名付けられました。",
      "日本原産の植物で、海外ではエキゾチックな造形美から「Toad Lily（ヒキガエルユリ）」と呼ばれ大人気です。",
      "花の中心にあるめしべが噴水のように3つに分かれ、さらに2つに裂ける幾何学的な芸術的造形を持ちます。"
    ]
  },
  "10-12": {
    "id": "10-12",
    "name": "ヘレニウム（団子菊）",
    "reading": "へれにうむ",
    "scientificName": "Helenium autumnale",
    "month": 10,
    "day": 12,
    "meanings": [
      "寛容な心",
      "涙",
      "上機嫌"
    ],
    "description": "中心の丸い花芯がまるで小さなお団子のように盛り上がるユーモラスな秋の花。「ダンゴギク」の和名を持ち、黄色や赤褐色の暖かなグラデーションで庭を照らします。",
    "category": "花",
    "svgType": "marigold",
    "flowerColor": "#d97706",
    "secondaryColor": "#f59e0b",
    "bgGradient": "from-amber-500/15 via-orange-400/10 to-yellow-500/10",
    "triviaList": [
      "トロイのヘレン王妃の流した涙から生まれたという伝説から学名Heleniumと名付けられました。",
      "和名「団子菊（だんごぎく）」は、中心の筒状花がこんもりと丸いお団子のようになる愛嬌たっぷりの姿から付きました。",
      "花びらが少し下向きに反り返り、スカートを広げたような陽気な姿で初秋の花壇を彩ります。"
    ]
  },
  "10-13": {
    "id": "10-13",
    "name": "シモツケ（下野）",
    "reading": "しもつけ",
    "scientificName": "Spiraea japonica",
    "month": 10,
    "day": 13,
    "meanings": [
      "純情",
      "穏やか",
      "無益"
    ],
    "description": "下野国（現在の栃木県）で最初に発見されたことから名付けられた日本の花木。ふわふわとした綿菓子のようなピンクの小花が集まり、優しく穏やかな雰囲気を醸し出します。",
    "category": "樹木",
    "svgType": "alyssum",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "現在の栃木県にあたる「下野（しもつけ）国」で最初に見出されたことからこの名が付きました。",
      "花から長い雄しべがたくさん突き出しているため、全体がモフモフとした綿毛のように見えます。",
      "秋になると葉が鮮やかな赤や黄色に紅葉し、1年を通じて庭を美しく彩ってくれます。"
    ]
  },
  "10-16": {
    "id": "10-16",
    "name": "サンキライ（山帰来・サルトリイバラ）",
    "reading": "さんきらい",
    "scientificName": "Smilax china",
    "month": 10,
    "day": 16,
    "meanings": [
      "不屈の精神",
      "元気になる"
    ],
    "description": "山で病にかかった人がこの実を食べて元気に帰ってきたという伝説から「山帰来」と呼ばれるつる植物。秋にはつややかな真っ赤な実をつけ、クリスマスのリースにも大人気です。",
    "category": "野菜・実",
    "svgType": "fruit",
    "flowerColor": "#dc2626",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-red-500/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "毒気配の山で行き倒れそうになった人がこの根を食べて治り「山から元気に帰ってきた」伝説が名前の由来！",
      "西日本ではこの丸い葉を使って柏餅ならぬ「サルトリイバラ餅（山帰来餅）」を包む伝統文化があります。",
      "秋から冬にかけて実る真っ赤な実はドライフラワーになっても色あせず、冬のリースに欠かせません。"
    ]
  },
  "10-19": {
  "id": "10-19",
  "name": "グロリオサ",
  "reading": "ぐろりおさ",
  "scientificName": "Gloriosa superba",
  "month": 10,
  "day": 19,
  "meanings": [
    "栄光",
    "勇敢",
    "燃える情熱"
  ],
  "description": "燃え盛る炎が天に向かって立ち上るような躍動感あふれる姿から「フレームリリー（炎の百合）」と呼ばれる情熱の花。ラテン語で「見事な・名誉ある」を意味します。",
  "category": "花",
  "svgType": "tiger_lily",
  "flowerColor": "#e11d48",
  "secondaryColor": "#f59e0b",
  "bgGradient": "from-red-500/15 via-amber-400/10 to-emerald-500/10",
  "subFlowers": [
    {
      "name": "オナモミ（葈耳・くっつき虫）",
      "reading": "おなもみ",
      "meanings": [
        "怠惰",
        "頑固",
        "勇気"
      ],
      "note": "くっつき虫（秋の野原で服にくっつくトゲトゲの懐かしい実）"
    }
  ],
  "triviaList": [
    "ラテン語の「gloriosus（栄光ある・名誉ある）」が語源で、まさに勝利と栄光の象徴です。",
    "補足席には、誰もが子どもの頃に遊んだ「オナモミ（くっつき虫）」がユニークに同席！",
    "反り返った花びらと外に突き出した雄しべの躍動感は、フラワーアレンジメントの主役として大人気です。"
  ],
  "rarity": "Normal"
},

  "10-24": {
    "id": "10-24",
    "name": "アゲラタム（カッコウアザミ）",
    "reading": "あげらたむ",
    "scientificName": "Ageratum houstonianum",
    "month": 10,
    "day": 24,
    "meanings": [
      "信頼",
      "安楽",
      "幸せを得る"
    ],
    "description": "モフモフとした紫がかった青色の小花をこんもりと咲かせる愛らしい花。ギリシャ語で「年をとらない（不老）」を意味し、花色がいつまでも色あせないことから名付けられました。※この日は実りの「クリ（栗：真心・満足）」も誕生花です。",
    "category": "花",
    "svgType": "alyssum",
    "flowerColor": "#6366f1",
    "secondaryColor": "#a5b4fc",
    "bgGradient": "from-indigo-500/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "名前のAgeratumはギリシャ語の「a（否定）」＋「geras（古くなる）」で「不老・若さを保つ」という意味！",
      "触るとふんわり柔らかなパフのような手触りで、初夏から晩秋まで絶え間なく咲き続けます。",
      "同日誕生花の「クリ（栗）」の花言葉は「真心」「贅沢」「満足」。秋の豊かな味覚と実りの象徴です。"
    ]
  },
  "10-29": {
    "id": "10-29",
    "name": "ゲッカビジン（月下美人）",
    "reading": "げっかびじん",
    "scientificName": "Epiphyllum oxypetalum",
    "month": 10,
    "day": 29,
    "meanings": [
      "はかない美",
      "はかない恋",
      "あでやかな美人"
    ],
    "description": "年にたった一度、新月や満月の夜にだけ純白の大輪の花を咲かせ、夜明けとともに息絶える神秘のサボテン。部屋中を包み込むような甘美で高貴な芳香を放ちます。",
    "category": "花",
    "svgType": "gardenia",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "夜の8時〜9時頃から咲き始め、深夜2時頃に満開となり、朝にはしぼんでしまう完全な「一夜限りの花」です。",
      "満開時には家中が満たされるほどの濃厚で気品に満ちた香水のような芳香を放ちます。",
      "実は咲き終わった花は食用になり、おひたしやスープにするとシャキシャキとした食感が楽しめます。"
    ]
  },
  "10-31": {
    "id": "10-31",
    "name": "ヘリコニア",
    "reading": "へりこにあ",
    "scientificName": "Heliconia",
    "month": 10,
    "day": 31,
    "meanings": [
      "注目",
      "風変わりな人",
      "脚光"
    ],
    "description": "オウムのクチバシやカニのはさみが連なったような、極彩色の圧倒的な造形美を誇る熱帯植物。ギリシャ神話の芸術の神ミューズが住む「ヘリコン山」が名前の由来です。",
    "category": "花",
    "svgType": "tiger_lily",
    "flowerColor": "#ea580c",
    "secondaryColor": "#f97316",
    "bgGradient": "from-orange-600/15 via-yellow-400/10 to-teal-500/10",
    "anniversaryNote": "ハロウィン",
    "triviaList": [
      "ギリシャ神話で文芸や音楽を司る女神ミューズたちが住む聖山「ヘリコン山」が名前の由来です。",
      "鮮やかな赤や黄色の部分は花びらではなく「苞（ほう）」と呼ばれる葉が変化したもので、数ヶ月も色あせません。",
      "ハチドリが蜜を吸いやすいように特化した形に共進化しており、熱帯雨林の生態系を支えています。"
    ]
  },
  "11-1": {
    "id": "11-1",
    "name": "カリン（花梨）",
    "reading": "かりん",
    "scientificName": "Pseudocydonia sinensis",
    "month": 11,
    "day": 1,
    "meanings": [
      "唯一の恋",
      "豊麗",
      "努力"
    ],
    "description": "秋に洋ナシのような大粒の黄金色の果実を実らせ、部屋中に素晴らしい甘い芳香を漂わせる名木。硬い実はカリン酒やハチミツ漬けにしてのどを守る特効薬として古来親しまれます。",
    "category": "野菜・実",
    "svgType": "pear",
    "flowerColor": "#eab308",
    "secondaryColor": "#ca8a04",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-emerald-500/10",
    "triviaList": [
      "熟したカリンの実は部屋に1つ置いておくだけで部屋全体が甘いフルーティな香りで満たされるほどの芳香を持ちます。",
      "果肉は石細胞が多く生食できませんが、カリン酒やハチミツ漬けにすると喉の痛みや咳に驚くほどの薬効を発揮します。",
      "「金を借りん（カリン）」にかけて、商売繁盛と金運を呼ぶ縁起の良い庭木として植えられてきました。"
    ]
  },
  "11-3": {
    "id": "11-3",
    "name": "サザンカ（山茶花）",
    "reading": "さざんか",
    "scientificName": "Camellia sasanqua",
    "month": 11,
    "day": 3,
    "meanings": [
      "困難に打ち克つ",
      "ひたむきさ",
      "理想の恋"
    ],
    "description": "木枯らし吹きすさぶ初冬の庭で、寒さに負けず鮮やかな紅や白の花を次々と咲かせる日本の固有種。寒風の中でひたむきに咲く姿が勇気と希望を与えてくれます。",
    "category": "花",
    "svgType": "camellia",
    "flowerColor": "#e11d48",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-emerald-500/10",
    "anniversaryNote": "文化の日",
    "triviaList": [
      "ツバキは花ごとポトリと落ちますが、サザンカは花びらが1枚1枚はらはらと優雅に舞い散るのが最大の違いです。",
      "日本固有の植物で、江戸時代に長崎出島からヨーロッパに渡り、冬に咲く奇跡の花として世界を驚嘆させました。",
      "童謡「たきび」の2番「さざんか さざんか 咲いた道」でおなじみの、日本の冬の温かな風景です。"
    ]
  },
  "12-7": {
    "id": "12-7",
    "name": "シクラメン",
    "reading": "しくらめん",
    "scientificName": "Cyclamen persicum",
    "month": 12,
    "day": 7,
    "meanings": [
      "はにかみ",
      "内気",
      "憧れ",
      "遠慮"
    ],
    "description": "冬の寒さの中で、炎のように反り返った美しい花びらを上に向けて咲かせる冬の鉢花の女王。恥ずかしそうにうつむいて咲く姿から「はにかみ」の花言葉が生まれました。",
    "category": "花",
    "svgType": "cyclamen",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "名前の語源はギリシャ語の「kyklos（円・螺旋）」。花が終わると茎がくるくると螺旋状に丸まることが由来です。",
      "ソロモン王が王冠の形に迷った際、謙虚にうつむくシクラメンに心を打たれて冠の意匠にしたという伝説があります。",
      "冬の贈り物として世界一親しまれ、赤は「嫉妬」、白は「清純」、ピンクは「憧れ」の花言葉を持ちます。"
    ]
  },
  "12-19": {
    "id": "12-19",
    "name": "プリムラ",
    "reading": "ぷりむら",
    "scientificName": "Primula",
    "month": 12,
    "day": 19,
    "meanings": [
      "青春の始まりと悲しみ",
      "信頼",
      "運命を開く"
    ],
    "description": "ラテン語で「最初（プリムス）」を意味し、真冬から春先にかけて誰よりも早く咲き始める愛らしい小花。冬の冷たい空気の中で明るい色彩を放ち、希望の光を灯します。",
    "category": "花",
    "svgType": "sweet_pea",
    "flowerColor": "#0284c7",
    "secondaryColor": "#38bdf8",
    "bgGradient": "from-sky-500/15 via-blue-300/10 to-teal-500/10",
    "triviaList": [
      "ラテン語の「primus（最初）」が語源で、春の扉を一番最初に開ける花とされます。",
      "北欧神話では愛の女神フレイヤの聖花とされ、天国の宝庫を開く鍵に見立てて「鍵の花」とも呼ばれます。",
      "ジュリアン、ポリアンサなどカラフルで多彩な品種があり、冬のガーデニングの定番です。"
    ]
  },
  "12-23": {
    "id": "12-23",
    "name": "シネラリア（サイネリア）",
    "reading": "しねらりあ",
    "scientificName": "Pericallis hybrida",
    "month": 12,
    "day": 23,
    "meanings": [
      "いつも快活",
      "喜び",
      "希望"
    ],
    "description": "ドーム状のこんもりとした株いっぱいに、宝石のような鮮やかな花をびっしりと咲かせる冬の鉢花。冬の室内をまるで春の花園のように華やかに変えてくれます。",
    "category": "花",
    "svgType": "cornflower",
    "flowerColor": "#6366f1",
    "secondaryColor": "#a5b4fc",
    "bgGradient": "from-indigo-500/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "日本では「シネラリア」の音が「死」を連想するため、園芸店では「サイネリア」の愛称で広く流通しています。",
      "株を覆い尽くすほどの花数の多さと密度の濃さは圧巻で、卒業式や冬のセレモニーの定番ギフトです。",
      "青、紫、ピンク、白、蛇の目模様など、まるでパレットを広げたような豊富な花色バリエーションを誇ります。"
    ]
  },
  "12-30": {
  "id": "12-30",
  "name": "ガーベラ",
  "reading": "がーべら",
  "scientificName": "Gerbera jamesonii",
  "month": 12,
  "day": 30,
  "meanings": [
    "希望",
    "常に前進",
    "光に満ちた"
  ],
  "description": "太陽に向かってまっすぐ鮮やかな花弁を開くガーベラ。「希望」「常に前進」という、年末から新しい年へと希望をつなぐ輝く花言葉を持ちます。",
  "category": "草花",
  "svgType": "daisy",
  "flowerColor": "#f97316",
  "secondaryColor": "#fed7aa",
  "bgGradient": "from-orange-500/15 via-amber-300/10 to-rose-400/10",
  "subFlowers": [
    {
      "name": "カネノナルキ（金のなる木・花月）",
      "reading": "かねのなるき",
      "meanings": [
        "一攫千金",
        "富",
        "幸運を招く",
        "不老長寿"
      ],
      "note": "肉厚で丸い葉が硬貨に見えることから命名された、年末年始にぴったりの縁起多肉植物！"
    }
  ],
  "triviaList": [
    "ガーベラはどんな色でもポジティブで前向きな花言葉を持つ、世界中で大人気のフラワーギフト！",
    "12/30の補足には「カネノナルキ（金のなる木）」が同席し、希望と富貴をダブルで祝います！",
    "花持ちが非常に良く、切り花としても長くお部屋をパッと明るく照らし続けてくれます。"
  ],
  "rarity": "Normal"
},

  "1-17": {
    "id": "1-17",
    "name": "コチョウラン（胡蝶蘭）",
    "reading": "こちょうらん",
    "scientificName": "Phalaenopsis aphrodite",
    "month": 1,
    "day": 17,
    "meanings": [
      "幸福が飛んでくる",
      "純粋な愛",
      "清純"
    ],
    "description": "蝶が舞うような優雅で格調高い姿から、「幸福がひらひらと飛んで舞い込んでくる」という最高の吉兆花言葉を持ちます。人生の新たな門出やお祝いに最も選ばれる高貴な蘭です。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/10 via-emerald-500/10 to-teal-500/10",
    "anniversaryNote": "開発者と同じ誕生日（幸福が飛んでくる胡蝶蘭）",
    "rarity": "Super Rare"
  },
  "1-19": {
    "id": "1-19",
    "name": "マツ（松）",
    "reading": "まつ",
    "scientificName": "Pinus thunbergii",
    "month": 1,
    "day": 19,
    "meanings": [
      "不老長寿",
      "永遠の若さ",
      "勇敢",
      "慈愛"
    ],
    "description": "厳しい冬の嵐や雪にも耐えて一年中青々とした葉を茂らせる常緑樹の代表。千年の風雪にも屈しない「勇敢さ」と「不屈の生命力」を象徴する縁起の良い植物です。",
    "category": "樹木",
    "svgType": "pine",
    "flowerColor": "#059669",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-600/15 via-teal-500/10 to-green-600/15",
    "rarity": "Rare"
  },
  "1-21": {
    "id": "1-21",
    "name": "アイビー（ヘデラ）",
    "reading": "あいびー",
    "scientificName": "Hedera helix",
    "month": 1,
    "day": 21,
    "meanings": [
      "永遠の愛",
      "友情",
      "不滅",
      "誠実"
    ],
    "description": "枯れることなく壁や樹木にしっかり蔦を伸ばして寄り添う姿から、決して途切れることのない「固い友情」と「不滅の絆」を意味する瑞々しいつる性植物です。",
    "category": "観葉・ハーブ",
    "svgType": "ivy",
    "flowerColor": "#15803d",
    "secondaryColor": "#4ade80",
    "bgGradient": "from-emerald-500/15 via-green-400/10 to-teal-600/10",
    "rarity": "Normal"
  },
  "1-31": {
    "id": "1-31",
    "name": "マサキ（柾）",
    "reading": "まさき",
    "scientificName": "Euonymus japonicus",
    "month": 1,
    "day": 31,
    "meanings": [
      "厚遇",
      "円満",
      "あなたの幸せを祈る"
    ],
    "description": "年中つややかな緑の葉を茂らせ、災いを防ぐ生け垣として古くから親しまれてきました。「円満」「あなたの幸せを祈る」という真心こもった温かい花言葉を持っています。",
    "category": "樹木",
    "svgType": "foliage",
    "flowerColor": "#16a34a",
    "secondaryColor": "#86efac",
    "bgGradient": "from-green-600/15 via-emerald-500/10 to-lime-500/10",
    "rarity": "Normal"
  },
  "2-3": {
    "id": "2-3",
    "name": "セツブンソウ（節分草）",
    "anniversaryNote": "節分（季節の分かれ目）",
    "reading": "せつぶんそう",
    "scientificName": "Eranthis pinnatifida",
    "month": 2,
    "day": 3,
    "meanings": [
      "気品",
      "ほほえみ",
      "光輝"
    ],
    "description": "節分の時期にまだ雪の残る大地から可憐な白い花を咲かせる日本の春の妖精。春の訪れをいち早く微笑むように告げる姿から「光輝」の花言葉が贈られました。",
    "category": "花",
    "svgType": "winter_aconite",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "2-17": {
    "id": "2-17",
    "name": "ミモザ（銀葉アカシア）",
    "reading": "みもざ",
    "scientificName": "Acacia baileyana",
    "month": 2,
    "day": 17,
    "meanings": [
      "友情",
      "感謝",
      "優雅",
      "真実の愛"
    ],
    "description": "春の初めに黄金色のポンポンとした小花を枝いっぱいに咲かせ、見る人の心を温めるヨーロッパの春の象徴。「ミモザの日」には感謝を込めて大切な人に贈られます。",
    "category": "花",
    "svgType": "mimosa",
    "flowerColor": "#eab308",
    "secondaryColor": "#f59e0b",
    "bgGradient": "from-yellow-400/20 via-amber-300/10 to-emerald-500/10",
    "rarity": "Super Rare"
  },
  "2-19": {
    "id": "2-19",
    "name": "ハクモクレン（白木蓮）",
    "reading": "はくもくれん",
    "scientificName": "Magnolia denudata",
    "month": 2,
    "day": 19,
    "meanings": [
      "自然への愛",
      "崇高",
      "高潔な心",
      "荘厳"
    ],
    "description": "早春の青空に向かって、純白の大きな花びらを天高く開く気品溢れる花木。何者にも染まらない純粋無垢な「崇高」と「高潔」の美しさを湛えています。",
    "category": "樹木",
    "svgType": "magnolia",
    "flowerColor": "#e0e7ff",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-indigo-400/15 via-emerald-400/10 to-sky-300/15",
    "anniversaryNote": "開発者の家族と同じ誕生日（高潔な白木蓮）",
    "rarity": "Super Rare"
  },
  "2-26": {
    "id": "2-26",
    "name": "ユキヤナギ（雪柳）",
    "reading": "ゆきやなぎ",
    "scientificName": "Spiraea thunbergii",
    "month": 2,
    "day": 26,
    "meanings": [
      "愛らしさ",
      "気まま",
      "殊勝"
    ],
    "description": "しなやかに枝垂れた枝一面に、まるで雪が舞い散るように無数の小花を咲かせます。自由で気ままに春風に揺れる愛らしい姿が人々に愛されています。",
    "category": "花",
    "svgType": "spiraea",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#34d399",
    "bgGradient": "from-emerald-400/10 via-slate-100/30 to-teal-400/10",
    "rarity": "Normal"
  },
  "3-15": {
    "id": "3-15",
    "name": "ワスレナグサ（勿忘草）",
    "reading": "わすれなぐさ",
    "scientificName": "Myosotis",
    "month": 3,
    "day": 15,
    "meanings": [
      "私を忘れないで",
      "真実の愛",
      "誠の愛"
    ],
    "description": "澄みきった青空のような星形の小花を咲かせるロマンチックな花。中世ドイツの騎士伝説に由来し、時空を超えて褪せない「真実の愛」と記憶を胸に刻みます。",
    "category": "花",
    "svgType": "forget_me_not",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-sky-400/20 via-blue-500/15 to-emerald-400/10",
    "rarity": "Super Rare"
  },
  "3-18": {
    "id": "3-18",
    "name": "ハナミズキ（花水木）",
    "reading": "はなみずき",
    "scientificName": "Cornus florida",
    "month": 3,
    "day": 18,
    "meanings": [
      "永続性",
      "返礼",
      "私の想いを受けてください",
      "公平"
    ],
    "description": "春には白やピンクの美しい総苞片を開き、秋には紅葉と赤い実をつける美しい木。日米友好の桜の返礼として日本に贈られた歴史から「返礼」の花言葉を持ちます。",
    "category": "花",
    "svgType": "dogwood",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "3-26": {
    "id": "3-26",
    "name": "シュンラン（春蘭）",
    "reading": "しゅんらん",
    "scientificName": "Cymbidium goeringii",
    "month": 3,
    "day": 26,
    "meanings": [
      "気品",
      "清純",
      "控えめな美"
    ],
    "description": "日本の山林の落葉樹の下にひっそりと佇み、奥ゆかしく香る日本原産の野生蘭。派手さはありませんが、凛としたたたずまいに「気品」と「控えめな美」が宿ります。",
    "category": "花",
    "svgType": "calanthe",
    "flowerColor": "#84cc16",
    "secondaryColor": "#bef264",
    "bgGradient": "from-lime-400/15 via-emerald-400/10 to-green-500/10",
    "subFlowers": [
      {
        "name": "ハナニラ（花韮・イフェイオン）",
        "meanings": ["愛しい人", "別れの悲しみ", "星に願いを"],
        "note": "3月26日の誕生花。春の野原に青白く輝く星型の六弁花を咲かせ、爽やかな芳香を放つ球根草"
      }
    ],
    "rarity": "Normal"
  },
    "3-30": {
    "id": "3-30",
    "name": "エニシダ（金雀枝）",
    "reading": "えにしだ",
    "scientificName": "Cytisus scoparius",
    "month": 3,
    "day": 30,
    "meanings": ["謙遜", "清潔", "博愛", "恋の予感"],
    "description": "春の陽光を浴びて枝いっぱいに黄金色の蝶形花を咲かせるヨーロッパ原産の花木。箒のような細い枝先に無数の小鳥が止まっているように見えます。",
    "category": "花木・落葉低木",
    "svgType": "scotch_broom",
    "flowerColor": "#facc15",
    "secondaryColor": "#ca8a04",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-400/10",
    "triviaList": [
      "魔女が夜空を飛ぶ箒（ほうき）の材料にされたという伝説があり、英語では「Broom」と呼ばれます。",
      "イギリスのプランタジネット朝の王家の紋章（プランタ・ゲニスタ）としても歴史に名を刻んでいます。"
    ]
  },
  "4-18": {
    "id": "4-18",
    "name": "スターチス（リモニウム）",
    "reading": "すたーちす",
    "scientificName": "Limonium sinuatum",
    "month": 4,
    "day": 18,
    "meanings": [
      "変わらぬ心",
      "永遠",
      "途絶えぬ記憶"
    ],
    "description": "花びらのように見える萼（がく）が乾燥しても鮮やかな色を保ち続けるため、ドライフラワーとしても大人気。「永遠に色あせない記憶」を約束する神秘的な花です。",
    "category": "花",
    "svgType": "statice",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-violet-500/15 via-purple-400/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "4-24": {
    "id": "4-24",
    "name": "オオデマリ（大手毬）",
    "reading": "おおでまり",
    "scientificName": "Viburnum plicatum var. sterile",
    "month": 4,
    "day": 24,
    "meanings": [
      "私は誓います",
      "約束を守って",
      "天国"
    ],
    "description": "新緑の季節に、手毬のように真ん丸な純白の花房を枝いっぱいにたわわに実らせます。純白の手毬に想いを込めるように「私は誓います」という誠実な花言葉を持ちます。",
    "category": "花",
    "svgType": "snowball",
    "flowerColor": "#10b981",
    "secondaryColor": "#ecfdf5",
    "bgGradient": "from-emerald-400/15 via-green-300/10 to-teal-400/15",
    "rarity": "Rare"
  },
  "4-26": {
    "id": "4-26",
    "name": "スカビオサ（松虫草）",
    "reading": "すかびおさ",
    "scientificName": "Scabiosa atropurpurea",
    "month": 4,
    "day": 26,
    "meanings": [
      "魅力",
      "不幸な愛",
      "私はすべてを失った"
    ],
    "description": "西洋では哀愁を帯びた深いパープルやワインレッドのクッションのような花姿から切ない花言葉もありますが、同時に人々を惹きつけてやまない唯一無二の「圧倒的な魅力」を誇ります。",
    "category": "花",
    "svgType": "scabiosa",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-400/10 to-emerald-500/10",
    "rarity": "Super Rare"
  },
  "5-9": {
    "id": "5-9",
    "name": "シャクナゲ（石楠花）",
    "reading": "しゃくなげ",
    "scientificName": "Rhododendron",
    "month": 5,
    "day": 9,
    "meanings": [
      "威厳",
      "荘厳",
      "警戒",
      "危険"
    ],
    "description": "高嶺に君臨する「花木の女王」。圧倒的な大輪の美しさを誇る一方、険しい岩場に自生し葉に毒性を持つことから「警戒」「危険」というミステリアスな花言葉が与えられました。",
    "category": "花",
    "svgType": "rhododendron",
    "flowerColor": "#ec4899",
    "secondaryColor": "#9333ea",
    "bgGradient": "from-purple-500/15 via-pink-400/10 to-emerald-500/10",
    "rarity": "Super Rare"
  },
  "5-17": {
    "id": "5-17",
    "name": "カキツバタ（杜若）",
    "reading": "かきつばた",
    "scientificName": "Iris laevigata",
    "month": 5,
    "day": 17,
    "meanings": [
      "幸せは必ず来る",
      "贈り物",
      "音信"
    ],
    "description": "水辺に清らかに咲く万葉集ゆかりの日本古来の雅な花。「いずれアヤメかカキツバタ」と称され、「待っていれば幸せな便りは必ず届く」という希望に満ちた言霊を宿します。",
    "category": "花",
    "svgType": "iris",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#a78bfa",
    "bgGradient": "from-indigo-500/15 via-violet-400/10 to-teal-500/10",
    "subFlowers": [
      {
        "name": "ジャガイモ（馬鈴薯）",
        "meanings": ["慈愛", "情け深い", "恩恵"],
        "note": "5月17日の誕生花。ナス科特有の紫や白の星形花を咲かせ、人々の命を支えてきた大地の恵み"
      }
    ],
    "rarity": "Rare"
  },
  "5-18": {
    "id": "5-18",
    "name": "サフィニア",
    "reading": "さふぃにあ",
    "scientificName": "Petunia x hybrida (Surfinia)",
    "month": 5,
    "day": 18,
    "meanings": [
      "咲きたての笑顔",
      "心のやすらぎ"
    ],
    "description": "波のようにあふれる花付きと華やかな笑顔をもたらすペチュニアの園芸品種。見る人をパッと明るく元気づけ、「咲きたての笑顔」と安らぎを届けてくれます。",
    "category": "花",
    "svgType": "petunia",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-400/15 via-emerald-400/10 to-amber-300/10",
    "rarity": "Normal"
  },
  "6-7": {
  "id": "6-7",
  "name": "クチナシ（梔子）",
  "reading": "くちなし",
  "scientificName": "Gardenia jasminoides",
  "month": 6,
  "day": 7,
  "meanings": [
    "とても幸せです",
    "優雅",
    "喜びを運ぶ"
  ],
  "description": "初夏の雨上がりに純白の八重・一重の花を咲かせ、甘く濃厚な芳香を漂わせる名木。三大香木の一つに数えられ、「とても幸せです」「喜びを運ぶ」という幸福の花言葉を持ちます。",
  "category": "花木",
  "svgType": "gardenia",
  "flowerColor": "#f8fafc",
  "secondaryColor": "#fef08a",
  "bgGradient": "from-amber-200/15 via-yellow-100/10 to-emerald-500/10",
  "subFlowers": [
    {
      "name": "ベンジャミン（フィカス・ベンジャミナ）",
      "reading": "べんじゃみん",
      "meanings": [
        "融通の利く仲間",
        "信頼",
        "家族の絆"
      ],
      "note": "緑陰の観葉植物（編み込み幹と艶やかな緑葉が人気の幸福樹）"
    }
  ],
  "triviaList": [
    "初夏を告げる甘い香りは香水の原料としても世界中で愛好されます。",
    "6/7の補足席には「家族の絆・信頼」の花言葉を持つベンジャミンが爽やかに同席！",
    "熟しても実が割れない（口が開かない）ことから「口無し」と名付けられました。"
  ],
  "rarity": "Normal"
},
  "6-8": {
    "id": "6-8",
    "name": "デイゴ（梯梧）",
    "reading": "でいご",
    "scientificName": "Erythrina variegata",
    "month": 6,
    "day": 8,
    "meanings": [
      "夢",
      "活力",
      "生命力",
      "和"
    ],
    "description": "初夏の青空に向かって燃え立つ炎のような鮮烈な深紅の花を咲かせるマメ科の熱帯高木。沖縄県の県花として知られ、力強く咲き誇る姿から「夢」「活力」「生命力」「和」の象徴として愛されます。",
    "category": "花木",
    "svgType": "deigo",
    "flowerColor": "#dc2626",
    "secondaryColor": "#f87171",
    "bgGradient": "from-red-600/15 via-rose-500/10 to-amber-500/10",
    "triviaList": [
      "沖縄県の県花に指定されており、名曲『島唄』の歌詞（でいごの花が咲き〜）でも全国的に親しまれています。",
      "刀やオウムのくちばし、炎の舌を思わせる独特の美しい花弁（旗弁）が総状に連なって咲きます。",
      "春から初夏にかけてデイゴの花が見事に咲き乱れる年は、台風が少なく豊作になるという南国の言い伝えがあります。"
    ],
    "rarity": "Normal"
  },


  "6-29": {
    "id": "6-29",
    "name": "アナベル（アメリカノリノキ）",
    "reading": "あなべる",
    "scientificName": "Hydrangea arborescens Annabelle",
    "month": 6,
    "day": 29,
    "meanings": [
      "ひたむきな愛",
      "辛抱強い愛情"
    ],
    "description": "緑のつぼみから真っ白な巨大なドーム状の花へと変化し、雨の中でも気高く立ち続ける西洋アジサイ。「ひたむきに相手を想い続ける愛」の象徴です。",
    "category": "花",
    "svgType": "hydrangea",
    "flowerColor": "#10b981",
    "secondaryColor": "#f8fafc",
    "bgGradient": "from-emerald-400/15 via-teal-200/15 to-green-400/15",
    "rarity": "Normal"
  },
  "7-5": {
    "id": "7-5",
    "name": "サラセニア",
    "reading": "さらせにあ",
    "scientificName": "Sarracenia",
    "month": 7,
    "day": 5,
    "meanings": [
      "憩い",
      "息抜き",
      "風変わりな"
    ],
    "description": "筒状の捕虫葉を持つユニークな食虫植物。虫を捕らえる驚きの生態を持ちながら、花言葉はなんと「憩い」「息抜き」というギャップが最高に魅力的です。",
    "category": "食虫植物",
    "svgType": "sarracenia",
    "flowerColor": "#84cc16",
    "secondaryColor": "#e11d48",
    "bgGradient": "from-lime-500/15 via-emerald-600/15 to-rose-500/10",
    "rarity": "Super Rare"
  },
  "7-10": {
    "id": "7-10",
    "name": "トマト",
    "reading": "とまと",
    "scientificName": "Solanum lycopersicum",
    "month": 7,
    "day": 10,
    "meanings": [
      "感謝",
      "完成美",
      "完成した美"
    ],
    "description": "太陽の恵みをいっぱいに浴びて真っ赤に実るトマト。黄色い可憐な花を咲かせたあとに実る完璧な球体の造形美から「完成美」「心からの感謝」の花言葉が生まれました。",
    "category": "野菜・実",
    "svgType": "tomato",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-500/15 via-orange-400/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "7-14": {
    "id": "7-14",
    "name": "モウセンゴケ（毛氈苔）",
    "reading": "もうせんごけ",
    "scientificName": "Drosera",
    "month": 7,
    "day": 14,
    "meanings": [
      "物思い",
      "無心",
      "不誠実"
    ],
    "description": "葉一面にキラキラ光る朝露のような粘液の球をまとい、静かに虫を待ち受ける食虫植物。静寂の中で何かを深く哲学しているような佇まいから「物思い」と呼ばれます。",
    "category": "食虫植物",
    "svgType": "sundew",
    "flowerColor": "#059669",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-emerald-500/15 via-rose-400/15 to-teal-400/10",
    "rarity": "Super Rare"
  },
  "7-16": {
    "id": "7-16",
    "name": "ポーチュラカ（ハナスベリヒユ）",
    "reading": "ぽーちゅらか",
    "scientificName": "Portulaca oleracea",
    "month": 7,
    "day": 16,
    "meanings": [
      "いつも元気",
      "無邪気",
      "自然を愛する"
    ],
    "description": "ギラギラの真夏の直射日光にもへこたれず、ビタミンカラーの花を次々と咲かせるエネルギッシュな植物。「いつも元気」でいる勇気をくれます。",
    "category": "花",
    "svgType": "purslane",
    "flowerColor": "#f97316",
    "secondaryColor": "#fde047",
    "bgGradient": "from-orange-400/15 via-yellow-300/15 to-emerald-400/10",
    "rarity": "Normal"
  },
  "7-21": {
    "id": "7-21",
    "name": "トケイソウ（時計草）",
    "reading": "とけいそう",
    "scientificName": "Passiflora caerulea",
    "month": 7,
    "day": 21,
    "meanings": [
      "聖なる愛",
      "信仰",
      "宗教的な情熱"
    ],
    "description": "文字盤や時針・分針・秒針のような神秘的な幾何学模様の花を咲かせます。キリストの受難劇を想起させる構造から「聖なる愛」という崇高な花言葉を持ちます。",
    "category": "花",
    "svgType": "passion_flower",
    "flowerColor": "#6366f1",
    "secondaryColor": "#38bdf8",
    "bgGradient": "from-indigo-500/15 via-cyan-400/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "8-4": {
    "id": "8-4",
    "name": "リボングラス（十文字草・縞葦）",
    "reading": "りぼんぐらす",
    "scientificName": "Phalaris arundinacea var. picta",
    "month": 8,
    "day": 4,
    "meanings": [
      "風格",
      "素直な心"
    ],
    "description": "白と緑の美しいストライプが涼しげに風にそよぐオーナメンタルグラス。どんな風にもしなやかに身を委ねる柔軟性と、凛とした「素直な心」「風格」を兼ね備えます。",
    "category": "観葉・ハーブ",
    "svgType": "ribbongrass",
    "flowerColor": "#10b981",
    "secondaryColor": "#dcfce7",
    "bgGradient": "from-emerald-400/15 via-teal-300/10 to-green-500/15",
    "rarity": "Rare"
  },
  "9-1": {
    "id": "9-1",
    "name": "チグリジア（虎百合・タイガーフラワー）",
    "reading": "ちぐりじあ",
    "scientificName": "Tigridia pavonia",
    "month": 9,
    "day": 1,
    "meanings": [
      "私を愛して",
      "誇らしく思う"
    ],
    "description": "中央にエキゾチックな豹柄や虎斑を持ち、鮮烈な3枚の花びらを広げるメキシコ原産の球根花。たった一日だけ咲き誇る潔さと、堂々たる「誇り」に満ちています。",
    "category": "花",
    "svgType": "tigridia",
    "flowerColor": "#ea580c",
    "secondaryColor": "#facc15",
    "bgGradient": "from-orange-500/15 via-amber-400/10 to-emerald-500/10",
    "rarity": "Super Rare"
  },
  "9-13": {
  "id": "9-13",
  "name": "カンナ（花魁・福寿草）",
  "reading": "かんな",
  "scientificName": "Canna indica",
  "month": 9,
  "day": 13,
  "meanings": [
    "情熱",
    "快活",
    "永遠",
    "熱い思い"
  ],
  "description": "真夏の太陽から初秋の空へと情熱的な深紅や鮮黄色の花を咲かせるカンナ。「情熱」「快活」「永遠」という、生命の躍動感あふれる花言葉を誇ります。秋の七草クズと可憐なタマスダレが補足席として温かく寄り添います。",
  "category": "球根・熱帯花",
  "svgType": "tropical",
  "flowerColor": "#ea580c",
  "secondaryColor": "#fef08a",
  "bgGradient": "from-orange-500/15 via-red-400/10 to-amber-300/10",
  "subFlowers": [
    {
      "name": "クズ（葛）",
      "reading": "くず",
      "meanings": [
        "芯の強さ",
        "活力",
        "治癒"
      ],
      "note": "秋の七草。驚異的な生命力で大地を覆い、甘い香りの紅紫花を咲かせる薬効の木"
    },
    {
      "name": "タマスダレ（玉簾・レインリリー）",
      "reading": "たますだれ",
      "meanings": [
        "汚れなき愛",
        "期待",
        "清純な愛"
      ],
      "note": "雨の後に一斉に真っ白な星形の花を開くヒガンバナ科の可憐草"
    }
  ],
  "triviaList": [
    "カンナは仏陀の足元から流れた血から咲いたという仏教伝説を持つ神聖な花でもあります。",
    "9/13の席には秋の七草の代表格「クズ」と純白の「タマスダレ」が補足植物として同席しています！",
    "情熱と快活のエネルギーにあふれ、夏の終わりから秋にかけて庭を鮮やかに彩ります。"
  ],
  "rarity": "Normal"
},

  "9-22": {
    "id": "9-22",
    "name": "ミソハギ（禊萩）",
    "reading": "みそはぎ",
    "scientificName": "Lythrum ancestrum",
    "month": 9,
    "day": 22,
    "meanings": [
      "悲哀",
      "慈愛",
      "愛の悲しみ"
    ],
    "description": "水辺にすっと直立して紅紫色の小花を無数に咲かせ、お盆の禊（みそぎ）の花として先祖を偲ぶ際に使われます。静かで深い「慈愛」を湛えています。",
    "category": "花",
    "svgType": "loosestrife",
    "flowerColor": "#d946ef",
    "secondaryColor": "#f0abfc",
    "bgGradient": "from-fuchsia-500/15 via-rose-300/10 to-teal-500/10",
    "rarity": "Normal"
  },
  "9-25": {
    "id": "9-25",
    "name": "ノボタン（野牡丹・シコンノボタン）",
    "reading": "のぼたん",
    "scientificName": "Tibouchina urvilleana",
    "month": 9,
    "day": 25,
    "meanings": [
      "平静",
      "ひたむきな愛情",
      "自然"
    ],
    "description": "秋の澄んだ空気の中にビロードのような深紫色の五弁花を咲かせる熱帯花木。紫紺（しこん）の鮮烈な気品と、雄しべが蜘蛛の足のように湾曲するユニークな造形を持ちます。",
    "category": "樹木",
    "svgType": "orchid",
    "flowerColor": "#6b21a8",
    "secondaryColor": "#a855f7",
    "bgGradient": "from-purple-700/15 via-indigo-400/10 to-teal-500/10",
    "triviaList": [
      "牡丹に匹敵するほど美しい野の花ということから「野牡丹」と名付けられました。",
      "紫の花弁に突き出る雄しべが蜘蛛の足に似ていることから、英名「Spider flower」とも呼ばれます。",
      "一日花ですが次から次へと新しい蕾が毎日咲き続け、秋の庭を鮮烈な紫に染め上げます。"
    ],
    "rarity": "Normal"
  },
  "9-27": {
    "id": "9-27",
    "name": "マダガスカルジャスミン",
    "reading": "まだがるかるじゃすみん",
    "scientificName": "Stephanotis floribunda",
    "month": 9,
    "day": 27,
    "meanings": [
      "清らかな祈り",
      "愛される花嫁",
      "二人で東へ旅立つ"
    ],
    "description": "肉厚でつややかな濃緑の葉に、純白の星形の花を咲かせるつる性植物。甘く高貴な香りと純潔な美しさからブライダルブーケとしても大人気です。",
    "category": "花",
    "svgType": "jasmine",
    "flowerColor": "#059669",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-emerald-500/15 via-teal-300/10 to-sky-300/10",
    "rarity": "Super Rare"
  },
  "10-1": {
    "id": "10-1",
    "name": "ハギ（萩）",
    "reading": "はぎ",
    "scientificName": "Lespedeza thunbergii",
    "month": 10,
    "day": 1,
    "meanings": [
      "思案",
      "想い",
      "前向きな恋"
    ],
    "description": "秋風に揺れる優雅な枝垂れ姿と赤紫色の小花が古くから万葉人に詠まれた秋の七草の筆頭。物思いに耽る季節に、「前を向いて歩む恋」をそっと後押しします。",
    "category": "花",
    "svgType": "bush_clover",
    "flowerColor": "#db2777",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "rarity": "Normal"
  },
  "10-3": {
    "id": "10-3",
    "name": "カエデ（楓・モミジ）",
    "reading": "かえで",
    "scientificName": "Acer palmatum",
    "month": 10,
    "day": 3,
    "meanings": [
      "大切な思い出",
      "美しい変化",
      "遠慮"
    ],
    "description": "緑から鮮やかな紅や黄色へとドラマチックに衣替えする日本の秋の美の象徴。時が経つにつれて美しく成熟していく人生の「大切な思い出」を優しく彩ります。",
    "category": "樹木",
    "svgType": "maple",
    "flowerColor": "#dc2626",
    "secondaryColor": "#f97316",
    "bgGradient": "from-red-500/15 via-amber-400/15 to-emerald-500/10",
    "rarity": "Rare"
  },
  "10-6": {
    "id": "10-6",
    "name": "コスモス（秋桜）",
    "reading": "こすもす",
    "scientificName": "Cosmos bipinnatus",
    "month": 10,
    "day": 6,
    "meanings": [
      "乙女の真心",
      "調和",
      "謙虚"
    ],
    "description": "澄み渡る秋晴れの野に、群れ咲いて風に揺れる可憐な花。ギリシャ語の「秩序・美しい調和」を語源に持ち、誰からも愛される純真な真心を表します。",
    "category": "花",
    "svgType": "cosmos",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fce7f3",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-emerald-500/10",
    "rarity": "Normal"
  },
  "12-11": {
  "id": "12-11",
  "name": "アザレア（西洋ツツジ）",
  "reading": "あざれあ",
  "scientificName": "Rhododendron simsii cv.",
  "month": 12,
  "day": 11,
  "meanings": [
    "愛の喜び",
    "充足",
    "満ち足りた心"
  ],
  "description": "冬の温室や室内をフリルのような豪華な花弁で華やかに彩るベルギー生まれの西洋ツツジ。「愛の喜び」「充足」という、心温まる冬の幸福を届けます。",
  "category": "花木・鉢花",
  "svgType": "camellia",
  "flowerColor": "#db2777",
  "secondaryColor": "#fbcfe8",
  "bgGradient": "from-pink-500/15 via-rose-300/10 to-indigo-500/10",
  "subFlowers": [
    {
      "name": "白バラ（白薔薇）",
      "reading": "しろばら",
      "meanings": [
        "純潔",
        "深い尊敬",
        "私はあなたにふさわしい"
      ],
      "note": "冬に咲く純白の調べ（気品あふれる白バラが静かに寄り添う席）"
    }
  ],
  "triviaList": [
    "日本のサツキやツツジがヨーロッパに渡り、豪華なフリル咲きに品種改良された逆輸入花です！",
    "補足席には「深い尊敬」「純潔」の花言葉を持つ白バラが気品高く同席しています。",
    "乾燥した土地を好むことから、ギリシャ語の「azaleos（乾燥した）」がアザレアの語源です。"
  ],
  "rarity": "Normal"
},

  "12-21": {
    "id": "12-21",
    "name": "スペアミント",
    "reading": "すぺあみんと",
    "scientificName": "Mentha spicata",
    "month": 12,
    "day": 21,
    "meanings": [
      "美徳",
      "温かい心",
      "思いやり"
    ],
    "description": "清涼感あふれる爽やかな甘い香りで世界中を癒やすハーブ。古くから旅人をもてなすハーブティーとして振る舞われたことから「温かい心」の花言葉が贈られました。",
    "category": "観葉・ハーブ",
    "svgType": "spearmint",
    "flowerColor": "#10b981",
    "secondaryColor": "#6ee7b7",
    "bgGradient": "from-emerald-500/15 via-teal-400/15 to-green-300/10",
    "rarity": "Rare"
  },
    "12-22": {
    "id": "12-22",
    "name": "セントポーリア（アフリカスミレ）",
    "reading": "せんとぽーりあ",
    "scientificName": "Saintpaulia",
    "month": 12,
    "day": 22,
    "meanings": ["小さな愛", "深窓の美女", "親しみ深い"],
    "description": "ビロードのような起毛葉と鮮やかな小花が愛らしく「室内園芸の女王」と讃えられます。控えめながら気品ある美しさを放ちます。",
    "category": "観葉植物・多年草",
    "svgType": "saintpaulia",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-purple-500/15 via-indigo-300/10 to-teal-400/10",
    "subFlowers": [
      {
        "name": "ジニア（百日草）",
        "meanings": ["不在の友を思う", "絆", "幸福"],
        "note": "百日もの長い間咲き続ける丈夫な花"
      }
    ],
    "triviaList": [
      "東アフリカのタンザニアの山岳地帯で発見され、発見者のサン・ポール男爵にちなんで名付けられました。"
    ]
  },
  "1-7": {
    "id": "1-7",
    "name": "セリ（芹）",
    "reading": "せり",
    "scientificName": "Oenanthe javanica",
    "month": 1,
    "day": 7,
    "meanings": [
      "清廉で高潔",
      "清楚な花",
      "貧しくても高潔"
    ],
    "description": "春の七草の筆頭として知られる清らかな水辺の多年草。古来より新年の無病息災を祈る七草粥に用いられ、みずみずしい芳香と凛とした白い小花を咲かせます。",
    "category": "野菜・実",
    "svgType": "herb",
    "flowerColor": "#10b981",
    "secondaryColor": "#ecfdf5",
    "bgGradient": "from-emerald-500/15 via-teal-300/10 to-green-500/10",
    "triviaList": [
      "春の七草の筆頭で、1月7日の「人日の節句」に七草粥として食べる伝統行事があります。",
      "競い合うように群生して生える様子から「競（せ）り」と名付けられたと言われています。",
      "清らかな清流や水田に自生し、ビタミンCやミネラルが豊富な日本原産の滋養ハーブです。"
    ]
  },
  "1-22": {
    "id": "1-22",
    "name": "オウバイ（黄梅）",
    "reading": "おうばい",
    "scientificName": "Jasminum nudiflorum",
    "month": 1,
    "day": 22,
    "meanings": [
      "恩恵",
      "優美",
      "控えめな美"
    ],
    "description": "早春、まだ葉が出る前の枝に鮮やかな黄金色の花を凛と咲かせるジャスミンの仲間。中国では「迎春花」と呼ばれ、春の訪れをいち早く知らせる縁起木です。",
    "category": "樹木",
    "svgType": "jasmine",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-emerald-500/10",
    "triviaList": [
      "「梅」と名が付きますが、バラ科のウメではなくモクセイ科ジャスミン属の植物です。",
      "中国では春を告げる花として「迎春花（インチュンファ）」と呼ばれ、旧正月を祝う花として愛されています。",
      "つる性の枝がしだれて咲く姿は優雅で、日本庭園の石垣や生垣にも好んで植えられます。"
    ]
  },
  "1-28": {
      "id": "1-28",
      "name": "ネモフィラ（瑠璃唐草）",
      "reading": "ねもふぃら",
      "scientificName": "Nemophila menziesii",
      "month": 1,
      "day": 28,
      "meanings": [
          "可憐",
          "どこでも成功",
          "清々しい心"
      ],
      "description": "空と大地を繋ぐような澄んだスカイブルーの花びらを持つ可憐な春の使者。群生して咲く姿はまるで青い絨毯のようです。",
      "category": "草花",
      "svgType": "nemophila",
      "flowerColor": "#38bdf8",
      "secondaryColor": "#ffffff",
      "bgGradient": "from-sky-500/15 via-blue-400/10 to-teal-500/10",
      "subFlowers": [
          {
              "name": "ハツユキソウ（初雪草）",
              "meanings": [
                  "好奇心",
                  "祝福",
                  "穏やかな生活"
              ],
              "note": "雪をかぶったような白斑の美しい葉"
          }
      ],
      "triviaList": [
          "ギリシャ語の「nemos（小さな森）」と「phileo（愛する）」が語源です。",
          "英語では「Baby blue eyes（赤ちゃんの青い瞳）」と親しまれています。"
      ]
  },
    "2-6": {
    "id": "2-6",
    "name": "ギョリュウバイ（御柳梅）",
    "reading": "ぎょりゅうばい",
    "scientificName": "Leptospermum scoparium",
    "month": 2,
    "day": 6,
    "meanings": [
      "蜜月",
      "濃厚な愛",
      "素朴な強さ",
      "華やいだ生活"
    ],
    "description": "ニュージーランド原産で高級マヌカハニーの蜜源としても名高い常緑低木。梅に似た深紅や濃いピンクの小花が枝いっぱいに咲き誇り、甘美な香りと強健な生命力を誇ります。",
    "category": "花木",
    "svgType": "manuka",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-400/10 to-amber-200/10",
    "subFlowers": [
      {
        "name": "ピンクのスミレ（菫）",
        "meanings": ["愛", "希望", "純潔"],
        "note": "2月6日の伝統誕生花"
      }
    ],
    "triviaList": [
      "葉が中国の樹木「御柳（ギョリュウ）」に、花が「梅」に似ていることから名付けられました。",
      "世界的に希少で高い抗菌力を持つ「マヌカハニー」はこのギョリュウバイの花蜜から作られます。",
      "ニュージーランドの先住民族マオリ族は、古くからその葉を煎じて薬用茶として愛飲していました。"
    ]
  },
  "2-10": {
    "id": "2-10",
    "name": "ジンチョウゲ（沈丁花）",
    "reading": "じんちょうげ",
    "scientificName": "Daphne odora",
    "month": 2,
    "day": 10,
    "meanings": [
      "栄光",
      "不死",
      "永遠"
    ],
    "description": "春の訪れを知らせる三大香木の一つ。早春に肉厚で上品な小花を毬状に咲かせ、甘く芳醇な香りは遠くまで漂い、永久の繁栄を讃えます。",
    "category": "樹木",
    "svgType": "daphne",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fdf2f8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "香りの良さを「沈香（じんこう）」、花の姿を「丁子（クローブ）」に例えて「沈丁花」と名付けられました。",
      "春のジンチョウゲ、夏のクチナシ、秋のキンモクセイとともに「三大香木」に数えられます。",
      "一年中瑞々しい緑の葉を保つ常緑樹であることから「不死」「永遠」の花言葉が生まれました。"
    ]
  },
  "2-13": {
    "id": "2-13",
    "name": "エーデルワイス",
    "reading": "えーでるわいす",
    "scientificName": "Leontopodium nivale",
    "month": 2,
    "day": 13,
    "meanings": [
      "大切な思い出",
      "尊い思い",
      "勇気"
    ],
    "description": "アルプスの高山、険しい雪山や断崖に凛として咲く純白のキク科植物。花びら全体が柔らかな白い綿毛に包まれており、「アルプスの女王」と称えられる気高き花です。",
    "category": "花",
    "svgType": "edelweiss",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#cbd5e1",
    "bgGradient": "from-slate-300/20 via-sky-200/15 to-emerald-500/10",
    "anniversaryNote": "LSI芋虫の誕生日",
    "triviaList": [
      "ドイツ語で「edel（高貴な）」と「weiß（白）」を組み合わせた「気高き白」を意味する名を持ちます。",
      "危険な断崖絶壁に自生するため、昔の若者が愛する人のために命がけで摘み取ったことから「勇気」の花言葉がつきました。",
      "スイスの国花であり、ミュージカル『サウンド・オブ・ミュージック』の名曲でも世界中で愛されています。"
    ]
  },
  "2-14": {
    "id": "2-14",
    "name": "カカオ（ココア）",
    "reading": "かかお",
    "scientificName": "Theobroma cacao",
    "month": 2,
    "day": 14,
    "meanings": [
      "神聖",
      "親愛",
      "片思い"
    ],
    "description": "チョコレートの原料となる熱帯の神聖な樹木。「神々の食べ物」として珍重され、バレンタインデーに心を込めて贈る「親愛」と「片思い」の象徴です。",
    "category": "熱帯果樹",
    "svgType": "cacao",
    "flowerColor": "#78350f",
    "secondaryColor": "#fef3c7",
    "bgGradient": "from-amber-600/15 via-orange-500/10 to-yellow-600/15",
    "anniversaryNote": "バレンタインデー（親愛と片思いのカカオ）",
    "rarity": "Super Rare"
  },
  "2-15": {
    "id": "2-15",
    "name": "デイジー（雛菊）",
    "reading": "でいじー",
    "scientificName": "Bellis perennis",
    "month": 2,
    "day": 15,
    "meanings": [
      "平和",
      "希望",
      "純潔"
    ],
    "description": "日の出とともに花を開き、夕暮れに花びらを閉じる姿から「Day's eye（日の瞳）」と名付けられた光の花。素朴で純真な愛らしさは、見る人の心に希望を灯します。",
    "category": "花",
    "svgType": "daisy",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-200/10 to-teal-500/10",
    "triviaList": [
      "太陽の光を受けて咲くことから英語の「Day’s eye（太陽の目）」が「デイジー」に変化しました。",
      "シェイクスピアの劇作にも頻繁に登場し、春の無垢な純真さと平和のシンボルとされています。",
      "イタリアの国花としても親しまれ、可憐で丈夫な性質が愛されています。"
    ]
  },
  "2-20": {
    "id": "2-20",
    "name": "マーガレット",
    "reading": "まーがれっと",
    "scientificName": "Argyranthemum frutescens",
    "month": 2,
    "day": 20,
    "meanings": [
      "恋占い",
      "真実の愛",
      "信頼"
    ],
    "description": "ギリシャ語の「マルガリーテス（真珠）」を語源とする清楚な白花。「好き、嫌い…」と花びらを一枚ずつ摘む花占いの代名詞として世界中で愛されてきました。",
    "category": "花",
    "svgType": "marguerite",
    "flowerColor": "#ffffff",
    "secondaryColor": "#facc15",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-green-500/10",
    "triviaList": [
      "花占いで有名なマーガレットですが、花びらの枚数は奇数になることが多いため「好き」で終わる確率が高いという秘密があります。",
      "カナリア諸島原産で、17世紀にヨーロッパへ渡り、フランス王妃マリー・アントワネットが愛した花としても知られます。",
      "木質化して低木のようになることから、和名では「木春菊（モクシュンギク）」と呼ばれます。"
    ]
  },
  "2-21": {
    "id": "2-21",
    "name": "スミレ（菫）",
    "reading": "すみれ",
    "scientificName": "Viola mandshurica",
    "month": 2,
    "day": 21,
    "meanings": [
      "謙虚",
      "誠実",
      "小さな幸せ"
    ],
    "description": "春の訪れとともに道端や石垣の隙間に慎ましく咲く日本の代表的野花。大工道具の「墨入れ」に似た距（きょ）の形から名づけられ、深紫の気品ある佇まいが心を癒やします。",
    "category": "花",
    "svgType": "violet",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-purple-500/15 via-violet-300/10 to-teal-500/10",
    "triviaList": [
      "花の形が大工道具の「墨入れ（墨壺）」に似ていることから「すみれ」と呼ばれるようになったという説が有力です。",
      "古代ギリシャやローマでは、頭痛を和らげる薬草や香水の原料として重宝されていました。",
      "道端の舗装の隙間でも健気に咲き誇る姿から「小さな幸せ」という優しい花言葉が生まれました。"
    ]
  },
  "2-22": {
    "id": "2-22",
    "name": "ローダンセ（広花簪）",
    "reading": "ろーだんせ",
    "scientificName": "Rhodanthe manglesii",
    "month": 2,
    "day": 22,
    "meanings": [
      "永遠の愛",
      "終わりのない友情",
      "飛翔"
    ],
    "description": "ピンクや白のカサカサとした紙細工のような花びらを持つオーストラリア原産の花。乾燥しても色褪せないことからドライフラワーの代表格として「永遠の愛」を伝えます。",
    "category": "花",
    "svgType": "rhodanthe",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ語の「rhodon（バラ）」と「anthos（花）」が合わさった優雅な学名を持ちます。",
      "花びらは水分が少なく乾燥しても色褪せないため、ドライフラワーにしても何年も鮮やかなピンクを保ちます。",
      "和名「広花簪（ヒロハナカンザシ）」のとおり、昔の女性の髪飾り簪（かんざし）のようにも愛でられました。"
    ]
  },
  "2-25": {
  "id": "2-25",
  "name": "ユッカ（青年の木）",
  "reading": "ゆっか",
  "scientificName": "Yucca elephantipes",
  "month": 2,
  "day": 25,
  "meanings": [
    "勇壮",
    "颯爽",
    "偉大"
  ],
  "description": "太い幹から剣のようなシャープな葉を力強く上向きに伸ばす観葉植物。「青年の木」とも呼ばれ、どんな過酷な乾燥にも耐えてスクスク伸びる姿から「勇壮」「颯爽」を讃えられます。",
  "category": "観葉植物",
  "svgType": "yucca",
  "flowerColor": "#047857",
  "secondaryColor": "#6ee7b7",
  "bgGradient": "from-emerald-700/15 via-teal-400/10 to-green-600/15",
  "subFlowers": [
    {
      "name": "カランコエ",
      "reading": "からんこえ",
      "meanings": [
        "幸福を告げる",
        "たくさんの小さな思い出",
        "あなたを守る"
      ],
      "note": "小さな星形の小花を密集させて咲かせる愛らしい多肉植物"
    }
  ],
  "triviaList": [
    "成長力旺盛で上へ上へと真っ直ぐ伸びることから、新築祝いや開店祝いの定番樹！",
    "補足席には「幸福を告げる」花言葉を持つ可憐な「カランコエ」が華を添えています。",
    "中米の乾燥地帯原産で、力強く前進する若人のエネルギーの象徴です。"
  ],
  "rarity": "Normal"
},

  "2-29": {
  "id": "2-29",
  "name": "スギ（杉）",
  "reading": "すぎ",
  "scientificName": "Cryptomeria japonica",
  "month": 2,
  "day": 29,
  "meanings": [
    "深遠",
    "雄大",
    "君のために生きる"
  ],
  "description": "四年に一度のうるう年・2月29日を守護する日本の巨樹。数千年を生き抜く縄文杉のように悠久の思索を湛え、「深遠」「雄大」の象徴とされます。",
  "category": "常緑針葉樹",
  "svgType": "cedar",
  "flowerColor": "#166534",
  "secondaryColor": "#86efac",
  "bgGradient": "from-emerald-700/20 via-green-600/15 to-teal-500/10",
  "subFlowers": [
    {
      "name": "ヨモギ（蓬）",
      "reading": "よもぎ",
      "meanings": [
        "幸福",
        "平和",
        "夫婦愛",
        "平穏"
      ],
      "note": "生命力あふれる春の薬草（草餅の香りと邪気を払うハーブ）"
    }
  ],
  "triviaList": [
    "四年に一度の2月29日！「神代杉」「屋久杉」など、日本の歴史と精神を見守り続けてきた長寿樹です。",
    "補足席には春を告げる逞しい薬草「ヨモギ」が同席！草餅の香りと邪気払いの知恵を添えます。",
    "学名「Cryptomeria japonica」は「隠された日本の財宝」という意味を持つ誇り高き固有種です。"
  ],
  "rarity": "Super Rare"
},

  "3-3": {
    "id": "3-3",
    "name": "モモ（桃）",
    "reading": "もも",
    "scientificName": "Prunus persica",
    "month": 3,
    "day": 3,
    "meanings": [
      "天下無敵",
      "チャーミング",
      "気立ての良さ"
    ],
    "description": "3月3日のひな祭りに欠かせない春の慶花。中国では古来より桃には邪気を祓い不老長寿をもたらす仙木としての強い魔力があると信じられ、災厄を退ける「天下無敵」の花です。",
    "category": "樹木",
    "svgType": "peach",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-teal-500/10",
    "anniversaryNote": "桃の節句（上巳の節句）",
    "triviaList": [
      "昔話『桃太郎』で鬼退治をするのは、中国の陰陽五行思想で桃が邪気を祓う最強の仙果とされたことに由来します。",
      "ひな祭りに飾る風習は、桃の花を浸した「白酒」を飲んで無病息災を祈った平安時代の宮中行事が始まりです。",
      "花だけでなく果実や葉も古くから薬効があるとされ、健康と不老長寿の象徴として親しまれてきました。"
    ]
  },
  "3-12": {
    "id": "3-12",
    "name": "ネコヤナギ（猫柳）",
    "reading": "ねこやなぎ",
    "scientificName": "Salix chaenomeloides",
    "month": 3,
    "day": 12,
    "meanings": [
      "自由",
      "率直",
      "思いのまま"
    ],
    "description": "早春の水辺で銀白色のふわふわとした毛に包まれた花穂をつけるヤナギの仲間。まるで子猫のしっぽを思わせる温かな手触りと愛らしさで、春の訪れをまっすぐに告げます。",
    "category": "樹木",
    "svgType": "willow",
    "flowerColor": "#94a3b8",
    "secondaryColor": "#e2e8f0",
    "bgGradient": "from-slate-400/15 via-emerald-300/10 to-teal-500/10",
    "triviaList": [
      "銀色に輝くふわふわの花穂がまるで愛らしい子猫の尻尾のようなので「猫柳」と命名されました。",
      "川岸や湿地など水辺を好み、春先になるといち早く花穂を出して春の息吹を感じさせてくれます。",
      "生け花や茶花としても重宝され、しなやかで折れにくい枝は生命力の象徴とされます。"
    ]
  },
  "3-20": {
    "id": "3-20",
    "name": "スイートピー",
    "reading": "すいーとぴー",
    "scientificName": "Lathyrus odoratus",
    "month": 3,
    "day": 20,
    "meanings": [
      "門出",
      "優しい思い出",
      "永遠の喜び"
    ],
    "description": "蝶が今にも羽ばたき飛び立とうとしているような優美な花姿と、フルーティーで甘い芳香を持つマメ科の花。旅立ちと新たな出会いの季節である春の門出を優しく祝福します。",
    "category": "花",
    "svgType": "sweet_pea",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "英語の「Sweet pea（甘い香りのあるエンドウ豆）」が名前の由来ですが、観賞用なので実は毒性があり食べられません。",
      "花びらが飛び立つ蝶に見えることから、卒業や新生活の「門出」を祝う花束に世界中で贈られます。",
      "エドワード朝時代の英国王妃アレクサンドラがこよなく愛し、宮廷の公式行事の花として流行しました。"
    ]
  },
  "4-4": {
    "id": "4-4",
    "name": "スモモ（李）",
    "reading": "すもも",
    "scientificName": "Prunus salicina",
    "month": 4,
    "day": 4,
    "meanings": [
      "誤解",
      "誠意",
      "忠実"
    ],
    "description": "春、桜に先駆けて真っ白な清楚な小花を枝いっぱいに咲かせるバラ科果樹。古来「李下に冠を正さず（誤解を招く行動を慎む）」の故事で知られ、真摯な誠意を重んじる花です。",
    "category": "野菜・実",
    "svgType": "fruit",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fed7aa",
    "bgGradient": "from-rose-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "「李下に冠を正さず」という中国の故事成語（スモモの木の下で手を上げると実を盗もうとしていると疑われる）から「誤解」という珍しい花言葉が生まれました。",
      "桃に比べて酸味が強いことから「酸い桃（すいもも）」が転じて「スモモ」と呼ばれるようになりました。",
      "初夏に実るジューシーな果実はプラム（ソルダム）としても親しまれ、栄養価も満点です。"
    ]
  },
  "4-6": {
    "id": "4-6",
    "name": "ナスタチウム（金蓮花）",
    "reading": "なすたちうむ",
    "scientificName": "Tropaeolum majus",
    "month": 4,
    "day": 6,
    "meanings": [
      "愛国心",
      "勝利",
      "困難に打ち勝つ"
    ],
    "description": "丸い蓮のような葉と、鮮やかなオレンジや黄色の花をつける南米原産のエディブルフラワー。葉が盾、花が兜に見えることから戦士の勇気と勝利を象徴する花言葉が与えられました。",
    "category": "花",
    "svgType": "nasturtium",
    "flowerColor": "#ea580c",
    "secondaryColor": "#fed7aa",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-teal-500/10",
    "triviaList": [
      "丸い葉を「盾」、赤い花を「血に染まった兜」に見立てたことから「困難に打ち勝つ」「勝利」の花言葉が生まれました。",
      "花も葉もピリッとしたクレソンのような辛みがあり、サラダを彩る「エディブルフラワー（食用花）」として大人気です。",
      "コンパニオンプランツとして家庭菜園に植えると害虫を遠ざける頼もしい効果があります。"
    ]
  },
  "4-14": {
    "id": "4-14",
    "name": "ハルジオン（春紫菀）",
    "reading": "はるじおん",
    "scientificName": "Erigeron philadelphicus",
    "month": 4,
    "day": 14,
    "meanings": [
      "追想の愛"
    ],
    "description": "春の野原や道端にピンクがかった繊細な糸状の花びらを咲かせるキク科植物。開花直前の蕾がうつむくように垂れ下がり、咲くと上を向く健気な姿が切ない愛を呼び起こします。",
    "category": "花",
    "svgType": "fleabane",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "蕾のときは首を恥ずかしそうに下に向けて垂れ下がり、咲くときにシャキッと上を向くユニークな性質があります。",
      "茎を折ると中が空洞になっているのが、初夏に咲くよく似た「ヒメジョオン（中身がつまっている）」との見分け方です。",
      "多くの音楽や文学で「道端の健気な愛」のモチーフとして歌われています。"
    ]
  },
  "4-27": {
    "id": "4-27",
    "name": "アカシア",
    "reading": "あかしあ",
    "scientificName": "Acacia",
    "month": 4,
    "day": 27,
    "meanings": [
      "秘密の恋",
      "友情",
      "優雅"
    ],
    "description": "春に木一面を覆い尽くすように黄金色のふわふわとした球状の小花を咲かせる常緑高木。ネイティブアメリカンの求愛の風習から、秘めたる真実の愛を伝えるロマンの花です。",
    "category": "樹木",
    "svgType": "acacia",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "北米の先住民の若者が、愛の告白として想い人にアカシアの花を贈ったことから「秘密の恋」の花言葉が生まれました。",
      "日本で「アカシア蜂蜜」として知られる蜜の多くは、実はマメ科の「ニセアカシア（ハリエンジュ）」から採れたものです。",
      "春に黄色いポンポン状の花を咲かせるミモザアカシアは、国際女性デーのシンボルとしても有名です。"
    ]
  },
  "5-5": {
    "id": "5-5",
    "name": "スズラン（鈴蘭）",
    "reading": "すずらん",
    "scientificName": "Convallaria majalis",
    "month": 5,
    "day": 5,
    "meanings": [
      "再び幸せが訪れる",
      "純粋",
      "謙虚"
    ],
    "description": "純白の小さなベル形の花を葉の陰に連ねて咲かせ、高貴で清らかな香りを放つ春の森の妖精。フランスでは5月1日に愛する人へスズランを贈ると幸せが訪れると言われます。",
    "category": "花",
    "svgType": "lily_of_the_valley",
    "flowerColor": "#10b981",
    "secondaryColor": "#f8fafc",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-green-500/10",
    "anniversaryNote": "端午の節句・こどもの日",
    "triviaList": [
      "フランスでは5月1日の「スズランの日」に大切な人へスズランを贈る風習があり、受け取った人には幸運が訪れると信じられています。",
      "ヨーロッパの冷涼な谷間に自生することから、英語では「Lily of the valley（谷間のユリ）」と呼ばれます。",
      "可憐で清楚な見た目ですが、全草に強い毒性（コンバラトキシンなど）を秘めているという二面性を持っています。"
    ]
  },
  "5-20": {
    "id": "5-20",
    "name": "カタバミ（片喰）",
    "reading": "かたばみ",
    "scientificName": "Oxalis corniculata",
    "month": 5,
    "day": 20,
    "meanings": [
      "輝く心",
      "喜び"
    ],
    "description": "ハート形が3枚合わさった可憐な葉と、明るい黄色の小花を咲かせる生命力あふれる野花。仏具を磨く「すいば」として使われたことから「輝く心」という美しい言葉を持ちます。",
    "category": "花",
    "svgType": "clover",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "葉にシュウ酸を含み、昔は真鍮の仏具や鏡をカタバミの葉で磨くとピカピカに輝いたことから「輝く心」の花言葉が生まれました。",
      "一度根付くと踏まれても枯れず絶えないことから、日本の戦国武将たちに「家運隆盛・子孫繁栄」の家紋として大人気でした。",
      "夕方や雨の日になると、ハート形の葉をきれいに閉じて眠る「就眠運動」を行います。"
    ]
  },
  "5-27": {
    "id": "5-27",
    "name": "マトリカリア（夏白菊）",
    "reading": "まとりかりあ",
    "scientificName": "Tanacetum parthenium",
    "month": 5,
    "day": 27,
    "meanings": [
      "鎮静",
      "集う喜び",
      "楽しむ"
    ],
    "description": "小さな白いカモミールのような花をドーム状にたくさん咲かせるハーブ。古くから偏頭痛を鎮めるハーブ「フィーバーフュー」として重宝され、穏やかな癒やしを与えます。",
    "category": "花",
    "svgType": "daisy",
    "flowerColor": "#10b981",
    "secondaryColor": "#f8fafc",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-green-500/10",
    "triviaList": [
      "ラテン語の「matrix（子宮）」が語源で、古くから女性の体調を整えるハーブ療法に用いられてきました。",
      "英語では「Feverfew（フィーバーフュー＝熱を追放するもの）」と呼ばれ、解熱や偏頭痛の民間薬として有名です。",
      "小花が群がって楽しそうに咲く姿から「集う喜び」という温かい花言葉がつきました。"
    ],
    "subFlowers": [
          {
                "name": "ゲンペイコギク（源平小菊）",
                "meanings": [
                      "白緑",
                      "移り気",
                      "可憐"
                ],
                "note": "白から桃色へ花色が変わる愛らしい菊"
          }
    ]
  },
  "6-6": {
    "id": "6-6",
    "name": "アストランティア",
    "reading": "あすとらんてぃあ",
    "scientificName": "Astrantia major",
    "month": 6,
    "day": 6,
    "meanings": [
      "星に願いを",
      "愛の渇き",
      "知性"
    ],
    "description": "ギリシャ語の「アストラ（星）」を語源とし、星型の苞葉（ほうよう）の中に無数の小花が宝石のように輝く優美な高山植物。繊細な透明感と気品で庭園を神秘的に彩ります。",
    "category": "花",
    "svgType": "anemone",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fce7f3",
    "bgGradient": "from-pink-400/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "名前はギリシャ語の「astron（星）」に由来し、夜空にきらめく星のような花姿から名付けられました。",
      "ヨーロッパのアルプス山脈などの冷涼な森や草原に自生し、イングリッシュガーデンの貴婦人として大人気です。",
      "星形に見える部分は花びらではなく「苞（ほう）」と呼ばれる葉で、触るとカサカサとした独特の質感があります。"
    ]
  },
  "6-15": {
    "id": "6-15",
    "name": "カーネーション",
    "reading": "かーねーしょん",
    "scientificName": "Dianthus caryophyllus",
    "month": 6,
    "day": 15,
    "meanings": [
      "無垢で深い愛",
      "母への愛",
      "感動"
    ],
    "description": "波打つ幾重ものフリルのような花びらが優雅なナデシコ科の代表花。母の日を象徴する花として世界中で愛され、感謝といつまでも変わらない深い愛情を静かに伝えます。",
    "category": "花",
    "svgType": "carnation",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "古代ギリシャで神々への冠作りに使われた「コロネーション（戴冠式）」が名前の由来と言われています。",
      "20世紀初頭にアメリカのアンナ・ジャービスが亡き母を偲び白いカーネーションを配ったことが「母の日」の起源です。",
      "赤は「母への愛」、ピンクは「感謝」、白は「純潔の愛」と色ごとに深いメッセージを持っています。"
    ]
  },
  "6-28": {
    "id": "6-28",
    "name": "ゼラニウム",
    "reading": "ぜらにうむ",
    "scientificName": "Pelargonium",
    "month": 6,
    "day": 28,
    "meanings": [
      "尊敬",
      "信頼",
      "真の友情"
    ],
    "description": "ヨーロッパの街並みの窓辺を華やかに彩る定番の鉢花。独特のアロマ香を持つ葉は虫除けにもなり、一年を通して鮮やかな花を次々と咲かせる信頼のパートナーです。",
    "category": "花",
    "svgType": "geranium",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-rose-500/15 via-red-300/10 to-teal-500/10",
    "triviaList": [
      "ヨーロッパの家々の窓辺にゼラニウムが飾られるのは、華やかな美しさだけでなく強い香りで虫や魔物を遠ざけるためです。",
      "種子の形がコウノトリ（ギリシャ語でgeranos）のくちばしに似ていることから名付けられました。",
      "ローズゼラニウムなど一部の品種の精油は、リラックス効果のあるアロマテラピーに重宝されます。"
    ]
  },
  "7-4": {
    "id": "7-4",
    "name": "モクレン（木蓮）",
    "reading": "もくれん",
    "scientificName": "Magnolia liliiflora",
    "month": 7,
    "day": 4,
    "meanings": [
      "自然への愛",
      "持続性",
      "崇高"
    ],
    "description": "恐竜の時代から地球上に存在していたとされる地球最古の被子植物の一つ。樹木いっぱいに上を向いて咲く紫紅色の大型の花は、大自然の雄大な生命の持続性を物語ります。",
    "category": "樹木",
    "svgType": "magnolia",
    "flowerColor": "#9333ea",
    "secondaryColor": "#e9d5ff",
    "bgGradient": "from-purple-500/15 via-fuchsia-300/10 to-emerald-500/10",
    "triviaList": [
      "1億年以上前の白亜紀の地層から化石が発見されており、地球上で最も初期に出現した花を持つ植物の一つです。",
      "まだ蜂などの昆虫が進化していなかった時代から存在していたため、甲虫（カブトムシの仲間）によって受粉する仕組みを持ちます。",
      "花が蓮（ハス）の花に似て木に咲くことから「木蓮」と命名されました。"
    ]
  },
  "7-22": {
    "id": "7-22",
    "name": "リアトリス（百々千鳥）",
    "reading": "りあとりす",
    "scientificName": "Liatris spicata",
    "month": 7,
    "day": 22,
    "meanings": [
      "燃える思い",
      "向上心",
      "長火鉢"
    ],
    "description": "夏の青空に向かって槍のように真っ直ぐ立ち上がる赤紫色の穂状花序。通常の花とは異なり「上から下に向かって咲き進む」ユニークな性質を持ち、天を衝く炎を思わせます。",
    "category": "花",
    "svgType": "liatris",
    "flowerColor": "#a855f7",
    "secondaryColor": "#e9d5ff",
    "bgGradient": "from-purple-500/15 via-violet-300/10 to-teal-500/10",
    "triviaList": [
      "通常多くの穂状の花は下から上へ咲きますが、リアトリスは「てっぺんから下へ向かって」咲き進む非常に珍しい特徴があります。",
      "槍のような堂々とした花姿から和名では「槍鶏頭（ヤリゲイトウ）」や「百々千鳥（モモチドリ）」とも呼ばれます。",
      "北米原産で、夏の強烈な暑さや乾燥にもびくともしない強健な宿根草です。"
    ]
  },
  "7-28": {
    "id": "7-28",
    "name": "ツユクサ（露草）",
    "reading": "つゆくさ",
    "scientificName": "Commelina communis",
    "month": 7,
    "day": 28,
    "meanings": [
      "懐かしい関係",
      "密かな恋",
      "尊敬"
    ],
    "description": "夏の朝露に濡れて鮮やかなコバルトブルーの2枚の花弁をパッと開く日本の代表的な朝花。昼前には儚くしぼんでしまう青の美しさは、万葉の歌人たちにも愛唱されました。",
    "category": "花",
    "svgType": "dayflower",
    "flowerColor": "#0284c7",
    "secondaryColor": "#7dd3fc",
    "bgGradient": "from-sky-500/15 via-blue-300/10 to-teal-500/10",
    "triviaList": [
      "朝咲いて昼には萎んでしまう露の儚さから「露草」「月草（つきくさ）」と呼ばれ、万葉集にも多数詠まれています。",
      "花の青い汁は水に浸すと簡単に色が落ちる性質があり、昔は友禅染の下絵を描く染料として不可欠でした。",
      "コバルトブルーの花びら2枚と、下側にある小さな白い花びら1枚の計3枚の花びらで構成されています。"
    ]
  },
  "7-30": {
  "id": "7-30",
  "name": "ベロペロネ（コエビソウ）",
  "reading": "べろぺろね",
  "scientificName": "Justicia brandegeeana",
  "month": 7,
  "day": 30,
  "meanings": [
    "ひょうきん",
    "おてんば",
    "思いがけない出会い"
  ],
  "description": "赤褐色の苞（ほう）が重なり合う姿がまるで茹でた小海老そっくりなことから「コエビソウ」と呼ばれるメキシコ原産のユニーク花。「ひょうきん」「おてんば」の花言葉がぴったりです。",
  "category": "熱帯花・低木",
  "svgType": "wildflower",
  "flowerColor": "#ea580c",
  "secondaryColor": "#fed7aa",
  "bgGradient": "from-orange-500/15 via-amber-300/10 to-rose-400/10",
  "subFlowers": [
    {
      "name": "ニチニチソウ（日々草）",
      "reading": "にちにちそう",
      "meanings": [
        "楽しい思い出",
        "友情",
        "生涯の友情"
      ],
      "note": "夏咲き続ける元気花（毎日次々と新しい花を咲かせ続ける元気印）"
    }
  ],
  "triviaList": [
    "エビの尻尾のような苞の間から、小さな白い筒状の本当の花が顔を覗かせます！",
    "補足席には「楽しい思い出・友情」の花言葉を持つニチニチソウが夏を盛り上げます。",
    "ギリシャ語の「belos（矢）＋perone（留め金）」が学名ベロペロネの語源です。"
  ],
  "rarity": "Normal"
},

  "8-2": {
    "id": "8-2",
    "name": "バショウ（芭蕉）",
    "reading": "ばしょう",
    "scientificName": "Musa basjoo",
    "month": 8,
    "day": 2,
    "meanings": [
      "燃える思い",
      "強い心"
    ],
    "description": "バナナの仲間の大型多年草で、人丈をはるかに越える巨大な葉を青空に広げる豪快な植物。風雨にちぎれても青々と新葉を繰り出す「強い心」と「燃える思い」を宿します。",
    "category": "樹木",
    "svgType": "palm",
    "flowerColor": "#15803d",
    "secondaryColor": "#86efac",
    "bgGradient": "from-green-600/15 via-emerald-400/10 to-amber-500/10",
    "triviaList": [
      "俳聖・松尾芭蕉の俳号は、弟子から贈られたバショウの木を庵に植えたことに由来します。",
      "葉は長さ2メートルにも達し、台風の風を受けて裂けても枯れずに光合成を続ける強靭さです。",
      "上下関係や筋を通す熱血体育会系にふさわしい、燃えたぎるバイタリティを象徴します。"
    ],
    "rarity": "Normal"
  },
    "8-5": {
    "id": "8-5",
    "name": "オシロイバナ（白粉花・夕化粧）",
    "reading": "おしろいばな",
    "scientificName": "Mirabilis jalapa",
    "month": 8,
    "day": 5,
    "meanings": ["臆病", "内気", "あなたを想う", "慎み深い恋"],
    "description": "夕方4時頃から涼しい風とともに甘い香りを放って咲くことから「夕化粧」「Four o'clock」とも呼ばれます。黒い種の中の白い粉はおしろいに見立てられました。",
    "category": "多年草・一年草",
    "svgType": "four_o_clock",
    "flowerColor": "#ec4899",
    "secondaryColor": "#facc15",
    "bgGradient": "from-pink-500/15 via-yellow-300/10 to-emerald-400/10",
    "subFlowers": [
      {
        "name": "エリカ（ヒース）",
        "meanings": ["孤独", "寂寥", "心地よい言葉"],
        "note": "荒野に咲く小さな釣鐘状の花"
      }
    ],
    "triviaList": [
      "一本の株から赤、黄、白など異なる色の花が咲き分けたり、絞り模様が入ったりする不思議な植物です。"
    ]
  },
  "8-7": {
    "id": "8-7",
    "name": "ザクロ（石榴）",
    "reading": "ざくろ",
    "scientificName": "Punica granatum",
    "month": 8,
    "day": 7,
    "meanings": [
      "円熟した優雅さ",
      "結合",
      "愚かしさ"
    ],
    "description": "初夏に咲く朱赤色の鮮やかな花と、秋に熟して実がパカリと割れ宝石のような粒が覗く果樹。無数の種子がぎっしり詰まる姿から世界中で子孫繁栄と豊穣のシンボルとされます。",
    "category": "野菜・実",
    "svgType": "fruit",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-rose-500/15 via-red-300/10 to-teal-500/10",
    "triviaList": [
      "果実の中にぎっしりと赤い粒（種子）が詰まっていることから、世界中で「子孫繁栄」「豊穣」の縁起果実とされます。",
      "ギリシャ神話で冥界の王ハデスにザクロの実を食べさせられたペルセポネの物語から「愚かしさ」の花言葉も生まれました。",
      "ポリフェノールやビタミンが豊富で、古来「女性の果実」「生命の果実」として珍重されてきました。"
    ]
  },
  "8-13": {
    "id": "8-13",
    "name": "サギソウ（鷺草）",
    "reading": "さぎそう",
    "scientificName": "Habenaria radiata",
    "month": 8,
    "day": 13,
    "meanings": [
      "夢でもあなたを想う",
      "清純",
      "神秘"
    ],
    "description": "真夏の湿地に、まるで白鷺（シラサギ）が翼を広げて軽やかに大空へ飛び立つ瞬間のような奇跡の純白花を咲かせる日本原産の野生蘭。息をのむほどの気品と清純を湛えます。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#10b981",
    "secondaryColor": "#f8fafc",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-green-500/10",
    "triviaList": [
      "花びらの両脇が細かく裂けており、白鷺が風に乗って羽ばたく姿そのままに見える日本の奇跡の造形美です。",
      "世田谷城主の吉良頼康と側室常盤姫の悲恋伝説（放った白鷺が射落とされ、その地に咲いた）に由来するロマンの花です。",
      "日当たりの良い湿原に生息しますが、近年自生地が減少し貴重な絶滅危惧種となっています。"
    ]
  },
  "8-16": {
    "id": "8-16",
    "name": "デュランタ（台湾連翹）",
    "reading": "でゅらんた",
    "scientificName": "Duranta erecta",
    "month": 8,
    "day": 16,
    "meanings": [
      "あなたを見守る",
      "独りよがり",
      "歓迎"
    ],
    "description": "爽やかな紫青色の小花が房状に垂れ下がって咲き、初夏から秋の風に揺れる優美な花。「宝塚」という品種が特に有名で、見る人を優しく見守るように咲き誇ります。",
    "category": "花",
    "svgType": "wisteria",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#a78bfa",
    "bgGradient": "from-violet-500/15 via-purple-400/10 to-teal-500/10",
    "subFlowers": [
      {
        "name": "パキスタキス（ウコンサンゴ・パキスタキス・ルテア）",
        "meanings": ["美しい娘", "愛嬌", "光明"],
        "note": "8月16日のもう一つの誕生花。重なり合う鮮やかな黄色の苞葉から純白の小花が飛び出すトロピカルフラワー"
      },
      {
        "name": "ペチュニア",
        "meanings": ["あなたと一緒なら心がやわらぐ", "心のやすらぎ"],
        "note": "8月16日の伝統的な誕生花。夏の花壇を色鮮やかに覆う人気のナス科草花"
      }
    ],
    "triviaList": [
      "花びらの縁が白い覆輪になる「タカラヅカ」という品種は、優雅なタカラジェンヌの袴姿に似ていることから命名されました。",
      "花が終わると小さなオレンジ色の丸い実を鈴なりにつけ、花と実の両方を楽しめます。",
      "イタリアの植物学者カストーレ・デュランテの名に敬意を表して命名されました。"
    ],
    "rarity": "Normal"
  },
  "8-17": {
    "id": "8-17",
    "name": "ネムノキ（合歓の木）",
    "reading": "ねむのき",
    "scientificName": "Albizia julibrissin",
    "month": 8,
    "day": 17,
    "meanings": [
      "歓喜",
      "胸のときめき"
    ],
    "description": "夕方になると羽状複葉が合わさって眠るように閉じる「就眠運動」を行うマメ科高木。初夏に淡紅色の絹糸を束ねたような繊細で幻想的な花を咲かせ、心躍る歓喜を告げます。",
    "category": "樹木",
    "svgType": "mimosa",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "夜になると葉が合わさって眠るように垂れ下がる性質から「眠りの木（ネムノキ）」と名付けられました。",
      "中国では合わさる葉を夫婦円満の象徴とし、漢字で「合歓木（がっかんぼく）」と書いて家庭円満の木とされます。",
      "花びらは目立たず、放射状に広がるピンクの絹糸のような部分は無数の美しい「雄しべ」です。"
    ]
  },
  "8-19": {
    "id": "8-19",
    "name": "キュウリ（胡瓜）の花",
    "reading": "きゅうり",
    "scientificName": "Cucumis sativus",
    "month": 8,
    "day": 19,
    "meanings": [
      "洒落",
      "気やすさ"
    ],
    "description": "夏のみずみずしい食卓の定番野菜。黄色い星型の愛らしい小花を咲かせ、つるをぐんぐん伸ばして涼やかな緑のカーテンを作ります。気取らない夏の洒落っ気を伝えます。",
    "category": "野菜・実",
    "svgType": "cucumber",
    "flowerColor": "#eab308",
    "secondaryColor": "#86efac",
    "bgGradient": "from-yellow-400/15 via-green-300/10 to-emerald-500/10",
    "triviaList": [
      "鮮やかな黄色の花には雄花と雌花があり、雌花の根元には咲いた時からミニチュアのキュウリがついています。",
      "全体の95%以上が水分で、ギネス世界記録に「最も熱量の少ない果実」として登録されています。",
      "お盆の精霊馬（しょうりょううま）として、ご先祖様が早く帰ってこられるように足の速い馬に見立てて飾られます。"
    ]
  },
  "8-23": {
    "id": "8-23",
    "name": "ボダイジュ（菩提樹）",
    "reading": "ぼだいじゅ",
    "scientificName": "Tilia miqueliana",
    "month": 8,
    "day": 23,
    "meanings": [
      "夫婦の愛",
      "結ばれる愛"
    ],
    "description": "初夏に淡黄色の甘い香りを放つ小花を咲かせるシナノキ科の高木。シューベルトの歌曲でも有名なリンデンバウムの仲間で、木陰の優しさと固い絆を結ぶ愛の木です。",
    "category": "樹木",
    "svgType": "linden",
    "flowerColor": "#10b981",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-emerald-500/15 via-yellow-200/10 to-teal-500/10",
    "triviaList": [
      "お釈迦様がその下で悟りを開いた木として仏教の寺院に植えられます（本来のインドボダイジュとは別種ですが代用されます）。",
      "ヨーロッパでは「リンデン（菩提樹）」と呼ばれ、街路樹やリラックスをもたらすリンデンティーとして有名です。",
      "ハート形の葉と木陰の涼しさから、ヨーロッパ各地で村の広場の中央に植えられ愛の告白の場とされました。"
    ]
  },
  "9-7": {
    "id": "9-7",
    "name": "オレンジの花",
    "reading": "おれんじ",
    "scientificName": "Citrus sinensis",
    "month": 9,
    "day": 7,
    "meanings": [
      "花嫁の喜び",
      "純潔",
      "寛大"
    ],
    "description": "純白の肉厚な小花から放たれる気品あふれる柑橘の甘い香り（ネロリ）。花と実を同時につける多産と豊かさの象徴として、西洋では伝統的にウェディングブーケに用いられます。",
    "category": "野菜・実",
    "svgType": "orange",
    "flowerColor": "#f97316",
    "secondaryColor": "#ffedd5",
    "bgGradient": "from-orange-400/15 via-amber-200/10 to-teal-500/10",
    "triviaList": [
      "西洋の伝統的な結婚式で、花嫁がオレンジの花冠やブーケを持つ習慣から「花嫁の喜び」という言葉がつきました。",
      "花から水蒸気蒸留で抽出される精油は高級香料「ネロリ」と呼ばれ、心を深く鎮める優美な香りです。",
      "木の上に花と果実が同時に実る生命力の豊かさから、繁栄と子孫繁栄の最高のお祝い樹とされます。"
    ],
    "subFlowers": [
          {
                "name": "ナツメ（棗）",
                "meanings": [
                      "健康",
                      "若々しさ",
                      "英知"
                ],
                "note": "健康と長寿を祝う古来の果実"
          }
    ]
  },
  "9-8": {
    "id": "9-8",
    "name": "ゼフィランサス（玉簾）",
    "reading": "ぜふぃらんさす",
    "scientificName": "Zephyranthes",
    "month": 9,
    "day": 8,
    "meanings": [
      "汚れなき愛",
      "期待",
      "便りがある"
    ],
    "description": "雨が降ったあとに一斉に花茎を伸ばして開花することから「レインリリー」とも呼ばれるヒガンバナ科の球根花。純白やピンクの透き通るような星形の花が心を洗います。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#10b981",
    "secondaryColor": "#f8fafc",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-green-500/10",
    "triviaList": [
      "雨が降った直後にまとまって一気に花を咲かせる性質から、英語で「Rain lily（雨のユリ）」と呼ばれます。",
      "ギリシャ神話の西風の神「ゼピュロス」と「花（アンサス）」を合わせたロマンチックな学名を持ちます。",
      "細いすっきりした葉が簾（すだれ）のように見えることから、日本の和名では「玉簾（タマスダレ）」と名付けられました。"
    ]
  },
  "9-24": {
    "id": "9-24",
    "name": "ブドウ（葡萄）",
    "reading": "ぶどう",
    "scientificName": "Vitis vinifera",
    "month": 9,
    "day": 24,
    "meanings": [
      "陶酔",
      "好意",
      "信頼"
    ],
    "description": "紀元前数千年前から人類と共に歩んできた豊穣の果実。初夏に控えめな花を咲かせ、秋にはたわわに実る紫や翡翠色の果房が実り、喜びと人々の深い信頼を結びます。",
    "category": "野菜・実",
    "svgType": "grape",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#ddd6fe",
    "bgGradient": "from-violet-500/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "ワインの原料として古代オリエントやギリシャ神話の酒神ディオニュソス（バッカス）の象徴とされてきました。",
      "たくさんの粒が一つの房にぎっしり実ることから、豊穣や繁栄、固い友情の結束を表します。",
      "ブドウの表面につく白い粉は「ブルーム」と呼ばれ、果実自らが鮮度と水分を保つために分泌する天然の保護膜です。"
    ]
  },
  "9-28": {
    "id": "9-28",
    "name": "フジバカマ（藤袴）",
    "reading": "ふじばかま",
    "scientificName": "Eupatorium japonicum",
    "month": 9,
    "day": 28,
    "meanings": [
      "ためらい",
      "遅れ",
      "あの日を思い出す"
    ],
    "description": "秋の七草の一つ。筒状の淡紅紫色の小花が袴（はかま）のように集まり、生乾きにすると桜餅のような甘い芳香（クマリン）を放ち、平安貴族の匂い袋として珍重されました。",
    "category": "花",
    "svgType": "thoroughwort",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "秋の七草の一つで、花弁の形が平安時代の男性貴族が履いた「袴（はかま）」に似ていることから名付けられました。",
      "茎や葉を乾燥させると桜餅と同じ香り成分「クマリン」を放ち、古くは防虫剤や髪を洗う香料として使われました。",
      "渡りをする蝶として有名な「アサギマダラ」が大好物で、秋にフジバカマの花蜜を吸いにやってきます。"
    ]
  },
  "10-11": {
    "id": "10-11",
    "name": "コリウス（金襴紫蘇）",
    "reading": "こりうす",
    "scientificName": "Coleus scutellarioides",
    "month": 10,
    "day": 11,
    "meanings": [
      "かなえられた望み",
      "善良な家風",
      "健康"
    ],
    "description": "赤、黄、緑、深紫など万華鏡のように鮮やかな葉の模様を楽しむシソ科のカラーリーフ植物。秋深まるにつれて葉色の鮮やかさが増し、温かな家庭の調和を演出します。",
    "category": "観葉・ハーブ",
    "svgType": "foliage",
    "flowerColor": "#b91c1c",
    "secondaryColor": "#fde047",
    "bgGradient": "from-red-600/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "ギリシャ語の「koleos（鞘＝さや）」が語源で、雄しべが刀の鞘のように合着していることから命名されました。",
      "花よりも葉の色彩が主役のカラーリーフで、和名では絢爛豪華な布に例えて「金襴紫蘇（キンランジソ）」と呼ばれます。",
      "挿し木で簡単に根付くため、初心者でも増やして長く楽しめるガーデニングの定番です。"
    ]
  },
  "10-23": {
    "id": "10-23",
    "name": "ルリマツリ（瑠璃茉莉）",
    "reading": "るりまつり",
    "scientificName": "Plumbago auriculata",
    "month": 10,
    "day": 23,
    "meanings": [
      "いつも明るい",
      "同情",
      "密かな情熱"
    ],
    "description": "初夏から晩秋まで、涼しげな淡い空色の花をジャスミン（茉莉花）のように房状に咲かせ続ける低木。爽やかな青は暑い季節にも涼風を運び、周囲を明るく照らします。",
    "category": "花",
    "svgType": "plumbago",
    "flowerColor": "#0ea5e9",
    "secondaryColor": "#bae6fd",
    "bgGradient": "from-sky-500/15 via-blue-300/10 to-teal-500/10",
    "triviaList": [
      "ジャスミン（茉莉花）に似た涼やかな瑠璃色の花を咲かせることから「瑠璃茉莉」と名付けられました。",
      "花の萼（がく）の部分に腺毛があり、ネバネバして服や動物の毛にくっつく性質があるため「ひっつき虫」の性質を持ちます。",
      "南アフリカ原産で、夏の直射日光にも負けずに秋遅くまで空色の花を咲かせ続ける頼もしい植物です。"
    ]
  },
  "10-25": {
  "id": "10-25",
  "name": "ミセバヤ（見せばや）",
  "reading": "みせばや",
  "scientificName": "Hylotelephium sieboldii",
  "month": 10,
  "day": 25,
  "meanings": [
    "大切なあなた",
    "慎ましさ",
    "静謐"
  ],
  "description": "秋深まる頃、丸い白粉を帯びた多肉葉の先に、ピンクの星形小花を傘状に咲かせる日本の古典園芸植物。「君に見せばや（あなたに見せたい）」という古語の愛の言葉が語源です。",
  "category": "多肉植物",
  "svgType": "succulent",
  "flowerColor": "#ec4899",
  "secondaryColor": "#fbcfe8",
  "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-400/10",
  "subFlowers": [
    {
      "name": "ギンモクセイ（銀木犀）",
      "reading": "ぎんもくせい",
      "meanings": [
        "初恋",
        "高潔",
        "あなたの気を引く"
      ],
      "note": "10/25の席を譲った植物（キンモクセイの原種とされる清楚な白花木）"
    }
  ],
  "triviaList": [
    "「見せばや」とは「誰に見せようか、いやあなたに見せたい」という奥ゆかしく情熱的な古語！",
    "補足席には「10/25の席を譲った植物」として、奥ゆかしい芳香のギンモクセイが優しく同席しています。",
    "シーボルトが日本からヨーロッパへ持ち帰り、世界中で愛好された歴史的名花です。"
  ],
  "rarity": "Normal"
},

  "10-26": {
    "id": "10-26",
    "name": "キャットテール",
    "reading": "きゃっとてーる",
    "scientificName": "Acalypha hispaniolae",
    "month": 10,
    "day": 26,
    "meanings": [
      "気まま",
      "陽気",
      "愛嬌"
    ],
    "description": "猫のしっぽのような真っ赤でふわふわとした円柱形の花穂を次々と垂れ下げて咲かせる西インド諸島原産の花。撫でたくなる愛嬌たっぷりの姿で見る人を笑顔にします。",
    "category": "花",
    "svgType": "cat_tail",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "赤く毛羽立ったモコモコの花穂がピンと立ち上がったり揺れたりする姿が猫のしっぽにそっくりなのが名前の由来です。",
      "西インド諸島原産のトウダイグサ科の植物で、気温があれば春から秋まで長く愛らしい花を咲かせます。",
      "ふわふわの赤い部分は花びらではなく、雌花の「柱頭（ちゅうとう）」が細かく枝分かれしたものです。"
    ]
  },
  "10-30": {
    "id": "10-30",
    "name": "ロベリア（瑠璃蝶草）",
    "reading": "ろべりあ",
    "scientificName": "Lobelia erinus",
    "month": 10,
    "day": 30,
    "meanings": [
      "いつも愛らしい",
      "謙虚",
      "悪意"
    ],
    "description": "青や紫の鮮烈な小花が一斉に咲き揃い、蝶が舞い遊んでいるように見える南アフリカ原産の草花。春から秋の寄せ植えの縁取りとして爽やかな彩りを添えます。",
    "category": "花",
    "svgType": "lobelia",
    "flowerColor": "#2563eb",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-500/15 via-indigo-300/10 to-teal-500/10",
    "triviaList": [
      "蝶が羽を休めているような形から和名では「瑠璃蝶草（ルリチョウソウ）」と呼ばれます。",
      "ベルギーの植物学者マティアス・ド・ロベル（Mathias de Lobel）の名にちなんで学名がつけられました。",
      "株いっぱいに青空を切り取ったような密な花を咲かせるため、ハンギングバスケットの定番人気花です。"
    ]
  },
  "11-2": {
    "id": "11-2",
    "name": "ルピナス（昇り藤）",
    "reading": "るぴなす",
    "scientificName": "Lupinus",
    "month": 11,
    "day": 2,
    "meanings": [
      "いつも幸せ",
      "貪欲",
      "想像力"
    ],
    "description": "藤の花を逆さまにして天へ向かって突き立てたようなダイナミックな花穂を咲かせるキク科・マメ科植物。色彩豊かで明るい立ち姿は人々に元気と豊かな想像力を与えます。",
    "category": "花",
    "svgType": "lupine",
    "flowerColor": "#a855f7",
    "secondaryColor": "#f3e8ff",
    "bgGradient": "from-purple-500/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "藤の花が逆立ちして上に向かって咲いているように見えることから、和名では「昇り藤（ノボリフジ）」と呼ばれます。",
      "ラテン語の「ルプス（狼）」が名前の由来で、どんな荒れたやせた土地でも狼のように貪欲に栄養を吸収して育つ強さにちなみます。",
      "古代ギリシャやローマでは、ルピナスの豆を食べると想像力が高まり心が陽気になると信じられていました。"
    ]
  },
  "11-5": {
    "id": "11-5",
    "name": "ペンタス（草山丹花）",
    "reading": "ぺんたす",
    "scientificName": "Pentas lanceolata",
    "month": 11,
    "day": 5,
    "meanings": [
      "希望がかなう",
      "願い事",
      "誠実"
    ],
    "description": "星型の愛らしい小花が傘状にこんもりと集まって咲く熱帯アフリカ原産の花。星形の花弁が流れ星を連想させ、夜空に願いをかけるようなロマンチックな希望の象徴です。",
    "category": "花",
    "svgType": "pentas",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ語の「ペンテ（数字の5）」が名前の由来で、花びらが正確に5枚に分かれて星形を作っていることから命名されました。",
      "夜空にきらめく星のような姿から「希望がかなう」「願い事」というとてもロマンチックな花言葉がついています。",
      "夏の強烈な直射日光や暑さに極めて強く、秋遅くまで星型の花を休まず咲かせ続けます。"
    ]
  },
  "11-11": {
    "id": "11-11",
    "name": "カラスウリ（烏瓜）",
    "reading": "からすうり",
    "scientificName": "Trichosanthes cucumeroides",
    "month": 11,
    "day": 11,
    "meanings": [
      "誠実",
      "よき便り",
      "男嫌い"
    ],
    "description": "夏の夜にだけ純白のレースのような神秘的な糸状の花を開くウリ科つる性植物。秋になると朱赤色に熟す果実は、古くから手紙を結ぶ結び文に見立てて吉報を告げます。",
    "category": "野菜・実",
    "svgType": "snake_gourd",
    "flowerColor": "#ea580c",
    "secondaryColor": "#ffedd5",
    "bgGradient": "from-orange-500/15 via-red-300/10 to-teal-500/10",
    "triviaList": [
      "夏の夜にだけ開き、夜明けとともに萎んでしまう白いレース細工のような幻想的な花は「夜の女王」とも称されます。",
      "種子の形が打ち出の小槌（こづち）に似ているため、財布に入れておくと金運が上がると信じられる縁起物です。",
      "熟した果実が朱赤色に輝く様子は秋の風物詩として山野を美しく彩ります。"
    ]
  },
  "11-16": {
  "id": "11-16",
  "name": "クッカバラ",
  "reading": "くっかばら",
  "scientificName": "Philodendron kookaburra",
  "month": 11,
  "day": 16,
  "meanings": [
    "壮大な美",
    "誇り高い",
    "壮大な心"
  ],
  "description": "ギザギザと深く切れ込んだダイナミックな葉を広げるサトイモ科の観葉植物。気根を力強く伸ばして幹立ちする姿から「壮大な美」「誇り高い」の花言葉を持ちます。",
  "category": "観葉植物",
  "svgType": "fern",
  "flowerColor": "#047857",
  "secondaryColor": "#6ee7b7",
  "bgGradient": "from-emerald-700/15 via-teal-400/10 to-green-600/15",
  "subFlowers": [
    {
      "name": "どんぐり（団栗）",
      "reading": "どんぐり",
      "meanings": [
        "永遠の愛",
        "勇気",
        "成功"
      ],
      "note": "11/16の席を譲った植物（森の命を育む小さな巨樹のたまご）"
    }
  ],
  "triviaList": [
    "オーストラリアの鳥「ワライカワセミ（Kookaburra）」の羽ばたく姿に葉が似ていることから命名されました。",
    "11/16の補足には「席を譲った植物」として森の宝物・どんぐりが温かく同席しています！",
    "幹に葉が落ちた跡が目玉のように残り、独特のワイルドな風格を醸し出します。"
  ],
  "rarity": "Normal"
},

  "11-27": {
    "id": "11-27",
    "name": "ハボタン（葉牡丹）",
    "reading": "はぼたん",
    "scientificName": "Brassica oleracea var. acephala",
    "month": 11,
    "day": 27,
    "meanings": [
      "祝福",
      "利益",
      "愛を包む"
    ],
    "description": "冬の寒さにあたることで中心部が紫紅や白に美しく色づくキャベツの仲間の観葉植物。牡丹の花に見立ててお正月の縁起物として「祝福」をもたらす日本の冬の華です。",
    "category": "観葉・ハーブ",
    "svgType": "kale",
    "flowerColor": "#9333ea",
    "secondaryColor": "#f3e8ff",
    "bgGradient": "from-purple-500/15 via-fuchsia-300/10 to-emerald-500/10",
    "triviaList": [
      "江戸時代にオランダから伝わったケール（キャベツの原種）を、日本人が品種改良を重ねて観賞用の花に見立てて誕生させました。",
      "幾重にも重なる葉が吉祥の「牡丹」に見えることから、新年を迎える門松や寄せ植えの必須縁起物として定着しました。",
      "幾重にも重なる葉が中心を大切に守る姿から「愛を包む」という優しい花言葉がついています。"
    ]
  },
  "12-8": {
    "id": "12-8",
    "name": "ウィンターコスモス",
    "reading": "うぃんたーこすもす",
    "scientificName": "Bidens laevis",
    "month": 12,
    "day": 8,
    "meanings": [
      "もう一度愛します",
      "調和",
      "忍耐"
    ],
    "description": "秋から冬枯れの初冬にかけて、澄み渡る寒空の下で鮮やかな黄色や覆輪の小花を健気に咲かせ続けるキク科植物。冷たい寒風にも負けずに咲く姿が温かい愛を蘇らせます。",
    "category": "花",
    "svgType": "winter_cosmos",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-teal-500/10",
    "triviaList": [
      "名前にコスモスと付きますが、秋のコスモスとは別属のビデンス（センダングサ）の仲間です。",
      "他の花が冬越しに入って少なくなる初冬に元気に咲き誇るため、冬の花壇を彩る貴重な黄金色の花として愛されます。",
      "寒さが増すほど花弁の黄色と白のコントラストがくっきりと鮮やかになる特徴があります。"
    ]
  },
  "12-13": {
    "id": "12-13",
    "name": "チランジア（エアプランツ）",
    "reading": "ちらんじあ",
    "scientificName": "Tillandsia",
    "month": 12,
    "day": 13,
    "meanings": [
      "不屈の精神"
    ],
    "description": "土を必要とせず、大気中の水分を葉の表面のトリコーム（微細な銀毛）から吸収して生きる驚異のパイナップル科植物。過酷な断崖や樹上に着生する「不屈の精神」の象徴です。",
    "category": "観葉・ハーブ",
    "svgType": "air_plant",
    "flowerColor": "#10b981",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-500/15 via-teal-300/10 to-slate-400/10",
    "triviaList": [
      "土がなくても空気中の水分を吸って生きられることから「エアプランツ（Air plants）」の通称で世界中で愛されています。",
      "スウェーデンの医師で植物学者のティランツ（Elias Tillandz）教授の名にちなんで命名されました。",
      "普段は銀緑色のシックな葉ですが、開花期になると中心部が鮮烈な赤や紫に染まり美しい花を咲かせます。"
    ]
  },
  "12-15": {
    "id": "12-15",
    "name": "モンステラ",
    "reading": "もんすてら",
    "scientificName": "Monstera deliciosa",
    "month": 12,
    "day": 15,
    "meanings": [
      "壮大な計画",
      "うれしい便り",
      "深い関係"
    ],
    "description": "大きく切れ込みが入ったダイナミックな葉が特徴の熱帯アメリカ原産の観葉植物。葉の隙間から光が射し込む様子から「光を導く木」とされ、明るい未来への希望を象徴します。",
    "category": "観葉・ハーブ",
    "svgType": "foliage",
    "flowerColor": "#059669",
    "secondaryColor": "#6ee7b7",
    "bgGradient": "from-emerald-600/15 via-teal-400/10 to-green-500/10",
    "triviaList": [
      "ラテン語の「monstrum（怪物・奇怪）」が語源で、大きく切れ込みや穴の空いた巨大な葉の不思議な姿から名付けられました。",
      "自生地の熱帯雨林では、激しいスコール（豪雨）や強風で巨大な葉が破れないように自ら穴を開けて風雨を受け流す知恵を持っています。",
      "葉の穴から光が床に届くことから、ハワイでは「希望の光を導く縁起の良い植物」として愛されています。"
    ]
  },
  "12-20": {
    "id": "12-20",
    "name": "カトレア",
    "reading": "かとれあ",
    "scientificName": "Cattleya",
    "month": 12,
    "day": 20,
    "meanings": [
      "魔力",
      "成熟した大人の魅力",
      "優美"
    ],
    "description": "「蘭の女王（Queen of Orchids）」と讃えられる洋蘭の最高峰。大きく波打つ優美な花弁と気品あふれる甘美な芳香は、見る人を魅了してやまない圧倒的な存在感を放ちます。",
    "category": "花",
    "svgType": "cattleya",
    "flowerColor": "#c026d3",
    "secondaryColor": "#f5d0fe",
    "bgGradient": "from-fuchsia-500/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "イギリスの植物収集家ウィリアム・カトレイ（William Cattley）が初めて栽培・開花に成功させたことから命名されました。",
      "「洋蘭の女王」としてパーティーのコサージュや格式高い式典の装花として世界最高峰のステータスを持ちます。",
      "中南米の熱帯雨林の樹木に着生して育ち、甘く高貴な香りで数週間咲き続ける驚異的な美しさを誇ります。"
    ]
  },
  "12-25": {
    "id": "12-25",
    "name": "ポインセチア",
    "reading": "ぽいんせちあ",
    "scientificName": "Euphorbia pulcherrima",
    "month": 12,
    "day": 25,
    "meanings": [
      "祝福する",
      "聖夜",
      "幸運を祈る"
    ],
    "description": "鮮烈な赤と緑のコントラストがクリスマスの街を華やかに染めるトウダイグサ科植物。星形に広がる赤色はキリストの流した愛の血を、緑は永遠の命を象徴する聖夜の華です。",
    "category": "観葉・ハーブ",
    "svgType": "poinsettia",
    "flowerColor": "#dc2626",
    "secondaryColor": "#16a34a",
    "bgGradient": "from-red-600/15 via-emerald-400/10 to-green-600/10",
    "anniversaryNote": "クリスマス（降誕祭）",
    "triviaList": [
      "赤、緑、白の樹液の3色がまさに「クリスマスカラー（愛、永遠の命、純潔）」を体現するため、19世紀からクリスマスの花となりました。",
      "赤く花びらのように見える部分は花ではなく「苞（ほう＝色づいた葉）」で、本当の花はその中心にある小さな黄緑色の粒です。",
      "メキシコ原産で、初代アメリカ駐メキシコ公使ジョエル・ポインセットが自国に持ち帰ったことからその名がつきました。"
    ]
  },
  "12-29": {
    "id": "12-29",
    "name": "ホオズキ（鬼灯）＆ ナンテン（南天）",
    "reading": "ほおずき・なんてん",
    "scientificName": "Physalis alkekengi / Nandina domestica",
    "month": 12,
    "day": 29,
    "meanings": [
      "自然美",
      "心の平安",
      "難を転ずる",
      "良い家庭"
    ],
    "description": "橙赤色の提灯のような袋に包まれるホオズキと、「難を転じて福となす」縁起木のナンテン。年の瀬に一年の厄を払い、新しい年の幸福と平穏を祈る日本の伝統的な慶木です。",
    "category": "野菜・実",
    "svgType": "fruit",
    "flowerColor": "#ea580c",
    "secondaryColor": "#dc2626",
    "bgGradient": "from-orange-500/15 via-red-300/10 to-emerald-500/10",
    "anniversaryNote": "年末吉日・福寿の祈り",
    "triviaList": [
      "ナンテンは「難を転じる」という語呂合わせから、古くから屋敷の鬼門除けとして植えられる最強の縁起木です。",
      "ホオズキの提灯のような袋は萼（がく）が発達したもので、お盆にはご先祖様の魂を導く提灯に見立てられます。",
      "年末の飾りやお正月のおせち料理にも添えられ、家族の平安と無病息災を祈る日本の心です。"
    ]
  },
  "1-2": {
    "id": "1-2",
    "name": "ロウバイ（蝋梅）",
    "reading": "ろうばい",
    "scientificName": "Chimonanthus praecox",
    "month": 1,
    "day": 2,
    "meanings": [
      "慈愛",
      "ゆかしさ",
      "先導",
      "先見"
    ],
    "description": "厳しい真冬の寒空の下、半透明で蝋細工のような可憐な黄色い花を咲かせ、フルーティで甘く気品ある芳香を漂わせます。新春を告げる名花です。",
    "category": "樹木",
    "svgType": "plum",
    "flowerColor": "#facc15",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-emerald-500/10",
    "triviaList": [
      "名前に「梅」と付きますがバラ科ではなくロウバイ科の植物です。",
      "蝋細工のような艶やかな質感と透き通るような黄色が名前の由来です。",
      "真冬の寒風にも負けず遠くまで甘い香りを届ける姿から「慈愛」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "1-3": {
    "id": "1-3",
    "name": "クロッカス",
    "reading": "くろっかす",
    "scientificName": "Crocus",
    "month": 1,
    "day": 3,
    "meanings": [
      "青春の喜び",
      "切望",
      "信頼"
    ],
    "description": "まだ寒さ残る早春の地面から黄色や紫、白の杯のような花を元気いっぱいに突き出して咲かせる球根花。春の訪れをまっさきに告げる陽気な使者です。",
    "category": "花",
    "svgType": "tulip",
    "flowerColor": "#facc15",
    "secondaryColor": "#a855f7",
    "bgGradient": "from-yellow-400/15 via-purple-300/10 to-emerald-500/10",
    "triviaList": [
      "ヨーロッパでは古くから春の到来を告げる花として特別に親しまれてきました。",
      "雌しべを乾燥させたものが高貴なスパイス「サフラン」として知られます。",
      "雪解けとともにいち早く顔を出す生命力あふれる姿が「青春の喜び」の象徴です。"
    ],
    "rarity": "Normal"
  },
  "1-8": {
    "id": "1-8",
    "name": "マンサク（万作）",
    "reading": "まんさく",
    "scientificName": "Hamamelis japonica",
    "month": 1,
    "day": 8,
    "meanings": [
      "呪文",
      "魔力",
      "霊感",
      "ひらめき"
    ],
    "description": "早春に「まず咲く」ことから名付けられたとされる春告げ木。リボンのような黄色い細い花弁を四方に伸ばし、雪残る森に黄金の光を灯します。",
    "category": "樹木",
    "svgType": "witch_hazel",
    "flowerColor": "#eab308",
    "secondaryColor": "#fde047",
    "bgGradient": "from-amber-500/15 via-yellow-300/10 to-emerald-500/10",
    "triviaList": [
      "「豊年満作」を占う花とされ、花が枝いっぱいに咲く年は豊作になると伝えられます。",
      "ねじれた糸のようなユニークな花弁は寒さから身を守る工夫です。",
      "アメリカ先住民族はマンサクの枝をダウジング（水脈探し）に使ったことから「魔力」の花言葉がつきました。"
    ],
    "rarity": "Normal"
  },
  "1-16": {
    "id": "1-16",
    "name": "ワックスフラワー",
    "reading": "わっくすふらわー",
    "scientificName": "Chamelaucium uncinatum",
    "month": 1,
    "day": 16,
    "meanings": [
      "気まぐれ",
      "繊細",
      "可愛らしさ"
    ],
    "description": "蝋（ワックス）細工のような光沢と厚みのある小花を小枝いっぱいに散りばめるオーストラリア原産の花。葉を擦ると爽やかな柑橘系の香りがします。",
    "category": "花",
    "svgType": "plum",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "肉厚でツヤツヤした花弁がまるでキャンドルの蝋細工に見えることから名付けられました。",
      "針のような細い葉には芳香油が含まれ、触れるとレモンのような爽やかな香りが広がります。",
      "オーストラリア西部の乾燥地帯に自生し、過酷な環境に適応した強い生命力を秘めています。"
    ],
    "rarity": "Normal"
  },
  "2-8": {
    "id": "2-8",
    "name": "ホトケノザ（仏の座）",
    "reading": "ほとけのざ",
    "scientificName": "Lamium amplexicaule",
    "month": 2,
    "day": 8,
    "meanings": [
      "調和",
      "小さな幸せ",
      "輝く心"
    ],
    "description": "段々になった円い葉が仏様の台座（蓮華座）のように見えることから名付けられたシソ科の野草。早春の道端で紅紫色の小さな唇形花を元気に咲かせます。",
    "category": "花",
    "svgType": "nemophila",
    "flowerColor": "#e879f9",
    "secondaryColor": "#c084fc",
    "bgGradient": "from-purple-400/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "春の七草の「ほとけのざ」はキク科のコオニタビラコのことで、本種（シソ科）とは別植物です。",
      "葉が茎を包み込むように重なる姿が仏像の蓮華座にそっくりなのが名前の由来です。",
      "花筒の奥に蜜を蓄え、春を待ちわびたハチたちに真っ先に豊かな恵みを届けます。"
    ],
    "rarity": "Normal"
  },
  "2-11": {
    "id": "2-11",
    "name": "オオイヌノフグリ",
    "reading": "おおいぬのふぐり",
    "scientificName": "Veronica persica",
    "month": 2,
    "day": 11,
    "meanings": [
      "忠実",
      "信頼",
      "清らか"
    ],
    "description": "早春の野道や土手に、コバルトブルーの小さな瞳のような可憐な花を一面に咲かせる野の花。「星の瞳」という別名でも愛されています。",
    "category": "花",
    "svgType": "nemophila",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#7dd3fc",
    "bgGradient": "from-sky-400/15 via-blue-300/10 to-emerald-500/10",
    "triviaList": [
      "太陽の光を浴びて朝に開き、夕方には静かに花を閉じる一日花です。",
      "瑠璃色の愛らしい姿から「星の瞳」「瑠璃唐草」などのロマンチックな別名もあります。",
      "ヨーロッパ原産で明治初期に日本へ渡来し、今ではすっかり日本の春の原風景として親しまれています。"
    ],
    "rarity": "Normal"
  },
  "2-23": {
    "id": "2-23",
    "name": "ストック",
    "reading": "すとっく",
    "scientificName": "Matthiola incana",
    "month": 2,
    "day": 23,
    "meanings": [
      "永遠の美",
      "愛情の絆",
      "求愛"
    ],
    "description": "甘くスパイシーな芳香と、幾重にも重なるボリュームある花穂が春を先取りする花。茎が太くしっかりしていることから「Stock（幹）」と名付けられました。",
    "category": "花",
    "svgType": "stock",
    "flowerColor": "#fb7185",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "古代ギリシャやローマでは薬草や愛の告白の花として大切にされてきました。",
      "花持ちが非常に良く、長く美しい姿を保つことから「永遠の美」の花言葉が生まれました。",
      "クローブ（丁子）に似た甘くスパイシーな香りは香水にもブレンドされます。"
    ],
    "rarity": "Normal"
  },
  "3-21": {
    "id": "3-21",
    "name": "イカリソウ（碇草）",
    "reading": "いかりそう",
    "scientificName": "Epimedium grandiflorum",
    "month": 3,
    "day": 21,
    "meanings": [
      "君を離さない",
      "執着",
      "旅立ち",
      "あなたを捕らえる"
    ],
    "description": "船の錨（いかり）に似た独特で風情ある4本の距（きょ）を持つ花を咲かせる山野草。春の里山にひっそりと佇み、古くから薬草としても重宝されてきました。",
    "category": "花",
    "svgType": "default",
    "flowerColor": "#e879f9",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-purple-400/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "4本の長い突起（距）が四方に突き出し、船の錨そっくりの形をしていることから名付けられました。",
      "漢方では滋養強壮の生薬「淫羊藿（いんようかく）」として古来より珍重されています。",
      "春の木漏れ日を浴びてうつむき加減に咲く姿は、日本の茶花としても高い人気を誇ります。"
    ],
    "rarity": "Normal"
  },
  "3-24": {
    "id": "3-24",
    "name": "カタクリ（片栗）",
    "reading": "かたくり",
    "scientificName": "Erythronium japonicum",
    "month": 3,
    "day": 24,
    "meanings": [
      "初恋",
      "寂しさに耐える"
    ],
    "description": "早春の雑木林の木漏れ日の中に薄紫色の花弁を反り返らせて咲く「春の妖精（スプリング・エフェメラル）」。可憐で奥ゆかしい美しさを持ちます。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#c084fc",
    "secondaryColor": "#e879f9",
    "bgGradient": "from-purple-400/15 via-indigo-300/10 to-emerald-500/10",
    "triviaList": [
      "種から発芽して花を咲かせるまでに約7〜8年も地下でじっと力を蓄え続けます。",
      "本来の「片栗粉」はこのカタクリの鱗茎（地下茎）から作られていた純度100%の上質なデンプンでした。",
      "地上に葉と花を出すのは春のわずか1〜2ヶ月だけで、夏には姿を消して地下で眠りにつきます。"
    ],
    "rarity": "Normal"
  },
  "4-29": {
    "id": "4-29",
    "name": "フクシア",
    "reading": "ふくしあ",
    "scientificName": "Fuchsia",
    "month": 4,
    "day": 29,
    "meanings": [
      "上品な趣味",
      "好みの良さ",
      "熱烈な心"
    ],
    "description": "「貴婦人の耳飾り（レディース・イヤリング）」とも呼ばれ、下向きに優雅に垂れ下がる姿が幻想的で美しい熱帯アメリカ原産の花です。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "鮮やかな萼片と花弁が二重のドレスのように広がり、風に揺れる姿はまるで踊る妖精のようです。",
      "ドイツの著名な植物学者レオンハルト・フックスの名にちなんで命名されました。",
      "原産地ではハチドリがこの甘い蜜を求めてやってくる鳥媒花として進化しました。"
    ],
    "rarity": "Normal"
  },
  "5-19": {
    "id": "5-19",
    "name": "サツキ（皐月）",
    "reading": "さつき",
    "scientificName": "Rhododendron indicum",
    "month": 5,
    "day": 19,
    "meanings": [
      "節制",
      "貞淑",
      "節約",
      "協力を得られる"
    ],
    "description": "初夏の風に揺れ、鮮やかな紅や桃色の花を咲かせるツツジ科の低木。旧暦の皐月（5月）に咲くことから名付けられ、古くから日本の庭園や盆栽で愛されています。",
    "category": "花",
    "svgType": "azalea",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-rose-500/15 via-pink-400/10 to-emerald-500/10",
    "triviaList": [
      "ツツジより約1ヶ月遅れて咲き始め、新緑が眩しい季節を鮮やかに彩ります。",
      "厳しい岩場や乾燥にも耐える性質から「節制」「節約」の花言葉が生まれました。",
      "江戸時代から数多くの園芸品種が生み出され、盆栽の世界では不動の人気を誇ります。"
    ],
    "rarity": "Normal"
  },
  "5-23": {
    "id": "5-23",
    "name": "ゴデチア",
    "reading": "ごでちあ",
    "scientificName": "Clarkia amoena",
    "month": 5,
    "day": 23,
    "meanings": [
      "変わらぬ愛",
      "お見舞い",
      "静かな喜び"
    ],
    "description": "シルクやサテンのような光沢とフリルのある大輪の花を咲かせることから「サテンフラワー」とも呼ばれる初夏の華やかな草花です。",
    "category": "花",
    "svgType": "poppy",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "花びらがサテン生地のようにしっとりと輝くため「サテンフラワー」の英名を持ちます。",
      "スイスの植物学者ゴデ（C.H. Godet）の名にちなんで名付けられました。",
      "初夏の涼しい風を好み、幾重にも重なって群れ咲く花姿は花束の主役として大人気です。"
    ],
    "rarity": "Normal"
  },
  "6-18": {
    "id": "6-18",
    "name": "タイム",
    "reading": "たいむ",
    "scientificName": "Thymus vulgaris",
    "month": 6,
    "day": 18,
    "meanings": [
      "勇気",
      "活動力",
      "清潔感"
    ],
    "description": "清涼感あふれる芳香と防腐作用を持ち、古代ギリシャの戦士たちが「勇気」の象徴として身につけたとされる爽やかなハーブ。小さな花も愛らしいです。",
    "category": "観葉・ハーブ",
    "svgType": "lavender",
    "flowerColor": "#a78bfa",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-indigo-400/15 via-purple-300/10 to-emerald-500/10",
    "subFlowers": [
      {
        "name": "イブキジャコウソウ（伊吹麝香草）",
        "meanings": ["勇気", "清潔感", "神聖な愛"],
        "note": "タイムと同属（イブキジャコウソウ属）の日本固有変種。伊吹山などに自生し麝香のような芳香を放つ"
      }
    ],
    "triviaList": [
      "ギリシャ語の「thumos（勇気・気概）」が語源とされ、中世の騎士に女性が刺繍して贈りました。",
      "日本には同属の「イブキジャコウソウ」が伊吹山などの岩場に自生し、歩くと靴に麝香（じゃこう）の甘い香りが移ると讃えられます。",
      "抗菌・防腐作用に優れたチモール成分を含み、料理やアロマテラピーの万能ハーブとして親しまれます。"
    ],
    "rarity": "Normal"
  },
  "6-19": {
    "id": "6-19",
    "name": "バラ（薔薇）",
    "reading": "ばら",
    "scientificName": "Rosa",
    "month": 6,
    "day": 19,
    "meanings": [
      "愛",
      "美",
      "誇り",
      "高貴"
    ],
    "description": "「花の女王」として世界中で最も愛され、讃えられてきた華麗なる名花。芳醇な香りと幾重にも重なる優美な花弁は、気品と誇りの象徴です。",
    "category": "花",
    "svgType": "rose",
    "flowerColor": "#e11d48",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-pink-500/10",
    "triviaList": [
      "古代エジプトの女王クレオパトラは部屋一面にバラの花びらを敷き詰めて香らせたと言われます。",
      "本数によっても意味が変わり、1本は「一目惚れ」、100本は「100%の愛」を意味します。",
      "甘く芳醇なローズオイルは1滴を抽出するのに約数十輪ものバラが必要とされる貴重な宝物です。"
    ],
    "rarity": "Normal"
  },
  "6-27": {
    "id": "6-27",
    "name": "カラー",
    "reading": "からー",
    "scientificName": "Zantedeschia",
    "month": 6,
    "day": 27,
    "meanings": [
      "華麗なる美",
      "乙女のしとやかさ",
      "清浄"
    ],
    "description": "すっきりと洗練された漏斗状の仏炎苞が気品と清潔感を放つスタイリッシュな花。ウェディングブーケやフォーマルな装飾で格調高く愛されています。",
    "category": "花",
    "svgType": "calla",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#e2e8f0",
    "bgGradient": "from-slate-200/20 via-white/40 to-emerald-500/10",
    "triviaList": [
      "修道女の襟（カラー）に似ていることや、ギリシャ語の「kallos（美）」が名前の由来とされます。",
      "花びらのように見える部分は「仏炎苞（ぶつえんほう）」という葉が変化したものです。",
      "直線的で無駄のないミニマルな美しさはモダンなフラワーデザインに欠かせない存在です。"
    ],
    "rarity": "Normal"
  },
  "7-3": {
    "id": "7-3",
    "name": "マツバギク（松葉菊）",
    "reading": "まつばぎく",
    "scientificName": "Lampranthus spectabilis",
    "month": 7,
    "day": 3,
    "meanings": [
      "怠惰",
      "のんびり気分",
      "心広い愛情"
    ],
    "description": "松のような肉厚の葉と、太陽の光を浴びてメタリックな輝きを放つピンクや紫の花弁を開く多肉植物。日陰や夕方には花を閉じてひと休みします。",
    "category": "花",
    "svgType": "daisy",
    "flowerColor": "#f472b6",
    "secondaryColor": "#ec4899",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "太陽光に反応して日中だけ大きく開き、曇天や夕暮れには閉じる気ままなリズムを持ちます。",
      "葉が松葉のように細長く多肉質で水分をたっぷり蓄えるため、強い日差しや乾燥にも耐え抜きます。",
      "絨毯のように地面を覆い尽くして咲き誇る鮮やかな輝きは夏の海岸や花壇を彩ります。"
    ],
    "rarity": "Normal"
  },
  "7-7": {
    "id": "7-7",
    "name": "アベリア",
    "reading": "あべりあ",
    "scientificName": "Abelia",
    "month": 7,
    "day": 7,
    "meanings": [
      "強運",
      "謙虚",
      "謙譲"
    ],
    "description": "初夏から晩秋まで、釣鐘型の白や淡いピンクの小さな花を途切れることなく咲かせ続ける強健な花木。生垣や街路樹として街を優しく潤します。",
    "category": "樹木",
    "svgType": "jasmine",
    "flowerColor": "#fbcfe8",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-300/15 via-rose-200/10 to-emerald-500/10",
    "triviaList": [
      "排気ガスや強い日差し、寒さにもへこたれない強靭な生命力から街路樹の定番となっています。",
      "中国原産の原種からヨーロッパで品種改良され、世界中に広まった歴史ある低木です。",
      "秋に花が終わった後も、赤褐色の萼片がプロペラのように残って長く楽しめます。"
    ],
    "rarity": "Normal",
    "subFlowers": [
          {
                "name": "ササ（笹・七夕の笹竹）",
                "meanings": [
                      "ささやかな幸せ",
                      "節度",
                      "神聖"
                ],
                "note": "願いを託す七夕の伝統植物"
          }
    ]
  },
  "8-11": {
    "id": "8-11",
    "name": "デュランタ",
    "reading": "でゅらんた",
    "scientificName": "Duranta erecta",
    "month": 8,
    "day": 11,
    "meanings": [
      "あなたを見守る",
      "独りよがり",
      "歓迎"
    ],
    "description": "爽やかな紫青色の小花が房状に垂れ下がって咲き、初夏から秋の風に揺れる優美な花。「宝塚」という品種が特に有名で愛されています。",
    "category": "花",
    "svgType": "wisteria",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#a78bfa",
    "bgGradient": "from-violet-500/15 via-purple-400/10 to-emerald-500/10",
    "subFlowers": [
      {
        "name": "パキスタキス（ウコンサンゴ）",
        "meanings": ["美しい娘", "愛嬌", "光明"],
        "note": "重なり合う鮮やかな黄色の苞葉から純白の花が覗く熱帯花木"
      }
    ],
    "triviaList": [
      "花びらの縁が白い覆輪になる「タカラヅカ」という品種は、優雅なタカラジェンヌの袴姿に似ていることから命名されました。",
      "花が終わると小さなオレンジ色の丸い実を鈴なりにつけ、二度楽しめます。",
      "イタリアの植物学者カストーレ・デュランテの名に敬意を表して命名されました。"
    ],
    "rarity": "Normal"
  },
  "8-14": {
    "id": "8-14",
    "name": "センニチコウ（千日紅）",
    "reading": "せんにちこう",
    "scientificName": "Gomphrena globosa",
    "month": 8,
    "day": 14,
    "meanings": [
      "色あせぬ愛",
      "不朽",
      "永遠の恋"
    ],
    "description": "丸くぽんぽんとした愛らしい花（苞）が、千日もの長い間色あせずに咲き続けることから名付けられた強健な夏花。ドライフラワーの定番です。",
    "category": "花",
    "svgType": "clover",
    "flowerColor": "#d946ef",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-fuchsia-500/15 via-pink-400/10 to-emerald-500/10",
    "triviaList": [
      "乾燥させても鮮やかな紅紫色がほとんど色褪せないため「千日紅」と名付けられました。",
      "熱帯アメリカ原産で、真夏の猛暑や強い日差しの中でも元気に咲き続けるスタミナ花です。",
      "カサカサした花びらの部分は苞（ほう）で、本当の花はその隙間に咲く微小な黄色い粒です。"
    ],
    "rarity": "Normal"
  },
  "8-26": {
    "id": "8-26",
    "name": "ヘチマ（糸瓜）",
    "reading": "へちま",
    "scientificName": "Luffa aegyptiaca",
    "month": 8,
    "day": 26,
    "meanings": [
      "悠々自適",
      "おどけた調子",
      "情け深い"
    ],
    "description": "夏に鮮やかな黄色い花を咲かせ、長く大きな実をつけるつる性植物。ヘチマ水や繊維タワシなど古くから人々の暮らしに寄り添ってきた親しみ深い実です。",
    "category": "野菜・実",
    "svgType": "sunflower",
    "flowerColor": "#eab308",
    "secondaryColor": "#fbbf24",
    "bgGradient": "from-amber-400/15 via-yellow-300/10 to-emerald-500/10",
    "triviaList": [
      "「いとうり」の「い」が抜けて「とうり」となり、「と」はいろは順で「へ」と「ち」の間（へち間）にあることから「へちま」と呼ばれるようになりました。",
      "茎から採れる「ヘチマ水」は江戸時代から女性の美肌化粧水として親しまれてきました。",
      "熟した実の繊維は天然のボディスポンジやタワシとして世界中で重宝されています。"
    ],
    "rarity": "Normal"
  },
  "8-28": {
    "id": "8-28",
    "name": "スグリ（醋栗）",
    "reading": "すぐり",
    "scientificName": "Ribes",
    "month": 8,
    "day": 28,
    "meanings": [
      "私はあなたを喜ばせる",
      "期待",
      "予想"
    ],
    "description": "初夏に透き通るようなルビー色や翡翠色の甘酸っぱい果実を房状に実らせる小低木。ジャムや果実酒としてヨーロッパで親しまれています。",
    "category": "野菜・実",
    "svgType": "nandina",
    "flowerColor": "#ef4444",
    "secondaryColor": "#f87171",
    "bgGradient": "from-red-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "赤スグリ（レッドカラント）や黒スグリ（カシス）など多彩な種類があり、ビタミンCの宝庫です。",
      "宝石のように透き通った果実が鈴なりになる姿が「私はあなたを喜ばせる」の花言葉の由来です。",
      "冷涼な気候を好み、ヨーロッパの家庭の庭先には必ずと言っていいほど植えられています。"
    ],
    "rarity": "Normal"
  },
  "8-29": {
    "id": "8-29",
    "name": "サルスベリ（百日紅）",
    "reading": "さるすべり",
    "scientificName": "Lagerstroemia indica",
    "month": 8,
    "day": 29,
    "meanings": [
      "雄弁",
      "愛嬌",
      "不用意"
    ],
    "description": "夏の強い日差しの下、フリル状の鮮やかな紅や桃色の花を約100日間にわたって咲かせ続ける夏を代表する花木。滑らかな幹肌も特徴的です。",
    "category": "樹木",
    "svgType": "azalea",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-rose-500/15 via-pink-400/10 to-teal-500/10",
    "triviaList": [
      "幹の皮が剥がれ落ちてスベスベしており、木登りが得意な猿も滑りそうに見えることが名前の由来です。",
      "次から次へと新しい蕾が開花するため、約3ヶ月（百日）も咲き続けることから「百日紅」と書かれます。",
      "枝の先端で花が華やかに咲き誇る堂々とした姿から「雄弁」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "9-4": {
    "id": "9-4",
    "name": "ダチュラ（朝鮮朝顔）",
    "reading": "だちゅら",
    "scientificName": "Datura",
    "month": 9,
    "day": 4,
    "meanings": [
      "愛嬌",
      "偽りの魅力",
      "あなたを酔わせる"
    ],
    "description": "夕暮れ時にラッパ状の白や紫の大きな妖艶な花を開き、甘い香りを放つ魅惑的な植物。神秘的な佇まいで人々を惹きつけます。",
    "category": "花",
    "svgType": "morning_glory",
    "flowerColor": "#a855f7",
    "secondaryColor": "#c084fc",
    "bgGradient": "from-purple-500/15 via-violet-400/10 to-emerald-500/10",
    "triviaList": [
      "夕暮れから夜にかけて芳香を放ちながら大きな花弁を開く夜咲きの神秘的な花です。",
      "江戸時代の外科医・華岡青洲が世界初の全身麻酔手術を成功させた麻酔薬「通仙散」の主成分でした。",
      "天使のトランペット（エンジェルストランペット）とも呼ばれ、幻想的な美しさを誇ります。"
    ],
    "rarity": "Normal"
  },
  "9-11": {
    "id": "9-11",
    "name": "ムクゲ（木槿）",
    "reading": "むくげ",
    "scientificName": "Hibiscus syriacus",
    "month": 9,
    "day": 11,
    "meanings": [
      "信念",
      "一途な心",
      "新しい美"
    ],
    "description": "夏の盛りから初秋にかけて、凛とした美しい花を次々と咲かせ続けるアオイ科の花木。朝開いて夕方にはしぼむ一日花ですが、絶え間なく新しい蕾を開き続ける姿から「不屈の信念」の象徴とされます。",
    "category": "樹木",
    "svgType": "hibiscus",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "一日で花が落ちても次々と新しい花を咲かせ続けることから「信念」「一途な心」の花言葉が生まれました。",
      "千利休をはじめとする茶人たちにも愛され、秋の茶花として茶室に飾られてきました。",
      "暑さにも寒さにも非常に強く、日本中の庭木や生け垣として親しまれています。"
    ],
    "rarity": "Normal"
  },
  "9-17": {
    "id": "9-17",
    "name": "リクニス（スイセンノウ）",
    "reading": "りくにす",
    "scientificName": "Lychnis coronaria",
    "month": 9,
    "day": 17,
    "meanings": [
      "私の愛は不変",
      "名誉",
      "機転"
    ],
    "description": "銀白色のフェルトのような綿毛に包まれた茎葉と、鮮やかなマゼンタピンクの花のコントラストが印象的なナデシコ科の多年草です。",
    "category": "花",
    "svgType": "carnation",
    "flowerColor": "#d946ef",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-fuchsia-500/15 via-pink-400/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ語の「lychnos（ランプ・灯火）」が語源で、輝くような鮮やかな花色に由来します。",
      "茎や葉が白い綿毛で覆われてフランネル生地のように柔らかな手触りを持ちます。",
      "花持ちが良く次々に開花し続ける誠実な姿から「私の愛は不変」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "9-19": {
    "id": "9-19",
    "name": "サルビア",
    "reading": "さるびあ",
    "scientificName": "Salvia splendens",
    "month": 9,
    "day": 19,
    "meanings": [
      "燃える思い",
      "家族愛",
      "知恵",
      "良い家庭"
    ],
    "description": "燃え上がるような鮮烈な緋色の花穂をすっと伸ばすブラジル原産の情熱的な花。赤だけでなく青や紫など多彩で、初夏から秋まで街角や花壇を彩ります。",
    "category": "花",
    "svgType": "salvia",
    "flowerColor": "#ef4444",
    "secondaryColor": "#f87171",
    "bgGradient": "from-red-500/15 via-orange-400/10 to-emerald-500/10",
    "triviaList": [
      "ラテン語の「salvare（治療する・救う）」が名前の語源で、ハーブのセージの仲間です。",
      "花の根元を抜いて吸うとほんのり甘い蜜があり、子どもの頃の懐かしい思い出を持つ人も多い花です。",
      "鮮烈な赤色が秋風の中で力強く群れ咲く光景は見る人に生きる元氣を与えてくれます。"
    ],
    "rarity": "Normal"
  },
  "10-4": {
    "id": "10-4",
    "name": "エノコログサ（ねこじゃらし）",
    "reading": "えのころぐさ",
    "scientificName": "Setaria viridis",
    "month": 10,
    "day": 4,
    "meanings": [
      "愛嬌",
      "遊び",
      "素直"
    ],
    "description": "子犬の尾に似ていることから「狗尾草」と名付けられ、猫が喜んでじゃれることから「ねこじゃらし」として親しまれる、愛嬌たっぷりな野草です。",
    "category": "観葉・ハーブ",
    "svgType": "foxtail",
    "flowerColor": "#84cc16",
    "secondaryColor": "#a3e635",
    "bgGradient": "from-lime-400/15 via-green-300/10 to-emerald-500/10",
    "triviaList": [
      "「えのころ」とは子犬（犬ころ）のことで、ふわふわした花穂が子犬のしっぽに見えることが由来です。",
      "猫の前で揺らすと夢中になって飛びつくことから「ねこじゃらし」の愛称で全国で親しまれます。",
      "粟（アワ）の原種とされ、昔は飢饉の際の救荒植物として食べられた歴史もあります。"
    ],
    "rarity": "Normal"
  },
  "10-5": {
    "id": "10-5",
    "name": "パイナップルリリー",
    "reading": "ぱいなっぷるりりー",
    "scientificName": "Eucomis",
    "month": 10,
    "day": 5,
    "meanings": [
      "完全",
      "完璧",
      "完璧主義"
    ],
    "description": "茎の頂点にパイナップルのような愛らしい葉の冠を載せ、星形の小花をびっしり咲かせるユニークな球根植物。エキゾチックで存在感抜群です。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#a3e635",
    "secondaryColor": "#bef264",
    "bgGradient": "from-lime-400/15 via-yellow-300/10 to-teal-500/10",
    "triviaList": [
      "学名ユーコミスはギリシャ語で「美しい頭髪」を意味し、頭頂部のユニークな葉冠にちなみます。",
      "南アフリカ原産で、星形の可憐な小花が柱状に数百輪も密集して咲き誇ります。",
      "幾何学的で一切の隙がない端正な花姿から「完璧」の花言葉が捧げられました。"
    ],
    "rarity": "Normal"
  },
  "10-7": {
    "id": "10-7",
    "name": "キンモクセイ（金木犀）",
    "reading": "きんもくせい",
    "scientificName": "Osmanthus fragrans aurantiacus",
    "month": 10,
    "day": 7,
    "meanings": [
      "謙虚",
      "気高い人",
      "陶酔"
    ],
    "description": "秋の澄んだ空気に甘くどこか懐かしい極上の芳香を遠くまで漂わせるオレンジ色の小さな花。香りの存在感に比べて控えめな花姿から「謙虚」と称されます。",
    "category": "樹木",
    "svgType": "osmanthus",
    "flowerColor": "#f97316",
    "secondaryColor": "#fb923c",
    "bgGradient": "from-orange-500/15 via-amber-400/10 to-yellow-500/10",
    "triviaList": [
      "三大香木（春の沈丁花、夏の梔子、秋の金木犀）の中で最も遠くまで甘い香りを届ける秋の主役です。",
      "中国では「桂花」と呼ばれ、お茶（桂花茶）や白ワイン（桂花陳酒）の香り付けに使われます。",
      "小さなオレンジ色の花がわずか数日で潔く散る奥ゆかしさから「謙虚」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "10-8": {
    "id": "10-8",
    "name": "パセリ",
    "reading": "ぱせり",
    "scientificName": "Petroselinum crispum",
    "month": 10,
    "day": 8,
    "meanings": [
      "お祭り気分",
      "勝利",
      "愉快",
      "知恵"
    ],
    "description": "爽やかな香りとビタミン・ミネラルを豊富に含む栄養価の王様。古代ギリシャでは競技の勝利者の花冠にも編まれた歴史ある香味野菜です。",
    "category": "観葉・ハーブ",
    "svgType": "parsley",
    "flowerColor": "#16a34a",
    "secondaryColor": "#22c55e",
    "bgGradient": "from-emerald-500/15 via-green-400/10 to-teal-500/10",
    "triviaList": [
      "古代ギリシャのネメア競技祭では勝利者にパセリの冠が贈られました。",
      "βカロテンやビタミンC、鉄分が極めて豊富に含まれるスーパーハーブです。",
      "料理の彩りだけでなく口臭予防や消化促進にも効果があると古くから重宝されています。"
    ],
    "rarity": "Normal"
  },
  "10-18": {
    "id": "10-18",
    "name": "コットンツリー（綿の木）",
    "reading": "こっとんつりー",
    "scientificName": "Gossypium",
    "month": 10,
    "day": 18,
    "meanings": [
      "優秀",
      "偉大",
      "私を包んで"
    ],
    "description": "黄色いオクラに似た花を咲かせた後、実が弾けて真っ白でふわふわの柔らかなコットンボールが現れます。温もりと優しさを届ける天然素材の母です。",
    "category": "観葉・ハーブ",
    "svgType": "lotus",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#e2e8f0",
    "bgGradient": "from-slate-200/20 via-zinc-100/30 to-emerald-500/10",
    "triviaList": [
      "花が咲いた後の実がパカッと弾けると、中から純白のふわふわの綿毛が飛び出します。",
      "人類最古の天然繊維として数千年前から世界中の人々の衣服や暮らしを支えてきました。",
      "ふわふわの綿毛が種を優しく包み込んで守る姿から「私を包んで」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "10-21": {
    "id": "10-21",
    "name": "ワイルドストロベリー",
    "reading": "わいるどすとろべりー",
    "scientificName": "Fragaria vesca",
    "month": 10,
    "day": 21,
    "meanings": [
      "尊重と愛情",
      "幸福な家庭",
      "無邪気"
    ],
    "description": "小さな白い花と甘酸っぱい赤い果実を実らせる野いちご。「幸運を運ぶハーブ」として親しまれ、可憐な姿と旺盛な生命力で世界中で愛されています。",
    "category": "野菜・実",
    "svgType": "strawberry",
    "flowerColor": "#f87171",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-rose-400/15 via-red-300/10 to-emerald-500/10",
    "triviaList": [
      "ヨーロッパでは「奇跡のイチゴ」と呼ばれ、育てると幸せが訪れるというジンクスがあります。",
      "果実は通常のイチゴより小粒ですが、濃厚で野性味あふれる甘酸っぱい香りを放ちます。",
      "葉はお茶（ストロベリーリーフティー）としても古くから親しまれる万能ハーブです。"
    ],
    "rarity": "Normal"
  },
  "10-28": {
    "id": "10-28",
    "name": "パキラ",
    "reading": "ぱきら",
    "scientificName": "Pachira aquatica",
    "month": 10,
    "day": 28,
    "meanings": [
      "快活",
      "勝利",
      "発財（金運を呼ぶ）"
    ],
    "description": "手のひら状に広がるみずみずしい緑の葉と、編み込まれた太い幹が力強い観葉植物。「発財樹」とも呼ばれ、どんな環境でも元気に育つ生命力を誇ります。",
    "category": "観葉・ハーブ",
    "svgType": "pachira",
    "flowerColor": "#22c55e",
    "secondaryColor": "#16a34a",
    "bgGradient": "from-green-500/15 via-emerald-400/10 to-teal-500/10",
    "triviaList": [
      "貧しい農民がパキラを育てて増やして売り富を築いたという言い伝えから「発財樹（Money tree）」と呼ばれます。",
      "日陰や乾燥にも強く初心者でもぐんぐん育つたくましさから「快活」の花言葉がつきました。",
      "幹を三つ編みに仕立てるユニークな栽培法は台湾で考案され、世界中で大流行しました。"
    ],
    "rarity": "Normal"
  },
  "11-15": {
    "id": "11-15",
    "name": "チョコレートコスモス",
    "reading": "ちょこれーとこすもす",
    "scientificName": "Cosmos atrosanguineus",
    "month": 11,
    "day": 15,
    "meanings": [
      "恋の思い出",
      "移り変わらぬ気持ち",
      "終焉"
    ],
    "description": "深いチョコレート色のシックな花びらと、本物のビターチョコレートのような甘い香りを放つ魅惑のコスモス。秋の庭園をドラマチックに彩ります。",
    "category": "花",
    "svgType": "cosmos",
    "flowerColor": "#831843",
    "secondaryColor": "#9d174d",
    "bgGradient": "from-pink-900/15 via-rose-800/10 to-slate-900/10",
    "triviaList": [
      "花弁から甘いバニリン成分が放たれ、顔を近づけると本当にチョコレートの香りが漂います。",
      "メキシコ原産の原種は自生地では絶滅寸前とされ、挿し木や交配によって大切に受け継がれています。",
      "深みのある黒赤色（ベルベットのような質感）は秋の大人びたフラワーアレンジの最高峰です。"
    ],
    "rarity": "Normal"
  },
  "11-17": {
  "id": "11-17",
  "name": "ツタ（蔦）",
  "reading": "つた",
  "scientificName": "Parthenocissus tricuspidata",
  "month": 11,
  "day": 17,
  "meanings": [
    "勤勉",
    "誠実",
    "結婚",
    "永遠の愛"
  ],
  "description": "壁や樹木にしっかりと吸盤を伸ばして力強く這い登り、秋には鮮やかな紅葉を見せるツタ。「勤勉」「誠実」「永遠の愛」という、変わらぬ絆を象徴します。",
  "category": "つる性植物",
  "svgType": "ivy",
  "flowerColor": "#b91c1c",
  "secondaryColor": "#fca5a5",
  "bgGradient": "from-red-600/15 via-orange-400/10 to-amber-500/10",
  "subFlowers": [
    {
      "name": "フキ（蕗）",
      "reading": "ふき",
      "meanings": [
        "愛嬌",
        "公平",
        "私を正しく認めて"
      ],
      "note": "ツタに席を譲った植物（春一番の蕗の薹とともに大地を潤す伝統和ハーブ）"
    }
  ],
  "triviaList": [
    "紅葉するツタは「錦蔦（にしきづた）」とも呼ばれ、歴史ある洋館や大学のシンボルとして親しまれます。",
    "補足席には「ツタに席を譲った植物」としてフキ（蕗）が登録され、歴史のバトンを繋いでいます！",
    "吸盤で自らを支えて高く登る姿から「勤勉」の花言葉が讃えられます。"
  ],
  "rarity": "Normal"
},

  "11-29": {
    "id": "11-29",
    "name": "ベゴニア",
    "reading": "べごにあ",
    "scientificName": "Begonia",
    "month": 11,
    "day": 29,
    "meanings": [
      "親切",
      "片思い",
      "公平",
      "愛の告白"
    ],
    "description": "ハート形の左右非対称な葉と、色鮮やかで愛らしい花を次々と咲かせる世界的な名花。フランスの植物学者ベゴンにちなんで名付けられました。",
    "category": "花",
    "svgType": "begonia",
    "flowerColor": "#fb7185",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "葉が左右非対称でゆがんだハート形をしていることから「片思い」の花言葉が生まれました。",
      "熱帯から温帯にかけて数千以上の園芸品種があり、室内でも年中花を楽しめる万能プランツです。",
      "原産地を探索したフランス領アンティル諸島総督ミシェル・ベゴンの名に敬意を表して命名されました。"
    ],
    "rarity": "Normal"
  },
  "12-2": {
    "id": "12-2",
    "name": "サイネリア（シネラリア）",
    "reading": "さいねりあ",
    "scientificName": "Pericallis hybrida",
    "month": 12,
    "day": 2,
    "meanings": [
      "いつも快活",
      "喜び",
      "希望",
      "富貴"
    ],
    "description": "冬から春にかけて、鮮やかで多彩な花冠を株一面にこんもりと咲かせるキク科の鉢花。室内を明るく温かい笑顔で満たしてくれる冬の人気者です。",
    "category": "花",
    "svgType": "daisy",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#60a5fa",
    "bgGradient": "from-blue-500/15 via-indigo-400/10 to-emerald-500/10",
    "triviaList": [
      "青、紫、ピンク、白など驚くほど鮮やかで豊富なグラデーションの花弁がブーケのように咲きます。",
      "冬の寒さの中で次々と花を咲かせて部屋を明るくすることから「いつも快活」の花言葉がつきました。",
      "カナリア諸島原産で、ヨーロッパで品種改良されて冬の代表的な鉢花として定着しました。"
    ],
    "rarity": "Normal"
  },
  "12-6": {
    "id": "12-6",
    "name": "ユキノシタ（雪の下）",
    "reading": "ゆきのした",
    "scientificName": "Saxifraga stolonifera",
    "month": 12,
    "day": 6,
    "meanings": [
      "深い愛情",
      "博愛",
      "切実な愛"
    ],
    "description": "雪の下でも緑の葉を枯らさず保ち、初夏には虎斑模様の入った純白の可憐な小花を咲かせます。古くから家庭の常備薬としても親しまれました。",
    "category": "花",
    "svgType": "snowdrop",
    "flowerColor": "#e2e8f0",
    "secondaryColor": "#cbd5e1",
    "bgGradient": "from-slate-300/15 via-zinc-200/10 to-emerald-500/10",
    "triviaList": [
      "冬の厳しい雪に覆われても緑の葉が生き生きと残る強い生命力が「雪の下」の名前の由来です。",
      "初夏に咲く花は上の3枚が小さく下に2枚の大きな花弁が垂れるユニークな姿をしています。",
      "葉は天ぷらにして食べられるほか、民間薬として火傷や腫れ物に重宝されてきました。"
    ],
    "rarity": "Normal"
  },
  "12-27": {
    "id": "12-27",
    "name": "ヤブコウジ（十両）",
    "reading": "やぶこうじ",
    "scientificName": "Ardisia japonica",
    "month": 12,
    "day": 27,
    "meanings": [
      "明日の幸福",
      "豊香"
    ],
    "description": "つややかな緑の葉の陰に、真紅の小さな実を結ぶ常緑小低木。お正月の縁起木「十両」として知られ、冬の寒さの中で静かに希望を灯します。",
    "category": "樹木",
    "svgType": "nandina",
    "flowerColor": "#dc2626",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-red-600/15 via-emerald-400/10 to-amber-500/10",
    "triviaList": [
      "万両（マンリョウ）、百両（カラタチバナ）に対して実が控えめなことから「十両」と呼ばれ、お正月を祝う縁起木です。",
      "万葉集にも「山橘（やまたちばな）」の名で詠まれ、古くから日本人に愛されてきました。",
      "冬の森の雪の中でも艶やかな赤い実をしっかりと抱き続ける姿が「明日の幸福」の象徴です。"
    ],
    "rarity": "Normal"
  },
  "7-15": {
  "id": "7-15",
  "name": "ナツツバキ（夏椿・沙羅樹）",
  "reading": "なつつばき",
  "scientificName": "Stewartia pseudocamellia",
  "month": 7,
  "day": 15,
  "meanings": [
    "愛らしさ",
    "はかない美しさ",
    "気取らない優美さ"
  ],
  "description": "梅雨明けの初夏にツバキに似た真っ白な五弁花を梢に咲かせる名木。朝に開いて夕方にはポトリと落ちる一日花。「愛らしさ」「はかない美しさ」「気取らない優美さ」を湛えます。",
  "category": "花木",
  "svgType": "camellia",
  "flowerColor": "#f8fafc",
  "secondaryColor": "#fef08a",
  "bgGradient": "from-emerald-500/15 via-teal-300/10 to-slate-200/15",
  "triviaList": [
    "仏教の三大聖樹「沙羅双樹」の代用として日本の寺院に植えられてきた歴史を持ちます。",
    "樹皮が滑らかで赤褐色に剥がれるため、幹の佇まいそのものにも「気取らない優美さ」があります。",
    "清楚で清涼感あふれる姿は、盛夏の庭に涼風を運んでくれる茶花としても珍重されます。"
  ],
  "rarity": "Normal"
},

  "4-9": {
    "id": "4-9",
    "name": "ミヤコワスレ（都忘れ）",
    "reading": "みやこわすれ",
    "scientificName": "Gymnaster savatieri",
    "month": 4,
    "day": 9,
    "meanings": [
      "しばしの別れ",
      "また会う日まで",
      "短い恋"
    ],
    "description": "春から初夏にかけて青紫や淡紅色の清楚な花を咲かせる日本の野菊。承久の乱で佐渡へ配流された順徳上皇が、この花を見て都への想いを慰めたという故事から名付けられました。",
    "category": "花",
    "svgType": "aster",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-purple-500/15 via-indigo-300/10 to-teal-500/10",
    "triviaList": [
      "佐渡に流された順徳上皇が「いかにして契りおきけむ白菊を 都忘れと名づくるも憂し」と詠んだ歴史があります。",
      "ミヤマヨメナ（深山嫁菜）の園芸品種で、江戸時代から茶花として広く愛されてきました。",
      "静かで落ち着いた佇まいは、大切な人との再会を願う祈りの象徴です。"
    ],
    "rarity": "Normal"
  },
  "11-28": {
    "id": "11-28",
    "name": "サンダーソニア",
    "reading": "さんだーそにあ",
    "scientificName": "Sandersonia aurantiaca",
    "month": 11,
    "day": 28,
    "meanings": [
      "祝福",
      "祈り",
      "望郷",
      "愛嬌"
    ],
    "description": "鮮やかなオレンジ色の提灯のような釣鐘形の花を鈴なりに咲かせる南アフリカ原産の球根植物。「クリスマスベル」とも呼ばれ、冬の祝祭を温かく彩ります。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#f97316",
    "secondaryColor": "#fdba74",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "南アフリカで発見した植物学者ジョン・サンダーソンの名にちなんで名付けられました。",
      "風に揺れるランタンのような形から「チャイニーズ・ランタン・リリー」とも呼ばれます。",
      "クリスマスシーズンに開花することから「祈り」「祝福」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "6-14": {
    "id": "6-14",
    "name": "ブルースター（オキシペタラム）",
    "reading": "ぶるーすたー",
    "scientificName": "Oxypetalum coeruleum",
    "month": 6,
    "day": 14,
    "meanings": [
      "幸福な愛",
      "信じ合う心"
    ],
    "description": "透き通るような淡いスカイブルーの五弁の星形小花を咲かせる花。欧米の花嫁が身につけると幸せになれる「サムシング・ブルー」の定番として愛されています。",
    "category": "花",
    "svgType": "forget_me_not",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#7dd3fc",
    "bgGradient": "from-sky-400/15 via-blue-300/10 to-teal-500/10",
    "triviaList": [
      "咲き始めの淡いブルーから徐々に紫、そしてピンクへと花色が移り変わるロマンチックな変化を見せます。",
      "欧米では男の子の誕生祝いやウェディングのブーケに欠かせないラッキーフラワーです。",
      "茎を切ると白いミルクのような樹液が出ますが、水揚げをよくする工夫をして長持ちさせます。"
    ],
    "rarity": "Normal"
  },
  "4-22": {
    "id": "4-22",
    "name": "ムスカリ（ブドウヒヤシンス）",
    "reading": "むすかり",
    "scientificName": "Muscari",
    "month": 4,
    "day": 22,
    "meanings": [
      "失望",
      "失意",
      "明るい未来",
      "寛大なる愛"
    ],
    "description": "濃い青紫色の壺形の小花がブドウの房のように密集して咲く愛らしい春の球根花。ヨーロッパでは青が悲しみを表す一方、「失意から立ち上がる明るい未来」の希望も宿します。",
    "category": "花",
    "svgType": "muscari",
    "flowerColor": "#4338ca",
    "secondaryColor": "#6366f1",
    "bgGradient": "from-indigo-600/15 via-blue-400/10 to-emerald-500/10",
    "triviaList": [
      "麝香（ジャコウ・ムスク）のような甘い香りがすることから「ムスカリ」と名付けられました。",
      "チューリップの足元に絨毯のように植えられることが多く、春の花壇の青いカーペットになります。",
      "過酷な寒さにも耐えて毎年必ず増えて咲く強健さから、前向きな「明るい未来」の花言葉も持ちます。"
    ],
    "rarity": "Normal"
  },
  "5-13": {
    "id": "5-13",
    "name": "カモミール（カミツレ）",
    "reading": "かもみーる",
    "scientificName": "Matricaria chamomilla",
    "month": 5,
    "day": 13,
    "meanings": [
      "逆境に耐える",
      "苦難の中の力",
      "親交"
    ],
    "description": "リンゴのような甘い香りを放つ白い可憐なハーブ。踏まれるほどによく育ち広がる驚異の生命力から、「逆境に耐える」「苦難の中の力」という力強い花言葉を持ちます。",
    "category": "観葉・ハーブ",
    "svgType": "daisy",
    "flowerColor": "#ffffff",
    "secondaryColor": "#eab308",
    "bgGradient": "from-amber-400/15 via-yellow-200/10 to-emerald-500/10",
    "triviaList": [
      "ギリシャ語で「大地のリンゴ（chamaimelon）」が語源で、フルーティな芳香が特徴です。",
      "ピーターラビットのお話でお母さんが淹れてくれるおやすみ前のハーブティーとしても世界中で親しまれます。",
      "弱った他の植物の隣に植えると元気を取り戻させる「植物のお医者さん」としても知られます。"
    ],
    "rarity": "Normal"
  },
  "9-15": {
    "id": "9-15",
    "name": "ススキ（薄・芒）とお月見草花",
    "reading": "すすき",
    "scientificName": "Miscanthus sinensis",
    "month": 9,
    "day": 15,
    "meanings": [
      "活力",
      "心が通じる",
      "隠れた美しさ",
      "純愛"
    ],
    "description": "秋の十五夜・お月見に欠かせない日本の秋の風物詩。黄金色の穂を風になびかせるススキを中心に、秋の七草であるオミナエシやナデシコ、水辺のオギ、楚々としたヨメナなど秋を彩る名草花が勢揃いします。",
    "category": "観葉・ハーブ",
    "svgType": "susuki",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/15 via-yellow-200/10 to-teal-500/10",
    "anniversaryNote": "十五夜・お月見植物祭り",
    "triviaList": [
      "9月15日はお月見植物の宝庫！ススキ（活力）、オミナエシ（親切）、ヨメナ（隠れた美しさ）、ナデシコ（純愛）と清らかな花言葉が並ぶ中、オギ（荻）だけ『片思い・片恨み』と恋愛を拗らせているギャップが話題です。",
      "ススキの鋭い切り口は魔除けの力があると信じられ、収穫への感謝とともに神仏に供えられてきました。",
      "茅葺き屋根の材料「カヤ」としても利用され、数千年にわたり日本の暮らしを支えてきた生命力あふれる植物です。"
    ],
    "rarity": "Normal"
  },
  "5-21": {
    "id": "5-21",
    "name": "カスミソウ（霞草）",
    "reading": "かすみそう",
    "scientificName": "Gypsophila elegans",
    "month": 5,
    "day": 21,
    "meanings": [
      "清らかな心",
      "無邪気",
      "幸福",
      "親切"
    ],
    "description": "無数の星屑が散りばめられたように、または春霞がたなびくように咲く純白の小花。どんな主役の花も優しく包み込み、引き立てる名脇役として花束の最高峰です。",
    "category": "花",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-300/15 via-teal-100/20 to-white",
    "triviaList": [
      "英名「Baby's breath（赤ちゃんの吐息）」と呼ばれ、純真無垢な愛らしさの象徴とされます。",
      "属名Gypsophilaは「石灰（ギプス）を好む」という意味で、石灰質の土壌に自生します。",
      "ドライフラワーにしても花姿が崩れにくく、長く楽しめることでも大人気です。"
    ],
    "rarity": "Normal"
  },
  "9-10": {
    "id": "9-10",
    "name": "シュウカイドウ（秋海棠）",
    "reading": "しゅうかいどう",
    "scientificName": "Begonia grandis",
    "month": 9,
    "day": 10,
    "meanings": [
      "片思い",
      "恋の悩み",
      "自然を愛す"
    ],
    "description": "秋の初め、ハート形の左右非対称な葉の陰から淡紅色の可憐な花をうつむき加減に咲かせるベゴニアの仲間。葉の形が歪んでいることから「片思い」の花言葉が生まれました。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-400/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "春に咲くカイドウ（海棠）に似た美しい花を秋に咲かせることから「秋海棠」と名付けられました。",
      "日本の寒さにも耐える唯一の耐寒性ベゴニアで、寺院の庭や木陰の茶花として愛されています。",
      "葉の付け根に「むかご」を作って子孫を増やすユニークな繁殖力を持っています。"
    ],
    "rarity": "Normal"
  },
  "5-30": {
    "id": "5-30",
    "name": "エキザカム＆アマリリス",
    "reading": "えきざかむ・あまりりす",
    "scientificName": "Exacum affine / Hippeastrum",
    "month": 5,
    "day": 30,
    "meanings": [
      "愛のささやき",
      "あなたを愛します",
      "誇り",
      "輝くばかりの美しさ"
    ],
    "description": "初夏に青紫色の愛らしい小花と黄金の葯（やく）のコントラストを放つエキザカムと、堂々たる大輪を誇るアマリリス。可憐な愛のささやきと誇り高き美しさが競演します。",
    "category": "花",
    "svgType": "amaryllis",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-purple-500/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "エキザカムはアラビアのペルシア湾ソコトラ島原産で、ジャスミンに似た甘い芳香を放ちます。",
      "アマリリスはギリシャ神話の美しい羊飼いの少女の名に由来し、圧倒的な華やかさを持ちます。",
      "この日にはペラルゴニウム（尊敬・信頼・真の友情）も重なり、友情と愛情が結ばれる日です。"
    ],
    "rarity": "Normal"
  },
  "3-29": {
    "id": "3-29",
    "name": "ヘビイチゴ（蛇苺）",
    "reading": "へびいちご",
    "scientificName": "Potentilla hebiichigo",
    "month": 3,
    "day": 29,
    "meanings": [
      "可憐",
      "小悪魔のような魅力"
    ],
    "description": "春の野原に黄色い小花を咲かせ、やがて真っ赤でみずみずしい丸い実をつけるバラ科植物。ヘビが好んで食べるという迷信がありますが毒はなく、小悪魔のような愛らしさを放ちます。",
    "category": "野菜・実",
    "svgType": "strawberry",
    "flowerColor": "#ef4444",
    "secondaryColor": "#facc15",
    "bgGradient": "from-red-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "ヘビがいそうな草むらに生えることから「ヘビイチゴ」と呼ばれますが、毒はありません（味は淡白です）。",
      "焼酎に漬けたヘビイチゴ酒は、古くから虫刺されや火傷の特効薬として民間療法で大切にされてきました。",
      "小さく真っ赤な実が緑の絨毯に散らばる姿は、春の散歩道を楽しく彩ります。"
    ],
    "rarity": "Normal"
  },
  "1-27": {
    "id": "1-27",
    "name": "プルメリア",
    "reading": "ぷるめりあ",
    "scientificName": "Plumeria",
    "month": 1,
    "day": 27,
    "meanings": [
      "気品",
      "恵まれた人",
      "日だまり",
      "情熱"
    ],
    "description": "ハワイのレイ（首飾り）の代名詞として愛される熱帯の神秘的な花。肉厚の五弁の花びらから甘くエキゾチックな芳香を放ち、太陽の温もりと気品を運んでくれます。",
    "category": "花",
    "svgType": "jasmine",
    "flowerColor": "#fef08a",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-yellow-300/15 via-amber-100/20 to-teal-500/10",
    "triviaList": [
      "ハワイでは女性が右耳に挿すと「未婚（恋人募集中）」、左耳に挿すと「既婚（恋人あり）」を意味する文化があります。",
      "フランスの植物学者シャルル・プリュミエ（Charles Plumier）の名にちなんで命名されました。",
      "高級香水の原料としても名高く、リゾートの心地よいくつろぎを与えてくれます。"
    ],
    "rarity": "Normal"
  },
  "11-4": {
    "id": "11-4",
    "name": "サフラン",
    "reading": "さふらん",
    "scientificName": "Crocus sativus",
    "month": 11,
    "day": 4,
    "meanings": [
      "歓喜",
      "節度ある美",
      "陽気"
    ],
    "description": "晩秋に上品な紫色の花を咲かせ、中心から鮮紅色の長い3本のめしべを伸ばすアヤメ科の球根花。黄金色の高級香辛料サフランとして世界中で古くから珍重されてきました。",
    "category": "花",
    "svgType": "crocus",
    "flowerColor": "#9333ea",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-purple-600/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "1つの花からたった3本しか採れないめしべを手摘みするため、「世界で最も高価なスパイス」と呼ばれます。",
      "パエリアやブイヤベースの黄金色の着色と独特の高貴な香り付けに不可欠です。",
      "古代ギリシャでは王族の衣服を染める最高級の黄金染料として崇められていました。"
    ],
    "rarity": "Normal"
  },
  "3-16": {
    "id": "3-16",
    "name": "ハナカイドウ（花海棠）＆春の四花",
    "reading": "はなかいどう",
    "scientificName": "Malus halliana",
    "month": 3,
    "day": 16,
    "meanings": [
      "温和",
      "美人の眠り",
      "艶麗",
      "快活",
      "優しさ"
    ],
    "description": "淡紅色の八重の花が長い柄の先にうつむいて咲く春の名木。唐の玄宗皇帝が楊貴妃の酔いざめの美しさを「海棠の眠り未だ足らず」と讃えた故事から「美人の眠り」の花言葉を持ちます。",
    "category": "樹木",
    "svgType": "cherry_blossom",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "3月16日はナノハナ（快活）、エキナセア（優しさ）、イキシア（誇り高い）も重なる春の華やかな日！",
      "美人の形容詞として中国詩歌に数多く詠まれ、雨に濡れた海棠の美しさは絶景と讃えられます。",
      "下を向いて恥じらうように咲く姿は、奥ゆかしい優雅さを感じさせてくれます。"
    ],
    "rarity": "Normal"
  },
  "6-21": {
    "id": "6-21",
    "name": "ヤマモモ（山桃）",
    "reading": "やまもも",
    "scientificName": "Morella rubra",
    "month": 6,
    "day": 21,
    "meanings": [
      "教訓",
      "ただ一人を愛する"
    ],
    "description": "初夏の風に乗ってルビー色に熟す甘酸っぱい果実をつける常緑高木。雄株と雌株が離れていても風に乗って確実に花粉を届ける一途さから「ただ一人を愛する」の花言葉を持ちます。",
    "category": "樹木",
    "svgType": "fruit",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fb7185",
    "bgGradient": "from-rose-600/15 via-red-400/10 to-emerald-500/10",
    "triviaList": [
      "高知県の県花であり、徳島県の県木としても親しまれる四国のシンボルツリーです。",
      "果実は傷みやすいため市場に出回りにくく、「初夏の幻の果実」としてジャムや果実酒に珍重されます。",
      "根に根粒菌を持ち、やせた土地でも青々と茂って周囲の土壌を豊かにする力強さを持ちます。"
    ],
    "rarity": "Normal"
  },
  "6-26": {
    "id": "6-26",
    "name": "アジサイ（紫陽花）",
    "reading": "あじさい",
    "scientificName": "Hydrangea macrophylla",
    "month": 6,
    "day": 26,
    "meanings": [
      "移り気",
      "辛抱強さ",
      "高慢",
      "家族団欒"
    ],
    "description": "梅雨の雨に濡れて青から紫、ピンクへと七変化する日本の代表花。土壌の酸度によって色を変えることから「移り気」と言われる一方、雨にじっと耐えて咲く「辛抱強さ」も宿します。",
    "category": "花",
    "svgType": "hydrangea",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#a855f7",
    "bgGradient": "from-blue-500/15 via-purple-300/10 to-teal-500/10",
    "triviaList": [
      "花言葉の振れ幅が激しく、「移り気・冷淡・高慢」から「辛抱強さ・家族団欒」まで情報量が多いことで有名！",
      "花びらのように見える部分は実は「萼（がく）」で、本当の花はその中心にある小さな粒です。",
      "酸性土壌では青色になり、アルカリ性土壌ではピンク色になるという天然のリトマス試験紙です。"
    ],
    "rarity": "Normal"
  },
  "10-22": {
    "id": "10-22",
    "name": "ピンクコスモス（秋桜）",
    "reading": "こすもす",
    "scientificName": "Cosmos bipinnatus",
    "month": 10,
    "day": 22,
    "meanings": [
      "乙女の純潔",
      "調和",
      "謙虚"
    ],
    "description": "秋晴れの澄んだ青空の下、風に揺れながら一面に咲き誇る秋の風物詩。ギリシャ語の「kosmos（美・調和・宇宙）」を語源とし、整然と並ぶ八枚の花弁が可憐な調和を讃えます。",
    "category": "花",
    "svgType": "cosmos",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "コスモスという名前はギリシャ語の「秩序・美しい調和（コスモス）」に由来します。",
      "明治初期に日本へ渡来し、強健で日本全国の秋の風景として愛唱されるようになりました。",
      "ピンク色のコスモスは特に「乙女の純潔」「思いやり」の象徴として愛されています。"
    ],
    "rarity": "Normal"
  },
  "7-19": {
    "id": "7-19",
    "name": "ユリ（百合）",
    "reading": "ゆり",
    "scientificName": "Lilium",
    "month": 7,
    "day": 19,
    "meanings": [
      "純粋",
      "無垢",
      "威厳"
    ],
    "description": "夏の庭園に甘美で高貴な芳香を漂わせ、ラッパ形の大輪の花を堂々と咲かせる球根花。聖母マリアの受胎告知の花としても知られ、世界中で「純白の威厳」を讃えられます。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "subFlowers": [
      {
        "name": "野良にんじん（ノラニンジン・クイーンアンズレース）",
        "meanings": ["幼い夢", "繊細な美", "幻想"],
        "note": "7月19日の誕生花。レースのように繊細な白い散形花序を広げ、中央にポツンと一輪咲く黒紫色の小花が特徴"
      }
    ],
    "triviaList": [
      "風が吹くと花がゆらゆら揺れることから「揺すり」が転じて「ユリ」になったとされます。",
      "根元にたくさんの鱗片が重なり合っていることから「百合（百枚の合わさり）」の漢字があてられました。",
      "カサブランカやヤマユリなど、日本原産の野生ユリが西洋の品種改良の親として世界を魅了しました。"
    ],
    "rarity": "Normal"
  },
  "1-9": {
    "id": "1-9",
    "name": "ハコベ（繁縷・春の七草）",
    "reading": "はこべ",
    "scientificName": "Stellaria media",
    "month": 1,
    "day": 9,
    "meanings": [
      "愛らしさ",
      "ランデブー",
      "初恋"
    ],
    "description": "早春の道端に星形の小さな白い花を咲かせる春の七草のひとつ。花びらが深く2つに裂けて10枚に見える愛らしい姿を持ち、小鳥たちの大好物としても親しまれます。",
    "category": "観葉・ハーブ",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-300/15 via-green-100/20 to-teal-500/10",
    "triviaList": [
      "属名Stellariaはラテン語の「stella（星）」が語源で、星屑のような小花が名前の由来です。",
      "1月7日の七草粥に入れて無病息災を祈る、ビタミンやミネラル豊富な日本の伝統薬草です。",
      "ヒヨコや文鳥などの小鳥が葉を喜んで食べることから「小鳥の草（Chickweed）」とも呼ばれます。"
    ],
    "rarity": "Normal"
  },
  "9-29": {
    "id": "9-29",
    "name": "リンゴ（林檎）",
    "reading": "りんご",
    "scientificName": "Malus domestica",
    "month": 9,
    "day": 29,
    "meanings": [
      "優先",
      "選択",
      "誘惑",
      "評判"
    ],
    "description": "春には淡紅色の可憐な五弁花を咲かせ、秋には赤く甘酸っぱい果実を実らせる世界最古の栽培果樹。アダムとイブの神話やニュートンの万有引力など人類史を揺るがす象徴です。",
    "category": "野菜・実",
    "svgType": "apple",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "ギリシャ神話で「最も美しい女神へ」と贈られた黄金のリンゴの物語から「選択」「優先」の花言葉が生まれました。",
      "イギリスの諺「1日1個のリンゴは医者を遠ざける」の通り、ペクチンやポリフェノールが豊富です。",
      "春に咲く花は桜に似てとても可憐で、清楚な香りで果樹園を包みます。"
    ],
    "rarity": "Normal"
  },
  "4-5": {
    "id": "4-5",
    "name": "サクラ（桜・ヤマザクラ類）",
    "reading": "さくら",
    "scientificName": "Cerasus",
    "month": 4,
    "day": 5,
    "meanings": [
      "精神の美",
      "優美な女性",
      "淡白",
      "純潔"
    ],
    "description": "日本の春の象徴であり、古来人々の心を魅了し続ける国花。入学や卒業、出会いと別れの情景を背負いながら、満開の後は潔く風に舞い散る『淡白』で凛とした美学を宿します。",
    "category": "樹木",
    "svgType": "cherry_blossom",
    "flowerColor": "#f472b6",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-200/10 to-emerald-500/10",
    "anniversaryNote": "春の爛漫桜",
    "triviaList": [
      "入学や卒業など日本人の壮大な情緒を背負っているのに、花言葉にまさかの『淡白』があるギャップが有名！満開を迎えたら潔くパッと散るドライな散り際の美学です。",
      "花びらの切れ込みは雨水が溜まって花が痛まないように素早く滴り落とすための進化です。",
      "平安時代の古今和歌集以降、単に「花」といえば桜を指すほど日本人のアイデンティティとなってきました。"
    ],
    "rarity": "Normal"
  },
  "12-3": {
    "id": "12-3",
    "name": "ラベンダー",
    "reading": "らべんだー",
    "scientificName": "Lavandula",
    "month": 12,
    "day": 3,
    "meanings": [
      "沈黙",
      "期待",
      "あなたを待っています",
      "清潔"
    ],
    "description": "爽やかで心安らぐアロマ香で「ハーブの女王」と讃えられる紫の花穂。地中海沿岸原産で、古代ローマ時代から沐浴やリラクゼーションに愛されてきた清浄の花です。",
    "category": "観葉・ハーブ",
    "svgType": "lavender",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-purple-600/15 via-violet-300/10 to-teal-500/10",
    "triviaList": [
      "ラテン語の「lavare（洗う）」が語源で、古代ローマ人がお風呂に浮かべて香りを楽しんだ歴史を持ちます。",
      "リラックス効果をもたらす成分リナロールを含み、安眠を誘うアロマの代表格です。",
      "花言葉「沈黙」は、香りの鎮静効果で高ぶった心を静かに落ち着かせる力に由来します。"
    ],
    "rarity": "Normal"
  },
  "7-25": {
    "id": "7-25",
    "name": "トリカブト（鳥兜）",
    "reading": "とりかぶと",
    "scientificName": "Aconitum",
    "month": 7,
    "day": 25,
    "meanings": [
      "騎士道",
      "栄光",
      "人嫌い"
    ],
    "description": "雅楽の演奏者が被る烏帽子（鳥兜）や中世の騎士の兜に似た深紫色の独特な花を咲かせます。猛毒アコニチンを持つミステリアスな美しさは「騎士道」の厳格さをたたえます。",
    "category": "花",
    "svgType": "delphinium",
    "flowerColor": "#4338ca",
    "secondaryColor": "#818cf8",
    "bgGradient": "from-indigo-700/15 via-blue-500/10 to-slate-600/10",
    "triviaList": [
      "花の形が中世の騎士のヘルメットに似ていることから、西洋では「騎士道」「栄光」の花言葉を持ちます。",
      "漢方では適切に減毒処理された根が「附子（ぶし）」と呼ばれ、体を芯から温める貴重な生薬になります。",
      "日陰の沢沿いや湿原の奥深くにひっそりと群生し、初秋の山歩きで鮮烈な存在感を放ちます。"
    ],
    "rarity": "Normal"
  },
  "12-18": {
    "id": "12-18",
    "name": "アングレカム",
    "reading": "あんぐれかむ",
    "scientificName": "Angraecum sesquipedale",
    "month": 12,
    "day": 18,
    "meanings": [
      "祈り",
      "いつまでもあなたと一緒"
    ],
    "description": "マダガスカル原産の神秘的な着生ラン。白く星形に開く蝋細工のような大輪の花と、30センチにも及ぶ長い距（きょ）を持ち、夜になると甘く濃厚な香りを放ちます。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "ダーウィンがこの花の長い距を見て「この蜜を吸える超長い口吻を持つ蛾がいるはずだ」と予言し、40年後に本当にその蛾が発見された科学史の奇跡の花です。",
      "夜になると甘い香りを放って夜行性の蛾を招き寄せる生態を持ちます。",
      "「いつまでもあなたと一緒」という花言葉は、一度咲くと数週間美しさを保ち続ける花持ちの良さから生まれました。"
    ],
    "rarity": "Normal"
  },
  "11-19": {
    "id": "11-19",
    "name": "ライスフラワー",
    "reading": "らいすふらわー",
    "scientificName": "Ozothamnus diosmifolius",
    "month": 11,
    "day": 19,
    "meanings": [
      "豊かさ",
      "豊かな実り"
    ],
    "description": "オーストラリア原産の常緑低木。つぼみの姿がお米の粒（ライス）にそっくりなことから名付けられ、たわわに実る稲穂のように豊かな実りと繁栄を象徴します。",
    "category": "樹木",
    "svgType": "mimosa",
    "flowerColor": "#ffffff",
    "secondaryColor": "#facc15",
    "bgGradient": "from-amber-300/15 via-yellow-100/20 to-teal-500/10",
    "triviaList": [
      "つぼみがまるで米粒のように見えることから英語で「Rice flower」と名付けられました。",
      "開花するとピンクから純白へと変化し、ドライフラワーにしても色あせず長期間楽しめます。",
      "フラワーアレンジメントのフィラー（空間を埋める花）として世界中で大人気です。"
    ],
    "rarity": "Normal"
  },
  "9-30": {
    "id": "9-30",
    "name": "リンドウ（竜胆）",
    "reading": "りんどう",
    "scientificName": "Gentiana scabra",
    "month": 9,
    "day": 30,
    "meanings": [
      "悲しんでいるあなたを愛する",
      "正義",
      "誠実"
    ],
    "description": "秋の野山に深い青紫色の釣鐘状の花を上向きに咲かせる日本の伝統秋草。根の苦味が熊の胆（くまのい）より苦い「竜の胆」に例えられ、困難に寄り添う誠実な愛をたたえます。",
    "category": "花",
    "svgType": "statice",
    "flowerColor": "#4338ca",
    "secondaryColor": "#6366f1",
    "bgGradient": "from-indigo-600/15 via-blue-400/10 to-emerald-500/10",
    "triviaList": [
      "根の苦味が強烈で、中国で「竜の肝のように苦い」とされたことから「竜胆（りゅうたん→りんどう）」となりました。",
      "雨の日や夜には花をきゅっと閉じ、太陽の光を浴びた晴天の時だけ上を向いて開きます。",
      "源氏の家紋「笹竜胆」としても有名で、高潔でブレない武士の精神を表しました。"
    ],
    "rarity": "Normal"
  },
  "1-11": {
    "id": "1-11",
    "name": "エピデンドラム",
    "reading": "えぴでんどらむ",
    "scientificName": "Epidendrum",
    "month": 1,
    "day": 11,
    "meanings": [
      "判断力",
      "可憐な美",
      "孤高"
    ],
    "description": "中南米の樹木や岩に着生して生きる強健な洋蘭。小さな蝶のような小花が手毬状にこんもりと集まって咲き、澄んだ色彩と凛とした気品を漂わせます。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#f97316",
    "secondaryColor": "#fb923c",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ語の「epi（〜の上）」と「dendron（樹木）」が語源で、樹上に着生する生態そのものが名前です。",
      "過酷な樹上でも水分を逃さず鮮やかに咲き続ける生命力の強さを誇ります。",
      "花持ちがとても良く、1ヶ月以上も咲き続けることから「孤高の美」と称されます。"
    ],
    "rarity": "Normal"
  },
  "8-31": {
    "id": "8-31",
    "name": "ヒマワリ（向日葵）",
    "reading": "ひまわり",
    "scientificName": "Helianthus annuus",
    "month": 8,
    "day": 31,
    "meanings": [
      "あなただけを見つめる",
      "憧れ",
      "光輝",
      "情熱"
    ],
    "description": "真夏の太陽に向かって咲き誇る黄金色の大輪花。太陽の光をどこまでも一途に追いかける姿から「あなただけを見つめる」という純粋で熱烈な花言葉を持ちます。",
    "category": "花",
    "svgType": "sunflower",
    "flowerColor": "#eab308",
    "secondaryColor": "#f59e0b",
    "bgGradient": "from-amber-400/20 via-yellow-300/15 to-emerald-500/10",
    "anniversaryNote": "夏のフィナーレ・太陽の花",
    "triviaList": [
      "つぼみの時期は太陽の動きに合わせて東から西へと首を振りますが、満開になると成長が止まり東を向いたままになります。",
      "ロシアやウクライナの国花であり、種からは良質なひまわり油が採れます。",
      "ゴッホが熱烈に愛して描いた連作『ひまわり』は世界最高峰の絵画として愛されています。"
    ],
    "rarity": "Normal"
  },
  "11-30": {
    "id": "11-30",
    "name": "ワビスケ（侘助・ツバキ）",
    "reading": "わびすけ",
    "scientificName": "Camellia wabisuke",
    "month": 11,
    "day": 30,
    "meanings": [
      "控えめ",
      "簡素",
      "静かな美"
    ],
    "description": "冬の訪れとともに小輪の慎ましい花を咲かせるツバキの銘花。千利休ら茶人たちに「侘び寂び」の美意識の頂点として愛され、茶室の床の間を静謐に引き締めます。",
    "category": "樹木",
    "svgType": "camellia",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-rose-500/15 via-red-300/10 to-teal-500/10",
    "triviaList": [
      "茶人・笠原侘助が朝鮮半島から持ち帰ったという説や、茶道の「侘び」の精神から名付けられたという説があります。",
      "普通のツバキと違い、花が平開せず筒咲きのまま慎ましく下を向いて咲くのが特徴です。",
      "雄しべが退化して花粉が出ないため、茶室の畳を汚さない理想的な茶花として重宝されてきました。"
    ],
    "rarity": "Normal"
  },
  "1-6": {
    "id": "1-6",
    "name": "ユズリハ（譲葉）",
    "reading": "ゆずりは",
    "scientificName": "Daphniphyllum macropodum",
    "month": 1,
    "day": 6,
    "meanings": [
      "若返り",
      "世代交代",
      "譲渡",
      "健康"
    ],
    "description": "春に新芽が出ると前年の古い葉が一斉に席を譲るように落ちることから「譲葉」と名付けられました。代々家が絶えずに繁栄する縁起樹として、正月の鏡餅の敷き葉に用いられます。",
    "category": "樹木",
    "svgType": "laurel",
    "flowerColor": "#10b981",
    "secondaryColor": "#059669",
    "bgGradient": "from-emerald-500/15 via-teal-300/10 to-green-600/10",
    "triviaList": [
      "親から子へ、子から孫へと世代が途切れることなく受け継がれる「世代交代」の美徳の象徴です。",
      "新しい葉が完全に生え揃うまで古い葉が落ちない、極めて思慮深い生態を持っています。",
      "家運隆盛を願うお正月飾りには欠かせない日本の伝統樹です。"
    ],
    "rarity": "Normal"
  },
  "1-18": {
    "id": "1-18",
    "name": "アルストロメリア（百合水仙）",
    "reading": "あるすとろめりあ",
    "scientificName": "Alstroemeria",
    "month": 1,
    "day": 18,
    "meanings": [
      "持続",
      "未来への憧れ",
      "エキゾチック"
    ],
    "description": "南米アンデス山脈原産の華やかな球根花。花びらに鮮やかな斑点が入り、花持ちが極めて良いことから「持続」「未来への憧れ」の花言葉を持ちます。",
    "category": "花",
    "svgType": "alstroemeria",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "葉の付け根が180度ねじれて、葉の裏面が上を向くという非常に珍しい幾何学的生態を持ちます。",
      "スウェーデンの植物学者リンネが親友のアルストレメール男爵の名にちなんで命名しました。",
      "切花にしても水揚げが良く、次々と蕾が開いて長く楽しめます。"
    ],
    "rarity": "Normal"
  },
  "1-23": {
    "id": "1-23",
    "name": "スノーフレーク（鈴蘭水仙）",
    "reading": "すのーふれーく",
    "scientificName": "Leucojum aestivum",
    "month": 1,
    "day": 23,
    "meanings": [
      "純粋",
      "汚れなき心",
      "慈愛"
    ],
    "description": "スズランに似た小さな白い釣鐘形の花を下向きに咲かせ、緑色の小さな斑点が花弁の先にチョンと付く愛らしい球根花。雪の結晶のような清純さをたたえます。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#ffffff",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "花びらの先端にエメラルドグリーンの緑の斑点模様が入るのがチャームポイントです。",
      "スズランのような花とスイセンのような葉を持つことから和名は「鈴蘭水仙（すずらんすいせん）」。",
      "寒さにも負けず早春の雪解けとともに咲き始める力強さを持ちます。"
    ],
    "rarity": "Normal"
  },
  "1-24": {
    "id": "1-24",
    "name": "シラー（大ツルボ）",
    "reading": "しらー",
    "scientificName": "Scilla peruviana",
    "month": 1,
    "day": 24,
    "meanings": [
      "変わらない愛",
      "寂しさ",
      "冷静"
    ],
    "description": "青紫色の小さな星形の花がドーム状にこんもりと集まって咲く美しい球根植物。静けさをたたえた深いブルーが冬の空気を凛と澄ませます。",
    "category": "花",
    "svgType": "muscari",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-600/15 via-indigo-400/10 to-teal-500/10",
    "triviaList": [
      "ギリシャ語の「skyllo（害を及ぼす）」が語源で、球根に有毒成分を含むことから名付けられました。",
      "イングリッシュ・ブルーベルもシラーの仲間で、ヨーロッパの春の森を青い絨毯に染め上げます。",
      "群生して咲く姿はまるで星屑が地上に降り注いだような幻想的な美しさです。"
    ],
    "rarity": "Normal"
  },
  "1-25": {
    "id": "1-25",
    "name": "ミミナグサ（耳菜草）",
    "reading": "みみなぐさ",
    "scientificName": "Cerastium glomeratum",
    "month": 1,
    "day": 25,
    "meanings": [
      "純真な愛",
      "無邪気"
    ],
    "description": "道端や野原に小さな白い五弁花を咲かせるナデシコ科の野草。対生する葉の形がネズミの小さな耳に似ていることから「耳菜草」と名付けられました。",
    "category": "観葉・ハーブ",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-300/15 via-teal-100/20 to-white",
    "triviaList": [
      "葉の表面に細かい毛が生えており、ネズミのふわふわした耳そっくりな触り心地です。",
      "春の七草のハコベにとてもよく似ていますが、茎が赤紫色を帯びる特徴があります。",
      "どんな荒れ地でもひたむきに純白の星屑のような小花を開く無邪気な野草です。"
    ],
    "rarity": "Normal"
  },
  "1-30": {
    "id": "1-30",
    "name": "キンポウゲ（金鳳花・ラナンキュラス類）",
    "reading": "きんぽうげ",
    "scientificName": "Ranunculus japonicus",
    "month": 1,
    "day": 30,
    "meanings": [
      "栄光",
      "子供らしさ",
      "中傷"
    ],
    "description": "光沢のある黄色い花びらが陽の光を浴びて黄金のように輝く春の草花。英語では「Buttercup（バターの器）」と呼ばれ、子供たちの無邪気な遊び心を象徴します。",
    "category": "花",
    "svgType": "ranunculus",
    "flowerColor": "#eab308",
    "secondaryColor": "#fde047",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-teal-500/10",
    "triviaList": [
      "花びらの表面に特殊なデンプン層と細胞があり、ワックスを塗ったようにエナメル質のピカピカした輝きを放ちます。",
      "英名Buttercupは、牛がこの花を食べると良質な黄色いバターが作れるという言い伝えが由来です。",
      "見た目の愛らしさに反して全草に刺激成分を含むため、誤食を防ぐ自衛構造を持っています。"
    ],
    "rarity": "Normal"
  },
  "2-5": {
    "id": "2-5",
    "name": "ジャノメエリカ（蛇の目エリカ）",
    "reading": "じゃのめえりか",
    "scientificName": "Erica canaliculata",
    "month": 2,
    "day": 5,
    "meanings": [
      "博愛",
      "孤独",
      "寂しさ"
    ],
    "description": "冬から早春の庭を鮮やかな赤紫色の無数の小花で埋め尽くす低木。花の中心にある黒褐色の葯（やく）がまるで蛇の目のように見えることから名付けられました。",
    "category": "樹木",
    "svgType": "alyssum",
    "flowerColor": "#c026d3",
    "secondaryColor": "#f0abfc",
    "bgGradient": "from-purple-600/15 via-fuchsia-400/10 to-emerald-500/10",
    "triviaList": [
      "中心にある黒い葯がまるで蛇の瞳に見えることから「蛇の目エリカ（ヒース）」と呼ばれます。",
      "真冬の厳しい寒さの中でも枝が見えないほどびっしりと鈴なりに咲く圧倒的な花付きを誇ります。",
      "ヨーロッパの荒野（ヒースランド）に群生するエリカは、小説『嵐が丘』の舞台としても有名です。"
    ],
    "rarity": "Normal"
  },
  "2-24": {
    "id": "2-24",
    "name": "ナズナ（薺・ぺんぺん草・春の七草）",
    "reading": "なずな",
    "scientificName": "Capsella bursa-pastoris",
    "month": 2,
    "day": 24,
    "meanings": [
      "あなたに私のすべてを捧げます",
      "すべてを捧げる"
    ],
    "description": "春の七草のひとつで、三味線のバチに似たハート形の実をつける「ぺんぺん草」。古くから人々の健康を祈る七草粥に用いられ、すべてを捧げるひたむきな愛の象徴です。",
    "category": "観葉・ハーブ",
    "svgType": "shepherdspurse",
    "flowerColor": "#ffffff",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-white",
    "triviaList": [
      "「撫でて愛でる菜」から「撫菜（なづな）」になったとも言われるほど親しまれた野草です。",
      "果実の柄を少し下に引っ張ってでんでん太鼓のように回すと、シャラシャラと可愛い音が鳴ります。",
      "ビタミンや鉄分が豊富で、厳しい冬を越えた人々の身体を癒す薬草として重宝されてきました。"
    ],
    "rarity": "Normal"
  },
  "3-5": {
    "id": "3-5",
    "name": "クンシラン（君子蘭）",
    "reading": "くんしらん",
    "scientificName": "Clivia miniata",
    "month": 3,
    "day": 5,
    "meanings": [
      "誠実",
      "高貴",
      "情け深い"
    ],
    "description": "肉厚で濃緑の艶やかな葉の間から、鮮やかな朱オレンジ色の優雅な花を傘状に咲かせる南アフリカ原産の多年草。高潔な風格をたたえる姿から「君子」の名が冠されました。",
    "category": "花",
    "svgType": "amaryllis",
    "flowerColor": "#ea580c",
    "secondaryColor": "#fb923c",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "名前に「蘭」と付きますが、実はヒガンバナ科の植物でアマリリスの近縁種です。",
      "学名Clivia（クリビア）は、イギリスのノーサンバーランド公爵夫人シャーロット・クライヴの名にちなみます。",
      "寿命が数十年と非常に長く、手入れをすれば親子三代にわたって咲き続ける長寿の植物です。"
    ],
    "rarity": "Normal"
  },
  "3-6": {
    "id": "3-6",
    "name": "ツクシ（土筆・スギナ）",
    "reading": "つくし",
    "scientificName": "Equisetum arvense",
    "month": 3,
    "day": 6,
    "meanings": [
      "向上心",
      "努力",
      "意外"
    ],
    "description": "早春の野原に地面からニョキニョキと天を目指して真っ直ぐ顔を出すスギナの胞子茎。土に突き刺した筆のような姿から「土筆」と書き、ひたむきな努力と向上心の象徴です。",
    "category": "観葉・ハーブ",
    "svgType": "ribbongrass",
    "flowerColor": "#ca8a04",
    "secondaryColor": "#a16207",
    "bgGradient": "from-amber-600/15 via-yellow-400/10 to-emerald-600/10",
    "triviaList": [
      "ツクシなのに妙に真面目な「向上心・努力」の花言葉！土を押し上げてぐんぐん伸びる姿が由来です。",
      "ツクシはスギナの胞子を飛ばすための役割で、胞子を放出したあとは枯れて緑のスギナが茂ります。",
      "袴（はかま）を取って茹で、佃煮やおひたしにするとほろ苦い春の絶品珍味になります。"
    ],
    "rarity": "Normal"
  },
  "3-9": {
    "id": "3-9",
    "name": "アセビ（馬酔木）",
    "reading": "あせび",
    "scientificName": "Pieris japonica",
    "month": 3,
    "day": 9,
    "meanings": [
      "犠牲",
      "献身",
      "清純な心"
    ],
    "description": "早春にスズランに似た小さな壺形の白やピンクの小花を房状にたくさん咲かせるツツジ科の常緑低木。馬が食べると酔ったように足がもつれるという故事から「馬酔木」と名付けられました。",
    "category": "樹木",
    "svgType": "bellflower",
    "flowerColor": "#ffffff",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-400/15 via-rose-200/10 to-teal-500/10",
    "triviaList": [
      "馬が食べると神経麻痺で酔っ払ったようになることから「馬酔木（あせび）」の漢字が当てられました。",
      "鹿が毒を避けて食べないため、奈良公園などではアセビだけが美しく生い茂る原生林が見られます。",
      "万葉集にも数多く詠まれ、春の訪れを知らせる風雅な花木として古くから親しまれています。"
    ],
    "rarity": "Normal"
  },
  "3-11": {
    "id": "3-11",
    "name": "ハナビシソウ（花菱草・カリフォルニアポピー）",
    "reading": "はなびしそう",
    "scientificName": "Eschscholzia californica",
    "month": 3,
    "day": 11,
    "meanings": [
      "富",
      "成功",
      "私を拒絶しないで"
    ],
    "description": "輝く黄金色やオレンジ色のシルクのような花びらを開くカリフォルニアの州花。ゴールドラッシュの時代、新天地を埋め尽くす黄金の花園として旅人を魅了しました。",
    "category": "花",
    "svgType": "poppy",
    "flowerColor": "#f97316",
    "secondaryColor": "#facc15",
    "bgGradient": "from-amber-500/15 via-orange-300/10 to-emerald-500/10",
    "triviaList": [
      "花びらが家紋の「花菱（はなびし）」に似ていることから、日本では「花菱草」と名付けられました。",
      "日中は太陽の光を浴びて大きく開き、夜や雨の日には傘をすぼめるように花を閉じます。",
      "ゴールドラッシュに湧くアメリカ西部で、大地を覆うこの花を見たスペイン探検隊が「黄金の国」と歓喜した歴史があります。"
    ],
    "rarity": "Normal"
  },
  "3-17": {
    "id": "3-17",
    "name": "サンシュユ（山茱萸・春黄金花）",
    "reading": "さんしゅゆ",
    "scientificName": "Cornus officinalis",
    "month": 3,
    "day": 17,
    "meanings": [
      "持続",
      "耐久",
      "強健"
    ],
    "description": "早春のまだ葉のない枝一面に、黄金色の小さな花をポンポンと弾けるように咲かせる銘木。秋にはルビーのような赤い果実を実らせ、優れた滋養強壮薬として「強健」をたたえます。",
    "category": "樹木",
    "svgType": "mimosa",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "植物としての耐久力そのものを表したような「持続・耐久・強健」の花言葉が特徴的！",
      "春に黄金色の小花が一斉に咲くことから「ハルコガネバナ（春黄金花）」の風流な別名を持ちます。",
      "果実は「山茱萸（さんしゅゆ）」という漢方生薬の要薬で、八味地黄丸などに配合されます。"
    ],
    "rarity": "Normal"
  },
  "3-28": {
    "id": "3-28",
    "name": "エンジュ（槐）",
    "reading": "えんじゅ",
    "scientificName": "Styphnolobium japonicum",
    "month": 3,
    "day": 28,
    "meanings": [
      "上品",
      "幸福",
      "幸福を運ぶ"
    ],
    "description": "夏に黄白色の蝶形小花を房状にたくさん咲かせ、豊かな緑の木陰を作るマメ科の高木。中国では高官（三公）の庭に植えられた最高位の出世樹・幸運樹です。",
    "category": "樹木",
    "svgType": "sweet_pea",
    "flowerColor": "#fef08a",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-yellow-300/15 via-emerald-100/20 to-teal-500/10",
    "triviaList": [
      "中国古代の周王朝では、朝廷の最高官位である「三公」の座す場所に槐が植えられ、出世と幸福の象徴でした。",
      "日本では「延寿（えんじゅ）」に通じることから、長寿祈願・魔除けの縁起木として親しまれています。",
      "蕾を乾燥させたものは「槐花（かいか）」と呼ばれ、止血や血圧安定の生薬になります。"
    ],
    "rarity": "Normal"
  },
  "4-17": {
    "id": "4-17",
    "name": "アイリス（虹の花・ダッチアイリス）",
    "reading": "あいりす",
    "scientificName": "Iris hollandica",
    "month": 4,
    "day": 17,
    "meanings": [
      "希望",
      "信じる心",
      "吉報",
      "よい便り"
    ],
    "description": "ギリシャ神話の虹の女神「イリス」に由来し、澄んだ紫や青、黄色の花びらを優美に羽ばたかせるアヤメ科の花。神のメッセージを天と地に運ぶ「吉報」の象徴です。",
    "category": "花",
    "svgType": "iris",
    "flowerColor": "#4f46e5",
    "secondaryColor": "#818cf8",
    "bgGradient": "from-indigo-600/15 via-blue-400/10 to-teal-500/10",
    "triviaList": [
      "虹の女神イリスが神々の伝言を運ぶ際に使った虹の橋にちなみ、「希望」「よい便り」の花言葉がつきました。",
      "フランス王家の紋章「フルール・ド・リス（百合の紋章）」の本当のモチーフはアイリスです。",
      "ゴッホが療養所で描いた名画『アイリス』は、彼の生への渇望と希望を表現した傑作です。"
    ],
    "rarity": "Normal"
  },
  "5-3": {
    "id": "5-3",
    "name": "タンポポ（蒲公英）",
    "reading": "たんぽぽ",
    "scientificName": "Taraxacum",
    "month": 5,
    "day": 3,
    "meanings": [
      "愛の神託",
      "真心の愛",
      "別離",
      "思わせぶり"
    ],
    "description": "早春の道端から太陽のような黄金色の花を咲かせ、やがて丸い綿毛となって風に乗って世界中へ旅立つ生命力の象徴。恋占いの花としても親しまれます。",
    "category": "花",
    "svgType": "dandelion",
    "flowerColor": "#eab308",
    "secondaryColor": "#facc15",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "綿毛をひと息で吹き飛ばす「恋占い」の風習から「愛の神託」の花言葉が生まれました。",
      "ギザギザした葉がライオンの牙に似ていることから、フランス語で「Dent-de-lion（ライオンの歯）」＝ダンデライオンと呼ばれます。",
      "根を焙煎したタンポポコーヒーは、ノンカフェインで身体を温める健康飲料として愛されています。"
    ],
    "rarity": "Normal"
  },
  "5-7": {
    "id": "5-7",
    "name": "エゴノキ（野梅）",
    "reading": "えごのき",
    "scientificName": "Styrax japonicus",
    "month": 5,
    "day": 7,
    "meanings": [
      "壮大",
      "清楚",
      "すこやかな愛"
    ],
    "description": "初夏の風に揺れながら、枝いっぱいに下向きにぶら下がる純白の星形小花を咲かせる日本の里山植物。木漏れ日の中でシャンデリアのように輝きます。",
    "category": "樹木",
    "svgType": "bellflower",
    "flowerColor": "#ffffff",
    "secondaryColor": "#facc15",
    "bgGradient": "from-emerald-400/10 via-teal-100/30 to-white",
    "triviaList": [
      "果実を食べると喉を刺激して「えぐい（えごい）」味がすることから「エゴノキ」と名付けられました。",
      "果皮に天然の界面活性剤サポニンを含み、昔はすり潰して石鹸の代わりに洗濯に利用していました。",
      "満開の時はまるで白い星屑が降り注ぐような見事な景観を作り出します。"
    ],
    "rarity": "Normal"
  },
  "5-11": {
    "id": "5-11",
    "name": "ナガミヒナゲシ（長実雛芥子）",
    "reading": "ながみひなげし",
    "scientificName": "Papaver dubium",
    "month": 5,
    "day": 11,
    "meanings": [
      "慰め",
      "癒やし",
      "心の平静"
    ],
    "description": "春の街角やアスファルトの隙間から、淡いサーモンオレンジの繊細な花を咲かせるポピーの仲間。細長い実をつける驚異の適応力を誇る花です。",
    "category": "花",
    "svgType": "poppy",
    "flowerColor": "#f97316",
    "secondaryColor": "#fb923c",
    "bgGradient": "from-orange-500/15 via-amber-300/10 to-emerald-500/10",
    "triviaList": [
      "果実が細長い筒状をしていることから「長実（ながみ）」ヒナゲシと呼ばれます。",
      "ひとつの実に1000個以上もの微小な種子を含み、都市の環境でもたくましく命を繋ぎます。",
      "和紙のように薄く透き通る花びらは、風に揺れながら心を静かに癒してくれます。"
    ],
    "rarity": "Normal"
  },
  "5-24": {
    "id": "5-24",
    "name": "ヘリオトロープ（木立瑠璃草・香水草）",
    "reading": "へりおとろーぷ",
    "scientificName": "Heliotropium arborescens",
    "month": 5,
    "day": 24,
    "meanings": [
      "献身的な愛",
      "熱望",
      "夢中"
    ],
    "description": "甘いバニラやチョコレートのような濃厚な芳香を放ち、紫色の小花をこんもりと咲かせる花。ギリシャ語で「太陽に向かって回る」という意味を持ちます。",
    "category": "花",
    "svgType": "verbena",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#c084fc",
    "bgGradient": "from-purple-600/15 via-violet-400/10 to-emerald-500/10",
    "triviaList": [
      "夏目漱石の小説『三四郎』でヒロイン美祢子が持っていた香水として日本文学史に刻まれています。",
      "太陽をどこまでも追いかけて向きを変える性質から「献身的な愛」「夢中」の花言葉がつきました。",
      "西洋では高級香水のベース原料として珍重され、ヨーロッパ貴族を魅了しました。"
    ],
    "rarity": "Normal"
  },
  "5-29": {
    "id": "5-29",
    "name": "ニゲラ（黒種草・クロタネソウ）",
    "reading": "にげら",
    "scientificName": "Nigella damascena",
    "month": 5,
    "day": 29,
    "meanings": [
      "戸惑い",
      "当惑",
      "不屈の精神",
      "未来"
    ],
    "description": "レースのような繊細な糸状の苞葉に包まれて、青や白の神秘的な花を咲かせます。英名「Love-in-a-mist（霧の中の恋）」と呼ばれる幻想的な花です。",
    "category": "花",
    "svgType": "passionflower",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-500/15 via-indigo-300/10 to-teal-500/10",
    "triviaList": [
      "花が終わると風船のように丸く膨らんだ実ができ、中から真っ黒な種子（ニゲラ＝黒）が現れます。",
      "糸のような細かい葉が花を霧のように包み込む不思議な姿から「霧の中の愛」とロマンチックに呼ばれます。",
      "種子は「ブラッククミン」と呼ばれ、中東やインド料理で芳香スパイスとして料理に使われます。"
    ],
    "rarity": "Normal"
  },
  "6-13": {
    "id": "6-13",
    "name": "ブライダルベール",
    "reading": "ぶらいだるべーる",
    "scientificName": "Gibasis geniculata",
    "month": 6,
    "day": 13,
    "meanings": [
      "幸福",
      "願い続ける",
      "幸せを願う"
    ],
    "description": "細い茎に純白のカスミソウのような三弁の極小花を無数に咲かせる観葉植物。花嫁のウェディングベールをふわりとかけたような清純な美しさを放ちます。",
    "category": "観葉・ハーブ",
    "svgType": "alyssum",
    "flowerColor": "#ffffff",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-300/15 via-teal-100/20 to-white",
    "triviaList": [
      "株全体が白い小花で覆われる姿が、まさに花嫁のベールにそっくりなことから名付けられました。",
      "葉の裏面が深い紫色をしており、表の緑と裏の紫のコントラストがとても美しいハンギングプランツです。",
      "結婚祝いや新生活の門出を祝うギフトとして絶大な人気を誇ります。"
    ],
    "rarity": "Normal"
  },
  "7-1": {
    "id": "7-1",
    "name": "フェイジョア",
    "reading": "ふぇいじょあ",
    "scientificName": "Acca sellowiana",
    "month": 7,
    "day": 1,
    "meanings": [
      "実りある人生",
      "豊穣",
      "満ち足りた心"
    ],
    "description": "初夏に赤い雄しべが放射状に突き出すエキゾチックな花を咲かせ、秋にはパイナップルとバナナを合わせたような芳醇な香りの果実を実らせる果樹です。",
    "category": "樹木",
    "svgType": "fruit",
    "flowerColor": "#ef4444",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-red-500/15 via-amber-200/10 to-emerald-500/10",
    "triviaList": [
      "花びらが分厚く綿菓子のように甘くて美味しいという、珍しい「食べられる花（エディブルフラワー）」です。",
      "ウルグアイやパラグアイなど南米原産で、植物学者ジョアオ・ダ・シルバ・フェイジョにちなんで命名されました。",
      "果実は「パイナップルグアバ」とも呼ばれ、スプーンですくって食べるフルーティな味覚です。"
    ],
    "rarity": "Normal"
  },
  "7-18": {
    "id": "7-18",
    "name": "バーベナ（美女桜）",
    "reading": "ばーべな",
    "scientificName": "Verbena",
    "month": 7,
    "day": 18,
    "meanings": [
      "魔力",
      "魅了",
      "家族愛"
    ],
    "description": "小さな桜のような花が集まって傘状に咲き乱れるクマツヅラ科の花。古代ローマでは神聖な儀式や魔除けに用いられ、神秘的な魅力を放ちます。",
    "category": "花",
    "svgType": "verbena",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "古代ローマでは祭壇を清めるハーブとされ、魔女の惚れ薬にも使われたことから「魔力」の花言葉を持ちます。",
      "小さな花が寄り添って仲良くドーム状に輪になって咲くことから「家族愛」の象徴とされます。",
      "春から秋の終わりまで途切れることなく次々と咲き続ける驚異の開花期間を誇ります。"
    ],
    "rarity": "Normal"
  },
  "7-20": {
    "id": "7-20",
    "name": "ナス（茄子）",
    "reading": "なす",
    "scientificName": "Solanum melongena",
    "month": 7,
    "day": 20,
    "meanings": [
      "真実",
      "つつましい幸福",
      "よい語らい"
    ],
    "description": "夏に星形の紫色の慎ましい花を下向きに咲かせ、ツヤツヤとした紫黒色の実を結ぶ日本の食卓の主役。「一富士二鷹三茄子」と初夢の縁起物としても親しまれます。",
    "category": "野菜・実",
    "svgType": "eggplant",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#a855f7",
    "bgGradient": "from-purple-600/15 via-indigo-400/10 to-emerald-500/10",
    "triviaList": [
      "「親の意見と茄子の花は千に一つの無駄もない」の諺通り、咲いた花はほぼ100%実を結ぶ驚異の結実力を持ちます。",
      "皮に含まれる紫色の色素「ナスニン」は強力なポリフェノールで、夏の紫外線から身体を守ります。",
      "初夢の縁起物「一富士二鷹三茄子」は、茄子が「成す（事を成し遂げる）」に通じるためです。"
    ],
    "rarity": "Normal"
  },
  "8-1": {
    "id": "8-1",
    "name": "アサガオ（朝顔）",
    "reading": "あさがお",
    "scientificName": "Ipomoea nil",
    "month": 8,
    "day": 1,
    "meanings": [
      "愛情",
      "結束",
      "明日もさわやかに"
    ],
    "description": "夏の早朝、朝露に濡れながら清々しくラッパ形の花を開く日本の夏の風物詩。つるをしっかりと巻きつける姿から「結束」「愛情」の花言葉を持ちます。",
    "category": "花",
    "svgType": "morning_glory",
    "flowerColor": "#3b82f6",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-600/15 via-sky-300/10 to-emerald-500/10",
    "triviaList": [
      "江戸時代に空前の品種改良ブーム（変化朝顔）が巻き起こり、旗本から町人まで熱狂しました。",
      "夜明け前の暗闇を感知して開花準備を始めるため、実は「夜の長さ」を計って朝に咲いています。",
      "平安時代には種子が「牽牛子（けんぎゅうし）」と呼ばれる貴重な薬草として牛と物々交換された歴史があります。"
    ],
    "rarity": "Normal"
  },
    "8-6": {
    "id": "8-6",
    "name": "トレニア（夏菫・花鶴草）",
    "reading": "とれにあ",
    "scientificName": "Torenia fournieri",
    "month": 8,
    "day": 6,
    "meanings": ["ひらめき", "愛嬌", "温和", "可憐"],
    "description": "夏から秋にかけてスミレに似た愛らしい唇形花を咲かせる花壇の主役。雌しべの先端に触れるとパタンと閉じるユニークな仕組みを持ちます。",
    "category": "一年草",
    "svgType": "torenia",
    "flowerColor": "#6366f1",
    "secondaryColor": "#c7d2fe",
    "bgGradient": "from-indigo-500/15 via-blue-300/10 to-teal-400/10",
    "subFlowers": [
      {
        "name": "モルセラ（貝殻サルビア・アイルランドの鐘）",
        "meanings": ["感謝", "希望", "幸運"],
        "note": "緑の貝殻のような萼が連なる花"
      }
    ],
    "triviaList": [
      "スウェーデンの植物学者オーロフ・トレーン（Olof Toren）の名にちなんで命名されました。"
    ]
  },
  "8-20": {
    "id": "8-20",
    "name": "エキナセア（紫馬簾菊・ムラサキバレンギク）",
    "reading": "えきなせあ",
    "scientificName": "Echinacea purpurea",
    "month": 8,
    "day": 20,
    "meanings": [
      "優しさ",
      "深い愛",
      "あなたの痛みを癒します"
    ],
    "description": "中心のイガグリのような円錐形の筒状花と、下向きに垂れるピンクの花弁が特徴的な北米の伝統薬草。痛みを癒し、免疫を高める癒しの花です。",
    "category": "花",
    "svgType": "aster",
    "flowerColor": "#db2777",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "北米の先住民族インディアンが蛇の咬み傷や感染症の治療に用いた「万能のハーブ」です。",
      "中心の花芯がハリネズミ（ギリシャ語echinos）に似ていることから「エキナセア」と名付けられました。",
      "現代でも風邪予防や免疫力をサポートするメディカルハーブティーとして世界中で愛飲されています。"
    ],
    "rarity": "Normal"
  },
  "8-24": {
    "id": "8-24",
    "name": "ケイトウ（鶏頭）",
    "reading": "けいとう",
    "scientificName": "Celosia argentea",
    "month": 8,
    "day": 24,
    "meanings": [
      "おしゃれ",
      "気取り屋",
      "風変わり",
      "個性"
    ],
    "description": "ニワトリのトサカにそっくりなベルベット状の燃えるような花冠を誇る夏から秋の花。鮮烈な赤や黄色の色彩が色褪せず、際立つ個性を放ちます。",
    "category": "花",
    "svgType": "cockscomb",
    "flowerColor": "#dc2626",
    "secondaryColor": "#f87171",
    "bgGradient": "from-red-500/15 via-rose-300/10 to-emerald-500/10",
    "triviaList": [
      "ベルベットのような質感のトサカ部分は無数の小さな花の集合体で、触るとふんわり温かみがあります。",
      "ドライフラワーにしても鮮やかな色彩がほとんど色褪せないことから「不滅の愛」とも称されます。",
      "万葉集では「韓藍（からあい）」の名で詠まれ、古来日本の庭園を彩ってきた伝統花です。"
    ],
    "rarity": "Normal"
  },
  "8-25": {
    "id": "8-25",
    "name": "アメリカンブルー（エボルブルス）",
    "reading": "あめりかんぶるー",
    "scientificName": "Evolvulus nuttallianus",
    "month": 8,
    "day": 25,
    "meanings": [
      "あふれる思い",
      "清潔",
      "清涼感"
    ],
    "description": "真夏の猛暑の中でも休むことなく、澄んだコバルトブルーの五弁の星形小花を咲かせ続ける強健な花。涼やかな青が夏の庭に清涼感をもたらします。",
    "category": "花",
    "svgType": "forget_me_not",
    "flowerColor": "#2563eb",
    "secondaryColor": "#60a5fa",
    "bgGradient": "from-blue-600/15 via-sky-400/10 to-teal-500/10",
    "triviaList": [
      "ハワイやフロリダなど熱帯アメリカ原産で、日本には1980年代に輸入され一躍大ブームとなりました。",
      "暑さや乾燥に極めて強く、太陽の光を浴びると次々と新しい青い小花を開きます。",
      "青い花が次から次へと溢れ出すように咲く姿から「あふれる思い」の花言葉が生まれました。"
    ],
    "rarity": "Normal"
  },
  "8-27": {
    "id": "8-27",
    "name": "ユウガオ（夕顔）",
    "reading": "ゆうがお",
    "scientificName": "Lagenaria siceraria var. hispida",
    "month": 8,
    "day": 27,
    "meanings": [
      "夜",
      "儚い恋",
      "罪"
    ],
    "description": "夕暮れ時に白い大輪の花を開き、翌朝の陽が昇る頃にはしぼんでしまう幻想的なつる性植物。『源氏物語』の「夕顔の巻」に登場する儚い美の象徴です。",
    "category": "花",
    "svgType": "morning_glory",
    "flowerColor": "#ffffff",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-indigo-900/15 via-purple-400/10 to-emerald-500/10",
    "triviaList": [
      "実を細長く削って乾燥させたものが、巻き寿司や煮物に欠かせない「かんぴょう（干瓢）」です！",
      "アサガオやヒルガオと違いウリ科の植物で、夜に咲いて夜行性の蛾に花粉を運んでもらいます。",
      "源氏物語では光源氏が身分を隠して愛した儚い薄幸の美女「夕顔」の象徴として描かれました。"
    ],
    "rarity": "Normal"
  },
  "8-30": {
    "id": "8-30",
    "name": "ツキミソウ（月見草・エノテラ）",
    "reading": "つきみそう",
    "scientificName": "Oenothera tetraptera",
    "month": 8,
    "day": 30,
    "meanings": [
      "無言の愛",
      "移り気",
      "ほのかな恋"
    ],
    "description": "宵の口に純白の花を開き、夜の闇の中で月光を浴びながら咲き、朝方には淡いピンク色に染まりながらしぼむ詩情あふれる花。太宰治の小説でも有名です。",
    "category": "花",
    "svgType": "primrose",
    "flowerColor": "#ffffff",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-indigo-800/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "太宰治の短編小説『富嶽百景』の「富士には月見草がよく似合ふ」という名文句で文学史に輝きます。",
      "咲き始めの純白から、夜が明けるにつれてピンク色へと変化するロマンチックな一日花です。",
      "マツヨイグサ（黄色い花）と混同されやすいですが、本物の月見草は白からピンクに変わる清楚な花です。"
    ],
    "rarity": "Normal"
  },
  "9-3": {
    "id": "9-3",
    "name": "シンフォリカルポス（スノーベリー）",
    "reading": "しんふぉりかるぽす",
    "scientificName": "Symphoricarpos albus",
    "month": 9,
    "day": 3,
    "meanings": [
      "いつまでも変わらない",
      "可憐な愛らしさ"
    ],
    "description": "晩夏から秋にかけて、真珠や雪玉のような純白やピンクの真珠状の実を鈴なりにつける北米原産の低木。冬になっても実が落ちず、可憐な愛らしさを保ちます。",
    "category": "樹木",
    "svgType": "fruit",
    "flowerColor": "#ffffff",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-400/15 via-pink-100/20 to-teal-500/10",
    "triviaList": [
      "雪の玉のような真珠の実がつくことから英名「Snowberry（スノーベリー）」と呼ばれます。",
      "秋に葉が散った後も、白い実だけが枝にびっしりと残って冬の庭をファンタジックに飾ります。",
      "フラワーアレンジメントの実ものとして、ウェディングブーケやクリスマスリースに大人気です。"
    ],
    "rarity": "Normal"
  },
  "9-21": {
    "id": "9-21",
    "name": "コルチカム（イヌサフラン・秋咲きクロッカス）",
    "reading": "こるちかむ",
    "scientificName": "Colchicum autumnale",
    "month": 9,
    "day": 21,
    "meanings": [
      "私の最良の日々は過ぎ去った",
      "危険な美しさ"
    ],
    "description": "秋風が吹き始める頃、土や水がなくても球根のまま机の上で大輪の淡紫色の花を咲かせる神秘の花。美しい花姿の一方で「私の最良の日々は過ぎ去った」というドラマチックな花言葉を持ちます。",
    "category": "花",
    "svgType": "crocus",
    "flowerColor": "#a855f7",
    "secondaryColor": "#e9d5ff",
    "bgGradient": "from-purple-600/15 via-fuchsia-300/10 to-emerald-500/10",
    "triviaList": [
      "「私の最良の日々は過ぎ去った」という急に重すぎる情緒の花言葉で話題！秋の終わりに咲く寂寥感が由来です。",
      "土や水が全くなくても、机の上に球根を置いておくだけで自然に花が咲く驚異の生命力を誇ります。",
      "痛風の特効薬コルヒチンの原料ですが、サフランと誤食すると危険な毒草でもある「危険な美」の花です。"
    ],
    "rarity": "Normal"
  },
  "9-26": {
    "id": "9-26",
    "name": "ハス（蓮・ハス類）",
    "reading": "はす",
    "scientificName": "Nelumbo nucifera",
    "month": 9,
    "day": 26,
    "meanings": [
      "清らかな心",
      "離れゆく愛",
      "雄弁"
    ],
    "description": "泥水の中から一本の茎を伸ばし、泥に一切染まることなく気高く清らかな大輪の花を咲かせる仏教の聖花。「泥中の蓮」として高潔な精神の象徴です。",
    "category": "花",
    "svgType": "waterlily",
    "flowerColor": "#f472b6",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-pink-500/15 via-rose-200/10 to-teal-500/10",
    "triviaList": [
      "泥が濃ければ濃いほど、より大輪で清らかな美しい花を咲かせるという仏教の不変の教えを宿します。",
      "早朝にポンと音を立てて開くというロマンチックな伝説がありますが、実際は静かにゆっくりと開きます。",
      "地下茎は「蓮根（レンコン）」で、先が見通せる縁起物として日本の祝い膳に不可欠です。"
    ],
    "rarity": "Normal"
  },
  "10-2": {
    "id": "10-2",
    "name": "アンズ（杏・アプリコット）",
    "reading": "あんず",
    "scientificName": "Prunus armeniaca",
    "month": 10,
    "day": 2,
    "meanings": [
      "臆病な愛",
      "乙女のはにかみ",
      "疑い"
    ],
    "description": "早春に桜より少し早く淡紅色の愛らしい花を咲かせ、初夏に甘酸っぱくオレンジ色の果実を実らせます。はにかむ乙女のような可憐さと実りの豊かさを兼ね備えます。",
    "category": "樹木",
    "svgType": "apricot",
    "flowerColor": "#fb7185",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-400/15 via-pink-200/10 to-emerald-500/10",
    "triviaList": [
      "桜によく似ていますが、花びらの付け根の「萼（がく）」が反り返る特徴で簡単に見分けられます。",
      "種の中にある仁（杏仁）は、中華デザート「杏仁豆腐」の甘く芳醇な風味付けに使われます。",
      "中国では名医の家の周りにアンズを植えさせた故事から、良医のことを「杏林（きょうりん）」と讃えます。"
    ],
    "rarity": "Normal"
  },
  "11-8": {
    "id": "11-8",
    "name": "ヒイラギ（柊）",
    "reading": "ひいらぎ",
    "scientificName": "Osmanthus heterophyllus",
    "month": 11,
    "day": 8,
    "meanings": [
      "先見の明",
      "用心深さ",
      "保護"
    ],
    "description": "初冬に鋭いトゲを持つ濃緑の葉の陰から、ジャスミンに似た甘い芳香を放つ純白の小花を咲かせます。邪気を払うトゲで大切な人を守る「保護」の樹木です。",
    "category": "樹木",
    "svgType": "jasmine",
    "flowerColor": "#ffffff",
    "secondaryColor": "#15803d",
    "bgGradient": "from-emerald-700/15 via-teal-400/10 to-slate-600/10",
    "triviaList": [
      "節分にイワシの頭を刺して魔除けにする「柊鰯（ひいらぎいわし）」の風習で知られる日本の聖木です。",
      "若い木の葉はトゲが鋭いですが、樹齢を重ねて大木になると葉のトゲが取れて丸くなる「丸くなる知恵」を持ちます。",
      "トゲに触れると「ひいらぐ（痛む）」ことから「ヒイラギ」と名付けられました。"
    ],
    "rarity": "Normal"
  },
  "11-14": {
    "id": "11-14",
    "name": "モミ（樅）",
    "reading": "もみ",
    "scientificName": "Abies firma",
    "month": 11,
    "day": 14,
    "meanings": [
      "永遠",
      "不老長寿",
      "誠実"
    ],
    "description": "冬でも青々と天に向かって真っ直ぐそびえ立つ針葉樹。クリスマスツリーの象徴であり、厳しい冬を越えて生き続ける「永遠の生命力」と「誠実」を表します。",
    "category": "樹木",
    "svgType": "pine",
    "flowerColor": "#047857",
    "secondaryColor": "#10b981",
    "bgGradient": "from-emerald-700/15 via-teal-500/10 to-green-800/10",
    "triviaList": [
      "冬の間も緑を保ち続けることから、中世ヨーロッパで「不滅の生命」のシンボルとされツリーになりました。",
      "モミの木から出る香り成分フィトンチッドには、強力な森林浴・リフレッシュ効果があります。",
      "諏訪大社の「御柱祭（おんばしらさい）」で曳行される巨木もモミの木で、神木として敬われてきました。"
    ],
    "rarity": "Normal"
  },
  "11-22": {
    "id": "11-22",
    "name": "アズサ（梓・キササゲ類）",
    "reading": "あずさ",
    "scientificName": "Catalpa ovata",
    "month": 11,
    "day": 22,
    "meanings": [
      "固い友情",
      "真心"
    ],
    "description": "古来より弓の材料として用いられた日本の神聖な銘木。初夏に淡黄色の房状花を咲かせ、秋にはインゲン豆のような細長いサヤをぶら下げます。皇室のお印としても親しまれます。",
    "category": "樹木",
    "svgType": "bellflower",
    "flowerColor": "#fef08a",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-yellow-300/15 via-emerald-100/20 to-teal-500/10",
    "triviaList": [
      "強靭でしなやかな材質から、古代の神聖な武器「梓弓（あずさゆみ）」の材料として重用されました。",
      "文字を彫る版木として使われたことから、本を出版することを「上梓（じょうし）する」と言います。",
      "敬宮愛子内親王のお印（ゴヨウツツジ）とともに、格式高い木として愛されています。"
    ],
    "rarity": "Normal",
    "subFlowers": [
          {
                "name": "サンショウ（山椒）",
                "meanings": [
                      "健康",
                      "好意",
                      "直観"
                ],
                "note": "ピリリと辛い日本古来の芳香樹"
          }
    ]
  },
  "11-26": {
    "id": "11-26",
    "name": "ホタルブクロ（蛍袋・カンパニュラ類）",
    "reading": "ほたるぶくろ",
    "scientificName": "Campanula punctata",
    "month": 11,
    "day": 26,
    "meanings": [
      "愛らしさ",
      "忠実",
      "正義"
    ],
    "description": "釣鐘形の大きめの袋状の花を下向きに咲かせる野草。昔の子供たちがこの花の中に蛍を入れて光を楽しんだという風流な名前を持ち、素朴な愛らしさをたたえます。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-teal-500/10",
    "triviaList": [
      "子供たちが夜に捕まえたホタルを花の中に入れてランタンにして遊んだことから「蛍袋」と名付けられました。",
      "教会の鐘に似ていることから西洋では「ベルフラワー」と呼ばれ、感謝や誠実の象徴とされます。",
      "雨が降っても花の中に水が入らないよう、下を向いて花粉を守る知恵を持っています。"
    ],
    "rarity": "Normal"
  },
  "12-1": {
    "id": "12-1",
    "name": "ドラセナ（幸福の木・マッサンゲアナ）",
    "reading": "どらせな",
    "scientificName": "Dracaena fragrans",
    "month": 12,
    "day": 1,
    "meanings": [
      "幸福",
      "隠しきれない幸せ",
      "永遠の愛"
    ],
    "description": "ハワイで「家の前に置くと幸せが訪れる」と言い伝えられる大人気の観葉植物。太い幹から鮮やかな緑と黄色の斑入り葉を広げ、空間に温かな幸運をもたらします。",
    "category": "観葉・ハーブ",
    "svgType": "dracaena",
    "flowerColor": "#22c55e",
    "secondaryColor": "#facc15",
    "bgGradient": "from-emerald-500/15 via-green-300/10 to-teal-500/10",
    "triviaList": [
      "学名ドラセナはギリシャ語の「drakaina（メスの竜）」が語源で、樹液が赤い「竜血樹」の仲間です。",
      "ハワイでは魔除けと幸福を招く聖なる木として、新築祝いや開店祝いの定番ギフトになっています。",
      "滅多に咲きませんが、十数年に一度夜に咲く白い小花は甘く芳醇な香りを放ちます。"
    ],
    "rarity": "Normal"
  },
  "12-9": {
    "id": "12-9",
    "name": "キク（菊・寒菊）",
    "reading": "きく",
    "scientificName": "Chrysanthemum morifolium",
    "month": 12,
    "day": 9,
    "meanings": [
      "高貴",
      "高潔",
      "清浄"
    ],
    "description": "日本の皇室の御紋章であり、秋から初冬を代表する国花。寒風の中で凛として咲き誇る姿は「高貴」と「高潔」の美徳そのもので、長寿と健康を祈る最高峰の花です。",
    "category": "花",
    "svgType": "aster",
    "flowerColor": "#eab308",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-amber-400/15 via-yellow-200/10 to-teal-500/10",
    "triviaList": [
      "平安時代の「重陽の節句（9月9日）」で菊酒を飲んで不老長寿を祈った、日本の格式高い薬草です。",
      "皇室の「十六八重表菊」の紋章をはじめ、パスポートの表紙にもデザインされている日本の象徴です。",
      "食用菊（もってのほか等）はおひたしや酢の物として、香り高い冬の味覚として愛されています。"
    ],
    "rarity": "Normal"
  },
  "12-12": {
    "id": "12-12",
    "name": "デンファレ（デンドロビウム・ファレノプシス）",
    "reading": "でんふぁれ",
    "scientificName": "Dendrobium phalaenopsis",
    "month": 12,
    "day": 12,
    "meanings": [
      "お似合いのふたり",
      "わがままな美人",
      "魅惑",
      "有能"
    ],
    "description": "胡蝶蘭に似た優美な花を、すっと伸びた茎に連ねて咲かせる洋ラン。「お似合いのふたり」や「有能」など多才な魅力を宿す人気花です。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#d946ef",
    "secondaryColor": "#f0abfc",
    "bgGradient": "from-purple-500/15 via-pink-400/10 to-emerald-500/10",
    "triviaList": [
      "属性欄が多い美人みたいと大好評の「お似合いのふたり・わがままな美人・有能」という贅沢な花言葉！",
      "ハワイのレイ（首飾り）やカクテルのグラスに添えられるエディブルフラワーとしても大活躍します。",
      "花持ちが驚異的で、切花にしても数週間美しい姿を保ち続けます。"
    ],
    "rarity": "Normal"
  },
  "12-31": {
  "id": "12-31",
  "name": "ヒノキ（檜・扁柏）",
  "reading": "ひのき",
  "scientificName": "Chamaecyparis obtusa",
  "month": 12,
  "day": 31,
  "meanings": [
    "不滅",
    "不老",
    "強い忍耐力"
  ],
  "description": "大晦日・12月31日のトリを飾る日本の最高級建築材。法隆寺をはじめ千年の時を超えて建ち続ける驚異の耐久性を誇り、「不滅」「不老」の悠久の命を宿します。",
  "category": "常緑針葉樹",
  "svgType": "cypress",
  "flowerColor": "#15803d",
  "secondaryColor": "#bbf7d0",
  "bgGradient": "from-emerald-700/20 via-green-600/15 to-teal-500/10",
  "subFlowers": [
    {
      "name": "コニファー（針葉樹）",
      "reading": "こにふぁー",
      "meanings": [
        "不変",
        "永遠",
        "不老不死"
      ],
      "note": "大晦日を彩る常緑針葉樹（冬の庭を美しく彩るシルバーグリーンの樹）"
    }
  ],
  "triviaList": [
    "大晦日を締めくくるのは、千年を生き抜く日本の誇り「ヒノキ」！",
    "補足席には冬のガーデンを彩るコニファーが同席し、「不変」「永遠」を祈願します。",
    "ヒノキチオールなどの芳香成分は、森林浴と同じ深いリラックスをもたらします。"
  ],
  "rarity": "Super Rare"
},

  "1-5": {
    "id": "1-5",
    "name": "ミスミソウ（雪割草）",
    "reading": "みすみそう",
    "scientificName": "Hepatica nobilis",
    "month": 1,
    "day": 5,
    "meanings": [
      "自信",
      "信頼",
      "優雅",
      "高貴"
    ],
    "description": "凍てつく雪を割るようにして早春一番に可憐な花を咲かせる耐寒の植物。過酷な寒さに負けずに自らを誇り高く開花させる姿から「自信」と「信頼」を象徴します。",
    "category": "花",
    "svgType": "wildflower",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#bae6fd",
    "bgGradient": "from-sky-500/15 via-blue-400/10 to-emerald-500/10",
    "triviaList": [
      "「雪割草」の別名通り、残雪を押しのけて咲く生命力の強さから春告げ花として親しまれています。",
      "三角形の葉の先端が3つに分かれていることから「ミスミ（三角）ソウ」と名付けられました。",
      "白、桃、紫、青など変異が多く、古くから園芸植物として熱心に収集・交配されてきました。"
    ],
    "rarity": "Normal"
  },
  "2-1": {
    "id": "2-1",
    "name": "サクラソウ（桜草）",
    "reading": "さくらそう",
    "scientificName": "Primula sieboldii",
    "month": 2,
    "day": 1,
    "meanings": [
      "初恋",
      "憧れ",
      "純潔"
    ],
    "description": "桜の花びらに似たハート型の可憐な花弁が春の訪れを告げる日本の伝統園芸植物。甘酸っぱくも純真な想いを伝える「初恋」と「憧れ」の花言葉を持ちます。",
    "category": "花",
    "svgType": "cherry",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "江戸時代に武士の間で大流行し、数千もの園芸品種が生み出された由緒ある日本の銘花です。",
      "花言葉の「初恋」は、咲き始めの初々しいピンクの愛らしい花姿に由来しています。",
      "埼玉県と東京都の都県花にも指定されており、自生地の荒川河川敷は国の特別天然記念物です。"
    ],
    "rarity": "Normal"
  },
  "2-2": {
    "id": "2-2",
    "name": "パンジー（三色菫）＆ フランネルフラワー",
    "reading": "ぱんじー・ふらんねるふらわー",
    "scientificName": "Viola tricolor / Actinotus helianthi",
    "month": 2,
    "day": 2,
    "meanings": [
      "もの思い",
      "私を思って",
      "思慮深さ",
      "誠実",
      "高潔",
      "いつも愛して"
    ],
    "description": "人の顔のように思索に耽るパンジーと、フェルトのように温かく柔らかいフランネルフラワーが寄り添う純情の2月2日。「私を思って」と「いつも愛して」の祈りが重なります。",
    "category": "花",
    "svgType": "pansy",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#fdf4ff",
    "bgGradient": "from-purple-500/15 via-pink-400/10 to-teal-500/10",
    "triviaList": [
      "パンジーの「もの思い」とフランネルフラワーの「いつも愛して」が並ぶ、純情無垢な組み合わせ！",
      "フランス語の「パンセ（思想・考える）」がパンジーの語源で、首を傾げて深く考える人の顔に見立てられました。",
      "フランネルフラワーはオーストラリア原産で、毛織物のフランネルに似たふわふわの質感が大人気です。"
    ],
    "rarity": "Normal"
  },
  "2-28": {
    "id": "2-28",
    "name": "ゲッケイジュ（月桂樹）",
    "reading": "げっけいじゅ",
    "scientificName": "Laurus nobilis",
    "month": 2,
    "day": 28,
    "meanings": [
      "栄光",
      "勝利",
      "栄誉"
    ],
    "description": "古代ギリシャのオリンピックで勝者に贈られた月桂冠の木。爽やかな芳香を放つ濃緑の葉は、どんな試練にも屈せず己を貫き勝利を掴む者に捧げられます。",
    "category": "樹木",
    "svgType": "laurel",
    "flowerColor": "#15803d",
    "secondaryColor": "#86efac",
    "bgGradient": "from-emerald-600/15 via-amber-400/10 to-green-700/15",
    "triviaList": [
      "太陽神アポロンの聖木とされ、古代から栄光ある勝者や詩人の頭上を飾ってきました。",
      "乾燥させた葉は料理のブーケガルニやローリエ（ローレル）としてシチュー等に欠かせないスパイスです。",
      "英語の「ノーベル賞受賞者（Nobel laureate）」のローリエイトも月桂樹に由来しています。"
    ],
    "rarity": "Normal"
  },
      "3-2": {
    "id": "3-2",
    "name": "アルメリア（浜簪・ハマカンザシ）",
    "reading": "あるめりあ",
    "scientificName": "Armeria maritima",
    "month": 3,
    "day": 2,
    "meanings": ["思いやり", "同情", "可憐", "共感"],
    "description": "「海に近い」という意味のケルト語が語源。小さなピンクや白の小花がまん丸くかんざしのように集まって咲く愛らしい花です。",
    "category": "宿根草・多年草",
    "svgType": "armeria",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-purple-200/10",
    "subFlowers": [
      {
        "name": "オキザリス（カタバミ）",
        "meanings": ["決してあなたを捨てません", "輝く心", "喜び"],
        "note": "ハート型の三つ葉が愛らしい球根草"
      }
    ],
    "triviaList": [
      "ヨーロッパの海岸の砂丘や断崖に自生し、潮風に耐えて力強く花を咲かせます。"
    ]
  },
  "3-1": {
    "id": "3-1",
    "name": "コクリコ（虞美人草・ヒナゲシ）＆ ポピー",
    "reading": "こくりこ・ぽぴー",
    "scientificName": "Papaver rhoeas",
    "month": 3,
    "day": 1,
    "meanings": [
      "恋の予感",
      "乙女らしさ",
      "慰め",
      "いたわり",
      "思いやり"
    ],
    "description": "春風に薄紙のような鮮紅の花びらを揺らすコクリコとポピー。天真爛漫な「恋の予感」と、温かく寄り添う「いたわり・思いやり」の優しさが咲き競います。",
    "category": "花",
    "svgType": "poppy",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-rose-500/15 via-orange-400/10 to-emerald-500/10",
    "triviaList": [
      "フランス語でヒナゲシを「コクリコ（Coquelicot）」と呼び、雄鶏の鳴き声（コケコッコー）に由来します。",
      "与謝野晶子の歌集「みだれ髪」や夏目漱石の小説「虞美人草」にも描かれたロマンチックな花です。",
      "双子のように「恋の予感・乙女らしさ」と「いたわり・思いやり」の両方の温もりを併せ持ちます。"
    ],
    "rarity": "Normal"
  },
  "3-10": {
    "id": "3-10",
    "name": "ブルーレースフラワー（ディディスカス）",
    "reading": "ぶるーれーすふらわー",
    "scientificName": "Trachymene coerulea",
    "month": 3,
    "day": 10,
    "meanings": [
      "無言の愛",
      "優雅な振る舞い",
      "慎み深い人"
    ],
    "description": "繊細なレースのドレスを纏って静かに佇む貴婦人のように、淡いスカイブルーの小花が半球状に集まって咲く気品あふれるオーストラリア原産の花です。",
    "category": "花",
    "svgType": "hydrangea",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#e0f2fe",
    "bgGradient": "from-sky-500/15 via-indigo-400/10 to-teal-500/10",
    "triviaList": [
      "「無言の愛・優雅な振る舞い・慎み深い人」と、まさにレースをまとった令嬢のように上品な花言葉！",
      "細い茎の先に無数の小花がドーム状に広がり、清楚なブライダルブーケとしても大人気です。",
      "香りは主張しすぎずほんのりと甘く、静かにそこに咲いているだけで周囲を和ませます。"
    ],
    "rarity": "Normal"
  },
  "3-13": {
    "id": "3-13",
    "name": "アネモネ（花一華）",
    "reading": "あねもね",
    "scientificName": "Anemone coronaria",
    "month": 3,
    "day": 13,
    "meanings": [
      "はかない恋",
      "恋の苦しみ",
      "期待"
    ],
    "description": "春の風が吹き抜ける頃にパッと鮮やかな花びらを開く風の花。切ない胸の疼きと、それでも未来を信じて待ち続ける「期待」の情熱を秘めています。",
    "category": "花",
    "svgType": "anemone",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-purple-400/10 to-emerald-500/10",
    "triviaList": [
      "ギリシャ語の「アネモス（風）」が語源で、風が吹き始めると開花することから「風の花」と呼ばれます。",
      "赤、紫、青、白など鮮明な色合いが特徴で、花の中心の黒い雌しべとのコントラストが印象的です。",
      "神話では美少年アドニスが流した血から咲いた花とされ、切ない情熱の象徴として愛されています。"
    ],
    "rarity": "Normal"
  },
  "4-1": {
    "id": "4-1",
    "name": "オダマキ（苧環）",
    "reading": "おだまき",
    "scientificName": "Aquilegia",
    "month": 4,
    "day": 1,
    "meanings": [
      "必ず勝利する",
      "断固たる意志",
      "勝利への決意"
    ],
    "description": "糸を巻く「苧環（おだまき）」に似た端正な距（きょ）を持ち、うつむき加減に知的な花を咲かせるオダマキ。「必ず勝利する」「断固たる意志」という気高い強さを誇ります。春を象徴するソメイヨシノが補足席として温かく寄り添います。",
    "category": "多年草・山野草",
    "svgType": "wildflower",
    "flowerColor": "#6366f1",
    "secondaryColor": "#fce7f3",
    "bgGradient": "from-indigo-500/15 via-purple-300/10 to-pink-400/10",
    "subFlowers": [
      {
        "name": "ソメイヨシノ（染井吉野）",
        "reading": "そめいよしの",
        "meanings": [
          "精神の美",
          "優美な女性",
          "純潔"
        ],
        "note": "4/1の補足花。春の訪れを告げる気品ある桜"
      }
    ],
    "triviaList": [
      "主役のオダマキは、麻糸を巻いた「苧環（おだまき）」に花の形が似ていることから名付けられた日本の雅な伝統花！",
      "静御前が義経を慕って舞った「しづやしづ 賤のをだまき くり返し…」の歌でも名高い、凛とした気品と芯の強さの象徴です。",
      "花の後ろに伸びる角のような「距（きょ）」に甘い蜜を蓄え、うつむいて咲く姿から西洋では『コロンバイン（鳩のような花）』とも呼ばれます。"
    ],
    "rarity": "Super Rare"
  },


  "4-7": {
    "id": "4-7",
    "name": "アジアンタム（ホウライシダ）",
    "reading": "あじあんたむ",
    "scientificName": "Adiantum",
    "month": 4,
    "day": 7,
    "meanings": [
      "天真爛漫",
      "繊細",
      "無垢"
    ],
    "description": "黒く光る細い針金のような茎に、銀杏に似た明るいグリーンの小葉がふんわりと重なるシダ植物。汚れなき「天真爛漫」とみずみずしい「無垢」の癒しをもたらします。",
    "category": "花",
    "svgType": "clover",
    "flowerColor": "#10b981",
    "secondaryColor": "#6ee7b7",
    "bgGradient": "from-emerald-500/15 via-teal-400/10 to-green-600/15",
    "triviaList": [
      "ギリシャ語の「アディエントス（濡れない）」が語源で、葉に水をかけると水滴がコロコロ弾かれます。",
      "空気中の湿度を好み、風にそよそよと揺れる姿が観葉植物として抜群の清涼感を演出します。",
      "日陰でも爽やかに葉を繁らせることから、繊細ながら強い生命力のシンボルとされます。"
    ],
    "rarity": "Normal"
  },
  "4-10": {
    "id": "4-10",
    "name": "イチジク（無花果）",
    "reading": "いちじく",
    "scientificName": "Ficus carica",
    "month": 4,
    "day": 10,
    "meanings": [
      "実りある人生",
      "豊富",
      "裕福"
    ],
    "description": "果実の中に無数の小さな花を咲かせる神秘の古代果樹。アダムとエバの物語をはじめ、人類最古の栽培植物として豊かな繁栄と「実りある人生」を祝福します。",
    "category": "樹木",
    "svgType": "fig",
    "flowerColor": "#831843",
    "secondaryColor": "#f472b6",
    "bgGradient": "from-pink-700/15 via-rose-500/10 to-amber-500/10",
    "triviaList": [
      "「無花果」と書きますが花がないわけではなく、実の内側に無数の花を咲かせる「隠頭花序」です。",
      "不老長寿の果物と呼ばれ、ペクチンやカリウムなど豊かな栄養素が古来から重宝されてきました。",
      "旧約聖書に登場する知恵の樹の葉として、最も有名な植物の一つです。"
    ],
    "rarity": "Normal"
  },
  "4-13": {
    "id": "4-13",
    "name": "イチゴ（苺）",
    "reading": "いちご",
    "scientificName": "Fragaria × ananassa",
    "month": 4,
    "day": 13,
    "meanings": [
      "幸福な家庭",
      "尊重と愛情",
      "先見の明"
    ],
    "description": "親株から次々とランナー（つる）を伸ばして子株を増やし、真っ赤な実をたくさん実らせることから、親愛に満ちた「幸福な家庭」の象徴として愛されています。",
    "category": "花",
    "svgType": "strawberry",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-red-500/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "真っ白な可憐な花を咲かせた後にできる赤い実は、実は果実ではなく茎の一部（花托）が膨らんだもの。",
      "「先見の明」の花言葉は、西洋の詩人がイチゴを食べて知恵とインスピレーションを得た伝説から。",
      "家族みんなで仲良く分け合って食べる温かい団らんの象徴として親しまれています。"
    ],
    "rarity": "Normal"
  },
  "4-16": {
    "id": "4-16",
    "name": "チューリップ",
    "reading": "ちゅーりっぷ",
    "scientificName": "Tulipa",
    "month": 4,
    "day": 16,
    "meanings": [
      "思いやり",
      "博愛",
      "名声"
    ],
    "description": "春の陽光をいっぱいに浴びて誇らしげにカップ型の花を開く春の王道花。他者を温かく包み込み、みんなを笑顔にしたいという「思いやり」と「博愛」の花言葉を持ちます。",
    "category": "花",
    "svgType": "tulip",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-rose-500/15 via-amber-400/10 to-emerald-500/10",
    "triviaList": [
      "トルコ原産で、ターバン（頭巻き）に似ていることから「Tulip」と命名されました。",
      "オランダではかつて球根1個で家が一軒買えるほどの「チューリップ・バブル」が起きた歴史があります。",
      "子供から大人まで誰からも愛され、春の花壇をカラフルに彩る笑顔の象徴です。"
    ],
    "rarity": "Normal"
  },
  "5-6": {
    "id": "5-6",
    "name": "シラン（紫蘭）",
    "reading": "しらん",
    "scientificName": "Bletilla striata",
    "month": 5,
    "day": 6,
    "meanings": [
      "互いに忘れない",
      "変わらぬ愛",
      "美しい姿"
    ],
    "description": "日向でも力強く育つ日本原産の地生ラン。艶やかな赤紫の花をまっすぐ咲かせ、離れていても心を通わせ合う「互いに忘れない」「変わらぬ愛」の誓いを伝えます。",
    "category": "花",
    "svgType": "orchid",
    "flowerColor": "#c026d3",
    "secondaryColor": "#f5d0fe",
    "bgGradient": "from-fuchsia-500/15 via-purple-400/10 to-emerald-500/10",
    "triviaList": [
      "ラン科植物としては珍しく非常に丈夫で、公園や家庭の花壇でも毎年美しい花を咲かせます。",
      "根茎は「白及（びゃくきゅう）」と呼ばれる生薬になり、止血や創傷治癒の薬用としても古くから活用されました。",
      "「互いに忘れない」という花言葉は、別れの季節を越えて深まる絆を温かく見守ってくれます。"
    ],
    "rarity": "Normal"
  },
  "5-8": {
    "id": "5-8",
    "name": "ベルフラワー（オトメギキョウ）",
    "reading": "べるふらわー",
    "scientificName": "Campanula portenschlagiana",
    "month": 5,
    "day": 8,
    "meanings": [
      "感謝",
      "誠実",
      "楽しいおしゃべり"
    ],
    "description": "小さな青紫色の釣鐘（ベル）が無数に群れ咲く姿が、楽しそうに笑いさざめく声のように響く爽やかな花。「感謝」と「誠実」の温かなメッセージを響かせます。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#6366f1",
    "secondaryColor": "#c7d2fe",
    "bgGradient": "from-indigo-500/15 via-blue-400/10 to-emerald-500/10",
    "triviaList": [
      "「カンパニュラ」の一種で、小輪の花がカーペットのようにこんもり広がる愛らしい草姿が特徴です。",
      "釣鐘のベルが一斉に鳴り響いて楽しいおしゃべりをしているように見えることから名付けられました。",
      "母の日のギフトにも選ばれる「感謝」の心を伝える爽やかな初夏の花です。"
    ],
    "rarity": "Normal"
  },
  "5-15": {
    "id": "5-15",
    "name": "カンパニュラ（風鈴草・ツリガネソウ）",
    "reading": "かんぱにゅら",
    "scientificName": "Campanula medium",
    "month": 5,
    "day": 15,
    "meanings": [
      "感謝",
      "誠実",
      "節操"
    ],
    "description": "ふっくらとした大きな風鈴のような釣鐘花をタワー状に咲かせる堂々たる花姿。己の信念と規律を曲げない「誠実」と「節操」、そして深い「感謝」を湛えています。",
    "category": "花",
    "svgType": "bellflower",
    "flowerColor": "#4f46e5",
    "secondaryColor": "#c7d2fe",
    "bgGradient": "from-blue-600/15 via-indigo-400/10 to-emerald-500/10",
    "triviaList": [
      "ラテン語の「小さな鐘（Campana）」が語源で、ギリシャ神話の美しいニンフ・カンパニュールの物語に由来します。",
      "花の形が教会の大鐘に似ていることから、神聖な祈りと誠実のシンボルとされてきました。",
      "風が吹き抜けると涼やかな鐘の音が聞こえてきそうな端正な佇まいが魅力です。"
    ],
    "rarity": "Normal"
  },
  "5-28": {
  "id": "5-28",
  "name": "ミント（薄荷・ハッカ）",
  "reading": "みんと",
  "scientificName": "Mentha",
  "month": 5,
  "day": 28,
  "meanings": [
    "美徳",
    "効能",
    "かけがえのない時間"
  ],
  "description": "清涼感あふれる爽やかな芳香で古代から世界中で愛されてきたハーブの王様。「美徳」「効能」「かけがえのない時間」という、心を澄ませる花言葉を持ちます。",
  "category": "ハーブ",
  "svgType": "mint",
  "flowerColor": "#059669",
  "secondaryColor": "#a7f3d0",
  "bgGradient": "from-emerald-500/15 via-teal-300/10 to-green-400/10",
  "subFlowers": [
    {
      "name": "オレガノ（花薄荷）",
      "reading": "おれがの",
      "meanings": [
        "輝き",
        "自然の恵み",
        "実質"
      ],
      "note": "爽やかなハーブコンビ（トマト料理やピザに欠かせない芳香ハーブ）"
    }
  ],
  "triviaList": [
    "ギリシャ神話の美しい妖精メンテが、香気あふれる草に変えられたのがミントの起源です。",
    "5/28の補足席には同じシソ科の盟友「オレガノ」が同席し、極上の爽快ハーブタッグを結成！",
    "メントールの冷涼成分は、心のリフレッシュだけでなく集中力を高める効果も抜群です。"
  ],
  "rarity": "Normal"
},

  "5-31": {
    "id": "5-31",
    "name": "フジ（藤）",
    "reading": "ふじ",
    "scientificName": "Wisteria floribunda",
    "month": 5,
    "day": 31,
    "meanings": [
      "優しさ",
      "歓迎",
      "忠実な愛"
    ],
    "description": "初夏の青空の下で優美な紫の花房をカーテンのように垂らし、甘い高貴な香りで包み込む日本古来の銘木。訪れる者を温かく迎え入れる「歓迎」と深い「優しさ」を持ちます。",
    "category": "樹木",
    "svgType": "wisteria",
    "flowerColor": "#a855f7",
    "secondaryColor": "#e9d5ff",
    "bgGradient": "from-purple-500/15 via-violet-400/10 to-emerald-500/10",
    "triviaList": [
      "樹齢数百年を誇る藤棚のトンネルは、日本のみならず世界中の観光客を魅了する絶景です。",
      "花言葉の「歓迎」は、頭上から降り注ぐ花房が頭を下げてお辞儀をしているように見えることに由来します。",
      "常識をぶち破るような圧倒的なスケールとダイナミックな生命力で藤棚を覆い尽くします。"
    ],
    "rarity": "Normal"
  },
  "6-11": {
    "id": "6-11",
    "name": "ベニバナ（紅花・末摘花）",
    "reading": "べにばな",
    "scientificName": "Carthamus tinctorius",
    "month": 6,
    "day": 11,
    "meanings": [
      "化粧",
      "装い",
      "包容力"
    ],
    "description": "アザミに似たトゲのある葉の頂に、黄色から鮮やかな紅色へと色を変えていく太陽の花。古来より最高級の口紅や染料として人々を美しく彩り、すべてを受け止める「包容力」を宿します。",
    "category": "花",
    "svgType": "safflower",
    "flowerColor": "#ea580c",
    "secondaryColor": "#fde047",
    "bgGradient": "from-orange-500/15 via-amber-400/10 to-emerald-500/10",
    "triviaList": [
      "「源氏物語」の末摘花（すえつむはな）の由来にもなった歴史ある伝統染料植物です。",
      "咲き進むにつれて鮮黄色から徐々に濃い橙紅へと劇的に変色していくドラマチックな花です。",
      "山形県の花として有名で、江戸時代には米の百倍、金の重さで取引された高級品でした。"
    ],
    "rarity": "Normal"
  },
  "6-20": {
    "id": "6-20",
    "name": "ベロニカ（ルリトラノオ）",
    "reading": "べろにか",
    "scientificName": "Veronica",
    "month": 6,
    "day": 20,
    "meanings": [
      "忠実",
      "名誉",
      "貞節"
    ],
    "description": "キリッと直立した青紫の花穂を空へ向かって伸ばす爽快な花。キリストの顔を布で拭った聖女ベロニカの伝説に由来し、何者にも屈しない「名誉」と真っ直ぐな信念を象徴します。",
    "category": "花",
    "svgType": "lavender",
    "flowerColor": "#2563eb",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-600/15 via-sky-400/10 to-emerald-500/10",
    "triviaList": [
      "十字架を背負うキリストに布を差し出し、奇跡の顔布を残した聖女ベロニカの名を冠しています。",
      "花穂が虎の尾のようにシャープに立ち上がる姿から、日本の山野草「ルリトラノオ」とも呼ばれます。",
      "個性全開で我が道を行く人にぴったりの堂々たる「名誉」の花言葉を持ちます。"
    ],
    "rarity": "Normal"
  },
  "6-25": {
    "id": "6-25",
    "name": "ヒルガオ（昼顔）",
    "reading": "ひるがお",
    "scientificName": "Calystegia japonica",
    "month": 6,
    "day": 25,
    "meanings": [
      "絆",
      "優しい愛情",
      "情事"
    ],
    "description": "朝顔がしぼむ真昼の炎天下でも、淡いピンクの花を涼やかに咲かせ続けるたくましいつる植物。周囲にしっかり巻きついて離れない「絆」と包容力に満ちた愛情を宿します。",
    "category": "花",
    "svgType": "morning_glory",
    "flowerColor": "#f472b6",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-teal-500/10",
    "triviaList": [
      "アサガオと違って真昼の強い日差しの中でも平気で咲き続ける驚異のタフさを持っています。",
      "地下茎を四方八方に伸ばして仲間とガッチリ繋がることから「絆」の花言葉が生まれました。",
      "のんびり昼寝しながらでも枯れない、自然体のマイペースさを体現しています。"
    ],
    "rarity": "Normal"
  },
  "7-2": {
    "id": "7-2",
    "name": "クレマチス（鉄線・テッセン）",
    "reading": "くれまちす",
    "scientificName": "Clematis",
    "month": 7,
    "day": 2,
    "meanings": [
      "精神の美",
      "旅人の喜び",
      "策略"
    ],
    "description": "「蔓性植物の女王」と讃えられる気品ある大輪花。針金のように細く頑丈なつるを伸ばして大輪を咲かせる姿から、外見の小ささに惑わされない不屈の「精神の美」を宿します。",
    "category": "花",
    "svgType": "clematis",
    "flowerColor": "#7c3aed",
    "secondaryColor": "#ddd6fe",
    "bgGradient": "from-purple-600/15 via-violet-400/10 to-emerald-500/10",
    "triviaList": [
      "細いツルが針金（鉄の線）のように強靭でちぎれないことから「テッセン」の名がつきました。",
      "宿屋の玄関につるを這わせて旅人を歓迎した故事から「旅人の喜び」の花言葉も持ちます。",
      "小柄でも誰よりも強靭で賢い、凛としたプライドを持つ人にぴったりの女王花です。"
    ],
    "rarity": "Normal"
  },
  "7-8": {
    "id": "7-8",
    "name": "フクリンソウ（覆輪草・カランコエ）",
    "reading": "ふくりんそう",
    "scientificName": "Kalanchoe pinnata",
    "month": 7,
    "day": 8,
    "meanings": [
      "富貴",
      "豊富",
      "幸福"
    ],
    "description": "葉の縁（フチ）から無数の小さな子株を芽吹かせる「マザーリーフ（幸福の葉）」の別名を持つ多肉植物。観測されない価値さえも内に秘めて繁栄をもたらす「幸福」の花です。",
    "category": "花",
    "svgType": "succulent",
    "flowerColor": "#059669",
    "secondaryColor": "#86efac",
    "bgGradient": "from-emerald-600/15 via-teal-400/10 to-slate-700/10",
    "triviaList": [
      "水に浮かべておくだけで葉の切れ込みから無数の子株が次々生まれる驚異の繁殖力を持ちます。",
      "「子宝草」「ハッピーベル」など縁起の良い別名が多く、幸運のお守りとして愛されています。",
      "腹に一物秘めた冷静沈着さとともに、着実に富と幸福を築き上げる知略の植物です。"
    ],
    "rarity": "Normal"
  },
  "7-13": {
    "id": "7-13",
    "name": "グラジオラス（唐菖蒲）",
    "reading": "ぐらじおらす",
    "scientificName": "Gladiolus",
    "month": 7,
    "day": 13,
    "meanings": [
      "密会",
      "用心",
      "勝利",
      "誠実"
    ],
    "description": "ラテン語の「小さな剣（グラディウス）」に由来する堂々たる立ち姿。騎士の剣のように鋭い葉と、空へ向かって豪快に連咲きする花が、揺るぎなき「勝利」と「誠実」を宣言します。",
    "category": "花",
    "svgType": "gladiolus",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-red-600/15 via-rose-400/10 to-slate-700/10",
    "triviaList": [
      "古代ローマの剣闘士（グラディエーター）と同じ語源を持つ、まさに武人の花です。",
      "花言葉の「密会」は、咲かせた花の数で恋人同士が逢瀬の時間を秘密に伝え合った暗号の伝説から。",
      "コワモテで力強く、努力を積み重ねて堂々と勝利を掴み取る人にふさわしい銘花です。"
    ],
    "rarity": "Normal"
  },
  "7-17": {
    "id": "7-17",
    "name": "ハマユウ（浜木綿）",
    "reading": "はまゆう",
    "scientificName": "Crinum asiaticum",
    "month": 7,
    "day": 17,
    "meanings": [
      "あなたを信じます",
      "どこか遠くへ",
      "汚れがない"
    ],
    "description": "真夏の海岸の岩場や白浜で、芳香を放ちながら蜘蛛の手足のように白いリボン状の花を広げる海浜植物。「あなたを信じます」という純白の信頼を荒波に向かって捧げます。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#0284c7",
    "secondaryColor": "#e0f2fe",
    "bgGradient": "from-cyan-500/15 via-sky-400/10 to-emerald-500/10",
    "triviaList": [
      "種子がコルク質で軽く、黒潮の波に乗って遥か遠くの海岸へと旅をして芽吹きます。",
      "夕暮れから強い甘い芳香を漂わせ、夜の海辺に純白の姿を浮かび上がらせます。",
      "百獣の王のように威風堂々としつつも、大切な仲間への熱い信頼を秘めています。"
    ],
    "rarity": "Normal"
  },
  "8-8": {
    "id": "8-8",
    "name": "アンスリウム（紅団扇）",
    "reading": "あんすりうむ",
    "scientificName": "Anthurium",
    "month": 8,
    "day": 8,
    "meanings": [
      "煩悩",
      "恋にもだえる心",
      "情熱"
    ],
    "description": "エナメルのような光沢を持つ鮮紅色のハート型の仏炎苞（ほう）と、中心から伸びる尾のような肉穂花序が熱帯の熱気を感じさせる情熱花。「煩悩」と熱い恋情を燃え上がらせます。",
    "category": "花",
    "svgType": "anthurium",
    "flowerColor": "#dc2626",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-600/15 via-orange-400/10 to-emerald-500/10",
    "triviaList": [
      "ハート型の赤い部分は花びらではなく葉が変形した「仏炎苞（ぶつえんほう）」です。",
      "ハワイではバレンタインデーの定番ギフトとして「Heart of Hawaii」と親しまれています。",
      "因果応報を信じつつ、ノリと情熱で豪快に人生を爆走する人にぴったりの花です。"
    ],
    "rarity": "Normal"
  },
  "8-10": {
    "id": "8-10",
    "name": "ルコウソウ（留紅草・縷紅草）",
    "reading": "るこうそう",
    "scientificName": "Ipomoea quamoclit",
    "month": 8,
    "day": 10,
    "meanings": [
      "繊細な愛",
      "元気",
      "おせっかい",
      "でしゃばり"
    ],
    "description": "糸のように細い羽状の葉の間から、真紅のくっきりとした小さな五芒星（星型）の花を次々と咲かせるつる草。「繊細な愛」「元気」に加えて「おせっかい」「でしゃばり」と情緒が忙しい花言葉が魅力です。",
    "category": "花",
    "svgType": "star",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fee2e2",
    "bgGradient": "from-red-500/15 via-pink-400/10 to-teal-500/10",
    "triviaList": [
      "「繊細な愛」「元気」の横に「おせっかい」「でしゃばり」が同居する情緒多忙な花言葉！",
      "星型の花が毎朝パッと一斉に咲き揃い、緑のレースのような繊細な葉とのコントラストが絶景です。",
      "触れると物を凍らせてしまう宇宙規模の奔放さも、この愛嬌があれば丸ごと許されます。"
    ],
    "rarity": "Normal"
  },
  "8-21": {
    "id": "8-21",
    "name": "ブルーベリー",
    "reading": "ぶるーべりー",
    "scientificName": "Vaccinium",
    "month": 8,
    "day": 21,
    "meanings": [
      "実りある人生",
      "知性",
      "信頼"
    ],
    "description": "春にはスズランのような可愛い釣鐘型の白花を咲かせ、真夏には甘酸っぱい藍色の実をたわわに実らせる果樹。深いアントシアニンを蓄える姿から「知性」と「信頼」を象徴します。",
    "category": "樹木",
    "svgType": "blueberry",
    "flowerColor": "#2563eb",
    "secondaryColor": "#bfdbfe",
    "bgGradient": "from-blue-600/15 via-indigo-400/10 to-emerald-500/10",
    "triviaList": [
      "目の健康をサポートするアントシアニンが豊富で、第二次世界大戦のパイロットにも愛用されました。",
      "春の白花、夏の実、秋の鮮やかな紅葉と、四季を通じて様々な表情を楽しませてくれます。",
      "イマジナリーフレンドと語り合いながら飄々と知略を巡らせる天才肌に似合います。"
    ],
    "rarity": "Normal"
  },
  "8-22": {
    "id": "8-22",
    "name": "トウガラシ（唐辛子）",
    "reading": "とうがらし",
    "scientificName": "Capsicum annuum",
    "month": 8,
    "day": 22,
    "meanings": [
      "旧友",
      "嫉妬",
      "生命力"
    ],
    "description": "小さな白い花を咲かせた後、天を向いてツンと尖った鮮紅色の実をつける刺激的な植物。厳しい環境でもグングン育つ「生命力」と、昔馴染みの絆を確かめ合う「旧友」の花言葉を持ちます。",
    "category": "花",
    "svgType": "pepper",
    "flowerColor": "#dc2626",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-600/15 via-amber-400/10 to-slate-700/10",
    "triviaList": [
      "辛味成分カプサイシンは代謝を促進し、古来より香辛料や防虫・魔除けのお守りとされました。",
      "「旧友」の花言葉は、辛い刺激を分かち合ってきた気兼ねない友人関係に由来します。",
      "平凡であることを誇りとし、コツコツ堅実に日常を支え抜く人に力を与える花です。"
    ],
    "rarity": "Normal",
    "subFlowers": [
          {
                "name": "クジャクアスター（孔雀アスター）",
                "meanings": [
                      "友情",
                      "可憐",
                      "いつも愉快"
                ],
                "note": "孔雀が羽を広げたように咲く星咲き菊"
          }
    ]
  },
  "9-12": {
    "id": "9-12",
    "name": "アイ（藍・蓼藍）",
    "reading": "あい",
    "scientificName": "Persicaria tinctoria",
    "month": 9,
    "day": 12,
    "meanings": [
      "美しい装い",
      "あなた次第"
    ],
    "description": "「青は藍より出でて藍より青し」の故事で知られる日本を代表する染料植物。初秋に咲く赤みを帯びた小花と、染め重ねるほどに深まるジャパンブルーの深遠な美しさを宿します。",
    "category": "花",
    "svgType": "wildflower",
    "flowerColor": "#1d4ed8",
    "secondaryColor": "#93c5fd",
    "bgGradient": "from-blue-700/15 via-indigo-500/10 to-emerald-500/10",
    "triviaList": [
      "「ジャパンブルー」として明治期に世界を驚かせた美しい藍染めの原点となるタデ科植物です。",
      "花言葉「あなた次第」は、染め師の技術と熱意によって浅葱色から濃紺まで千変万化することから。",
      "世界の頂点を目指して爆走するアスリートの背中を力強く後押しする魂の色です。"
    ],
    "rarity": "Normal"
  },
  "9-16": {
    "id": "9-16",
    "name": "アカネ（茜）",
    "reading": "あかね",
    "scientificName": "Rubia argyi",
    "month": 9,
    "day": 16,
    "meanings": [
      "私を思って",
      "媚び"
    ],
    "description": "夕焼け空を染め上げる「茜色」の語源となった歴史深い染料植物。黄色い小さな花を咲かせ、根から鮮やかな緋色を抽出します。「私を思って」と「媚び」が並ぶ絶妙な距離感を醸します。",
    "category": "花",
    "svgType": "wildflower",
    "flowerColor": "#be123c",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-rose-600/15 via-red-400/10 to-amber-500/10",
    "triviaList": [
      "「私を思って」と「媚び」が並ぶ、恋愛や人間関係の絶妙に怪しい距離感が面白い名花！",
      "万葉集の「あかねさす紫野行き標野行き…」の枕詞でも名高い、日本最古の赤色染料です。",
      "綺麗事だけでは生きられない現実を知りつつ、したたかに輝く人にふさわしい花です。"
    ],
    "rarity": "Normal"
  },
  "9-18": {
    "id": "9-18",
    "name": "ホウセンカ（鳳仙花）",
    "reading": "ほうせんか",
    "scientificName": "Impatiens balsamina",
    "month": 9,
    "day": 18,
    "meanings": [
      "私に触れないで",
      "短気",
      "せっかち"
    ],
    "description": "熟した果実にそっと指を触れるだけで、パチンと弾けて種を遠くまで飛ばす性質から「私に触れないで」の花言葉が生まれました。凛とした誇りと孤高のプライドを貫く花です。",
    "category": "花",
    "svgType": "impatiens",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-pink-600/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "学名「Impatiens」は「我慢できない（耐えられない）」を意味し、タネが勢いよく弾ける様子から。",
      "昔の女の子は花びらをすりつぶして爪を赤く染め、「爪紅（つまくれない）」として遊びました。",
      "気安く馴れ合わず、自分ひとりの領域を気高く守り抜く才色兼備の令嬢花です。"
    ],
    "rarity": "Normal"
  },
  "10-15": {
    "id": "10-15",
    "name": "バジル（目箒・スイートバジル）",
    "reading": "ばじる",
    "scientificName": "Ocimum basilicum",
    "month": 10,
    "day": 15,
    "meanings": [
      "好意",
      "神聖",
      "良い望み"
    ],
    "description": "イタリア料理に欠かせない芳香ハーブの王様。古代ギリシャでは「王のハーブ」と崇められ、触れるだけで甘くスパイシーな香りで包み「良い望み」と「好意」を届けます。",
    "category": "花",
    "svgType": "herb",
    "flowerColor": "#059669",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-500/15 via-teal-400/10 to-green-600/15",
    "triviaList": [
      "ギリシャ語の「バシレウス（王様）」が語源で、王宮の香油や儀式に用いられてきました。",
      "タネを水に浸すとゼリー状の膜で覆われ、昔は目に入ったゴミを取る「目箒（めぼうき）」に使われました。",
      "触れるとピリッと静電気が走るような繊細な心に、優しい癒しと守護を与えます。"
    ],
    "rarity": "Normal"
  },
  "10-17": {
    "id": "10-17",
    "name": "フヨウ（芙蓉）",
    "reading": "ふよう",
    "scientificName": "Hibiscus mutabilis",
    "month": 10,
    "day": 17,
    "meanings": [
      "繊細な美",
      "しとやかな恋人"
    ],
    "description": "朝に優美な花を開き、夕暮れには静かにしぼむ「一日花」の代表格。朝の白から夕方の紅色へと色が移ろう姿から、傷つきながらも本質を見抜いて成長する「繊細な美」を象徴します。",
    "category": "樹木",
    "svgType": "hibiscus",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-slate-700/10",
    "triviaList": [
      "富士山の優美な山容を「芙蓉峰」と呼ぶなど、古来から気品と美しさの極致と称えられてきました。",
      "一日で儚く散るからこそ、一瞬の出会いと本質的な輝きを何よりも大切にします。",
      "外見の装いに惑わされず、構造の核心にある真理を見つめる知性に寄り添います。"
    ],
    "rarity": "Normal"
  },
  "10-27": {
    "id": "10-27",
    "name": "ランタナ（七変化）",
    "reading": "らんたな",
    "scientificName": "Lantana camara",
    "month": 10,
    "day": 27,
    "meanings": [
      "心変わり",
      "合意",
      "協力"
    ],
    "description": "咲き進むにつれて黄、橙、赤、紫へと花色がドラマチックに移り変わる小花。気まぐれに揺れる感情の移ろいを見つめながら、自立した確固たる芯を持つ者に寄り添います。",
    "category": "花",
    "svgType": "hydrangea",
    "flowerColor": "#f97316",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-500/15 via-orange-400/10 to-purple-500/10",
    "triviaList": [
      "花の色が次々と変化していく性質から、和名で「七変化（しちへんげ）」と呼ばれます。",
      "世界の侵略的外来種ワースト100にも選ばれるほど驚異的にタフで頑丈な生命力を誇ります。",
      "他人の移ろいやすい感情に惑わされず、自分だけの揺るぎない城を築く人に力を与えます。"
    ],
    "rarity": "Normal"
  },
  "11-18": {
    "id": "11-18",
    "name": "ヒメジョオン ＆ ミッキーマウスノキ",
    "reading": "ひめじょおん・みっきーまうすのき",
    "scientificName": "Erigeron annuus / Ochna serrulata",
    "month": 11,
    "day": 18,
    "meanings": [
      "素朴で清楚",
      "隠れた美しさ",
      "陽気",
      "快活",
      "心からの愛"
    ],
    "description": "道端に静かに咲く素朴な野草ヒメジョオンと、ミッキーマウスの顔のような実をつける熱帯花木が同じ誕生日に並ぶ奇跡の席！飾らない素朴さと陽気な快活さが絶妙に響き合います。",
    "category": "花",
    "svgType": "fleabane",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fef3c7",
    "bgGradient": "from-amber-500/15 via-rose-400/10 to-emerald-500/10",
    "triviaList": [
      "素朴な野草とミッキーマウスが同じ誕生日席にいるサイト内でも指折りの異色コラボ！",
      "ミッキーマウスノキは花が散った後の黒い種子と赤い萼片がミッキーの顔そっくりになります。",
      "毒舌でマイルドヤンキーでも、根っこにある素朴な優しさと陽気な情熱を兼ね備えています。"
    ],
    "rarity": "Normal"
  },
  "11-20": {
    "id": "11-20",
    "name": "ムベ（郁子・野木瓜）",
    "reading": "むべ",
    "scientificName": "Stauntonia hexaphylla",
    "month": 11,
    "day": 20,
    "meanings": [
      "愛嬌",
      "愛",
      "才能"
    ],
    "description": "天智天皇が長寿の果実を食して「むべなるかな（もっともなことだ）」と感嘆した伝説から名付けられた日本固有のつる性木。流行に流されず内に秘めた「才能」を開花させます。",
    "category": "樹木",
    "svgType": "berry",
    "flowerColor": "#854d0e",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-700/15 via-yellow-500/10 to-emerald-500/10",
    "triviaList": [
      "アケビに似ていますが、熟しても果実が割れないことから「実が割れない＝秘密を守る・絆」とされます。",
      "皇室への献上果物としても名高く、古くから長寿と健康の霊果として尊ばれてきました。",
      "世間のブームに惑わされず、我が道を淡々と歩むマイペースな実力派にぴったりの花です。"
    ],
    "rarity": "Normal"
  },
  "11-23": {
    "id": "11-23",
    "name": "ストレリチア（極楽鳥花）",
    "reading": "すとれりちあ",
    "scientificName": "Strelitzia reginae",
    "month": 11,
    "day": 23,
    "meanings": [
      "輝かしい未来",
      "寛容",
      "気取った恋"
    ],
    "description": "極楽鳥が翼を広げて羽ばたくようなエキゾチックで鮮烈な花姿。人懐っこい笑顔の奥で「誰のために生きるのか」と葛藤する心に、遥かなる「輝かしい未来」への希望を灯します。",
    "category": "花",
    "svgType": "bird_of_paradise",
    "flowerColor": "#ea580c",
    "secondaryColor": "#38bdf8",
    "bgGradient": "from-orange-500/15 via-blue-400/10 to-emerald-500/10",
    "triviaList": [
      "パプアニューギニアの極楽鳥（フウチョウ）にそっくりなことから名付けられました。",
      "切花にしても非常に長持ちし、次々と新しい花弁が苞から顔を出す生命力の強さを誇ります。",
      "他人のために尽くしすぎて疲れた心を、大空へ羽ばたく雄大な翼で解放してくれます。"
    ],
    "rarity": "Normal"
  },
  "11-24": {
    "id": "11-24",
    "name": "ヤツデ（八手・天狗の団扇）",
    "reading": "やつで",
    "scientificName": "Fatsia japonica",
    "month": 11,
    "day": 24,
    "meanings": [
      "分別",
      "親しみ",
      "健康"
    ],
    "description": "大きな手のひらのような葉を八方に広げ、冬の訪れとともにポンポン状の白い小花を咲かせる縁起木。「人を招き入れる千客万来の手」として親しまれ、「分別」と「健康」を守護します。",
    "category": "樹木",
    "svgType": "palm",
    "flowerColor": "#0f766e",
    "secondaryColor": "#5eead4",
    "bgGradient": "from-teal-600/15 via-emerald-400/10 to-slate-700/10",
    "triviaList": [
      "「八手」と書きますが、葉の切れ込みは実際には7枚や9枚など奇数に分かれることが多いです。",
      "日陰でも元気に育ち、天狗の団扇のように魔を払い人を招く縁起の良い庭木です。",
      "派手な衣装と明るいおしゃべりで周囲を巻き込み、元気をプレゼントしてくれます。"
    ],
    "rarity": "Normal"
  },
  "11-25": {
    "id": "11-25",
    "name": "ネリネ（ダイヤモンドリリー）",
    "reading": "ねりね",
    "scientificName": "Nerine",
    "month": 11,
    "day": 25,
    "meanings": [
      "また会う日を楽しみに",
      "幸せな思い出",
      "箱入り娘"
    ],
    "description": "光を受けると花びらがダイヤモンドダストのようにキラキラと輝く美しい花。ギリシャ神話の美しい海の妖精ネレイデスに由来し、心に残る「幸せな思い出」を温かく照らし出します。",
    "category": "花",
    "svgType": "lily",
    "flowerColor": "#f43f5e",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-pink-300/10 to-emerald-500/10",
    "triviaList": [
      "花弁の細胞に光が乱反射して宝石のようにキラキラ輝くことから「ダイヤモンドリリー」と呼ばれます。",
      "ヒガンバナの仲間ですが、葉が出ている間に花が咲き、冬の間も長く咲き続けます。",
      "いつも笑顔で周りに気を配り、みんなとの大切な思い出を宝物にする人に寄り添います。"
    ],
    "rarity": "Normal"
  },
  "12-4": {
    "id": "12-4",
    "name": "スイバ（酸い葉・スカンポ）",
    "reading": "すいば",
    "scientificName": "Rumex acetosa",
    "month": 12,
    "day": 4,
    "meanings": [
      "親愛の情",
      "情愛"
    ],
    "description": "野原や道端に群生し、かじると爽やかな酸味が広がる野草。どこでも逞しく根を張り、気取らない仲間同士のざっくばらんで温かな「親愛の情」を育みます。",
    "category": "花",
    "svgType": "wildflower",
    "flowerColor": "#15803d",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-green-600/15 via-rose-300/10 to-amber-500/10",
    "triviaList": [
      "葉にシュウ酸を含むため酸味があり、昔の子供たちは野遊びの途中で茎をかじって喉を潤しました。",
      "ヨーロッパでは「ソレル」と呼ばれ、爽やかな酸味を活かしたスープやソースのハーブになります。",
      "ちょっと無神経でおおざっぱでも、仲間思いで裏表のないギャルマインドを宿します。"
    ],
    "rarity": "Normal"
  },
    "12-5": {
    "id": "12-5",
    "name": "シンビジウム",
    "reading": "しんびじうむ",
    "scientificName": "Cymbidium",
    "month": 12,
    "day": 5,
    "meanings": ["飾らない心", "素朴", "高貴な美人"],
    "description": "冬を華やかに彩る四大洋ランの一つ。優雅に立ち上がる花茎にロウ細工のような上品な花を連ねて咲かせます。",
    "category": "洋ラン",
    "svgType": "orchid",
    "flowerColor": "#f472b6",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-pink-500/15 via-rose-300/10 to-amber-200/10",
    "subFlowers": [
      {
        "name": "ブタクサ（豚草）",
        "meanings": ["よりを戻す", "直感", "幸福な日々"],
        "note": "秋風に揺れるたくましいキク科植物"
      }
    ],
    "triviaList": [
      "ギリシャ語の「kymbe（舟）」に由来し、唇弁（リップ）が小さな舟のような窪みを持つことから命名されました。"
    ]
  },
  "12-16": {
    "id": "12-16",
    "name": "クルミ（胡桃）",
    "reading": "くるみ",
    "scientificName": "Juglans",
    "month": 12,
    "day": 16,
    "meanings": [
      "知性",
      "知恵",
      "豊穣"
    ],
    "description": "硬い殻の中に脳の形に似た栄養豊かな実を包み込む古代の果樹。古来より思考を司る「知性」と「知恵」、そして厳しい冬を乗り越える「豊穣」のシンボルとされます。",
    "category": "樹木",
    "svgType": "walnut",
    "flowerColor": "#78350f",
    "secondaryColor": "#d97706",
    "bgGradient": "from-amber-800/15 via-yellow-600/10 to-slate-700/10",
    "triviaList": [
      "実の形状が人間の大脳に酷似していることから、古代ギリシャや中国で脳を活性化する知恵の木と信じられました。",
      "オメガ3脂肪酸やビタミンEが凝縮され、現代でも最高のスーパーフードとして知られています。",
      "温順で働き者でありながら、頭の中で冷静に計算を巡らせるスマートな知性を支えます。"
    ],
    "rarity": "Normal"
  },
  "12-24": {
  "id": "12-24",
  "name": "ヤドリギ（宿り木・ホーリーミスルトゥ）",
  "reading": "やどりぎ",
  "scientificName": "Viscum album",
  "month": 12,
  "day": 24,
  "meanings": [
    "困難に打ち勝つ",
    "克服",
    "愛の絆",
    "キスを呼ぶ木"
  ],
  "description": "冬枯れの巨木の梢に、青々とした緑の球状の葉と半透明の真珠のような実をつける神聖な植物。西洋では「ヤドリギの下で出会った二人はキスをしてもよい」という愛の伝説があります。",
  "category": "寄生常緑低木",
  "svgType": "mistletoe",
  "flowerColor": "#15803d",
  "secondaryColor": "#fef08a",
  "bgGradient": "from-emerald-600/15 via-green-400/10 to-amber-200/15",
  "subFlowers": [
    {
      "name": "ノースポール（クリサンセマム）",
      "reading": "のーすぽーる",
      "meanings": [
        "誠実",
        "冬の足音",
        "高潔"
      ],
      "note": "12/24同席不可による敗者復活（聖夜の雪のように真っ白な小菊）"
    }
  ],
  "triviaList": [
    "聖夜の象徴ヤドリギ！古代ケルトのドルイド僧が黄金の鎌で収穫したとされる神聖な万能薬草です。",
    "「12/24同席不可による敗者復活」として、純白のノースポールが補足植物として華やかに復活！",
    "冬でも枯れない強い生命力から「困難に打ち勝つ」という希望の花言葉が宿ります。"
  ],
  "rarity": "Super Rare"
},

  "12-26": {
    "id": "12-26",
    "name": "クリスマスローズ（ヘレボルス）",
    "reading": "くりすますろーず",
    "scientificName": "Helleborus niger",
    "month": 12,
    "day": 26,
    "meanings": [
      "私の不安を和らげて",
      "慰め",
      "追憶"
    ],
    "description": "雪が舞う真冬の庭でうつむき加減に気品ある花を咲かせる「冬の貴婦人」。キリスト誕生のお祝いに貧しい羊飼いの少女が捧げた奇跡の花として、心の不安を優しく和らげます。",
    "category": "花",
    "svgType": "hellebore",
    "flowerColor": "#047857",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-emerald-700/15 via-rose-300/10 to-slate-800/10",
    "triviaList": [
      "花びらに見える部分は実は萼（がく）片で、冬の厳しい寒さでも数ヶ月間色あせずに咲き続けます。",
      "キリスト誕生を祝う贈り物がなくて泣いていた貧しい少女の涙から咲き出たという聖夜の奇跡の伝説。",
      "退屈を嫌い、ちょっとドSで天真爛漫な天才の繊細な心の奥底をそっと癒してくれます。"
    ],
    "rarity": "Normal"
  },
  "12-28": {
    "id": "12-28",
    "name": "ツワブキ（石蕗）",
    "reading": "つわぶき",
    "scientificName": "Farfugium japonicum",
    "month": 12,
    "day": 28,
    "meanings": [
      "謙譲",
      "困難に負けない",
      "愛よ甦れ"
    ],
    "description": "日陰や海岸の断崖でもツヤツヤした厚い丸葉を広げ、年の瀬の寒さの中で鮮やかな黄色い菊状の花を咲かせる日本の伝統植物。「困難に負けない」不屈の魂を宿します。",
    "category": "花",
    "svgType": "chrysanthemum",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-500/15 via-amber-400/10 to-emerald-600/10",
    "triviaList": [
      "「艶葉蕗（つやばぶき）」が転じた名前で、葉の表面にクチクラ層が発達して一年中ツヤツヤです。",
      "他の草花が枯れ果てる初冬から年末にかけて元気に咲き誇る、年末ギリギリの希望のシンボル。",
      "ハイテンションで流行をメタ視点から分析する鋭いギャルマインドにも負けないタフさです。"
    ],
    "rarity": "Normal"
  },
  "1-1": {
    "id": "1-1",
    "name": "スノードロップ（待雪草）",
    "reading": "すのーどろっぷ",
    "scientificName": "Galanthus nivalis",
    "month": 1,
    "day": 1,
    "meanings": [
      "希望",
      "慰め",
      "逆境の中の希望"
    ],
    "description": "真冬の雪を割って一番にうつむきがちに白い花を咲かせる希望の象徴。「逆境の中の希望」という、どんな困難にも負けない健気な力を秘めています。元日の誕生花としても名高い花です。",
    "category": "球根",
    "svgType": "snowdrop",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#22c55e",
    "bgGradient": "from-emerald-500/10 via-teal-500/10 to-slate-200/20",
    "anniversaryNote": "元日・新春吉日（逆境の中の希望）",
    "rarity": "Super Rare"
  },
  "2-7": {
    "id": "2-7",
    "name": "ウメ（梅）",
    "reading": "うめ",
    "scientificName": "Prunus mume",
    "month": 2,
    "day": 7,
    "meanings": [
      "高潔",
      "忠実",
      "忍耐"
    ],
    "description": "百花に先駆けて寒風の中で凛とした芳香を漂わせる梅。「高潔」と「忍耐」の精神を象徴し、春の兆しを告げる気品高き花木です。",
    "category": "花木",
    "svgType": "plum",
    "flowerColor": "#ec4899",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-pink-500/15 via-rose-400/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "2-9": {
    "id": "2-9",
    "name": "ゼンマイ（薇）",
    "reading": "ぜんまい",
    "scientificName": "Osmunda japonica",
    "month": 2,
    "day": 9,
    "meanings": [
      "秘密",
      "夢想",
      "円満"
    ],
    "description": "春の山野に渦巻くような新芽を覗かせる山菜。渦巻きが円を描くことから「円満」、そして包まれた綿毛の内に秘めた「秘密」「夢想」の花言葉を持ちます。",
    "category": "山菜",
    "svgType": "fern",
    "flowerColor": "#65a30d",
    "secondaryColor": "#bef264",
    "bgGradient": "from-lime-500/15 via-emerald-400/10 to-teal-500/10",
    "rarity": "Rare"
  },
  "3-4": {
    "id": "3-4",
    "name": "ラズベリー（木苺）",
    "reading": "らずべりー",
    "scientificName": "Rubus idaeus",
    "month": 3,
    "day": 4,
    "meanings": [
      "愛情",
      "深い後悔",
      "謙虚"
    ],
    "description": "甘酸っぱい赤い実を結ぶ野趣あふれる低木。「愛情」の温かさと、棘に触れたときの「深い後悔」、そして慎ましやかな「謙虚」さを併せ持ちます。",
    "category": "果樹",
    "svgType": "berry",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fda4af",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-pink-500/15",
    "rarity": "Rare"
  },
  "3-8": {
    "id": "3-8",
    "name": "コブシ（辛夷）",
    "reading": "こぶし",
    "scientificName": "Magnolia kobus",
    "month": 3,
    "day": 8,
    "meanings": [
      "友情",
      "歓迎",
      "愛らしさ"
    ],
    "description": "早春の青空に向かって、子どもの握り拳のような純白の花びらをいっぱいに広げる花木。「友情」と温かな「歓迎」の心を伝えます。",
    "category": "花木",
    "svgType": "magnolia",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#e2e8f0",
    "bgGradient": "from-slate-200/20 via-emerald-400/10 to-teal-500/10",
    "rarity": "Rare"
  },
  "3-14": {
    "id": "3-14",
    "name": "ブルーデージー（瑠璃雛菊）",
    "reading": "ぶるーでーじー",
    "scientificName": "Felicia amelloides",
    "month": 3,
    "day": 14,
    "meanings": [
      "幸福",
      "恵まれている",
      "協力"
    ],
    "description": "爽やかな青い花びらと中心の黄色いコントラストが美しいキク科の植物。「幸福」「恵まれている」という、日々の小さな喜びと調和を告げる花です。",
    "category": "花",
    "svgType": "daisy",
    "flowerColor": "#38bdf8",
    "secondaryColor": "#e0f2fe",
    "bgGradient": "from-sky-500/15 via-blue-400/10 to-indigo-500/10",
    "anniversaryNote": "ホワイトデー（幸福と感謝のブルーデージー）",
    "rarity": "Super Rare"
  },
  "4-12": {
    "id": "4-12",
    "name": "ケマンソウ（タイツリソウ・華鬘草）",
    "reading": "けまんそう",
    "scientificName": "Lamprocapnos spectabilis",
    "month": 4,
    "day": 12,
    "meanings": [
      "あなたに従う",
      "恋心",
      "失恋"
    ],
    "description": "弓なりにしなる茎にハート型の愛らしい花が並んでぶら下がるユニークな姿。「あなたに従う」「恋心」という、一途で切ない恋愛の象徴です。",
    "category": "山野草",
    "svgType": "heart",
    "flowerColor": "#ec4899",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-pink-500/15 via-rose-400/10 to-purple-500/10",
    "rarity": "Rare"
  },
  "4-30": {
    "id": "4-30",
    "name": "コオニタビラコ（小鬼田平子・春の七草ホトケノザ）",
    "reading": "こおにたびらこ",
    "scientificName": "Lapsana apogonoides",
    "month": 4,
    "day": 30,
    "meanings": [
      "仲間と一緒に",
      "調和"
    ],
    "description": "春の七草「仏の座」として親しまれる小さな黄色の野草。地面にロゼット状に寄り添って広がる姿から「仲間と一緒に」「調和」の温かい言葉を持ちます。",
    "category": "野草",
    "svgType": "dandelion",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-emerald-400/15",
    "rarity": "Rare"
  },
  "5-1": {
    "id": "5-1",
    "name": "カイドウ（花海棠）",
    "reading": "かいどう",
    "scientificName": "Malus halliana",
    "month": 5,
    "day": 1,
    "meanings": [
      "温和",
      "美人の眠り",
      "艶麗"
    ],
    "description": "うつむき加減に咲くピンクの優美な花姿は「眠れる美女」に例えられます。「温和」「艶麗」という、たおやかで気品ある美しさを讃えます。",
    "category": "花木",
    "svgType": "sakura",
    "flowerColor": "#f472b6",
    "secondaryColor": "#fce7f3",
    "bgGradient": "from-pink-400/15 via-rose-300/10 to-red-400/10",
    "rarity": "Rare"
  },
  "5-2": {
    "id": "5-2",
    "name": "フロックス（草夾竹桃）",
    "reading": "ふろっくす",
    "scientificName": "Phlox paniculata",
    "month": 5,
    "day": 2,
    "meanings": [
      "合意",
      "一致",
      "協調"
    ],
    "description": "初夏から秋にかけて毬のように小花が密集して華やかに咲き誇る多年草。皆で手を取り合うような姿から「合意」「一致」「協調」の言葉を持ちます。",
    "category": "花",
    "svgType": "phlox",
    "flowerColor": "#a855f7",
    "secondaryColor": "#f3e8ff",
    "bgGradient": "from-purple-500/15 via-violet-400/10 to-pink-400/10",
    "rarity": "Rare"
  },
  "5-12": {
    "id": "5-12",
    "name": "ツツジ（躑躅）",
    "reading": "つつじ",
    "scientificName": "Rhododendron",
    "month": 5,
    "day": 12,
    "meanings": [
      "節度",
      "慎み",
      "初恋"
    ],
    "description": "初夏の街路や庭園を鮮やかに彩る日本の代表的な花木。華やかさの奥に凛とした「節度」と「慎み」、そして甘酸っぱい「初恋」の記憶を呼び起こします。",
    "category": "花木",
    "svgType": "azalea",
    "flowerColor": "#e11d48",
    "secondaryColor": "#fbcfe8",
    "bgGradient": "from-rose-500/15 via-pink-400/10 to-emerald-400/10",
    "rarity": "Rare"
  },
  "5-25": {
    "id": "5-25",
    "name": "ユズ（柚子）",
    "reading": "ゆず",
    "scientificName": "Citrus junos",
    "month": 5,
    "day": 25,
    "meanings": [
      "健康美",
      "汚れなき人",
      "恋のため息"
    ],
    "description": "初夏に香る清楚な白い花と、秋冬に実る黄金の芳香果実。古くから心身を温め清める「健康美」と「汚れなき人」の象徴です。",
    "category": "柑橘",
    "svgType": "yuzu",
    "flowerColor": "#fef08a",
    "secondaryColor": "#eab308",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-lime-400/15",
    "rarity": "Rare"
  },
  "6-9": {
    "id": "6-9",
    "name": "アスター（蝦夷菊）",
    "reading": "あすたー",
    "scientificName": "Callistephus chinensis",
    "month": 6,
    "day": 9,
    "meanings": [
      "追憶",
      "変化",
      "信じる心"
    ],
    "description": "星のように整った花弁を咲かせる可憐な花。「信じる心」と「追憶」、そして多彩な色彩の「変化」を楽しむ美しさがあります。",
    "category": "花",
    "svgType": "aster",
    "flowerColor": "#8b5cf6",
    "secondaryColor": "#ede9fe",
    "bgGradient": "from-violet-500/15 via-purple-400/10 to-indigo-400/10",
    "rarity": "Rare"
  },
  "6-10": {
    "id": "6-10",
    "name": "ヒゲナデシコ（美女撫子）",
    "reading": "ひげなでしこ",
    "scientificName": "Dianthus barbatus",
    "month": 6,
    "day": 10,
    "meanings": [
      "勇敢",
      "純愛",
      "細やかな思い"
    ],
    "description": "花穂の周りに細い総苞葉がヒゲのように伸びる個性的な撫子。「勇敢」と「純愛」、そして相手を深く気遣う「細やかな思い」を宿します。",
    "category": "花",
    "svgType": "dianthus",
    "flowerColor": "#be123c",
    "secondaryColor": "#fecdd3",
    "bgGradient": "from-rose-600/15 via-pink-500/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "6-17": {
    "id": "6-17",
    "name": "フウセンカズラ（風船葛）",
    "reading": "ふうせんかずら",
    "scientificName": "Cardiospermum halicacabum",
    "month": 6,
    "day": 17,
    "meanings": [
      "一緒に飛びたい",
      "自由な心",
      "永遠にあなたと"
    ],
    "description": "夏に小さな白花を咲かせた後、紙風船のように膨らむ緑の実をつけるつる植物。「一緒に飛びたい」「自由な心」という愛らしくロマンチックな言葉を持ちます。",
    "category": "つる植物",
    "svgType": "balloon",
    "flowerColor": "#22c55e",
    "secondaryColor": "#bbf7d0",
    "bgGradient": "from-green-500/15 via-emerald-400/10 to-sky-400/15",
    "rarity": "Rare"
  },
  "7-11": {
    "id": "7-11",
    "name": "ルドベキア（松笠菊）",
    "reading": "るどべきあ",
    "scientificName": "Rudbeckia hirta",
    "month": 7,
    "day": 11,
    "meanings": [
      "正義",
      "公平",
      "あなたを見つめる"
    ],
    "description": "真夏の太陽に負けず、中心が黒褐色の円錐状に盛り上がる黄金の花びらを開く力強い花。「正義」「公平」という凛とした裁断の眼差しを持ちます。",
    "category": "花",
    "svgType": "sunflower",
    "flowerColor": "#eab308",
    "secondaryColor": "#78350f",
    "bgGradient": "from-amber-500/15 via-yellow-400/10 to-orange-500/10",
    "rarity": "Rare",
    "subFlowers": [
          {
                "name": "シソ（紫蘇）",
                "meanings": [
                      "善良な家風",
                      "力が蘇る"
                ],
                "note": "人を蘇らせる霊草"
          }
    ]
  },
  "7-31": {
    "id": "7-31",
    "name": "カボチャ（南瓜）",
    "reading": "かぼちゃ",
    "scientificName": "Cucurbita",
    "month": 7,
    "day": 31,
    "meanings": [
      "大きさ",
      "広い心",
      "広大"
    ],
    "description": "真夏に大輪の黄色い花を咲かせ、ずっしりと甘い栄養満点の実を育むウリ科の植物。大地のような「広い心」と「広大」な豊かさを象徴します。",
    "category": "野菜",
    "svgType": "pumpkin",
    "flowerColor": "#f97316",
    "secondaryColor": "#fed7aa",
    "bgGradient": "from-orange-500/15 via-amber-400/10 to-emerald-500/10",
    "rarity": "Rare"
  },
  "8-3": {
    "id": "8-3",
    "name": "マロウ（ウスベニアオイ・薄紅葵）",
    "reading": "まろう",
    "scientificName": "Malva sylvestris",
    "month": 8,
    "day": 3,
    "meanings": [
      "柔和な心",
      "穏やか",
      "魅力的"
    ],
    "description": "ハーブティーにすると青からピンクへと色の魔法を見せる薬用植物。「柔和な心」「穏やか」という、人々を優しく包み癒す魅力があります。",
    "category": "ハーブ",
    "svgType": "mallow",
    "flowerColor": "#c084fc",
    "secondaryColor": "#f3e8ff",
    "bgGradient": "from-purple-400/15 via-violet-300/10 to-pink-300/15",
    "rarity": "Rare"
  },
  "8-12": {
    "id": "8-12",
    "name": "タンジー（ヨモギギク）",
    "reading": "たんじー",
    "scientificName": "Tanacetum vulgare",
    "month": 8,
    "day": 12,
    "meanings": [
      "婦人の美徳",
      "抵抗",
      "不滅"
    ],
    "description": "黄色のボタンのような小花を傘状に密集させて咲かせるハーブ。独特の強い香りで虫を退け、乾燥しても色あせないことから「抵抗」「不滅」の誇りを宿します。",
    "category": "ハーブ",
    "svgType": "button",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-yellow-400/15 via-amber-300/10 to-green-500/10",
    "rarity": "Rare"
  },
  "8-18": {
    "id": "8-18",
    "name": "クコ（枸杞）",
    "reading": "くこ",
    "scientificName": "Lycium chinense",
    "month": 8,
    "day": 18,
    "meanings": [
      "誠実",
      "お互いに忘れない"
    ],
    "description": "夏に淡い紫色の可憐な花を咲かせ、秋には鮮やかな赤い薬用果実を結ぶクコ。「誠実」「お互いに忘れない」という、時を経ても変わらぬ絆を誓う花言葉を持ちます。",
    "category": "薬用植物",
    "svgType": "berry",
    "flowerColor": "#a855f7",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-purple-500/15 via-rose-500/10 to-red-400/15",
    "anniversaryNote": "開発者のいとこの誕生日（誠実なクコ）",
    "rarity": "Super Rare"
  },
  "9-5": {
    "id": "9-5",
    "name": "マンネングサ（万年草・セダム）",
    "reading": "まんねんぐさ",
    "scientificName": "Sedum",
    "month": 9,
    "day": 5,
    "meanings": [
      "静寂",
      "落ち着き",
      "私を思って"
    ],
    "description": "岩場や乾燥した場所でもみずみずしい緑を保ち、初秋に星型の小花を散りばめる多肉植物。「静寂」「落ち着き」という、揺るぎない平穏を象徴します。",
    "category": "多肉植物",
    "svgType": "sedum",
    "flowerColor": "#eab308",
    "secondaryColor": "#84cc16",
    "bgGradient": "from-lime-400/15 via-emerald-300/10 to-yellow-400/10",
    "rarity": "Rare"
  },
  "10-10": {
    "id": "10-10",
    "name": "メロン（甜瓜）",
    "reading": "めろん",
    "scientificName": "Cucumis melo",
    "month": 10,
    "day": 10,
    "meanings": [
      "飽食",
      "豊富",
      "裕福"
    ],
    "description": "網目模様の美しい果皮と芳醇な甘い果肉を持つ果物の王様。「豊富」「裕福」という、実り豊かな秋の贅沢と祝福を届けます。",
    "category": "果実",
    "svgType": "melon",
    "flowerColor": "#84cc16",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-lime-500/15 via-emerald-400/10 to-amber-300/15",
    "rarity": "Rare"
  },
  "10-14": {
    "id": "10-14",
    "name": "ユウゼンギク（友禅菊）",
    "reading": "ゆうぜんぎく",
    "scientificName": "Symphyotrichum novi-belgii",
    "month": 10,
    "day": 14,
    "meanings": [
      "老いても元気で",
      "若者に負けぬ元気",
      "恋の思い"
    ],
    "description": "友禅染のように艶やかな紫や桃色の花を秋空の下で咲き競うキク。「若者に負けぬ元気」「老いても元気で」という健康長寿の最高のエールを持ちます。",
    "category": "花",
    "svgType": "aster",
    "flowerColor": "#a855f7",
    "secondaryColor": "#f5d0fe",
    "bgGradient": "from-purple-500/15 via-pink-400/10 to-rose-400/10",
    "rarity": "Rare"
  },
  "11-12": {
    "id": "11-12",
    "name": "ヒメリンゴ（姫林檎）",
    "reading": "ひめりんご",
    "scientificName": "Malus cerasifera",
    "month": 11,
    "day": 12,
    "meanings": [
      "誘惑",
      "名声",
      "最も美しい人"
    ],
    "description": "秋の深まりとともに枝いっぱいに真っ赤な小粒の実を鈴なりにつける愛らしい木。「最も美しい人」「誘惑」という、人を惹きつけてやまない魅力があります。",
    "category": "果樹",
    "svgType": "apple",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fee2e2",
    "bgGradient": "from-red-500/15 via-rose-400/10 to-emerald-400/10",
    "rarity": "Rare"
  },
  "11-21": {
    "id": "11-21",
    "name": "ハナキリン（花麒麟）",
    "reading": "はなきりん",
    "scientificName": "Euphorbia milii",
    "month": 11,
    "day": 21,
    "meanings": [
      "自立",
      "逆境に耐える",
      "冷たくしないで"
    ],
    "description": "鋭い棘のある茎から、小鳥のくちばしのような鮮やかな赤い花を健気に覗かせる多肉植物。「自立」「逆境に耐える」強さと、「冷たくしないで」という愛らしい甘えを秘めます。",
    "category": "多肉植物",
    "svgType": "cactus",
    "flowerColor": "#ef4444",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-rose-500/15 via-red-400/10 to-amber-500/10",
    "rarity": "Rare"
  },
  "12-10": {
    "id": "12-10",
    "name": "ツバキ（椿）",
    "reading": "つばき",
    "scientificName": "Camellia japonica",
    "month": 12,
    "day": 10,
    "meanings": [
      "控えめな優しさ",
      "誇り",
      "美徳"
    ],
    "description": "冬の寒さの中で深い緑の艶やかな葉とともに、気品ある赤い花を咲かせる日本の冬の華。「控えめな優しさ」「誇り」という、凛とした佇まいの美徳を讃えます。",
    "category": "花木",
    "svgType": "camellia",
    "flowerColor": "#dc2626",
    "secondaryColor": "#fee2e2",
    "bgGradient": "from-red-600/15 via-rose-500/10 to-emerald-600/15",
    "rarity": "Rare"
  }
};

export const GACHA_SPECIAL_FLOWERS: FlowerData[] = [
  {
    "id": "gacha-silene-gallica",
    "name": "シロバナマンテマ（白花マンテマ）",
    "reading": "しろばなまんてま",
    "scientificName": "Silene gallica",
    "month": 0,
    "day": 0,
    "meanings": [
      "慎み深さ",
      "気品",
      "恋の予感",
      "偽りの愛"
    ],
    "description": "ヨーロッパ原産のナデシコ科の越年草。縦縞模様の入ったぷっくりと膨らむ萼筒（がくとう）の先から、清楚で愛らしい純白の5弁花を咲かせます。砂地や海岸、野原にひっそりと佇む野の宝石です。",
    "category": "野草・ナデシコ科",
    "svgType": "silene",
    "flowerColor": "#f8fafc",
    "secondaryColor": "#cbd5e1",
    "bgGradient": "from-emerald-400/15 via-teal-200/10 to-slate-400/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定",
    "triviaList": [
      "ぷっくりと膨らんだ萼（がく）に赤褐色の筋が10本縦に走り、ユニークで可愛らしい提灯のような形をしています。",
      "花弁の中央に赤紫色の斑点が入るものは「マンテマ」、斑点がなく純白の花を咲かせるものが「シロバナマンテマ」と呼ばれます。",
      "江戸時代末期に日本へ渡来し、今では各地の海辺や野原に自然に咲き誇る初夏の風物詩となっています。"
    ]
  },
  {
    "id": "gacha-purslane",
    "name": "スベリヒユ（滑莧・ヒョウ）",
    "reading": "すべりひゆ",
    "scientificName": "Portulaca oleracea",
    "month": 0,
    "day": 0,
    "meanings": [
      "いつも元気",
      "暴れん坊",
      "無邪気",
      "生命力"
    ],
    "description": "炎天下のアスファルトの隙間でも元気に黄色い小花を咲かせる驚異の野草。オメガ3脂肪酸が植物界で最も豊富に含まれるスーパーフードとしても知られます。",
    "category": "野草・多肉植物",
    "svgType": "purslane",
    "flowerColor": "#facc15",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-yellow-400/20 via-amber-200/15 to-emerald-300/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-toadflax",
    "name": "マツバウンラン（松葉海蘭）",
    "reading": "まつばうんらん",
    "scientificName": "Nuttallanthus canadensis",
    "month": 0,
    "day": 0,
    "meanings": [
      "喜び",
      "輝き",
      "控えめな美徳",
      "可憐"
    ],
    "description": "松葉のような細い葉の間から、淡い青紫色の愛らしい小花をスッと風に揺らして咲かせる春の野草。群生するとまるで青い陽炎のように幻想的です。",
    "category": "野草・オオバコ科",
    "svgType": "toadflax",
    "flowerColor": "#a78bfa",
    "secondaryColor": "#c4b5fd",
    "bgGradient": "from-violet-400/20 via-purple-200/15 to-teal-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-peanut",
    "name": "ピーナッツ（落花生・南京豆）",
    "reading": "ぴーなっつ",
    "scientificName": "Arachis hypogaea",
    "month": 0,
    "day": 0,
    "meanings": [
      "仲良し",
      "素朴な真心",
      "実り",
      "親愛"
    ],
    "description": "黄色い可憐な花が咲き終わったあと、花柄が土の中に潜り込んで地下で実をつける不思議なマメ科植物。「花が落ちて実が生まれる」から落花生と名付けられました。",
    "category": "豆類・作物",
    "svgType": "peanut",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#ca8a04",
    "bgGradient": "from-amber-400/20 via-yellow-200/15 to-orange-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-buntan",
    "name": "文旦（ブンタン・土佐文旦・ポメロ）",
    "reading": "ぶんたん",
    "scientificName": "Citrus maxima",
    "month": 0,
    "day": 0,
    "meanings": [
      "純潔",
      "愛らしさ",
      "豊かな実り",
      "幸福の香り"
    ],
    "description": "柑橘類の女王！純白の肉厚な甘美な花を咲かせ、太陽の恵みを凝縮した巨大で芳醇な果実を実らせます。爽やかで品のある高貴な香りが特徴です。",
    "category": "果樹・柑橘類",
    "svgType": "pomelo",
    "flowerColor": "#ffffff",
    "secondaryColor": "#facc15",
    "bgGradient": "from-yellow-300/20 via-lime-200/15 to-amber-200/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-marimo",
    "name": "まりも（毬藻・阿寒湖の奇跡）",
    "reading": "まりも",
    "scientificName": "Aegagropila linnaei",
    "month": 0,
    "day": 0,
    "meanings": [
      "希望",
      "不老不死",
      "愛の奇跡",
      "純粋な祈り"
    ],
    "description": "北海道阿寒湖の澄んだ湖底で、湖波に揺られながらコロコロと球状に成長する国の特別天然記念物。愛し合うアイヌの恋人たちの化身とも伝えられます。",
    "category": "藻類・奇跡の緑",
    "svgType": "marimo",
    "flowerColor": "#15803d",
    "secondaryColor": "#22c55e",
    "bgGradient": "from-emerald-500/20 via-teal-300/15 to-cyan-300/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-banana",
    "name": "バナナ（甘蕉・バナナの花と実）",
    "reading": "ばなな",
    "scientificName": "Musa acuminata",
    "month": 0,
    "day": 0,
    "meanings": [
      "風格",
      "奥深い愛",
      "情熱",
      "健康"
    ],
    "description": "巨大な赤紫色の苞葉の中から房状にぶら下がる黄金のバナナ。木のように見えますが実は世界最大の草本植物！世界中で最も親しまれる恵みのフルーツです。",
    "category": "大型熱帯草本",
    "svgType": "banana",
    "flowerColor": "#eab308",
    "secondaryColor": "#701a75",
    "bgGradient": "from-yellow-400/20 via-amber-300/15 to-rose-300/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-kamitsuremodoki",
    "name": "カミツレモドキ（春紫菀・犬カモミール）",
    "reading": "かみつれもどき",
    "scientificName": "Anthemis cotula",
    "month": 0,
    "day": 0,
    "meanings": [
      "逆境に負けない",
      "情熱",
      "清楚"
    ],
    "description": "カモミール（カミツレ）にそっくりな純白の花びらと鮮やかな黄色の花芯を持つ愛らしい野草。過酷な荒地でもたくましく可憐な花を咲かせます。",
    "category": "野草・キク科",
    "svgType": "mayweed",
    "flowerColor": "#ffffff",
    "secondaryColor": "#facc15",
    "bgGradient": "from-amber-200/20 via-yellow-100/15 to-emerald-200/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-nutmeg",
    "name": "ナツメグ（肉荳蔲）",
    "reading": "なつめぐ",
    "scientificName": "Myristica fragrans",
    "month": 0,
    "day": 0,
    "meanings": [
      "神秘",
      "芳香",
      "至福",
      "夢想"
    ],
    "description": "モルッカ諸島原産の高貴な香辛料樹。黄色い果実が熟して弾けると、真紅のレースのような「メース」に包まれた漆黒の種子が現れる神秘の植物です。",
    "category": "香辛料・熱帯高木",
    "svgType": "nutmeg",
    "flowerColor": "#dc2626",
    "secondaryColor": "#f59e0b",
    "bgGradient": "from-amber-500/20 via-orange-300/15 to-red-400/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-venus-flytrap",
    "name": "ハエトリソウ（蠅捕草）",
    "reading": "はえとりそう",
    "scientificName": "Dionaea muscipula",
    "month": 0,
    "day": 0,
    "meanings": [
      "魔性の愛",
      "誘惑",
      "真実"
    ],
    "description": "二枚貝のようなトゲのある捕虫葉が、獲物が触れると0.5秒で瞬時に閉じる世界一有名な食虫植物！その驚異のメカニズムはダーウィンも大絶賛しました。",
    "category": "珍奇植物・食虫植物",
    "svgType": "venus_flytrap",
    "flowerColor": "#ef4444",
    "secondaryColor": "#22c55e",
    "bgGradient": "from-emerald-500/20 via-rose-300/15 to-teal-400/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-paprika",
    "name": "パプリカ（大甘唐辛子）",
    "reading": "ぱぷりか",
    "scientificName": "Capsicum annuum grossum",
    "month": 0,
    "day": 0,
    "meanings": [
      "同情",
      "君を忘れない",
      "実りある人生"
    ],
    "description": "鮮やかな赤・黄・オレンジにつやめく肉厚で甘みたっぷりの西洋野菜。ビタミンCが極めて豊富で、食卓と庭を華やかに彩ります。",
    "category": "野菜・果菜類",
    "svgType": "paprika",
    "flowerColor": "#ef4444",
    "secondaryColor": "#facc15",
    "bgGradient": "from-red-500/20 via-yellow-400/15 to-orange-400/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-mushroom",
    "name": "キノコ（茸・ベニテングタケ風）",
    "reading": "きのこ",
    "scientificName": "Fungi",
    "month": 0,
    "day": 0,
    "meanings": [
      "不思議",
      "自然の恵み",
      "再生",
      "妖精の宿る場所"
    ],
    "description": "深い森の樹々を繋ぐ菌糸ネットワークの結晶。まるでおとぎ話の世界から飛び出してきたような愛らしいフォルムで、生態系の命を循環させる神秘の存在です。",
    "category": "菌類・森の恵み",
    "svgType": "mushroom",
    "flowerColor": "#dc2626",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-red-500/20 via-amber-200/15 to-emerald-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-bamboo-shoot",
    "name": "タケノコ（筍）",
    "reading": "たけのこ",
    "scientificName": "Bamboo shoot",
    "month": 0,
    "day": 0,
    "meanings": [
      "生命力",
      "節操",
      "成長",
      "不屈"
    ],
    "description": "春の土中からぐんぐん天を目指して伸びる竹の若芽。一晩で数十センチも伸びる圧倒的な生命力と成長力は、古来より立身出世と健康の象徴です。",
    "category": "野菜・春の味覚",
    "svgType": "bamboo_shoot",
    "flowerColor": "#92400e",
    "secondaryColor": "#84cc16",
    "bgGradient": "from-amber-400/20 via-lime-300/15 to-emerald-400/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-onion",
    "name": "タマネギ（玉葱）",
    "reading": "たまねぎ",
    "scientificName": "Allium cepa",
    "month": 0,
    "day": 0,
    "meanings": [
      "不死",
      "純粋",
      "真実",
      "深い慈愛"
    ],
    "description": "幾重にも包み重なる琥珀色のつややかな鱗茎。世界中の料理の味のベースとなり、古くはピラミッド建設の労働者たちにもスタミナ源として重宝されました。",
    "category": "野菜・根菜類",
    "svgType": "onion",
    "flowerColor": "#d97706",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-500/20 via-yellow-300/15 to-orange-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-green-onion",
    "name": "ネギ（葱・長ネギ）",
    "reading": "ねぎ",
    "scientificName": "Allium fistulosum",
    "month": 0,
    "day": 0,
    "meanings": [
      "微笑み",
      "愛嬌",
      "健康",
      "邪気払い"
    ],
    "description": "白と緑のコントラストが美しい日本の伝統和野菜。丸い愛らしいネギ坊主の花を咲かせ、古くから風邪を吹き飛ばす滋養と厄除けの象徴とされてきました。",
    "category": "野菜・和香味",
    "svgType": "green_onion",
    "flowerColor": "#16a34a",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-emerald-500/20 via-teal-200/15 to-green-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-taro",
    "name": "サトイモ（里芋）",
    "reading": "さといも",
    "scientificName": "Colocasia esculenta",
    "month": 0,
    "day": 0,
    "meanings": [
      "繁栄",
      "親孝行",
      "子孫繁栄",
      "愛嬌"
    ],
    "description": "雨粒をキラキラ弾く大きな蓮のような葉と、親芋の周りにたくさんの子芋・孫芋が実る姿から、子孫繁栄と家族円満の象徴としてお月見やお祝い事に欠かせません。",
    "category": "野菜・伝統芋",
    "svgType": "taro",
    "flowerColor": "#78350f",
    "secondaryColor": "#15803d",
    "bgGradient": "from-emerald-600/20 via-amber-300/15 to-teal-400/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-rush-grass",
    "name": "イグサ（藺草・畳草）",
    "reading": "いぐさ",
    "scientificName": "Juncus decipiens",
    "month": 0,
    "day": 0,
    "meanings": [
      "従順",
      "清らかな心",
      "落ち着き",
      "やすらぎ"
    ],
    "description": "和室の畳の原料として日本の暮らしを支えてきた湿地植物。森林浴と同じフィトンチッドの芳香を放ち、心を芯から落ち着かせてくれます。",
    "category": "工芸作物・水辺植物",
    "svgType": "rush_grass",
    "flowerColor": "#15803d",
    "secondaryColor": "#a7f3d0",
    "bgGradient": "from-emerald-600/20 via-green-300/15 to-teal-400/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-foxtail-millet",
    "name": "アワ（粟・五穀）",
    "reading": "あわ",
    "scientificName": "Setaria italica",
    "month": 0,
    "day": 0,
    "meanings": [
      "結束",
      "豊穣",
      "救済",
      "生命の糧"
    ],
    "description": "日本最古の主食の一つである五穀の筆頭。エノコログサを原種とし、黄金色に重そうにたわわに実る穂先は豊かな実りと繁栄のシンボルです。",
    "category": "穀物・古代五穀",
    "svgType": "foxtail_millet",
    "flowerColor": "#eab308",
    "secondaryColor": "#fef08a",
    "bgGradient": "from-amber-400/20 via-yellow-200/15 to-emerald-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-rice",
    "name": "コメ（稲・米・瑞穂）",
    "reading": "こめ",
    "scientificName": "Oryza sativa",
    "month": 0,
    "day": 0,
    "meanings": [
      "神聖",
      "実り",
      "豊かな実り",
      "感謝"
    ],
    "description": "「実るほど頭を垂れる稲穂かな」。黄金色に波打つ日本の秋の原風景。一粒の籾から千粒の実をつける無限の豊かさと、八十八の手間暇をかけた命の結晶です。",
    "category": "主食・穀物",
    "svgType": "rice",
    "flowerColor": "#facc15",
    "secondaryColor": "#ca8a04",
    "bgGradient": "from-yellow-400/20 via-amber-300/15 to-emerald-400/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-wheat",
    "name": "ムギ（麦・大麦・小麦）",
    "reading": "むぎ",
    "scientificName": "Triticum",
    "month": 0,
    "day": 0,
    "meanings": [
      "富",
      "繁栄",
      "希望",
      "協調"
    ],
    "description": "まっすぐに天へ伸びる長いヒゲ（禾）を持つ黄金の麦穂。「麦踏み」に耐えて冬を越す強靭な生命力を持ち、パンやビールなど世界中の食文化を支えています。",
    "category": "穀物・世界四大主穀",
    "svgType": "wheat",
    "flowerColor": "#f59e0b",
    "secondaryColor": "#fef3c7",
    "bgGradient": "from-amber-500/20 via-yellow-300/15 to-orange-200/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-bur-reed",
    "name": "ミクリ（三稜草・実栗）",
    "reading": "みくり",
    "scientificName": "Sparganium erectum",
    "month": 0,
    "day": 0,
    "meanings": [
      "秘めた想い",
      "救い",
      "神秘"
    ],
    "description": "水辺に佇み、小さな栗のイガのような緑のトゲトゲ球状花をつける希少な抽水植物。水質を浄化し、水生昆虫たちのオアシスとなる尊い自然の宝物です。",
    "category": "水生植物・絶滅危惧種",
    "svgType": "bur_reed",
    "flowerColor": "#65a30d",
    "secondaryColor": "#bef264",
    "bgGradient": "from-emerald-500/20 via-teal-300/15 to-cyan-400/10",
    "isGachaSpecial": true,
    "rarity": "UR ガチャ限定"
  },
  {
    "id": "gacha-adzuki",
    "name": "アズキ（小豆）",
    "reading": "あずき",
    "scientificName": "Vigna angularis",
    "month": 0,
    "day": 0,
    "meanings": [
      "希望",
      "魔除け",
      "幸運",
      "健康"
    ],
    "description": "黄色い可憐な蝶形の花を咲かせ、深紅の粒を実らせる日本の伝統豆。その赤色は邪気を祓う太陽の力と信じられ、赤飯や和菓子として祝いの席を彩ります。",
    "category": "豆類・伝統和作物",
    "svgType": "adzuki",
    "flowerColor": "#991b1b",
    "secondaryColor": "#facc15",
    "bgGradient": "from-rose-600/20 via-red-300/15 to-amber-200/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
    "id": "gacha-sesame",
    "name": "ゴマ（胡麻）",
    "reading": "ごま",
    "scientificName": "Sesamum indicum",
    "month": 0,
    "day": 0,
    "meanings": [
      "たくましさ",
      "救いの主",
      "不老長寿"
    ],
    "description": "「開けゴマ！」の呪文で有名な世界最古の油料植物。淡いピンクの釣り鐘状の愛らしい花を咲かせ、栄養満点のゴマ粒が詰まった鞘を実らせます。",
    "category": "油料作物・古香",
    "svgType": "sesame",
    "flowerColor": "#f472b6",
    "secondaryColor": "#ffffff",
    "bgGradient": "from-pink-400/20 via-amber-200/15 to-teal-300/10",
    "isGachaSpecial": true,
    "rarity": "SSR ガチャ限定"
  },
  {
  "id": "gacha-matatabi",
  "name": "またたび（木天蓼）",
  "reading": "またたび",
  "scientificName": "Actinidia polygama",
  "month": 0,
  "day": 0,
  "meanings": [
    "夢見る心地",
    "陶酔",
    "好色",
    "旅の元気"
  ],
  "description": "「猫にまたたび」で世界的に有名なつる植物！初夏に葉の先端が真っ白に変化して花のように虫を誘います。疲れた旅人がその実を食べて「また旅」ができるほど元気になったのが名前の由来！",
  "category": "つる性木本・薬用植物",
  "svgType": "wildflower",
  "flowerColor": "#f8fafc",
  "secondaryColor": "#86efac",
  "bgGradient": "from-emerald-500/20 via-lime-300/15 to-teal-400/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-usagigoke",
  "name": "ウサギゴケ（兎苔）",
  "reading": "うさぎごけ",
  "scientificName": "Utricularia sandersonii",
  "month": 0,
  "day": 0,
  "meanings": [
    "夢みる夢子",
    "愛らしい",
    "夢想"
  ],
  "description": "南アフリカ原産のタヌキモ科の湿性植物。まるで白い子ウサギがピョンピョン飛び跳ねているような信じられないほど愛らしい花を咲かせますが、実は地下でプランクトンを捕食する食虫植物！ギャップ萌え満点です。",
  "category": "珍奇植物・食虫植物",
  "svgType": "wildflower",
  "flowerColor": "#f8fafc",
  "secondaryColor": "#fbcfe8",
  "bgGradient": "from-pink-300/20 via-indigo-100/15 to-emerald-200/10",
  "isGachaSpecial": true,
  "rarity": "UR ガチャ限定"
},
  {
  "id": "gacha-kirara",
  "name": "キララ（オステオスペルマム・キララ）",
  "reading": "きらら",
  "scientificName": "Osteospermum Kirara",
  "month": 0,
  "day": 0,
  "meanings": [
    "輝く未来",
    "心も体も健康",
    "無邪気"
  ],
  "description": "花びらの表だけでなく「裏側まで鮮やかな黄色」に輝く奇跡のオステオスペルマム！毎日元気に花を開き、見る人すべてに太陽のような笑顔と「輝く未来」を届けます。",
  "category": "園芸花・キク科",
  "svgType": "daisy",
  "flowerColor": "#eab308",
  "secondaryColor": "#fef9c3",
  "bgGradient": "from-yellow-400/20 via-amber-300/15 to-orange-400/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-nagi",
  "name": "ナギ（梛）",
  "reading": "なぎ",
  "scientificName": "Nageia nagi",
  "month": 0,
  "day": 0,
  "meanings": [
    "苦難を乗り越える",
    "良縁",
    "勇気",
    "縁結び"
  ],
  "description": "熊野三山の御神木として名高いマキ科の常緑高木。葉の縦の繊維が非常に強く「手で引っ張ってもちぎれない」ことから、夫婦円満・良縁・災難除けの最強のお守り植物！",
  "category": "御神木・縁起樹",
  "svgType": "camellia",
  "flowerColor": "#047857",
  "secondaryColor": "#a7f3d0",
  "bgGradient": "from-emerald-700/20 via-teal-500/15 to-cyan-500/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-warabi",
  "name": "わらび（蕨）",
  "reading": "わらび",
  "scientificName": "Pteridium aquilinum",
  "month": 0,
  "day": 0,
  "meanings": [
    "不変の愛",
    "真面目",
    "素朴な心"
  ],
  "description": "春の里山に芽吹く愛らしい渦巻き頭の山菜。地下深くに強靭な根を張り巡らせることから「不変の愛」の花言葉を持ち、本わらび餅の原料としても親しまれます。",
  "category": "シダ・春の山菜",
  "svgType": "fern",
  "flowerColor": "#15803d",
  "secondaryColor": "#dcfce7",
  "bgGradient": "from-green-600/20 via-emerald-400/15 to-lime-500/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-vanilla",
  "name": "バニラ（Vanilla）",
  "reading": "ばにら",
  "scientificName": "Vanilla planifolia",
  "month": 0,
  "day": 0,
  "meanings": [
    "永久不滅",
    "愛らしさ",
    "甘い誘惑"
  ],
  "description": "熱帯雨林の樹木に這い登るつる性のラン！朝咲いて半日で萎む淡黄緑色の花を咲かせ、熟した鞘（さや）を発酵させることで世界中を虜にする魅惑のバニラ香が生まれます。",
  "category": "つる性ラン・香料植物",
  "svgType": "orchid",
  "flowerColor": "#fef08a",
  "secondaryColor": "#78350f",
  "bgGradient": "from-amber-300/20 via-yellow-100/15 to-orange-400/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-kyara",
  "name": "伽羅（キャラ・キャラボク）",
  "reading": "きゃら",
  "scientificName": "Taxus cuspidata var. nana",
  "month": 0,
  "day": 0,
  "meanings": [
    "高貴",
    "静寂",
    "気品",
    "至高"
  ],
  "description": "香道の最高峰「伽羅」の名を冠する常緑低木。日本屈指の気品あふれる雅やかな芳香と、風雪に耐えて育つ風格から「高貴」「静寂」を讃えられます。",
  "category": "香木・常緑低木",
  "svgType": "cedar",
  "flowerColor": "#065f46",
  "secondaryColor": "#ef4444",
  "bgGradient": "from-emerald-900/20 via-teal-700/15 to-amber-600/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-ouchi",
  "name": "棟（楝・オウチ / センダン）",
  "reading": "おうち",
  "scientificName": "Melia azedarach",
  "month": 0,
  "day": 0,
  "meanings": [
    "意見",
    "物思い",
    "警戒",
    "追憶"
  ],
  "description": "万葉集や枕草子にも登場する古名「楝（おうち）」。初夏に梢一面に淡い紫色の星形の小花を雲のように咲かせ、清雅な芳香で辺りを包み込みます。",
  "category": "古典花木",
  "svgType": "wildflower",
  "flowerColor": "#a855f7",
  "secondaryColor": "#f3e8ff",
  "bgGradient": "from-purple-600/20 via-violet-300/15 to-indigo-500/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-kusunoki",
  "name": "クスノキ（樟・楠）",
  "reading": "くすのき",
  "scientificName": "Cinnamomum camphora",
  "month": 0,
  "day": 0,
  "meanings": [
    "芳香",
    "実直",
    "忍耐",
    "神聖"
  ],
  "description": "神社の大木・御神木として千年以上生きる日本の巨木。木全体から清々しい樟脳（カンフル）の芳香を放ち、邪気を払い人々を穏やかに守護します！",
  "category": "巨木・御神木",
  "svgType": "cedar",
  "flowerColor": "#166534",
  "secondaryColor": "#6ee7b7",
  "bgGradient": "from-emerald-800/20 via-green-600/15 to-teal-500/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-inuenju",
  "name": "イヌエンジュ（犬槐）",
  "reading": "いぬえんじゅ",
  "scientificName": "Maackia amurensis",
  "month": 0,
  "day": 0,
  "meanings": [
    "幸福",
    "上品",
    "慕情",
    "魔除け"
  ],
  "description": "北海道や北国の山野に自生するマメ科の高木。アイヌ文化では「チクペニ（神の木）」と呼ばれ、魔除けや長寿の霊木として信仰されてきた神聖なる銘木です！",
  "category": "高木・神聖樹",
  "svgType": "cherry_blossom",
  "flowerColor": "#f8fafc",
  "secondaryColor": "#fde047",
  "bgGradient": "from-amber-200/20 via-emerald-100/15 to-slate-200/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
  "id": "gacha-aokazura",
  "name": "アオカズラ（青葛）",
  "reading": "あおかずら",
  "scientificName": "Sabia japonica",
  "month": 0,
  "day": 0,
  "meanings": [
    "絆",
    "結びつき",
    "強靭な生命力"
  ],
  "description": "山野の木々にしっかりと絡みつき、緑の葉を茂らせるつる性植物。強靭なしなやかさを持ち、昔から結束やカゴ編みにも重宝された「絆」と「結びつき」の象徴！",
  "category": "つる性木本・珍奇植物",
  "svgType": "ivy",
  "flowerColor": "#15803d",
  "secondaryColor": "#86efac",
  "bgGradient": "from-emerald-700/20 via-teal-500/15 to-green-600/10",
  "isGachaSpecial": true,
  "rarity": "SSR ガチャ限定"
},
  {
    "id": "gacha-rafflesia",
    "name": "ラフレシア（世界最大の花）",
    "reading": "らふれしあ",
    "scientificName": "Rafflesia arnoldii",
    "month": 0,
    "day": 0,
    "meanings": [
      "夢想",
      "壮大",
      "人喰い花？（※食べません）"
    ],
    "description": "直径1メートル近くにもなる世界最大の花！葉も茎も根もなく、他のつる植物に寄生して数年に一度だけ巨大な姿を現します。強烈な匂いでハエを引き寄せる奇花ですが、花言葉は意外にも「夢想」とロマンチック！",
    "category": "ネタ枠・珍奇植物",
    "svgType": "rafflesia",
    "flowerColor": "#b91c1c",
    "secondaryColor": "#fca5a5",
    "bgGradient": "from-red-600/20 via-orange-500/15 to-emerald-600/10",
    "isGachaSpecial": true,
    "rarity": "Legendary ネタ枠"
  },
  {
    "id": "gacha-pitcher-plant",
    "name": "ウツボカズラ（靫葛）",
    "reading": "うつぼかずら",
    "scientificName": "Nepenthes",
    "month": 0,
    "day": 0,
    "meanings": [
      "甘い罠",
      "からみつく愛",
      "危険な魅力"
    ],
    "description": "壺のような補虫袋をぶら下げ、甘い蜜の香りで虫を誘い込む有名食虫植物！その魔性の生態から生まれた花言葉は「甘い罠」。恋の罠にご用心！？",
    "category": "ネタ枠・珍奇植物",
    "svgType": "pitcher_plant",
    "flowerColor": "#15803d",
    "secondaryColor": "#ef4444",
    "bgGradient": "from-emerald-600/20 via-lime-500/15 to-red-500/10",
    "isGachaSpecial": true,
    "rarity": "Legendary ネタ枠"
  },
  {
    "id": "gacha-titan-arum",
    "name": "ショクダイオオコンニャク（別名死体花）",
    "reading": "しょくだいおおこんにゃく",
    "scientificName": "Amorphophallus titanum",
    "month": 0,
    "day": 0,
    "meanings": [
      "謎",
      "神秘",
      "圧倒的存在感"
    ],
    "description": "高さ3メートルを超え、咲くのは数年に一度、しかもたった2日間だけという地球上で最も異様な巨大花！圧倒的な迫力と生命の神秘を全身で放ちます。",
    "category": "ネタ枠・珍奇植物",
    "svgType": "titan_arum",
    "flowerColor": "#701a75",
    "secondaryColor": "#84cc16",
    "bgGradient": "from-purple-900/25 via-fuchsia-800/15 to-emerald-500/10",
    "isGachaSpecial": true,
    "rarity": "Legendary ネタ枠"
  },
  {
    "id": "gacha-giant-water-lily",
    "name": "オオオニバス（大鬼蓮）",
    "reading": "おおおにばす",
    "scientificName": "Victoria amazonica",
    "month": 0,
    "day": 0,
    "meanings": [
      "神秘的",
      "あなたを見守る",
      "大きな器"
    ],
    "description": "子供が乗っても沈まない直径2メートル以上の巨大な浮葉を広げる世界最大の水生植物！夜にだけ純白からピンクへと色を変えながら甘い香りを放って咲きます。",
    "category": "ネタ枠・珍奇植物",
    "svgType": "water_lily",
    "flowerColor": "#059669",
    "secondaryColor": "#f43f5e",
    "bgGradient": "from-teal-600/20 via-emerald-500/15 to-cyan-500/10",
    "isGachaSpecial": true,
    "rarity": "Legendary ネタ枠"
  },
  {
    "id": "gacha-cactus",
    "name": "キンシャチ（金鯱サボテン）",
    "reading": "きんしゃち",
    "scientificName": "Echinocactus grusonii",
    "month": 0,
    "day": 0,
    "meanings": [
      "枯れない愛",
      "燃える心",
      "温かい情熱"
    ],
    "description": "サボテンの王様！黄金の鋭いトゲに覆われ、砂漠の過酷な熱砂の中でも数十年間水を蓄え続けるド迫力の球体サボテン。内側に秘めた情熱は誰よりも熱い！",
    "category": "ネタ枠・珍奇植物",
    "svgType": "cactus",
    "flowerColor": "#eab308",
    "secondaryColor": "#15803d",
    "bgGradient": "from-amber-400/20 via-yellow-300/15 to-emerald-600/10",
    "isGachaSpecial": true,
    "rarity": "Legendary ネタ枠"
  }
];

const MONTHLY_BASE_FLOWERS: Record<number, { name: string; meanings: string[]; description: string; category: string; svgType: string; flowerColor: string }> = {
  1: { name: 'スイセン', meanings: ['自己愛', '神秘'], description: '清らかな冬の気配を運ぶ花', category: '球根', svgType: 'daffodil', flowerColor: '#fef08a' },
  2: { name: 'ウメ', meanings: ['高潔', '忠実'], description: '春の先駆けを告げる気品ある花', category: '花木', svgType: 'plum', flowerColor: '#f43f5e' },
  3: { name: 'サクラ', meanings: ['精神の美', '優美'], description: '日本を象徴する春の爛漫', category: '花木', svgType: 'sakura', flowerColor: '#fbcfe8' },
  4: { name: 'チューリップ', meanings: ['思いやり', '博愛'], description: '色とりどりに春を祝う', category: '球根', svgType: 'tulip', flowerColor: '#f43f5e' },
  5: { name: 'カーネーション', meanings: ['母への愛', '純粋な愛'], description: '感謝と敬意を伝える母の日の花', category: '花', svgType: 'carnation', flowerColor: '#e11d48' },
  6: { name: 'アジサイ', meanings: ['移り気', '団結'], description: '雨露に輝く七変化の色彩', category: '花木', svgType: 'hydrangea', flowerColor: '#38bdf8' },
  7: { name: 'アサガオ', meanings: ['固い絆', '愛情'], description: '夏の朝を爽快に彩る', category: 'つる植物', svgType: 'morning_glory', flowerColor: '#6366f1' },
  8: { name: 'ヒマワリ', meanings: ['憧れ', '情熱'], description: '太陽を真っ直ぐに見上げる夏の主役', category: '花', svgType: 'sunflower', flowerColor: '#eab308' },
  9: { name: 'リコリス', meanings: ['情熱', '再会'], description: '秋分の頃に真紅の大輪を開く', category: '球根', svgType: 'spider_lily', flowerColor: '#dc2626' },
  10: { name: 'コスモス', meanings: ['乙女の真心', '調和'], description: '秋風に揺れる優美な桜の花', category: '花', svgType: 'cosmos', flowerColor: '#ec4899' },
  11: { name: 'シクラメン', meanings: ['内気', 'はにかみ'], description: '冬の訪れを告げる炎の冠', category: '球根', svgType: 'cyclamen', flowerColor: '#be185d' },
  12: { name: 'ポインセチア', meanings: ['祝福', '聖夜'], description: 'クリスマスを鮮やかに飾る祝福の花', category: '低木', svgType: 'poinsettia', flowerColor: '#dc2626' },
};

export function getFlowerByDate(month: number, day: number): FlowerData {
  const key = `${month}-${day}`;
  if (SPECIAL_FLOWERS[key]) {
    return SPECIAL_FLOWERS[key];
  }
  const base = MONTHLY_BASE_FLOWERS[month] || MONTHLY_BASE_FLOWERS[1];
  return {
    id: `date-${month}-${day}`,
    name: base.name,
    reading: base.name,
    month,
    day,
    meanings: base.meanings,
    description: base.description,
    category: base.category,
    svgType: base.svgType,
    flowerColor: base.flowerColor,
    secondaryColor: '#ffffff',
    bgGradient: 'from-emerald-500/15 via-teal-400/10 to-green-600/15',
    rarity: 'Normal',
  };
}

export function getAllGachaPool(): FlowerData[] {
  const pool: FlowerData[] = [...Object.values(SPECIAL_FLOWERS)];
  pool.push(...GACHA_SPECIAL_FLOWERS);

  // 補足植物（subFlowers）も独立したガチャ排出アイテムとして追加！
  Object.values(SPECIAL_FLOWERS).forEach((f) => {
    if (f.subFlowers && f.subFlowers.length > 0) {
      f.subFlowers.forEach((sub, idx) => {
        let subSvg = f.svgType;
        if (sub.name.includes('ナツメ')) subSvg = 'jujube';
        else if (sub.name.includes('ゲンペイコギク')) subSvg = 'erigeron';
        else if (sub.name.includes('サンショウ')) subSvg = 'sansho';
        else if (sub.name.includes('ハッカ')) subSvg = 'hakka';
        else if (sub.name.includes('シソ')) subSvg = 'shiso';
        else if (sub.name.includes('笹') || sub.name.includes('ササ')) subSvg = 'bamboo_grass';
        else if (sub.name.includes('スミレ')) subSvg = 'violet';
        else if (sub.name.includes('センリョウ')) subSvg = 'senryo';
        else if (sub.name.includes('クジャクアスター')) subSvg = 'peacock_aster';
        else if (sub.name.includes('ビヨウヤナギ')) subSvg = 'hypericum';
        else if (sub.name.includes('ブタクサ')) subSvg = 'ragweed';
        else if (sub.name.includes('オキザリス')) subSvg = 'oxalis';
        else if (sub.name.includes('モルセラ')) subSvg = 'moluccella';
        else if (sub.name.includes('ガザニア')) subSvg = 'gazania';
        else if (sub.name.includes('エリカ')) subSvg = 'heather';
        else if (sub.name.includes('ジニア')) subSvg = 'zinnia';
        else if (sub.name.includes('リコリス')) subSvg = 'spider_lily';
        else if (sub.name.includes('えんどう豆') || sub.name.includes('エンドウ')) subSvg = 'sweet_pea';
        else if (sub.name.includes('ハツユキソウ')) subSvg = 'snowdrop';
        else if (sub.name.includes('ストロベリーキャンドル')) subSvg = 'clover';
        else if (sub.name.includes('イブキジャコウソウ')) subSvg = 'ibuki_thyme';
        else if (sub.name.includes('パキスタキス')) subSvg = 'pachystachys';
        else if (sub.name.includes('ジャガイモ')) subSvg = 'potato';
        else if (sub.name.includes('ハナニラ')) subSvg = 'ipheion';
        else if (sub.name.includes('野良にんじん') || sub.name.includes('ノラニンジン')) subSvg = 'wild_carrot';
        else if (sub.name.includes('マンテマ')) subSvg = 'silene';

        let subColor = f.flowerColor;
        let subBg = f.bgGradient || 'from-emerald-500/15 via-teal-400/10 to-green-600/15';

        if (sub.name.includes('パキスタキス')) {
          subColor = '#facc15';
          subBg = 'from-amber-400/20 via-yellow-300/10 to-emerald-500/10';
        } else if (sub.name.includes('ジャガイモ')) {
          subColor = '#818cf8';
          subBg = 'from-indigo-400/15 via-purple-300/10 to-amber-500/10';
        } else if (sub.name.includes('ハナニラ')) {
          subColor = '#38bdf8';
          subBg = 'from-sky-400/15 via-blue-200/10 to-teal-500/10';
        } else if (sub.name.includes('野良にんじん') || sub.name.includes('ノラニンジン')) {
          subColor = '#ffffff';
          subBg = 'from-slate-300/20 via-emerald-200/10 to-teal-600/10';
        }

        pool.push({
          id: `sub-${f.id}-${idx}`,
          name: sub.name,
          reading: sub.name.replace(/（.*?）|\(.*?\)/g, ''),
          month: f.month,
          day: f.day,
          meanings: sub.meanings || f.meanings,
          description: `${f.month}月${f.day}日のもう一つの誕生花。${sub.note ? sub.note + '。' : ''}${f.name}とともに親しまれる伝統の花言葉です。`,
          category: `${f.month}月${f.day}日 補足誕生花`,
          svgType: subSvg,
          flowerColor: subColor,
          secondaryColor: f.secondaryColor || '#ffffff',
          bgGradient: subBg,
          rarity: '補足誕生花',
          isGachaSpecial: false,
        });
      });
    }
  });

  return pool;
}

export function getRandomFlower(includeGachaSpecials = true): FlowerData {
  const pool = getAllGachaPool();
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

export function getAllSpecialFlowers(): FlowerData[] {
  return [...Object.values(SPECIAL_FLOWERS), ...GACHA_SPECIAL_FLOWERS];
}
