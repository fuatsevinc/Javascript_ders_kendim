# ders1
JavaScript ile geliştirme yaparken kullanılan function veya fonksiyon yapısını oluşturma, çağırma, değer döndürme, kullanımı fonksiyon örnekleri ile yer alıyor. 

 

JavaScript ile yazılmış bir fonksiyon, belirli bir işlemi yapmak için tasarlanmış kod bloğudur. 

avaScript ile yazılmış bir fonksiyon çalıştırıldığında (çağrıldığında) işlem yapar. 

 

<script> 
  function Topla(sayi1, sayi2) { 
    return sayi1 + sayi2;         // sayi1 ve sayi2 toplamını döndürür 
  } 
  alert(Topla(10, 5)); 
</script> 

 

Fonksiyon oluşturma 

Fonksiyon function anahtar kelimesi bir boşluk fonksyion adı ve parantez ile tanımlanır. 

Fonksiyon isimlerinde harf, rakam, alt çizgi ve dolar işareti olabilir. (değişken tanımlama kuralları ile aynı) 

Birden fazla parametre parantez içerisinde virgülle ayrılır. (parametre1, parametre2, parametre3, … ) 

Fonksiyon kodları süslü parantez { . . . } içerisine yazılır. 

 

<script> 
function fonksiyonAdi(parametre1, parametre2) { 
  // fonksiyon kodları 
} 
</script> 

 

Fonksiyon parametreleri fonksiyon kodlarında kullanmak için oluşturulmuş değişkenlerdir. 

Fonksiyon parametreleri fonksiyon çağırma işleminden sonra değer alır. 

Fonksiyon parametreleri fonksiyon içerisinde yerel değişken olarak tanımlanır. 

JavaScript dilinde fonksiyonlar diğer programlama dillerindeki yordam, alt yordam ile aynıdır. 
Fonksiyon çağırma 

JavaScript ile yazılmış fonksiyon kodlarının çalışması için fonksiyon çağırma veya fonksiyon çalıştırma işleminin yapılması gerekir. 

JavaScript fonksiyon çalıştırmanın yolları; 

Bir olay meydana geldiğinde – kullanıcı HTML nesnesine tıkladığında 

 

<button onclick="alert('Merhaba JavaScript');">Merhaba</button> 

 

Fonksiyon çağırma işlemi yapıldığında 

 

<script> 
function uyari(mesaj) { 
  alert(mesaj); 
} 
uyari("Merhaba JavaScript"); 
</script> 

 

Otamatik – fonksiyon içinde fonksiyon çağırma gibi 

 

<script> 
function uyari(mesaj) { 
  alert(mesaj); 
  uyari(mesaj); 
} 
uyari("Merhaba JavaScript"); 
</script> 

 

Fonksiyon değer döndürme 

JavaScipt fonksiyon kodları return anahtar kelimesine geldiğinde çalışmayı durdurur. 

JavaScript fonksiyonun çağrıldığı yerden devam eder varsa kalan kodları işler. 

Fonksiyonlar return anahtar kelimesi ile değer döndürür. 

 

<script> 
  var sonuc; 
  function Topla(sayi1, sayi2) { 
    return sayi1 + sayi2;         // sayi1 ve sayi2 toplamını döndürür 
  } 
  sonuc = Topla(10, 5); 
  alert(sonuc); 
</script> 

Örnekte Topla isminde fonksiyon tanımlanmış ve sayi1 ile sayi2 değerlerinin toplamı değer döndürme ile döndürülmüştür. 

Fonksiyon kullanımı 

JavaScript fonksiyon kullanımı ile bir defa kodu yazarak birden fazla kullanabiliriz. 

JavaScript fonksiyonlarına parametre ekleyerek farklı değerler için farklı sonuçlar elde edebiliriz. 

 

<script> 
  function celsiusCevir(fahrenhayt) { 
      return (5 / 9) * (fahrenhayt - 32); 
  } 
  alert(celsiusCevir(50)); 
  alert(celsiusCevir(104)); 
</script> 

Örnekte farklı değerleri parametre olarak alan ve hesaplama yapan celsiusCevir isimli fonksiyon tanımlanmıştır. 

Örnekte celsiusCevir(50) ile fonksiyon çağırma işlemi yapılmıştır. 

Sadece fonksiyon ismi yazılırsa JavaScript fonksiyon kodlarını döndürecektir. 

 

<script> 
  var sonuc; 
  function celsiusCevir(fahrenhayt) { 
      return (5 / 9) * (fahrenhayt - 32); 
  } 
  alert(celsiusCevir); 
</script> 

JavaScript fonksiyon sonuçlarını değişkenlere atanabilir. 

 

<script> 
  var sonuc; 
  function celsiusCevir(fahrenhayt) { 
      return (5/9) * (fahrenhayt-32); 
  } 
  sonuc = celsiusCevir(50); 
  alert(sonuc); 
</script> 

 

Fonksiyon sonucu ile işlem yapmayacaksanız değişkene atamadan kullanmanızı tavsiye ederim. 
 
