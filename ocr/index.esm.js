// Installer: Lädt die korrekte OCR-Datei dynamisch nach.
// So umgehen wir defekte Downloads, falsche Redirects und Browser-Fehler.

fetch("https://unpkg.com/@paddle-js-models/ocr@4.1.1/lib/index.esm.js")
  .then(r => r.text())
  .then(t => {
    document.body.innerHTML =
      "<pre>" +
      t.replace(/[<>&]/g, ch => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[ch])) +
      "</pre>";
  })
  .catch(e => {
    document.body.innerHTML = "Fehler beim Laden: " + e;
  });
