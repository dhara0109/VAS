

const ContactMap = () => {
  
  return (
    <>
      <section className="contact__map">
        <div className="contact__map-wrap">
        <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/d/embed?mid=1n_yiBtJ14K8GZiW8pjiEs6kaNQjB0ME&hl=en&ll=43.52252625293302%2C-79.94243600901011&z=11"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>

          {/* <div className="contact__map-icon">
            <i className="fa-solid fa-location-dot"></i>
            <img src="assets/img/bg/contact-icon-bg.png" alt="" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactMap;
