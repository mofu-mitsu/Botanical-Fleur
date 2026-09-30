'use client';

import React, { useMemo } from 'react';

interface FloatingPetal {
  id: number;
  left: number; // 0 - 100%
  top: number; // 0 - 100%
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  rotation: number;
  type: 'petal' | 'sakura' | 'clover' | 'star';
  color: string;
  opacity: number;
}

export const FloatingFlowers: React.FC = () => {
  // SSR時のハイドレーション不一致を防ぎつつ、綺麗なランダム花びらを生成
  const petals = useMemo<FloatingPetal[]>(() => {
    const types: ('petal' | 'sakura' | 'clover' | 'star')[] = ['petal', 'sakura', 'clover', 'star'];
    const colors = [
      '#f472b6', // pink
      '#fb7185', // rose
      '#34d399', // emerald
      '#a78bfa', // purple
      '#facc15', // yellow
      '#38bdf8', // sky
      '#f97316', // orange
    ];

    const list: FloatingPetal[] = [];
    // 画面全体に優雅に散りばめる（計18個で軽快かつ美しい）
    for (let i = 0; i < 18; i++) {
      list.push({
        id: i,
        left: (i * 5.5 + 3) % 95,
        top: (i * 7.3 + 5) % 92,
        size: 16 + (i % 4) * 6, // 16px - 34px
        duration: 12 + (i % 5) * 3, // 12s - 24s
        delay: (i * 0.7) % 6,
        rotation: (i * 45) % 360,
        type: types[i % types.length],
        color: colors[i % colors.length],
        opacity: 0.18 + (i % 3) * 0.08, // 0.18 - 0.34
      });
    }
    return list;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 柔らかな背景グラデーションオーブ */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-200/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-teal-100/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-pink-100/25 blur-3xl" />

      {/* SVGの浮かぶ花びら・お花 */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute transition-transform will-change-transform animate-float-flower"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'petal' && (
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 24 32"
              fill={p.color}
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <path d="M12 0 C18 8 24 18 12 32 C0 18 6 8 12 0 Z" />
            </svg>
          )}

          {p.type === 'sakura' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 32 32"
              fill={p.color}
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <g transform="translate(16,16)">
                {[0, 72, 144, 216, 288].map((angle) => (
                  <path
                    key={angle}
                    d="M0 0 C-4 -8 -6 -14 0 -16 C6 -14 4 -8 0 0"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="2.5" fill="#fef08a" />
              </g>
            </svg>
          )}

          {p.type === 'clover' && (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 32 32"
              fill="#10b981"
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <g transform="translate(16,16)">
                {[0, 90, 180, 270].map((angle) => (
                  <circle
                    key={angle}
                    cx="0"
                    cy="-6"
                    r="5"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="3" fill="#059669" />
              </g>
            </svg>
          )}

          {p.type === 'star' && (
            <svg
              width={p.size * 0.9}
              height={p.size * 0.9}
              viewBox="0 0 24 24"
              fill={p.color}
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <path d="M12 2 L14.5 9 L22 9.5 L16 14.5 L18 22 L12 17.5 L6 22 L8 14.5 L2 9.5 L9.5 9 Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
