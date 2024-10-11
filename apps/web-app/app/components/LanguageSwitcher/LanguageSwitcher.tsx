import React from 'react'
import {currentLanguage, setLanguage} from "../../lib/lang";

function LanguageSwitcher() {
  const switchLanguage = () => {
    return currentLanguage === 'en' ? setLanguage('es') : setLanguage('en');
  }
  return (
    <button className={"fixed top-5 right-5 rounded-full px-4 py-1 bg-secondary text-quartery z-[999] shadow-lg"} onClick={switchLanguage}>
      <img src={"/icons/" + currentLanguage + ".svg"} alt={currentLanguage} className={"w-6 h-6"} />
    </button>
  )
}

export default LanguageSwitcher;