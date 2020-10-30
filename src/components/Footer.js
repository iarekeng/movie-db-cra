import React from 'react';

function Footer() {
  return(
    <div className="footer-container">
      <div className="footer1">
      <h2 className="footer1-title">Movie Database</h2>
      </div>
      <div className="footer2">
      <p>Follow Us</p>
      <span><ion-icon id="instagram" name="logo-instagram"></ion-icon></span>
      <span><ion-icon id="facebook" name="logo-facebook"></ion-icon></span>
      <span><ion-icon id="twitter" name="logo-twitter"></ion-icon></span>
      </div>
      <div className="footer3">
      <p className="footertitle">Stay up to date</p>
      <form>
        <div className="form-row align-items-center">
        <div className="col-md-6">
        <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
        <input type="text" className="form-control" id="inlineFormInputName" placeholder="Enter email" />
        </div>
        <div className="col-auto my-1">
        <button type="submit" className="btn btn-outline-info">Submit</button>
        </div>
        </div>
        </form>
      </div>
    </div>

  )
}

export default Footer;
