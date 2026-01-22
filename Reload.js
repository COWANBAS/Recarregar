// ==UserScript==
// @name           Recarregar Páginas
// @description    Recarrega páginas assim que voltam para o foco
// @namespace      CowanPAGE
// @license        GPL-3.0
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @exclude        *://*.youtube.com/*
// @exclude        https://web.whatsapp.com/*
// @run-at         document-start
// ==/UserScript==

(function () {
  'use strict';

  // Adiciona um evento de foco à janela
  window.addEventListener('focus', function () {
    // Recarrega a página quando a janela ganha foco
    location.reload();
  });

})();
