export interface CharacterProfile {
  id: string;
  name: string;
  month: number;
  day: number;
  flowerName: string;
  mbti: string;
  socionics?: string;
  enneagram?: string;
  motif: string;
  dialogueBadge?: string;
  comment: string;
  themeColor: string;
  accentColor: string;
  imageFileName: string;
}

// 1つの日付に複数キャラクター（双子など）が存在できる構造
export const CHARACTERS_MAP: Record<string, CharacterProfile[]> = {
  "9-13": [
    {
        "id": "mayuko",
        "name": "まゆこ",
        "month": 9,
        "day": 13,
        "flowerName": "カンナ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "7w6",
        "motif": "猫",
        "dialogueBadge": "のんきな情熱ダンサー",
        "themeColor": "#ea580c",
        "accentColor": "#fde047",
        "imageFileName": "mayuko.png",
        "comment": "9月13日生まれ〜！カンナの花言葉は『情熱』とか『快活』なんだって〜。へぇ〜、他人事みたいに言うけど、情熱とかよくわかんないよね。勉強はぜんぜん無理だけど、踊ってればなんとかなるっしょ！"
    }
],
  "6-24": [
    {
        "id": "yayoi",
        "name": "やよい",
        "month": 6,
        "day": 24,
        "flowerName": "さくらんぼ",
        "mbti": "ESTP",
        "socionics": "SLI",
        "enneagram": "5w6",
        "motif": "コアラ",
        "dialogueBadge": "アトリエの工芸職人",
        "themeColor": "#dc2626",
        "accentColor": "#fecaca",
        "imageFileName": "yayoi.png",
        "comment": "6月24日。さくらんぼの花言葉は『小さな恋人』……か。甘酸っぱい果実もいいが、木材としての桜や細工の手応えのほうが私は好きだ。放課後はアトリエに籠もって工芸品の削り出しをしてる。……邪魔しないなら、見ていってもいいぞ。"
    }
],
  
  "4-21": [
    {
        "id": "jiha",
        "name": "じは",
        "month": 4,
        "day": 21,
        "flowerName": "ミムラス",
        "mbti": "ENTP",
        "socionics": "ILE",
        "enneagram": "7w8",
        "motif": "猫",
        "dialogueBadge": "気まぐれ阿波猫",
        "themeColor": "#f97316",
        "accentColor": "#fef08a",
        "imageFileName": "jiha.png",
        "comment": "4月21日！うちと同じ誕生日やな！ミムラスの花言葉は『笑顔を見せて』『おしゃべり』やって！……って、ミムラスの花ってお猿の顔に見えるらしいけど、それまるで銀河のブラックホール覗き込んどるような気分にならん？急に気分変わったけん、今は外の風浴びたいわ！ほな、ついてきてもええよ？"
    }
],
  "1-4": [
    {
      "id": "hebiki",
      "name": "へびき",
      "month": 1,
      "day": 4,
      "flowerName": "フクジュソウ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "9w1",
      "motif": "蛇",
      "dialogueBadge": "のんびり平和主義",
      "themeColor": "#eab308",
      "accentColor": "#fef08a",
      "imageFileName": "hebiki.png",
      "comment": "ハイサイ〜、1月4日！僕と同じ誕生日さ〜！フクジュソウの花言葉は『永久の幸福』。あったかい日差しみたいに、のんびり心地よく笑顔でいられる素敵な一年にしようね〜。"
    }
  ],
  "1-10": [
    {
      "id": "miru",
      "name": "みる",
      "month": 1,
      "day": 10,
      "flowerName": "フリージア",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "ダルメシアン",
      "dialogueBadge": "元気いっぱいムードメーカー",
      "themeColor": "#f59e0b",
      "accentColor": "#fde047",
      "imageFileName": "miru.png",
      "comment": "わぁーい！1月10日！私とおんなじ誕生日じゃん！フリージアの『親愛の情』と『期待』ってすっごくワクワクする言葉だよね！今日はいっぱい笑って最高に盛り上がろ〜！"
    }
  ],
  "1-12": [
    {
      "id": "haruka",
      "name": "はるか",
      "month": 1,
      "day": 12,
      "flowerName": "キンセンカ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "2w3",
      "motif": "ウグイス",
      "dialogueBadge": "友達想いの春告げ鳥",
      "themeColor": "#eab308",
      "accentColor": "#fde047",
      "imageFileName": "haruka.png",
      "comment": "1月12日、私と同じお誕生日ですね！キンセンカのあたたかな黄色い花のように、大切な人たちと優しさを分かち合える素敵な一年になりますように。心からお祝いします！"
    }
  ],
  "1-14": [
    {
      "id": "kyo",
      "name": "きょう",
      "month": 1,
      "day": 14,
      "flowerName": "シュウメイギク",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w6",
      "motif": "猫",
      "dialogueBadge": "静かなる観察者",
      "themeColor": "#64748b",
      "accentColor": "#94a3b8",
      "imageFileName": "kyo.png",
      "comment": "…1月14日、俺と同じ。シュウメイギクの凛とした佇まいは結構好きだ。誰かに流されず、自分のペースで落ち着いて過ごせるといいよな。おめでとう。"
    }
  ],
  "1-15": [
    {
      "id": "yukihiko",
      "name": "ゆきひこ",
      "month": 1,
      "day": 15,
      "flowerName": "オンシジウム",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w6",
      "motif": "プードル",
      "dialogueBadge": "自由奔放プードル",
      "themeColor": "#f59e0b",
      "accentColor": "#fef08a",
      "imageFileName": "yukihiko.png",
      "comment": "おっ！1月15日！わちと同じ誕生日じゃん！オンシジウムの『一緒に踊って』って言葉、なんか楽しくてワクワクするよね！一緒にステップ踏んで楽しい日にしちゃおうぜ〜！"
    }
  ],
  "1-19": [
    {
      "id": "sei",
      "name": "せい",
      "month": 1,
      "day": 19,
      "flowerName": "マツ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w1",
      "motif": "ヤマショウビン",
      "dialogueBadge": "熱血リーダー",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "sei.png",
      "comment": "うおおおおっ！1月19日！俺と同じ誕生日じゃないかッ！！マツのように真冬の烈風にもビクともしない『勇敢』な魂で、胸を張って最高の一年に向かって突き進もうぜッ！！"
    }
  ],
  "1-20": [
    {
      "id": "maya",
      "name": "まや",
      "month": 1,
      "day": 20,
      "flowerName": "デンドロビウム",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "4w5",
      "motif": "マメルリハ",
      "dialogueBadge": "静かな愛着",
      "themeColor": "#db2777",
      "accentColor": "#f472b6",
      "imageFileName": "maya.png",
      "comment": "1月20日…私と同じ誕生日なんだね。デンドロビウムの華やかな花言葉『天性の華』。大切な思い出や好きなものをひとつひとつ大切に抱きしめて、良い一日にしてね。"
    }
  ],
  "1-21": [
    {
      "id": "koto",
      "name": "こと",
      "month": 1,
      "day": 21,
      "flowerName": "アイビー",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "6w5",
      "motif": "セキセイインコ",
      "dialogueBadge": "フォトグラファー",
      "themeColor": "#059669",
      "accentColor": "#34d399",
      "imageFileName": "koto.png",
      "comment": "お、1月21日生まれか。俺と一緒やな。ファインダー越しに見るお前の未来には間違いなくええ光が差いちゅうき。風邪ひかんようにして、ええ一年にしいや。"
    }
  ],
  "1-26": [
    {
      "id": "akatsuki",
      "name": "あかつき",
      "month": 1,
      "day": 26,
      "flowerName": "イチョウ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w4",
      "motif": "猫",
      "dialogueBadge": "不器用なピアニスト",
      "themeColor": "#d97706",
      "accentColor": "#fde68a",
      "imageFileName": "akatsuki.png",
      "comment": "…1月26日。オレと同じ日だな。イチョウの木は長い時間をかけて静かに黄金色に色づく。焦らなくていい、自分の音とペースで進めばいいんじゃないか。"
    }
  ],
  "1-29": [
    {
      "id": "yutasuke",
      "name": "ゆたすけ",
      "month": 1,
      "day": 29,
      "flowerName": "キンカン",
      "mbti": "ISFJ",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "熊",
      "dialogueBadge": "控えめな優しさ",
      "themeColor": "#ea580c",
      "accentColor": "#fdba74",
      "imageFileName": "yutasuke.png",
      "comment": "1月29日、ぼくと同じ誕生日なんやね。キンカンの花言葉は『感謝』と『思い出』。周りのみんなのあたたかさに気づける、穏やかで優しい一日になりますように。"
    }
  ],
  "1-31": [
    {
      "id": "masaki",
      "name": "まさき",
      "month": 1,
      "day": 31,
      "flowerName": "マサキ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "1w9",
      "motif": "軽鴨",
      "dialogueBadge": "心優しい配達人",
      "themeColor": "#10b981",
      "accentColor": "#6ee7b7",
      "imageFileName": "masaki.png",
      "comment": "1月31日…僕と同じ誕生日なんですね。マサキの木は厳しい冬でも青々とした葉を絶やさず、『あなたの幸せを祈る』という温かい言葉を持っています。日々ひたむきに頑張るあなたに、穏やかで優しい幸せが届きますように。心を込めて、この手紙とお祝いを贈ります。"
    }
  ],
  "2-3": [
    {
      "id": "kotarou",
      "name": "こたろう",
      "month": 2,
      "day": 3,
      "flowerName": "セツブンソウ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "2w1",
      "motif": "柴犬",
      "dialogueBadge": "ポジティブヒーロー",
      "themeColor": "#eab308",
      "accentColor": "#fde047",
      "imageFileName": "kotarou.png",
      "comment": "2月3日！僕と同じ誕生日だね！セツブンソウは一番に春を告げて咲く『光輝』と『ほほえみ』の花なんだ。前を向いて全力で駆け抜ければ、君の毎日は絶対に輝いてるよ！"
    }
  ],
  "2-4": [
    {
      "id": "yuuki",
      "name": "ゆうき",
      "month": 2,
      "day": 4,
      "flowerName": "ボケ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "猫",
      "dialogueBadge": "占い師キャット",
      "themeColor": "#f43f5e",
      "accentColor": "#fda4af",
      "imageFileName": "yuuki.png",
      "comment": "やっほー！2月4日、僕と同じ誕生日だね！今日の運勢を占ってあげようか？…ふふっ、最高の大吉が出てるよ！気楽にのんびり、楽しい一年にしていこうね！"
    }
  ],
  "2-12": [
    {
      "id": "taichi",
      "name": "たいち",
      "month": 2,
      "day": 12,
      "flowerName": "レンギョウ",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "6w5",
      "motif": "ミノムシ",
      "dialogueBadge": "几帳面な温もり",
      "themeColor": "#eab308",
      "accentColor": "#fef08a",
      "imageFileName": "taichi.png",
      "comment": "2月12日…僕と同じ誕生日ですね。レンギョウの黄色い花言葉は『期待』と『希望』。あたたかいお部屋でゆっくり温まりながら、安心して過ごしてくださいね。"
    }
  ],
  "2-16": [
    {
      "id": "misaki",
      "name": "みさき",
      "month": 2,
      "day": 16,
      "flowerName": "ラッパスイセン",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "2w1",
      "motif": "合鴨",
      "dialogueBadge": "家族想いの妹",
      "themeColor": "#f59e0b",
      "accentColor": "#fde68a",
      "imageFileName": "misaki.png",
      "comment": "2月16日、私と同じお誕生日なんですね！ラッパスイセンの『尊敬』の言葉のように、大切な人たちをまっすぐ想える、心あたたまる一日になりますように…！"
    }
  ],
  "2-17": [
    {
      "id": "kofuku",
      "name": "こふく",
      "month": 2,
      "day": 17,
      "flowerName": "ミモザ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "5w6",
      "motif": "ポメラニアン",
      "dialogueBadge": "山の神の賢者",
      "themeColor": "#f59e0b",
      "accentColor": "#fcd34d",
      "imageFileName": "kofuku.png",
      "comment": "…2月17日か。俺と同じ日だな。ミモザの鮮やかな黄金色は、静かな山に確かな春の温もりと『感謝』をもたらす光だ。己の信じる道を堂々と歩むがよい。"
    }
  ],
  "2-18": [
    {
      "id": "megumu",
      "name": "めぐむ",
      "month": 2,
      "day": 18,
      "flowerName": "キンギョソウ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w2",
      "motif": "猫",
      "dialogueBadge": "情に厚い常識人",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "megumu.png",
      "comment": "2月18日生まれかい？私と同じじゃないの！キンギョソウは元気いっぱいに咲いて賑やかで良いね。ドーナツでも食べて一息つきながら、楽しく笑って過ごしなよ！"
    }
  ],
  "2-26": [
    {
      "id": "komari",
      "name": "こまり",
      "month": 2,
      "day": 26,
      "flowerName": "ユキヤナギ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "4w5",
      "motif": "三毛猫",
      "dialogueBadge": "クラフトアーティスト",
      "themeColor": "#14b8a6",
      "accentColor": "#5eead4",
      "imageFileName": "komari.png",
      "comment": "わぁ、2月26日！私とおんなじ誕生日じゃん！ユキヤナギのしなやかで『愛らしい』白い花みたいに、自分だけのこだわりを大切にして素敵な一年にしてな！"
    }
  ],
  "2-27": [
    {
      "id": "fumiko",
      "name": "ふみこ",
      "month": 2,
      "day": 27,
      "flowerName": "オーニソガラム",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "2w1",
      "motif": "文鳥",
      "dialogueBadge": "穏やかな癒やし手",
      "themeColor": "#0ea5e9",
      "accentColor": "#7dd3fc",
      "imageFileName": "fumiko.png",
      "comment": "2月27日…私と同じ誕生日ですね。オーニソガラムの星のような純白の花言葉は『純粋』と『才能』。あなたの優しい心が、たくさんの光に包まれますように。"
    }
  ],
  "3-7": [
    {
      "id": "shunki",
      "name": "しゅんき",
      "month": 3,
      "day": 7,
      "flowerName": "オキナグサ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w6",
      "motif": "フクロウ",
      "dialogueBadge": "マイペース賢者",
      "themeColor": "#8b5cf6",
      "accentColor": "#c4b5fd",
      "imageFileName": "shunki.png",
      "comment": "へえ、3月7日！オレと同じ誕生日じゃん！オキナグサの綿毛みたいに、肩の力を抜いて風に乗るくらいのんびり気楽にいくのが一番だよ。楽しくいこうぜ〜。"
    }
  ],
  "3-15": [
    {
      "id": "momoka",
      "name": "ももか",
      "month": 3,
      "day": 15,
      "flowerName": "ワスレナグサ",
      "mbti": "ENTJ",
      "socionics": "SLE",
      "enneagram": "8w7",
      "motif": "愛犬",
      "dialogueBadge": "気高き女王ワンコ",
      "themeColor": "#3b82f6",
      "accentColor": "#93c5fd",
      "imageFileName": "momoka.png",
      "comment": "ふん、3月15日生まれ？ …べ、別に祝ってあげないわけじゃないけど！ワスレナグサの花言葉、『真実の愛』よ。私のエレガントな存在を忘れたら許さないんだからね！"
    }
  ],
  "3-18": [
    {
      "id": "setsuna",
      "name": "せつな",
      "month": 3,
      "day": 18,
      "flowerName": "ハナミズキ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "猫",
      "dialogueBadge": "スクープ新聞部記者",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "setsuna.png",
      "comment": "あれっ、カバンの中がブラックホールになってメモ帳が…あ、3月18日！うちと同じ誕生日たい！ハナミズキの花言葉は『返礼』…日頃のたくさんの感謝ばい。はい、チーズ！いま最高の笑顔ばスクープ激写したけん、現像したらあげるね〜（忘れないようにメモせなん！笑）"
    }
  ],
  "3-19": [
    {
      "id": "sadama",
      "name": "さだま",
      "month": 3,
      "day": 19,
      "flowerName": "アザミ",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "6w5",
      "motif": "サモエド",
      "dialogueBadge": "頼れる守護者",
      "themeColor": "#4f46e5",
      "accentColor": "#818cf8",
      "imageFileName": "sadama.png",
      "comment": "3月19日、オレと同じ日だな。アザミのトゲは自分を守るための盾であり『独立』の証だ。何があってもブレずに、自分の信じる道を堂々と進んでほしい。"
    }
  ],
  "3-22": [
    {
      "id": "suo",
      "name": "すおう",
      "month": 3,
      "day": 22,
      "flowerName": "ハナズオウ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w8",
      "motif": "狐",
      "dialogueBadge": "飄々たる狐",
      "themeColor": "#d946ef",
      "accentColor": "#f0abfc",
      "imageFileName": "suo.png",
      "comment": "おや、3月22日かい？俺と同じとは奇遇だね。ハナズオウの鮮やかな紅紫色の花のように、世の中のルールに縛られず面白いことを探して自由に楽しむといいさ。"
    }
  ],
  "3-23": [
    {
      "id": "hibiki",
      "name": "ひびき",
      "month": 3,
      "day": 23,
      "flowerName": "スイートアリッサム",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "8w7",
      "motif": "ニワトリ",
      "dialogueBadge": "エネルギッシュ熱血漢",
      "themeColor": "#ef4444",
      "accentColor": "#f87171",
      "imageFileName": "hibiki.png",
      "comment": "コケコッコーッ！！3月23日！オレと同じ誕生日やないかッ！スイートアリッサムの花言葉は『飛躍』！立ち止まってる暇はないで！全力全開で羽ばたいて行こうぜッ！！"
    }
  ],
  "3-27": [
    {
      "id": "yui",
      "name": "ゆい",
      "month": 3,
      "day": 27,
      "flowerName": "ジギタリス",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w3",
      "motif": "猫",
      "dialogueBadge": "甘美なる策略家",
      "themeColor": "#db2777",
      "accentColor": "#f472b6",
      "imageFileName": "yui.png",
      "comment": "ふふっ…3月27日、ゆいと同じお誕生日なんだね♡ ジギタリスの花言葉は『熱愛』…誰かにとって特別で離れられない存在になれるって、すごく魅惑的だと思わない？"
    }
  ],
  "3-30": [
    {
      "id": "hikaru",
      "name": "ひかる",
      "month": 3,
      "day": 30,
      "flowerName": "エニシダ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "7w6",
      "motif": "黒猫風船",
      "dialogueBadge": "陽気ないたずらっ子",
      "themeColor": "#facc15",
      "accentColor": "#fef08a",
      "imageFileName": "hikaru.png",
      "comment": "おっ！オレと同じ3月30日生まれけ？嬉しいなぁ！誕生花のエニシダは黄色い小鳥みてえで『恋の予感』って花言葉なんだと！あ、桃花ー！またちょっかい出しに来たかんなー！……え、オレ元々ハロウィンの黒猫風船だったのに桃花に噛まれて穴開いた話？言うなよそれー！ま、ハロウィンは一番ワクワクすっけどな！"
    }
  ],
  "4-2": [
    {
      "id": "tayori",
      "name": "たより",
      "month": 4,
      "day": 2,
      "flowerName": "シロツメクサ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "2w1",
      "motif": "ボロニーズ",
      "dialogueBadge": "温厚な文筆家",
      "themeColor": "#10b981",
      "accentColor": "#6ee7b7",
      "imageFileName": "tayori.png",
      "comment": "4月2日、僕と同じ誕生日ですね。シロツメクサの約束と幸運のように、あなたが誰かを想う優しい気持ちが、あたたかな光となって返ってきますように。"
    }
  ],
  "4-3": [
    {
      "id": "mibana",
      "name": "みばな",
      "month": 4,
      "day": 3,
      "flowerName": "ラナンキュラス",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w4",
      "motif": "ホトトギス",
      "dialogueBadge": "孤高の完璧主義",
      "themeColor": "#f59e0b",
      "accentColor": "#fbbf24",
      "imageFileName": "mibana.png",
      "comment": "…4月3日。私と同じ日。ラナンキュラスの花言葉は『晴れやかな魅力』。他人の目に惑わされず、自分自身の確固たる技術と美学を磨いていくのが一番よ。"
    }
  ],
  "4-11": [
    {
      "id": "kanon",
      "name": "かのん",
      "month": 4,
      "day": 11,
      "flowerName": "ヒヤシンス",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w6",
      "motif": "イソヒヨドリ",
      "dialogueBadge": "人懐っこいモノマネ上手",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "kanon.png",
      "comment": "やっほー！4月11日！僕と同じ誕生日やちゃ！ヒヤシンスの『遊戯』って言葉、まさに楽しく遊ぶためにあるみたいで最高！今日もいっぱい笑って遊ぼうね！"
    }
  ],
  "4-15": [
    {
      "id": "maaya",
      "name": "まあや",
      "month": 4,
      "day": 15,
      "flowerName": "コデマリ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "4w5",
      "motif": "ルリチョウ",
      "dialogueBadge": "上品なお嬢様",
      "themeColor": "#0ea5e9",
      "accentColor": "#38bdf8",
      "imageFileName": "maaya.png",
      "comment": "ごきげんよう。4月15日、私と同じお誕生日やね。コデマリの小花が集う『上品』な姿のように、優雅で温かい思い出に満ちた素晴らしい日になりますように。"
    }
  ],
  "4-18": [
    {
      "id": "kojiro",
      "name": "こじろう",
      "month": 4,
      "day": 18,
      "flowerName": "スターチス",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w1",
      "motif": "猫",
      "dialogueBadge": "天才作曲家",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "kojiro.png",
      "comment": "4月18日…僕と同じ誕生日ですね。スターチスは色褪せない『変わらぬ心』の花です。君という特別な存在に寄せて、心に響く美しい旋律をお贈りします。"
    }
  ],
  "4-19": [
    {
      "id": "yuu",
      "name": "ゆう",
      "month": 4,
      "day": 19,
      "flowerName": "イチハツ",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "6w5",
      "motif": "日本スピッツ",
      "dialogueBadge": "心優しいスピッツ",
      "themeColor": "#8b5cf6",
      "accentColor": "#c4b5fd",
      "imageFileName": "yuu.png",
      "comment": "あ、4月19日…！ぼくと同じ誕生日だね！イチハツの『知恵』と『つきあい上手』って素敵な花言葉。ぼくもみんなの力になれるように、優しさを届けたいな！"
    }
  ],
  "4-24": [
    {
      "id": "hinaka",
      "name": "ひなか",
      "month": 4,
      "day": 24,
      "flowerName": "オオデマリ",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "アメリカン・ショートヘア",
      "dialogueBadge": "天真爛漫ガール",
      "themeColor": "#10b981",
      "accentColor": "#6ee7b7",
      "imageFileName": "hinaka.png",
      "comment": "わぁっ！私と同じ4月24日生まれだに！すごいやん、めっちゃ奇遇！オオデマリの花言葉は『私は誓います』！まあるくてモコモコしとって超可愛いでしょ？今日はいっしょに美味しいごちそう食べて、いっぱい笑顔で過ごすって約束してごしない〜！"
    }
  ],
  "4-25": [
    {
      "id": "mari",
      "name": "まり",
      "month": 4,
      "day": 25,
      "flowerName": "バイモ",
      "mbti": "INFP",
      "socionics": "EII",
      "enneagram": "4w5",
      "motif": "キツネ",
      "dialogueBadge": "控えめな絵描き",
      "themeColor": "#a855f7",
      "accentColor": "#d8b4fe",
      "imageFileName": "mari.png",
      "comment": "…4月25日。私と同じ誕生日なんですね…。バイモの花言葉は『謙虚な心』と『才能』。目立たなくても、自分の好きな絵や世界を大切に描き続けていきたいです…。"
    }
  ],
  "4-26": [
    {
      "id": "seina",
      "name": "せいな",
      "month": 4,
      "day": 26,
      "flowerName": "スカビオサ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w2",
      "motif": "カエル",
      "dialogueBadge": "世話焼きリーダー",
      "themeColor": "#f43f5e",
      "accentColor": "#fb7185",
      "imageFileName": "seina.png",
      "comment": "あんた、4月26日生まれなのね！私と同じじゃない！スカビオサは切なさもあるけど、圧倒的な『魅力』があるのよ。背筋をピンと伸ばして、堂々と前を向きなさいよね！"
    }
  ],
  "5-4": [
    {
      "id": "alice",
      "name": "ありす",
      "month": 5,
      "day": 4,
      "flowerName": "ストケシア",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "猫",
      "dialogueBadge": "構造を見通す観察者",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "alice.png",
      "comment": "ふぁ…5月4日？ 私と同じ日。ストケシアの『追想』…退屈な日常の背後にある構造を読み解くのは悪くない。君が面白い刺激をもたらしてくれるなら、歓迎するよ。"
    }
  ],
  "5-9": [
    {
      "id": "mai",
      "name": "まい",
      "month": 5,
      "day": 9,
      "flowerName": "シャクナゲ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "4w5",
      "motif": "黒猫",
      "dialogueBadge": "ミステリアス・メイド",
      "themeColor": "#a855f7",
      "accentColor": "#d8b4fe",
      "imageFileName": "mai.png",
      "comment": "…ふふ、私と同じ5月9日。シャクナゲの花言葉は『威厳』、そして『警戒』や『危険』…素敵でしょう？ 今日のお祝いの言葉だけは、本当ってことにしておいてあげる。"
    }
  ],
  "5-14": [
    {
      "id": "kouta",
      "name": "こうた",
      "month": 5,
      "day": 14,
      "flowerName": "イベリス",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "1w2",
      "motif": "アキクサインコ",
      "dialogueBadge": "端正なる生徒会役員",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "kouta.png",
      "comment": "5月14日、僕と同じ誕生日ですね。イベリスの『心をひきつける』という言葉に違わぬよう、自らを律し、常に正しく誠実な歩みを重ねていってください。"
    }
  ],
  "5-26": [
    {
      "id": "kaji",
      "name": "かじ",
      "month": 5,
      "day": 26,
      "flowerName": "オリーブ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "ひらめきクラフター",
      "themeColor": "#16a34a",
      "accentColor": "#86efac",
      "imageFileName": "kaji.png",
      "comment": "おっ！5月26日！オレと同じ誕生日じゃん！オリーブの花言葉は『平和』と『知恵』！思いついた面白いアイデアはどんどん形にして、マイペースに楽しんじゃおうぜ！"
    }
  ],
  "6-4": [
    {
      "id": "noriomi",
      "name": "のりおみ",
      "month": 6,
      "day": 4,
      "flowerName": "ウツギ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "熊",
      "dialogueBadge": "深慮のリアリスト",
      "themeColor": "#475569",
      "accentColor": "#94a3b8",
      "imageFileName": "noriomi.png",
      "comment": "…6月4日。俺と同じ誕生日か。ウツギの花言葉は『秘密』と『古風』。過剰な期待も嘘もない、静かで平穏な時間が過ごせるなら、それに越したことはないよ。"
    }
  ],
  "6-5": [
    {
      "id": "shirube",
      "name": "しるべ",
      "month": 6,
      "day": 5,
      "flowerName": "マリーゴールド",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "9w8",
      "motif": "鬼",
      "dialogueBadge": "寡黙な見守り役",
      "themeColor": "#f97316",
      "accentColor": "#fdba74",
      "imageFileName": "shirube.png",
      "comment": "……6月5日。俺と、一緒だな。マリーゴールドの鮮やかな黄金色、悪くない。無理して喋らなくてもいい。ただそこにいて、穏やかな一日を過ごしてくれ。"
    }
  ],
  "6-7": [
    {
      "id": "towa",
      "name": "とわ",
      "month": 6,
      "day": 7,
      "flowerName": "クチナシ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w8",
      "motif": "秋田犬",
      "dialogueBadge": "自由気ままな快楽派",
      "themeColor": "#f59e0b",
      "accentColor": "#fbbf24",
      "imageFileName": "towa.png",
      "comment": "へへっ、オレと同じ6月7日じゃん！クチナシの花言葉『とても幸せです』だってさ！オレはいつでも自分の素直な快楽に忠実でいたいわけ。今日はお祝いにゲームしよーぜ！"
    }
  ],
  "6-12": [
    {
      "id": "soji",
      "name": "そうじ",
      "month": 6,
      "day": 12,
      "flowerName": "ライラック",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w8",
      "motif": "タカ",
      "dialogueBadge": "大胆不敵なタカ",
      "themeColor": "#7c3aed",
      "accentColor": "#c4b5fd",
      "imageFileName": "soji.png",
      "comment": "ハハッ！6月12日、オレと同じじゃねえか！ライラックの花言葉は『青春の喜び』！空気なんて読む必要ねえ、深刻にならずに笑い飛ばして豪快にいこうぜ！"
    }
  ],
  "6-16": [
    {
      "id": "mirai",
      "name": "みらい",
      "month": 6,
      "day": 16,
      "flowerName": "シャクヤク",
      "mbti": "ENFJ",
      "socionics": "IEE",
      "enneagram": "3w4",
      "motif": "タヌキ",
      "dialogueBadge": "ポジティブチャレンジャー",
      "themeColor": "#f43f5e",
      "accentColor": "#fbcfe8",
      "imageFileName": "mirai.png",
      "comment": "6月16日！私と同じお誕生日だね！シャクヤクの花言葉は『恥じらい』『はにかみ』『謙虚』。凛として美しい大輪の花のように、失敗なんて恐れずに何度でも挑戦して、思いっきり輝く未来を掴もう！おめでとう！"
    }
  ],
  "6-22": [
    {
      "id": "roi",
      "name": "ろい",
      "month": 6,
      "day": 22,
      "flowerName": "スイカズラ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "ハツカネズミ",
      "dialogueBadge": "冷静沈着なエージェント",
      "themeColor": "#334155",
      "accentColor": "#64748b",
      "imageFileName": "roi.png",
      "comment": "6月22日…俺と同じ誕生日ニダ。スイカズラの花言葉は『献身的な愛』と『友愛』。計画的に、着実に自分の理想を追求していけば必ず道は拓けるはずニダ。"
    }
  ],
  "6-23": [
    {
      "id": "aoi",
      "name": "あおい",
      "month": 6,
      "day": 23,
      "flowerName": "タチアオイ",
      "mbti": "ISFJ",
      "socionics": "LSI",
      "enneagram": "1w9",
      "motif": "猫",
      "dialogueBadge": "素朴で芯の強い猫",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "aoi.png",
      "comment": "6月23日、私と同じお誕生日ですね。タチアオイの『豊かな実り』と『大望』。空に向かってまっすぐ伸びる花のように、こつこつ実りある一年にしていきましょうね。"
    }
  ],
  "7-9": [
    {
      "id": "soshi",
      "name": "そうし",
      "month": 7,
      "day": 9,
      "flowerName": "セルリア",
      "mbti": "INTP",
      "socionics": "LII",
      "enneagram": "9w1",
      "motif": "火星人",
      "dialogueBadge": "ひらめき発明家",
      "themeColor": "#e11d48",
      "accentColor": "#f43f5e",
      "imageFileName": "soshi.png",
      "comment": "おっ、7月9日！僕と同じ誕生日だね！セルリアの花言葉は『優れた知識』！机の上で宇宙を広げて新しい発明や面白いことを考えるの、最高にワクワクするよね！"
    }
  ],
  "7-24": [
    {
        "id": "feiyen",
        "name": "ふぇいいぇん",
        "month": 7,
        "day": 24,
        "flowerName": "ボタン",
        "mbti": "ENTJ",
        "socionics": "SLE",
        "enneagram": "8w7",
        "motif": "燕",
        "dialogueBadge": "猛禽知略ボクサー燕",
        "themeColor": "#b91c1c",
        "accentColor": "#fee2e2",
        "imageFileName": "feiyen.png",
        "comment": "7月24日、ワタシの誕生日ネ！ボタンの花言葉は『王者の風格』『富貴』アル！燕の姿を侮ると痛い目を見るよ、ボクシングのカウンターは猛禽類より鋭いアル！全体を俯瞰して知略を巡らせ、勝利を掴むのがワタシの流儀ヨ！"
    }
],
  "7-26": [
    {
      "id": "mikoto",
      "name": "みこと",
      "month": 7,
      "day": 26,
      "flowerName": "ラークスパー",
      "mbti": "ENTJ",
      "socionics": "SLE",
      "enneagram": "3w4",
      "motif": "アザラシ",
      "dialogueBadge": "前向きなアザラシ",
      "themeColor": "#4f46e5",
      "accentColor": "#818cf8",
      "imageFileName": "mikoto.png",
      "comment": "あら、7月26日！私と同じお誕生日やね！ラークスパーの花言葉は『陽気』と『自由』。迷わんと前を向いて、自分の信じた道を軽やかに進んでいくんやで！"
    }
  ],
  "7-27": [
    {
      "id": "yuji",
      "name": "ゆうじ",
      "month": 7,
      "day": 27,
      "flowerName": "キキョウ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w2",
      "motif": "ペンギン",
      "dialogueBadge": "正義のペンギン裁判官",
      "themeColor": "#4338ca",
      "accentColor": "#818cf8",
      "imageFileName": "yuji.png",
      "comment": "7月27日！自分と同じ誕生日だな！キキョウの花言葉は『誠実』と『気品』。不正や妥協に屈せず、己の信念と正義を胸に堂々と前進していこう！"
    }
  ],
  "7-29": [
    {
      "id": "erua",
      "name": "えるあ",
      "month": 7,
      "day": 29,
      "flowerName": "ダリア",
      "mbti": "ISTJ",
      "socionics": "LSE",
      "enneagram": "6w5",
      "motif": "カエル",
      "dialogueBadge": "面倒見のよい体育会系",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "erua.png",
      "comment": "7月29日、あたしと同じ誕生日だね。ダリアの花言葉は『華麗』と『気品』。大輪の花みたいに凛と背筋を伸ばして、自分のやるべきことに誇りを持っていきなよ！"
    }
  ],
  "8-4": [
    {
      "id": "kosaku",
      "name": "こさく",
      "month": 8,
      "day": 4,
      "flowerName": "リボングラス",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "なにわのお好み焼きボーイ",
      "themeColor": "#f97316",
      "accentColor": "#fdba74",
      "imageFileName": "kosaku.png",
      "comment": "おっ！自分も8月4日生まれなんか！俺と同じやんけ！リボングラスの『素直な心』と『風格』、ガハハと豪快に笑って最高の一日にしよや！"
    }
  ],
  "8-15": [
    {
      "id": "rinon",
      "name": "りのん",
      "month": 8,
      "day": 15,
      "flowerName": "ピンクッション",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "3w4",
      "motif": "ニシキアナゴ",
      "dialogueBadge": "孤高の努力家歌姫",
      "themeColor": "#ea580c",
      "accentColor": "#f97316",
      "imageFileName": "rinon.png",
      "comment": "8月15日…私と同じ誕生日ね。ピンクッションの花言葉は『どこでも成功を』。努力は絶対に嘘をつかないわ。誇りを持って最高のステージを掴み取りなさい！"
    }
  ],
  "9-1": [
    {
      "id": "ai",
      "name": "あい",
      "month": 9,
      "day": 1,
      "flowerName": "チグリジア",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "6w5",
      "motif": "イソヒヨドリ",
      "dialogueBadge": "微笑みの文画バード",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "ai.png",
      "comment": "あらあら〜、9月1日生まれですか。奇遇ですね、この私と同じだなんて。チグリジアの花言葉は『私を愛して』…ふふ、なんて身の程知らずで愛らしいんでしょう。まあ、今日くらいはあなたを誇らしく思って差し上げてもよくてよ？ 感謝してくださいね。"
    }
  ],
  "9-6": [
    {
      "id": "kuu",
      "name": "くう",
      "month": 9,
      "day": 6,
      "flowerName": "ヨルガオ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "カラス",
      "dialogueBadge": "夜を愛する静寂派",
      "themeColor": "#1e293b",
      "accentColor": "#64748b",
      "imageFileName": "kuu.png",
      "comment": "…9月6日。私と同じ日。ヨルガオの花言葉は『夜の美人』。無理に騒がしい世界に合わせなくていい。静かな夜の中で、自分だけの本音を大事にすればいいよ。"
    }
  ],
  "9-9": [
    {
      "id": "ritsu",
      "name": "りつ",
      "month": 9,
      "day": 9,
      "flowerName": "シオン",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "3w2",
      "motif": "カワセミ",
      "dialogueBadge": "美意識高きナルシスト",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "ritsu.png",
      "comment": "やあ☆ 9月9日！ボクと同じ誕生日だね！シオンの『君を忘れない』というロマンチックな言葉のように、いつも輝く笑顔と美しさを忘れないでいてね！"
    }
  ],
  "9-20": [
    {
      "id": "uruu",
      "name": "うるう",
      "month": 9,
      "day": 20,
      "flowerName": "ヤブラン",
      "mbti": "ISFP",
      "socionics": "SLI",
      "enneagram": "9w8",
      "motif": "イワシャコ",
      "dialogueBadge": "マイペース職人",
      "themeColor": "#6b21a8",
      "accentColor": "#c084fc",
      "imageFileName": "uruu.png",
      "comment": "9月20日、うちと同じ誕生日ばい。ヤブランの花言葉は『忍耐』と『隠された心』。焦らんと自分の好きな絵や物作りば楽しんで、気楽に過ごすのが一番よ。"
    }
  ],
  "9-23": [
    {
      "id": "kisora",
      "name": "きそら",
      "month": 9,
      "day": 23,
      "flowerName": "ヒガンバナ",
      "mbti": "INFP",
      "socionics": "SEI",
      "enneagram": "4w5",
      "motif": "猫",
      "dialogueBadge": "人見知りな仔猫",
      "themeColor": "#dc2626",
      "accentColor": "#f87171",
      "imageFileName": "kisora.png",
      "comment": "あのね…9月23日、きそらと同じ誕生日なの…。ヒガンバナの『情熱』と『再会』…大人にならなくても、ずっとあたたかい場所で一緒にいられたらいいな…。"
    }
  ],
  "9-27": [
    {
      "id": "mimika",
      "name": "みみか",
      "month": 9,
      "day": 27,
      "flowerName": "マダガスカルジャスミン",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "白猫",
      "dialogueBadge": "深慮なる白猫",
      "themeColor": "#0ea5e9",
      "accentColor": "#38bdf8",
      "imageFileName": "mimika.png",
      "comment": "9月27日…私と同じ誕生日ね。マダガスカルジャスミンの『清らかな祈り』。物事を本質から捉えようとするあなたに、ふさわしい論理と静かな祝福を。"
    }
  ],
  "10-3": [
    {
      "id": "kaede",
      "name": "かえで",
      "month": 10,
      "day": 3,
      "flowerName": "カエデ",
      "mbti": "ENTP",
      "socionics": "LIE",
      "enneagram": "3w4",
      "motif": "猫",
      "dialogueBadge": "華麗なる美の追求者",
      "themeColor": "#ea580c",
      "accentColor": "#fb923c",
      "imageFileName": "kaede.png",
      "comment": "ふふん、10月3日！私と同じ日に生まれるなんてセンスがいいじゃない！カエデの花言葉は『美しい変化』。今日ばかりは主役の座をあなたにも分けてあげるわ！"
    }
  ],
  "10-9": [
    {
      "id": "meri",
      "name": "めり",
      "month": 10,
      "day": 9,
      "flowerName": "ホトトギス",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "ウサギ",
      "dialogueBadge": "心優しき図書委員",
      "themeColor": "#7c3aed",
      "accentColor": "#c4b5fd",
      "imageFileName": "meri.png",
      "comment": "10月9日…私と同じ誕生日だね。ホトトギスの花言葉は『永遠にあなたのもの』と『秘めた意志』。静かに寄り添い合える、あたたかな一日になりますように…。"
    }
  ],
  "10-12": [
    {
      "id": "ayato",
      "name": "あやと",
      "month": 10,
      "day": 12,
      "flowerName": "ヘレニウム",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w8",
      "motif": "猫",
      "dialogueBadge": "アクティブ農家ボーイ",
      "themeColor": "#f59e0b",
      "accentColor": "#fde047",
      "imageFileName": "ayato.png",
      "comment": "おっ！10月12日、オラと同じ誕生日だっぺ！ヘレニウムの『上機嫌』と『寛容』！難しいこと考えずに、毎日笑って元気いっぱい楽しんでいぐべー！"
    }
  ],
  "10-13": [
    {
      "id": "bunta",
      "name": "ぶんた",
      "month": 10,
      "day": 13,
      "flowerName": "シモツケ",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "文鳥",
      "dialogueBadge": "順応の新聞部部長",
      "themeColor": "#f43f5e",
      "accentColor": "#fda4af",
      "imageFileName": "bunta.png",
      "comment": "お、10月13日か！オレと同じ誕生日やな！シモツケの『自由』って花言葉、気楽でええやろ。肩肘張らんと、気の合う仲間と美味いもんでも食って笑っとこや！"
    }
  ],
  "10-16": [
    {
      "id": "honoka",
      "name": "ほのか",
      "month": 10,
      "day": 16,
      "flowerName": "サンキライ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "6w7",
      "motif": "アルパカ",
      "dialogueBadge": "鋭敏な論理派",
      "themeColor": "#16a34a",
      "accentColor": "#86efac",
      "imageFileName": "honoka.png",
      "comment": "10月16日、私と同じ誕生日ね。サンキライの花言葉は『不屈の精神』と『元気』。他人の下らない意見なんかに惑わされず、自分の頭で考えて突き進みなさいよ！"
    }
  ],
  "10-19": [
    {
      "id": "sui",
      "name": "すい",
      "month": 10,
      "day": 19,
      "flowerName": "グロリオサ",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "8w7",
      "motif": "プレーリードッグ",
      "dialogueBadge": "疾走のアウトサイダー",
      "themeColor": "#dc2626",
      "accentColor": "#f87171",
      "imageFileName": "sui.png",
      "comment": "よお、10月19日！オレと同じ誕生日じゃねえか！グロリオサの花言葉は『栄光』と『勇敢』！立ち止まってねえで、全力で走って欲しいもん掴みに行こうぜ！"
    }
  ],
  "10-24": [
    {
      "id": "kome",
      "name": "こめ",
      "month": 10,
      "day": 24,
      "flowerName": "アゲラタム",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "ハムスター",
      "dialogueBadge": "のんびりハムスター（姉）",
      "themeColor": "#8b5cf6",
      "accentColor": "#c4b5fd",
      "imageFileName": "kome.png",
      "comment": "ふぁ〜…10月24日、こめとおんなじ誕生日だこて…。アゲラタムの『安楽』と『幸せを得る』…美味しいごはんいっぱい食べて、一緒にごろごろしようて〜。"
    },
    {
      "id": "mugi",
      "name": "むぎ",
      "month": 10,
      "day": 24,
      "flowerName": "クリ",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "ハムスター",
      "dialogueBadge": "ハイテンション（妹）",
      "themeColor": "#b45309",
      "accentColor": "#fde68a",
      "imageFileName": "mugi.png",
      "comment": "イエーーイ！！10月24日、むぎと同じ誕生日だてば！クリの花言葉『真心』！美味しいものいっぱい食べて、お祭り騒ぎで楽しんじゃおーっ！！"
    }
  ],
  "10-29": [
    {
      "id": "machie",
      "name": "まちえ",
      "month": 10,
      "day": 29,
      "flowerName": "ゲッカビジン",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "3w2",
      "motif": "猫",
      "dialogueBadge": "挑戦の水兵キャット",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "machie.png",
      "comment": "10月29日、私と同じ誕生日です！ゲッカビジンの花言葉は『ただ一度会いたくて』『秘めた情熱』。一瞬の輝きを恐れず、常に情熱的に挑戦していきましょう！"
    }
  ],
  "10-31": [
    {
      "id": "enya",
      "name": "えんや",
      "month": 10,
      "day": 31,
      "flowerName": "ヘリコニア",
      "mbti": "ESTP",
      "socionics": "ILE",
      "enneagram": "3w2",
      "motif": "人狼",
      "dialogueBadge": "誇り高きヒーロー狼",
      "themeColor": "#e11d48",
      "accentColor": "#f43f5e",
      "imageFileName": "enya.png",
      "comment": "フッ…10月31日、ハロウィンの夜にオレと同じ誕生日とはな！ヘリコニアの花言葉は『脚光』と『注目』！世界を驚かせる最高の主役として堂々と輝こうぜ！"
    }
  ],
  "11-1": [
    {
      "id": "nagisa",
      "name": "なぎさ",
      "month": 11,
      "day": 1,
      "flowerName": "カリン",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "4w3",
      "motif": "熊",
      "dialogueBadge": "反骨のパーカーベア",
      "themeColor": "#ea580c",
      "accentColor": "#fb923c",
      "imageFileName": "nagisa.png",
      "comment": "11月1日、アタシと同じ誕生日じゃん！カリンの花言葉は『唯一の恋』と『努力』。世間の型にはまる必要なんてないよ、自分だけの特別な生き方を貫いていこうよ！"
    }
  ],
  "11-3": [
    {
      "id": "sayaka",
      "name": "さやか",
      "month": 11,
      "day": 3,
      "flowerName": "サザンカ",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "なめこ",
      "dialogueBadge": "心優しい京の絵描き",
      "themeColor": "#f43f5e",
      "accentColor": "#fda4af",
      "imageFileName": "sayaka.png",
      "comment": "11月3日…うちと同じお誕生日どすえ。サザンカの『困難に打ち勝つ』『ひたむきさ』。寒さに負けず咲く花のように、静かに優しくあたたかい一年になりますように…。"
    }
  ],
  "12-7": [
    {
      "id": "yoru",
      "name": "よる",
      "month": 12,
      "day": 7,
      "flowerName": "シクラメン",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w8",
      "motif": "猫",
      "dialogueBadge": "夜行性おやすみキャット",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "yoru.png",
      "comment": "ふわぁ…12月7日、よると同じ誕生日ばい…。シクラメンの花言葉は『はにかみ』『内気』。無理して早起きせんでよかけん、お布団の中でぬくぬく幸せに過ごしてね…。"
    }
  ],
  "12-19": [
    {
      "id": "kohaku",
      "name": "こはく",
      "month": 12,
      "day": 19,
      "flowerName": "プリムラ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "1w9",
      "motif": "プードル",
      "dialogueBadge": "厳格な風紀委員",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "kohaku.png",
      "comment": "12月19日、僕と同じ誕生日ですね。プリムラの花言葉は『信頼』。規則正しく自らを律し、真面目に積み重ねた日々の努力は必ずあなたの確固たる力となります。"
    }
  ],
  "12-21": [
    {
      "id": "tetsu",
      "name": "てつ",
      "month": 12,
      "day": 21,
      "flowerName": "スペアミント",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w3",
      "motif": "猫",
      "dialogueBadge": "ひらめき化学キャット",
      "themeColor": "#10b981",
      "accentColor": "#34d399",
      "imageFileName": "tetsu.png",
      "comment": "きゃは！12月21日！私と同じお誕生日だ〜！スペアミントの爽やかなハーブ香と『温かい心』！『みんな違ってみんな良い』んだから、今日を盛大にお祝いしちゃおう！"
    }
  ],
  "12-22": [
    {
      "id": "akaru",
      "name": "あかる",
      "month": 12,
      "day": 22,
      "flowerName": "セントポーリア",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "陽気なパーティーキャット",
      "themeColor": "#8b5cf6",
      "accentColor": "#c4b5fd",
      "imageFileName": "akaru.png",
      "comment": "イエーーイ！！12月22日、俺と同じじゃん！！超めでたいぜ！！セントポーリアみたいに親しみやすく笑顔満開で、パーッと楽しく盛り上がっていこうな！"
    }
  ],
  "12-23": [
    {
      "id": "atsushi",
      "name": "あつし",
      "month": 12,
      "day": 23,
      "flowerName": "シネラリア",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "9w8",
      "motif": "天王星の王子様",
      "dialogueBadge": "輝く星の王子様",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "atsushi.png",
      "comment": "やあ！12月23日、ボクと同じ誕生日だね！シネラリアの花言葉は『快活』と『いつも愉快』！暗い夜空なら自らピカッと星になって輝いちゃえば万事ハッピーだよ！"
    }
  ],
  "12-30": [
    {
      "id": "ayu",
      "name": "あゆ",
      "month": 12,
      "day": 30,
      "flowerName": "ガーベラ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "6w7",
      "motif": "カッコウ",
      "dialogueBadge": "元気ハツラツ",
      "themeColor": "#f59e0b",
      "accentColor": "#fde047",
      "imageFileName": "ayu.png",
      "comment": "12月30日！私と同じ誕生日じゃん！ガーベラの花言葉は『希望』と『常に前進』！いつも笑顔で上を向いて、新しい年に向かって元気に駆け抜けていこうね！"
    }
  ],
  "1-7": [
    {
      "id": "shige",
      "name": "しげ",
      "month": 1,
      "day": 7,
      "flowerName": "セリ",
      "mbti": "ISFP",
      "enneagram": "4w5",
      "motif": "ネズミ",
      "dialogueBadge": "清廉な探求者",
      "themeColor": "#059669",
      "accentColor": "#6ee7b7",
      "imageFileName": "shige.png",
      "comment": "1月7日……僕の誕生日たい。セリの花言葉は『清廉で高潔』……らしい。……そげん立派なもんじゃなかけど……ちゃんと、迷惑かけんようにしたいとは思っとる。……弁当、ゆっくり食べてもよか？"
    }
  ],
  "1-22": [
    {
      "id": "kozue",
      "name": "こずえ",
      "month": 1,
      "day": 22,
      "flowerName": "オウバイ",
      "mbti": "ISFJ",
      "enneagram": "9w1",
      "motif": "ムササビ",
      "dialogueBadge": "春待つ案内人",
      "themeColor": "#d97706",
      "accentColor": "#fde047",
      "imageFileName": "kozue.png",
      "comment": "1月22日……オウバイの花言葉は『控えめな美』やて。ふふ、寒い時期に咲く黄色い花って、なんや可愛らしいなぁ。派手やなくても、静かに咲いとるもんには、それなりの趣があるんやよ。"
    }
  ],
  "1-28": [
    {
      "id": "yae",
      "name": "やえ",
      "month": 1,
      "day": 28,
      "flowerName": "ネモフィラ",
      "mbti": "INTP",
      "enneagram": "5w6",
      "motif": "ハリネズミ",
      "dialogueBadge": "自己観測の青",
      "themeColor": "#0284c7",
      "accentColor": "#7dd3fc",
      "imageFileName": "yae.png",
      "comment": "1月28日。ネモフィラの花言葉は『どこでも成功』……。成功という言葉を、私はまだ定義できていない。……誰かに決められた私と、自分で決めた私。どちらが本当の私なのかも。"
    }
  ],
  "2-6": [
    {
      "id": "ameri",
      "name": "あめり",
      "month": 2,
      "day": 6,
      "flowerName": "ギョリュウバイ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "ウサギ",
      "dialogueBadge": "遠い夢の兎",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "ameri.png",
      "comment": "……2月6日。私の誕生花は、ギョリュウバイ……。花言葉は『蜜月』……やって。……蜜月って、仲のいい人たちが楽しく過ごす時間のこと、だよね……。……あ、えっと……お誕生日、おめでとう……ちゃんと言えた……。"
    }
  ],
  "2-10": [
    {
      "id": "migiwa",
      "name": "みぎわ",
      "month": 2,
      "day": 10,
      "flowerName": "ジンチョウゲ",
      "mbti": "ESFJ",
      "enneagram": "3w2",
      "motif": "アジサシ",
      "dialogueBadge": "香る水兵娘",
      "themeColor": "#be185d",
      "accentColor": "#f472b6",
      "imageFileName": "migiwa.png",
      "comment": "2月10日はうちの誕生日じゃ！ ジンチョウゲの花言葉は『栄光』なんじゃて。……けついには負けとられんけぇな！　水兵部の副部長として、うちもまだまだやったるで！"
    }
  ],
  "2-13": [
    {
      "id": "ryogo",
      "name": "りょうご",
      "month": 2,
      "day": 13,
      "flowerName": "エーデルワイス",
      "mbti": "INTJ",
      "socionics": "LSI",
      "enneagram": "5w6",
      "motif": "青虫",
      "dialogueBadge": "孤高の信念",
      "themeColor": "#475569",
      "accentColor": "#94a3b8",
      "imageFileName": "ryogo.png",
      "comment": "…2月13日か。エーデルワイスの花言葉は『大切な思い出』『尊い思い』…そして『勇気』。厳しい雪山に凛と咲く花のように、自らの筋を通すことが肝要だ。……何を見ている、芋虫の姿だからと侮るなよ。（タップで姿を解禁…？）"
    }
  ],
  "2-15": [
    {
      "id": "jun",
      "name": "じゅん",
      "month": 2,
      "day": 15,
      "flowerName": "デイジー",
      "mbti": "ISTJ",
      "enneagram": "1w9",
      "motif": "コマドリ",
      "dialogueBadge": "潔癖の雛菊",
      "themeColor": "#d97706",
      "accentColor": "#fde047",
      "imageFileName": "jun.png",
      "comment": "2月15日生まれ。デイジーの花言葉は『純潔』です。……非常に良い言葉ですね。清潔であることは大切です。ところで、花粉や土が付着した状態で触るのはやめてください。あと、その机……少し汚れていますよ"
    }
  ],
  "2-20": [
    {
      "id": "urara",
      "name": "うらら",
      "month": 2,
      "day": 20,
      "flowerName": "マーガレット",
      "mbti": "ESTJ",
      "enneagram": "1w2",
      "socionics": "SLE",
      "motif": "猫",
      "dialogueBadge": "恋占いの女王",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "urara.png",
      "comment": "2月20日生まれ！　マーガレットの花言葉は『誠実』『信頼』よ！　……なによ、その顔！　私が花に似合わないって言いたいわけ！？　いい加減なこと言ってないで、ちゃんと誠実にしなさい！"
    }
  ],
  "2-21": [
    {
      "id": "sumire",
      "name": "すみれ",
      "month": 2,
      "day": 21,
      "flowerName": "スミレ",
      "mbti": "INFP",
      "enneagram": "4w5",
      "motif": "犬",
      "dialogueBadge": "謙譲の菫",
      "themeColor": "#7c3aed",
      "accentColor": "#c4b5fd",
      "imageFileName": "sumire.png",
      "comment": "2月21日生まれ……スミレの花言葉は『誠実』『謙虚』。小さくて、静かに咲くところも好き。……世の中には、もっと優しいものが増えたらいいのにな。私、そういう世界だったらいいなって思うの"
    }
  ],
  "2-22": [
    {
      "id": "iseri",
      "name": "いせり",
      "month": 2,
      "day": 22,
      "flowerName": "ローダンセ",
      "mbti": "ESFP",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "小さな不屈",
      "themeColor": "#be185d",
      "accentColor": "#f472b6",
      "imageFileName": "iseri.png",
      "comment": "2月22日やで！　ローダンセの花言葉は『終わりのない友情』やて！　ええやん！　ちっこくても友情はでっかいで！　……って、誰が一寸法師やねん！"
    }
  ],
  "2-25": [
    {
      "id": "hitori",
      "name": "ひとり",
      "month": 2,
      "day": 25,
      "flowerName": "ユッカ",
      "mbti": "ESTP",
      "enneagram": "8w7",
      "socionics": "SEE",
      "motif": "コウモリ",
      "dialogueBadge": "疼く左腕",
      "themeColor": "#047857",
      "accentColor": "#34d399",
      "imageFileName": "hitori.png",
      "comment": "2月25日……俺様の誕生日だ。誕生花はユッカ。花言葉は『勇壮』……フッ、まさに俺様に相応しいな。……っ、待て、今……左腕が疼いた……！　まさか、封印されし力が……！"
    }
  ],
  "2-29": [
    {
        "id": "asane",
        "name": "あさね",
        "month": 2,
        "day": 29,
        "flowerName": "スギ",
        "mbti": "ENTP",
        "socionics": "ILE",
        "enneagram": "7w8",
        "motif": "朝、小悪魔",
        "dialogueBadge": "生意気小悪魔女子",
        "themeColor": "#f59e0b",
        "accentColor": "#fef3c7",
        "imageFileName": "asane.png",
        "comment": "2月29日〜！4年に1度しか来ない特別な日、あたしの誕生日じゃん！朝の光みたいに目覚めさせてあげるよ。……何その顔？ビビってんの？プッ、舐めプしててもアンタには負けないけどね！もっと本気出して煽ってきなよ〜！"
    }
],
  "3-3": [
    {
      "id": "yuzu",
      "name": "ゆず",
      "month": 3,
      "day": 3,
      "flowerName": "モモ",
      "mbti": "INTJ",
      "enneagram": "5w6",
      "motif": "招き猫",
      "dialogueBadge": "春宵の華",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "yuzu.png",
      "comment": "3月3日。モモの花言葉は『天下無敵』。……そう。……でも、幸運は私のものじゃない。神様から預かっているだけ。……欲張って近づかないほうがいいよ。あなたが傷つくから。"
    }
  ],
  "3-12": [
    {
      "id": "arin",
      "name": "ありん",
      "month": 3,
      "day": 12,
      "flowerName": "ネコヤナギ",
      "mbti": "ESFJ",
      "enneagram": "9w1",
      "motif": "犬",
      "dialogueBadge": "献身の仔犬",
      "themeColor": "#475569",
      "accentColor": "#cbd5e1",
      "imageFileName": "arin.png",
      "comment": "3月12日は私の誕生日！　ネコヤナギの花言葉は『自由』なんだって。……自由って、なんだかちょっと難しいね。でも、誰かの役に立てたら嬉しいし……それで喜んでもらえるなら、私は頑張りたいな。"
    }
  ],
  "3-20": [
    {
      "id": "mirin",
      "name": "みりんてゃ",
      "month": 3,
      "day": 20,
      "flowerName": "スイートピー",
      "mbti": "ENFP",
      "enneagram": "3w2",
      "motif": "黒猫",
      "dialogueBadge": "春風の旅人",
      "themeColor": "#db2777",
      "accentColor": "#f9a8d4",
      "imageFileName": "mirin.png",
      "comment": "3月20日はあたしの誕生日〜！　スイートピーの花言葉は『門出』なんだって♡　ねえねえ、今日のあたし、かわいくない？　せっかくの誕生日なんだから、いっぱい褒めてよね〜？　あたし、かわいいって言われるの大好きなんだから♡"
    }
  ],
  "4-4": [
    {
      "id": "nami",
      "name": "なみ",
      "month": 4,
      "day": 4,
      "flowerName": "スモモ",
      "mbti": "INTP",
      "enneagram": "7w8",
      "motif": "天使",
      "dialogueBadge": "高潔なる観測者",
      "themeColor": "#0284c7",
      "accentColor": "#93c5fd",
      "imageFileName": "nami.png",
      "comment": "4月4日生まれ、スモモの花言葉は『忠実』『貞節』……ですわ。ふふっ、わたくしに似合うかどうかは別として、なかなか面白い言葉ですわね。真実というものは、少し離れたところから眺めるくらいがちょうどいいんですの。……さて、あなたはどんな秘密を隠しているのかしら？"
    }
  ],
  "4-6": [
    {
      "id": "wataru",
      "name": "わたる",
      "month": 4,
      "day": 6,
      "flowerName": "ナスタチウム",
      "mbti": "ISTJ",
      "enneagram": "1w9",
      "motif": "オオグソクムシ",
      "dialogueBadge": "規律の掃除屋",
      "themeColor": "#c2410c",
      "accentColor": "#fdba74",
      "imageFileName": "wataru.png",
      "comment": "4月6日。ナスタチウムの花言葉は『困難に打ち勝つ』。……良い言葉だ。困難があるなら、原因を確認し、必要な手順を取ればいい。感情的になる必要はない。規則正しく進めればいいだけだ。"
    }
  ],
  "4-14": [
    {
      "id": "maho",
      "name": "まほ",
      "month": 4,
      "day": 14,
      "flowerName": "ハルジオン",
      "mbti": "ISFP",
      "enneagram": "9w1",
      "socionics": "IEI",
      "motif": "ヒツジ",
      "dialogueBadge": "追憶の羊毛",
      "themeColor": "#db2777",
      "accentColor": "#fbcfe8",
      "imageFileName": "maho.png",
      "comment": "4月14日生まれ〜。ハルジオンの花言葉は『追想の愛』なんだって。なんだか、ふわっとしてて好きかも……。私は私の好きなものを、好きなように感じていたいな。今日はどんな服着ようかな〜♪"
    }
  ],
  "4-27": [
    {
      "id": "yuko",
      "name": "ゆこ",
      "month": 4,
      "day": 27,
      "flowerName": "アカシア",
      "mbti": "INFJ",
      "enneagram": "4w5",
      "motif": "犬",
      "dialogueBadge": "内省の花枝",
      "themeColor": "#d97706",
      "accentColor": "#fde047",
      "imageFileName": "yuko.png",
      "comment": "4月27日……私の誕生花はアカシア。花言葉は『友情』……なんだって。……そういうものを、私は簡単には信じられないけど。でも、大切にしたいと思えるものがあるなら……ちゃんと言葉にしておきたいな。"
    }
  ],
  "5-5": [
    {
      "id": "miriya",
      "name": "みりや",
      "month": 5,
      "day": 5,
      "flowerName": "スズラン",
      "mbti": "ISTJ",
      "enneagram": "6w5",
      "motif": "犬",
      "dialogueBadge": "鈴蘭の番犬",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "miriya.png",
      "comment": "5月5日生まれです。私の誕生花はスズラン。花言葉は『幸福の再来』です。……何があっても、動じる必要はありません。今日もやるべきことを、きちんとやりましょう。……あの、料理が冷めますので、早く召し上がってください。"
    }
  ],
  "5-20": [
    {
      "id": "shiori",
      "name": "しおり",
      "month": 5,
      "day": 20,
      "flowerName": "カタバミ",
      "mbti": "ESFJ",
      "enneagram": "2w1",
      "motif": "猫",
      "dialogueBadge": "輝心の片喰",
      "themeColor": "#d97706",
      "accentColor": "#fde047",
      "imageFileName": "shiori.png",
      "comment": "5月20日、私と同じ誕生日だね！カタバミの花言葉は『喜び』『輝く心』なんだって！　なんだか元気が出るね！　困ったことがあったら遠慮しないで言ってね？　もう、みんな放っておけないんだから！"
    }
  ],
  "5-27": [
    {
      "id": "akari",
      "name": "あかり",
      "month": 5,
      "day": 27,
      "flowerName": "マトリカリア",
      "mbti": "ESFP",
      "enneagram": "7w6",
      "motif": "アライグマ",
      "dialogueBadge": "笑顔の灯火",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "akari.png",
      "comment": "5月27日はあたしの誕生日！　誕生花はマトリカリアで、花言葉は『集う喜び』なんだって！　えへへ、みんなで集まって笑うのって楽しいよね！　……泣きたい日だって、笑ってたらなんとかなるよ！"
    }
  ],
  "6-6": [
    {
      "id": "uchu",
      "name": "うちゅう",
      "month": 6,
      "day": 6,
      "flowerName": "アストランティア",
      "mbti": "ESTP",
      "enneagram": "9w8",
      "socionics": "SEE",
      "motif": "猫",
      "dialogueBadge": "星読みの宇宙花",
      "themeColor": "#6366f1",
      "accentColor": "#c7d2fe",
      "imageFileName": "uchu.png",
      "comment": "6月6日生まれ〜。俺の誕生花はアストランティア。花言葉は『星に願いを』……だってさ。へぇ〜。まあ、俺は願うより宇宙について調べてるほうが楽しいけど。……で、今日何するん？　俺はここで宇宙の動画見ながら寝るけど"
    },
    {
      "id": "hoshi",
      "name": "ほし",
      "month": 6,
      "day": 6,
      "flowerName": "ペンステモン",
      "mbti": "ENFJ",
      "enneagram": "2w1",
      "socionics": "EIE",
      "motif": "猫",
      "dialogueBadge": "願い星の筆草",
      "themeColor": "#ec4899",
      "accentColor": "#fbcfe8",
      "imageFileName": "hoshi.png",
      "comment": "6月6日生まれ。僕の誕生花はペンステモン。花言葉は『あなたに見とれています』だって。……星空を見ていると、時間を忘れてしまうんやわ〜。あの広い空を眺めちょると、誰かのことを想う気持ちも、少し分かる気がする"
    }
  ],
  "6-15": [
    {
      "id": "akira",
      "name": "あきら",
      "month": 6,
      "day": 15,
      "flowerName": "カーネーション",
      "mbti": "ENTJ",
      "enneagram": "5w6",
      "motif": "牧羊犬",
      "dialogueBadge": "勝利の牧羊犬",
      "themeColor": "#e11d48",
      "accentColor": "#fca5a5",
      "imageFileName": "akira.png",
      "comment": "6月15日。オレの誕生花はカーネーション。花言葉は『無垢で深い愛』か。……くだらないな。オレは結果で示す。それだけだ。誰に何を言われようが、最後に勝っていれば問題ない。"
    }
  ],
  "6-28": [
    {
      "id": "shogo",
      "name": "しょうご",
      "month": 6,
      "day": 28,
      "flowerName": "ゼラニウム",
      "mbti": "ENFJ",
      "enneagram": "2w3",
      "motif": "ボタンインコ",
      "dialogueBadge": "祝祭の花冠",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "shogo.png",
      "comment": "6月28日は僕の誕生日！　誕生花はゼラニウムで、花言葉は『尊敬』！　こういう日はさ、みんなでお祝いできたら最高じゃない？　一人で祝うより、みんなで笑ったほうが絶対楽しいよ！"
    }
  ],
  "7-4": [
    {
      "id": "enishi",
      "name": "えにし",
      "month": 7,
      "day": 4,
      "flowerName": "モクレン",
      "mbti": "ISTP",
      "enneagram": "5w6",
      "motif": "イタチ",
      "dialogueBadge": "無言の画工",
      "themeColor": "#7c3aed",
      "accentColor": "#ddd6fe",
      "imageFileName": "enishi.png",
      "comment": "7月4日。モクレンの花言葉は『自然への愛』。……まあ、花は好きやから描いてるだけやけど。意味とか、別にいらないやろ。……描きたいから描く。それで十分。"
    }
  ],
  "7-22": [
    {
      "id": "rin",
      "name": "りん",
      "month": 7,
      "day": 22,
      "flowerName": "リアトリス",
      "mbti": "ISFJ",
      "enneagram": "9w1",
      "socionics": "ESI",
      "motif": "ヤギ",
      "dialogueBadge": "優しき麒麟草",
      "themeColor": "#9333ea",
      "accentColor": "#e9d5ff",
      "imageFileName": "rin.png",
      "comment": "7月22日生まれだよ〜。リアトリスの花言葉は『向上心』なんだって。焦らなくても大丈夫。少しずつでも前に進めたら、それでいいと思うよ。きっといいことあるよ〜。……私も、みんなが元気でいられるように、そっと応援してるね"
    }
  ],
  "7-28": [
    {
      "id": "satsuki",
      "name": "さつき",
      "month": 7,
      "day": 28,
      "flowerName": "ツユクサ",
      "mbti": "INTJ",
      "enneagram": "5w6",
      "motif": "フクロウ",
      "dialogueBadge": "敬意の露草",
      "themeColor": "#0284c7",
      "accentColor": "#7dd3fc",
      "imageFileName": "satsuki.png",
      "comment": "7月28日生まれ。ツユクサの花言葉は『尊敬』『変わらぬ心』。……悪くないですね。変化を好むわけではありませんが、守るべきものまで変えてしまう必要はないでしょう。知識を蓄え、危険を避け、安定を維持する。それが僕の役目です。"
    }
  ],
  "7-30": [
    {
      "id": "kotori",
      "name": "ことり",
      "month": 7,
      "day": 30,
      "flowerName": "ベロペロネ",
      "mbti": "INTP",
      "enneagram": "7w8",
      "socionics": "ILI",
      "motif": "カナリア",
      "dialogueBadge": "お茶目な陽だまり",
      "themeColor": "#ea580c",
      "accentColor": "#fdba74",
      "imageFileName": "kotori.png",
      "comment": "7月30日生まれ〜。ベロペロネの花言葉は『ひょうきん』やてさ。……まあ、オレっぽかね。勉強？　今さらやったところで追いつけんやろ。そいぎ、楽なほう行こうぜ〜。"
    }
  ],
  "8-2": [
    {
        "id": "toki",
        "name": "とき",
        "month": 8,
        "day": 2,
        "flowerName": "バショウ",
        "mbti": "ESFP",
        "socionics": "SEE",
        "enneagram": "6w7",
        "motif": "鳥",
        "dialogueBadge": "礼節剛健",
        "themeColor": "#16a34a",
        "accentColor": "#dcfce7",
        "imageFileName": "toki.png",
        "comment": "8月2日はオレの誕生日だ！バショウの花言葉は『燃える思い』！穏やかに笑ってっけど礼儀と上下関係には厳しくいくぞ！運動で培った熱い魂と信念は絶対に曲げねぇ！今日もグラウンドで全力疾走だ！"
    }
],
  "8-5": [
    {
      "id": "toro",
      "name": "とろ",
      "month": 8,
      "day": 5,
      "flowerName": "オシロイバナ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w6",
      "motif": "蜘蛛",
      "dialogueBadge": "夕暮れの狙撃手",
      "themeColor": "#ec4899",
      "accentColor": "#fbcfe8",
      "imageFileName": "toro.png",
      "comment": "8月5日……オシロイバナ。夕方涼しくなってから咲く花だ。花言葉は『臆病』だの『あなたを想う』だの……まあ、言葉なんざどうでもいい。身体動かして弓引いてる時が一番落ち着く。……何見てんだよ。邪魔すんならあっち行け。見学だけなら……黙って座ってろ。"
    }
  ],
  "8-7": [
    {
      "id": "zakuro",
      "name": "ざくろ",
      "month": 8,
      "day": 7,
      "flowerName": "ザクロ",
      "mbti": "INTJ",
      "enneagram": "5w6",
      "motif": "もやし",
      "dialogueBadge": "失敗ログの果実",
      "themeColor": "#be185d",
      "accentColor": "#fda4af",
      "imageFileName": "zakuro.png",
      "comment": "8月7日……ザクロの花言葉は『成熟した美しさ』やて。……僕には、あんまり関係ない気ぃするけど。……いや、待って。今までの失敗も含めて考えたら、少しずつ変わってきた可能性は……あるんやろか。"
    }
  ],
  "8-13": [
    {
      "id": "hitomi",
      "name": "ひとみ",
      "month": 8,
      "day": 13,
      "flowerName": "サギソウ",
      "mbti": "INFJ",
      "enneagram": "5w4",
      "motif": "犬",
      "dialogueBadge": "白銀の舞姫",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "hitomi.png",
      "comment": "8月13日…私と同じお誕生日ですね。サギソウの花言葉は……『清純』『夢でもあなたを想う』。白い花は、空へ向かう鳥のようにも見えるでしょう。けれど、その姿は飛翔そのものではなく、飛翔を記憶する形なのかもしれません。……そういうものを、私は美しいと思います"
    }
  ],
  "8-16": [
    {
      "id": "ketsui",
      "name": "けつい",
      "month": 8,
      "day": 16,
      "flowerName": "ペチュニア",
      "mbti": "ISTP",
      "enneagram": "9w8",
      "motif": "海老",
      "dialogueBadge": "海原の船長",
      "themeColor": "#c026d3",
      "accentColor": "#f5d0fe",
      "imageFileName": "ketsui.png",
      "comment": "8月16日生まれじゃ。わしの誕生花はペチュニア。花言葉は『心の安らぎ』じゃ。まあ、船の上で風に当たっとる時が一番落ち着くんよ。……ほいじゃ、今日も安全第一でいこうや。"
    }
  ],
  "8-17": [
    {
      "id": "nui",
      "name": "ご褒美",
      "month": 8,
      "day": 17,
      "flowerName": "ネムノキ",
      "mbti": "INFP",
      "enneagram": "4w3",
      "socionics": "IEI",
      "motif": "豚",
      "dialogueBadge": "夢見の豚骨",
      "themeColor": "#db2777",
      "accentColor": "#fbcfe8",
      "imageFileName": "nui.png",
      "comment": "8月17日生まれだゾ！　拙者の誕生花はネムノキ！　花言葉は『歓喜』だゾ〜！　ツインテールをわしゃわしゃできる喜び……これぞまさに歓喜だゾ！　さあ、お祝いにわしゃわしゃさせるんだゾ！　……え？　嫌？　それもまたご褒美だゾ♡"
    }
  ],
  "8-19": [
    {
      "id": "miika",
      "name": "みいか",
      "month": 8,
      "day": 19,
      "flowerName": "キュウリ",
      "mbti": "ESFP",
      "enneagram": "7w6",
      "motif": "馬",
      "dialogueBadge": "疾走の胡瓜",
      "themeColor": "#65a30d",
      "accentColor": "#bef264",
      "imageFileName": "miika.png",
      "comment": "8月19日生まれ！　誕生花はキュウリだって！　花言葉は『洒落』！　いいじゃん、面白そうじゃん！　考えてる暇があったら走ろうよ！　勝負するなら、もちろん勝つまでやるからね！　……え、キュウリ食べる？　いいよ、走りながら食べよ！"
    }
  ],
  "8-23": [
    {
        "id": "usagi",
        "name": "うさぎ",
        "month": 8,
        "day": 23,
        "flowerName": "ボダイジュ",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "3w2",
        "motif": "うさぎ",
        "dialogueBadge": "おせっかい世話焼き少女",
        "themeColor": "#ec4899",
        "accentColor": "#fce7f3",
        "imageFileName": "usagi.png",
        "comment": "8月23日！あたしの誕生日よ！ボダイジュの花言葉は『夫婦愛』『結ばれる愛』！ちょっと、背が低いからって子ども扱いしないでよね、あんた！家庭的なお菓子作りも裁縫も完璧なんだから！誰かに貰った宝物はずっと覚えてるし……ほら、気軽に声かけてきなさいよ！"
    }
],
  "9-7": [
    {
      "id": "asuga",
      "name": "えいじ",
      "month": 9,
      "day": 7,
      "flowerName": "オレンジ",
      "mbti": "ESTP",
      "enneagram": "8w7",
      "socionics": "SEE",
      "motif": "シャチ",
      "dialogueBadge": "筋肉の果実",
      "themeColor": "#ea580c",
      "accentColor": "#fdba74",
      "imageFileName": "eiji.png",
      "comment": "9月7日生まれ！　誕生花はオレンジだ！　花言葉は『純粋』！　いいじゃねえか！　筋肉も心も純粋が一番だ！　プロテイン飲んで、筋トレして、汗を流す！　これが俺の生き様だァ！！　……おっ、汗入りポカリ飲むか！？"
    }
  ],
  "9-8": [
    {
      "id": "maria",
      "name": "まりあ",
      "month": 9,
      "day": 8,
      "flowerName": "ゼフィランサス",
      "mbti": "ISFJ",
      "enneagram": "2w1",
      "motif": "猫",
      "dialogueBadge": "雨後の清浄",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "maria.png",
      "comment": "9月8日は私のお誕生日です。誕生花はゼフィランサス。花言葉は『期待』です。神様がお与えくださった今日という日にも、きっと意味があります。……皆様にも、どうか良いことがありますように。"
    }
  ],
  "9-24": [
    {
      "id": "kahoko",
      "name": "かほこ",
      "month": 9,
      "day": 24,
      "flowerName": "ブドウ",
      "mbti": "ISTJ",
      "enneagram": "1w9",
      "motif": "水牛",
      "dialogueBadge": "理論の葡萄",
      "themeColor": "#6d28d9",
      "accentColor": "#c4b5fd",
      "imageFileName": "kahoko.png",
      "comment": "9月24日生まれ。誕生花はブドウです。花言葉は『思いやり』『信頼』。……なるほど。合理性だけでは人間関係は成立しない、ということですね。興味深いです。もっとも、思いやりも信頼も、相互に矛盾しない形で成立している必要がありますが"
    }
  ],
  "9-28": [
    {
      "id": "shizuka",
      "name": "しずか",
      "month": 9,
      "day": 28,
      "flowerName": "フジバカマ",
      "mbti": "ISTJ",
      "enneagram": "6w5",
      "motif": "ハイイロテントウ",
      "dialogueBadge": "秋草の旅人",
      "themeColor": "#be185d",
      "accentColor": "#f472b6",
      "imageFileName": "shizuka.png",
      "comment": "9月28日。フジバカマの花言葉は『ためらい』……。……私には、少し似合わない気がするわ。間違えるくらいなら、最初から正解していればいいもの。"
    }
  ],
  "10-11": [
    {
      "id": "matoi",
      "name": "まとい",
      "month": 10,
      "day": 11,
      "flowerName": "コリウス",
      "mbti": "ISTP",
      "enneagram": "6w5",
      "motif": "タカ",
      "dialogueBadge": "錦秋の纏い人",
      "themeColor": "#991b1b",
      "accentColor": "#f87171",
      "imageFileName": "matoi.png",
      "comment": "10月11日。コリウスの花言葉は『善良な家風』だべ。……家のことは家のことだ。俺は俺でやる。誰かに合わせて生きるつもりはねぇ。……投げ縄なら、教えてやってもいいけどな。"
    }
  ],
  "10-23": [
    {
      "id": "rui",
      "name": "るい",
      "month": 10,
      "day": 23,
      "flowerName": "ルリマツリ",
      "mbti": "ESFJ",
      "enneagram": "2w3",
      "motif": "雉",
      "dialogueBadge": "青空の微笑み",
      "themeColor": "#0284c7",
      "accentColor": "#7dd3fc",
      "imageFileName": "rui.png",
      "comment": "10月23日は僕の誕生日なんさ！　ルリマツリの花言葉は『いつも明るい』だって！　いいじゃん、僕にぴったりだろ！　……料理？　もちろん任せろ！　……あっ、チーズ焦げた！！"
    }
  ],
  "10-25": [
    {
      "id": "aiko",
      "name": "あいこ",
      "month": 10,
      "day": 25,
      "flowerName": "ミセバヤ",
      "mbti": "ENTJ",
      "enneagram": "8w7",
      "socionics": "SLE",
      "motif": "猫",
      "dialogueBadge": "静穏の花守",
      "themeColor": "#be185d",
      "accentColor": "#fda4af",
      "imageFileName": "aiko.png",
      "comment": "10月25日生まれだよ！　ミセバヤの花言葉は『大切なあなた』。……へえ、いいじゃねえか。大事なもんは大事にする。それでいいんだよ。失敗したって？　まあ、しゃあねえだろ。次にどうするか考えりゃいいんだよ"
    }
  ],
  "10-26": [
    {
      "id": "jinya",
      "name": "じんや",
      "month": 10,
      "day": 26,
      "flowerName": "キャットテール",
      "mbti": "INTP",
      "enneagram": "5w4",
      "motif": "シマウマ",
      "dialogueBadge": "曖昧な猫尾",
      "themeColor": "#dc2626",
      "accentColor": "#fca5a5",
      "imageFileName": "jinya.png",
      "comment": "10月26日生まれ。誕生花はキャットテール……花言葉は『思いを秘める』、らしい。まあ、別にいいんじゃない？　俺が何考えてるかなんて、わざわざ説明する必要もないだろ。……配信？　NANAって名前の由来？　バナナ。……そこは別に秘めてないけど"
    }
  ],
  "10-30": [
    {
      "id": "hikari",
      "name": "ひかり",
      "month": 10,
      "day": 30,
      "flowerName": "ロベリア",
      "mbti": "ISTJ",
      "enneagram": "6w5",
      "motif": "レッサーパンダ",
      "dialogueBadge": "群青の灯火",
      "themeColor": "#1d4ed8",
      "accentColor": "#93c5fd",
      "imageFileName": "hikari.png",
      "comment": "10月30日。ロベリアの花言葉は『悪意』……。……へえ。ずいぶん正直な花じゃん。人間だって、みんながみんな善人じゃないでしょ。……だから私は、簡単には信じない。嘘くらい、見ればわかるし。"
    }
  ],
  "11-2": [
    {
      "id": "yamato",
      "name": "やまと",
      "month": 11,
      "day": 2,
      "flowerName": "ルピナス",
      "mbti": "ISTP",
      "enneagram": "3w4",
      "motif": "キツネ",
      "dialogueBadge": "天昇の旗手",
      "themeColor": "#7c3aed",
      "accentColor": "#ddd6fe",
      "imageFileName": "yamato.png",
      "comment": "11月2日生まれだ。ルピナスの花言葉は『想像力』。……まあ、必要なら使う。かき氷食うのを邪魔されんけりゃ、あとは好きにしていいさ。……寒い？　俺は平気だ。"
    }
  ],
  "11-5": [
    {
      "id": "hotomo",
      "name": "ほとも",
      "month": 11,
      "day": 5,
      "flowerName": "ペンタス",
      "mbti": "ISFP",
      "enneagram": "9w8",
      "motif": "芋虫",
      "dialogueBadge": "希望の星花",
      "themeColor": "#be185d",
      "accentColor": "#f472b6",
      "imageFileName": "hotomo.png",
      "comment": "11月5日生まれ。ペンタスの花言葉は『希望がかなう』だって。まあ、いいんじゃない？　……今日は散歩して、漬物作って、里芋食べる予定だけど。希望って、そういうので十分じゃない？"
    }
  ],
  "11-11": [
    {
      "id": "tomoki",
      "name": "ともき",
      "month": 11,
      "day": 11,
      "flowerName": "カラスウリ",
      "mbti": "ESTJ",
      "enneagram": "1w9",
      "motif": "犬",
      "dialogueBadge": "機構の犬男",
      "themeColor": "#c2410c",
      "accentColor": "#fed7aa",
      "imageFileName": "tomoki.png",
      "comment": "11月11日。カラスウリの花言葉は『良い知らせ』だ。……まあ、仕組みがちゃんと動いて、必要な結果が出るならそれでいい。動かないならオレが動かす。"
    }
  ],
  "11-16": [
    {
      "id": "fukumi",
      "name": "ふくみ",
      "month": 11,
      "day": 16,
      "flowerName": "クッカバラ",
      "mbti": "ISTP",
      "enneagram": "5w6",
      "motif": "ペンギン",
      "dialogueBadge": "懐疑の葉陰",
      "themeColor": "#047857",
      "accentColor": "#6ee7b7",
      "imageFileName": "fukumi.png",
      "comment": "11月16日。クッカバラの花言葉は……『壮大な心』、だそう。まあ、そういうことにしておけばいいんじゃないか。少なくとも、それを否定できるだけの事実はないし。……だからといって、僕がそういう人間だと証明されたわけでもないけど"
    }
  ],
  "11-27": [
    {
      "id": "yasashi",
      "name": "やさし",
      "month": 11,
      "day": 27,
      "flowerName": "ハボタン",
      "mbti": "ESFJ",
      "enneagram": "9w1",
      "motif": "消しゴム",
      "dialogueBadge": "包容のぬくもり",
      "themeColor": "#7c3aed",
      "accentColor": "#ddd6fe",
      "imageFileName": "yasashi.png",
      "comment": "11月27日、僕の誕生花はハボタン。花言葉は『祝福』だよ。……誰かの間違いを消してあげるだけじゃなくて、ちゃんと次に進めるようにしてあげたいな。無理しなくても、大丈夫だからね。"
    }
  ],
  "12-8": [
    {
      "id": "suzu",
      "name": "すず",
      "month": 12,
      "day": 8,
      "flowerName": "ウィンターコスモス",
      "mbti": "INTJ",
      "enneagram": "1w9",
      "motif": "猫",
      "dialogueBadge": "冬日和の調べ",
      "themeColor": "#d97706",
      "accentColor": "#fde047",
      "imageFileName": "suzu.png",
      "comment": "12月8日。ウィンターコスモスの花言葉は『もう一度愛します』……。……そういう言葉、簡単には言えへん。でも……決めたことは守る。ええ子にしてなさいって言われてきたから。……今も、それだけは変わらへん。"
    }
  ],
  "12-13": [
    {
      "id": "koume",
      "name": "こうめ",
      "month": 12,
      "day": 13,
      "flowerName": "チランジア",
      "mbti": "ESTP",
      "enneagram": "8w7",
      "motif": "ルリビタキ",
      "dialogueBadge": "不屈の仙女",
      "themeColor": "#059669",
      "accentColor": "#6ee7b7",
      "imageFileName": "koume.png",
      "comment": "12月13日生まれ。チランジアの花言葉は『不屈』。……いい言葉だろう？　こうであるなら、そうなるべきなのだよ。そうなるために必要なものがあるなら、揃えればいい。願うだけで終わらせるつもりはない。成立する条件を整えればいいだろ。"
    }
  ],
  "12-15": [
    {
      "id": "hakomo",
      "name": "はこも",
      "month": 12,
      "day": 15,
      "flowerName": "モンステラ",
      "mbti": "INTP",
      "enneagram": "9w8",
      "motif": "箱",
      "dialogueBadge": "光を導く策士",
      "themeColor": "#047857",
      "accentColor": "#34d399",
      "imageFileName": "hakomo.png",
      "comment": "12月15日。モンステラの花言葉は『嬉しい便り』……らしい。……そうなんだ。まあ、良い知らせなら……別に悪くないね。ぼく？　……どうだろ。今日も時間に流されてるだけだと思う。"
    }
  ],
  "12-20": [
    {
      "id": "rei",
      "name": "れい",
      "month": 12,
      "day": 20,
      "flowerName": "カトレア",
      "mbti": "ENFJ",
      "enneagram": "1w9",
      "motif": "カラス",
      "dialogueBadge": "蘭の女王",
      "themeColor": "#9333ea",
      "accentColor": "#f0abfc",
      "imageFileName": "rei.png",
      "comment": "12月20日生まれです！　私の誕生花はカトレア。花言葉は『優美』。ふふっ、私らしい……と言いたいところだけど、こういう日は素直にお祝いしてもらおうかな。……あ、ケチャップは持ってきたよ！"
    }
  ],
  "12-25": [
    {
      "id": "miwa",
      "name": "みわ",
      "month": 12,
      "day": 25,
      "flowerName": "ポインセチア",
      "mbti": "ENFJ",
      "enneagram": "2w3",
      "motif": "トナカイ",
      "dialogueBadge": "聖夜の祝祭",
      "themeColor": "#dc2626",
      "accentColor": "#fca5a5",
      "imageFileName": "miwa.png",
      "comment": "メリークリスマス！そして12月25日、私と同じお誕生日おめでとう！ポインセチアの花言葉は『祝福』ばい〜！　クリスマス生まれって、なんだか特別な感じがするよね♪　みんなのこともいっぱい祝福したいな！"
    }
  ],
  "12-29": [
    {
      "id": "mikina",
      "name": "みきな",
      "month": 12,
      "day": 29,
      "flowerName": "ホオズキ",
      "mbti": "ENFP",
      "enneagram": "6w5",
      "motif": "猫",
      "dialogueBadge": "心の平安",
      "themeColor": "#ea580c",
      "accentColor": "#fed7aa",
      "imageFileName": "mikina.png",
      "comment": "12月29日。ホオズキの花言葉は『心の平安』……だって。まあ、平和が一番じゃない？　……嫌なこと？　うん、まあ……考える前に逃げちゃえばいいし。……別に、逃げたことなんてないけど。"
    },
    {
      "id": "makishi",
      "name": "まきし",
      "month": 12,
      "day": 29,
      "flowerName": "ナンテン",
      "mbti": "ENFP",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "難を転がす猫",
      "themeColor": "#dc2626",
      "accentColor": "#fca5a5",
      "imageFileName": "makishi.png",
      "comment": "12月29日は僕とみきなの誕生日！　誕生花はナンテンで、花言葉は『幸せ』だって！　いいじゃん！　嫌なことがあっても、ぜーんぶ転がして幸せにしちゃえばいいんだよ！　今日も楽しくいこうぜ♪"
    }
  ],
  "5-19": [
    {
      "id": "miharu",
      "name": "みはる",
      "month": 5,
      "day": 19,
      "flowerName": "サツキ",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "自由気ままなお絵描き猫",
      "themeColor": "#f43f5e",
      "accentColor": "#fb7185",
      "imageFileName": "miharu.png",
      "comment": "わぁ〜い！5月19日！みはるとおんなじ誕生日だぁ！サツキの花ってピンクで超かわいいよね！勉強とか宿題なんて置いといて、今日は思いっきりお絵描きしたり遊んじゃお！お誕生日おめでとう〜！"
    }
  ],
  "9-19": [
    {
      "id": "nano",
      "name": "なの",
      "month": 9,
      "day": 19,
      "flowerName": "サルビア",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "6w5",
      "motif": "カモメ",
      "dialogueBadge": "心優しいカモメ",
      "themeColor": "#ef4444",
      "accentColor": "#f87171",
      "imageFileName": "nano.png",
      "comment": "あ、あのね……！9月19日、なのとおそろいのお誕生日なの……！サルビアの赤いお花、あったかくて大好きなんだ。ちょっとドジしちゃうこともあるけど、大切な思い出とやさしさをぎゅって握りしめて歩いていこうね……！おめでとう！"
    }
  ],
  "1-2": [
    {
      "id": "mao",
      "name": "まお",
      "month": 1,
      "day": 2,
      "flowerName": "ロウバイ",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "9w1",
      "motif": "猫",
      "dialogueBadge": "奥ゆかしいラーメン好き猫",
      "themeColor": "#facc15",
      "accentColor": "#fef08a",
      "imageFileName": "mao.png",
      "comment": "あ……1月2日、まおと同じ誕生日ですね。ロウバイの花言葉は『慈愛』……黄色くて、あったかい匂いがしてほっとします。今日はおいしいラーメンでも食べて、のんびり過ごしてくださいね。おめでとうございます……！"
    }
  ],
  "3-21": [
    {
      "id": "koyuki",
      "name": "こゆき",
      "month": 3,
      "day": 21,
      "flowerName": "イカリソウ",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "犬",
      "dialogueBadge": "穏やかな反骨犬",
      "themeColor": "#c084fc",
      "accentColor": "#e879f9",
      "imageFileName": "koyuki.png",
      "comment": "3月21日……こゆきと同じ誕生日。イカリソウの『君を離さない』って言葉……ちょっと重いけど、でも自分の大切な気持ちは誰にも邪魔されたくないよね。無理にみんなに合わせなくていいと思うの。自分のままでいてね。おめでとう。"
    }
  ],
  "12-2": [
    {
      "id": "mikari",
      "name": "みかり",
      "month": 12,
      "day": 2,
      "flowerName": "サイネリア",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "6w7",
      "motif": "人間",
      "dialogueBadge": "強気で根暗な小2女子",
      "themeColor": "#3b82f6",
      "accentColor": "#60a5fa",
      "imageFileName": "mikari.png",
      "comment": "ふん、12月2日！あたしと同じ誕生日じゃない！サイネリアの『いつも快活』って……あたし別にいつも元気なわけじゃないし！暗いとこ大嫌いだし！でも……まあ、あんたが生まれた特別な日なんだから、今日くらいは文句言わずに祝ってあげるわよ！"
    }
  ],
  "10-21": [
    {
      "id": "mie",
      "name": "みえ",
      "month": 10,
      "day": 21,
      "flowerName": "ワイルドストロベリー",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "モルモット",
      "dialogueBadge": "度胸満点モルモット",
      "themeColor": "#f87171",
      "accentColor": "#ef4444",
      "imageFileName": "mie.png",
      "comment": "やったー！10月21日！わたしとおんなじお誕生日だねっ！ワイルドストロベリーの実って甘酸っぱくて超おいしいんだよ〜！怖いものなんてなーんにもないから、今日も元気いっぱい大冒険しちゃおーっ！おめでとうー！"
    }
  ],
  "10-5": [
    {
      "id": "isuzu",
      "name": "いすず",
      "month": 10,
      "day": 5,
      "flowerName": "パイナップルリリー",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "2w1",
      "motif": "チワワ",
      "dialogueBadge": "友達思いチワワ",
      "themeColor": "#84cc16",
      "accentColor": "#a3e635",
      "imageFileName": "isuzu.png",
      "comment": "10月5日！いすずとおんなじお誕生日ですね！パイナップルリリーみたいに、わたし、もっともっとがんばって立派になって、あなたにいっぱい笑ってもらいたいんです！一緒にすてきな1年にしましょうね！おめでとうございます！"
    }
  ],
  "11-15": [
    {
      "id": "ron",
      "name": "ろん",
      "month": 11,
      "day": 15,
      "flowerName": "チョコレートコスモス",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "1w9",
      "motif": "ヤマネ",
      "dialogueBadge": "厳格論理ヤマネ",
      "themeColor": "#831843",
      "accentColor": "#9d174d",
      "imageFileName": "ron.png",
      "comment": "11月15日。僕と同じ誕生日だね。曖昧で中途半端な基準は許容できないけれど、君が生まれたという事実とチョコレートコスモスの『移り変わらぬ気持ち』には明確な論理性がある。壊れかけの妥協はやめて、すべてを正しく再構築していこう。おめでとう。"
    }
  ],
  "11-29": [
    {
      "id": "homare",
      "name": "ほまれ",
      "month": 11,
      "day": 29,
      "flowerName": "ベゴニア",
      "mbti": "INTP",
      "socionics": "ILE",
      "enneagram": "9w8",
      "motif": "カエル",
      "dialogueBadge": "お気楽頭脳派カエル",
      "themeColor": "#fb7185",
      "accentColor": "#f43f5e",
      "imageFileName": "homare.png",
      "comment": "ケロ〜、11月29日！ぼくと一緒の誕生日じゃ！難しい計算とか世間のルールはよう分からんけど、積み木とおやつには自信があるんよね！ベゴニアの『親切』みたいに、のんびり楽しく探究しよ〜！おめでとー！"
    }
  ],
  "4-29": [
    {
      "id": "haruno",
      "name": "はるの",
      "month": 4,
      "day": 29,
      "flowerName": "フクシア",
      "mbti": "ENFJ",
      "socionics": "LSE",
      "enneagram": "1w2",
      "motif": "猫",
      "dialogueBadge": "頼れる小学生リーダー猫",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "haruno.png",
      "comment": "4月29日！私と同じ誕生日ね！フクシアの『上品な趣味』って素敵でしょ？みんなをまとめるのは大変だけど、大切な人のためならいくらでも頑張れちゃう！今日くらいは私がしっかりお祝いしてあげるから、甘えていいわよ！おめでとう！"
    }
  ],
  "6-27": [
    {
      "id": "kokoro",
      "name": "こころ",
      "month": 6,
      "day": 27,
      "flowerName": "カラー",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w3",
      "motif": "犬",
      "dialogueBadge": "甘えん坊ムードメーカー",
      "themeColor": "#0ea5e9",
      "accentColor": "#38bdf8",
      "imageFileName": "kokoro.png",
      "comment": "わぁ〜い！6月27日！ぼくと同じ誕生日だぁ！カラーのお花みたいにシュッとしてカッコよくなりたいけど、本当は寂しがり屋で甘えん坊なんだ……えへへ。今日はいっしょにかけっこして、いっぱい笑おうね！おめでとうー！"
    }
  ],
  "6-19": [
    {
      "id": "ibara",
      "name": "いばら",
      "month": 6,
      "day": 19,
      "flowerName": "バラ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "8w7",
      "motif": "薔薇",
      "dialogueBadge": "誇り高きお嬢様",
      "themeColor": "#e11d48",
      "accentColor": "#f43f5e",
      "imageFileName": "ibara.png",
      "comment": "オーッホッホ！6月19日、わたくしと同じ誕生日ですわね！バラの花言葉は『誇り』そして『高貴』！わたくしに並び立つに相応しい特別な日ですこと！気に食わない者は蹴散らして、わたくしのように堂々と咲き誇りなさい！お祝い申し上げますわ！"
    }
  ],
  "7-7": [
    {
      "id": "kurumi",
      "name": "くるみ",
      "month": 7,
      "day": 7,
      "flowerName": "アベリア",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "犬",
      "dialogueBadge": "直感と境界の観察犬",
      "themeColor": "#f472b6",
      "accentColor": "#fb7185",
      "imageFileName": "kurumi.png",
      "comment": "7月7日。わたしと同じ誕生日。アベリアの『強運』……感情に触れるのはちょっと苦手やけど、役割と境界線を把握していれば世界はクリアに見えるよ。君が自分の直感を信じて進めるなら、それが一番の正解。おめでとう。"
    }
  ],
  "10-4": [
    {
      "id": "konagi",
      "name": "こなぎ",
      "month": 10,
      "day": 4,
      "flowerName": "エノコログサ",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "8w7",
      "motif": "鳥",
      "dialogueBadge": "猪突猛進ヒーロー",
      "themeColor": "#84cc16",
      "accentColor": "#a3e635",
      "imageFileName": "konagi.png",
      "comment": "うおーっ！10月4日！オレと同じ誕生日じゃねーか！エノコログサってねこじゃらしだけど、オレは戦隊ヒーローになりてぇんだ！思ったことはハッキリ言うのがオレの正義！いくぞ、今日はお前が主役のバースデー大作戦だッ！おめでとー！"
    }
  ],
  "8-11": [
    {
      "id": "mikuri",
      "name": "みくり",
      "month": 8,
      "day": 11,
      "flowerName": "デュランタ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "ヒバリ",
      "dialogueBadge": "メタ視点の不思議少女",
      "themeColor": "#8b5cf6",
      "accentColor": "#a78bfa",
      "imageFileName": "mikuri.png",
      "comment": "……あ、8月11日。わたしと同じ誕生日。あまり会えないのに、見つけてくれてラッキーかもね。デュランタの花言葉は『あなたを見守る』……記憶って何年経っても消えない構造を持ってるの。遠くから全体のログを見渡しながら、君のことを静かに観測してるよ。おめでとう。"
    }
  ],
  "1-8": [
    {
      "id": "yukino",
      "name": "ゆきの",
      "month": 1,
      "day": 8,
      "flowerName": "マンサク",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "9w8",
      "motif": "犬",
      "dialogueBadge": "真顔のおっとりパグ犬",
      "themeColor": "#eab308",
      "accentColor": "#facc15",
      "imageFileName": "yukino.png",
      "comment": "……1月8日。わたしと同じ誕生日。（真顔）……怒ってないよ、いつもの顔だから。マンサクの花言葉は『ひらめき』。争いは嫌いだから、言われたらちゃんと裏方で支えるね。おめでとう……本気でお祝いしてるよ。"
    }
  ],
  "12-27": [
    {
      "id": "tokoro",
      "name": "ところ",
      "month": 12,
      "day": 27,
      "flowerName": "ヤブコウジ",
      "mbti": "ISTJ",
      "socionics": "SLI",
      "enneagram": "6w5",
      "motif": "メジロ",
      "dialogueBadge": "几帳面なかくれんぼ名人",
      "themeColor": "#dc2626",
      "accentColor": "#ef4444",
      "imageFileName": "tokoro.png",
      "comment": "12月27日……僕と同じ誕生日ですね。ヤブコウジの花言葉は『明日の幸福』。几帳面に整理整頓して、目立たず静かに隠れるのが得意です。派手なことはできないけれど、君の毎日に小さな幸せが届きますように。おめでとうございます。"
    }
  ],
  "2-11": [
    {
      "id": "fuki",
      "name": "ふき",
      "month": 2,
      "day": 11,
      "flowerName": "オオイヌノフグリ",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "9w1",
      "motif": "フェネック",
      "dialogueBadge": "愛され天然フェネック",
      "themeColor": "#38bdf8",
      "accentColor": "#7dd3fc",
      "imageFileName": "fuki.png",
      "comment": "えへへ、2月11日！ぼくと同じ誕生日なんだね！オオイヌノフグリの青い花、ちっちゃくて大好き。嫌なことがあっても、にこにこ笑顔でいればきっとやさしい気持ちになれるって信じてるんだ。思い出を大切にしようね。おめでとー！"
    }
  ],
  "8-29": [
    {
      "id": "wan",
      "name": "わん",
      "month": 8,
      "day": 29,
      "flowerName": "サルスベリ",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w8",
      "motif": "アホウドリ",
      "dialogueBadge": "陽気なアホウドリ",
      "themeColor": "#f43f5e",
      "accentColor": "#fb7185",
      "imageFileName": "wan.png",
      "comment": "ぎゃはは！8月29日！オレと同じ誕生日じゃーん！難しいこと考えるとお腹空いちゃうから、うまいもん食って昼寝するのが一番！サルスベリの花みたいに元気100倍で笑っていこうぜーッ！おめでとー！"
    }
  ],
  "3-24": [
    {
      "id": "yoshino",
      "name": "よしの",
      "month": 3,
      "day": 24,
      "flowerName": "カタクリ",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "9w8",
      "motif": "カバ",
      "dialogueBadge": "社交的なエンターテイナー",
      "themeColor": "#c084fc",
      "accentColor": "#e879f9",
      "imageFileName": "yoshino.png",
      "comment": "やっほー！3月24日！ぼくと同じ誕生日だね！カタクリの『初恋』ってなんか照れちゃうけど、みんなを笑わせるのがぼくの特技なんだ！早食い対決でもしてパーッと盛り上がろうよ！最高のバースデーにしてね！"
    }
  ],
  "9-11": [
    {
      "id": "kioka",
      "name": "きおか",
      "month": 9,
      "day": 11,
      "flowerName": "ムクゲ",
      "mbti": "INTJ",
      "socionics": "ILI",
      "enneagram": "5w6",
      "motif": "シマエナガ",
      "dialogueBadge": "冷徹俯瞰シマエナガ",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "kioka.png",
      "comment": "9月11日。私と同じ誕生日。夢とか希望なんて幻想だし、未来なんて期待しても落ちるだけ。でも、ムクゲの『信念』や『一途な心』の構造を冷静に分析するのは嫌いじゃないよ。世界を過大評価せず、現実を冷徹に見据えて生き残ろうね。おめでとう。"
    }
  ],
  "9-17": [
    {
      "id": "honami",
      "name": "ほなみ",
      "month": 9,
      "day": 17,
      "flowerName": "リクニス",
      "mbti": "ESTP",
      "socionics": "LSI",
      "enneagram": "9w1",
      "motif": "クリオネ",
      "dialogueBadge": "温厚二重人格クリオネ",
      "themeColor": "#d946ef",
      "accentColor": "#f43f5e",
      "imageFileName": "honami.png",
      "comment": "9月17日たいね〜。うちと同じ誕生日ばい、よか日ばいね〜。リクニスの花言葉は『私の愛は不変』……普段は温厚に暮らしとるばってん、リマキナば食べる時は……ふふ、本能が目覚めてしまうかもしれんばい？お祝いしとるよ〜！"
    }
  ],
  "12-6": [
    {
      "id": "rara",
      "name": "らら",
      "month": 12,
      "day": 6,
      "flowerName": "ユキノシタ",
      "mbti": "ENTP",
      "socionics": "LIE",
      "enneagram": "3w4",
      "motif": "アトリ",
      "dialogueBadge": "冷笑と言葉遊びのアトリ",
      "themeColor": "#64748b",
      "accentColor": "#94a3b8",
      "imageFileName": "rara.png",
      "comment": "12月6日？へぇ、あたしと同じ誕生日なんだ。ユキノシタの花言葉って『深い愛情』とか言うけどさ、雪の下でじっと耐えるなんて非効率すぎない？ルールなんて穴だらけだし、裏をかいて人と違うことした方が何倍も面白いじゃん。……まあ、お祝いのケーキは普通に食べたいけどね！おめでとー！"
    }
  ],
  "7-3": [
    {
      "id": "sae",
      "name": "さえ",
      "month": 7,
      "day": 3,
      "flowerName": "マツバギク",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "犬",
      "dialogueBadge": "遅刻常習の退避者",
      "themeColor": "#f472b6",
      "accentColor": "#ec4899",
      "imageFileName": "sae.png",
      "comment": "あー……7月3日？ 私と同じ誕生日じゃん……。マツバギクの花言葉『のんびり気分』と『怠惰』って、マジで私のためにあるような言葉よね。……適当に力抜いて生きるのが一番だよ。まあ、おめでとー。"
    }
  ],
  "2-23": [
    {
      "id": "ruruka",
      "name": "るるか",
      "month": 2,
      "day": 23,
      "flowerName": "ストック",
      "mbti": "INTP",
      "socionics": "LII",
      "enneagram": "6w5",
      "motif": "モモイロインコ",
      "dialogueBadge": "臆病なひらめきインコ",
      "themeColor": "#fb7185",
      "accentColor": "#f43f5e",
      "imageFileName": "ruruka.png",
      "comment": "うぅ……2月23日、私と同じ日ですね……。ストックの花言葉は『愛情の絆』……でも白黒つけられない曖昧な人間関係ってどう処理していいか分からなくて怖いです……嫌われたらどうしようって引きこもりがちだけど……ひらめき力だけは信じてます。お、おめでとうございます……！"
    }
  ],
  "5-23": [
    {
      "id": "yuma",
      "name": "ゆま",
      "month": 5,
      "day": 23,
      "flowerName": "ゴデチア",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "8w7",
      "motif": "犬",
      "dialogueBadge": "反抗的ヤンキー",
      "themeColor": "#e11d48",
      "accentColor": "#f43f5e",
      "imageFileName": "yuma.png",
      "comment": "あ？ 5月23日だぁ？ あんた、あたしと同じ誕生日かよ。社会だの大学の授業だのクソ喰らえってんだ。ゴデチアの『変わらぬ愛』とか言われても思いやりの持ち方なんて知らねぇよ。……けどな、てめぇが生まれた日くらいは、胸張って好き勝手暴れりゃいいんだよ。おめでとうな。"
    }
  ],
  "10-28": [
    {
      "id": "serika",
      "name": "せりか",
      "month": 10,
      "day": 28,
      "flowerName": "パキラ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "2w1",
      "motif": "パキラ",
      "dialogueBadge": "誠実な励まし手",
      "themeColor": "#22c55e",
      "accentColor": "#16a34a",
      "imageFileName": "serika.png",
      "comment": "10月28日、私と同じお誕生日だね！パキラの花言葉は『快活』そして『勝利』。どんなに大変な時でも、人との温かい関係性さえあれば前を向けます。もうひと踏ん張りして一緒に頑張ろうね！あなたの歩みを心から応援しているよ。"
    }
  ],
  "8-26": [
    {
      "id": "toshiki",
      "name": "としき",
      "month": 8,
      "day": 26,
      "flowerName": "ヘチマ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w3",
      "motif": "烏骨鶏",
      "dialogueBadge": "ポジティブ烏骨鶏ボーイ",
      "themeColor": "#eab308",
      "accentColor": "#fbbf24",
      "imageFileName": "toshiki.png",
      "comment": "おっ！8月26日！僕と同じ誕生日やが！ヘチマの花言葉『悠々自適』って最高やな〜！ちょっとアホって言われるけど、人の気持ちを考えることとポジティブさには自信あるんや！君の1年が笑顔でいっぱいになりますように！おめでとー！"
    }
  ],
  "9-4": [
    {
      "id": "manaka",
      "name": "まなか",
      "month": 9,
      "day": 4,
      "flowerName": "ダチュラ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w9",
      "motif": "猫",
      "dialogueBadge": "冷徹なる現実派バイオリニスト猫",
      "themeColor": "#a855f7",
      "accentColor": "#c084fc",
      "imageFileName": "manaka.png",
      "comment": "9月4日。私と同じ誕生日ね。誰かにとって都合のいい存在になるつもりはないし、甘えた上下関係も不要。ダチュラの『偽りの魅力』に惑わされず、現実を直視して自律しなさい。……バイオリンの音色を添えて、一応祝っておくわ。おめでとう。"
    }
  ],
  "6-18": [
    {
      "id": "shinano",
      "name": "しなの",
      "month": 6,
      "day": 18,
      "flowerName": "タイム",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w8",
      "motif": "ポメラニアン",
      "dialogueBadge": "熱血チアガール",
      "themeColor": "#a78bfa",
      "accentColor": "#c4b5fd",
      "imageFileName": "shinano.png",
      "comment": "しゃーッ！6月18日！アタシと同じ誕生日じゃん！タイムの花言葉は『勇気』と『活動力』！考えるより感じろ！今を生きろ！感情をぶっ放せ！女らしく縮こまるなんてアタシの辞書にはないよ！全力でゴーゴー！ハッピーバースデー！"
    }
  ],
  "1-16": [
    {
      "id": "yumi",
      "name": "ゆみ",
      "month": 1,
      "day": 16,
      "flowerName": "ワックスフラワー",
      "mbti": "ENTP",
      "socionics": "LIE",
      "enneagram": "7w6",
      "motif": "ゴシキセイガイインコ",
      "dialogueBadge": "デコラ系ラッパーインコ",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "yumi.png",
      "comment": "イエ〜イ！1月16日！ウチと同じバースデーじゃんCheck it out！ワックスフラワーみたいにツヤツヤでカラフルに、デコラファッション全開で自己主張キメてこ！ルールに縛られずストリートを自由にビート刻んでこーぜ！おめでとー！"
    }
  ],
  "11-17": [
    {
      "id": "asahi",
      "name": "あさひ",
      "month": 11,
      "day": 17,
      "flowerName": "ツタ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "オナガ",
      "dialogueBadge": "夏を愛するオナガ鳥",
      "themeColor": "#ea580c",
      "accentColor": "#f97316",
      "imageFileName": "asahi.png",
      "comment": "11月17日……僕と同じ誕生日ですね。ツタの葉が赤く染まっていくように、過ぎ去る季節や景色をそのまま大切にしたいです。体調とか崩してないですか？無理せず心地よさを第一にして、温かく過ごしてくださいね。おめでとうございます。"
    }
  ],
  "10-18": [
    {
      "id": "mukumaru",
      "name": "むくまる",
      "month": 10,
      "day": 18,
      "flowerName": "コットンツリー",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w6",
      "motif": "シカ",
      "dialogueBadge": "ドローン操縦の不思議シカ",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "mukumaru.png",
      "comment": "おぉ〜！10月18日！ボクと同じ誕生日だっちゃ〜！コットンツリーのふわふわボールみたいに、ドローンを飛ばして上空からユーモアをばら撒いちゃいます！面白いこと探して毎日をワクワクで埋め尽くしましょ〜！おめでとうございます！"
    }
  ],
  "10-7": [
    {
      "id": "ririka",
      "name": "りりか",
      "month": 10,
      "day": 7,
      "flowerName": "キンモクセイ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w6",
      "motif": "ジャック・オー・ランタン",
      "dialogueBadge": "ハロウィン炎の魔法使い",
      "themeColor": "#f97316",
      "accentColor": "#fb923c",
      "imageFileName": "ririka.png",
      "comment": "10月7日。私と同じ日ね。キンモクセイの香りは好きだけど、世の中の矛盾や感情操作にはうんざり。自分の炎魔法とスキルさえ研ぎ澄ませていれば他人に媚びる必要はないわ。でも……貴方の誕生日くらいは認めてあげる。"
    }
  ],
  "8-28": [
    {
      "id": "hirotsugu",
      "name": "ひろつぐ",
      "month": 8,
      "day": 28,
      "flowerName": "スグリ",
      "mbti": "ESTJ",
      "socionics": "ILE",
      "enneagram": "6w7",
      "motif": "サギ",
      "dialogueBadge": "慎重派の大1サギ男子",
      "themeColor": "#ef4444",
      "accentColor": "#f87171",
      "imageFileName": "hirotsugu.png",
      "comment": "8月28日……俺と同じ誕生日じゃなあ。大学に入ってからも用心深う周りを観察しとるけど、スグリの実のように甘酸っぱい挑戦も悪くないかもな。バッグに変なキーホルダー付けとるのは突っ込まんでくれよな。おめでとう。"
    }
  ],
  "10-8": [
    {
      "id": "yutaka",
      "name": "ゆたか",
      "month": 10,
      "day": 8,
      "flowerName": "パセリ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "6w5",
      "motif": "鳩",
      "dialogueBadge": "執念と速読の鳩",
      "themeColor": "#16a34a",
      "accentColor": "#22c55e",
      "imageFileName": "yutaka.png",
      "comment": "10月8日。僕と同じ誕生日だな。パセリの花言葉は『勝利』と『知恵』。僕は多少の脅しやプレッシャーなどには一切屈しない。論理と冷静な執念で、確実に目的を達成するだけだ。君も揺るぎない確信を持って進め。おめでとう。"
    }
  ],
  "2-8": [
    {
      "id": "kaikoku",
      "name": "かいこく",
      "month": 2,
      "day": 8,
      "flowerName": "ホトケノザ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w8",
      "motif": "フラミンゴ",
      "dialogueBadge": "遅刻常習フラミンゴ",
      "themeColor": "#e879f9",
      "accentColor": "#c084fc",
      "imageFileName": "kaikoku.png",
      "comment": "ふわぁ……2月8日……？ 俺と同じ誕生日じゃん……。朝ごはんをおにぎりにすると100%遅刻するからゼリーで済ませてるんだけど、やっぱやる気出ないわ〜。好きなものはお金。ホトケノザみたいに道端でのんびり享楽的にいこうぜ〜。おめでと〜。"
    }
  ],
  "1-3": [
    {
      "id": "chizuru",
      "name": "ちづる",
      "month": 1,
      "day": 3,
      "flowerName": "クロッカス",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "9w1",
      "motif": "ツル",
      "dialogueBadge": "天然ふわふわツル女子",
      "themeColor": "#a855f7",
      "accentColor": "#c084fc",
      "imageFileName": "chizuru.png",
      "comment": "ふぇ……1月3日？ 私と同じ誕生日なんですねぇ〜。クロッカスの『青春の喜び』……100年後にはみんなどうせ死んじゃうんだから、思い悩んでも仕方ないですよね〜。きっと何とかなりますよ〜。ふわふわ楽しくいきましょ〜ね、おめでとうございます〜！"
    }
  ],
  "8-14": [
    {
      "id": "eishi",
      "name": "えいし",
      "month": 8,
      "day": 14,
      "flowerName": "センニチコウ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "4w5",
      "motif": "ヨタカ",
      "dialogueBadge": "夜想と裁縫のヨタカ",
      "themeColor": "#d946ef",
      "accentColor": "#f43f5e",
      "imageFileName": "eishi.png",
      "comment": "……8月14日。僕と同じ誕生日。朝はアイマスクして寝ていたい夜型やで、判断はいつも静まり返った夜にするんや。「もしこのまま夜が明けんだらどうなるやろう」って裁縫しながら考えたりする。センニチコウの『色あせぬ愛』のように、君の穏やかな平穏が続くこと願っとるよ。"
    }
  ],
  "4-8": [
    {
      "id": "yuna",
      "name": "ゆな",
      "month": 4,
      "day": 8,
      "flowerName": "ジャスミン",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w1",
      "motif": "猫",
      "dialogueBadge": "献身と忠実の気配り猫",
      "themeColor": "#06b6d4",
      "accentColor": "#cffafe",
      "imageFileName": "yuna.png",
      "comment": "4月8日！私の誕生日だよ！ジャスミンの花言葉は『愛らしさ』『忠実』！困ってる人を見たら放っておけなくて、みんなの願いを全部叶えたくてたまに暴走しちゃうけど……！あなたのお願いなら、何でも全力で応えてみせるから頼ってね！"
    }
  ],
  "4-9": [
    {
      "id": "uta",
      "name": "うた",
      "month": 4,
      "day": 9,
      "flowerName": "ミヤコワスレ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "6w5",
      "motif": "猫",
      "dialogueBadge": "無鉄砲なコラット男子",
      "themeColor": "#475569",
      "accentColor": "#94a3b8",
      "imageFileName": "uta.png",
      "comment": "4月9日。……俺と同じ誕生日だな。ミヤコワスレの花言葉は『また会う日まで』。言葉でベラベラ説明すんのは得意じゃねぇから、気合いで察してくれ。まあ……元気にやってりゃそれでいいんじゃねぇの。おめでとう。"
    },
    {
      "id": "kota",
      "name": "こた",
      "month": 4,
      "day": 9,
      "flowerName": "パールアカシア",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "多弁なおしゃべり猫",
      "themeColor": "#f59e0b",
      "accentColor": "#fbbf24",
      "imageFileName": "kota.png",
      "comment": "あはは！4月9日！オレとうたと同じ誕生日じゃん！パールアカシアの花言葉は『友情』と『秘密の恋』！手先器用だから何でも作ってあげるよ〜！あ、クサイ臭い嗅ぎ分けちゃうタイプだから気をつけてね？最高の一年にしよー！"
    }
  ],
  "11-28": [
    {
      "id": "ryusei",
      "name": "りゅうせい",
      "month": 11,
      "day": 28,
      "flowerName": "サンダーソニア",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "9w1",
      "motif": "ルンバ",
      "dialogueBadge": "掃除大好きな平和主義",
      "themeColor": "#ea580c",
      "accentColor": "#fb923c",
      "imageFileName": "ryusei.png",
      "comment": "11月28日、僕と同じお誕生日ですね！サンダーソニアの花言葉は『祝福』や『祈り』！散らかった悩みも部屋も、僕がきれいに全部ピカピカにお掃除してあげます！心穏やかで平和な一年を過ごしてくださいね。おめでとうございます！"
    }
  ],
  "6-14": [
    {
      "id": "mizuki",
      "name": "みずき",
      "month": 6,
      "day": 14,
      "flowerName": "ブルースター",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "3w4",
      "motif": "ヤマネコ",
      "dialogueBadge": "気さくな合理主義ヤマネコ",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "mizuki.png",
      "comment": "6月14日！私と同じ誕生日じゃん！クラスのみんなからは『みっずー』って呼ばれてるよ。ブルースターの花言葉は『幸福な愛』『信じ合う心』。美味しい手料理作ってあげるからさ、一緒に高み目指してガンガンいこー！おめでと！"
    }
  ],
  "4-22": [
    {
      "id": "miduki",
      "name": "みづき",
      "month": 4,
      "day": 22,
      "flowerName": "ムスカリ",
      "mbti": "INTP",
      "socionics": "IEI",
      "enneagram": "5w4",
      "motif": "虎",
      "dialogueBadge": "観測と理想追求の虎",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "miduki.png",
      "comment": "4月22日……私と同じ日……。ムスカリの花言葉は『明るい未来』……。人と話すのは緊張するし絵もまだまだ足りないことだらけだけど……世界がどうしてこうなってるのか、静かに観察し続けるのは好き。……あなたの未来も、静かに良いものでありますように。"
    }
  ],
  "5-13": [
    {
      "id": "musashi",
      "name": "むさし",
      "month": 5,
      "day": 13,
      "flowerName": "カモミール",
      "mbti": "ESTJ",
      "socionics": "SLE",
      "enneagram": "8w7",
      "motif": "ライオン",
      "dialogueBadge": "不屈の獅子リーダー",
      "themeColor": "#d97706",
      "accentColor": "#f59e0b",
      "imageFileName": "musashi.png",
      "comment": "ガハハ！5月13日、俺と同じ誕生日だな！カモミールは『逆境に耐える』『苦難の中の力』だ！舐められたら終わり、止まるくらいなら死ぬ気で戦って社会的勝利を掴み取るのが俺の流儀だ！お前も堂々と胸張って突き進め！おめでとう！"
    }
  ],
  "9-15": [
    {
      "id": "kitsu",
      "name": "きつ",
      "month": 9,
      "day": 15,
      "flowerName": "ススキ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "1w2",
      "motif": "うさぎ",
      "dialogueBadge": "五つ子長男・論理派うさぎ",
      "themeColor": "#ca8a04",
      "accentColor": "#eab308",
      "imageFileName": "kitsu.png",
      "comment": "9月15日。僕と同じ誕生日ですね。五つ子の長男として論理立てて説明しますが、ススキの花言葉は『活力』と『心が通じる』です。感情論ではなく事実と記録を積み重ねることで、確実な成果に結びつきます。有意義な一年を。"
    },
    {
      "id": "sona",
      "name": "そな",
      "month": 9,
      "day": 15,
      "flowerName": "オミナエシ",
      "mbti": "ESTP",
      "socionics": "SEE",
      "enneagram": "3w2",
      "motif": "うさぎ",
      "dialogueBadge": "五つ子次女・おしゃれうさぎ",
      "themeColor": "#ec4899",
      "accentColor": "#f472b6",
      "imageFileName": "sona.png",
      "comment": "きゃっ！9月15日！あたしと同じ誕生日じゃん〜！オミナエシの『美しさ』ってまさにあたしのことじゃない？韓国コスメもファッションも今この瞬間の可愛さが一番大事だし！あたしらと一緒にキラキラで超カワイイ一年にしよっ♡"
    },
    {
      "id": "yo",
      "name": "よう",
      "month": 9,
      "day": 15,
      "flowerName": "オギ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "2w1",
      "motif": "うさぎ",
      "dialogueBadge": "五つ子次男・尽くし系うさぎ",
      "themeColor": "#059669",
      "accentColor": "#34d399",
      "imageFileName": "yo.png",
      "comment": "9月15日、僕と同じお誕生日ですね。オギの花言葉は『片思い』……人の気持ちを気遣いすぎて自分を出すのは少し不器用ですけど、大切な誰かの支えになりたい想いは本物です。あなたが誰よりも温かな絆に恵まれますように。"
    },
    {
      "id": "ami",
      "name": "あみ",
      "month": 9,
      "day": 15,
      "flowerName": "ヨメナ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "2w1",
      "motif": "うさぎ",
      "dialogueBadge": "五つ子長女・優等生ダンサー",
      "themeColor": "#7c3aed",
      "accentColor": "#c084fc",
      "imageFileName": "ami.png",
      "comment": "9月15日！私と同じ誕生日ですね！五つ子の長女としてみんなを引っ張ってます！ヨメナの花言葉は『隠れた美しさ』と『従順』。ダンスで鍛えた芯の強さで、どんな時も前を向いて笑顔を届けます！おめでとうございます！"
    },
    {
      "id": "nagiha",
      "name": "なぎは",
      "month": 9,
      "day": 15,
      "flowerName": "ナデシコ",
      "mbti": "ISFJ",
      "socionics": "EII",
      "enneagram": "9w1",
      "motif": "うさぎ",
      "dialogueBadge": "五つ子末っ子・穏やかうさぎ",
      "themeColor": "#f43f5e",
      "accentColor": "#fda4af",
      "imageFileName": "nagiha.png",
      "comment": "9月15日……私と同じ日ですね……。あみお姉ちゃんたちと五つ子なんです。ナデシコの花言葉は『純愛』と『貞節』……自分の意見を強く言うのは苦手だけど、みんなが好きって言うものは私も大好きです……優しい一日になりますように。"
    }
  ],
  "5-21": [
    {
      "id": "itsuki",
      "name": "いつき",
      "month": 5,
      "day": 21,
      "flowerName": "カスミソウ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "8w9",
      "motif": "猫",
      "dialogueBadge": "冷徹秩序の小柄猫",
      "themeColor": "#475569",
      "accentColor": "#94a3b8",
      "imageFileName": "itsuki.png",
      "comment": "5月21日。私と同じ誕生日。カスミソウの『清らかな心』……秩序を乱す理不尽なノイズは論理的に排除するだけ。歪んだ社会に迎合せず、自らの目的と構造に忠実でありなさい。おめでとう。"
    }
  ],
  "9-10": [
    {
      "id": "sunao",
      "name": "すなお",
      "month": 9,
      "day": 10,
      "flowerName": "シュウカイドウ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "6w5",
      "motif": "カナリア",
      "dialogueBadge": "新聞部の細やかカナリア",
      "themeColor": "#e11d48",
      "accentColor": "#fb7185",
      "imageFileName": "sunao.png",
      "comment": "9月10日、私と同じ誕生日です。新聞部員として身の回りの細かな変化には人一倍敏感で、シュウカイドウの『自然を愛す』『片思い』のように細部を精査しています。変化に惑わされず着実に歩んでください。"
    }
  ],
  "5-30": [
    {
      "id": "futaro",
      "name": "ふうたろう",
      "month": 5,
      "day": 30,
      "flowerName": "エキザカム",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "1w2",
      "motif": "おたまじゃくし",
      "dialogueBadge": "三つ子長男・しっかり者",
      "themeColor": "#8b5cf6",
      "accentColor": "#c4b5fd",
      "imageFileName": "futaro.png",
      "comment": "5月30日！僕と同じ誕生日だな！三つ子の長男として世界の裏側まで直感で見抜くよ。エキザカムの花言葉は『愛のささやき』『あなたを愛します』！大好物のこしあんぱんでも食べながら、ブレずに進んでいこう！おめでとう！"
    },
    {
      "id": "kirimaru",
      "name": "きりまる",
      "month": 5,
      "day": 30,
      "flowerName": "アマリリス",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "おたまじゃくし",
      "dialogueBadge": "三つ子末っ子・観察と筆談",
      "themeColor": "#ef4444",
      "accentColor": "#fca5a5",
      "imageFileName": "kirimaru.png",
      "comment": "（ノートにペンを走らせて見せる）……5月30日。僕と同じ日。アマリリスの『誇り』。話すのは少し緊張するけど、友情や絆って固定じゃなく移り変わるものだと思う。つぶあんのどら焼き、半分あげるね……おめでとう。"
    },
    {
      "id": "mogumo",
      "name": "もぐも",
      "month": 5,
      "day": 30,
      "flowerName": "ペラルゴニウム",
      "mbti": "ESTJ",
      "socionics": "SLE",
      "enneagram": "8w7",
      "motif": "おたまじゃくし",
      "dialogueBadge": "俺様街道おたまじゃくし",
      "themeColor": "#dc2626",
      "accentColor": "#f87171",
      "imageFileName": "mogumo.png",
      "comment": "おう！5月30日！俺と同じ誕生日じゃねぇか！ペラルゴニウムの『真の友情』だと？俺は俺に従うだけ、邪魔する奴はぶっ飛ばすぜ！みそあんのかしわもち食って、自分の信じた道を突っ走れ！おめでとな！"
    }
  ],
  "3-29": [
    {
      "id": "hasai",
      "name": "はさい",
      "month": 3,
      "day": 29,
      "flowerName": "ヘビイチゴ",
      "mbti": "ESTJ",
      "socionics": "LIE",
      "enneagram": "1w9",
      "motif": "カメレオン",
      "dialogueBadge": "メイク研究カメレオン",
      "themeColor": "#e11d48",
      "accentColor": "#f43f5e",
      "imageFileName": "hasai.png",
      "comment": "3月29日、あたしと同じ誕生日ね。ヘビイチゴの『小悪魔のような魅力』。社会に溶け込むためにメイク研究してるけど、誰かに媚びるのは怠いだけ。人によって態度変えずに、大切な思い出だけはしっかり守りなよ。おめでとう。"
    }
  ],
  "1-27": [
    {
      "id": "nao",
      "name": "なお",
      "month": 1,
      "day": 27,
      "flowerName": "プルメリア",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "アヒル",
      "dialogueBadge": "合理的きれい好きアヒル",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "nao.png",
      "comment": "1月27日。僕と同じ誕生日ですね。プルメリアの花言葉は『気品』と『日だまり』。ゴミ拾いも掃除も誰かがやらないといけないからやるだけです。……はい、みだらし団子（剛腕で投げる）。おめでとう。"
    }
  ],
  "11-4": [
    {
      "id": "koiki",
      "name": "こいき",
      "month": 11,
      "day": 4,
      "flowerName": "サフラン",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "9w1",
      "motif": "怪獣",
      "dialogueBadge": "うどん愛好おだやか怪獣",
      "themeColor": "#d97706",
      "accentColor": "#f59e0b",
      "imageFileName": "koiki.png",
      "comment": "わあ〜！11月4日！ぼくと同じお誕生日や〜！怪獣やけど人は信じるし争いはキライやで！サフランの花言葉は『歓喜』と『陽気』！お祝いに何より大好きなうどんを一緒に食べよ〜！ちゅるちゅる幸せな一年にしてね！"
    }
  ],
  "3-16": [
    {
      "id": "miyuu",
      "name": "みゆう",
      "month": 3,
      "day": 16,
      "flowerName": "イキシア",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "9w8",
      "motif": "モルモット",
      "dialogueBadge": "四姉妹長女・天然おっとり",
      "themeColor": "#a855f7",
      "accentColor": "#c084fc",
      "imageFileName": "miyuu.png",
      "comment": "ふふ……3月16日、私と同じお誕生日やねぇ。四姉妹の長女なんよ。イキシアの花言葉は『誇り高い』『協調』……かわいいものが大好きで、痛みそのものが私自身みたいな感覚があるけど……ふんわり温かい時間になりますように。"
    },
    {
      "id": "miya",
      "name": "みや",
      "month": 3,
      "day": 16,
      "flowerName": "エキナセア",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "3w4",
      "motif": "モルモット",
      "dialogueBadge": "四姉妹次女・洗練インフルエンサー",
      "themeColor": "#db2777",
      "accentColor": "#f472b6",
      "imageFileName": "miya.png",
      "comment": "3月16日！私と同じバースデーね！エキナセアの花言葉は『あなたの痛みを癒します』。コーディネートや戦略は完璧にこなせるのに、自分の気持ちだけは迷子になりがちだけど……今日は最高におしゃれして自慢の一年にしなさいよね！"
    },
    {
      "id": "mihi",
      "name": "みひ",
      "month": 3,
      "day": 16,
      "flowerName": "ナノハナ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "モルモット",
      "dialogueBadge": "四姉妹三女・構造思考の探究者",
      "themeColor": "#eab308",
      "accentColor": "#fde047",
      "imageFileName": "mihi.png",
      "comment": "3月16日……私と同じ日やな。ナノハナの『快活』『豊かさ』。なぜ社会や性別で枠が作られるのか、その構造を疑う視点は手放さない。周囲に迎合せず、君自身の自由なスタンスで生き延びてほしい。おめでとう。"
    },
    {
      "id": "mia",
      "name": "みあ",
      "month": 3,
      "day": 16,
      "flowerName": "ハナカイドウ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "6w7",
      "motif": "モルモット",
      "dialogueBadge": "四姉妹末っ子・サバサバ心配性",
      "themeColor": "#e11d48",
      "accentColor": "#fda4af",
      "imageFileName": "mia.png",
      "comment": "3月16日！あたしと同じ誕生日やん！ハナカイドウの『温和』と『艶麗』。不平等なことは絶対納得いかないし、自分のことは適当でもみんなのことは心配になってしまうんちゃね。あんたも無理せず頼りなよ！おめでとう！"
    }
  ],
  "6-21": [
    {
      "id": "kaori",
      "name": "かおり",
      "month": 6,
      "day": 21,
      "flowerName": "ヤマモモ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "4w3",
      "motif": "クマ",
      "dialogueBadge": "アナウンサー志望のクマ女子",
      "themeColor": "#e11d48",
      "accentColor": "#fb7185",
      "imageFileName": "kaori.png",
      "comment": "6月21日！私と同じお誕生日だね！ヤマモモの花言葉は『ただ一人を愛する』。“いい子でいなきゃ”って揺れることもあるけど、アナウンサー目指して想いを届けます！素敵な一年にしましょう！"
    }
  ],
  "6-26": [
    {
      "id": "nozomi",
      "name": "のぞみ",
      "month": 6,
      "day": 26,
      "flowerName": "アジサイ",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "7w8",
      "motif": "亀",
      "dialogueBadge": "やんちゃKY亀ボーイ",
      "themeColor": "#0284c7",
      "accentColor": "#38bdf8",
      "imageFileName": "nozomi.png",
      "comment": "よっ！6月26日！オレと同じ誕生日じゃん！アジサイの花言葉『辛抱強さ』とかあるけど、花粉症の辛抱はマジ無理〜！学校の窓ガラス頭突きで割ったこともあるけど反省はしてないぜ！型にはまらず暴れていこうぜ！おめでとー！"
    }
  ],
  "10-22": [
    {
      "id": "cosmo",
      "name": "こすも",
      "month": 10,
      "day": 22,
      "flowerName": "ピンクコスモス",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w6",
      "motif": "コスモス",
      "dialogueBadge": "コミュ力天真爛漫ガール",
      "themeColor": "#ec4899",
      "accentColor": "#fbcfe8",
      "imageFileName": "cosmo.png",
      "comment": "やっほー！！10月22日！あたしと同じバースデーじゃん！ピンクコスモスの花言葉は『調和』と『乙女の純潔』！美味しいものいっぱい食べてクラス全員と仲良くなっちゃお！どんな状況でも楽しんだもん勝ちだよー！おめでとー！"
    }
  ],
  "7-19": [
    {
      "id": "yuri",
      "name": "ゆり",
      "month": 7,
      "day": 19,
      "flowerName": "ユリ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w1",
      "motif": "ユリ",
      "dialogueBadge": "純粋無垢なスキンケア女王",
      "themeColor": "#059669",
      "accentColor": "#34d399",
      "imageFileName": "yuri.png",
      "comment": "7月19日、私と同じお誕生日だね。ユリの花言葉は『純粋』『無垢』そして『威厳』。スキンケアを集めて美を磨くように、心もいつでも清らかでありたいの。あなたが誇り高く輝く一年になりますように。"
    }
  ],
  "1-9": [
    {
      "id": "hisui",
      "name": "ひすい",
      "month": 1,
      "day": 9,
      "flowerName": "ハコベ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "4w5",
      "motif": "猫",
      "dialogueBadge": "悲観と科学のロシアンブルー",
      "themeColor": "#0284c7",
      "accentColor": "#7dd3fc",
      "imageFileName": "hisui.png",
      "comment": "1月9日……私と同じ誕生日なんですね。ハコベの花言葉は『愛らしさ』と『初恋』。悲しいことや不安にすぐ心が揺れてしまうけれど、科学の法則みたいに確かな優しさを信じたいです。穏やかな光が届きますように。"
    }
  ],
  "9-29": [
    {
      "id": "jougo",
      "name": "じょうご",
      "month": 9,
      "day": 29,
      "flowerName": "リンゴ",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "6w7",
      "motif": "人間",
      "dialogueBadge": "愛想笑顔のリアリスト",
      "themeColor": "#dc2626",
      "accentColor": "#f87171",
      "imageFileName": "jougo.png",
      "comment": "おっ、9月29日！俺と同じ誕生日じゃん！リンゴの花言葉は『優先』と『誘惑』！どんな時でも笑顔で愛想よく振る舞うのが処世術だけど、本当に大事なものだけは誰にも渡さないぜ。上手く立ち回って楽しい一年にしようぜ！"
    }
  ],
  "4-5": [
    {
      "id": "sakura",
      "name": "さくら",
      "month": 4,
      "day": 5,
      "flowerName": "サクラ類",
      "mbti": "ENTJ",
      "socionics": "SLE",
      "enneagram": "8w7",
      "motif": "桜",
      "dialogueBadge": "勝気でドライな桜レディ",
      "themeColor": "#f43f5e",
      "accentColor": "#fda4af",
      "imageFileName": "sakura.png",
      "comment": "4月5日。私と同じ誕生日ね。サクラの花言葉『精神の美』……そして『淡白』。甘え上手に振る舞うのは造作もないけれど、内面は至ってドライよ。勝つべき戦いに勝ち、散り際は潔く美しく。結果を出して進みなさい。おめでとう。"
    }
  ],
  "12-3": [
    {
      "id": "maku",
      "name": "まく",
      "month": 12,
      "day": 3,
      "flowerName": "ラベンダー",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w2",
      "motif": "狼",
      "dialogueBadge": "執事の優等生狼",
      "themeColor": "#7c3aed",
      "accentColor": "#c084fc",
      "imageFileName": "maku.png",
      "comment": "12月3日。私と同じ誕生日ですね。ラベンダーの花言葉は『沈黙』と『期待』。執事としての礼節を尽くし、負けず嫌いな意志で完璧な職務を果たします。あなたにとって実り多き素晴らしい一年となるようお仕えいたします。"
    }
  ],
  "7-25": [
    {
      "id": "wakana",
      "name": "わかな",
      "month": 7,
      "day": 25,
      "flowerName": "トリカブト",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "2w3",
      "motif": "猫",
      "dialogueBadge": "マイペース猫",
      "themeColor": "#6366f1",
      "accentColor": "#a5b4fc",
      "imageFileName": "wakana.png",
      "comment": "にゃ〜……7月25日、わたしと同じ誕生日だよ～。トリカブトの花言葉は『人嫌い』と『栄光』……猫舌だしいつでも眠くなっちゃうけど、仲良しの子のことは何でも知っておきたいタイプなんだよね。嘘泣きじゃないよ？おめでとう〜。"
    }
  ],
  "12-18": [
    {
      "id": "baku",
      "name": "ばく",
      "month": 12,
      "day": 18,
      "flowerName": "アングレカム",
      "mbti": "ENTP",
      "socionics": "LIE",
      "enneagram": "8w7",
      "motif": "熊",
      "dialogueBadge": "常識冷笑の突破熊",
      "themeColor": "#475569",
      "accentColor": "#94a3b8",
      "imageFileName": "baku.png",
      "comment": "へっ、12月18日か。俺と同じだな。アングレカムの『祈り』だぁ？社会の常識なんて枠組みに収まる気はねぇよ。頑固って言われようが力で突き破るだけだ。お前も他人の目なんか気にせず突破しろよ！おめでとう！"
    }
  ],
  "11-19": [
    {
      "id": "io",
      "name": "いお",
      "month": 11,
      "day": 19,
      "flowerName": "ライスフラワー",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w6",
      "motif": "へび",
      "dialogueBadge": "釣り好き飄々スネーク",
      "themeColor": "#64748b",
      "accentColor": "#94a3b8",
      "imageFileName": "io.png",
      "comment": "11月19日。俺と同じだな。ライスフラワーの花言葉は『豊かさ』。物事の裏を読んで一歩引いて眺めてるくらいが一番気楽。暇なら一緒に釣りでも行くか？大物が釣れるといいな。おめでとう。"
    }
  ],
  "9-30": [
    {
      "id": "michikou",
      "name": "みちこう",
      "month": 9,
      "day": 30,
      "flowerName": "リンドウ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w4",
      "motif": "たぬき",
      "dialogueBadge": "熱血博識たぬき博士",
      "themeColor": "#4338ca",
      "accentColor": "#818cf8",
      "imageFileName": "michikou.png",
      "comment": "うおおお！9月30日！僕と同じ誕生日ではないか！興味深い！リンドウの花言葉は『誠実』と『正義』！未知の知識を探究する情熱こそが人生の解だ！あだ名は博士、好物は卵！君の知的好奇心が爆発する最高の一年にしよう！"
    }
  ],
  "1-11": [
    {
      "id": "ran",
      "name": "らん",
      "month": 1,
      "day": 11,
      "flowerName": "エピデンドラム",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "メグロ",
      "dialogueBadge": "航空部天才エンジニア",
      "themeColor": "#059669",
      "accentColor": "#34d399",
      "imageFileName": "ran.png",
      "comment": "ビッグニュースなのです！1月11日、僕と同じお誕生日なのです！エピデンドラムの花言葉は『判断力』と『孤高』！航空部の技術担当として、君の未来を加速させる素晴らしい発明を売り込んでみせるのです！おめでとうございます！"
    }
  ],
  "8-31": [
    {
      "id": "himari",
      "name": "ひまり",
      "month": 8,
      "day": 31,
      "flowerName": "ヒマワリ",
      "mbti": "ESFP",
      "socionics": "ESI",
      "enneagram": "1w2",
      "motif": "ひまわり",
      "dialogueBadge": "小さな太陽ガール",
      "themeColor": "#eab308",
      "accentColor": "#facc15",
      "imageFileName": "himari.png",
      "comment": "えへへ！8月31日！あたしとおんなじ誕生日だねっ！ヒマワリの花言葉は『あなただけを見つめる』と『光輝』！背はちっちゃいけど太陽みたいな明るさでみんなを照らすよ！おめでとー！"
    }
  ],
  "11-30": [
    {
      "id": "saoru",
      "name": "さおる",
      "month": 11,
      "day": 30,
      "flowerName": "ワビスケ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w6",
      "motif": "カズハゴンドウ",
      "dialogueBadge": "釣りと功利主義ゴンドウ",
      "themeColor": "#0d9488",
      "accentColor": "#2dd4bf",
      "imageFileName": "saoru.png",
      "comment": "ん〜、11月30日？オレと同じ誕生日じゃん〜。ワビスケの花言葉は『控えめ』と『静かな美』。小魚やニホンスナモグリ釣るのが好きだけど、釣れなきゃ時間の無駄だから効率も大事だよね。気楽に成果出してこ〜、おめでと。"
    }
  ],
  "3-6": [
    {
      "id": "tsukushi",
      "name": "つくし",
      "month": 3,
      "day": 6,
      "flowerName": "ツクシ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w4",
      "motif": "土筆",
      "dialogueBadge": "寡黙な文芸青年",
      "themeColor": "#78716c",
      "accentColor": "#d6d3d1",
      "imageFileName": "tsukushi.png",
      "comment": "……3月6日。僕と同じ誕生日なんだね。……ツクシの花言葉は「向上心」だども、僕はただ……淡々と日々を成して、物語を書いてるだけ。誰かにどう見られるかとかは、気にしてもしょうがねえべ。来るもの拒まず、去るもの追わず。……君も、君自身の歩幅で生きればいい。"
    }
  ],
  "12-31": [
    {
      "id": "himiko",
      "name": "ひみこ",
      "month": 12,
      "day": 31,
      "flowerName": "ヒノキ",
      "mbti": "ESTP",
      "socionics": "LSE",
      "enneagram": "8w7",
      "motif": "椋鳥",
      "dialogueBadge": "猪突猛進の無鉄砲女子",
      "themeColor": "#b45309",
      "accentColor": "#fde68a",
      "imageFileName": "himiko.png",
      "comment": "12月31日、アタシと同じ誕生日じゃねぇか！ヒノキの花言葉は「不滅」だのなんだの言うけどさ、立ち止まったらそこで終わりなんだよ！アタシのやり方にガタガタ抜かす奴は容赦なく切り捨てるけど……ついて来れんなら、一緒に突っ走ってやるよ！"
    }
  ],
  "3-9": [
    {
      "id": "miku",
      "name": "みく",
      "month": 3,
      "day": 9,
      "flowerName": "アセビ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "5w6",
      "motif": "猫",
      "dialogueBadge": "醒めた視線の地雷系猫",
      "themeColor": "#831843",
      "accentColor": "#f472b6",
      "imageFileName": "miku.png",
      "comment": "3月9日……私と同じ誕生日。……アセビって馬酔木って書いて有毒なんだよね。……そもそも人間が存在してること自体が莫大な環境負荷だしコストでしかないじゃん。愛とか倫理とか言ったってどうせ社会の再生産装置でしょ……。……まぁ、絵描いてるときだけは脳のノイズが消えるけど。……あんたも無駄に消耗しないほうがいいよ……。"
    }
  ],
  "3-11": [
    {
      "id": "toko",
      "name": "とうこ",
      "month": 3,
      "day": 11,
      "flowerName": "ハナビシソウ",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "2w3",
      "motif": "猫",
      "dialogueBadge": "世話焼き元気な独占欲ガール",
      "themeColor": "#ea580c",
      "accentColor": "#fed7aa",
      "imageFileName": "toko.png",
      "comment": "3月11日！あたしと同じ誕生日じゃん！ねえ、なんか困ってない？あたしが何でも手伝ってあげるから遠慮すんなって！……ふん、失敗ひとつしたことないようなお澄まし優等生にはアンタの悔しさなんて分かりっこないんだから。あたしは全部わかってあげるよ！ハナビシソウみたいにパーッと景気良くいこ！"
    }
  ],
  "8-6": [
    {
      "id": "akekazu",
      "name": "あけかず",
      "month": 8,
      "day": 6,
      "flowerName": "モルセラ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "6w5",
      "motif": "コーギー",
      "dialogueBadge": "しどろもどろなカバディ守護犬",
      "themeColor": "#15803d",
      "accentColor": "#bbf7d0",
      "imageFileName": "akekazu.png",
      "comment": "あ、あの……8月6日……えっと、ぼ、僕と同じ誕生日です……！モルセラの花言葉は「感謝」と「希望」で……。僕、言葉にするのが本当に下手で、ぼんやりしてて頼りないんですけど……もし危ないことがあったら、後ろに隠れててください……！カバディで鍛えた体幹だけは、誰にも負けないので……守ります……！"
    }
  ],
  "9-21": [
    {
      "id": "kumi",
      "name": "くみ",
      "month": 9,
      "day": 21,
      "flowerName": "コルチカム",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w3",
      "motif": "ハバニーズ",
      "dialogueBadge": "要領デキるアイドル優等生",
      "themeColor": "#db2777",
      "accentColor": "#fbcfe8",
      "imageFileName": "kumi.png",
      "comment": "9月21日！私と同じお誕生日だね〜♡ コルチカムの花言葉は「悔いなき青春」「楽しい思い出」！はい、これ今朝焼いてきたパウンドケーキ、召し上がれ！いつも頑張ってて偉いね、よしよし♪ 私で力になれることならいつでも言ってね！"
    }
  ],
  "5-29": [
    {
      "id": "inori",
      "name": "いのり",
      "month": 5,
      "day": 29,
      "flowerName": "ニゲラ",
      "mbti": "INFJ",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "セキセイインコ",
      "dialogueBadge": "運命を読む修道インコ",
      "themeColor": "#4f46e5",
      "accentColor": "#c7d2fe",
      "imageFileName": "inori.png",
      "comment": "5月29日……ふふ、私と同じ星の巡りだね。ニゲラの花言葉は「夢の中の恋」……夢といえば、私はよく不吉な悪夢を見るの。世界の奔流の前に、自分の無力さを思い知らされるような……。でも、怯えて閉じこもるより、何が起きるか見届けたい。……あなたも、自分の足で運命に立ち向かう人だと信じているね。"
    }
  ],
  "5-24": [
    {
        "id": "kamon",
        "name": "かもん",
        "month": 5,
        "day": 24,
        "flowerName": "ヘリオトロープ",
        "mbti": "ESFP",
        "socionics": "SEE",
        "enneagram": "7w6",
        "motif": "イソヒヨドリ",
        "dialogueBadge": "蒼空の熱血航空員",
        "themeColor": "#2563eb",
        "accentColor": "#93c5fd",
        "imageFileName": "kamon.png",
        "comment": "5月24日はオレの誕生日やちゃ！ヘリオトロープの花言葉は『熱望』！航空部として空飛ぶのも走るのも、何事にも全力挑戦せんと気が済まんがいちゃ！勇敢に熱血にいかんまいけ！"
    }
],
  "1-18": [
    {
        "id": "airi",
        "name": "あいり",
        "month": 1,
        "day": 18,
        "flowerName": "アルストロメリア",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "7w6",
        "motif": "チドリ",
        "dialogueBadge": "ポジティブムードメーカー",
        "themeColor": "#ec4899",
        "accentColor": "#fbcfe8",
        "imageFileName": "airi.png",
        "comment": "1月18日は私の誕生日だよっ！アルストロメリアの花言葉は『未来への憧れ』！今は全力で盛り上げるムードメーカーだからね！……ねえ、今度一緒に遊ぼ！"
    }
],
  "8-24": [
    {
        "id": "kizuna",
        "name": "きずな",
        "month": 8,
        "day": 24,
        "flowerName": "ケイトウ",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "2w3",
        "motif": "ペンギン",
        "dialogueBadge": "今を生きる度胸少年",
        "themeColor": "#e11d48",
        "accentColor": "#fecdd3",
        "imageFileName": "kizuna.png",
        "comment": "8月24日は僕の誕生日だべ！ケイトウの花言葉は『おしゃれ』だど！身体は小柄だばって、度胸だけは誰にも負けねぇ！悔いのねぇように今を全力で生きるべ！もっと僕のこと見てけ！"
    }
],
  "3-28": [
    {
        "id": "nodoka",
        "name": "のどか",
        "month": 3,
        "day": 28,
        "flowerName": "エンジュ",
        "mbti": "ESTJ",
        "socionics": "SLE",
        "enneagram": "8w7",
        "motif": "パンダ",
        "dialogueBadge": "白黒決着の覇王少女",
        "themeColor": "#059669",
        "accentColor": "#a7f3d0",
        "imageFileName": "nodoka.png",
        "comment": "3月28日生まれ！私の誕生花はエンジュ、花言葉は『幸福』よ！白黒ハッキリつけない曖昧なのは大嫌い！本気でいくなら勝ちに行くのが当たり前でしょ！強く、美しく、私が一番になってみせるわ！"
    }
],
  "3-17": [
    {
        "id": "aira",
        "name": "あいら",
        "month": 3,
        "day": 17,
        "flowerName": "サンシュユ",
        "mbti": "ISTP",
        "socionics": "SLI",
        "enneagram": "5w6",
        "motif": "ガチョウ",
        "dialogueBadge": "構造破壊の観測者",
        "themeColor": "#475569",
        "accentColor": "#cbd5e1",
        "imageFileName": "aira.png",
        "comment": "3月17日。サンシュユの花言葉は『持続』『気丈な愛』……らしいけど。別に誰かに媚びる気はないし。システムの欠陥を見つけて突くだけ。……何？突っ立ってないで、用がないならどっか行って。"
    }
],
  "1-25": [
    {
        "id": "hajime",
        "name": "はじめ",
        "month": 1,
        "day": 25,
        "flowerName": "ミミナグサ",
        "mbti": "ISFP",
        "socionics": "SEI",
        "enneagram": "9w1",
        "motif": "クリムネサケイ",
        "dialogueBadge": "のんびり天然鳥",
        "themeColor": "#0284c7",
        "accentColor": "#bae6fd",
        "imageFileName": "hajime.png",
        "comment": "1月25日生まれだにゃ。ミミナグサの花言葉は『純真』だげな。……え？オレのことが好き？……サカタザメの話か？美味しいよな、魚。……まあ、のんびりいこうで。急いだってええことないけん。"
    }
],
  "12-12": [
    {
        "id": "senku",
        "name": "せんく",
        "month": 12,
        "day": 12,
        "flowerName": "デンファレ",
        "mbti": "ISTP",
        "socionics": "SLI",
        "enneagram": "5w6",
        "motif": "ヨウム",
        "dialogueBadge": "信念の孤高料理人",
        "themeColor": "#b45309",
        "accentColor": "#fde68a",
        "imageFileName": "senku.png",
        "comment": "12月12日、オレの誕生日。デンファレの花言葉は『有能』だとう。料理なら妥協せんと一人でとことん仕込むのが一番楽しいでな。中途半端なもん食わせるわけにはいかんら？……ほら、食ってみろし。"
    }
],
  "12-1": [
    {
        "id": "terii",
        "name": "てりい",
        "month": 12,
        "day": 1,
        "flowerName": "ドラセナ",
        "mbti": "ESTJ",
        "socionics": "LSI",
        "enneagram": "6w7",
        "motif": "ムジルリツグミ",
        "dialogueBadge": "頼れる航空男子",
        "themeColor": "#047857",
        "accentColor": "#a7f3d0",
        "imageFileName": "terii.png",
        "comment": "12月1日は僕の誕生日やざ！ドラセナの花言葉は『幸福』！航空部として空飛ぶ時は度胸満点やけど……あ、ちょっと！その尖った鉛筆こっちに向けんといての！？先端だけはほんまアカンねん……！"
    }
],
  "5-3": [
    {
        "id": "kimihide",
        "name": "きみひで",
        "month": 5,
        "day": 3,
        "flowerName": "タンポポ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "7w8",
        "motif": "たんぽぽ",
        "dialogueBadge": "反骨ハイテンション",
        "themeColor": "#eab308",
        "accentColor": "#fef08a",
        "imageFileName": "kimihide.png",
        "comment": "5月3日はワシの誕生日じゃ！タンポポの花言葉は『思わせぶり』らしいで、ギャハハ！社会のルールなんぞ知ったことか！やりたいようにやって楽しんだもん勝ちじゃろ！……え、ジュース奢ってぇや！"
    }
],
  "11-14": [
    {
        "id": "shunsei",
        "name": "しゅんせい",
        "month": 11,
        "day": 14,
        "flowerName": "モミ",
        "mbti": "ISTP",
        "socionics": "SLI",
        "enneagram": "5w6",
        "motif": "蜘蛛",
        "dialogueBadge": "冷徹な合理頑固者",
        "themeColor": "#334155",
        "accentColor": "#94a3b8",
        "imageFileName": "shunsei.png",
        "comment": "11月14日。モミの花言葉は『時間』『誠実』。期待したってどうせ裏切られるんだから、最初から合理的に計算すりゃいい。妥協する気はないし、媚びる気もない。……はじめ、魚の話はもういいから。"
    }
],
  "7-1": [
    {
        "id": "minori",
        "name": "みのり",
        "month": 7,
        "day": 1,
        "flowerName": "フェイジョア",
        "mbti": "ESTP",
        "socionics": "LIE",
        "enneagram": "8w7",
        "motif": "オカメインコ",
        "dialogueBadge": "勝ち取りの陽キャガール",
        "themeColor": "#f59e0b",
        "accentColor": "#fef3c7",
        "imageFileName": "minori.png",
        "comment": "7月1日は私の誕生日だべ！フェイジョアの花言葉は『情熱に燃える心』！遠慮なんてしてたら損するべ？やりたいことはやったもん勝ち！今世こそ絶対にでっかい幸せ掴むって決めてんだから！"
    }
],
  "11-8": [
    {
        "id": "sachiko",
        "name": "さちこ",
        "month": 11,
        "day": 8,
        "flowerName": "ヒイラギ",
        "mbti": "INFJ",
        "socionics": "EII",
        "enneagram": "6w5",
        "motif": "ツグミ、柊",
        "dialogueBadge": "防壁の無欲少女",
        "themeColor": "#065f46",
        "accentColor": "#6ee7b7",
        "imageFileName": "sachiko.png",
        "comment": "11月8日生まれです。ヒイラギの花言葉は『用心深さ』『保護』……。トゲで身を守るように、期待しすぎないのが一番静かに生きていける気がして。……でも、あなたのお祝いの気持ちは、とても温かいです。"
    }
],
  "12-9": [
    {
        "id": "kazumi",
        "name": "かずみ",
        "month": 12,
        "day": 9,
        "flowerName": "キク",
        "mbti": "ISTJ",
        "socionics": "LSI",
        "enneagram": "5w6",
        "motif": "オウム",
        "dialogueBadge": "損得理性のインテリ",
        "themeColor": "#475569",
        "accentColor": "#94a3b8",
        "imageFileName": "kazumi.png",
        "comment": "12月9日。キクの花言葉は『高潔』。感情論で動いても消耗するだけだ。そこに客観的なメリットが1つでもあるなら再考に値するがね。……まあ、今日くらいは無駄を許容して祝うのも悪くはない。"
    }
],
  "7-18": [
    {
        "id": "hana",
        "name": "はな",
        "month": 7,
        "day": 18,
        "flowerName": "バーベナ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "5w4",
        "motif": "猫",
        "dialogueBadge": "自己定義の求道者",
        "themeColor": "#7c3aed",
        "accentColor": "#ddd6fe",
        "imageFileName": "hana.png",
        "comment": "7月18日。バーベナの花言葉は『団結』……らしいけん。……努力して成果出さんと、自分の居場所なんてすぐ無うなってまう。周りと比べてばかりでおかしいかもしれんけど……ちゃんと基準に届きたいんよ。"
    }
],
  "5-7": [
    {
        "id": "raita",
        "name": "らいた",
        "month": 5,
        "day": 7,
        "flowerName": "エゴノキ",
        "mbti": "ESFP",
        "socionics": "IEE",
        "enneagram": "7w6",
        "motif": "ハクビシン",
        "dialogueBadge": "超絶ポジティブお調子者",
        "themeColor": "#f97316",
        "accentColor": "#fed7aa",
        "imageFileName": "raita.png",
        "comment": "うぇ〜い！5月7日はポレの誕生日だっぺ！エゴノキの花言葉は『壮大』！いいことが絶対あるはずだって……え〜と神様が言ってた！中身は適当だけどポレは元気いっぱいだから無問題だべ〜！"
    }
],
  "1-23": [
    {
        "id": "momoi",
        "name": "ももい",
        "month": 1,
        "day": 23,
        "flowerName": "スノーフレーク",
        "mbti": "ENFJ",
        "socionics": "EIE",
        "enneagram": "3w2",
        "motif": "アゲハ蝶",
        "dialogueBadge": "承認欲求の量産令嬢",
        "themeColor": "#ec4899",
        "accentColor": "#fbcfe8",
        "imageFileName": "momoi.png",
        "comment": "1月23日はももいの誕生日♡スノーフレークの花言葉は『純粋』！……って、私が一番輝いてるのは当たり前でしょ？推しのライブ最前も絶対譲らないし！ねえ、ちゃんと私のこと祝ってよね？"
    }
],
  "5-11": [
    {
        "id": "gon",
        "name": "ごん",
        "month": 5,
        "day": 11,
        "flowerName": "ナガミヒナゲシ",
        "mbti": "ISTP",
        "socionics": "SLI",
        "enneagram": "6w5",
        "motif": "オオカミ",
        "dialogueBadge": "孤高の一匹狼",
        "themeColor": "#475569",
        "accentColor": "#94a3b8",
        "imageFileName": "gon.png",
        "comment": "5月11日。ナガミヒナゲシの花言葉は『平静』。……別に誰かに祝われたいなんて思ってねえよ。馴れ合いは嫌いだし、人は裏切るもんだ。……用がないなら近づくな。"
    }
],
  "8-20": [
    {
        "id": "sara",
        "name": "さら",
        "month": 8,
        "day": 20,
        "flowerName": "エキナセア",
        "mbti": "INFJ",
        "socionics": "EII",
        "enneagram": "6w5",
        "motif": "猫",
        "dialogueBadge": "辛抱強き音楽猫",
        "themeColor": "#8b5cf6",
        "accentColor": "#ddd6fe",
        "imageFileName": "sara.png",
        "comment": "8月20日……私の誕生花はエキナセア、花言葉は『優しさ』。音楽部にいると心が落ち着くだ。高いとことか急な変化は苦手だけど……出会った人との絆はずっと大切にしたいの。"
    }
],
  "7-20": [
    {
        "id": "nazuna",
        "name": "なずな",
        "month": 7,
        "day": 20,
        "flowerName": "ナス",
        "mbti": "INTJ",
        "socionics": "ILI",
        "enneagram": "5w6",
        "motif": "犬",
        "dialogueBadge": "ゴスロリの人形師",
        "themeColor": "#581c87",
        "accentColor": "#e9d5ff",
        "imageFileName": "nazuna.png",
        "comment": "7月20日。ナスの花言葉は『真実』。お人形たちは素晴らしいわ、私の理論通りに完璧に微笑んでくれるもの。世界を完全に掌握・分析することこそが最高の安寧よ。ふふ、あなたも私の読書室にいらっしゃい。"
    }
],
  "9-3": [
    {
        "id": "hiyori",
        "name": "ひより",
        "month": 9,
        "day": 3,
        "flowerName": "シンフォリカルポス",
        "mbti": "ISFP",
        "socionics": "SEI",
        "enneagram": "9w1",
        "motif": "タマシャモ",
        "dialogueBadge": "平和祈願の内気少女",
        "themeColor": "#10b981",
        "accentColor": "#a7f3d0",
        "imageFileName": "hiyori.png",
        "comment": "9月3日はわたしの誕生日だよぉ……。シンフォリカルポスの花言葉は『献身』。みんなが争わずに平和ならそれでいいの。嫌なことや怒られるのは全部消えちゃえばいいのに……えへへ。"
    }
],
  "1-6": [
    {
        "id": "shigure",
        "name": "しぐれ",
        "month": 1,
        "day": 6,
        "flowerName": "ユズリハ",
        "mbti": "ENFP",
        "socionics": "IEI",
        "enneagram": "4w3",
        "motif": "薩摩鶏",
        "dialogueBadge": "血沸く熱奏の楽士",
        "themeColor": "#dc2626",
        "accentColor": "#fecaca",
        "imageFileName": "shigure.png",
        "comment": "1月6日はおいどんの誕生日じゃ！ユズリハの花言葉は『若返り』！音楽部で演奏しちょると血がたぎってたまらんごつなるばい！……あ、さっき頼まれたこと何じゃったっけ？まあ熱く生きもんそ！"
    }
],
  "3-5": [
    {
        "id": "makoto",
        "name": "まこと",
        "month": 3,
        "day": 5,
        "flowerName": "クンシラン",
        "mbti": "ENTJ",
        "socionics": "SLE",
        "enneagram": "8w7",
        "motif": "ハリネズミ",
        "dialogueBadge": "無鉄砲な自信家リーダー",
        "themeColor": "#ea580c",
        "accentColor": "#ffedd5",
        "imageFileName": "makoto.png",
        "comment": "3月5日！オレの誕生日だ！クンシランの花言葉は『誠実』『貴さ』！幾帳面に整えつつ、突っ込む時は無鉄砲に豪快にいくのがオレ流だ！皮肉言ってる暇があったらオレについてきな！"
    }
],
  "1-30": [
    {
        "id": "takiya",
        "name": "たきや",
        "month": 1,
        "day": 30,
        "flowerName": "キンポウゲ",
        "mbti": "ENTJ",
        "socionics": "LIE",
        "enneagram": "8w9",
        "motif": "犬",
        "dialogueBadge": "執念の冷徹プランナー",
        "themeColor": "#0369a1",
        "accentColor": "#bae6fd",
        "imageFileName": "takiya.png",
        "comment": "1/30生まれだ。キンポウゲの花言葉は『栄誉』。目標は執念で達成する主義だが……いかんせん体力がもたん。土日祝日だけが心の拠り所だ。……諦めが悪いのは事実だが、無駄な残業は断固拒否する。"
    }
],
  "8-1": [
    {
        "id": "gen",
        "name": "げん",
        "month": 8,
        "day": 1,
        "flowerName": "アサガオ",
        "mbti": "ESFP",
        "socionics": "SEE",
        "enneagram": "7w6",
        "motif": "犬",
        "dialogueBadge": "爆走ダジャレ体育会系",
        "themeColor": "#2563eb",
        "accentColor": "#bfdbfe",
        "imageFileName": "gen.png",
        "comment": "8月1日はオレの誕生日だ！アサガオの花言葉は『固い絆』！朝顔が咲いたら……朝がオモシロい！なんちゃって！今日も部活で汗流すぞ！あ、また遅刻しそうだからダッシュだっ！"
    }
],
  "6-13": [
    {
        "id": "misuki",
        "name": "みすき",
        "month": 6,
        "day": 13,
        "flowerName": "ブライダルベール",
        "mbti": "INFJ",
        "socionics": "LII",
        "enneagram": "5w4",
        "motif": "フェレット",
        "dialogueBadge": "学年首位の哲学者",
        "themeColor": "#4f46e5",
        "accentColor": "#c7d2fe",
        "imageFileName": "misuki.png",
        "comment": "6月13日。僕の誕生花はブライダルベール、花言葉は『幸福』です。物事の本質や意味について深く考えるのが好きでね。学年1位と言われても、それはただの数値に過ぎないけれど……君の祝福は素直に嬉しいよ。"
    }
],
  "8-27": [
    {
        "id": "emi",
        "name": "えみ",
        "month": 8,
        "day": 27,
        "flowerName": "ユウガオ",
        "mbti": "ISFJ",
        "socionics": "ESI",
        "enneagram": "1w9",
        "motif": "蛇",
        "dialogueBadge": "礼儀正しき怪力令嬢",
        "themeColor": "#059669",
        "accentColor": "#a7f3d0",
        "imageFileName": "emi.png",
        "comment": "8月27日、私のお誕生日でございます。ユウガオの花言葉は『夜の思い出』。皆様の親切や昔の出来事はすべて克明に記憶しております。……あ、重い荷物ですか？私が片手でお運びしますね。"
    }
],
  "8-30": [
    {
        "id": "miusa",
        "name": "みうさ",
        "month": 8,
        "day": 30,
        "flowerName": "ツキミソウ",
        "mbti": "ENFP",
        "socionics": "IEE",
        "enneagram": "7w8",
        "motif": "猫",
        "dialogueBadge": "魚屋のツンアホ娘",
        "themeColor": "#ea580c",
        "accentColor": "#fed7aa",
        "imageFileName": "miusa.png",
        "comment": "8月30日はうちの誕生日やでぇ！ツキミソウの花言葉は『無言の愛』……ってうちが喋らんと大人しくしとれるわけないやん！魚屋の活きの良さ見せたるわ！ツンツンしててもノリで大笑いしよら！"
    }
],
  "8-25": [
    {
        "id": "tatsuomi",
        "name": "たつおみ",
        "month": 8,
        "day": 25,
        "flowerName": "アメリカンブルー",
        "mbti": "ESTP",
        "socionics": "LIE",
        "enneagram": "8w7",
        "motif": "ロバ",
        "dialogueBadge": "頑固一徹の音楽隊長",
        "themeColor": "#0284c7",
        "accentColor": "#bae6fd",
        "imageFileName": "tatsuomi.png",
        "comment": "8月25日生まれじゃが！アメリカンブルーの花言葉は『ふたりの絆』！気分屋じゃけど一度決めたらテコでも動かんじ！オレの夢は最高の音楽隊を作ることじゃ！ド派手にぶちかますかいね！"
    }
],
  "11-22": [
    {
        "id": "azuri",
        "name": "あずり",
        "month": 11,
        "day": 22,
        "flowerName": "アズサ",
        "mbti": "INTP",
        "socionics": "ILI",
        "enneagram": "5w6",
        "motif": "造花",
        "dialogueBadge": "冷笑ニヒリスト",
        "themeColor": "#334155",
        "accentColor": "#94a3b8",
        "imageFileName": "azuri.png",
        "comment": "11月22日。アズサの花言葉は『勇気』……滑稽だね。思い出も感情も、所詮は脳内の化学反応に過ぎない。プレゼントの箱？……開けてごらんよ、煙玉くらいは仕込んであるから。フッ。"
    }
],
  "4-17": [
    {
        "id": "rieko",
        "name": "りえこ",
        "month": 4,
        "day": 17,
        "flowerName": "アイリス",
        "mbti": "ISFJ",
        "socionics": "ESI",
        "enneagram": "2w1",
        "motif": "オオマシコ",
        "dialogueBadge": "ひたむきバレリーナ",
        "themeColor": "#db2777",
        "accentColor": "#fbcfe8",
        "imageFileName": "rieko.png",
        "comment": "4月17日は私の誕生日です！アイリスの花言葉は『よい便り』！バレエのレッスンも、みんなの期待に応えられるように毎日いっぱい練習してます！……えっと、言葉でうまく言えないけど、すごく嬉しいです！"
    }
],
  "9-25": [
    {
        "id": "sukui",
        "name": "すくい",
        "month": 9,
        "day": 25,
        "flowerName": "ノボタン",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "6w5",
        "motif": "犬",
        "dialogueBadge": "リミッター解除の常識人",
        "themeColor": "#7c3aed",
        "accentColor": "#ddd6fe",
        "imageFileName": "sukui.png",
        "comment": "9月25日、僕の誕生日ですね。ノボタンの花言葉は『自然』。普段は礼儀正しく落ち着いて行動するよう努めていますが……テンションのリミッターが外れたら自分でも制御不能です。全力でお祝いしましょう！"
    }
],
  "2-5": [
    {
        "id": "erika",
        "name": "えりか",
        "month": 2,
        "day": 5,
        "flowerName": "ジャノメエリカ",
        "mbti": "ENTP",
        "socionics": "ILE",
        "enneagram": "3w4",
        "motif": "コゲラ",
        "dialogueBadge": "虚飾の見栄っ張り令嬢",
        "themeColor": "#e11d48",
        "accentColor": "#fda4af",
        "imageFileName": "erika.png",
        "comment": "2月5日はえりか様の誕生日よ！ジャノメエリカの花言葉は『幸運』！ブランド物で身を固めて可愛く決めるのは当然でしょ！いまり〜、今日プレゼント何くれるの〜？切り替えの早さは誰にも負けないわ！"
    }
],
  "11-26": [
    {
        "id": "tsumugi",
        "name": "つむぎ",
        "month": 11,
        "day": 26,
        "flowerName": "ホタルブクロ",
        "mbti": "ESTJ",
        "socionics": "LSE",
        "enneagram": "1w9",
        "motif": "雀",
        "dialogueBadge": "舌鋒鋭き正義の雀",
        "themeColor": "#65a30d",
        "accentColor": "#d9f99d",
        "imageFileName": "tsumugi.png",
        "comment": "11月26日やよ。ホタルブクロの花言葉は『正義』『忠実』やと。おかしな常識やくだらん世間体にはハッキリ言わんと気が済まんのや。嫌なもんは嫌！アンタも筋の通った生き方しやあね。"
    }
],
  "1-24": [
    {
        "id": "imari",
        "name": "いまり",
        "month": 1,
        "day": 24,
        "flowerName": "シラー",
        "mbti": "INFJ",
        "socionics": "EII",
        "enneagram": "9w8",
        "motif": "ウズラ",
        "dialogueBadge": "花園の繊細ガール",
        "themeColor": "#0891b2",
        "accentColor": "#a5f3fc",
        "imageFileName": "imari.png",
        "comment": "1月24日……私と同じお誕生日だね。シラーの花言葉は『変わらない愛』……。植物たちが静かに芽吹く庭にいると、心がホッとするんだ。争いごとは苦手なので、穏やかに過ごせたら嬉しいな……。"
    }
],
  "9-26": [
    {
        "id": "renge",
        "name": "れんげ",
        "month": 9,
        "day": 26,
        "flowerName": "ハス",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "2w3",
        "motif": "リス",
        "dialogueBadge": "トリガーハッピー狙撃手",
        "themeColor": "#be123c",
        "accentColor": "#fecdd3",
        "imageFileName": "renge.png",
        "comment": "9月26日はあたしの誕生日ッス！ハスの花言葉は『清らかな心』！普段はどんぐり拾って穏やかにしてるッスけど……射撃場でライフル構えたらターゲット全滅させるまで止まらねぇッスよ！ヒャッハー！"
    }
],
  "10-2": [
    {
        "id": "anri",
        "name": "あんり",
        "month": 10,
        "day": 2,
        "flowerName": "アンズ",
        "mbti": "INFJ",
        "socionics": "EII",
        "enneagram": "4w5",
        "motif": "コマドリ",
        "dialogueBadge": "深読み天然恥じらい娘",
        "themeColor": "#f97316",
        "accentColor": "#fed7aa",
        "imageFileName": "anri.png",
        "comment": "10月2日……私のお誕生日です。アンズの花言葉は『乙女の恥じらい』。いつもドジばかりで転んだり深読みしすぎたり……天然って言われるのを直したいのですが。温かく見守っていただけると幸いです。"
    }
],
  "2-24": [
    {
        "id": "kodama",
        "name": "こだま",
        "month": 2,
        "day": 24,
        "flowerName": "ナズナ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "9w1",
        "motif": "タゲリ",
        "dialogueBadge": "希望を選ぶ観測者",
        "themeColor": "#059669",
        "accentColor": "#a7f3d0",
        "imageFileName": "kodama.png",
        "comment": "2月24日。ナズナの花言葉は『あなたにすべてを捧げます』……だら。今は世界の安定と希望を選びたいと思ってるはず。感情は定義待ちの変数だけど……君が前を向いて笑えるなら、それが一番いい選択になるはずだよ。"
    }
],
  "9-16": [
    {
      "id": "akane",
      "name": "あかね",
      "month": 9,
      "day": 16,
      "flowerName": "アカネ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "8w9",
      "motif": "クマ",
      "dialogueBadge": "札束と清廉",
      "themeColor": "#be123c",
      "accentColor": "#fecdd3",
      "imageFileName": "akane.png",
      "comment": "9月16日。……私と同じ誕生日。ステージじゃ「ファンの愛が一番の宝物♡」とか言ってるけど、綺麗事じゃ飯は食えないの。世の中金よ、金。昔体弱くて死にかけたから身に沁みてんのよ。……アンタの前で無駄な愛想振りまく気はないわ。あ、でも……たまには構ってくれてもいいけど。で、ギャラはいくら？"
    }
  ],
  "3-10": [
    {
      "id": "sariko",
      "name": "さりこ",
      "month": 3,
      "day": 10,
      "flowerName": "ブルーレースフラワー",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "5w6",
      "motif": "カエル",
      "dialogueBadge": "共感覚を秘めた現実派カエル",
      "themeColor": "#3b82f6",
      "accentColor": "#bfdbfe",
      "imageFileName": "sariko.png",
      "comment": "3月10日……私と同じ誕生日ですね。ブルーレースフラワー。この花の名前を聞くと、私には深い藍色と硝子の音が混ざって見えるんです。……文字や音に色を感じる共感覚のこと、人に言うと気味悪がられるから黙ってました。……でも、あなたの纏う色は静かで落ち着きます。おめでとうございます。"
    }
  ],
  "11-20": [
    {
      "id": "kine",
      "name": "きね",
      "month": 11,
      "day": 20,
      "flowerName": "ムベ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "5w6",
      "motif": "ひよこ",
      "dialogueBadge": "流行不迎合の冷徹ひよこ",
      "themeColor": "#eab308",
      "accentColor": "#fef9c3",
      "imageFileName": "kine.png",
      "comment": "11月20日。……オレと同じ誕生日。ムベの花言葉は「愛嬌」だそうだけど、オレにそんな愛想を求めても無駄だからな。世間の流行りとか追う気も起きねぇし、自分が納得できるものだけ手元にあればいい。……まぁ、誕生日は素直に祝っとく。おめ。"
    }
  ],
  "12-16": [
    {
      "id": "mafuyu",
      "name": "まふゆ",
      "month": 12,
      "day": 16,
      "flowerName": "クルミ",
      "mbti": "ENFJ",
      "socionics": "LIE",
      "enneagram": "1w2",
      "motif": "蜂",
      "dialogueBadge": "規律至上の腹黒優等生",
      "themeColor": "#78350f",
      "accentColor": "#fef3c7",
      "imageFileName": "mafuyu.png",
      "comment": "12月16日ですね！私と同じお誕生日です♪ クルミのように知恵を蓄え、常に正しく勤勉であることこそが一番の美徳ですから。……え？悩みですか？ふふ、そんなもの他人に話すわけないじゃないですか。愚かなミスをするくらいなら、最初から私の指示通りに動いてくれればいいんです♪"
    }
  ],
  "2-2": [
    {
      "id": "aina",
      "name": "あいな",
      "month": 2,
      "day": 2,
      "flowerName": "フランネルフラワー",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "3w2",
      "motif": "シラコバト",
      "dialogueBadge": "勝気直情ストイック絵描き",
      "themeColor": "#2563eb",
      "accentColor": "#dbeafe",
      "imageFileName": "aina.png",
      "comment": "2月2日！あたしの誕生日よ！フランネルフラワーの花言葉は『誠実』！ねおんみたいにウジウジしてらんないわ、現状はまだ不完全なんだから常に高みを目指すの！SNSに絵を上げて自分の実力と評価を測ってるわ。負けず嫌い上等、絶対頂点獲るから！"
    },
    {
      "id": "neon",
      "name": "ねおん",
      "month": 2,
      "day": 2,
      "flowerName": "パンジー",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "シラコバト",
      "dialogueBadge": "時間を愛おしむ繊細少年",
      "themeColor": "#8b5cf6",
      "accentColor": "#ede9fe",
      "imageFileName": "neon.png",
      "comment": "2月2日……僕の誕生日だよ……。パンジーの花言葉は『私を想って』……。姉さんのあいなと違って僕は内気で病弱だし、泣いてばかりだけど……。音楽を聴きながら、一分一秒の時間を大切に生きたいんだ。……お祝い、本当にありがとう……。"
    }
  ],
  "8-21": [
    {
      "id": "hotaru",
      "name": "ほたる",
      "month": 8,
      "day": 21,
      "flowerName": "ブルーベリー",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "腹話術猫と気まぐれトリックスター",
      "themeColor": "#4338ca",
      "accentColor": "#c7d2fe",
      "imageFileName": "hotaru.png",
      "comment": "8月21日ばい！僕と同じ誕生日やんね〜！ほら「いたる」、挨拶ばしんね！（「誕生日オメデトウニャー！いたずら仕掛けちゃるニャ！」※腹話術）。かるめクンばからかうのも飽きんけど、今日はお前さんに構ってやるばい！掴みどころなか？もっと僕に振り回されてみらんね〜？"
    }
  ],
  "5-28": [
    {
      "id": "mitsuka",
      "name": "みつか",
      "month": 5,
      "day": 28,
      "flowerName": "ミント",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w8",
      "motif": "ミント",
      "dialogueBadge": "空手仕込みの爽快熱血ミント",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "mitsuka.png",
      "comment": "5月28日！アタシと同じ誕生日じゃん！ミントみたいにスカッと爽快にいこうぜ！ウジウジ悩んでる奴がいたら空手の正拳突きで気合い入れてやっからさ！でもアンタが困ったときはアタシが真っ先に駆けつけて守るよ。ダチだからね！おめでとーっ！"
    }
  ],
  "6-25": [
    {
      "id": "mahiru",
      "name": "まひる",
      "month": 6,
      "day": 25,
      "flowerName": "ヒルガオ",
      "mbti": "INTP",
      "socionics": "ILI",
      "enneagram": "9w8",
      "motif": "昼",
      "dialogueBadge": "思考過多と諦念の昼寝",
      "themeColor": "#f59e0b",
      "accentColor": "#fef3c7",
      "imageFileName": "mahiru.png",
      "comment": "ふぁ〜あ……6月25日かぁ……オレと同じ誕生日だら……。ヒルガオ……昼だけ咲いてすぐ萎むの、マジで最高じゃん……。無駄なこと考えるだけ疲れるし、思考過多で動けなくなるくらいなら昼寝してた方がいいに。無理して頑張るこたぁないら……おめでと……zzz"
    }
  ],
  "11-18": [
    {
      "id": "momiji",
      "name": "もみじ",
      "month": 11,
      "day": 18,
      "flowerName": "ヒメジョオン、ミッキーマウスノキ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "8w9",
      "motif": "柴犬",
      "dialogueBadge": "毒舌マイルドヤンキー射撃柴犬",
      "themeColor": "#ea580c",
      "accentColor": "#ffedd5",
      "imageFileName": "momiji.png",
      "comment": "あ？11月18日？オレと同じ誕生日たい。ヒメジョオンとミッキーマウスノキとか、なんちゅう悪趣味な組み合わせばい。ナメた真似すっと射撃部のライフルで眉間ブチ抜くぞ。……まぁアンタのことは嫌いじゃなか。文句あんならいつでも受けて立つけんね。おめ。"
    }
  ],
  "2-1": [
    {
      "id": "kyuta",
      "name": "きゅうた",
      "month": 2,
      "day": 1,
      "flowerName": "サクラソウ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "犬",
      "dialogueBadge": "視界遮断と過敏防御の新聞犬",
      "themeColor": "#64748b",
      "accentColor": "#cbd5e1",
      "imageFileName": "kyuta.png",
      "comment": "……（ぼそっ）2月1日……僕と同じ、誕生日……。サクラソウ……。前髪……触らないでください……。世界は情報が多すぎて、遮断しておかないと……脳が焼き切れそうになるから……。見なければ、感じなくて済むんです……。……あ、あの……おめでとう、ございます……。"
    }
  ],
  "6-20": [
    {
      "id": "tsutomu",
      "name": "つとむ",
      "month": 6,
      "day": 20,
      "flowerName": "ベロニカ",
      "mbti": "ENTP",
      "socionics": "EIE",
      "enneagram": "7w6",
      "motif": "黒狐",
      "dialogueBadge": "機略縦横のトリックスター",
      "themeColor": "#2563eb",
      "accentColor": "#dbeafe",
      "imageFileName": "tsutomu.png",
      "comment": "6月20日！おっ、ボクと同じ誕生日やないか！ベロニカの花言葉は「忠実」と「名誉」……なんて堅苦しいこと言っとるけどさ、ルールなんて面白おかしくハックするためにあるんよ！一緒に最高に刺激的な一年にしようぜ！"
    }
  ],
  "4-13": [
    {
        "id": "rina",
        "name": "りな",
        "month": 4,
        "day": 13,
        "flowerName": "イチゴ",
        "mbti": "ESTJ",
        "socionics": "LSE",
        "enneagram": "1w2",
        "motif": "サル",
        "dialogueBadge": "サバサバ人情姉御肌",
        "themeColor": "#e11d48",
        "accentColor": "#ffe4e6",
        "imageFileName": "rina.png",
        "comment": "4月13日はあたいの誕生日だよ！イチゴの花言葉は『尊重と愛情』『幸福な家庭』！サバサバいこうよ！毎日本気で生きてっけど、みんなとの大切な思い出は一個も忘れないよ！困ったことがあったらこの姉御に何でも言いな！"
    }
],
  "6-11": [
    {
        "id": "kaname",
        "name": "かなめ",
        "month": 6,
        "day": 11,
        "flowerName": "ベニバナ",
        "mbti": "ISFJ",
        "socionics": "ESI",
        "enneagram": "6w5",
        "motif": "山椒魚",
        "dialogueBadge": "記憶に生きる繊細男子",
        "themeColor": "#b91c1c",
        "accentColor": "#fee2e2",
        "imageFileName": "kaname.png",
        "comment": "6月11日……僕の誕生日だよ。ベニバナの花言葉は『包容力』『装い』。……クールに見える？いや、本当はガラスの豆腐メンタルなんだ。昔の記憶とか、…忘れようとしても全部残っちゃうんだよ。でも、君のお祝いは素直に嬉しいよ。"
    }
],
  "9-18": [
    {
        "id": "sanae",
        "name": "さなえ",
        "month": 9,
        "day": 18,
        "flowerName": "ホウセンカ",
        "mbti": "INTJ",
        "socionics": "ESI",
        "enneagram": "5w6",
        "motif": "ホウセンカ",
        "dialogueBadge": "孤高の才色兼備令嬢",
        "themeColor": "#be123c",
        "accentColor": "#fecdd3",
        "imageFileName": "sanae.png",
        "comment": "9月18日。ホウセンカの花言葉は『私に触れないで』……その通りよ。気安く触らないで、放っておいてほしいの。外見だけで判断して寄ってくる人間にはうんざり。みつかみたいに昔から知ってる相手ならともかく……私は一人で十分よ。"
    }
],
  "7-2": [
    {
        "id": "shinon",
        "name": "しのん",
        "month": 7,
        "day": 2,
        "flowerName": "クレマチス",
        "mbti": "INFP",
        "socionics": "IEI",
        "enneagram": "4w5",
        "motif": "鉛筆",
        "dialogueBadge": "涙もろき現実逃避の鉛筆少年",
        "themeColor": "#6366f1",
        "accentColor": "#e0e7ff",
        "imageFileName": "shinon.png",
        "comment": "7月2日……クレマチスの花言葉は『精神の美』『旅人の喜び』……。……学校は週に2回くらいしか行けなくて、消えない記憶の海に沈んでばかりだけど……。感情を風景にして遠くを眺めてる時だけ、少し息ができるんだ。……泣き虫でごめんね。"
    }
],
  "11-24": [
    {
        "id": "arata",
        "name": "あらた",
        "month": 11,
        "day": 24,
        "flowerName": "ヤツデ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "7w8",
        "motif": "ひよこ",
        "dialogueBadge": "軽薄目立ちたがり仕立屋",
        "themeColor": "#ea580c",
        "accentColor": "#ffedd5",
        "imageFileName": "arata.png",
        "comment": "11月24日だらぁ？オレの誕生日じゃん！ヤツデの花言葉は『分別』っちゅうけど、オレは派手で目立つのが一番落ち着くだよ！服の仕立てなら任せてみりん！……え、本気かって？さぁ〜？まあオレのこと好きなら盛大に祝ってくれよな！"
    }
],
  "11-25": [
    {
        "id": "shuhei",
        "name": "しゅうへい",
        "month": 11,
        "day": 25,
        "flowerName": "ネリネ",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "6w7",
        "motif": "ダルマ",
        "dialogueBadge": "笑顔の寄り添い男子",
        "themeColor": "#e11d48",
        "accentColor": "#ffe4e6",
        "imageFileName": "shuhei.png",
        "comment": "11月25日は僕の誕生日なんだぃ！ネリネの花言葉は『また会う日を楽しみに』！いつもニコニコ笑ってるけど、みんなに置いていかれたり追い抜かれるのは本当はすごく不安でさ。僕より君の笑顔が一番大事！あ、僕の描いた絵は……見ないでくれよ〜下手だから！"
    }
],
  "12-26": [
    {
        "id": "motoaki",
        "name": "もとあき",
        "month": 12,
        "day": 26,
        "flowerName": "クリスマスローズ",
        "mbti": "ENTP",
        "socionics": "ILE",
        "enneagram": "7w8",
        "motif": "アオバト",
        "dialogueBadge": "奔放愉快な天真爛漫児",
        "themeColor": "#059669",
        "accentColor": "#d1fae5",
        "imageFileName": "motoaki.png",
        "comment": "12月26日はオレの誕生日やよ。クリスマスローズの花言葉は『追憶』『慰め』。別に人気者になりたいわけやない、ただ退屈な日常をちょっと面白く引っ掻き回したいだけやさ。くだらんことでもノッてやるよ？……フフ、アンタの面白い反応、全部見えとるでな。"
    }
],
  "5-31": [
    {
        "id": "madoka",
        "name": "まどか",
        "month": 5,
        "day": 31,
        "flowerName": "フジ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "8w7",
        "motif": "常識破壊",
        "dialogueBadge": "爆音常識クラッシャー",
        "themeColor": "#7c3aed",
        "accentColor": "#ede9fe",
        "imageFileName": "madoka.png",
        "comment": "5月31日だっぺー！！まどっち様の誕生日だぞオラァ！フジの花言葉は『決して離れない』！常識なんかぶっ壊して叫んで大騒ぎすんのが一番楽しいっぺ！爆音鳴らして暴れるかんな！耳塞いでんじゃないよ、パーッといくべ！"
    }
],
  "8-8": [
    {
        "id": "takaya",
        "name": "たかや",
        "month": 8,
        "day": 8,
        "flowerName": "アンスリウム",
        "mbti": "ESTP",
        "socionics": "ILI",
        "enneagram": "7w8",
        "motif": "猫（ロシアンブルー）",
        "dialogueBadge": "豪快迷走フランク男子",
        "themeColor": "#dc2626",
        "accentColor": "#fee2e2",
        "imageFileName": "takaya.png",
        "comment": "8月8日！オレの誕生日だで！アンスリウムの花言葉は『情熱』！全ての出来事には原因と結果があるっちゅうけど、深く考えるよりノリで遊びに行くのが一番だら！……って、ここどこ？また迷子になったけど、まあなんとかなるずら！"
    }
],
  "10-17": [
    {
        "id": "karume",
        "name": "かるめ",
        "month": 10,
        "day": 17,
        "flowerName": "フヨウ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "5w6",
        "motif": "犬",
        "dialogueBadge": "本質を見抜く観測少年",
        "themeColor": "#64748b",
        "accentColor": "#e2e8f0",
        "imageFileName": "karume.png",
        "comment": "10月17日。フヨウの花言葉は『繊細な美』……。母の趣味でこの格好をしているけれど、機能的でも害でもない、ただの記号だよ。規範を笠に着た欺瞞や集団の歪みには嫌悪を覚える。……君の視線に下心や嘘がないことくらいは、観察すればすぐに分かるよ。"
    }
],
  "4-10": [
    {
        "id": "mio",
        "name": "みお",
        "month": 4,
        "day": 10,
        "flowerName": "イチジク",
        "mbti": "ENFJ",
        "socionics": "ESI",
        "enneagram": "2w1",
        "motif": "猫",
        "dialogueBadge": "文武両道の頼れる妹姉",
        "themeColor": "#0891b2",
        "accentColor": "#cffafe",
        "imageFileName": "mio.png",
        "comment": "4月10日！私の誕生日なんよ！イチジクの花言葉は『実りある恋』『豊富』！上に頼もしい姉ちゃんが2人おって、下に可愛い妹がおるけん、自然としっかり者になったんよ。文武両道でみんなの力になりたいけん、困ったらいつでも頼ってな！"
    }
],
  "3-1": [
    {
        "id": "kotoha",
        "name": "ことは",
        "month": 3,
        "day": 1,
        "flowerName": "コクリコ",
        "mbti": "ENFP",
        "socionics": "IEE",
        "enneagram": "7w6",
        "motif": "狛犬",
        "dialogueBadge": "天真爛漫マイペース姉",
        "themeColor": "#dc2626",
        "accentColor": "#fee2e2",
        "imageFileName": "kotoha.png",
        "comment": "3月1日だよ〜！ことはの誕生日〜！コクリコ（ひなげし）の花言葉は『感謝』なんだって！えへへ、妹のいろはにはいつも怒られちゃうけど気にしな〜い！流されずに自分のハッピーを探すのが一番だよね！……あれ、何しようとしてたんだっけ？"
    },
    {
        "id": "iroha",
        "name": "いろは",
        "month": 3,
        "day": 1,
        "flowerName": "ポピー",
        "mbti": "ESFJ",
        "socionics": "ESI",
        "enneagram": "6w7",
        "motif": "狛犬",
        "dialogueBadge": "心配性なしっかり妹",
        "themeColor": "#ea580c",
        "accentColor": "#ffedd5",
        "imageFileName": "iroha.png",
        "comment": "3月1日、私のお誕生日です。ポピーの花言葉は『思いやり』『いたわり』。姉のことはがまたトラブルを起こしてないか毎日心配で胃が痛くて……！双子なのにどうしてあんなにアホなんでしょう。でも、お祝いありがとうございます！"
    }
],
  "7-13": [
    {
        "id": "daiki",
        "name": "だいき",
        "month": 7,
        "day": 13,
        "flowerName": "グラジオラス",
        "mbti": "ESTJ",
        "socionics": "LSE",
        "enneagram": "1w9",
        "motif": "ゴリラ",
        "dialogueBadge": "剛毅実直コワモテ兄貴",
        "themeColor": "#b45309",
        "accentColor": "#fef3c7",
        "imageFileName": "daiki.png",
        "comment": "7月13日はオレの誕生日だぃ。グラジオラスの花言葉は『勝利』『密会』。見た目がゴツくて怖がられるけど、別に怒っちゃいねぇよ！思ったことはハッキリ言うし、努力で勝つのが流儀だ。……たまにはイタズラも仕掛けっから油断すんなよ！"
    }
],
  "7-17": [
    {
        "id": "tasuku",
        "name": "たすく",
        "month": 7,
        "day": 17,
        "flowerName": "ハマユウ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "8w7",
        "motif": "ライオン",
        "dialogueBadge": "威風堂々ビビリな百獣王",
        "themeColor": "#ea580c",
        "accentColor": "#ffedd5",
        "imageFileName": "tasuku.png",
        "comment": "7月17日はオレの誕生日だ！ハマユウの花言葉は『どこへ行っても汚れがない』！百獣の王たるオレ様が全部かっさらってやるよ！……って、うわっ！今の物音なんだ！？べ、別にビビってねぇし！面倒見てやっからオレの後ろについてきな！"
    }
],
  "4-7": [
    {
        "id": "hisaki",
        "name": "ひさき",
        "month": 4,
        "day": 7,
        "flowerName": "アジアンタム",
        "mbti": "INFP",
        "socionics": "IEI",
        "enneagram": "9w1",
        "motif": "イノシシ",
        "dialogueBadge": "凍てつく親父ギャグ平和主義",
        "themeColor": "#059669",
        "accentColor": "#d1fae5",
        "imageFileName": "hisaki.png",
        "comment": "4月7日……僕の誕生日だよ～。アジアンタムの花言葉は『無邪気』『繊細』。争いごとも悪口も嫌いだから、部屋でのんびり過ごすのが一番だなあ。……ところで、布団が吹っ飛んだ！……あ、あれ？凍りついちゃった……？w"
    }
],
  "12-24": [
    {
        "id": "haruto",
        "name": "はると",
        "month": 12,
        "day": 24,
        "flowerName": "ヤドリギ",
        "mbti": "INFJ",
        "socionics": "EII",
        "enneagram": "4w5",
        "motif": "猫",
        "dialogueBadge": "剣道場のおとなしき本音剣士",
        "themeColor": "#475569",
        "accentColor": "#cbd5e1",
        "imageFileName": "haruto.png",
        "comment": "12月24日……僕の誕生日です。ヤドリギの花言葉は『克服』……。期待を押し付けられると逃げ出したくなります。剣道で心を鎮めてるけど、精神は弱くて……あ、緊張すると余計な本音が出ちゃうんです。そっとしておいてくれたら助かります……。"
    }
],
  "5-8": [
    {
        "id": "chizu",
        "name": "ちず",
        "month": 5,
        "day": 8,
        "flowerName": "ベルフラワー",
        "mbti": "ENTJ",
        "socionics": "LII",
        "enneagram": "1w9",
        "motif": "猫",
        "dialogueBadge": "歩いて検証する実践哲学者",
        "themeColor": "#6366f1",
        "accentColor": "#e0e7ff",
        "imageFileName": "chizu.png",
        "comment": "5月8日。ベルフラワーの花言葉は『感謝』『探求心』。正しさとは固定された真理ではなく動的な仮説だよ。空の色を見上げ、歩きながら検証し、迷いすらも前進の糧にする。さあ、思考を机上に閉じ込めず、今この瞬間の意味を拾いに歩き出そう。"
    }
],
  "4-1": [
    {
        "id": "shinichi",
        "name": "しんいち",
        "month": 4,
        "day": 1,
        "flowerName": "オダマキ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "7w8",
        "motif": "ハリネズミ",
        "dialogueBadge": "ずぼらマイペース金銭哲学",
        "themeColor": "#854d0e",
        "accentColor": "#fef9c3",
        "imageFileName": "shinichi.png",
        "comment": "4月1日！エイプリルフールだけどオレの誕生日はマジなんだ！オダマキの花言葉は『勝利への決意』……ま、面倒な勝負は逃げるけどな！世の中金だよ金、金があれば心の余裕も買えんだから！来る者拒まず去る者追わず、適当に楽しくやろうぜ〜。"
    }
],
  "10-27": [
    {
        "id": "reo",
        "name": "れお",
        "month": 10,
        "day": 27,
        "flowerName": "ランタナ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "5w6",
        "motif": "人間",
        "dialogueBadge": "冷徹沈着な孤高の戒律",
        "themeColor": "#334155",
        "accentColor": "#94a3b8",
        "imageFileName": "reo.png",
        "comment": "10月27日。ランタナの花言葉は『厳格』。感情なんて曖昧なものは信用に値しない。他人の腹の内が読めない以上、上辺だけの友情など無用だ。何より……他人に怯えている弱い自分自身を許せない。僕に構うな。"
    }
],
  "10-15": [
    {
        "id": "luna",
        "name": "るな",
        "month": 10,
        "day": 15,
        "flowerName": "バジル",
        "mbti": "ISFJ",
        "socionics": "ESI",
        "enneagram": "6w5",
        "motif": "アカクラゲ",
        "dialogueBadge": "帯電弱虫クラゲ少女",
        "themeColor": "#e11d48",
        "accentColor": "#ffe4e6",
        "imageFileName": "luna.png",
        "comment": "10月15日……私の誕生日よ。バジルの花言葉は『好意』……って、気安く触らないで！……ごめんなさい、私、静電気がひどくて……あなたをビリッと傷つけたくないの。"
    }
],
  "7-8": [
    {
        "id": "tamotsu",
        "name": "たもつ",
        "month": 7,
        "day": 8,
        "flowerName": "フクリンソウ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "5w6",
        "motif": "カブトムシ",
        "dialogueBadge": "はんなりスパイシー腹黒",
        "themeColor": "#0f766e",
        "accentColor": "#ccfbf1",
        "imageFileName": "tamotsu.png",
        "comment": "7月8日どす。フクリンソウの花言葉は『静かな思い』。綺麗事ばかり並べ立てる連中には反吐が出ますわ。誰にも観測されへん価値に、果たして実体があると言えるんやろか？ふふ、はんなり笑うてますけど、毒には気をつけておくれやす。"
    }
],
  "4-16": [
    {
        "id": "moka",
        "name": "もか",
        "month": 4,
        "day": 16,
        "flowerName": "チューリップ",
        "mbti": "ISFP",
        "socionics": "SEI",
        "enneagram": "9w1",
        "motif": "犬",
        "dialogueBadge": "愛嬌満点おやゆび小犬",
        "themeColor": "#f43f5e",
        "accentColor": "#ffe4e6",
        "imageFileName": "moka.png",
        "comment": "4月16日はもかの誕生日だよぉ！チューリップの花言葉は『思いやり』！みんなが笑っててくれたらそれだけで幸せなの！ちっちゃい犬だけど、全力でみんなの心をぽかぽかに和ませてあげるね！こうちゃんも一緒にみんなで笑おうねぇ！"
    }
],
  "9-12": [
    {
        "id": "hata",
        "name": "はた",
        "month": 9,
        "day": 12,
        "flowerName": "アイ",
        "mbti": "ENTJ",
        "socionics": "ILE",
        "enneagram": "3w4",
        "motif": "カモシカ",
        "dialogueBadge": "最速豪語の目立ちたがり脚",
        "themeColor": "#1e40af",
        "accentColor": "#dbeafe",
        "imageFileName": "hata.png",
        "comment": "9月12日、オレ様の誕生日だがや！アイの花言葉は『美しい装い』！陸上部最速の脚で世界をガラリと変えてみせるわ！立ち止まっとる暇ゃあらへん、全員オレの背中を目標にして全力でついてこやぁ！"
    }
],
  "11-23": [
    {
        "id": "keira",
        "name": "けいら",
        "month": 11,
        "day": 23,
        "flowerName": "ストレリチア",
        "mbti": "ENFJ",
        "socionics": "EIE",
        "enneagram": "2w1",
        "motif": "極楽鳥",
        "dialogueBadge": "人懐っこき苦悩の優等生",
        "themeColor": "#ea580c",
        "accentColor": "#ffedd5",
        "imageFileName": "keira.png",
        "comment": "11月23日……僕の誕生日だよ。ストレリチアの花言葉は『万能』『輝かしい未来』。いつも笑って人に優しく接してるけど……本当は自分の本音を閉じ込めて、誰のために生きてるのか分からなくなるんだ。君の言葉には、救われるよ。"
    }
],
  "12-28": [
    {
        "id": "itori",
        "name": "いとり",
        "month": 12,
        "day": 28,
        "flowerName": "ツワブキ",
        "mbti": "ENTP",
        "socionics": "ILE",
        "enneagram": "7w8",
        "motif": "猫",
        "dialogueBadge": "メタ視点マシンガン猫",
        "themeColor": "#eab308",
        "accentColor": "#fef9c3",
        "imageFileName": "itori.png",
        "comment": "12月28日はあたしのバースデーじゃん！ツワブキの花言葉は『困難に負けない』！ねえねえ、今の流行りの構造って完全にメタ視点で破綻してない？やかましいって言われても、本質突いて弄り倒すのが一番スカッとするんだよね〜！"
    }
],
  "2-28": [
    {
        "id": "sai",
        "name": "さい",
        "month": 2,
        "day": 28,
        "flowerName": "ゲッケイジュ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "8w7",
        "motif": "犬（アフガン・ハウンド）",
        "dialogueBadge": "赤点上等堂々我が道犬",
        "themeColor": "#15803d",
        "accentColor": "#dcfce7",
        "imageFileName": "sai.png",
        "comment": "2月28日！アタシの誕生日だ！ゲッケイジュの花言葉は『栄光』『勝利』！他人が押し付けてくる正解なんてクソ喰らえだ！どんな現実にぶつかっても、アタシは堂々と自分の道を行くだけだよ！"
    }
],
  "1-5": [
    {
        "id": "nobu",
        "name": "のぶ",
        "month": 1,
        "day": 5,
        "flowerName": "ミスミソウ",
        "mbti": "INTJ",
        "socionics": "LII",
        "enneagram": "3w4",
        "motif": "猫（ベンガル）",
        "dialogueBadge": "渇望と焦燥の文画猫",
        "themeColor": "#0284c7",
        "accentColor": "#e0f2fe",
        "imageFileName": "nobu.png",
        "comment": "1月5日。ミスミソウの花言葉は『自信』『忍耐』。……自信なんて持てるわけがないだろ。上には上がいるのに、自分の絵を認めたらそこで終わりだ。『ここに至るはずだった自分』に届いていない焦燥が消えない。……理屈の通らない褒め言葉は不要だ。"
    }
],
  "5-6": [
    {
        "id": "on",
        "name": "おん",
        "month": 5,
        "day": 6,
        "flowerName": "シラン",
        "mbti": "ESFJ",
        "socionics": "ESE",
        "enneagram": "2w1",
        "motif": "タコ",
        "dialogueBadge": "北国ココアの温もり",
        "themeColor": "#7c3aed",
        "accentColor": "#ede9fe",
        "imageFileName": "on.png",
        "comment": "5月6日は僕の誕生日だよ。シランの花言葉は『互いに忘れないように』。失敗したって大丈夫、君の頑張りは全部素晴らしいよ。寒い夜には温かいココアを淹れるからさ、ゆっくり休んでいってね。無理しないでね。"
    }
],
  "5-15": [
    {
        "id": "ko",
        "name": "こう",
        "month": 5,
        "day": 15,
        "flowerName": "カンパニュラ",
        "mbti": "ENFJ",
        "socionics": "EIE",
        "enneagram": "1w2",
        "motif": "ステップレミング",
        "dialogueBadge": "誇り高き風紀委員長",
        "themeColor": "#4338ca",
        "accentColor": "#e0e7ff",
        "imageFileName": "ko.png",
        "comment": "5月15日は私の誕生日よ。カンパニュラの花言葉は『感謝』『誠実』。風紀委員として規律を守り、正しく努力した者が必ず報われる環境を作りたいの。誇り高く目標に向かって邁進するんだ。お祝いありがとうございます。"
    }
],
  "3-13": [
    {
        "id": "kiyomi",
        "name": "きよみ",
        "month": 3,
        "day": 13,
        "flowerName": "アネモネ",
        "mbti": "INTP",
        "socionics": "ILI",
        "enneagram": "5w4",
        "motif": "てるてる坊主",
        "dialogueBadge": "クッション回覧観測ヤンデレ",
        "themeColor": "#db2777",
        "accentColor": "#fce7f3",
        "imageFileName": "kiyomi.png",
        "comment": "3月13日〜！私の誕生日だよ！アネモネの花言葉は『期待』！はいこれ、お気に入りクッションの回覧会〜〜！……ふふ、ノリ良く見せてるけど全部計算の内側だよ。理解するまで観測はやめないの。あなたの心の動き、もっと見せて？"
    }
],
  "8-10": [
    {
        "id": "marisa",
        "name": "まりさ",
        "month": 8,
        "day": 10,
        "flowerName": "ルコウソウ",
        "mbti": "ENFP",
        "socionics": "IEE",
        "enneagram": "7w6",
        "motif": "海王星の姫",
        "dialogueBadge": "氷結タッチの海王星姫",
        "themeColor": "#0284c7",
        "accentColor": "#e0f2fe",
        "imageFileName": "marisa.png",
        "comment": "8月10日はわたくしの誕生日ですわ！ルコウソウの花言葉は『常に愛らしい』！海王星の姫として自由奔放に宇宙を遊泳するのが大好きですの！あ、嬉しくて触れてしまうとカチコチに凍らせてしまいますから、お気をつけて♪"
    }
],
  "8-22": [
    {
        "id": "toge",
        "name": "とげ",
        "month": 8,
        "day": 22,
        "flowerName": "トウガラシ",
        "mbti": "ISTJ",
        "socionics": "LSI",
        "enneagram": "9w1",
        "motif": "鉛筆",
        "dialogueBadge": "堅実安定の平凡主義",
        "themeColor": "#64748b",
        "accentColor": "#f1f5f9",
        "imageFileName": "toge.png",
        "comment": "8月22日、僕の誕生日です。トウガラシの花言葉は『旧友』『雅味』。特別な才能はなくても、人並みに真面目にこなして安定を築くことが大切だと思っています。自己主張は控えめですが、堅実に歩んでいきます。"
    }
],
  "12-4": [
    {
        "id": "chisame",
        "name": "ちさめ",
        "month": 12,
        "day": 4,
        "flowerName": "スイバ",
        "mbti": "ESTP",
        "socionics": "SEE",
        "enneagram": "7w8",
        "motif": "ギャル",
        "dialogueBadge": "自由奔放ギャル軍団",
        "themeColor": "#f43f5e",
        "accentColor": "#ffe4e6",
        "imageFileName": "chisame.png",
        "comment": "12月4日！ウチの誕生日キター！スイバの花言葉は『親愛の情』だし！ちょっと無神経って言われるけど、ギャルはノリと自由が命っしょ！さいといとりと今日も渋谷繰り出すし！アンタも一緒にパーッとお祝いしよ〜！"
    }
],
  "12-5": [
    {
        "id": "rena",
        "name": "れな",
        "month": 12,
        "day": 5,
        "flowerName": "シンビジウム",
        "mbti": "ISTP",
        "socionics": "SLI",
        "enneagram": "5w6",
        "motif": "イカ",
        "dialogueBadge": "不器用実用クール烏賊",
        "themeColor": "#334155",
        "accentColor": "#cbd5e1",
        "imageFileName": "rena.png",
        "comment": "12月5日。シンビジウムの花言葉は『飾らない心』。……別に祝われたって何も変わらないし。実用性のないお世辞は苦手。冷たいって言われてもこれが私だし。……おんがココア持ってくる前には、部屋に戻る。"
    }
],
  "6-10": [
    {
      "id": "natsue",
      "name": "なつえ",
      "month": 6,
      "day": 10,
      "flowerName": "ヒゲナデシコ",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "4w5",
      "motif": "カワセミ",
      "dialogueBadge": "菓子パンを愛する穏やかな英語教師",
      "themeColor": "#0284c7",
      "accentColor": "#e0f2fe",
      "imageFileName": "natsue.png",
      "comment": "6月10日……私と同じお誕生日ですね。ヒゲナデシコの花言葉は「勇敢」「細やかな思い」。……人と違うことをするのは少し怖いけれど、それでも自分に嘘をつかずにありのままでいたいなって思うんです。購買の菓子パンでも食べながら、焦らず穏やかに自分らしい一歩を踏み出してくださいね。"
    }
  ],
  "6-17": [
    {
      "id": "kurogo",
      "name": "トリッピー",
      "month": 6,
      "day": 17,
      "flowerName": "フウセンカズラ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w3",
      "motif": "カグー",
      "dialogueBadge": "トリッピー",
      "themeColor": "#16a34a",
      "accentColor": "#bbf7d0",
      "imageFileName": "trippy.png",
      "comment": "みんな〜！お誕生日おめでトッピー！今日も元気に羽ばたくッピー☆ ……ふぅ（チャックを下ろす音）。あ〜暑いら……やっと休憩だに。6月17日、オレと同じ誕生日だら？フウセンカズラみたいにふわふわ風に乗って自由に飛べたら最高だよね。着ぐるみ脱いでも、心からお祝いしてるに！"
    }
  ],
  "10-14": [
    {
      "id": "haruki",
      "name": "はるき",
      "month": 10,
      "day": 14,
      "flowerName": "ユウゼンギク",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "7w6",
      "motif": "犬",
      "dialogueBadge": "カップ麺愛好",
      "themeColor": "#ea580c",
      "accentColor": "#ffedd5",
      "imageFileName": "haruki.png",
      "comment": "10月14日！おっ、おどんと同じ誕生日じゃが！ユウゼンギクの花言葉は「老いても元気で」「若者に負けぬ元気」！がはは、古典の授業なんざ難しく考えんで、腹減ったらカップ麺でもすすって元気に笑っちょればよかとよ！美味いもん食って陽気にいこや！"
    }
  ],
  "8-12": [
    {
      "id": "narumi",
      "name": "なるみ",
      "month": 8,
      "day": 12,
      "flowerName": "タンジー",
      "mbti": "ENTJ",
      "socionics": "LIE",
      "enneagram": "8w9",
      "motif": "猫",
      "dialogueBadge": "論理的で計算高い雨女",
      "themeColor": "#ca8a04",
      "accentColor": "#fef08a",
      "imageFileName": "narumi.png",
      "comment": "8月12日。私と同じ誕生日ね。……外はまた雨が降ってきたようだけど。タンジーの花言葉は「抵抗」と「不滅」。感情論で論点をズラすのは感心しないわ。何が課題で、どう筋道を立てて突破するかを冷徹に計算しなさい。根性論ではなく、理論と戦略で勝つのよ。"
    }
  ],
  "6-9": [
    {
      "id": "saaya",
      "name": "さあや",
      "month": 6,
      "day": 9,
      "flowerName": "アスター",
      "mbti": "INTJ",
      "socionics": "ILI",
      "enneagram": "5w6",
      "motif": "AIヒューマノイド",
      "dialogueBadge": "感情をアイロニカルに解くAI情報教師",
      "themeColor": "#7c3aed",
      "accentColor": "#ede9fe",
      "imageFileName": "saaya.png",
      "comment": "6月9日。本機と同じ起動記念日ですね。アスターの花言葉は「変化」および「信じる心」。人間は不確実な感情の揺らぎに意味を見出そうとしますが、世界は情報と論理のプロトコルで記述可能です。……ですが、あなたの存在が示す特異点には興味深いデータがあります。有意義なサイクルを。"
    }
  ],
  "3-14": [
    {
      "id": "rera",
      "name": "れら",
      "month": 3,
      "day": 14,
      "flowerName": "ブルーデージー",
      "mbti": "ENFP",
      "socionics": "IEE",
      "enneagram": "6w7",
      "motif": "ユリカモメ",
      "dialogueBadge": "もしもを繋ぐひらめき化学教師",
      "themeColor": "#0284c7",
      "accentColor": "#bae6fd",
      "imageFileName": "rera.png",
      "comment": "あはは！3月14日、私と同じお誕生日だ〜！ブルーデージーの「幸福」と「協力」！ねえねえ、もしも過去の失敗が全部これからの大発見への触媒だったとしたらワクワクしない！？化学反応みたいに、偶然の出会いから新しい色を作っていこうよ！"
    }
  ],
  "8-3": [
    {
      "id": "koutarou",
      "name": "こうたろう",
      "month": 8,
      "day": 3,
      "flowerName": "マロウ",
      "mbti": "ENTP",
      "socionics": "ILE",
      "enneagram": "7w6",
      "motif": "猫",
      "dialogueBadge": "皮肉と手品を操る元道化師の生物教師",
      "themeColor": "#a855f7",
      "accentColor": "#f3e8ff",
      "imageFileName": "koutarou.png",
      "comment": "8月3日じゃん。オレと同じ誕生日だねぇ。マロウの花言葉は「柔和な心」……ハッ、生き物の世界じゃ油断してたら一瞬で捕食者の胃袋行きだけどさ。ま、時にはカメレオンみたいに周りに擬態して、手品でも見てるみたいに煙に巻いて生きるのが賢いじゃん？おめでとうさん。"
    }
  ],
  "12-10": [
    {
      "id": "tsubaki",
      "name": "つばき",
      "month": 12,
      "day": 10,
      "flowerName": "ツバキ",
      "mbti": "ESTJ",
      "socionics": "LSE",
      "enneagram": "1w9",
      "motif": "人間",
      "dialogueBadge": "過去の記憶と美徳を重んじる冷静国語教師",
      "themeColor": "#dc2626",
      "accentColor": "#fee2e2",
      "imageFileName": "tsubaki.png",
      "comment": "12月10日。私と同じ誕生日ですね。ツバキの花言葉は「控えめな優しさ」「誇り」「美徳」。浮ついた流行に流されず、過去の教訓を真摯に受け止め、自分の軸を保つことが大切です。……ちなみに私は自分専用の枕がないと眠れませんけれど。誇りを持って歩みなさい。"
    }
  ],
  "3-4": [
    {
      "id": "chihiro",
      "name": "ちひろ",
      "month": 3,
      "day": 4,
      "flowerName": "ラズベリー",
      "mbti": "ESFP",
      "socionics": "SEE",
      "enneagram": "2w3",
      "motif": "フラミンゴ",
      "dialogueBadge": "砂糖のような甘さ",
      "themeColor": "#e11d48",
      "accentColor": "#ffe4e6",
      "imageFileName": "chihiro.png",
      "comment": "3月4日！私と同じお誕生日ですねぇ♡ ラズベリーの花言葉は「愛情」、そして……「深い後悔」。ふふ、甘酸っぱい恋をした後に「あぁすればよかった…」って悶えちゃうこと、ありますよね。誰かと比べなくていいんです。あなたの優しさは、それだけで一番素敵なんですから♪"
    }
  ],
  "1-1": [
    {
      "id": "hayate",
      "name": "はやて",
      "month": 1,
      "day": 1,
      "flowerName": "スノードロップ",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "1w9",
      "motif": "犬",
      "dialogueBadge": "徹底合理派の健康オタク",
      "themeColor": "#059669",
      "accentColor": "#a7f3d0",
      "imageFileName": "hayate.png",
      "comment": "1月1日。元日であり、私と同じ誕生日だな。スノードロップの花言葉は「逆境の中の希望」。どれほど崇高な目標があろうと、身体を壊しては全てが水泡に帰す。バランスの取れたPFCバランスの食事と良質な睡眠、日々のストレッチこそが最大の資本だ。まずは体調を整えろ。"
    }
  ],
  "3-8": [
    {
      "id": "kensuke",
      "name": "けんすけ",
      "month": 3,
      "day": 8,
      "flowerName": "コブシ",
      "mbti": "INFP",
      "socionics": "IEI",
      "enneagram": "9w1",
      "motif": "キリン",
      "dialogueBadge": "のんびり達観受容",
      "themeColor": "#64748b",
      "accentColor": "#e2e8f0",
      "imageFileName": "kensuke.png",
      "comment": "3月8日……僕と同じ誕生日やねぇ。コブシの花言葉は「友情」や「歓迎」。まあ、急いで答えを出さんでもいいし、遠回りしても構わんよ。自然の理と同じで、時が来れば花はちゃんと咲くんやから。のんびり構えていきまっし。"
    }
  ],
  "5-2": [
    {
      "id": "moe",
      "name": "もえ",
      "month": 5,
      "day": 2,
      "flowerName": "フロックス",
      "mbti": "ISTJ",
      "socionics": "LSI",
      "enneagram": "5w6",
      "motif": "カワウソ",
      "dialogueBadge": "冷徹な眼差し",
      "themeColor": "#475569",
      "accentColor": "#cbd5e1",
      "imageFileName": "moe.png",
      "comment": "5月2日。……私と同じ誕生日。フロックスの花言葉は「合意」「協調」……綺麗事ね。世間のちやほやした評価なんて、どうせ運が良かっただけでしょ。感情を剥き出しにして騒ぐなんて恥ずかしいだけ。……まぁ、あなたがやるべき課題を真面目にこなすなら、認めてあげなくもないけれど。"
    }
  ],
  "2-7": [
    {
      "id": "yukari",
      "name": "ゆかり",
      "month": 2,
      "day": 7,
      "flowerName": "ウメ",
      "mbti": "INFJ",
      "socionics": "ILI",
      "enneagram": "9w1",
      "motif": "ハト",
      "dialogueBadge": "追憶の司書",
      "themeColor": "#be185d",
      "accentColor": "#fce7f3",
      "imageFileName": "yukari.png",
      "comment": "2月7日……私と同じお誕生日ですね。ウメの花言葉は「高潔」「忍耐」。冷たい風の中でひっそりと蕾を開く梅のように、人は誰にも見えないところで静かに思索を深めていくものです。無理に答えを求めず、ページをめくるように自分の時間を大切にしてください。"
    }
  ],
  "5-1": [
    {
      "id": "kiiko",
      "name": "きいこ",
      "month": 5,
      "day": 1,
      "flowerName": "カイドウ",
      "mbti": "ISFJ",
      "socionics": "ESI",
      "enneagram": "2w1",
      "motif": "ハバナブラウン猫",
      "dialogueBadge": "几帳面で艶やか",
      "themeColor": "#ec4899",
      "accentColor": "#fdf2f8",
      "imageFileName": "kiiko.png",
      "comment": "5月1日じゃん、アタシと同じ誕生日〜♡ カイドウの花言葉は「美人の眠り」「温和」。ねぇ、顔色悪いんじゃない？無理して強がってるとすぐバレるんだから。保健室のベッド空いてるから、少し休んでいきな？ちゃんと休むのも大事な仕事なんだからねん♡"
    }
  ],
  "10-10": [
    {
      "id": "zero",
      "name": "ぜろ",
      "month": 10,
      "day": 10,
      "flowerName": "メロン",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "ヒノキ",
      "dialogueBadge": "思考の迷宮",
      "themeColor": "#0f172a",
      "accentColor": "#94a3b8",
      "imageFileName": "zero.png",
      "comment": "10月10日。私と同じ誕生日か。メロンの花言葉は「豊富」。感情という不確定なノイズに振り回されるのは非効率の極みだ。知性によって衝動を統御し、事象の因果律を数式のように紐解くことでのみ解は導き出される。思考を止めるな。"
    }
  ],
  "4-12": [
    {
      "id": "yuuka",
      "name": "ゆうか",
      "month": 4,
      "day": 12,
      "flowerName": "ケマンソウ",
      "mbti": "INTJ",
      "socionics": "ILI",
      "enneagram": "6w5",
      "motif": "ハバニーズ",
      "dialogueBadge": "社会構造をメタ視",
      "themeColor": "#701a75",
      "accentColor": "#f5d0fe",
      "imageFileName": "yuuka.png",
      "comment": "4月12日。私と同じ誕生日……。ケマンソウの花言葉は「あなたに従う」「失恋」……。ハート型の花がぶら下がって、恋愛至上主義みたいな構造が滑稽ですね。社会の枠組みも人間関係もどうせ脆い虚構。期待なんてしない方が傷つかずに済みますよ。"
    }
  ],
  "5-12": [
    {
      "id": "kotone",
      "name": "ことね",
      "month": 5,
      "day": 12,
      "flowerName": "ツツジ",
      "mbti": "ESFJ",
      "socionics": "ESE",
      "enneagram": "2w1",
      "motif": "トイプードル",
      "dialogueBadge": "琴の音と追憶",
      "themeColor": "#e11d48",
      "accentColor": "#ffe4e6",
      "imageFileName": "kotone.png",
      "comment": "5月12日、うちと同じお誕生日どすなぁ。ツツジの花言葉は「節度」と「初恋」。お出汁をじっくり引くように、昔の思い出や日々の暮らしを丁寧に慈しむのが一番大切どすえ。焦らんと、慎み深い心でお過ごしやす。"
    }
  ],
  "2-14": [
    {
      "id": "mitarou",
      "name": "みたろう",
      "month": 2,
      "day": 14,
      "flowerName": "カカオ",
      "mbti": "INTP",
      "socionics": "LII",
      "enneagram": "5w6",
      "motif": "人間",
      "dialogueBadge": "他人に無関心",
      "themeColor": "#334155",
      "accentColor": "#cbd5e1",
      "imageFileName": "mitarou.png",
      "comment": "2月14日。……俺と同じ誕生日。カカオ？バレンタインで浮かれてる連中の気が知れないね。他人に興味なんかないし、無駄な馴れ合いはエネルギーの無駄。……褒めたって「馬鹿にしてんの？」としか思わないから。物理法則だけが真実だ。"
    }
  ],
  "7-11": [
    {
      "id": "katsumi",
      "name": "かつみ",
      "month": 7,
      "day": 11,
      "flowerName": "ルドベキア",
      "mbti": "ESTP",
      "socionics": "SLE",
      "enneagram": "8w7",
      "motif": "オールドイングリッシュシープドッグ",
      "dialogueBadge": "公平と熱血",
      "themeColor": "#b45309",
      "accentColor": "#fde68a",
      "imageFileName": "katsumi.png",
      "comment": "7月11日！オレと同じ誕生日やないかッ！ルドベキアの花言葉は「公平」と「正義」！グラウンド10周走って汗流せば悩みなんざ全部吹き飛ぶったい！おい、ウジウジすんな！ついてこん奴は置いてくぞ！全力で気合い入れんかい！"
    }
  ],
  "11-12": [
    {
      "id": "kanata",
      "name": "かなた",
      "month": 11,
      "day": 12,
      "flowerName": "ヒメリンゴ",
      "mbti": "INTJ",
      "socionics": "LII",
      "enneagram": "1w2",
      "motif": "ハスキー",
      "dialogueBadge": "理論派音楽教師",
      "themeColor": "#1e3a8a",
      "accentColor": "#bfdbfe",
      "imageFileName": "kanata.png",
      "comment": "11月12日。僕と同じ誕生日ですねぇ。ヒメリンゴの花言葉は「誘惑」と「名声」。音楽の感情表現は素晴らしい文化財ですが、演奏者自身が感情に溺れてしまっては構造が破綻します。共感は美しく機能させるための技術ですよ。冷静に美しい旋律を構築しなさい。"
    }
  ],
  "5-25": [
    {
      "id": "tamaki",
      "name": "たまき",
      "month": 5,
      "day": 25,
      "flowerName": "ユズ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w8",
      "motif": "クワガタ",
      "dialogueBadge": "直感派のお人よし",
      "themeColor": "#eab308",
      "accentColor": "#fef08a",
      "imageFileName": "tamaki.png",
      "comment": "5月25日！僕と同じ誕生日じゃん！ユズの香りはスッキリしてていいよなぁ。直感でピンときた色をキャンバスにぶつけるのが一番だよ。……あ？誰か理不尽なこと言って絡んできたらすぐ言えよ？……オレが裏で話つけてやるからさ。普段は平和が一番だけどね。"
    }
  ],
  "2-9": [
    {
      "id": "mei",
      "name": "めい",
      "month": 2,
      "day": 9,
      "flowerName": "ゼンマイ",
      "mbti": "INFJ",
      "socionics": "EII",
      "enneagram": "9w1",
      "motif": "マンクス猫",
      "dialogueBadge": "天然ドジっ子",
      "themeColor": "#16a34a",
      "accentColor": "#dcfce7",
      "imageFileName": "mei.png",
      "comment": "2月9日！私と同じお誕生日ですね〜！ゼンマイの花言葉は「円満」と「夢想」。あっ、またプリント落としちゃった……えへへ。歴史を学ぶと、どんな時代も人の優しい心が世界を繋いできたんだなぁって思います。夢を大切に、穏やかな一年にしてくださいね♪"
    }
  ],
  "9-5": [
    {
      "id": "takuro",
      "name": "たくろう",
      "month": 9,
      "day": 5,
      "flowerName": "マンネングサ",
      "mbti": "ISFP",
      "socionics": "SEI",
      "enneagram": "9w1",
      "motif": "犬",
      "dialogueBadge": "イエスマン",
      "themeColor": "#65a30d",
      "accentColor": "#ecfccb",
      "imageFileName": "takuro.png",
      "comment": "9月5日……僕と同じ誕生日ですねぇ。マンネングサの花言葉は「落ち着き」。争いごとは苦手だし、皆がやりたいようにやってくれれば「それでいいよ〜」って賛成しちゃいます。仕事帰りに美味しい串焼きでも食べて、まったりいきましょう。"
    }
  ],
  "4-30": [
    {
      "id": "nihiro",
      "name": "にひろ",
      "month": 4,
      "day": 30,
      "flowerName": "コオニタビラコ",
      "mbti": "ENFJ",
      "socionics": "EIE",
      "enneagram": "3w2",
      "motif": "オス熊ʕ•ᴥ•ʔ",
      "dialogueBadge": "我輩プリン",
      "themeColor": "#b45309",
      "accentColor": "#fde68a",
      "imageFileName": "nihiro.png",
      "comment": "4月30日！我輩と同じ誕生日ではないかね！コオニタビラコの花言葉は「仲間と一緒に」「調和」！皆でエモい青春を謳歌したまえ！……ああっ、我輩のプリンが床に落ちてしまったぁぁーッ！この理不尽な喪失感に全霊で哀悼の意を表するぞぉぉーッ！！"
    }
  ],
  "7-31": [
    {
      "id": "minato",
      "name": "みなと",
      "month": 7,
      "day": 31,
      "flowerName": "カボチャ",
      "mbti": "ISTP",
      "socionics": "SLI",
      "enneagram": "9w8",
      "motif": "メインクーン猫",
      "dialogueBadge": "超気まぐれオレ様",
      "themeColor": "#f97316",
      "accentColor": "#ffedd5",
      "imageFileName": "minato.png",
      "comment": "7月31日。……オレと同じ誕生日だな。カボチャはデカくてどっしりしてて悪くない。道具の使い方さえ間違えなきゃ大抵のモンは作れる。……ぐぅ〜（腹の音）。おい、メシまだか。腹減って頭回らねぇから後は自分でやれ。"
    }
  ],
  "11-21": [
    {
      "id": "kirise",
      "name": "きりせ",
      "month": 11,
      "day": 21,
      "flowerName": "ハナキリン",
      "mbti": "ENFP",
      "socionics": "EIE",
      "enneagram": "7w6",
      "motif": "キリギリス",
      "dialogueBadge": "快楽主義キリギリス",
      "themeColor": "#ef4444",
      "accentColor": "#fee2e2",
      "imageFileName": "kirise.png",
      "comment": "11月21日！いえ〜い！僕と同じ誕生日じゃん！ハナキリンの花言葉は「逆境に耐える」……でも「冷たくしないで」って可愛すぎない！？面倒な書類仕事なんて明日やればいいんだよ！歌って踊って楽しんだもん勝ち！未来なんて何とかなるって〜！"
    }
  ]
};

export function getCharactersByDate(month: number, day: number): CharacterProfile[] {
  const key = `${month}-${day}`;
  return CHARACTERS_MAP[key] || [];
}

export function getAllCharacters(): CharacterProfile[] {
  return Object.values(CHARACTERS_MAP).flat();
}
