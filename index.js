const { Telegraf } = require('telegraf');
const bot = new Telegraf('8294248021:AAGGm66U6oB8Jqp5MUsWq9D3OnTSZRK_eew'); // Ganti dengan token bot Telegram kamu

// Konfigurasi Owner
const OWNER_UTAMA = '8494121394';
const OWNER_KEDUA = '@bestservice27';

// Data pengguna contoh
let users = {
  'Pengguna A': { saldo: 0 },
  'Pengguna B': { saldo: 0 }
};

// Command untuk mulai sesi
bot.command('start', (ctx) => {
  ctx.reply(`✨ MULAI SESI TARUHAN!
📝 Format: [Jenis][Nominal]
💡 Minimal Taruhan: 1 Poin`);
});

// Command untuk taruhan
bot.command('taruhan', (ctx) => {
  ctx.reply(`🎲 JENIS TARUHAN YANG TERSEDIA:
1. Besar-Kecil | Odds 1.95x
2. Kombinasi Gabungan | Odds 3.2x-4.2x
...`);
});

// Hasil taruhan tanpa tag
bot.command('hasil', (ctx) => {
  ctx.reply(`🎲 HASIL KELUARAN: 6+3+2=11
🏆 PEMENANG:
- Pengguna A (20 Poin) → Odds 1.95x → Pemenangan 39 Poin
- Pengguna B (15 Poin) → Odds 3.2x → Pemenangan 48 Poin`);
});

// Jalankan bot
bot.launch();
