// GAS (Google Apps Script) への閲覧ログ静か送信ユーティリティ
// サイト内には一切UIや通知を出さず、バックグラウンドで静かに記録します

interface FlowerViewLogPayload {
  flowerName: string;
  month: number;
  day: number;
  meanings?: string[];
  reading?: string;
}

export function logFlowerViewToGas(payload: FlowerViewLogPayload) {
  if (typeof window === 'undefined') return;

  const gasUrl = process.env.NEXT_PUBLIC_GAS_WEBAPP_URL;
  if (!gasUrl) return;

  try {
    const bodyData = {
      type: 'flower_view',
      timestamp: new Date().toISOString(),
      flowerName: payload.flowerName,
      month: payload.month,
      day: payload.day,
      meanings: payload.meanings?.join('、') || '',
      url: window.location.href,
    };

    // Google Apps ScriptのWebアプリURLはリダイレクトを伴うため mode: 'no-cors' が安全
    fetch(gasUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    }).catch(() => {
      // ユーザー体験を損なわないためエラーはサイレントに処理
    });
  } catch {
    // サイレントに握りつぶす
  }
}
