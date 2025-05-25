// src/components/LanguageSelector.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  const currentLang = i18n.language;

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
  ];

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Circle Button */}
      <div style={{
        display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer', backgroundColor: '#333333',
        padding: '4px 16px',
        borderRadius: 4
      }} onClick={() => setShowDropdown(!showDropdown)}>

        <button

          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            // border: '1px solid #333333',
            // backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          <img src={`/assets/images/flag/flag_${currentLang}.png`} alt={currentLang} width={30} height={30} style={{ objectFit: 'contain' }} />
        </button>
        <p className="lang-code" style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>{currentLang.toUpperCase()}</p>

        {/* {currentLang.toUpperCase()} */}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: 0,
            width: '70px', // sesuai permintaan
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 10,
            overflow: 'hidden',

          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              style={{
                padding: '4px 8px',
                fontSize: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: lang.code === currentLang ? '#e0e0e0' : 'transparent',
                display: 'flex',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <img src={`/assets/images/flag/flag_${lang.code}.png`} alt={lang.code} width={20} height={20} style={{ objectFit: 'contain' }} />
              <p style={{ fontSize: 14, fontWeight: 600 }}>{lang.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
