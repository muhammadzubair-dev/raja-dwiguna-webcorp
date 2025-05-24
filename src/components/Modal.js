import { useEffect, useRef, useState } from 'react';

const Modal = ({ isOpen, onClose, title, photo, description }) => {
  const modalRef = useRef();
  const [isHovering, setIsHovering] = useState(false);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Styles
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '1rem',
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '0.2rem',
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    padding: '1rem',
    width: '100%',
    maxWidth: '700px', // max width for large screens
    maxHeight: '90vh', // keep within viewport height
    overflowY: 'auto', // scroll if content overflows
    position: 'relative',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: 0,
  };

  const closeButtonStyle = {
    color: isHovering ? '#374151' : '#6B7280',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '70vh',
    objectFit: 'contain',
    backgroundColor: '#000',
  };

  return (
    <div
      style={backdropStyle}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div ref={modalRef} style={modalStyle}>
        <div style={headerStyle}>
          <h3 id="modal-title" style={titleStyle}>
            {title}
          </h3>
          <button
            onClick={onClose}
            style={closeButtonStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '1.5rem', width: '1.5rem' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <img src={photo} alt={title || 'Modal Image'} style={imageStyle} />
          <p
            style={{
              marginTop: 14,
              fontWeight: 400,
              fontSize: 14,
              color: '#000',
              whiteSpace: 'pre-wrap',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
