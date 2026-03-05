import React from 'react';

function Contact() {
  return (
    <section id="contact" className="glass contact-section">
      <div className="contact-main-wrapper">
        
        <div className="contact-left-content">
          <h2>Men bilan bog'laning</h2>
          <div className="contact-info">
            <p>📞 Telefon: <a href="tel:+998937780171">+998937780171</a></p>
            <p>📧 Gmail: <a href="mailto:ibragimovsanjarbek0@gmail.com">ibragimovsanjarbek0@gmail.com</a></p>
            <p>🌐 Telegram: <a href="https://t.me/ingenium_uz" target="_blank" rel="noopener noreferrer">@ingenium_UZ</a></p>
            <p>📸 Instagram: <a href="https://instagram.com/ibragimovsanjarbek_" target="_blank" rel="noopener noreferrer">@ibragimovsanjarbek_</a></p>
            <p>🌐 Telegram kanal: <a href="https://t.me/html_sayt_yaratish_xizmati" target="_blank" rel="noopener noreferrer">Katta va kichik bizneslar uchun sayt yaratish xizmati</a></p>
          </div>
        </div>

        <div className="contact-right-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000.32!2d69.2418325!3d41.3115847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1710000000000!5m2!1suz!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanjarbek Manzili"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;