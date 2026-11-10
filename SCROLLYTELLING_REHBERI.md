# Modern Scrollytelling & 3D Web Teknolojileri Rehberi

Bu belge; Apple, Awwwards ve FWA ödüllü web sitelerinde gördüğümüz, sayfa kaydırıldıkça (scroll) nesnelerin birleştiği, modellerin parçalandığı veya mekanların dönüştüğü "scrollytelling" sitelerinin arkasındaki teknolojileri ve mimariyi özetler.

---

## 1. Temel Felsefe: Scroll = Zaman Çizelgesi (Timeline Scrubbing)

Geleneksel webde kaydırma (scroll), kullanıcıyı dikey eksende aşağı taşır. Scrollytelling sitelerinde ise:
- Arka plandaki sahne (Canvas / WebGL / Video) ekrana `position: fixed` veya `sticky` ile kilitlenir (*pinning*).
- Kullanıcının kaydırdığı piksel mesafesi `0` ile `1` arasında bir ilerleme oranına (`progress`) dönüştürülür.
- Kullanıcı tekerleği çevirdikçe zaman ileri ya da geri akar.

---

## 2. Kullanılan 4 Ana Mimari Yaklaşım

### A. Canvas + Frame-by-Frame Image Sequence (Apple Stili)
> *Örnek referans: `claude-code-starter` / Royal Pop projesi*

- **Neden `<video>` değil?**
  HTML5 `<video>` etiketinin `currentTime` değerini scroll'a bağlamak tarayıcılarda (özellikle Safari ve mobilde) takılmalara (jank) yol açar; çünkü video formatları keyframe tabanlıdır ve anlık 60/120 FPS ileri-geri scrub yapamaz.
- **Nasıl Yapılır?**
  1. 10–20 saniyelik 3D render veya AI video oluşturulur.
  2. `ffmpeg` ile 150–250 adet WebP / AVIF karesine bölünür:
     ```bash
     ffmpeg -i video.mp4 -vf "fps=24,scale=1920:-1" -q:v 80 frames/frame_%04d.webp
     ```
  3. JavaScript ile kareler belleğe önden yüklenir (`new Image()`).
  4. Scroll pozisyonuna göre ilgili kare HTML5 `<canvas>` üzerine `ctx.drawImage()` ile çizdirilir.
- **Artısı:** Her cihazda 60 FPS, sıfır 3D hesaplama yükü, kusursuz fotorealizm.

---

### B. Gerçek Zamanlı 3D: Three.js / React Three Fiber (R3F) & WebGPU / TSL
> *Örnek referans: `threejs-journey.com/#webgpu-tsl`*

- **WebGL / Three.js:** 3D model (GLTF/GLB) web sayfasına canlı yüklenir. Parçaların pozisyonu, rotasyonu ve kamera açısı scroll değerine bağlanır.
- **WebGPU & TSL (Three Shading Language):**
  - WebGL'in yeni nesil halefi.
  - TSL shader'ları sayesinde milyonlarca partikül, ışık kırılmaları, interaktif su/cam materyalleri CPU'yu yormadan doğrudan GPU compute hattında hesaplanır.
- **Artısı:** Kullanıcı kamerayı fareyle de çevirebilir, ışıklar ve malzemeler gerçek zamanlı olarak tepki verir.

---

### C. Spline 3D (Tasarımcı Dostu / No-Code & Low-Code)

- Web tabanlı 3D tasarım aracı.
- Spline içinde doğrudan "Scroll Events" tanımlanabilir.
- Webflow'a hazır bileşenle, React / Next.js'e ise `@splinetool/react-spline` kütüphanesiyle tek satırda entegre edilir.
- **Artısı:** 3D kodlamaya gerek kalmadan hızlı prototipleme ve lansman.

---

### D. CSS Native Scroll-Driven Animations

- Yeni nesil tarayıcı standardı: `animation-timeline: scroll()` ve `view()`.
- JavaScript çalıştırmadan, GPU thread'i üzerinde doğrudan CSS kurallarıyla animasyon çalıştırmayı sağlar.
- Sıfır main-thread yükü yaratır; metin fade-in/out, kart açılmaları ve ilerleme barları için idealdir.

---

## 3. Olmazsa Olmaz Araçlar

1. **Lenis (`@studio-freight/lenis` / `lenis`):**
   - Tarayıcının kesik kesik olan yerel kaydırma hareketini fizik tabanlı bir yumuşatmaya (`lerp`) sokar. Sayfaya lüks ve akıcı hissi veren ana bileşendir.
2. **GSAP + ScrollTrigger:**
   - Sahne pinleme, metin zamanlamaları (timeline sequencing) ve canvas kare geçişlerinin endüstri standardı orkestratörüdür.

---

## 4. İç Mimarlık Projeleri İçin Örnek Scroll Akışı (Storyboard)

```
[Scroll %0]   : Boş Kaba Mekan (Ham beton, blueprint mimari çizgiler)
     ↓
[Scroll %30]  : Malzeme Aşaması (Duvar kaplamaları, parke, tavan aydınlatma yuvaları yerleşiyor)
     ↓
[Scroll %65]  : Mobilya ve Donatı (Koltuk, sehpa, özel tasarım mobilyalar yerine oturuyor)
     ↓
[Scroll %100] : Yaşayan Atmosfer (Işıklar kısılıyor, akşam ambiyans aydınlatması açılıyor, CTA butonu beliriyor)
```
