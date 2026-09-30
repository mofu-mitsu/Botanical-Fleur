'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircleHeart } from 'lucide-react';
import { CharacterProfile } from '@/lib/characterData';

interface CharacterCommentProps {
  characters?: CharacterProfile[];
  character?: CharacterProfile | null;
  anniversaryNote?: string;
  month: number;
  day: number;
}

export const CharacterComment: React.FC<CharacterCommentProps> = ({
  characters,
  character,
  anniversaryNote,
  month,
  day,
}) => {
  // 単一指定または複数（双子など）のリストを統一
  const list: CharacterProfile[] = characters && characters.length > 0
    ? characters
    : character
    ? [character]
    : [];

  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  // 隠しギミック（ありす / ダーリンちゃん、りょうご / LSI芋虫）の変身状態管理
  const [transformed, setTransformed] = useState<Record<string, boolean>>({});

  const handleImageError = (char: CharacterProfile) => {
    // コンソールに画像が見つからない、または空ファイル（0バイト）であることをわかりやすく出力
    console.warn(
      `[誕生花キャラ画像] 読み込みに失敗しました（ファイルが存在しないか、空ファイル（0バイト）です）: /images/characters/${char.imageFileName} (キャラクター: ${char.name}, ID: ${char.id})`
    );
    setFailedImages((prev) => ({ ...prev, [char.id]: true }));
  };

  const toggleTransform = (id: string) => {
    setTransformed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // キャラクター一致も記念日ノートもない場合は何も描画しない
  if (list.length === 0 && !anniversaryNote) {
    return null;
  }

  // モチーフごとのフォールバックアイコン
  const getMotifIcon = (char: CharacterProfile) => {
    const m = char.motif || '';
    const emoji =
      !m || m === '記入漏れ' ? '🌸' :
      m.includes('青虫') || m.includes('芋虫') ? '🐛' :
      m.includes('ルンバ') ? '🤖' :
      m.includes('豚') ? '🐷' :
      m.includes('馬') || m.includes('シマウマ') ? '🦓' :
      m.includes('ペンギン') ? '🐧' :
      m.includes('シャチ') || m.includes('カズハゴンドウ') || m.includes('鯨') ? '🐋' :
      m.includes('水牛') || m.includes('牛') ? '🐂' :
      m.includes('コアラ') ? '🐨' :
      m.includes('天使') ? '🪽' :
      m.includes('蜘蛛') ? '🕷️' :
      m.includes('ヤギ') ? '🐐' :
      m.includes('ヒツジ') || m.includes('羊') ? '🐑' :
      m.includes('トナカイ') || m.includes('シカ') || m.includes('鹿') ? '🦌' :
      m.includes('モルモット') || m.includes('ハムスター') || m.includes('ヤマネ') || m.includes('リス') ? '🐹' :
      m.includes('フェネック') || m.includes('狐') ? '🦊' :
      m.includes('カエル') || m.includes('おたまじゃくし') ? '🐸' :
      m.includes('カバ') ? '🦛' :
      m.includes('クリオネ') ? '🪼' :
      m.includes('亀') ? '🐢' :
      m.includes('カメレオン') ? '🦎' :
      m.includes('ライオン') ? '🦁' :
      m.includes('虎') ? '🐯' :
      m.includes('うさぎ') ? '🐰' :
      m.includes('アヒル') ? '🦆' :
      m.includes('怪獣') ? '🦖' :
      m.includes('狼') ? '🐺' :
      m.includes('犬') || m.includes('ポメラニアン') || m.includes('チワワ') || m.includes('パグ') || m.includes('コラット') ? '🐕' :
      m.includes('猫') || m.includes('ヤマネコ') ? '🐱' :
      m.includes('烏骨鶏') || m.includes('鶏') ? '🐓' :
      m.includes('カナリア') || m.includes('メグロ') || m.includes('鳥') || m.includes('サギ') || m.includes('鳩') || m.includes('ハト') || m.includes('フラミンゴ') || m.includes('ツル') || m.includes('ヨタカ') || m.includes('オナガ') || m.includes('イスカ') || m.includes('コマドリ') || m.includes('ルリビタキ') || m.includes('アホウドリ') || m.includes('インコ') || m.includes('ヒバリ') || m.includes('メジロ') || m.includes('カモメ') || m.includes('アトリ') ? '🐦' :
      m.includes('フクロウ') ? '🦉' :
      m.includes('蛇') ? '🐍' :
      m.includes('薔薇') || m.includes('バラ') ? '🌹' :
      m.includes('ひまわり') || m.includes('ヒマワリ') ? '🌻' :
      m.includes('桜') || m.includes('サクラ') ? '🌸' :
      m.includes('ユリ') ? '⚜️' :
      m.includes('コスモス') ? '💮' :
      m.includes('人間') ? '🧑' :
      m.includes('ジャック・オー・ランタン') ? '🎃' :
      m.includes('パキラ') ? '🪴' : '🌸';

    return (
      <div
        className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-white/80 shrink-0 select-none"
        style={{
          background: `linear-gradient(135deg, ${char.themeColor}, ${char.accentColor})`,
        }}
      >
        <span className="text-2xl sm:text-3xl">{emoji}</span>
      </div>
    );
  };

  // モチーフの表示整形（カッコ内の補足情報「（マスコット着ぐるみ・O型・静岡弁）」等は除外して純粋なモチーフのみを表示）
  const formatMotif = (motif?: string) => {
    if (!motif || motif.trim() === '' || motif === '記入漏れ') {
      return '記入漏れ';
    }
    const cleaned = motif.replace(/（.*?）|\(.*?\)/g, '').trim();
    return cleaned || '記入漏れ';
  };

  return (
    <div className="w-full mt-6 space-y-4">
      {/* 特別な記念日バッジ（2/3 節分、12/25 クリスマスなど） */}
      {anniversaryNote && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm text-emerald-900"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-xs font-semibold tracking-wider mb-1.5">
              <span>SPECIAL ANNIVERSARY</span>
            </div>
            <p className="text-sm font-semibold leading-relaxed text-emerald-950">
              {anniversaryNote}
            </p>
          </div>
        </motion.div>
      )}

      {/* キャラクター一致時の特別ボイスコメント（双子などの場合は複数カード表示） */}
      {list.map((char) => {
        const isFailed = failedImages[char.id];
        const isTransformed = !!transformed[char.id];

        // 隠しギミック判定（ありす / ダーリンちゃん、りょうご / LSI芋虫）
        const isAlice = char.id === 'alice';
        const isRyogo = char.id === 'ryogo';
        const hasGimmick = isAlice || isRyogo;

        // 表示名・セリフ・バッジ・特殊アイコンの決定
        let displayName = char.name;
        let displayBadge = char.dialogueBadge;
        let displayComment = char.comment;
        let specialEmoji: string | null = null;
        let currentMotif = char.motif;

        if (isAlice) {
          if (!isTransformed) {
            // 初期: ダーリンちゃんモード (🥺)
            displayName = 'ダーリンちゃん';
            displayBadge = 'Feインターフェース';
            displayComment =
              'ふぁ…5月4日？ 私と同じ日ね、ダーリン♡ ストケシアの花言葉は『追想』……ふふ、“過去のログ”に縛られているのかしら？ 退屈なトランプの城の背後にある構造を読み解くのは悪くないけれど……ねぇ、今のその選択、“本音”と“演出”どっちが多くなっちゃった？ 君が私を退屈させない刺激をもたらしてくれるなら……たっぷり可愛がってあげる♡';
            specialEmoji = '🥺';
            currentMotif = '記入漏れ';
          } else {
            // 隠し真の姿: ありすモード
            displayName = 'ありす';
            displayBadge = '構造を見通す観察者';
            displayComment =
              'ふぁ…5月4日？ 私と同じ日。ストケシアの『追想』…退屈な日常の背後にある構造を読み解くのは悪くない。君が面白い刺激をもたらしてくれるなら、歓迎するよ。';
            specialEmoji = null;
          }
        } else if (isRyogo) {
          if (!isTransformed) {
            // 初期: LSI芋虫モード (🐛)
            displayName = 'LSI芋虫';
            displayBadge = '感覚支配・境界線防衛形態';
            displayComment =
              '境界線確保。侵入継続。感覚支配成功。\n……観測対象を確認。2月13日、エーデルワイス。標高3000メートル級の極限環境における耐久構造および防衛システム、正常稼働中。外界からの無秩序な干渉を排除し、自己の境界線を厳密に定義することで個体としての完全性を保持する。\n……侵入行動は計画通り推移。芋虫の形態をとることで周囲の警戒閾値を低下させ、情報収集を完了した。君の生態系への干渉を継続する。';
            specialEmoji = '🐛';
            currentMotif = '青虫';
          } else {
            // 隠し真の姿: 通常りょうごモード（理屈っぽいけど謙虚、エーデルワイス長文解説）
            displayName = 'りょうご';
            displayBadge = '構造重視の知識人';
            displayComment =
              '誕生花って、単なる記念日じゃなくてその人の生態とか価値観を象徴する要素として見たほうが整合性が取れると思うんだよね。\n……あ、ごめん、いきなり理屈から入っちゃって。でも聞いて。例えば僕がエーデルワイスなのは――高山植物で、目立たなくて、過酷な環境でも静かに生き残るから。\nあの花、白い花弁のように見える部分は実は『総苞片（そうほうへん）』っていう葉の一種で、全体が密集した白い綿毛でびっしり覆われているんだ。これは強烈な紫外線や氷点下の寒風、過酷な乾燥から中心の繊細な頭花を保護するための、生存に特化した緻密な防衛構造なんだよ。誰かに見せびらかすためじゃなく、ただ生き抜くために構造が最適化されている。そこにものすごく合理的な美しさを感じるんだ。\n……結局また構造と仕組みの話になっちゃったな。効率や考え方を人に強要するつもりは全くないんだけど……君ももし何か困難や厳しい環境に直面したときは、無理に周囲に合わせすぎず、自分の芯となる構造と大切な記憶を静かに守ってほしい。2月13日、お誕生日おめでとう。';
            specialEmoji = null;
            currentMotif = '青虫';
          }
        }

        return (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/40 border border-emerald-200/90 shadow-lg shadow-emerald-950/5 p-5 sm:p-7"
          >
            {/* 背景の装飾パターングロー */}
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: char.accentColor }}
            />

            {/* ヘッダーバッジ */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-emerald-100">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-semibold tracking-wide shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  お誕生日が一致！
                </span>
                <span className="text-xs font-medium text-emerald-800 bg-white/90 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  {month}月{day}日 生まれ
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-800/80">
                <span className="font-mono bg-emerald-100/60 px-2 py-0.5 rounded">
                  {char.mbti}
                </span>
                {char.socionics && (
                  <span className="font-mono bg-teal-100/60 px-2 py-0.5 rounded">
                    {char.socionics}
                  </span>
                )}
                {char.enneagram && (
                  <span className="font-mono bg-emerald-100/60 px-2 py-0.5 rounded">
                    {char.enneagram}
                  </span>
                )}
              </div>
            </div>

            {/* キャラクタープロフィール＆セリフ */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              {/* アバター画像 / アイコン（名前は画像と被らないように下にゆとりを持って配置） */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="relative">
                  {specialEmoji ? (
                    /* 隠しギミック時の特殊アイコン（外見上はTAPなど促さず、クリックで静かに戻る） */
                    <div
                      onClick={() => toggleTransform(char.id)}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center text-white font-bold shadow-md border-2 border-white/90 shrink-0 cursor-pointer hover:scale-105 active:scale-95 transition-all select-none"
                      style={{
                        background: `linear-gradient(135deg, ${char.themeColor}, ${char.accentColor})`,
                      }}
                    >
                      <span className="text-3xl select-none">{specialEmoji}</span>
                    </div>
                  ) : !isFailed ? (
                    /* イラスト画像（画像に被る文字なし！完全な隠しギミックとして静かにクリック可能） */
                    <div
                      className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white flex items-center justify-center p-0.5 ${
                        hasGimmick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''
                      }`}
                      onClick={() => hasGimmick && toggleTransform(char.id)}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/characters/${char.imageFileName}`}
                        alt={displayName}
                        className="w-full h-full object-cover rounded-xl"
                        onLoad={(e) => {
                          const img = e.currentTarget;
                          if (img.naturalWidth === 0 || img.naturalHeight === 0) {
                            handleImageError(char);
                          }
                        }}
                        onError={() => handleImageError(char)}
                      />
                    </div>
                  ) : (
                    /* 画像未配置 / 読み込み失敗時のモチーフフォールバック */
                    <div
                      className={`${hasGimmick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''}`}
                      onClick={() => hasGimmick && toggleTransform(char.id)}
                      title={`画像読み込み未完了: /images/characters/${char.imageFileName}`}
                    >
                      {getMotifIcon({ ...char, motif: currentMotif })}
                    </div>
                  )}
                </div>

                {/* 名前バッジ：画像に一切被らないようにアバターの真下に十分なマージンを空けて配置！ */}
                <div
                  className="mt-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm text-center min-w-[4.5rem]"
                  style={{ backgroundColor: char.themeColor }}
                >
                  {displayName}
                </div>

                {/* 画像読み込みエラー時の案内（開発・確認用） */}
                {isFailed && (
                  <span className="text-[10px] text-amber-700/80 tracking-tight font-mono">
                    画像未設定
                  </span>
                )}
              </div>

              {/* キャラクター情報と吹き出し */}
              <div className="flex-1 w-full space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base sm:text-lg font-bold text-emerald-950 flex items-center gap-1.5">
                    <MessageCircleHeart className="w-4 h-4 text-emerald-600" />
                    <span>{displayName} からのメッセージ</span>
                  </h4>
                  {displayBadge && (
                    <span className="text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full font-medium">
                      {displayBadge}
                    </span>
                  )}
                </div>

                {/* 吹き出し */}
                <div className="relative bg-white/95 rounded-2xl p-4 sm:p-5 border border-emerald-100 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed">
                  <div className="hidden sm:block absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent drop-shadow-[-1px_0_0_rgba(16,185,129,0.1)]" />
                  <p className="whitespace-pre-line font-medium text-emerald-950 leading-relaxed">
                    {displayComment}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800/70">
                    <span>誕生花: {char.flowerName}</span>
                    <span>モチーフ: {formatMotif(currentMotif)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
