(() => {
let ebook = [];

// Isi Array Data Buku //
  function orailang(orailang) {
      orailang.preventDefault();
      const judule = document.querySelector("#inputBookTitle");
      const pengarange = document.querySelector("#inputBookAuthor");
      const tahune = document.querySelector("#inputBookYear");
      const sudahbaca = document.querySelector("#inputBookIsComplete");
      const masukdata = {
              id: +new Date,
              title: judule.value,
              author: pengarange.value,
              year: tahune.value,
              isComplete: sudahbaca.checked
          };
      console.log(masukdata), ebook.push(masukdata), document.dispatchEvent(new Event("bookChanged"))
  }

// Mencari Daftar Buku Tersimpan//
  function judule(orailang) {
    orailang.preventDefault();
    const judule = document.querySelector("#searchBookTitle");
      query = judule.value, query ? masukdata(ebook.filter((function(ebook) {
          return ebook.title.toLowerCase().includes(query.toLowerCase())
      }))) : masukdata(ebook)
  }

  function pengarange(orailang) {
    const judule = Number(orailang.target.id);
    const pengarange = ebook.findIndex((function(ebook) {
              return ebook.id === judule
          })); - 1 !== pengarange && (ebook[pengarange] = { ...ebook[pengarange],
          isComplete: !0
      }, document.dispatchEvent(new Event("bookChanged")))
  }

  function tahune(orailang) {
      const judule = Number(orailang.target.id);
      const pengarange = ebook.findIndex((function(ebook) {
              return ebook.id === judule
          })); - 1 !== pengarange && (ebook[pengarange] = { ...ebook[pengarange],
          isComplete: !1
      }, document.dispatchEvent(new Event("bookChanged")))
  }

  function sudahbaca(orailang) {
      const judule = Number(orailang.target.id);
      const pengarange = ebook.findIndex((function(ebook) {
              return ebook.id === judule
          })); - 1 !== pengarange && (ebook.splice(pengarange, 1), document.dispatchEvent(new Event("bookChanged")))
  }

  // Pindah Data Sudah dan Belum Baca, Hapus Data
  function masukdata(ebook) {
      const orailang = document.querySelector("#incompleteBookshelfList");
      const judule = document.querySelector("#completeBookshelfList");
          orailang.innerHTML = "", judule.innerHTML = "";
      for (const masukdata of ebook) {
          const ebook = document.createElement("article");
          ebook.classList.add("book_item");
          const formatjudul = document.createElement("h2");
          formatjudul.innerText = masukdata.title;
          const penulise = document.createElement("p");
          penulise.innerText = "Penulis: " + masukdata.author;
          const busek = document.createElement("p");
          if (busek.innerText = "Tahun: " + masukdata.year, 
              ebook.appendChild(formatjudul), 
              ebook.appendChild(penulise), 
              ebook.appendChild(busek), 
              masukdata.isComplete) {
              const orailang = document.createElement("div");
              orailang.classList.add("action");
              const pengarange = document.createElement("button");
              pengarange.id = masukdata.id, 
              pengarange.innerText = "Belum Selesai dibaca", 
              pengarange.classList.add("green"), 
              pengarange.addEventListener("click", tahune);
              const formatjudul = document.createElement("button");
              formatjudul.id = masukdata.id, 
              formatjudul.innerText = "Hapus buku", 
              formatjudul.classList.add("red"), 
              formatjudul.addEventListener("click", sudahbaca), 
              orailang.appendChild(pengarange), 
              orailang.appendChild(formatjudul), 
              ebook.appendChild(orailang), 
              judule.appendChild(ebook)
          } else {
              const judule = document.createElement("div");
              judule.classList.add("action");
              const tahune = document.createElement("button");
              tahune.id = masukdata.id, 
              tahune.innerText = "Selesai dibaca", 
              tahune.classList.add("green"), 
              tahune.addEventListener("click", pengarange);
              const formatjudul = document.createElement("button");
              formatjudul.id = masukdata.id, 
              formatjudul.innerText = "Hapus buku", 
              formatjudul.classList.add("red"), 
              formatjudul.addEventListener("click", sudahbaca), 
              judule.appendChild(tahune), 
              judule.appendChild(formatjudul), 
              ebook.appendChild(judule), 
              orailang.appendChild(ebook)
          }
      }
  }

  function formatjudul() {
      ! function(ebook) {
          localStorage.setItem("books", JSON.stringify(ebook))
      }(ebook), masukdata(ebook)
  }
  window.addEventListener("load", (function() {
      ebook = JSON.parse(localStorage.getItem("books")) || [], masukdata(ebook);
      const pengarange = document.querySelector("#inputBook");
      const tahune = document.querySelector("#searchBook");
      pengarange.addEventListener("submit", orailang), 
      tahune.addEventListener("submit", judule), 
      document.addEventListener("bookChanged", formatjudul)
  }))
})();