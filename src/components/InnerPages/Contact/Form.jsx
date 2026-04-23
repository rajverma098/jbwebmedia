import React from 'react';

function Form() {
  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">Get In Touch</h6>
              <h2 className="fz-50">Let's get in <br /> touch with us.</h2>
              <p className="fz-15 mt-10">If you would like to work with us or just want to get in
                touch, we’d love to hear from you!</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+919855655151">+91 9855655151</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="https://www.facebook.com/Jbwebmedia" target='_blank'>Facebook</a>
                </li>
                <li className="mr-30">
                  <a href="https://x.com/JbwebMedia" target='_blank'>Twitter</a>
                </li>
                <li className="mr-30">
                  <a href="https://www.linkedin.com/" target='_blank'>LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jbwebmedia/" target='_blank'>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name"
                        required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30">
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form