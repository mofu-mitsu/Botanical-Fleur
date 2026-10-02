'use client';

import React, { useState } from 'react';
import { getFlowerByDate, FlowerData } from '@/lib/flowerData';
import { getCharactersByDate } from '@/lib/characterData';
import { FlowerCard } from '@/components/FlowerCard';
import { CharacterComment } from '@/components/CharacterComment';
import { DateCalendarPicker } from '@/components/DateCalendarPicker';
import { FlowerGacha } from '@/components/FlowerGacha';
import { FlowerListModal } from '@/components/FlowerListModal';
import { GachaSpecialFlowerModal } from '@/components/GachaSpecialFlowerModal';
import { RakutenItemSection } from '@/components/RakutenItemSection';
import { FloatingFlowers } from '@/components/FloatingFlowers';
import {
  Sparkles,
  BookOpen,
  Leaf,
  Flower2,
  Info,
  CalendarDays,
  Dices,
  Calendar,
  ArrowRight,
  Clock,
  ExternalLink,
  Home,
  RefreshCw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// トップページの「花言葉のちょっと面白いボタニカル豆知識」リスト（16種類以上の豊富なバリエーション）
interface TopTriviaItem {
  icon: string;
  title: string;
  content: string;
  tag: string;
}

const TOP_BOTANICAL_TRIVIA_LIST: TopTriviaItem[] = [
  {
    icon: '🌿',
    title: '食虫植物なのに「憩い」と「物思い」？',
    content:
      'サラセニアの花言葉は「憩い・息抜き」、モウセンゴケは「物思い」。虫を捕獲するアグレッシブな食虫植物でありながら、佇まいはどこか哲学的でのんびりしているギャップが世界中の植物ファンを虜にしています。',
    tag: '食虫植物',
  },
  {
    icon: '🌸',
    title: 'ドライになっても色あせない「スターチス」',
    content:
      'スターチスの花言葉は「変わらぬ心」「途絶えぬ記憶」。乾燥しても鮮やかな色を保ち続けることから、大切な思い出や永遠の友情を誓う花として愛され続けています。',
    tag: 'ドライフラワー',
  },
  {
    icon: '🍫',
    title: 'カカオの花は枝ではなく幹から直接咲く？',
    content:
      'チョコレートの原料カカオの花言葉は「親切」「情熱」。カカオは枝先ではなく、太い幹から直接無数の小さな花が咲く「幹生花（かんせいか）」という極めて珍しい生態を持ちます。',
    tag: '熱帯植物',
  },
  {
    icon: '🌹',
    title: '「不可能」から「夢かなう」へ変わった青いバラ',
    content:
      'かつて自然界に存在しない青いバラの花言葉は「不可能」「存在しない」でした。しかし日本のサントリーが世界初の青いバラ開発に成功したことで、歴史上初めて花言葉が「夢かなう」へと書き換えられました。',
    tag: '奇跡の品種改良',
  },
  {
    icon: '🦁',
    title: 'タンポポの英語名「ライオンの歯」の由来',
    content:
      'タンポポの英名「Dandelion」は、フランス語の「dent-de-lion（ライオンの歯）」が語源。ギザギザした葉の形状が百獣の王ライオンの鋭い牙に見えることから名付けられました。',
    tag: '語源の不思議',
  },
  {
    icon: '⚠️',
    title: '黄色いカーネーションの危険な裏花言葉',
    content:
      '赤いカーネーションが「母への愛」を象徴する一方、黄色いカーネーションの花言葉は「軽蔑」「侮辱」。花の色ひとつで正反対の意味になるビクトリア朝の花言葉文化の奥深さです。',
    tag: '裏花言葉',
  },
  {
    icon: '🌿',
    title: 'パセリの花言葉は「お祭り騒ぎ」と「死の予兆」？',
    content:
      '料理の脇役パセリの花言葉は極端で「お祭り騒ぎ」と「死の予兆」。古代ギリシャで競技の勝者に贈る祝祭の冠にも、墓地へのお供えの花輪にも使われたという二面性が理由です。',
    tag: 'ハーブ雑学',
  },
  {
    icon: '🌻',
    title: 'ヒマワリが太陽を追うのは「若い頃」だけ',
    content:
      '太陽を追って東から西へ首を振るヒマワリですが、実はそれは成長期の蕾の間だけ。大輪の花が完全に開花すると首振り運動をやめ、朝日の昇る東を向いたままじっと動かなくなります。',
    tag: '植物の生態',
  },
  {
    icon: '🍓',
    title: 'イチゴの赤い甘い部分は実は「果実」じゃない？',
    content:
      'イチゴの花言葉は「幸福な家庭」「尊重と愛情」。私たちが食べている甘くて赤い部分は果実ではなく、茎の先端（花托）がぷっくり膨らんだもの。表面にある粒々の一つひとつこそが本物の果実です。',
    tag: '植物の不思議',
  },
  {
    icon: '🕊️',
    title: '平和の象徴オリーブと「ノアの箱舟」伝説',
    content:
      'オリーブの花言葉は「平和」「知恵」。旧約聖書の「ノアの箱舟」で、大洪水が収まり陸地が現れたことをノアに知らせるために、放たれたハトがくわえて帰ってきたのがオリーブの若葉でした。',
    tag: '聖書と神話',
  },
  {
    icon: '👑',
    title: '「つる植物の女王」クレマチスと旅人の喜び',
    content:
      'クレマチスはヨーロッパで「つる植物の女王」と讃えられ、花言葉は「精神の美」「旅人の喜び」。かつてヨーロッパの宿場町では、旅人の疲れを癒やすために宿の玄関先にクレマチスが植えられました。',
    tag: '旅の植物',
  },
  {
    icon: '🎋',
    title: '120年に一度だけ咲く竹の花のミステリー',
    content:
      '竹や笹の花言葉は「節度」「未来への希望」。竹の花は60年〜120年に一度しか咲かず、花を咲かせた竹林は一斉に枯れて次世代の実を残して世代交代するという神秘的な性質を持ちます。',
    tag: '神秘の生態',
  },
  {
    icon: '🪷',
    title: '泥水が濃いほど大輪に咲くハスの清らかさ',
    content:
      'ハス（蓮）の花言葉は「清らかな心」「神聖」。泥水が濁っていればいるほど、濁りを養分に変えて大輪で気高く美しい花を咲かせる性質から、東洋では泥中の清浄として尊ばれてきました。',
    tag: '東洋の美',
  },
  {
    icon: '🍎',
    title: '踏まれるほど甘く香るカモミールの不屈の魂',
    content:
      'カモミールの花言葉は「逆境に耐える」「苦難の中の力」。人に踏まれれば踏まれるほど甘い青リンゴのような芳香を強く放ち、元気に広がる性質から名付けられました。',
    tag: 'アロマの歴史',
  },
  {
    icon: '🪙',
    title: '花瓶に十円玉を入れると花が長持ちする科学',
    content:
      '花瓶の水に十円玉（銅イオン）を1枚入れておくと、水の雑菌やバクテリアの繁殖を強力に防ぎ、茎の導管が詰まるのを防ぐため、切り花が格段に長くピンと咲き続けます。',
    tag: 'お花のお手入れ',
  },
  {
    icon: '🌙',
    title: '夜になると花を閉じて眠る「就眠運動」の知恵',
    content:
      'カタバミやチューリップが夜になると花びらを閉じるのは、夜露や雨で花粉が濡れて痛んだり、夜間の冷え込みで凍えるのを防ぐため。植物自身が命と花粉を守る見事な知恵です。',
    tag: '植物の睡眠',
  },
];

// 注目の記念日リスト（ダーリンちゃん・LSI芋虫・季節イベント・伝統祭事・特別植物）
const SPECIAL_ANNIVERSARIES = [
  { m: 5, d: 4, label: '5/4 ダーリンちゃんの誕生日', flower: 'ストケシア' },
  { m: 2, d: 13, label: '2/13 LSI芋虫の誕生日', flower: 'エーデルワイス' },
  { m: 2, d: 14, label: '2/14 バレンタイン', flower: 'カカオ' },
  { m: 3, d: 3, label: '3/3 桃の節句・ひな祭り', flower: 'モモ' },
  { m: 3, d: 14, label: '3/14 ホワイトデー', flower: 'スイートピー' },
  { m: 4, d: 5, label: '4/5 爛漫の桜祭り', flower: 'サクラ' },
  { m: 5, d: 5, label: '5/5 端午の節句', flower: 'ショウブ' },
  { m: 7, d: 7, label: '7/7 七夕の節句', flower: 'アベリア' },
  { m: 9, d: 9, label: '9/9 重陽の節句（菊の節句）', flower: 'シオン' },
  { m: 9, d: 15, label: '9/15 お月見・十五夜', flower: 'ススキ' },
  { m: 10, d: 7, label: '10/7 金木犀の芳香', flower: 'キンモクセイ' },
  { m: 10, d: 31, label: '10/31 ハロウィン', flower: 'ヘリコニア' },
  { m: 12, d: 21, label: '12/21 冬至', flower: 'スペアミント' },
  { m: 12, d: 25, label: '12/25 クリスマス', flower: 'ポインセチア' },
  { m: 1, d: 1, label: '1/1 元日・スノードロップ', flower: 'スノードロップ' },
  { m: 2, d: 3, label: '2/3 節分・福寿の春', flower: 'セツブンソウ' },
];

export default function HomePage() {
  // 今日の日付を取得（初期値）
  const [todayDate] = useState(() => {
    const now = new Date();
    return { month: now.getMonth() + 1, day: now.getDate() };
  });

  // ビューモード: 'home'（タイトル・ポータル） | 'calendar'（誕生花カレンダー） | 'gacha'（ランダムガチャ）
  const [viewMode, setViewMode] = useState<'home' | 'calendar' | 'gacha'>('home');

  const [selectedMonth, setSelectedMonth] = useState(todayDate.month);
  const [selectedDay, setSelectedDay] = useState(todayDate.day);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [gachaSpecialFlower, setGachaSpecialFlower] = useState<FlowerData | null>(null);

  // トップページの豆知識オフセット（初期値ランダム）
  const [topTriviaOffset, setTopTriviaOffset] = useState(() =>
    Math.floor(Math.random() * TOP_BOTANICAL_TRIVIA_LIST.length)
  );

  // 選択された日付の誕生花
  const currentFlower = getFlowerByDate(selectedMonth, selectedDay);
  // 今日の誕生花
  const todayFlower = getFlowerByDate(todayDate.month, todayDate.day);

  // キャラクター誕生日一致判定（双子など複数対応）
  const matchedCharacters = getCharactersByDate(selectedMonth, selectedDay);

  // 今日かどうかの判定
  const isTodaySelected =
    selectedMonth === todayDate.month && selectedDay === todayDate.day;

  // 誕生花カードへスムーズスクロールする関数（スマホ・レスポンシブ完全対応）
  const scrollToFlowerCard = () => {
    const doScroll = () => {
      const el = document.getElementById('flower-card-section');
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    };
    requestAnimationFrame(doScroll);
    setTimeout(doScroll, 80);
    setTimeout(doScroll, 220);
  };

  // カレンダー画面へ移動して特定の日付を選択
  const goToCalendarDate = (m: number, d: number) => {
    setSelectedMonth(m);
    setSelectedDay(d);
    setViewMode('calendar');
    scrollToFlowerCard();
  };

  // ガチャや図鑑からお花が選ばれた場合
  const handleSelectFromGachaOrList = (flower: FlowerData) => {
    if (flower.month > 0 && flower.day > 0) {
      setSelectedMonth(flower.month);
      setSelectedDay(flower.day);
      setViewMode('calendar');
      scrollToFlowerCard();
    } else {
      // ガチャ限定のお花（month === 0）の場合、専用プレミアム詳細鑑賞モーダルを開く！
      setGachaSpecialFlower(flower);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-900 font-sans relative">
      {/* 背景の優雅なSVG花びら・お花アニメーション演出 */}
      <FloatingFlowers />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ナビゲーションバー（スマホ・レスポンシブ最適化） */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 px-2.5 sm:px-6 py-2 sm:py-3 shadow-2xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
            {/* ブランドロゴ */}
            <button
              onClick={() => {
                setViewMode('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 sm:gap-2.5 text-left hover:opacity-85 transition-opacity cursor-pointer shrink-0"
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 shrink-0">
                <Flower2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xs xs:text-sm sm:text-base md:text-lg font-black text-emerald-950 font-serif leading-tight tracking-tight whitespace-nowrap">
                  Botanical Fleur
                </h1>
                <span className="hidden xs:block text-[8px] sm:text-[10px] md:text-[11px] font-semibold text-emerald-700 tracking-wider whitespace-nowrap">
                  誕生花と花言葉
                </span>
              </div>
            </button>

            {/* ヘッダーメインナビゲーションボタン群 */}
            <nav className="flex items-center gap-1 sm:gap-1.5 shrink-0 justify-end">
              {/* ホーム */}
              <button
                onClick={() => {
                  setViewMode('home');
                  setTopTriviaOffset((prev) => prev + 2);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'home'
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-white text-emerald-900 border border-emerald-200/80 hover:bg-emerald-50'
                }`}
              >
                <span>トップ</span>
              </button>

              {/* カレンダー */}
              <button
                onClick={() => {
                  setViewMode('calendar');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'calendar'
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-white text-emerald-900 border border-emerald-200/80 hover:bg-emerald-50'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-600 hidden xs:inline" />
                <span>カレンダー</span>
              </button>

              {/* ランダムガチャ（ヘッダーで常にアクセス可能） */}
              <button
                onClick={() => {
                  setViewMode('gacha');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center justify-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  viewMode === 'gacha'
                    ? 'bg-amber-600 text-white shadow-2xs'
                    : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100/80'
                }`}
              >
                <Dices className="w-3.5 h-3.5 text-amber-600 hidden xs:inline" />
                <span className="hidden sm:inline">花言葉ガチャ</span>
                <span className="sm:hidden">ガチャ</span>
              </button>

              {/* 今日の誕生花（クイックジャンプ） */}
              <button
                onClick={() => goToCalendarDate(todayDate.month, todayDate.day)}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-emerald-900 border border-emerald-200/80 hover:bg-emerald-50 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>今日 ({todayDate.month}/{todayDate.day})</span>
              </button>

              {/* 花言葉図鑑モーダル */}
              <button
                onClick={() => setIsListModalOpen(true)}
                className="inline-flex items-center justify-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-[11px] sm:text-xs font-bold shadow-2xs transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-3.5 h-3.5 hidden xs:inline" />
                <span className="hidden sm:inline">366日図鑑</span>
                <span className="sm:hidden">図鑑</span>
              </button>
            </nav>
          </div>

          {/* パンくずリスト (ホーム < Botanical Fleur) */}
          <div className="border-t border-emerald-100/60 bg-emerald-50/50 px-2.5 sm:px-6 py-1 mt-1 text-[11px] sm:text-xs">
            <div className="max-w-6xl mx-auto flex items-center gap-1.5 font-medium text-emerald-800">
              <a
                href="https://mofu-mitsu.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-950 hover:underline transition-colors shrink-0"
              >
                <Home className="w-3.5 h-3.5" />
                <span>ホーム</span>
              </a>
              <span className="text-emerald-400 font-bold select-none">&lt;</span>
              <span className="text-emerald-950 font-bold truncate">Botanical Fleur</span>
            </div>
          </div>
        </header>

        {/* メインコンテンツエリア */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <AnimatePresence mode="wait">
            {/* ============================================================== */}
            {/* VIEW 1: HOME (ポータル・タイトルページ)                         */}
            {/* ============================================================== */}
            {viewMode === 'home' && (
              <motion.div
                key="home-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-12 sm:space-y-16"
              >
                {/* ヒーローセクション */}
                <div className="text-center max-w-3xl mx-auto pt-4 pb-2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-800 text-[11px] sm:text-xs font-semibold tracking-widest shadow-2xs">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
                    <span>366 DAYS BOTANICAL CALENDAR &amp; LANGUAGE OF FLOWERS</span>
                  </div>

                  <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide font-serif text-emerald-950 leading-tight sm:leading-snug">
                      <span className="bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-700 bg-clip-text text-transparent">
                        四季の花々が紡ぐ、
                      </span>
                      <br className="sm:hidden" />
                      <span className="sm:inline block sm:mt-0 mt-1">やさしい言の葉</span>
                    </h2>

                    {/* 繊細なボタニカルオーナメント区切り線 */}
                    <div className="flex items-center justify-center gap-3 pt-1 pb-1 opacity-70">
                      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-emerald-300" />
                      <Flower2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-emerald-300" />
                    </div>

                    <p className="text-sm sm:text-base text-emerald-900/85 font-serif italic tracking-wider">
                      〜 Botanical Fleur ・ 心に咲く花言葉をあなたへ 〜
                    </p>
                  </div>

                  <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                    誕生日や大切な記念日のお花と花言葉をめぐる植物図鑑。
                    カードを作成して保存したり、今日の運勢を占う花言葉ガチャなどをお楽しみいただけます。
                  </p>
                </div>

                {/* 今日の誕生花ピックアップカード（トップでひと目でわかる） */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 sm:p-8 shadow-xl">
                  <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/40 border border-emerald-400/40 text-emerald-200 text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>本日 {todayDate.month}月{todayDate.day}日 の誕生花</span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold font-serif tracking-tight">
                        {todayFlower.name}
                      </h3>
                      <p className="text-emerald-100 text-sm leading-relaxed">
                        花言葉：<span className="font-bold text-white underline decoration-emerald-400">{todayFlower.meanings.join('・')}</span>
                      </p>
                      <p className="text-xs text-emerald-200/90 line-clamp-2">
                        {todayFlower.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                      <button
                        onClick={() => goToCalendarDate(todayDate.month, todayDate.day)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 active:scale-95 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>本日のカードを見る</span>
                        <ArrowRight className="w-4 h-4 text-emerald-700" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4大機能へのナビゲーションポータルカード */}
                <div className="space-y-4">
                  <div className="text-center space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-emerald-950">
                      コンテンツメニュー
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      気になるメニューを選んでお楽しみください
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {/* カード1: 誕生花カレンダー */}
                    <div
                      onClick={() => {
                        setViewMode('calendar');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group p-6 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950 font-serif">
                          誕生花カレンダー
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          366日のカレンダーから誕生日や記念日を選び、美しい花言葉カードとキャラクターからのメッセージを閲覧。
                        </p>
                      </div>
                      <div className="pt-4 mt-2 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                        <span>カレンダーを開く</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* カード2: ランダム花言葉ガチャ */}
                    <div
                      onClick={() => {
                        setViewMode('gacha');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group p-6 rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Dices className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-amber-950 font-serif">
                          ランダム花言葉ガチャ
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          366日のお花や珍奇植物・伝説のネタ枠から、今のあなたにピッタリな運命の1輪をワンタップで召喚！
                        </p>
                      </div>
                      <div className="pt-4 mt-2 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
                        <span>ガチャを回す</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* カード3: 今日の誕生花 */}
                    <div
                      onClick={() => goToCalendarDate(todayDate.month, todayDate.day)}
                      className="group p-6 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-teal-950 font-serif">
                          今日の誕生花
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          本日（{todayDate.month}月{todayDate.day}日）のお花【{todayFlower.name}】と詳細な花言葉・由来を今すぐチェック。
                        </p>
                      </div>
                      <div className="pt-4 mt-2 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-900">
                        <span>今日のカードへ</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* カード4: 366日誕生花図鑑 */}
                    <div
                      onClick={() => setIsListModalOpen(true)}
                      className="group p-6 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950 font-serif">
                          誕生花図鑑
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          366日全日のお花と花言葉を一覧・キーワード検索。月別や花の名前から自由に探せます。
                        </p>
                      </div>
                      <div className="pt-4 mt-2 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                        <span>図鑑一覧を開く</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 注目の記念日チップ */}
                <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-2xs space-y-4">
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-emerald-900">
                    <CalendarDays className="w-4 h-4 text-emerald-600" />
                    <span>注目の特別な記念日・イベントから探す</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                    {SPECIAL_ANNIVERSARIES.map((item) => (
                      <button
                        key={`${item.m}-${item.d}`}
                        onClick={() => goToCalendarDate(item.m, item.d)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50/70 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/90 transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                      >
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ボタニカル豆知識コラム（ページを開くたび・ボタンを押すたびに面白い豆知識ペアが変化！） */}
                {(() => {
                  const triviaItem1 =
                    TOP_BOTANICAL_TRIVIA_LIST[
                      topTriviaOffset % TOP_BOTANICAL_TRIVIA_LIST.length
                    ];
                  const triviaItem2 =
                    TOP_BOTANICAL_TRIVIA_LIST[
                      (topTriviaOffset + 1) % TOP_BOTANICAL_TRIVIA_LIST.length
                    ];
                  return (
                    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-sm space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                            <Info className="w-5 h-5 text-emerald-700" />
                          </span>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-emerald-950 font-serif">
                              花言葉のちょっと面白いボタニカル豆知識
                            </h3>
                            <p className="text-[11px] text-slate-500">
                              訪れるたびに新しい植物の不思議に出会えます
                            </p>
                          </div>
                        </div>

                        {/* 別の豆知識を見るボタン */}
                        <button
                          type="button"
                          onClick={() => setTopTriviaOffset((prev) => prev + 2)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200 text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5 text-emerald-700" />
                          <span>別の豆知識を見る</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <motion.div
                          key={`trivia-${topTriviaOffset}-1`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/70 space-y-1.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
                                <span>{triviaItem1.icon}</span>
                                <span>{triviaItem1.title}</span>
                              </h4>
                              {triviaItem1.tag && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold shrink-0">
                                  {triviaItem1.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                              {triviaItem1.content}
                            </p>
                          </div>
                        </motion.div>

                        <motion.div
                          key={`trivia-${topTriviaOffset}-2`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 0.05 }}
                          className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/70 space-y-1.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
                                <span>{triviaItem2.icon}</span>
                                <span>{triviaItem2.title}</span>
                              </h4>
                              {triviaItem2.tag && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold shrink-0">
                                  {triviaItem2.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                              {triviaItem2.content}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </section>
                  );
                })()}
              </motion.div>
            )}

            {/* ============================================================== */}
            {/* VIEW 2: CALENDAR (誕生花カレンダー画面)                       */}
            {/* ============================================================== */}
            {viewMode === 'calendar' && (
              <motion.div
                key="calendar-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* 戻るバー */}
                <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                  <button
                    onClick={() => setViewMode('home')}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline cursor-pointer"
                  >
                    ← タイトル画面へ戻る
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedMonth(todayDate.month);
                        setSelectedDay(todayDate.day);
                        scrollToFlowerCard();
                      }}
                      className="px-2.5 sm:px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 cursor-pointer"
                    >
                      今日 ({todayDate.month}/{todayDate.day}) にする
                    </button>
                    <button
                      onClick={() => setViewMode('gacha')}
                      className="px-2.5 sm:px-3 py-1 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 cursor-pointer flex items-center gap-1"
                    >
                      <Dices className="w-3 h-3 text-amber-600" />
                      <span>ガチャ</span>
                    </button>
                  </div>
                </div>

                {/* カレンダー入力＆お花カードメイングリッド */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* 左側：カレンダー入力ピッカー */}
                  <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                    <DateCalendarPicker
                      selectedMonth={selectedMonth}
                      selectedDay={selectedDay}
                      onSelectDate={(m, d) => {
                        setSelectedMonth(m);
                        setSelectedDay(d);
                        scrollToFlowerCard();
                      }}
                    />

                    {/* 誕生花早見カード */}
                    <div className="bg-white/90 rounded-2xl p-4 sm:p-5 border border-emerald-100 text-xs space-y-2.5 shadow-2xs">
                      <div className="flex items-center justify-between text-emerald-900 font-bold border-b border-emerald-50 pb-2">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          選択中の日付
                        </span>
                        <span className="text-emerald-700 font-serif font-bold text-sm">
                          {selectedMonth}月{selectedDay}日
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>誕生花:</span>
                        <span className="font-bold text-emerald-950 font-serif">{currentFlower.name}</span>
                      </div>
                      <div className="text-slate-600 leading-relaxed text-[11px] pt-1 border-t border-slate-50">
                        <span className="font-semibold text-emerald-800">主な花言葉: </span>
                        {currentFlower.meanings.join('・')}
                      </div>
                    </div>
                  </div>

                  {/* 右側：お花カード ＋ キャラクターコメント ＋ 楽天市場連携 */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* お花カード */}
                    <FlowerCard flower={currentFlower} isToday={isTodaySelected} />

                    {/* キャラクターコメント枠 */}
                    <CharacterComment
                      characters={matchedCharacters}
                      anniversaryNote={currentFlower.anniversaryNote}
                      month={selectedMonth}
                      day={selectedDay}
                    />

                    {/* 楽天市場お花ギフト連携セクション */}
                    <RakutenItemSection
                      flowerName={currentFlower.name}
                      subFlowerNames={currentFlower.subFlowers?.map((s) => s.name)}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ============================================================== */}
            {/* VIEW 3: GACHA (ランダム花言葉ガチャ画面)                       */}
            {/* ============================================================== */}
            {viewMode === 'gacha' && (
              <motion.div
                key="gacha-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* 戻るバー */}
                <div className="flex items-center justify-between pb-2 border-b border-emerald-100">
                  <button
                    onClick={() => setViewMode('home')}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 hover:underline cursor-pointer"
                  >
                    ← タイトル画面へ戻る
                  </button>
                  <button
                    onClick={() => setViewMode('calendar')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>カレンダーを開く</span>
                  </button>
                </div>

                {/* ランダム花言葉ガチャ本体 */}
                <FlowerGacha onSelectFlower={handleSelectFromGachaOrList} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* フッター */}
        <footer className="mt-16 bg-white border-t border-emerald-100 py-8 px-4 text-center text-xs text-emerald-900/70 space-y-2">
          <div className="flex items-center justify-center gap-2 font-serif text-emerald-950 font-bold text-sm">
            <Flower2 className="w-4 h-4 text-emerald-600" />
            <span>Botanical Fleur - 誕生花と花言葉</span>
          </div>
          <p>
            366日のお花と花言葉を通じて、日々に小さな彩りと温かい物語をお届けします。
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <a
              href="https://mofu-mitsu.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 underline cursor-pointer inline-flex items-center gap-1"
            >
              <Home className="w-3 h-3" />
              <span>ホーム</span>
            </a>
            <span>•</span>
            <button
              onClick={() => {
                setViewMode('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              トップ
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setViewMode('calendar');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              カレンダー
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setViewMode('gacha');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              花言葉ガチャ
            </button>
            <span>•</span>
            <button
              onClick={() => setIsListModalOpen(true)}
              className="hover:text-emerald-700 underline cursor-pointer"
            >
              366日図鑑
            </button>
          </div>
          <p className="text-[10px] text-slate-400 pt-1">
            ※楽天市場の商品情報は楽天ウェブサービスAPIを利用して検索・表示しています。
          </p>
        </footer>
      </div>

      {/* 誕生花一覧・図鑑モーダル */}
      <FlowerListModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
        onSelect={handleSelectFromGachaOrList}
      />

      {/* ガチャ限定お花専用のプレミアム鑑賞モーダル */}
      <GachaSpecialFlowerModal
        flower={gachaSpecialFlower}
        onClose={() => setGachaSpecialFlower(null)}
        onSpinAgain={() => {
          setGachaSpecialFlower(null);
          setViewMode('gacha');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
