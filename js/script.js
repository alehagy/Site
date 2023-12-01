// --- Constroi o footer ---
window.addEventListener("DOMContentLoaded", (event) => {
    // Seleciona o elemento pai do footer pára preenchimento
    let footerColumns = document.querySelector(".footer-columns");
  
    if (footerColumns) {
      // Primeira coluna
      let firstCol = document.createElement("div");
      firstCol.classList.add("footer-col");
      firstCol.innerHTML = `
              <p>Bem-vindo à Pousada Obedemar no litoral sul da Bahia, em frente a uma das mais maravilhosas praias do Brasil: Taípu de Fora.<br></p>
              <div class="ct-topbar">
              <div class="container">
              <ul class="list-unstyled list-inline ct-topbar__list">
                <li class="ct-language">Translate 🌐
                <ul class="list-unstyled ct-language__dropdown">
                  <li><a href="#" class="lang-select" data-lang="en">🇺🇸 English</a></li>
                  <li><a href="#" class="lang-select" data-lang="es">🇪🇸 Español</a></li>
                  <li><a href="#" class="lang-select" data-lang="de">🇩🇪 Deutsch</a></li>
                  <li><a href="#" class="lang-select" data-lang="fr">🇫🇷 Francophone</a></li>
                  <li><a href="#" class="lang-select" data-lang="ja">🇯🇵 日本</a></li>
                </ul>
                </li>
              </ul>
              </div>
            </div>       
          `;
  
      footerColumns.appendChild(firstCol);
  
      // Segunda coluna
      let secondCol = document.createElement("div");
      secondCol.classList.add("footer-col");
      secondCol.innerHTML = `
   <h3>Explore</h3>
   <ul>
   <li><a href="./">Início</a></li>
   <li><a href="reservas.html">Reservas</a></li>
   <li><a href="contato.html">Contato</a></li>
   <li><a href="cafe.html">Café da Manhã</a></li>
   <li><a href="acomodacoes.html">Acomodações</a></li>
   <li><a href="https://github.com/luandiasrj/Projeto-Integrador-Talento-Cloud"><svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
   <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg> Repositório no GitHub</a></li> 
   </ul>
   `;
      footerColumns.appendChild(secondCol);
  
      // Terceira coluna
      let thirdCol = document.createElement("div");
      thirdCol.classList.add("footer-col");
      thirdCol.innerHTML = `
   <h3>Contatos</h3>
   <p>Taípu de Fora, Maraú State of Bahia, Brazil</p>
   <p>+55 (73) 99855-9689</p>
   <p>reservas@obedemar.com.br</p>
   <p>insta, X, Facebook, TripAdvisor</p>
  <!-- Include the Google Translate script -->
  <div id="google_translate_element"></div>
   `;
      footerColumns.appendChild(thirdCol);
    }
  
    // Parte de manipulação dos links de tradução da página
  
    var waitForElement = setInterval(function () {
      var element = document.querySelector(".ct-language__dropdown");
      if (element) {
        clearInterval(waitForElement);
        // Adiciona eventos de clique aos links
        addClickEvents();
      }
    }, 100);
  
    function addClickEvents() {
      // Seleciona todos os links da lista de idiomas
      var languageLinks = document.querySelectorAll(".ct-language__dropdown a");
  
      // Adiciona um evento de clique a cada link
      languageLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault(); // Impede o comportamento padrão do link
  
          var langCode = link.getAttribute("data-lang");
          changeLanguage(langCode);
  
          console.log("Selecionou:", langCode);
        });
      });
    }
  
    function changeLanguage(langCode) {
      // Encontrar o elemento de seleção de idioma
      var languageSelect = document.querySelector(".goog-te-combo");
  
      // Encontrar a opção correspondente ao idioma desejado
      var option = languageSelect.querySelector(
        'option[value="' + langCode + '"]'
      );
  
      if (option) {
        // Seleciona a opção e dispara o evento change
        option.selected = true;
        languageSelect.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        console.error("Opção de idioma não encontrada:", langCode);
      }
    }
  });
  
  // ---------- Inicia a tradução do google ---------- //
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: "pt-br",
        autoDisplay: "true",
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  }
  