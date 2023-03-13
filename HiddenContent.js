// const allParagraphs = document.getElementsByTagName('p');

// if (allParagraphs.length > 3) {
//   for (let i = 3; i < allParagraphs.length; i++) {
//     allParagraphs[i].style.display = 'none';
//   }
// }

function truncateParagraph(maxLines, targetSelector) {
  const targetElements = document.querySelectorAll(targetSelector); // mengambil semua elemen yang sesuai dengan selector

  for (let i = 0; i < targetElements.length; i++) {
    const target = targetElements[i];
    const lineHeight = parseInt(
      window.getComputedStyle(target).getPropertyValue('line-height')
    ); // mengambil nilai tinggi satu baris
    const maxHeight = lineHeight * maxLines; // menghitung tinggi maksimum elemen

    if (target.clientHeight > maxHeight) {
      // jika tinggi elemen melebihi maxHeight
      let text = target.innerText.trim(); // mengambil teks dari target dan membuang spasi di awal dan akhir
      const words = text.split(' '); // memecah teks menjadi array kata
      let truncatedText = ''; // variabel untuk menampung teks baru

      for (let j = 0; j < words.length; j++) {
        const testString = truncatedText + ' ' + words[j];
        target.innerText = testString; // mencoba menambahkan kata ke teks

        if (target.clientHeight > maxHeight) {
          // jika tinggi elemen melebihi maxHeight setelah menambahkan kata
          target.innerText = truncatedText.trim() + '...'; // set teks baru dengan akhiran ...
          console.log(target.innerText);
          target.setAttribute('title', text); // tambahkan title dengan teks asli
          break;
        } else {
          truncatedText = testString; // simpan teks baru ke variabel
        }
      }
    }

    // target.style.maxHeight = maxHeight + 'px'; // set tinggi maksimum elemen
    target.style.overflow = 'hidden'; // set overflow ke "hidden"
    target.style.textOverflow = 'ellipsis'; // set text-overflow ke "ellipsis"
  }
}

truncateParagraph(3, 'p');
