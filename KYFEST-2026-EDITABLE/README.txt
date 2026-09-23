KYFEST 2026 — VERSI GAMPANG DIEDIT

STRUKTUR:
- index.html  = struktur website, jarang perlu diedit
- style.css   = warna, ukuran, tampilan
- script.js   = mesin website, jangan diubah jika tidak perlu
- content.js  = EDIT UTAMA: semua tulisan, tanggal, hadiah, FAQ, link
- images/logo.png = logo KYFEST
- images/hero.png = gambar utama/hero

CARA EDIT TULISAN:
1. Buka content.js dengan Notepad / VS Code.
2. Cari teks yang ingin diubah.
3. Ganti teks di antara tanda kutip.
4. Simpan.
5. Buka index.html di browser untuk melihat hasilnya.

CARA GANTI GAMBAR:
1. Siapkan gambar baru.
2. Untuk gambar utama, ganti file images/hero.png dengan gambar baru dan gunakan nama file yang sama.
3. Untuk logo, ganti images/logo.png dengan logo baru dan gunakan nama file yang sama.
4. Refresh index.html.

CARA GANTI LINK PENDAFTARAN:
Buka content.js lalu ubah:
buttonLink: "https://forms.google.com/"
menjadi link Google Form/website pendaftaran asli.

CARA UPLOAD KE NETLIFY:
1. Pastikan folder KYFEST-2026-EDITABLE berisi index.html, content.js, script.js, style.css, README.txt, dan folder images.
2. Masuk Netlify.
3. Gunakan Add new project / Deploy manually.
4. Drag folder KYFEST-2026-EDITABLE ke area upload Netlify.
5. Jika nanti ada perubahan, edit file lalu upload ulang foldernya.

CATATAN:
- Logo asli dipakai sebagai file terpisah dan tidak diubah bentuknya.
- Google Fonts membutuhkan koneksi internet saat website dibuka.
