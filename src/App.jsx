import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "./locales/en/translation.json";
import tHe from "./locales/he/translation.json";
import tFr from "./locales/fr/translation.json";
import tJa from "./locales/ja/translation.json";


import { useEffect } from "react";
import "./App.css"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn,
      },
      he: {
        translation: tHe,
      },
      fr: {
        translation: tFr,
      },
      ja: {
        translation: tJa,
      },
    },

    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
const changeLan = (l) => {
  // alert(lan)
  i18n.changeLanguage(l);
  //Local Storage
  localStorage.setItem("lang", l);
};
function App() {
  useEffect(() => {
    // alert("HEllo")
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);
  const { t } = useTranslation();

  return (
    <>
      
      
      <div className="projcard-container">
      <h1>Please Select your Language</h1>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button" onClick={() => changeLan("en")}>English</button>
  <button class="btn btn-primary" type="button"  onClick={() => changeLan("he")}>Hindi</button>
  <button class="btn btn-primary" type="button"  onClick={() => changeLan("fr")}>French</button>
  <button class="btn btn-primary" type="button"  onClick={() => changeLan("ja")}>Japanese</button>


</div>
      <hr/>
    <div className="projcard projcard-blue">
      <div className="projcard-innerbox">
        <img className="projcard-img" src="https://picsum.photos/800/600?image=1041" />
        <div className="projcard-textbox">
          <div className="projcard-title">{t("heading")}</div>
          <div className="projcard-subtitle">{t("quotes1")}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{t("qexplain1")}</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Motivation Quotes</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-red">
      <div className="projcard-innerbox">
        <img className="projcard-img" src="https://picsum.photos/800/600?image=1080" />
        <div className="projcard-textbox">
          <div className="projcard-title">{t("heading")}</div>
          <div className="projcard-subtitle">{t("quotes2")}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{t("qexplain2")}</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Motivation Quotes</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-green">
      <div className="projcard-innerbox">
        <img className="projcard-img" src="https://picsum.photos/800/600?image=1039" />
        <div className="projcard-textbox">
          <div className="projcard-title">{t("heading")}</div>
          <div className="projcard-subtitle">{t("quotes3")}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{t("qexplain3")}</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Motivation Quotes</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="projcard projcard-customcolor" >
      <div className="projcard-innerbox">
        <img className="projcard-img" src="https://picsum.photos/800/600?image=943" />
        <div className="projcard-textbox">
          <div className="projcard-title">{t("heading")}</div>
          <div className="projcard-subtitle">{t("quotes4")}</div>
          <div className="projcard-bar"></div>
          <div className="projcard-description">{t("qexplain4")}</div>
          <div className="projcard-tagbox">
            <span className="projcard-tag">Motivation Quotes</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>

      
    </>
  );
}
export default App;
