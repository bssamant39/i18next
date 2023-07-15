import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn  from "./locales/en/translation.json"
import tHe  from "./locales/he/translation.json"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn
      },
      he: {
        translation: tHe
      }
    },
    
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
const changeLan=(l)=>{
  // alert(lan)
  i18n.changeLanguage(l);
  //Local Storage
  localStorage.setItem('lang',l)
} 
function App() {
  useEffect(()=>{
    // alert("HEllo")
    let currentLang=localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
  },[])
  const { t } = useTranslation();

  return <><h2>{t('greeting')}</h2>
  <button onClick={()=>changeLan('en')}>English</button>
  <button onClick={()=>changeLan('he')}>Hindi</button>
  </>;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
