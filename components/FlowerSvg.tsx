'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FlowerSvgProps {
  type: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  size?: number;
}

export const FlowerSvg: React.FC<FlowerSvgProps> = ({
  type,
  primaryColor = '#10b981',
  secondaryColor = '#ec4899',
  className = '',
  size = 200,
}) => {
  // SVGアートワークをタイプごとに美しくレンダリング
  const renderSvgContent = () => {
    switch (type) {
      // 1/17 コチョウラン（胡蝶蘭）: 優雅な蝶の形
      case 'orchid':
        return (
          <g>
            {/* 茎と葉 */}
            <path d="M100 170 Q95 130 100 100" stroke="#059669" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M96 160 Q60 155 50 175 Q75 185 97 165" fill="#047857" opacity="0.8" />
            <path d="M104 155 Q140 150 150 170 Q125 180 103 160" fill="#059669" opacity="0.8" />
            {/* 蘭の花弁 */}
            <motion.path
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              d="M100 100 C70 70 50 85 70 115 C85 125 95 110 100 100 Z"
              fill={secondaryColor}
              opacity="0.9"
            />
            <motion.path
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              d="M100 100 C130 70 150 85 130 115 C115 125 105 110 100 100 Z"
              fill={secondaryColor}
              opacity="0.9"
            />
            <circle cx="100" cy="80" r="18" fill={primaryColor} opacity="0.85" />
            {/* 唇弁（リップ） */}
            <path d="M90 100 Q100 125 110 100 Q100 112 90 100 Z" fill="#fbbf24" />
            <circle cx="100" cy="102" r="3.5" fill="#b45309" />
          </g>
        );

      // 1/19 マツ（松）: 常緑の針葉樹
      case 'pine':
        return (
          <g>
            <path d="M100 180 L100 70" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
            {/* 松の葉束 */}
            {[75, 100, 125].map((y, idx) => (
              <g key={idx}>
                {[-35, -20, 0, 20, 35].map((angle, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1={y}
                    x2={100 + Math.sin(angle * Math.PI / 180) * 45}
                    y2={y - Math.cos(angle * Math.PI / 180) * 40}
                    stroke={idx % 2 === 0 ? '#047857' : '#10b981'}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                ))}
              </g>
            ))}
            {/* 松ぼっくり */}
            <ellipse cx="112" cy="115" rx="7" ry="10" fill="#92400e" transform="rotate(20 112 115)" />
          </g>
        );

      // 1/21 アイビー: つる植物と斑入り葉
      case 'ivy':
        return (
          <g>
            <path d="M80 180 Q120 140 90 100 T110 30" stroke="#059669" strokeWidth="3.5" fill="none" />
            {[
              { x: 80, y: 150, rot: -25, scale: 0.9 },
              { x: 110, y: 120, rot: 35, scale: 1 },
              { x: 92, y: 80, rot: -15, scale: 0.85 },
              { x: 105, y: 45, rot: 20, scale: 0.7 },
            ].map((leaf, idx) => (
              <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rot}) scale(${leaf.scale})`}>
                <path d="M0 0 C-15 -10 -20 -30 0 -35 C20 -30 15 -10 0 0 Z" fill="#15803d" />
                <path d="M0 0 C-8 -8 -10 -25 0 -30 C10 -25 8 -8 0 0 Z" fill="#86efac" opacity="0.6" />
                <line x1="0" y1="0" x2="0" y2="-32" stroke="#dcfce7" strokeWidth="1.5" />
              </g>
            ))}
          </g>
        );

      // 2/3 セツブンソウ: 可憐な早春の白花
      case 'winter_aconite':
        return (
          <g>
            <path d="M100 175 Q98 135 100 105" stroke="#15803d" strokeWidth="3.5" />
            {/* 緑の総苞葉 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
              <line
                key={i}
                x1="100"
                y1="105"
                x2={100 + Math.cos(ang * Math.PI / 180) * 32}
                y2={105 + Math.sin(ang * Math.PI / 180) * 16}
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ))}
            {/* 白い花弁 */}
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <ellipse
                key={i}
                cx={100 + Math.cos(ang * Math.PI / 180) * 18}
                cy={100 + Math.sin(ang * Math.PI / 180) * 18}
                rx="14"
                ry="10"
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="1"
                transform={`rotate(${ang} ${100 + Math.cos(ang * Math.PI / 180) * 18} ${100 + Math.sin(ang * Math.PI / 180) * 18})`}
              />
            ))}
            {/* 黄色い蜜腺と紫の葯 */}
            <circle cx="100" cy="100" r="10" fill="#eab308" />
            <circle cx="100" cy="100" r="5" fill="#6366f1" />
          </g>
        );

      // 2/17 ミモザ: 黄金のポンポン花
      case 'mimosa':
        return (
          <g>
            <path d="M70 175 Q100 120 115 45" stroke="#78350f" strokeWidth="3" />
            {/* 羽状複葉 */}
            <path d="M85 140 Q60 135 45 145" stroke="#047857" strokeWidth="2" />
            <path d="M98 100 Q130 95 145 105" stroke="#047857" strokeWidth="2" />
            {/* 黄金の花球 */}
            {[
              { x: 90, y: 125, r: 8 },
              { x: 80, y: 110, r: 9 },
              { x: 105, y: 105, r: 10 },
              { x: 95, y: 85, r: 11 },
              { x: 115, y: 75, r: 10 },
              { x: 105, y: 55, r: 9 },
              { x: 125, y: 60, r: 8 },
              { x: 115, y: 40, r: 7 },
            ].map((p, idx) => (
              <g key={idx}>
                <circle cx={p.x} cy={p.y} r={p.r} fill="#facc15" />
                <circle cx={p.x} cy={p.y} r={p.r * 0.7} fill="#f59e0b" opacity="0.6" />
              </g>
            ))}
          </g>
        );

      // 3/15 ワスレナグサ: 澄んだ青の5弁花
      case 'forget_me_not':
        return (
          <g>
            <path d="M100 175 Q96 140 100 100" stroke="#059669" strokeWidth="3" />
            <path d="M98 145 Q65 140 60 150 Q80 155 97 146" fill="#10b981" />
            {/* 5枚の青い花びら */}
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <circle
                key={i}
                cx={100 + Math.cos(ang * Math.PI / 180) * 22}
                cy={95 + Math.sin(ang * Math.PI / 180) * 22}
                r="16"
                fill="#38bdf8"
                opacity="0.95"
              />
            ))}
            <circle cx="100" cy="95" r="9" fill="#ffffff" />
            <circle cx="100" cy="95" r="5.5" fill="#facc15" />
          </g>
        );

      // 3/18 ハナミズキ: 4枚の先端くぼみ花弁
      case 'dogwood':
        return (
          <g>
            <path d="M100 175 L100 100" stroke="#78350f" strokeWidth="4" />
            {/* 4枚の大きな苞片（ピンク・白） */}
            {[0, 90, 180, 270].map((ang, i) => (
              <g key={i} transform={`rotate(${ang} 100 100)`}>
                <path
                  d="M100 100 C80 60 82 45 92 42 C97 40 100 48 103 40 C113 45 115 60 100 100 Z"
                  fill="#fb7185"
                  opacity="0.9"
                />
                <circle cx="100" cy="43" r="2.5" fill="#881337" />
              </g>
            ))}
            <circle cx="100" cy="100" r="10" fill="#a3e635" />
            <circle cx="100" cy="100" r="5" fill="#eab308" />
          </g>
        );

      // 7/5 サラセニア: 筒状の食虫植物
      case 'sarracenia':
        return (
          <g>
            <path d="M90 180 Q85 140 80 80 Q78 50 100 40 Q120 50 115 80 Q105 140 100 180 Z" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
            {/* 網目模様 */}
            <path d="M85 70 Q100 65 112 70" stroke="#be123c" strokeWidth="1.5" fill="none" />
            <path d="M82 90 Q100 85 110 90" stroke="#be123c" strokeWidth="1.5" fill="none" />
            <path d="M88 115 Q100 110 105 115" stroke="#be123c" strokeWidth="1.5" fill="none" />
            {/* 蓋（フード） */}
            <ellipse cx="100" cy="42" rx="20" ry="12" fill="#e11d48" opacity="0.85" />
          </g>
        );

      // 7/10 トマト: 赤い果実と星形ヘタ
      case 'tomato':
        return (
          <g>
            <path d="M100 180 L100 70" stroke="#16a34a" strokeWidth="4" />
            {/* トマトの果実 */}
            <ellipse cx="100" cy="115" rx="38" ry="34" fill="#ef4444" />
            <ellipse cx="112" cy="102" rx="12" ry="7" fill="#f87171" opacity="0.6" transform="rotate(-15 112 102)" />
            {/* 星形のヘタ（ガク） */}
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <path
                key={i}
                d={`M100 85 L${100 + Math.cos(ang * Math.PI / 180) * 22} ${85 + Math.sin(ang * Math.PI / 180) * 14} L100 85`}
                stroke="#15803d"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
            <circle cx="100" cy="85" r="5" fill="#166534" />
          </g>
        );

      // 7/14 モウセンゴケ: 朝露のような粘液球
      case 'sundew':
        return (
          <g>
            <circle cx="100" cy="130" r="16" fill="#15803d" />
            {/* 放射状の腺毛 */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((ang, i) => {
              const rad = (ang * Math.PI) / 180;
              const x2 = 100 + Math.cos(rad) * 45;
              const y2 = 110 + Math.sin(rad) * 45;
              return (
                <g key={i}>
                  <line x1="100" y1="110" x2={x2} y2={y2} stroke="#10b981" strokeWidth="2" />
                  <circle cx={x2} cy={y2} r="5" fill="#f43f5e" />
                  <circle cx={x2 - 1} cy={y2 - 1} r="2" fill="#ffffff" opacity="0.8" />
                </g>
              );
            })}
          </g>
        );

      // 9/25 ピンクのハイビスカス: 南国の大輪
      case 'hibiscus':
        return (
          <g>
            <path d="M100 180 Q98 140 100 110" stroke="#059669" strokeWidth="4" />
            {/* 5枚のフリル花弁 */}
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <path
                key={i}
                transform={`rotate(${ang} 100 100)`}
                d="M100 100 C75 55 85 40 100 42 C115 40 125 55 100 100 Z"
                fill="#f43f5e"
                opacity="0.9"
              />
            ))}
            <circle cx="100" cy="100" r="14" fill="#9f1239" />
            {/* 長い花柱 */}
            <path d="M100 100 Q115 65 125 45" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="125" cy="45" r="4.5" fill="#e11d48" />
          </g>
        );

      // 10/3 カエデ: 枝と幾重にも重なる赤・橙・黄金の美しい紅葉の木
      case 'maple':
        return (
          <g>
            {/* 木の枝・幹 */}
            <path d="M100 185 Q98 150 102 125 Q106 100 95 75" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M102 125 Q125 110 145 115" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M100 140 Q75 125 55 130" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            
            {/* 左の橙色モミジ葉 */}
            <g transform="translate(60, 115) scale(0.65) rotate(-20)">
              <path
                d="M100 115 L85 105 L60 115 L68 95 L40 90 L65 78 L55 60 L80 68 L100 35 L120 68 L145 60 L135 78 L160 90 L132 95 L140 115 L115 105 Z"
                fill="#f97316"
                stroke="#c2410c"
                strokeWidth="2"
              />
              <line x1="100" y1="115" x2="100" y2="40" stroke="#fef08a" strokeWidth="1.5" />
            </g>

            {/* 右の深紅モミジ葉 */}
            <g transform="translate(130, 95) scale(0.7) rotate(25)">
              <path
                d="M100 115 L85 105 L60 115 L68 95 L40 90 L65 78 L55 60 L80 68 L100 35 L120 68 L145 60 L135 78 L160 90 L132 95 L140 115 L115 105 Z"
                fill="#dc2626"
                stroke="#991b1b"
                strokeWidth="2"
              />
              <line x1="100" y1="115" x2="100" y2="40" stroke="#fee2e2" strokeWidth="1.5" />
            </g>

            {/* 中央上部の黄金〜緋色の大モミジ葉 */}
            <g transform="translate(95, 60) scale(0.85)">
              <path
                d="M100 115 L85 105 L60 115 L68 95 L40 90 L65 78 L55 60 L80 68 L100 35 L120 68 L145 60 L135 78 L160 90 L132 95 L140 115 L115 105 Z"
                fill="#ea580c"
                stroke="#9a3412"
                strokeWidth="2"
              />
              {/* 繊細な葉脈 */}
              <line x1="100" y1="115" x2="100" y2="40" stroke="#fef08a" strokeWidth="2" />
              <line x1="100" y1="95" x2="60" y2="75" stroke="#fef08a" strokeWidth="1.5" />
              <line x1="100" y1="95" x2="140" y2="75" stroke="#fef08a" strokeWidth="1.5" />
              <line x1="100" y1="80" x2="70" y2="60" stroke="#fef08a" strokeWidth="1.2" />
              <line x1="100" y1="80" x2="130" y2="60" stroke="#fef08a" strokeWidth="1.2" />
            </g>
          </g>
        );

      // 10/6 コスモス: 秋風に揺れるピンクの秋桜
      case 'cosmos':
        return (
          <g>
            <path d="M100 180 Q105 140 100 100" stroke="#16a34a" strokeWidth="2.5" />
            {/* 細い羽状葉 */}
            <path d="M102 150 Q120 145 130 155" stroke="#16a34a" strokeWidth="1.5" />
            <path d="M98 130 Q80 125 70 135" stroke="#16a34a" strokeWidth="1.5" />
            {/* 8枚の花弁 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
              <g key={i} transform={`rotate(${ang} 100 100)`}>
                <path d="M96 100 L95 62 Q100 58 105 62 L104 100 Z" fill="#fb7185" />
                <path d="M95 62 L97 58 L100 60 L103 58 L105 62 Z" fill="#fb7185" />
              </g>
            ))}
            <circle cx="100" cy="100" r="11" fill="#facc15" />
            <circle cx="100" cy="100" r="6" fill="#ca8a04" />
          </g>
        );

      // 12/21 スペアミント: 爽やかなグリーンのハーブ
      case 'spearmint':
        return (
          <g>
            <path d="M100 180 L100 60" stroke="#059669" strokeWidth="3" />
            {[
              { y: 150, span: 35 },
              { y: 120, span: 30 },
              { y: 90, span: 25 },
              { y: 65, span: 18 },
            ].map((node, i) => (
              <g key={i}>
                <ellipse cx={100 - node.span} cy={node.y} rx={node.span * 0.75} ry="10" fill="#10b981" transform={`rotate(-15 ${100 - node.span} ${node.y})`} />
                <ellipse cx={100 + node.span} cy={node.y} rx={node.span * 0.75} ry="10" fill="#34d399" transform={`rotate(15 ${100 + node.span} ${node.y})`} />
              </g>
            ))}
            {/* 穂先の小花 */}
            <circle cx="100" cy="50" r="8" fill="#e0e7ff" />
            <circle cx="100" cy="40" r="6" fill="#c7d2fe" />
          </g>
        );

      // ガチャネタ枠: ラフレシア（世界最大の花）
      case 'rafflesia':
        return (
          <g>
            <circle cx="100" cy="100" r="70" fill="#7f1d1d" opacity="0.3" />
            {/* 5枚の巨大で分厚い花弁（斑点付き） */}
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <g key={i} transform={`rotate(${ang} 100 100)`}>
                <path d="M100 100 C60 40 70 20 100 22 C130 20 140 40 100 100 Z" fill="#dc2626" />
                <circle cx="100" cy="45" r="4.5" fill="#fef08a" />
                <circle cx="88" cy="55" r="3.5" fill="#fef08a" />
                <circle cx="112" cy="55" r="3.5" fill="#fef08a" />
              </g>
            ))}
            {/* 中央の巨大な開口部 */}
            <circle cx="100" cy="100" r="28" fill="#450a0a" />
            <circle cx="100" cy="100" r="18" fill="#991b1b" />
            <circle cx="100" cy="100" r="8" fill="#facc15" />
          </g>
        );

      // ガチャネタ枠: ウツボカズラ（食虫袋）
      case 'pitcher_plant':
        return (
          <g>
            <path d="M100 20 Q120 70 120 120" stroke="#15803d" strokeWidth="3" fill="none" />
            {/* つぼ型の捕虫袋 */}
            <path d="M110 115 C90 125 90 170 120 175 C140 175 145 135 125 115 Z" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
            <ellipse cx="118" cy="118" rx="10" ry="4" fill="#b91c1c" />
            {/* ふた */}
            <ellipse cx="115" cy="112" rx="9" ry="5" fill="#4ade80" transform="rotate(-20 115 112)" />
          </g>
        );

      // ガチャネタ枠: キンシャチサボテン
      case 'cactus':
        return (
          <g>
            {/* 鉢 */}
            <path d="M75 150 L80 180 L120 180 L125 150 Z" fill="#b45309" />
            <line x1="72" y1="150" x2="128" y2="150" stroke="#78350f" strokeWidth="4" />
            {/* まあるいサボテン本体 */}
            <circle cx="100" cy="115" r="36" fill="#15803d" />
            {/* 縦の筋 */}
            <ellipse cx="100" cy="115" rx="24" ry="36" fill="none" stroke="#166534" strokeWidth="2" />
            <ellipse cx="100" cy="115" rx="12" ry="36" fill="none" stroke="#166534" strokeWidth="2" />
            {/* 金色のトゲ */}
            {[
              { x: 80, y: 100 }, { x: 120, y: 100 },
              { x: 75, y: 120 }, { x: 125, y: 120 },
              { x: 90, y: 90 }, { x: 110, y: 90 },
              { x: 100, y: 80 }, { x: 100, y: 130 }
            ].map((p, i) => (
              <g key={i}>
                <line x1={p.x - 4} y1={p.y} x2={p.x + 4} y2={p.y} stroke="#facc15" strokeWidth="2" />
                <line x1={p.x} y1={p.y - 4} x2={p.x} y2={p.y + 4} stroke="#facc15" strokeWidth="2" />
              </g>
            ))}
            {/* てっぺんの黄色い花 */}
            <circle cx="100" cy="78" r="8" fill="#fde047" />
          </g>
        );

      // シロツメクサ・クローバー
      case 'clover':
        return (
          <g>
            <path d="M100 175 Q96 135 100 95" stroke="#15803d" strokeWidth="3.5" fill="none" />
            {/* 三つ葉・四つ葉 */}
            {[0, 90, 180, 270].map((ang, i) => (
              <g key={i} transform={`translate(100, 95) rotate(${ang})`}>
                <path d="M0 0 C-14 -12 -16 -28 0 -30 C16 -28 14 -12 0 0 Z" fill={primaryColor} opacity={i === 3 ? 0.85 : 0.95} />
                <path d="M0 -5 C-6 -10 -7 -20 0 -22 C7 -20 6 -10 0 -5 Z" fill="#dcfce7" opacity="0.5" />
              </g>
            ))}
            {/* 中心部 */}
            <circle cx="100" cy="95" r="5" fill="#14532d" />
          </g>
        );

      // 曼珠沙華・ヒガンバナ
      case 'spider_lily':
        return (
          <g>
            <path d="M100 180 L100 100" stroke="#15803d" strokeWidth="4" />
            {/* 反り返った細い花弁 */}
            {[-60, -35, -15, 15, 35, 60].map((angle, i) => (
              <g key={i} transform={`translate(100, 100) rotate(${angle})`}>
                <path d="M0 0 Q-15 -35 -5 -60 Q5 -40 0 0" fill={primaryColor} />
                {/* 長く伸びる雄しべ */}
                <path d="M0 -10 Q10 -50 5 -75" stroke="#b91c1c" strokeWidth="1.5" fill="none" />
                <circle cx="5" cy="-75" r="2" fill="#fbbf24" />
              </g>
            ))}
            <circle cx="100" cy="100" r="6" fill="#7f1d1d" />
          </g>
        );

      // カメリア・ツバキ・サザンカ・ラナンキュラス・ダリア
      case 'camellia':
        return (
          <g>
            <path d="M100 175 Q96 135 100 100" stroke="#047857" strokeWidth="4" fill="none" />
            <path d="M96 145 Q65 140 60 155 Q85 160 97 148" fill="#065f46" />
            <path d="M104 135 Q135 130 140 145 Q115 150 103 138" fill="#047857" />
            {/* 外側の花弁 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
              <ellipse
                key={`outer-${i}`}
                cx={100 + Math.cos(ang * Math.PI / 180) * 24}
                cy={95 + Math.sin(ang * Math.PI / 180) * 24}
                rx="20"
                ry="16"
                fill={primaryColor}
                opacity="0.9"
                transform={`rotate(${ang} ${100 + Math.cos(ang * Math.PI / 180) * 24} ${95 + Math.sin(ang * Math.PI / 180) * 24})`}
              />
            ))}
            {/* 内側の重なり花弁 */}
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((ang, i) => (
              <ellipse
                key={`inner-${i}`}
                cx={100 + Math.cos(ang * Math.PI / 180) * 14}
                cy={95 + Math.sin(ang * Math.PI / 180) * 14}
                rx="14"
                ry="11"
                fill={secondaryColor || '#fda4af'}
                opacity="0.95"
                transform={`rotate(${ang} ${100 + Math.cos(ang * Math.PI / 180) * 14} ${95 + Math.sin(ang * Math.PI / 180) * 14})`}
              />
            ))}
            {/* 黄金の雄しべ群 */}
            <circle cx="100" cy="95" r="8" fill="#fbbf24" />
            <circle cx="100" cy="95" r="4" fill="#b45309" />
          </g>
        );

      // マリーゴールド・キンセンカ・ヘレニウム
      case 'marigold':
        return (
          <g>
            <path d="M100 175 L100 100" stroke="#059669" strokeWidth="4" />
            <path d="M98 140 Q65 130 65 150 Q85 155 97 142" fill="#047857" />
            {/* 細かく幾重にも重なる花弁 */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((ang, i) => (
              <g key={i} transform={`translate(100, 95) rotate(${ang})`}>
                <path d="M-8 -30 C-10 -40 10 -40 8 -30 L0 0 Z" fill={primaryColor} opacity="0.9" />
                <path d="M-5 -22 C-7 -30 7 -30 5 -22 L0 0 Z" fill={secondaryColor || '#f97316'} opacity="0.95" />
              </g>
            ))}
            <circle cx="100" cy="95" r="16" fill="#d97706" />
            <circle cx="100" cy="95" r="9" fill="#92400e" />
          </g>
        );

      // ガーベラ
      case 'gerbera':
        return (
          <g>
            <path d="M100 180 L100 95" stroke="#15803d" strokeWidth="4" />
            {/* 放射状に広がる花弁 */}
            {Array.from({ length: 18 }, (_, i) => i * 20).map((ang, i) => (
              <g key={i} transform={`translate(100, 95) rotate(${ang})`}>
                <ellipse cx="0" cy="-35" rx="5.5" ry="24" fill={primaryColor} opacity="0.95" />
              </g>
            ))}
            <circle cx="100" cy="95" r="18" fill="#b45309" />
            <circle cx="100" cy="95" r="12" fill="#78350f" />
            <circle cx="100" cy="95" r="6" fill="#fde047" />
          </g>
        );

      // シクラメン
      case 'cyclamen':
        return (
          <g>
            <path d="M100 175 Q95 140 100 115" stroke="#059669" strokeWidth="3.5" fill="none" />
            {/* ハート形の葉 */}
            <path d="M100 160 C80 150 70 170 100 185 C130 170 120 150 100 160 Z" fill="#047857" opacity="0.85" />
            <path d="M100 162 C85 155 78 168 100 180 C122 168 115 155 100 162 Z" fill="#6ee7b7" opacity="0.4" />
            {/* 反り返って上に向く花弁 */}
            {[-35, -15, 0, 15, 35].map((ang, i) => (
              <g key={i} transform={`translate(100, 115) rotate(${ang})`}>
                <path d="M0 0 C-10 -25 -12 -55 0 -60 C12 -55 10 -25 0 0 Z" fill={primaryColor} opacity="0.92" />
                <path d="M0 0 C-4 -15 -5 -35 0 -40 C5 -35 4 -15 0 0 Z" fill={secondaryColor || '#f472b6'} opacity="0.7" />
              </g>
            ))}
            <circle cx="100" cy="118" r="6" fill="#881337" />
          </g>
        );

      // アリッサム・コデマリ・シモツケ・小花集合
      case 'alyssum':
        return (
          <g>
            <path d="M100 175 Q96 135 100 100" stroke="#059669" strokeWidth="3" fill="none" />
            <circle cx="100" cy="95" r="45" fill={primaryColor} opacity="0.15" />
            {/* 密集する可愛い小花たち */}
            {[
              { x: 100, y: 75 }, { x: 80, y: 85 }, { x: 120, y: 85 },
              { x: 70, y: 105 }, { x: 100, y: 100 }, { x: 130, y: 105 },
              { x: 85, y: 120 }, { x: 115, y: 120 }
            ].map((p, idx) => (
              <g key={idx} transform={`translate(${p.x}, ${p.y})`}>
                {[0, 90, 180, 270].map((ang, i) => (
                  <circle
                    key={i}
                    cx={Math.cos(ang * Math.PI / 180) * 6}
                    cy={Math.sin(ang * Math.PI / 180) * 6}
                    r="4"
                    fill={idx % 2 === 0 ? primaryColor : (secondaryColor || '#ec4899')}
                  />
                ))}
                <circle cx="0" cy="0" r="2.5" fill="#facc15" />
              </g>
            ))}
          </g>
        );

      // フリージア・スイセン・ヒヤシンス
      case 'freesia':
        return (
          <g>
            <path d="M85 175 Q95 125 125 75" stroke="#059669" strokeWidth="3.5" fill="none" />
            {/* 穂状に並ぶ小ラッパ花 */}
            {[
              { x: 92, y: 140, rot: -20, s: 0.7 },
              { x: 100, y: 120, rot: -10, s: 0.85 },
              { x: 110, y: 100, rot: 5, s: 1 },
              { x: 120, y: 82, rot: 20, s: 0.9 },
              { x: 130, y: 68, rot: 35, s: 0.75 }
            ].map((f, i) => (
              <g key={i} transform={`translate(${f.x}, ${f.y}) rotate(${f.rot}) scale(${f.s})`}>
                <path d="M0 0 L-10 -15 Q-15 -30 0 -35 Q15 -30 10 -15 Z" fill={primaryColor} opacity="0.9" />
                <ellipse cx="0" cy="-35" rx="14" ry="7" fill={secondaryColor || '#fef08a'} />
                <circle cx="0" cy="-35" r="3" fill="#ca8a04" />
              </g>
            ))}
          </g>
        );

      // デルフィニウム・ラークスパー・花穂
      case 'delphinium':
        return (
          <g>
            <path d="M100 180 L100 50" stroke="#047857" strokeWidth="4" />
            {/* 高くそびえる青い花穂 */}
            {[140, 120, 100, 80, 60].map((y, idx) => (
              <g key={idx}>
                {[-15, 0, 15].map((xOff, i) => (
                  <circle
                    key={i}
                    cx={100 + xOff}
                    cy={y + (i === 1 ? -6 : 4)}
                    r={12 - idx * 1.2}
                    fill={idx % 2 === 0 ? primaryColor : (secondaryColor || '#60a5fa')}
                    opacity="0.9"
                  />
                ))}
                <circle cx="100" cy={y} r="3" fill="#ffffff" />
              </g>
            ))}
          </g>
        );

      // スカビオサ・アザミ・ピンクッション
      case 'scabiosa':
        return (
          <g>
            <path d="M100 175 L100 100" stroke="#059669" strokeWidth="3.5" />
            {/* まあるい花房 */}
            <circle cx="100" cy="95" r="32" fill={primaryColor} opacity="0.3" />
            {/* 外周の花弁 */}
            {Array.from({ length: 14 }, (_, i) => i * (360 / 14)).map((ang, i) => (
              <ellipse
                key={i}
                cx={100 + Math.cos(ang * Math.PI / 180) * 32}
                cy={95 + Math.sin(ang * Math.PI / 180) * 32}
                rx="9"
                ry="6"
                fill={primaryColor}
                opacity="0.85"
                transform={`rotate(${ang} ${100 + Math.cos(ang * Math.PI / 180) * 32} ${95 + Math.sin(ang * Math.PI / 180) * 32})`}
              />
            ))}
            {/* 中心のピンクッション針 */}
            {Array.from({ length: 16 }, (_, i) => (
              <circle
                key={i}
                cx={100 + (Math.sin(i * 1.5) * 16)}
                cy={95 + (Math.cos(i * 1.5) * 16)}
                r="3"
                fill={secondaryColor || '#f472b6'}
              />
            ))}
            <circle cx="100" cy="95" r="8" fill="#facc15" />
          </g>
        );

      // 実もの・果実（カリン・キンカン・サンキライ）
      case 'fruit':
        return (
          <g>
            <path d="M80 180 Q100 130 115 80" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
            <path d="M95 125 Q70 120 60 135 Q85 140 96 128" fill="#15803d" />
            <path d="M108 95 Q135 90 145 105 Q125 110 107 98" fill="#166534" />
            {/* 豊かに実る果実 */}
            <circle cx="85" cy="115" r="22" fill={primaryColor} />
            <circle cx="85" cy="115" r="18" fill={secondaryColor || '#fb923c'} opacity="0.6" />
            <circle cx="120" cy="85" r="26" fill={primaryColor} />
            <circle cx="120" cy="85" r="22" fill={secondaryColor || '#fb923c'} opacity="0.6" />
            {/* 光のハイライト */}
            <ellipse cx="114" cy="78" rx="6" ry="3" fill="#ffffff" opacity="0.6" transform="rotate(-30 114 78)" />
          </g>
        );

      // 観葉・常緑葉（オリーブ・マサキ）
      case 'foliage':
        return (
          <g>
            <path d="M90 180 Q105 130 110 50" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            {/* 対生・互生する美しい葉 */}
            {[
              { x: 92, y: 150, rot: -40, s: 1 },
              { x: 98, y: 135, rot: 40, s: 1 },
              { x: 102, y: 110, rot: -35, s: 0.9 },
              { x: 106, y: 95, rot: 35, s: 0.85 },
              { x: 108, y: 70, rot: -25, s: 0.75 },
              { x: 110, y: 52, rot: 25, s: 0.65 }
            ].map((l, i) => (
              <g key={i} transform={`translate(${l.x}, ${l.y}) rotate(${l.rot}) scale(${l.s})`}>
                <ellipse cx="0" cy="-22" rx="9" ry="22" fill={i % 2 === 0 ? primaryColor : (secondaryColor || '#86efac')} opacity="0.9" />
                <line x1="0" y1="0" x2="0" y2="-44" stroke="#dcfce7" strokeWidth="1.5" />
              </g>
            ))}
          </g>
        );

      // りんご（林檎・姫林檎）: 赤く丸い果実、枝、葉、清楚な白い花
      case 'apple':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M100 80 Q98 52 108 45" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M103 62 Q130 50 135 68 Q115 78 103 62" fill="#15803d" />
            <path d="M103 62 Q125 65 135 68" stroke="#86efac" strokeWidth="1" fill="none" />
            {/* リンゴ本体 */}
            <ellipse cx="88" cy="115" rx="30" ry="34" fill="#dc2626" />
            <ellipse cx="112" cy="115" rx="30" ry="34" fill="#ef4444" />
            {/* 上下のくぼみ */}
            <path d="M78 85 Q100 95 122 85 Q100 88 78 85 Z" fill="#991b1b" />
            <path d="M85 145 Q100 140 115 145 Q100 142 85 145 Z" fill="#7f1d1d" />
            {/* 光のハイライト */}
            <path d="M75 98 Q70 115 75 125" stroke="#fca5a5" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* 添えられた可憐な白い花 */}
            <g transform="translate(135, 125) scale(0.65)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 16} cy={Math.sin(ang * Math.PI / 180) * 16} r="10" fill="#ffffff" stroke="#fecdd3" strokeWidth="1" />
              ))}
              <circle cx="0" cy="0" r="7" fill="#facc15" />
            </g>
          </g>
        );

      // イチゴ（苺・ヘビイチゴ・ワイルドストロベリー）: 赤い実、種、ヘタ、白いイチゴ花
      case 'strawberry':
      case 'wild_strawberry':
        return (
          <g>
            {/* 茎 */}
            <path d="M100 68 Q95 48 90 40" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* イチゴ果実（ふっくら逆三角形） */}
            <path
              d="M100 80 C60 80 55 110 80 145 C92 162 100 168 100 168 C100 168 108 162 120 145 C145 110 140 80 100 80 Z"
              fill="#e11d48"
            />
            {/* ハイライト */}
            <path d="M75 92 Q68 110 75 125" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75" />
            {/* 種のツブツブ（イエローゴールド） */}
            {[
              { x: 85, y: 95 }, { x: 100, y: 92 }, { x: 115, y: 95 },
              { x: 75, y: 110 }, { x: 92, y: 108 }, { x: 108, y: 108 }, { x: 125, y: 110 },
              { x: 82, y: 125 }, { x: 100, y: 122 }, { x: 118, y: 125 },
              { x: 90, y: 140 }, { x: 110, y: 140 },
              { x: 100, y: 152 }
            ].map((pt, i) => (
              <ellipse key={i} cx={pt.x} cy={pt.y} rx="1.8" ry="3" fill="#fef08a" transform={`rotate(${i % 2 === 0 ? -10 : 10} ${pt.x} ${pt.y})`} />
            ))}
            {/* 緑のヘタ（萼） */}
            <path d="M100 80 Q90 65 72 70 Q88 78 100 80" fill="#16a34a" />
            <path d="M100 80 Q100 62 100 60 Q100 75 100 80" fill="#15803d" />
            <path d="M100 80 Q110 65 128 70 Q112 78 100 80" fill="#16a34a" />
            <path d="M100 80 Q80 82 70 88 Q88 88 100 80" fill="#15803d" />
            <path d="M100 80 Q120 82 130 88 Q112 88 100 80" fill="#15803d" />
            {/* 添えられた白いイチゴの花 */}
            <g transform="translate(142, 65) scale(0.6)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 15} cy={Math.sin(ang * Math.PI / 180) * 15} r="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
              ))}
              <circle cx="0" cy="0" r="7" fill="#eab308" />
            </g>
          </g>
        );

      // ナシ（和梨・洋梨・梨の花）: みずみずしい果実と純白の梨花
      case 'pear':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M100 70 Q102 45 112 38" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M105 52 Q130 42 135 60 Q116 68 105 52" fill="#15803d" />
            {/* 梨の果実（丸みのある和梨・洋梨ハイブリッド） */}
            <ellipse cx="100" cy="85" rx="22" ry="20" fill="#ca8a04" />
            <ellipse cx="100" cy="120" rx="36" ry="38" fill="#eab308" />
            {/* 梨の皮の自然なグラデーションと点々（そばかす） */}
            {[
              { x: 80, y: 105 }, { x: 120, y: 110 }, { x: 95, y: 130 },
              { x: 115, y: 135 }, { x: 75, y: 125 }, { x: 105, y: 145 },
              { x: 88, y: 90 }, { x: 110, y: 92 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.2" fill="#a16207" opacity="0.7" />
            ))}
            {/* ハイライト */}
            <path d="M78 100 Q72 120 80 135" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            {/* 白い清楚な梨花（梨花一枝春帯雨） */}
            <g transform="translate(50, 65) scale(0.65)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <ellipse key={i} cx={Math.cos(ang * Math.PI / 180) * 16} cy={Math.sin(ang * Math.PI / 180) * 16} rx="11" ry="8" fill="#fefce8" stroke="#fef08a" strokeWidth="1" transform={`rotate(${ang} ${Math.cos(ang * Math.PI / 180) * 16} ${Math.sin(ang * Math.PI / 180) * 16})`} />
              ))}
              <circle cx="0" cy="0" r="5" fill="#f59e0b" />
            </g>
          </g>
        );

      // オレンジ / 柑橘（蜜柑・オレンジの花）: ジューシーな丸い果実とカットスライス
      case 'orange':
      case 'citrus':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M90 65 Q92 48 98 40" stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M94 50 Q118 40 125 55 Q108 65 94 50" fill="#166534" />
            {/* 丸いオレンジ果実 */}
            <circle cx="85" cy="112" r="36" fill="#f97316" />
            {/* 表面の細かな点々 */}
            <circle cx="85" cy="112" r="36" fill="#ea580c" opacity="0.25" />
            <path d="M62 95 Q56 112 65 128" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
            <circle cx="88" cy="78" r="3" fill="#15803d" />
            {/* ジューシーなスライス断面（右側に重なる） */}
            <g transform="translate(125, 125) scale(0.72)">
              <circle cx="0" cy="0" r="32" fill="#ea580c" />
              <circle cx="0" cy="0" r="30" fill="#ffedd5" />
              <circle cx="0" cy="0" r="27" fill="#fb923c" />
              {/* 果肉の房 */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <path
                  key={i}
                  d={`M0 0 L${Math.cos((ang - 18) * Math.PI / 180) * 25} ${Math.sin((ang - 18) * Math.PI / 180) * 25} A25 25 0 0 1 ${Math.cos((ang + 18) * Math.PI / 180) * 25} ${Math.sin((ang + 18) * Math.PI / 180) * 25} Z`}
                  fill="#f97316"
                  stroke="#ffedd5"
                  strokeWidth="1.5"
                />
              ))}
              <circle cx="0" cy="0" r="4" fill="#ffedd5" />
            </g>
          </g>
        );

      // キンカン（金柑）: 枝に鈴なりに実る小さな黄金の楕円果実
      case 'kumquat':
        return (
          <g>
            {/* 枝 */}
            <path d="M60 160 Q85 130 100 80 Q110 55 125 45" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M100 80 Q130 95 150 110" stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* 濃い緑の葉 */}
            <path d="M85 110 Q60 105 55 120 Q75 125 85 110" fill="#14532d" />
            <path d="M110 75 Q135 60 145 75 Q125 85 110 75" fill="#166534" />
            <path d="M130 105 Q155 100 160 115 Q140 120 130 105" fill="#14532d" />
            {/* 金柑の実1（中央） */}
            <ellipse cx="95" cy="115" rx="16" ry="22" fill="#f59e0b" transform="rotate(-15 95 115)" />
            <path d="M85 105 Q82 115 86 125" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
            <circle cx="98" cy="95" r="2.5" fill="#15803d" />
            {/* 金柑の実2（右上） */}
            <ellipse cx="135" cy="85" rx="14" ry="19" fill="#f97316" transform="rotate(25 135 85)" />
            <path d="M128 78 Q125 86 130 93" stroke="#fed7aa" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            <circle cx="127" cy="72" r="2" fill="#15803d" />
            {/* 金柑の実3（左下） */}
            <ellipse cx="68" cy="140" rx="14" ry="19" fill="#ea580c" transform="rotate(20 68 140)" />
            <circle cx="62" cy="125" r="2" fill="#15803d" />
            {/* 白い小さな花 */}
            <g transform="translate(115, 52) scale(0.5)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 14} cy={Math.sin(ang * Math.PI / 180) * 14} r="8" fill="#ffffff" />
              ))}
              <circle cx="0" cy="0" r="5" fill="#facc15" />
            </g>
          </g>
        );

      // ユズ（柚子）: 凸凹した愛らしい黄色い実、星型ヘタ、芳香の葉
      case 'yuzu':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M98 62 Q96 45 102 38" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M96 52 Q65 42 60 60 Q80 68 96 52" fill="#15803d" />
            <path d="M102 52 Q135 42 140 60 Q120 68 102 52" fill="#166534" />
            {/* 柚子本体（少し扁平で凸凹感のある形） */}
            <path
              d="M100 70 C135 68 148 90 145 118 C142 145 125 156 100 156 C75 156 58 145 55 118 C52 90 65 68 100 70 Z"
              fill="#eab308"
            />
            {/* 柚子独特のデコボコ陰影 */}
            {[
              { x: 70, y: 95 }, { x: 130, y: 98 }, { x: 80, y: 130 },
              { x: 120, y: 132 }, { x: 100, y: 142 }, { x: 90, y: 110 }, { x: 110, y: 115 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#ca8a04" opacity="0.4" />
            ))}
            {/* ハイライト */}
            <path d="M72 88 Q65 105 72 122" stroke="#fef08a" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* 特徴的な星型ヘタとくぼみ */}
            <ellipse cx="100" cy="72" rx="7" ry="4" fill="#a16207" />
            <path d="M100 70 Q95 62 90 64 Q96 68 100 70" fill="#15803d" />
            <path d="M100 70 Q105 62 110 64 Q104 68 100 70" fill="#15803d" />
          </g>
        );

      // メロン（甜瓜）: ネット（網目模様）の美しい大玉果実とT字のつる
      case 'melon':
        return (
          <g>
            {/* T字の果柄・つる */}
            <path d="M100 72 L100 52" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
            <path d="M75 52 L125 52" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M125 52 Q135 48 140 55 Q135 62 125 58" fill="none" stroke="#22c55e" strokeWidth="2.5" />
            {/* メロン本体（球体） */}
            <circle cx="100" cy="120" r="46" fill="#86efac" />
            <circle cx="100" cy="120" r="46" fill="#4ade80" opacity="0.4" />
            {/* 網目模様（ネット）の幾何学ライン */}
            <path d="M60 100 Q100 115 140 100" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            <path d="M56 120 Q100 135 144 120" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            <path d="M64 140 Q100 152 136 140" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            <path d="M80 80 Q92 120 80 160" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            <path d="M100 74 Q105 120 100 166" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            <path d="M120 80 Q108 120 120 160" stroke="#f0fdf4" strokeWidth="2" fill="none" opacity="0.85" />
            {/* ハイライト */}
            <path d="M70 95 Q64 110 70 125" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
          </g>
        );

      // グミ（茱萸・びっくりグミ）: 細長いルビー色の果実、銀斑点、垂れる果柄
      case 'gumi':
      case 'silverberry':
      case 'berry':
        return (
          <g>
            {/* 枝 */}
            <path d="M40 70 Q90 60 160 75" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* 葉っぱ */}
            <path d="M70 65 Q90 45 110 52 Q95 72 70 65" fill="#15803d" />
            <path d="M120 68 Q145 50 165 60 Q145 78 120 68" fill="#166534" />
            {/* グミ1の柄と実（中央左） */}
            <path d="M85 64 Q80 90 75 105" stroke="#65a30d" strokeWidth="2" fill="none" />
            <ellipse cx="73" cy="122" rx="14" ry="20" fill="#dc2626" transform="rotate(8 73 122)" />
            {/* 銀白色の星状斑点 */}
            {[
              { x: 68, y: 112 }, { x: 78, y: 116 }, { x: 72, y: 125 },
              { x: 67, y: 132 }, { x: 76, y: 134 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1" fill="#fecaca" />
            ))}
            <path d="M65 115 Q62 124 66 130" stroke="#fca5a5" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* グミ2の柄と実（中央右・大粒びっくりグミ） */}
            <path d="M125 70 Q130 95 132 110" stroke="#65a30d" strokeWidth="2" fill="none" />
            <ellipse cx="134" cy="130" rx="16" ry="24" fill="#b91c1c" transform="rotate(-8 134 130)" />
            {[
              { x: 128, y: 118 }, { x: 138, y: 122 }, { x: 132, y: 132 },
              { x: 126, y: 140 }, { x: 138, y: 142 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.1" fill="#fecaca" />
            ))}
            <path d="M124 122 Q122 132 126 138" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
          </g>
        );

      // ナス（茄子）: 艶やかな濃紫色のぷっくりした果実、紫の星型ヘタ
      case 'eggplant':
      case 'vegetable_eggplant':
        return (
          <g>
            {/* 太い緑の茎 */}
            <path d="M100 60 Q98 42 96 35" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* ナス果実本体（下膨れの優美な曲線） */}
            <path
              d="M100 70 C120 70 128 85 130 110 C134 140 125 168 100 168 C75 168 66 140 70 110 C72 85 80 70 100 70 Z"
              fill="#3b0764"
            />
            {/* 艶やかな紫の光彩ハイライト */}
            <path d="M82 95 Q76 120 84 145" stroke="#c084fc" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
            {/* トゲのあるトゲトゲのヘタ（萼） */}
            <path d="M100 68 Q85 68 76 78 Q88 84 100 80" fill="#581c87" />
            <path d="M100 68 Q115 68 124 78 Q112 84 100 80" fill="#581c87" />
            <path d="M100 68 Q90 85 85 95 Q96 88 100 80" fill="#3b0764" />
            <path d="M100 68 Q110 85 115 95 Q104 88 100 80" fill="#3b0764" />
            <path d="M100 68 L100 95 L100 80" stroke="#581c87" strokeWidth="3" />
            {/* 星型の紫色のナスの花 */}
            <g transform="translate(142, 60) scale(0.6)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <polygon
                  key={i}
                  points="0,0 -8,-20 8,-20"
                  fill="#a855f7"
                  transform={`rotate(${ang})`}
                />
              ))}
              <circle cx="0" cy="0" r="5" fill="#facc15" />
            </g>
          </g>
        );

      // トウガラシ（唐辛子）: ピンと尖った鮮烈な赤い実、緑のガク
      case 'pepper':
        return (
          <g>
            {/* 茎 */}
            <path d="M100 60 Q98 42 94 36" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* 唐辛子の緑のヘタ */}
            <path d="M88 68 Q100 62 112 68 L108 76 Q100 72 92 76 Z" fill="#166534" />
            {/* 唐辛子本体（すらりとカーブした鮮紅の果実） */}
            <path
              d="M92 75 Q88 105 105 140 Q118 165 125 170 Q116 160 108 140 Q98 110 108 75 Z"
              fill="#dc2626"
            />
            {/* ハイライト */}
            <path d="M96 85 Q95 110 104 135" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
            {/* 添えられた2本目の小さな青唐辛子 */}
            <g transform="translate(70, 95) rotate(-25) scale(0.65)">
              <path d="M92 75 Q88 105 105 140 Q118 165 125 170 Q116 160 108 140 Q98 110 108 75 Z" fill="#16a34a" />
              <path d="M88 68 Q100 62 112 68 L108 76 Q100 72 92 76 Z" fill="#14532d" />
            </g>
          </g>
        );

      // サクランボ（桜桃・チェリー）: 二つ並んで揺れるルビー色の双子果実
      case 'cherry':
      case 'cherry_fruit':
        return (
          <g>
            {/* 二股の長い緑の軸（果柄） */}
            <path d="M100 50 Q85 85 75 120" stroke="#16a34a" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M100 50 Q112 85 125 120" stroke="#15803d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            {/* 結合部の小葉 */}
            <ellipse cx="100" cy="50" rx="3" ry="2" fill="#14532d" />
            <path d="M100 50 Q120 40 128 50 Q115 56 100 50" fill="#15803d" />
            {/* 左のサクランボ */}
            <circle cx="75" cy="126" r="22" fill="#e11d48" />
            <circle cx="75" cy="126" r="22" fill="#be123c" opacity="0.3" />
            <path d="M63 116 Q58 126 63 134" stroke="#fecdd3" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
            <ellipse cx="75" cy="106" rx="4" ry="2" fill="#881337" />
            {/* 右のサクランボ */}
            <circle cx="125" cy="126" r="22" fill="#e11d48" />
            <circle cx="125" cy="126" r="22" fill="#be123c" opacity="0.3" />
            <path d="M113 116 Q108 126 113 134" stroke="#fecdd3" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
            <ellipse cx="125" cy="106" rx="4" ry="2" fill="#881337" />
          </g>
        );

      // ブドウ（葡萄）: 房状に連なる瑞々しい果実の粒と蔓
      case 'grape':
        return (
          <g>
            {/* 蔓と枝 */}
            <path d="M100 65 L100 45" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <path d="M100 48 Q120 42 125 50 Q118 56 100 48" fill="#15803d" />
            {/* ぶどうの粒（ピラミッド状の房） */}
            {/* 1段目 */}
            {[80, 100, 120].map((cx, i) => (
              <circle key={`r1-${i}`} cx={cx} cy={78} r="12" fill="#6b21a8" />
            ))}
            {/* 2段目 */}
            {[72, 91, 109, 128].map((cx, i) => (
              <circle key={`r2-${i}`} cx={cx} cy={96} r="12" fill="#7e22ce" />
            ))}
            {/* 3段目 */}
            {[80, 100, 120].map((cx, i) => (
              <circle key={`r3-${i}`} cx={cx} cy={114} r="12" fill="#6b21a8" />
            ))}
            {/* 4段目 */}
            {[90, 110].map((cx, i) => (
              <circle key={`r4-${i}`} cx={cx} cy={132} r="12" fill="#7e22ce" />
            ))}
            {/* 最下段 */}
            <circle cx="100" cy="148" r="11" fill="#581c87" />
            {/* 代表的な粒のハイライト */}
            <circle cx="88" cy="92" r="3" fill="#e9d5ff" opacity="0.8" />
            <circle cx="106" cy="92" r="3" fill="#e9d5ff" opacity="0.8" />
            <circle cx="96" cy="110" r="3" fill="#e9d5ff" opacity="0.8" />
          </g>
        );

      // ブルーベリー: 青紫色の丸い果実、特徴的な星型クラウン（萼の跡）、白い粉（ブルーム）
      case 'blueberry':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M70 65 Q95 75 140 85" stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M85 70 Q70 50 65 65 Q80 75 85 70" fill="#15803d" />
            <path d="M125 82 Q145 65 150 80 Q135 90 125 82" fill="#166534" />
            
            {/* ブルーベリーの実1（左奥） */}
            <circle cx="78" cy="110" r="18" fill="#1e3a8a" />
            <circle cx="78" cy="110" r="18" fill="#3b82f6" opacity="0.25" />
            <circle cx="74" cy="104" r="2.5" fill="#bfdbfe" opacity="0.8" />
            <circle cx="78" cy="118" r="5" fill="#172554" />
            <path d="M75 116 L81 116 M78 113 L78 119" stroke="#93c5fd" strokeWidth="1.2" />

            {/* ブルーベリーの実2（右奥） */}
            <circle cx="122" cy="112" r="19" fill="#312e81" />
            <circle cx="122" cy="112" r="19" fill="#6366f1" opacity="0.2" />
            <circle cx="118" cy="106" r="2.5" fill="#c7d2fe" opacity="0.8" />
            <circle cx="122" cy="120" r="5" fill="#1e1b4b" />
            <path d="M119 118 L125 118 M122 115 L122 121" stroke="#a5b4fc" strokeWidth="1.2" />

            {/* ブルーベリーの実3（手前中央・大玉） */}
            <circle cx="100" cy="128" r="23" fill="#1e40af" />
            <circle cx="100" cy="128" r="23" fill="#60a5fa" opacity="0.2" />
            {/* ブルーム（果粉）の優しい反射 */}
            <path d="M88 118 Q84 130 90 138" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
            {/* 星型クラウン（ブルーベリー特有の星型に開いた窪み） */}
            <circle cx="103" cy="138" r="7" fill="#0f172a" />
            {[0, 72, 144, 216, 288].map((ang, i) => (
              <polygon
                key={i}
                points="103,138 101,133 105,133"
                fill="#93c5fd"
                transform={`rotate(${ang} 103 138)`}
              />
            ))}
          </g>
        );

      // サクラ（桜・満開の桜の木）: 力強い木の幹・枝から薄紅色の桜花が咲き誇る樹木デザイン
      case 'cherry_blossom':
      case 'sakura':
        return (
          <g>
            {/* 桜の木の力強い幹と枝 */}
            <path d="M100 185 Q96 150 92 125 Q82 95 65 80" stroke="#5c2c16" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M92 125 Q115 105 135 90" stroke="#5c2c16" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M94 110 Q98 85 96 68" stroke="#5c2c16" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* 樹皮のテクスチャ */}
            <path d="M96 160 Q94 145 95 135" stroke="#3e1a0b" strokeWidth="1.5" fill="none" />

            {/* 桜の花房たち（枝先にこぼれ咲く） */}
            {[
              { x: 62, y: 75, s: 0.85, rot: -15 },
              { x: 95, y: 62, s: 0.95, rot: 10 },
              { x: 135, y: 85, s: 0.9, rot: 25 },
              { x: 110, y: 95, s: 0.75, rot: -30 },
              { x: 78, y: 105, s: 0.8, rot: 40 }
            ].map((fl, idx) => (
              <g key={idx} transform={`translate(${fl.x}, ${fl.y}) scale(${fl.s}) rotate(${fl.rot})`}>
                {/* 5枚の桜花弁（先端にハート型の切れ込み） */}
                {[0, 72, 144, 216, 288].map((ang, i) => (
                  <path
                    key={i}
                    transform={`rotate(${ang})`}
                    d="M0 0 C-10 -15 -14 -28 -5 -32 C-2 -33 0 -28 0 -26 C0 -28 2 -33 5 -32 C14 -28 10 -15 0 0 Z"
                    fill="#fbcfe8"
                    stroke="#f472b6"
                    strokeWidth="0.8"
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="#fb7185" />
                <circle cx="0" cy="0" r="2" fill="#facc15" />
              </g>
            ))}

            {/* ふわりと舞い散る花びら */}
            <path d="M140 135 C135 130 132 125 138 122 C144 125 142 132 140 135 Z" fill="#fbcfe8" transform="rotate(20 140 135)" />
            <path d="M52 145 C48 140 45 136 50 134 C55 136 53 142 52 145 Z" fill="#fbcfe8" transform="rotate(-35 52 145)" />
          </g>
        );

      // イチョウ（銀杏の木）: 幹と枝、黄金色の美しい扇型葉、銀杏の実
      case 'ginkgo':
        return (
          <g>
            {/* 木の枝・幹 */}
            <path d="M100 185 Q102 145 98 120 Q92 90 75 75" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M98 120 Q120 100 140 85" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M99 105 Q102 80 100 65" stroke="#78350f" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* 扇型のイチョウの葉1（左） */}
            <g transform="translate(68, 70) scale(0.8) rotate(-25)">
              <path
                d="M0 0 L-20 -30 C-10 -40 -3 -35 0 -33 C3 -35 10 -40 20 -30 Z"
                fill="#facc15"
                stroke="#eab308"
                strokeWidth="1.5"
              />
              <path d="M0 0 L-10 -34 M0 0 L-4 -33 M0 0 L3 -33 M0 0 L10 -34" stroke="#fef08a" strokeWidth="1" opacity="0.8" />
            </g>

            {/* 扇型のイチョウの葉2（中央上） */}
            <g transform="translate(100, 52) scale(0.9) rotate(5)">
              <path
                d="M0 0 L-22 -32 C-12 -44 -3 -38 0 -36 C3 -38 12 -44 22 -32 Z"
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="1.5"
              />
              <path d="M0 0 L-12 -36 M0 0 L-5 -36 M0 0 L5 -36 M0 0 L12 -36" stroke="#fef08a" strokeWidth="1.2" opacity="0.8" />
            </g>

            {/* 扇型のイチョウの葉3（右） */}
            <g transform="translate(135, 80) scale(0.85) rotate(35)">
              <path
                d="M0 0 L-20 -30 C-10 -40 -3 -35 0 -33 C3 -35 10 -40 20 -30 Z"
                fill="#facc15"
                stroke="#ca8a04"
                strokeWidth="1.5"
              />
              <path d="M0 0 L-10 -34 M0 0 L-3 -33 M0 0 L3 -33 M0 0 L10 -34" stroke="#fef08a" strokeWidth="1" opacity="0.8" />
            </g>

            {/* ぶら下がる橙色の銀杏の実 */}
            <g transform="translate(110, 115)">
              <line x1="0" y1="0" x2="-4" y2="15" stroke="#854d0e" strokeWidth="1.5" />
              <line x1="0" y1="0" x2="6" y2="18" stroke="#854d0e" strokeWidth="1.5" />
              <circle cx="-4" cy="18" r="6" fill="#f97316" />
              <circle cx="-4" cy="18" r="4.5" fill="#fb923c" />
              <circle cx="6" cy="22" r="6.5" fill="#f59e0b" />
            </g>
          </g>
        );

      // パキラ（観葉植物・編み込み幹の木）: くるくる編み込まれた幹と放射状に広がる掌状葉
      case 'pachira':
        return (
          <g>
            {/* 編み込み幹（ツイストトランク） */}
            <path d="M92 185 C92 155 108 140 94 115" stroke="#78350f" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M104 185 C104 160 88 135 106 115" stroke="#92400e" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M98 185 C98 150 102 135 100 115" stroke="#a16207" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* 上部の分岐柄 */}
            <path d="M100 115 L100 95" stroke="#15803d" strokeWidth="3.5" />

            {/* 放射状に広がる5枚の美しい掌状葉 */}
            {[
              { ang: -75, l: 38, w: 10, col: '#166534' },
              { ang: -35, l: 48, w: 12, col: '#15803d' },
              { ang: 0, l: 52, w: 13, col: '#22c55e' },
              { ang: 35, l: 48, w: 12, col: '#15803d' },
              { ang: 75, l: 38, w: 10, col: '#166534' }
            ].map((lf, i) => (
              <g key={i} transform={`translate(100, 95) rotate(${lf.ang})`}>
                <ellipse cx="0" cy={-lf.l / 2} rx={lf.w / 2} ry={lf.l / 2} fill={lf.col} />
                <line x1="0" y1="0" x2="0" y2={-lf.l} stroke="#86efac" strokeWidth="1.2" />
              </g>
            ))}
          </g>
        );

      // ススキ（薄・芒とお月見）: 秋風になびく黄金色の穂先、弓なりの葉、背景の月
      case 'susuki':
      case 'pampas_grass':
        return (
          <g>
            {/* 背景の柔らかなお月様 */}
            <circle cx="140" cy="65" r="32" fill="#fef08a" opacity="0.85" />
            <circle cx="140" cy="65" r="32" fill="#fef9c3" opacity="0.5" />

            {/* ススキの弓なりの茎1（左奥） */}
            <path d="M60 185 Q75 120 65 65" stroke="#a16207" strokeWidth="2.5" fill="none" />
            {/* 穂先（ふんわりした綿毛ブラシ） */}
            {[0, 8, 16, 24, 32, 40].map((dy, i) => (
              <line key={`s1-${i}`} x1={65 + (i * 0.5)} y1={65 + dy} x2={50 - (i * 1.5)} y2={55 + dy} stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
            ))}

            {/* ススキの弓なりの茎2（中央・大） */}
            <path d="M90 185 Q105 110 92 50" stroke="#ca8a04" strokeWidth="3" fill="none" />
            {[0, 7, 14, 21, 28, 35, 42, 49].map((dy, i) => (
              <g key={`s2-${i}`}>
                <line x1={92 + (i * 0.8)} y1={50 + dy} x2={72 - (i * 1.2)} y2={40 + dy} stroke="#fef08a" strokeWidth="2.2" strokeLinecap="round" />
                <line x1={92 + (i * 0.8)} y1={50 + dy} x2={106 + (i * 0.6)} y2={44 + dy} stroke="#fefce8" strokeWidth="1.8" strokeLinecap="round" />
              </g>
            ))}

            {/* 細長くしなる緑〜黄緑の葉 */}
            <path d="M75 185 Q60 140 35 130" stroke="#65a30d" strokeWidth="2" fill="none" />
            <path d="M100 185 Q130 145 165 140" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
          </g>
        );

      // キキョウ（桔梗）: 端正な五芒星の青紫花、風船のような愛らしい蕾
      case 'bellflower':
      case 'kikyo':
        return (
          <g>
            {/* 茎と葉 */}
            <path d="M100 180 Q98 135 100 95" stroke="#15803d" strokeWidth="3.5" />
            <path d="M98 140 Q65 130 55 142 Q80 152 97 142" fill="#166534" />
            <path d="M102 120 Q135 110 145 122 Q120 132 103 122" fill="#15803d" />

            {/* 風船のような膨らんだ蕾（Balloon flower） */}
            <g transform="translate(62, 75) scale(0.65)">
              <ellipse cx="0" cy="0" rx="18" ry="18" fill="#4338ca" />
              <path d="M-18 0 Q0 -12 18 0 Q0 12 -18 0 Z" fill="#6366f1" opacity="0.6" />
              <path d="M0 -18 Q-12 0 0 18 Q12 0 0 -18 Z" fill="#6366f1" opacity="0.6" />
              <circle cx="0" cy="-18" r="3" fill="#15803d" />
            </g>

            {/* 星型（五裂）のキキョウ主花 */}
            <g transform="translate(115, 80) scale(1)">
              {/* 5枚の星型花弁 */}
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <polygon
                  key={i}
                  points="0,0 -16,-20 0,-42 16,-20"
                  fill="#3730a3"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                  transform={`rotate(${ang})`}
                />
              ))}
              {/* 花弁中央の明るいグラデーション */}
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <line key={`v-${i}`} x1="0" y1="0" x2="0" y2="-40" stroke="#818cf8" strokeWidth="1.5" transform={`rotate(${ang})`} />
              ))}
              {/* 星型の黄色い雄しべ・雌しべ */}
              <circle cx="0" cy="0" r="7" fill="#facc15" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
          </g>
        );

      // パンジー（三色菫）: フリル花弁、中心の愛らしいブロッチ（髭模様）
      case 'pansy':
        return (
          <g>
            {/* 茎と葉 */}
            <path d="M100 180 Q96 140 100 105" stroke="#16a34a" strokeWidth="3.5" />
            <path d="M98 145 Q65 140 55 155 Q80 160 97 147" fill="#15803d" />
            <path d="M102 135 Q135 130 145 145 Q120 150 103 137" fill="#15803d" />

            {/* 上部2枚の花弁（深い紫） */}
            <ellipse cx="82" cy="72" rx="26" ry="24" fill="#4c1d95" opacity="0.95" />
            <ellipse cx="118" cy="72" rx="26" ry="24" fill="#581c87" opacity="0.95" />

            {/* 左右2枚の花弁（明るい紫と黄のグラデーション） */}
            <ellipse cx="72" cy="100" rx="28" ry="24" fill="#7c3aed" />
            <ellipse cx="128" cy="100" rx="28" ry="24" fill="#8b5cf6" />

            {/* 下部1枚の大きな中央花弁（黄色〜白） */}
            <ellipse cx="100" cy="116" rx="34" ry="26" fill="#facc15" />

            {/* パンジー特有の「お顔」模様（ブロッチ／髭模様） */}
            <path d="M85 96 Q100 110 115 96 Q100 120 85 96 Z" fill="#3b0764" />
            <circle cx="92" cy="100" r="6" fill="#1e1b4b" />
            <circle cx="108" cy="100" r="6" fill="#1e1b4b" />
            {/* 放射状の細いヒゲ */}
            <line x1="100" y1="105" x2="88" y2="114" stroke="#1e1b4b" strokeWidth="1.8" />
            <line x1="100" y1="105" x2="100" y2="120" stroke="#1e1b4b" strokeWidth="1.8" />
            <line x1="100" y1="105" x2="112" y2="114" stroke="#1e1b4b" strokeWidth="1.8" />

            {/* 花芯 */}
            <circle cx="100" cy="102" r="4.5" fill="#ffffff" />
            <circle cx="100" cy="102" r="2" fill="#ea580c" />
          </g>
        );

      // ジャスミン（素馨）: 星型の清楚な白花、つる性の緑葉、高貴な芳香
      case 'jasmine':
        return (
          <g>
            {/* つる性の優美な茎 */}
            <path d="M60 180 Q85 130 100 85 Q115 50 140 40" stroke="#15803d" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M100 85 Q80 70 70 55" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* 濃い緑の対生葉 */}
            <path d="M85 125 Q60 115 55 130 Q75 138 85 125" fill="#166534" />
            <path d="M110 95 Q135 85 140 100 Q120 108 110 95" fill="#15803d" />

            {/* 細長い蕾（ピンクがかった白） */}
            <g transform="translate(68, 55) rotate(-25)">
              <ellipse cx="0" cy="-12" rx="4" ry="12" fill="#fff1f2" stroke="#fda4af" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="#15803d" />
            </g>

            {/* ジャスミンの星型五弁主花 */}
            <g transform="translate(108, 75) scale(0.95)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <path
                  key={i}
                  transform={`rotate(${ang})`}
                  d="M0 0 C-6 -12 -8 -26 0 -34 C8 -26 6 -12 0 0 Z"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              ))}
              <circle cx="0" cy="0" r="6" fill="#fef08a" />
              <circle cx="0" cy="0" r="3" fill="#eab308" />
            </g>
          </g>
        );


      // カカオ（カカオポッド・ココア）: 樹幹から直接実る縦溝のある黄色〜赤褐色の楕円果実とカカオ豆
      case 'cacao':
        return (
          <g>
            {/* 木の太い幹 */}
            <path d="M40 190 Q65 140 55 90 Q48 50 60 10" stroke="#5c2c16" strokeWidth="18" strokeLinecap="round" fill="none" />
            <path d="M45 130 Q80 120 120 125" stroke="#78350f" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* 幹直生の果柄 */}
            <path d="M55 110 L75 115" stroke="#451a03" strokeWidth="5" strokeLinecap="round" />
            {/* カカオポッド（大きな紡錘形の果実） */}
            <path
              d="M75 115 C90 85 125 75 150 95 C165 108 175 125 155 145 C130 168 95 155 75 115 Z"
              fill="#b45309"
            />
            {/* 縦の深い溝とリブ */}
            <path d="M75 115 Q120 90 165 108" stroke="#78350f" strokeWidth="2.5" fill="none" />
            <path d="M75 115 Q125 112 170 120" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            <path d="M75 115 Q125 135 155 145" stroke="#78350f" strokeWidth="2.5" fill="none" />
            {/* ハイライト */}
            <path d="M95 100 Q125 95 145 105" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75" />
            {/* 添えられた緑の葉 */}
            <path d="M120 125 Q145 110 165 122 Q140 140 120 125" fill="#15803d" />
          </g>
        );

      // ハクモクレン（白木蓮）: ふっくら上向きに咲く純白の肉厚花弁と木枝
      case 'magnolia':
        return (
          <g>
            {/* 木の枝 */}
            <path d="M100 185 Q96 150 92 120 Q85 95 65 80" stroke="#5c2c16" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M92 120 Q115 105 130 85" stroke="#5c2c16" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            {/* 右のつぼみ（毛深い苞） */}
            <g transform="translate(130, 85) rotate(25)">
              <ellipse cx="0" cy="-14" rx="7" ry="14" fill="#a1a1aa" opacity="0.6" />
              <path d="M-5 -22 L0 -28 L5 -22" stroke="#fafafa" strokeWidth="2" fill="#ffffff" />
            </g>
            {/* 中央上向きの白木蓮の大輪 */}
            <g transform="translate(75, 75) scale(0.95) rotate(-10)">
              {/* 外側花弁（後ろ） */}
              <ellipse cx="-18" cy="-25" rx="14" ry="32" fill="#f1f5f9" transform="rotate(-20 -18 -25)" />
              <ellipse cx="18" cy="-25" rx="14" ry="32" fill="#f1f5f9" transform="rotate(20 18 -25)" />
              {/* 中央包み込む花弁 */}
              <ellipse cx="0" cy="-28" rx="18" ry="36" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
              <ellipse cx="-8" cy="-26" rx="12" ry="32" fill="#ffffff" />
              <ellipse cx="8" cy="-26" rx="12" ry="32" fill="#f8fafc" />
              {/* 花底の淡いピンク・黄緑グラデーション */}
              <path d="M-12 -5 Q0 5 12 -5 Q0 -2 0 -2 Z" fill="#fbcfe8" opacity="0.8" />
              <circle cx="0" cy="2" r="4" fill="#65a30d" />
            </g>
          </g>
        );

      // ユッカ（青年の木）: 放射状に広がる鋭い剣葉と中心の白いつりがね状花穂
      case 'yucca':
        return (
          <g>
            {/* 太い幹 */}
            <path d="M100 185 L100 135" stroke="#78350f" strokeWidth="14" strokeLinecap="round" />
            {/* 放射状に広がる剣状葉 */}
            {[
              { ang: -80, l: 55, w: 7, c: '#064e3b' },
              { ang: -55, l: 65, w: 8, c: '#047857' },
              { ang: -30, l: 70, w: 9, c: '#059669' },
              { ang: -10, l: 60, w: 8, c: '#10b981' },
              { ang: 10, l: 60, w: 8, c: '#10b981' },
              { ang: 30, l: 70, w: 9, c: '#059669' },
              { ang: 55, l: 65, w: 8, c: '#047857' },
              { ang: 80, l: 55, w: 7, c: '#064e3b' }
            ].map((lf, i) => (
              <g key={i} transform={`translate(100, 135) rotate(${lf.ang})`}>
                <polygon points={`0,0 -${lf.w / 2},-${lf.l * 0.7} 0,-${lf.l} ${lf.w / 2},-${lf.l * 0.7}`} fill={lf.c} />
                <line x1="0" y1="0" x2="0" y2={-lf.l} stroke="#a7f3d0" strokeWidth="0.8" opacity="0.7" />
              </g>
            ))}
            {/* 中央から直立する純白の花穂 */}
            <path d="M100 135 L100 55" stroke="#15803d" strokeWidth="3" />
            {[
              { x: 92, y: 105 }, { x: 108, y: 100 },
              { x: 94, y: 85 }, { x: 106, y: 80 },
              { x: 96, y: 65 }, { x: 104, y: 60 },
              { x: 100, y: 48 }
            ].map((pt, i) => (
              <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
                <ellipse cx="0" cy="0" rx="6" ry="8" fill="#ffffff" stroke="#d1fae5" strokeWidth="0.8" />
                <circle cx="0" cy="5" r="2" fill="#facc15" />
              </g>
            ))}
          </g>
        );

      // ゲッケイジュ（月桂樹・ローレル）: 月桂冠の枝葉、波打つ深緑の葉、黄金の小花
      case 'laurel':
      case 'bay_laurel':
        return (
          <g>
            {/* 月桂冠の円弧状のしなやかな枝 */}
            <path d="M60 160 C50 110 70 60 120 50 C145 45 160 55 165 70" stroke="#78350f" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* 左右に連なる波打つ月桂樹の葉 */}
            {[
              { x: 62, y: 140, rot: -40, s: 0.9 },
              { x: 55, y: 110, rot: -20, s: 1 },
              { x: 65, y: 85, rot: 10, s: 1 },
              { x: 90, y: 62, rot: 35, s: 0.95 },
              { x: 120, y: 52, rot: 60, s: 0.9 },
              { x: 145, y: 58, rot: 85, s: 0.85 }
            ].map((lf, i) => (
              <g key={i} transform={`translate(${lf.x}, ${lf.y}) rotate(${lf.rot}) scale(${lf.s})`}>
                <ellipse cx="0" cy="-18" rx="8" ry="18" fill="#15803d" />
                <path d="M0 0 L0 -36" stroke="#86efac" strokeWidth="1.2" />
                {/* 葉の付け根の小さな黄色い花 */}
                <circle cx="4" cy="-2" r="3" fill="#facc15" />
              </g>
            ))}
            {/* 金色の勝利のリボン結び */}
            <g transform="translate(60, 160)">
              <circle cx="0" cy="0" r="5" fill="#f59e0b" />
              <path d="M0 0 Q-15 15 -25 30" stroke="#d97706" strokeWidth="3" fill="none" />
              <path d="M0 0 Q10 20 15 35" stroke="#d97706" strokeWidth="3" fill="none" />
            </g>
          </g>
        );

      // ボダイジュ（菩提樹・リンデン）: ハート型の葉とへら状の苞葉から下がる淡黄色の花
      case 'linden':
      case 'bodhi_tree':
        return (
          <g>
            {/* 枝 */}
            <path d="M60 50 Q100 65 145 60" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* ハート型の菩提樹の葉 */}
            <path
              d="M100 65 C80 35 45 45 45 75 C45 105 85 125 100 140 C115 125 155 105 155 75 C155 45 120 35 100 65 Z"
              fill="#16a34a"
            />
            <path d="M100 65 L100 135" stroke="#86efac" strokeWidth="1.8" />
            <path d="M100 90 L75 80 M100 90 L125 80" stroke="#86efac" strokeWidth="1.2" />
            <path d="M100 110 L85 102 M100 110 L115 102" stroke="#86efac" strokeWidth="1.2" />
            {/* 特徴的なヘラ状の苞葉（淡緑）と垂れ下がる小花 */}
            <path d="M110 63 Q130 90 125 115" stroke="#a3e635" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* ぶら下がる淡黄色の芳香花 */}
            <line x1="125" y1="115" x2="115" y2="135" stroke="#65a30d" strokeWidth="1.5" />
            <line x1="125" y1="115" x2="135" y2="138" stroke="#65a30d" strokeWidth="1.5" />
            <circle cx="115" cy="135" r="4.5" fill="#fef08a" />
            <circle cx="135" cy="138" r="4.5" fill="#fef08a" />
          </g>
        );

      // エノコログサ（ねこじゃらし）: ふさふさの緑毛が生えた穂先と風になびく茎
      case 'foxtail':
        return (
          <g>
            {/* しなる茎 */}
            <path d="M70 185 Q85 130 115 90 Q135 65 150 68" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* ふさふさの穂先（ブラシ状） */}
            <g transform="translate(135, 78) rotate(35)">
              <ellipse cx="0" cy="0" rx="14" ry="32" fill="#84cc16" opacity="0.85" />
              {/* びっしり生えた毛（剛毛） */}
              {[-25, -18, -10, -2, 6, 14, 22].map((y, i) => (
                <g key={i}>
                  <line x1="-8" y1={y} x2="-20" y2={y - 6} stroke="#a3e635" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="8" y1={y} x2="20" y2={y - 6} stroke="#bef264" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="-5" y1={y + 3} x2="-16" y2={y + 8} stroke="#84cc16" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="5" y1={y + 3} x2="16" y2={y + 8} stroke="#84cc16" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              ))}
            </g>
            {/* 細長いシュッとした葉 */}
            <path d="M80 150 Q50 125 35 130" stroke="#4d7c0f" strokeWidth="2.5" fill="none" />
            <path d="M95 125 Q120 120 145 135" stroke="#65a30d" strokeWidth="2.5" fill="none" />
          </g>
        );

      // キンモクセイ（金木犀）: 濃緑の葉の付け根に密集して咲くオレンジ色の十字小花
      case 'osmanthus':
        return (
          <g>
            {/* 枝 */}
            <path d="M100 185 L100 120 L100 50" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            {/* 濃い常緑の葉 */}
            <path d="M100 130 Q65 115 50 128 Q75 140 100 130" fill="#14532d" />
            <path d="M100 110 Q135 95 150 108 Q125 120 100 110" fill="#166534" />
            <path d="M100 75 Q60 60 55 75 Q80 85 100 75" fill="#15803d" />
            <path d="M100 65 Q140 50 145 65 Q120 75 100 65" fill="#14532d" />

            {/* 葉の付け根に密集して咲く鮮烈なオレンジの小花群 */}
            {[
              { x: 92, y: 118 }, { x: 106, y: 115 }, { x: 98, y: 125 },
              { x: 94, y: 95 }, { x: 104, y: 92 }, { x: 100, y: 102 },
              { x: 92, y: 72 }, { x: 106, y: 70 }, { x: 98, y: 80 }
            ].map((fl, i) => (
              <g key={i} transform={`translate(${fl.x}, ${fl.y})`}>
                {/* 4弁の十字花 */}
                <ellipse cx="0" cy="-4" rx="2" ry="3.5" fill="#f97316" />
                <ellipse cx="0" cy="4" rx="2" ry="3.5" fill="#ea580c" />
                <ellipse cx="-4" cy="0" rx="3.5" ry="2" fill="#f97316" />
                <ellipse cx="4" cy="0" rx="3.5" ry="2" fill="#fb923c" />
                <circle cx="0" cy="0" r="1.5" fill="#fef08a" />
              </g>
            ))}
          </g>
        );

      // ドラセナ（幸福の木）: 黄緑の縦ストライプの美しい優雅な葉と太い幹
      case 'dracaena':
        return (
          <g>
            {/* 木の切り株・幹 */}
            <path d="M100 185 L100 130" stroke="#78350f" strokeWidth="16" strokeLinecap="round" />
            <path d="M100 185 L100 130" stroke="#92400e" strokeWidth="12" strokeLinecap="round" />
            {/* 新芽の分岐点 */}
            <circle cx="100" cy="130" r="8" fill="#15803d" />

            {/* 噴水のように広がる優美なストライプ葉 */}
            {[
              { ang: -70, l: 65 }, { ang: -45, l: 75 }, { ang: -20, l: 85 },
              { ang: 0, l: 90 },
              { ang: 20, l: 85 }, { ang: 45, l: 75 }, { ang: 70, l: 65 }
            ].map((lf, i) => (
              <g key={i} transform={`translate(100, 130) rotate(${lf.ang})`}>
                {/* 葉の外側（深緑） */}
                <ellipse cx="0" cy={-lf.l / 2} rx="8" ry={lf.l / 2} fill="#166534" />
                {/* 葉の中央の明るい黄緑ストライプ（幸福の木の特徴） */}
                <ellipse cx="0" cy={-lf.l / 2} rx="3.5" ry={lf.l / 2} fill="#a3e635" />
              </g>
            ))}
          </g>
        );

      // スギ（杉の木）: 円錐形の堂々とした針葉樹の木、深い緑の樹冠、茶色の幹
      case 'cedar':
        return (
          <g>
            {/* 幹 */}
            <path d="M100 185 L100 145" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
            {/* 円錐状に重なる3層の緑の樹冠 */}
            {/* 下段 */}
            <polygon points="100,105 50,150 150,150" fill="#14532d" />
            <polygon points="100,105 55,145 145,145" fill="#166534" />
            {/* 中段 */}
            <polygon points="100,75 60,115 140,115" fill="#15803d" />
            <polygon points="100,75 65,110 135,110" fill="#16a34a" />
            {/* 上段（てっぺん） */}
            <polygon points="100,40 70,80 130,80" fill="#16a34a" />
            <polygon points="100,40 75,75 125,75" fill="#22c55e" />
            {/* 杉玉・球果 */}
            <circle cx="120" cy="120" r="4.5" fill="#854d0e" />
            <circle cx="82" cy="125" r="4" fill="#a16207" />
          </g>
        );

      // ヒノキ（檜の木）: 扇状に重なる扁平な濃緑の鱗片葉と丸い球果
      case 'cypress':
        return (
          <g>
            {/* 幹 */}
            <path d="M100 185 L100 135" stroke="#5c2c16" strokeWidth="9" strokeLinecap="round" />
            {/* 扁平な鱗片葉の枝（左右に段状に広がる） */}
            {[
              { y: 130, scale: 1 },
              { y: 100, scale: 0.85 },
              { y: 70, scale: 0.7 },
              { y: 45, scale: 0.5 }
            ].map((lvl, i) => (
              <g key={i} transform={`translate(100, ${lvl.y}) scale(${lvl.scale})`}>
                {/* 扇状のヒノキ葉 */}
                <path d="M0 0 Q-40 -15 -55 0 Q-35 -25 0 -15 Q35 -25 55 0 Q40 -15 0 0 Z" fill="#14532d" />
                <path d="M0 0 Q-30 -10 -40 5 Q-25 -18 0 -10 Q25 -18 40 5 Q30 -10 0 0 Z" fill="#15803d" />
              </g>
            ))}
            {/* 丸いヒノキの球果 */}
            <circle cx="118" cy="105" r="5" fill="#78350f" />
            <circle cx="118" cy="105" r="3.5" fill="#92400e" />
            <circle cx="78" cy="115" r="5" fill="#78350f" />
          </g>
        );

      // モモ（桃・果実と花）: ぷっくり割れ目とお尻が可愛いピンクの桃果実と桃の花
      case 'peach':
        return (
          <g>
            {/* 枝と葉 */}
            <path d="M100 70 Q102 45 110 38" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M105 52 Q130 42 135 60 Q116 68 105 52" fill="#15803d" />
            {/* 桃果実本体（お尻の割れ目とふっくら丸み） */}
            <ellipse cx="88" cy="118" rx="28" ry="32" fill="#fb7185" />
            <ellipse cx="112" cy="118" rx="28" ry="32" fill="#f43f5e" />
            <path d="M100 86 Q103 118 100 150" stroke="#e11d48" strokeWidth="2.5" fill="none" />
            {/* 桃の底のちょこんとした尖り */}
            <path d="M96 148 Q100 155 104 148 Z" fill="#e11d48" />
            {/* 優しいグラデーションハイライト */}
            <ellipse cx="80" cy="105" rx="14" ry="18" fill="#ffe4e6" opacity="0.65" />

            {/* 添えられた可憐なピンクの桃の花 */}
            <g transform="translate(138, 120) scale(0.68)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 16} cy={Math.sin(ang * Math.PI / 180) * 16} r="10" fill="#fda4af" stroke="#f43f5e" strokeWidth="1" />
              ))}
              <circle cx="0" cy="0" r="6" fill="#be123c" />
              <circle cx="0" cy="0" r="3" fill="#facc15" />
            </g>
          </g>
        );

      // イチジク（無花果）: 雫型の濃紫色の果実、掌状葉、赤く甘い果肉断面
      case 'fig':
        return (
          <g>
            {/* 枝 */}
            <path d="M100 65 Q98 45 92 38" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* イチジクの丸い大きな掌状葉（背景） */}
            <path d="M60 70 Q40 45 60 35 Q85 55 90 70" fill="#15803d" />
            {/* 丸ごとイチジク（雫型の濃紫果実） */}
            <path
              d="M78 68 C88 68 95 85 96 105 C98 135 88 152 75 152 C60 152 50 135 52 105 C54 85 62 68 78 68 Z"
              fill="#581c87"
            />
            <path d="M62 90 Q58 115 65 130" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
            {/* カットされたジューシーな果肉断面（右側） */}
            <g transform="translate(122, 115) scale(0.75)">
              <ellipse cx="0" cy="0" rx="28" ry="36" fill="#fbcfe8" />
              <ellipse cx="0" cy="0" rx="24" ry="32" fill="#be123c" />
              <ellipse cx="0" cy="0" rx="16" ry="24" fill="#e11d48" />
              {/* つぶつぶの小果 */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 10} cy={Math.sin(ang * Math.PI / 180) * 14} r="2" fill="#fef08a" />
              ))}
            </g>
          </g>
        );

      // ラベンダー: すらりと伸びた茎に連なる紫色の粒々花穂
      case 'lavender':
        return (
          <g>
            {/* 3本のラベンダーの茎 */}
            <path d="M80 185 Q85 130 82 70" stroke="#15803d" strokeWidth="2.5" fill="none" />
            <path d="M100 185 Q100 120 100 60" stroke="#16a34a" strokeWidth="3" fill="none" />
            <path d="M120 185 Q115 130 118 70" stroke="#15803d" strokeWidth="2.5" fill="none" />

            {/* 中央の豊かな花穂 */}
            {[55, 65, 75, 85, 95, 105, 115].map((y, i) => (
              <g key={i}>
                <ellipse cx="94" cy={y} rx="5" ry="4" fill="#7c3aed" />
                <ellipse cx="106" cy={y} rx="5" ry="4" fill="#8b5cf6" />
                <ellipse cx="100" cy={y - 2} rx="4" ry="4.5" fill="#a78bfa" />
              </g>
            ))}
            {/* 左の茎の花穂 */}
            {[70, 80, 90, 100, 110].map((y, i) => (
              <g key={`l-${i}`}>
                <ellipse cx="77" cy={y} rx="4" ry="3.5" fill="#6d28d9" />
                <ellipse cx="87" cy={y} rx="4" ry="3.5" fill="#7c3aed" />
              </g>
            ))}
            {/* 右の茎の花穂 */}
            {[70, 80, 90, 100, 110].map((y, i) => (
              <g key={`r-${i}`}>
                <ellipse cx="113" cy={y} rx="4" ry="3.5" fill="#7c3aed" />
                <ellipse cx="123" cy={y} rx="4" ry="3.5" fill="#8b5cf6" />
              </g>
            ))}
            {/* 細いシルバーグリーンの葉 */}
            <line x1="100" y1="140" x2="65" y2="130" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="150" x2="135" y2="140" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
          </g>
        );

      // カトレア（洋蘭の女王）: 波打つ大輪のフリル唇弁（リップ）と華麗な花びら
      case 'cattleya':
        return (
          <g>
            {/* 茎 */}
            <path d="M100 180 L100 125" stroke="#15803d" strokeWidth="4" />
            {/* 後ろの細い3枚の萼片（セパル） */}
            <ellipse cx="100" cy="55" rx="12" ry="35" fill="#e879f9" opacity="0.9" />
            <ellipse cx="60" cy="115" rx="12" ry="35" fill="#e879f9" opacity="0.9" transform="rotate(-60 60 115)" />
            <ellipse cx="140" cy="115" rx="12" ry="35" fill="#e879f9" opacity="0.9" transform="rotate(60 140 115)" />
            {/* 左右の波打つ大きな側花弁（ペタル） */}
            <ellipse cx="55" cy="80" rx="20" ry="35" fill="#d946ef" transform="rotate(-35 55 80)" />
            <ellipse cx="145" cy="80" rx="20" ry="35" fill="#d946ef" transform="rotate(35 145 80)" />
            {/* 中央の豪華なフリル唇弁（リップ） */}
            <ellipse cx="100" cy="110" rx="25" ry="30" fill="#a21caf" />
            <ellipse cx="100" cy="110" rx="22" ry="26" fill="#c026d3" />
            {/* リップ内部の鮮やかな黄色 */}
            <ellipse cx="100" cy="100" rx="12" ry="14" fill="#facc15" />
            <ellipse cx="100" cy="95" rx="6" ry="8" fill="#ffffff" />
          </g>
        );

      // ユリ（百合）: 優雅に反り返る大きな6弁花、長く伸びる雄しべと葯
      case 'lily':
        return (
          <g>
            {/* 茎と細長い葉 */}
            <path d="M100 185 L100 115" stroke="#15803d" strokeWidth="4" />
            <path d="M100 145 Q65 140 50 155 Q80 160 100 148" fill="#166534" />
            <path d="M100 135 Q135 130 150 145 Q120 150 100 138" fill="#15803d" />
            {/* 6枚の優雅な百合の花びら */}
            {[0, 60, 120, 180, 240, 300].map((ang, i) => (
              <g key={i} transform={`translate(100, 100) rotate(${ang})`}>
                <path
                  d="M0 0 C-10 -20 -15 -45 0 -60 C15 -45 10 -20 0 0 Z"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="1.2"
                />
                <line x1="0" y1="0" x2="0" y2="-45" stroke="#dcfce7" strokeWidth="1.5" />
                {/* 蜜標の点々 */}
                <circle cx="-2" cy="-25" r="1.2" fill="#b91c1c" />
                <circle cx="2" cy="-28" r="1.2" fill="#b91c1c" />
              </g>
            ))}
            {/* 長い雄しべと茶褐色の葯（やく） */}
            {[30, 90, 150, 210, 270, 330].map((ang, i) => (
              <g key={`s-${i}`} transform={`translate(100, 100) rotate(${ang})`}>
                <line x1="0" y1="0" x2="0" y2="-32" stroke="#fef08a" strokeWidth="1.5" />
                <ellipse cx="0" cy="-32" rx="3.5" ry="1.8" fill="#92400e" />
              </g>
            ))}
            <circle cx="100" cy="100" r="5" fill="#65a30d" />
          </g>
        );

      // クリスマスローズ（ヘレボルス）: うつむき加減に咲くシックな5枚萼片と繊細なネクタリー
      case 'hellebore':
        return (
          <g>
            {/* しなる茎 */}
            <path d="M75 185 Q80 120 95 85" stroke="#15803d" strokeWidth="3.5" fill="none" />
            {/* うつむき加減の大輪花 */}
            <g transform="translate(98, 88) rotate(20)">
              {/* 5枚のシックな萼片（ボルドー〜アンティークグリーン） */}
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <ellipse
                  key={i}
                  cx={Math.cos(ang * Math.PI / 180) * 20}
                  cy={Math.sin(ang * Math.PI / 180) * 20}
                  rx="18"
                  ry="24"
                  fill="#831843"
                  stroke="#4c0519"
                  strokeWidth="1"
                  transform={`rotate(${ang} ${Math.cos(ang * Math.PI / 180) * 20} ${Math.sin(ang * Math.PI / 180) * 20})`}
                />
              ))}
              {/* 中心を囲むネクタリー（蜜腺）と無数の雄しべ */}
              <circle cx="0" cy="0" r="12" fill="#14532d" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((ang, i) => (
                <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 8} cy={Math.sin(ang * Math.PI / 180) * 8} r="1.8" fill="#fef08a" />
              ))}
              <circle cx="0" cy="0" r="4" fill="#a3e635" />
            </g>
          </g>
        );

      // ヒメジョオン・ハルジオン: 糸のように細いたくさんの花びらと黄色い花芯
      case 'fleabane':
        return (
          <g>
            {/* 茎と葉 */}
            <path d="M100 185 L100 95" stroke="#15803d" strokeWidth="3" />
            <path d="M100 145 Q65 140 55 155" stroke="#16a34a" strokeWidth="2.5" fill="none" />
            {/* 無数の細い糸状花びら */}
            <g transform="translate(100, 95)">
              {[0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 252, 264, 276, 288, 300, 312, 324, 336, 348].map((ang, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={Math.cos(ang * Math.PI / 180) * 44}
                  y2={Math.sin(ang * Math.PI / 180) * 44}
                  stroke="#fbcfe8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ))}
              <circle cx="0" cy="0" r="16" fill="#facc15" />
              <circle cx="0" cy="0" r="8" fill="#eab308" />
            </g>
          </g>
        );

      // バラ（薔薇・ローズ）: 幾重にも重なる優雅な巻き花弁とトゲのある茎
      case 'rose':
        return (
          <g>
            {/* 茎と鋭いトゲ */}
            <path d="M100 185 Q96 150 100 120" stroke="#15803d" strokeWidth="4" />
            <polygon points="98,160 90,165 98,168" fill="#14532d" />
            <polygon points="102,140 110,145 102,148" fill="#14532d" />
            {/* ギザギザの葉 */}
            <path d="M98 145 Q65 135 55 150 Q80 155 98 147" fill="#166534" />

            {/* バラの大輪（巻き花弁のレイヤー） */}
            <g transform="translate(100, 95)">
              {/* 外花弁 */}
              {[0, 60, 120, 180, 240, 300].map((ang, i) => (
                <path
                  key={i}
                  d="M-22 -15 C-30 -35 30 -35 22 -15 C15 -5 -15 -5 -22 -15 Z"
                  fill="#be123c"
                  transform={`rotate(${ang})`}
                />
              ))}
              {/* 中花弁 */}
              {[30, 90, 150, 210, 270, 330].map((ang, i) => (
                <path
                  key={`m-${i}`}
                  d="M-16 -10 C-22 -26 22 -26 16 -10 C10 -3 -10 -3 -16 -10 Z"
                  fill="#e11d48"
                  transform={`rotate(${ang})`}
                />
              ))}
              {/* 中心カップの渦巻き */}
              <circle cx="0" cy="0" r="14" fill="#f43f5e" />
              <path d="M-8 -2 Q0 -10 8 -2 Q4 6 -4 4 Q-6 0 -2 -2" stroke="#fda4af" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          </g>
        );

      // ヒマワリ（向日葵）: 鮮やかな大輪の黄金花弁と茶褐色の規則正しい中心筒状花
      case 'sunflower':
        return (
          <g>
            {/* 太い茎と大きな葉 */}
            <path d="M100 185 L100 115" stroke="#15803d" strokeWidth="6" />
            <path d="M98 150 Q55 135 40 155 Q75 168 98 154" fill="#166534" />
            <path d="M102 135 Q145 120 160 140 Q125 152 102 139" fill="#15803d" />

            {/* 放射状に広がる二重の黄金花弁 */}
            <g transform="translate(100, 95)">
              {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((ang, i) => (
                <polygon
                  key={i}
                  points="0,0 -7,-48 0,-56 7,-48"
                  fill={i % 2 === 0 ? '#facc15' : '#eab308'}
                  transform={`rotate(${ang})`}
                />
              ))}
              {/* 中心の大円（種子の整然としたテクスチャ） */}
              <circle cx="0" cy="0" r="26" fill="#78350f" />
              <circle cx="0" cy="0" r="22" fill="#451a03" />
              <circle cx="0" cy="0" r="18" fill="#78350f" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 3" />
            </g>
          </g>
        );

      // ミント（薄荷・ハッカ）: 爽やかなギザギザの葉っぱ、葉脈、小さな淡紫の花
      case 'mint':
        return (
          <g>
            {/* 四角い茎 */}
            <path d="M100 185 L100 55" stroke="#15803d" strokeWidth="4" />
            {/* 対生するギザギザの爽快な葉 */}
            {[
              { y: 140, l: 38 },
              { y: 105, l: 34 },
              { y: 75, l: 28 }
            ].map((lvl, i) => (
              <g key={i}>
                {/* 左葉 */}
                <ellipse cx={100 - lvl.l / 2 - 4} cy={lvl.y} rx={lvl.l / 2} ry="10" fill="#10b981" transform={`rotate(-20 ${100 - lvl.l / 2 - 4} ${lvl.y})`} />
                <line x1="100" y1={lvl.y} x2={100 - lvl.l - 4} y2={lvl.y - 8} stroke="#d1fae5" strokeWidth="1.2" />
                {/* 右葉 */}
                <ellipse cx={100 + lvl.l / 2 + 4} cy={lvl.y} rx={lvl.l / 2} ry="10" fill="#059669" transform={`rotate(20 ${100 + lvl.l / 2 + 4} ${lvl.y})`} />
                <line x1="100" y1={lvl.y} x2={100 + lvl.l + 4} y2={lvl.y - 8} stroke="#d1fae5" strokeWidth="1.2" />
              </g>
            ))}
            {/* てっぺんの新芽 */}
            <circle cx="100" cy="52" r="5" fill="#34d399" />
          </g>
        );

      // フジ（藤の花房）: シャワーのように優雅に垂れ下がる紫の蝶形花房
      case 'wisteria':
        return (
          <g>
            {/* 藤棚のツル・枝 */}
            <path d="M40 40 Q90 55 160 45" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* 垂れ下がる花軸 */}
            <path d="M100 50 Q105 110 98 165" stroke="#65a30d" strokeWidth="2.5" fill="none" />

            {/* 上から下へ小さくなる紫の花々 */}
            {[
              { y: 65, w: 22 },
              { y: 82, w: 20 },
              { y: 98, w: 18 },
              { y: 114, w: 16 },
              { y: 128, w: 14 },
              { y: 142, w: 11 },
              { y: 154, w: 8 },
              { y: 164, w: 5 }
            ].map((fl, i) => (
              <g key={i} transform={`translate(100, ${fl.y})`}>
                <ellipse cx={-fl.w / 2} cy="0" rx={fl.w / 2.5} ry="6" fill="#8b5cf6" />
                <ellipse cx={fl.w / 2} cy="0" rx={fl.w / 2.5} ry="6" fill="#a78bfa" />
                <circle cx="0" cy="-2" r="3.5" fill="#c4b5fd" />
              </g>
            ))}
          </g>
        );

      // ブーゲンビリア: 鮮やかなマゼンタピンクの3枚の紙のような苞葉と中心の小さな白花
      case 'bougainvillea':
        return (
          <g>
            {/* 枝と緑葉 */}
            <path d="M70 180 Q85 130 95 105" stroke="#78350f" strokeWidth="3.5" fill="none" />
            <path d="M85 145 Q55 135 50 150 Q75 158 85 147" fill="#15803d" />

            {/* 3枚の薄紙のようなハート型苞葉 */}
            <g transform="translate(105, 95)">
              {[0, 120, 240].map((ang, i) => (
                <g key={i} transform={`rotate(${ang})`}>
                  <path
                    d="M0 0 C-18 -25 -25 -50 0 -60 C25 -50 18 -25 0 0 Z"
                    fill="#db2777"
                    stroke="#be185d"
                    strokeWidth="1.2"
                  />
                  {/* 繊細な葉脈 */}
                  <line x1="0" y1="0" x2="0" y2="-52" stroke="#fbcfe8" strokeWidth="1.2" />
                </g>
              ))}
              {/* 中心に咲く3つの小さな星型白花 */}
              <circle cx="0" cy="-6" r="3.5" fill="#ffffff" stroke="#fef08a" strokeWidth="1" />
              <circle cx="-5" cy="4" r="3.5" fill="#ffffff" stroke="#fef08a" strokeWidth="1" />
              <circle cx="5" cy="4" r="3.5" fill="#ffffff" stroke="#fef08a" strokeWidth="1" />
            </g>
          </g>
        );

      // アイリス（虹の花・ダッチアイリス）: すらりと立つ剣葉と外側に優美に垂れる外花被片
      case 'iris':
        return (
          <g>
            {/* 直立する茎と細長い剣葉 */}
            <path d="M100 185 L100 100" stroke="#15803d" strokeWidth="4" />
            <path d="M96 185 Q75 130 65 80" stroke="#16a34a" strokeWidth="3" fill="none" />
            <path d="M104 185 Q125 130 135 80" stroke="#16a34a" strokeWidth="3" fill="none" />

            {/* アイリスの花 */}
            <g transform="translate(100, 90)">
              {/* 直立する3枚の内花被片（淡紫） */}
              <ellipse cx="0" cy="-28" rx="8" ry="24" fill="#6366f1" />
              <ellipse cx="-12" cy="-24" rx="7" ry="20" fill="#818cf8" transform="rotate(-15 -12 -24)" />
              <ellipse cx="12" cy="-24" rx="7" ry="20" fill="#818cf8" transform="rotate(15 12 -24)" />

              {/* 外側に垂れ下がる3枚の外花被片（深青紫＋黄色の目） */}
              <ellipse cx="0" cy="18" rx="14" ry="20" fill="#4338ca" />
              <ellipse cx="0" cy="12" rx="4" ry="8" fill="#facc15" />

              <ellipse cx="-22" cy="10" rx="12" ry="18" fill="#3730a3" transform="rotate(40 -22 10)" />
              <ellipse cx="-18" cy="8" rx="3.5" ry="6" fill="#facc15" transform="rotate(40 -18 8)" />

              <ellipse cx="22" cy="10" rx="12" ry="18" fill="#3730a3" transform="rotate(-40 22 10)" />
              <ellipse cx="18" cy="8" rx="3.5" ry="6" fill="#facc15" transform="rotate(-40 18 8)" />
            </g>
          </g>
        );

      // チューリップ: ぷっくりカップ型の鮮やかな花弁と包み込む幅広い葉
      case 'tulip':
        return (
          <g>
            {/* 太い茎 */}
            <path d="M100 185 L100 115" stroke="#15803d" strokeWidth="4.5" />
            {/* 左右から包み込む幅広い葉 */}
            <path d="M98 175 Q60 145 65 95 Q85 135 98 145" fill="#16a34a" />
            <path d="M102 165 Q140 135 135 85 Q115 125 102 135" fill="#15803d" />

            {/* チューリップのカップ型花（3枚の花びらが重なる） */}
            <g transform="translate(100, 95)">
              {/* 左右の花弁 */}
              <path d="M-22 0 C-30 -30 -10 -45 -4 -42 C-15 -20 -15 0 -22 0 Z" fill="#e11d48" />
              <path d="M22 0 C30 -30 10 -45 4 -42 C15 -20 15 0 22 0 Z" fill="#e11d48" />
              {/* 中央のふっくら花弁 */}
              <ellipse cx="0" cy="-22" rx="18" ry="24" fill="#f43f5e" />
              <path d="M-10 -22 Q0 -35 10 -22 Q0 2 -10 -22 Z" fill="#fb7185" opacity="0.6" />
            </g>
          </g>
        );

      // ストケシア（瑠璃菊）: 細かく切れ込んだ繊細な青紫の花弁が放射状に広がる美花
      case 'stokesia':
        return (
          <g>
            <path d="M100 185 L100 100" stroke="#15803d" strokeWidth="3.5" />
            <path d="M100 145 Q70 140 60 155" stroke="#16a34a" strokeWidth="2" fill="none" />
            {/* 放射状に広がる切れ込み花弁 */}
            <g transform="translate(100, 95)">
              {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((ang, i) => (
                <g key={i} transform={`rotate(${ang})`}>
                  {/* 先端が2〜3裂した花弁 */}
                  <polygon points="0,0 -8,-36 -4,-48 0,-42 4,-48 8,-36" fill="#3b82f6" />
                  <line x1="0" y1="0" x2="0" y2="-40" stroke="#93c5fd" strokeWidth="1" />
                </g>
              ))}
              {/* 中央のふわふわした筒状花 */}
              <circle cx="0" cy="0" r="14" fill="#1d4ed8" />
              <circle cx="0" cy="0" r="8" fill="#facc15" />
            </g>
          </g>
        );

      // エーデルワイス: 白い綿毛に包まれた星型の高嶺の花
      case 'edelweiss':
        return (
          <g>
            <path d="M100 185 L100 105" stroke="#15803d" strokeWidth="3" />
            {/* 星型に広がる綿毛の苞葉 */}
            <g transform="translate(100, 100)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <ellipse
                  key={i}
                  cx={Math.cos(ang * Math.PI / 180) * 24}
                  cy={Math.sin(ang * Math.PI / 180) * 24}
                  rx="9"
                  ry="18"
                  fill="#f8fafc"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  transform={`rotate(${ang + 90} ${Math.cos(ang * Math.PI / 180) * 24} ${Math.sin(ang * Math.PI / 180) * 24})`}
                />
              ))}
              {/* 中心に集まる黄色い小さな球状花穂群 */}
              <circle cx="0" cy="0" r="11" fill="#facc15" />
              <circle cx="-5" cy="-4" r="3.5" fill="#eab308" />
              <circle cx="5" cy="-4" r="3.5" fill="#eab308" />
              <circle cx="-5" cy="4" r="3.5" fill="#eab308" />
              <circle cx="5" cy="4" r="3.5" fill="#eab308" />
              <circle cx="0" cy="0" r="3.5" fill="#ca8a04" />
            </g>
          </g>
        );

      // キュウリ（胡瓜・果実と花）: トゲのあるみずみずしい緑のキュウリの実、黄色い星型花、巻きひげ
      case 'cucumber':
        return (
          <g>
            {/* つる・巻きひげ */}
            <path d="M50 60 Q90 50 150 70" stroke="#15803d" strokeWidth="3.5" fill="none" />
            <path d="M140 70 Q155 60 160 75 Q150 85 140 80" stroke="#22c55e" strokeWidth="2" fill="none" />
            {/* キュウリ果実本体（すらりと緩やかにカーブ） */}
            <path
              d="M75 75 C85 85 92 115 105 145 C112 162 116 168 116 168 C116 168 124 162 122 145 C116 115 105 85 95 75 Z"
              fill="#15803d"
            />
            {/* 白い小さなイボ（トゲ） */}
            {[
              { x: 92, y: 100 }, { x: 105, y: 110 }, { x: 98, y: 125 },
              { x: 110, y: 135 }, { x: 105, y: 150 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#f0fdf4" />
            ))}
            <path d="M90 95 Q102 125 110 150" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            {/* 黄色い星型のキュウリの花 */}
            <g transform="translate(68, 65) scale(0.65)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <polygon key={i} points="0,0 -8,-22 8,-22" fill="#facc15" stroke="#eab308" strokeWidth="1" transform={`rotate(${ang})`} />
              ))}
              <circle cx="0" cy="0" r="5" fill="#ca8a04" />
            </g>
          </g>
        );

      // カボチャ（南瓜・果実と花）: コロンと丸く縦溝のあるカボチャと黄色い大輪花
      case 'pumpkin':
        return (
          <g>
            {/* ガク・ヘタ */}
            <path d="M100 80 L100 62 Q105 55 112 55" stroke="#15803d" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* カボチャのふっくらとした複数の節（膨らみ） */}
            <ellipse cx="68" cy="125" rx="24" ry="32" fill="#ea580c" />
            <ellipse cx="132" cy="125" rx="24" ry="32" fill="#ea580c" />
            <ellipse cx="82" cy="128" rx="26" ry="35" fill="#f97316" />
            <ellipse cx="118" cy="128" rx="26" ry="35" fill="#f97316" />
            <ellipse cx="100" cy="130" rx="26" ry="36" fill="#fb923c" />
            {/* 深い縦溝ライン */}
            <path d="M100 85 Q92 125 100 166" stroke="#c2410c" strokeWidth="2" fill="none" />
            <path d="M85 88 Q70 125 82 163" stroke="#c2410c" strokeWidth="2" fill="none" />
            <path d="M115 88 Q130 125 118 163" stroke="#c2410c" strokeWidth="2" fill="none" />
          </g>
        );

      // パセリ: 細かくちぢれた鮮やかなエメラルドグリーンの縮れ葉
      case 'parsley':
        return (
          <g>
            <path d="M100 185 L100 125" stroke="#15803d" strokeWidth="4" />
            <path d="M100 135 L75 115" stroke="#15803d" strokeWidth="3" />
            <path d="M100 135 L125 115" stroke="#15803d" strokeWidth="3" />
            {/* モコモコとしたフリル状の葉房（3房） */}
            {[
              { x: 100, y: 85, s: 1 },
              { x: 65, y: 105, s: 0.8 },
              { x: 135, y: 105, s: 0.8 }
            ].map((cl, idx) => (
              <g key={idx} transform={`translate(${cl.x}, ${cl.y}) scale(${cl.s})`}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                  <circle key={i} cx={Math.cos(ang * Math.PI / 180) * 16} cy={Math.sin(ang * Math.PI / 180) * 16} r="10" fill="#15803d" />
                ))}
                {[0, 60, 120, 180, 240, 300].map((ang, i) => (
                  <circle key={`in-${i}`} cx={Math.cos(ang * Math.PI / 180) * 10} cy={Math.sin(ang * Math.PI / 180) * 10} r="8" fill="#22c55e" />
                ))}
                <circle cx="0" cy="0" r="8" fill="#4ade80" />
              </g>
            ))}
          </g>
        );

      // クルミ（胡桃）: 凹凸のある硬い殻のクルミと中身のナッツ
      case 'walnut':
      case 'nut':
        return (
          <g>
            <path d="M100 65 L100 48" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            {/* クルミの殻（左右合わさった硬質な球楕円） */}
            <ellipse cx="88" cy="115" rx="26" ry="34" fill="#a16207" />
            <ellipse cx="112" cy="115" rx="26" ry="34" fill="#78350f" />
            {/* 中央の合わせ目（接合線） */}
            <path d="M100 81 L100 149" stroke="#451a03" strokeWidth="4" strokeLinecap="round" />
            {/* 殻のゴツゴツした溝の凹凸 */}
            <path d="M85 92 Q72 115 84 138" stroke="#78350f" strokeWidth="2.5" fill="none" />
            <path d="M115 92 Q128 115 116 138" stroke="#451a03" strokeWidth="2.5" fill="none" />
            <path d="M72 105 Q65 115 72 125" stroke="#78350f" strokeWidth="2" fill="none" />
            <path d="M128 105 Q135 115 128 125" stroke="#451a03" strokeWidth="2" fill="none" />
          </g>
        );

      // オキザリス（カタバミ）: ハート型のクローバー三つ葉と可憐な5弁花
      case 'oxalis':
        return (
          <g>
            {/* 3枚のハート型の葉（カタバミの象徴） */}
            {[0, 120, 240].map((ang, i) => (
              <g key={i} transform={`translate(100, 145) rotate(${ang})`}>
                <path
                  d="M0 0 C-10 -15 -18 -15 -18 -5 C-18 5 0 15 0 15 C0 15 18 5 18 -5 C18 -15 10 -15 0 0 Z"
                  fill="#16a34a"
                  transform="rotate(180)"
                />
              </g>
            ))}
            {/* 細い花茎 */}
            <path d="M100 145 L100 80" stroke="#15803d" strokeWidth="2.5" />
            {/* 可憐なピンクのオキザリス5弁花 */}
            <g transform="translate(100, 78)">
              {[0, 72, 144, 216, 288].map((ang, i) => (
                <ellipse
                  key={i}
                  cx={Math.cos(ang * Math.PI / 180) * 16}
                  cy={Math.sin(ang * Math.PI / 180) * 16}
                  rx="10"
                  ry="15"
                  fill="#f472b6"
                  stroke="#db2777"
                  strokeWidth="0.8"
                  transform={`rotate(${ang + 90} ${Math.cos(ang * Math.PI / 180) * 16} ${Math.sin(ang * Math.PI / 180) * 16})`}
                />
              ))}
              <circle cx="0" cy="0" r="7" fill="#fef08a" />
              <circle cx="0" cy="0" r="4" fill="#facc15" />
            </g>
          </g>
        );

      // ウィンターコスモス: 鮮やかな黄金色の花弁と花芯
      case 'winter_cosmos':
        return (
          <g>
            <path d="M100 185 L100 95" stroke="#15803d" strokeWidth="3" />
            <path d="M100 140 Q65 130 55 145" stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d="M100 120 Q135 110 145 125" stroke="#16a34a" strokeWidth="2" fill="none" />
            {/* 8枚の鮮やかなイエローゴールド花弁 */}
            <g transform="translate(100, 95)">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                <g key={i} transform={`rotate(${ang})`}>
                  <path
                    d="M-7 0 L-9 -36 L-4 -42 L0 -38 L4 -42 L9 -36 L7 0 Z"
                    fill="#eab308"
                    stroke="#ca8a04"
                    strokeWidth="1"
                  />
                  <line x1="0" y1="0" x2="0" y2="-36" stroke="#fef08a" strokeWidth="1.2" />
                </g>
              ))}
              <circle cx="0" cy="0" r="14" fill="#a16207" />
              <circle cx="0" cy="0" r="9" fill="#eab308" />
            </g>
          </g>
        );

      // マーガレット: 純白の花びらと鮮やかな黄色の花芯（本物のカラー）
      case 'marguerite':
        return (
          <g>
            <path d="M100 185 L100 95" stroke="#15803d" strokeWidth="3.5" />
            <path d="M98 145 Q65 140 55 155 Q80 160 97 147" fill="#166534" />
            <path d="M102 125 Q135 120 145 135 Q120 140 103 127" fill="#15803d" />
            {/* 放射状に広がる純白のヘラ状花弁 */}
            <g transform="translate(100, 95)">
              {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map((ang, i) => (
                <ellipse
                  key={i}
                  cx={Math.cos(ang * Math.PI / 180) * 26}
                  cy={Math.sin(ang * Math.PI / 180) * 26}
                  rx="6.5"
                  ry="24"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="0.8"
                  transform={`rotate(${ang + 90} ${Math.cos(ang * Math.PI / 180) * 26} ${Math.sin(ang * Math.PI / 180) * 26})`}
                />
              ))}
              {/* 明るく輝く黄金の中心筒状花 */}
              <circle cx="0" cy="0" r="16" fill="#facc15" />
              <circle cx="0" cy="0" r="11" fill="#eab308" />
              <circle cx="0" cy="0" r="6" fill="#ca8a04" />
            </g>
          </g>
        );

      // デフォルト / 一般花（優雅なボタニカルフラワー）
      default:
        return (
          <g>
            <path d="M100 175 Q96 135 100 95" stroke="#059669" strokeWidth="3.5" />
            <path d="M98 140 Q65 135 60 148 Q80 155 97 142" fill="#10b981" />
            <path d="M102 120 Q135 115 140 128 Q120 135 103 122" fill="#059669" />
            {/* 6枚の花弁 */}
            {[0, 60, 120, 180, 240, 300].map((ang, i) => (
              <ellipse
                key={i}
                cx={100 + Math.cos(ang * Math.PI / 180) * 22}
                cy={95 + Math.sin(ang * Math.PI / 180) * 22}
                rx="18"
                ry="13"
                fill={primaryColor}
                opacity="0.9"
                transform={`rotate(${ang} ${100 + Math.cos(ang * Math.PI / 180) * 22} ${95 + Math.sin(ang * Math.PI / 180) * 22})`}
              />
            ))}
            <circle cx="100" cy="95" r="14" fill="#facc15" />
            <circle cx="100" cy="95" r="7" fill="#ca8a04" />
          </g>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.92, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="drop-shadow-md select-none"
      >
        <defs>
          <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 背景の柔らかなボタニカルグロー */}
        <circle cx="100" cy="100" r="85" fill="url(#glowGrad)" opacity="0.4" />

        {renderSvgContent()}
      </motion.svg>
    </div>
  );
};
