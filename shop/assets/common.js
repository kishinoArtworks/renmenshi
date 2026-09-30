/* グッズ一覧と申し込みフォームで共通：JP/EN切替・画像の右クリック抑止 */
// 言語：保存済み → ブラウザの言語 → 日本語 の順で決める
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-switch button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("renmenshi-goods-lang", lang) } catch (e) { }
}
let saved = null;
try { saved = localStorage.getItem("renmenshi-goods-lang") } catch (e) { }
document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

document.addEventListener("contextmenu", e => { if (e.target.tagName === "IMG") e.preventDefault() });

setLang(saved || ((navigator.language || "ja").toLowerCase().startsWith("ja") ? "ja" : "en"));
