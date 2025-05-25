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
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid #ccc',
          backgroundColor: '#f0f0f0',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {currentLang.toUpperCase()}
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: 0,
            width: '64px', // sesuai permintaan
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
                padding: '4px',
                fontSize: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: lang.code === currentLang ? '#e0e0e0' : 'transparent',
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
