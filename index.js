// Express modülünü projeye dahil ediyoruz 
const express = require('express'); 
// Uygulama oluşturuyoruz 
const app = express(); 
// Ana sayfa endpoint'i 
app.get('/', (req, res) => {
  res.send('Merhaba, TeaNode!'); 
}); 
// Sunucuyu belirli bir portta dinlemeye başlıyoruz 
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`); 
});
