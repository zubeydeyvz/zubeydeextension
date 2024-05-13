document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "Özdemir Asaf - Lavinia",
        "Turgut Uyar - Göğe Bakma Durağı",
        "Cahit Sıtkı Tarancı - Otuz Beş Yaş",
        "Gültekin Akın- Deli Kızın Türküsü",
        "Arif Nihat Asya - Bayrak",
        "Orhan Veli Kanık - İstanbulu Dinliyorum",
        "Yahya Kemal Beyatlı - Sessiz Gemi",
        "Cahit Külebi - Hikaye",
        "Bedri Rahmi Eyüboğlu - Çakıl",
        "Ece Ayhan - Mor Külhane",
        "Gülten Akın -İlkyaz",
        "Rıfat Ilgaz - Gidişini Anlatıyorum",
        "Birhan Keskin - İz",
        "Tevfik Fikret - Yağmur"
        // Daha fazla atasözü ekleyebilirsiniz.
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});