import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPhone, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


class MainSchedule extends Component {
  render() {
    return (
      <div className="schedule-info">
        <table>
          <tbody>
            <tr>
              <td>3:30pm</td>
              <td>Study Time</td>
            </tr>
            <tr>
              <td>4:30pm</td>
              <td>Snack/Break</td>
            </tr>
            <tr>
              <td>4:45pm</td>
              <td>Activities</td>
            </tr>
            <tr>
              <td>5:45pm</td>
              <td>Snack/Break</td>
            </tr>
            <tr>
              <td>6:00pm</td>
              <td>Clean Up</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class AltSchedule extends Component {
  render() {
    return (
      <div className="schedule-info">
        <table>
          <tbody>
          <tr>
            <td>1:45pm</td>
            <td>Study Time</td>
          </tr>
          <tr>
            <td>2:45pm</td>
            <td>Snack/Break</td>
          </tr>
          <tr>
            <td>3:00pm</td>
            <td>Activities</td>
          </tr>
          <tr>
            <td>4:00pm</td>
            <td>Snack/Break</td>
          </tr>
          <tr>
            <td>4:15pm</td>
            <td>Clean Up</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


class App extends Component {
  toggleActiveState(e) {
    let clickedButton = e.target;

    if (clickedButton.className.indexOf('toggle-active') === -1) {

      if (this.props.appReducer.schedule === true) {
        this.props.setSchedule(false);
      } else if (this.props.appReducer.schedule === false) {
        this.props.setSchedule(true);
      }

      let classList = document.getElementsByClassName('toggle-active');
      for (let i = 0; i < classList.length; i++) {
        let activeItem = classList[0];
        activeItem.className = activeItem.className.slice(0, activeItem.className.indexOf('toggle-active'));
      }
      clickedButton.className = clickedButton.className + ' toggle-active';
    }
  }
  render() {
    return (
      <div className="main">

        {/* PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE */}
        {/* PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE - PAGE ONE */}

        <div className="page-one">

          <div className="hide-desktop divider-logo-container">
            <FontAwesomeIcon icon={faGraduationCap} className="divider-logo"/>
          </div>

          <div className="header">

            <a className="hide-mobile-flex back-button link" href="/">
              <FontAwesomeIcon icon={faArrowLeft} className="fa-fw back-button-chevron"/>
              <p className="back-button-text">Back to AUES site</p>
            </a>

            <div className="title-container">
              <h2 className="subtitle">Arena Union Elementary</h2>
              <h1 className="title">After School Program</h1>
            </div>

            <a href="/" className="hide-mobile quick-contact link">Call us: (707) 882-2131</a>
            {/*<a href="/" className="hide-desktop quick-contact link"><FontAwesomeIcon icon={faPhone} className="fa-fw call-now-icon"/></a>*/}

          </div>

          <div className="hide-desktop-flex mobile-header-links">
            <a className="back-button link" href="/">
              <FontAwesomeIcon icon={faArrowLeft} className="fa-fw back-button-chevron"/>
              <p className="mobile-header-button-text">Go Back</p>
            </a>
            <a href="/" className="quick-contact link">
              <FontAwesomeIcon icon={faPhone} className="fa-fw call-now-icon"/>
              <p className="mobile-header-button-text">Call Us</p>
            </a>
          </div>

          <div className="activity-section">
            <div className="blurb">
              <h3 className="blurb-header">It's like School, but Not!</h3>
              <p className="blurb-body">By attending our After School Program, your kid(s) will learn about completing assignments early while collaborating with peers during study time. Your child(ren) will also have the chance to participate in a host of engaging activities including computer class, yoga, art, music, sports, landscaping, gardening, and more!</p>
            </div>
            <div className="schedule">
              <div className="schedule-header">
                <h3>Activity Schedule</h3>
              </div>
              <div className="schedule-toggle">
                <p id="toggle-main-id" className="day-toggle toggle-main toggle-active" onClick={this.toggleActiveState.bind(this)}>Mon, Tue, Thu, Fri</p>
                <p id="toggle-alt-id" className="day-toggle toggle-alt" onClick={this.toggleActiveState.bind(this)}>Wednesday</p>
              </div>
              {this.props.appReducer.schedule ? <MainSchedule /> : <AltSchedule />}
            </div>
          </div>

        </div>

        <div className="dividing-line"></div>

        {/* PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO */}
        {/* PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO - PAGE TWO */}

        <div className="page-two">

          <div className="contact-section">
            <div className="hide-desktop contact-blurb-container">
              <h3 className="contact-blurb-header">Ready to Enroll?</h3>
              <p className="contact-blurb-body">We're so glad to hear it! Please send us an email using the form on the left and we'll get back to you as soon as we can. If you'd rather give us a call, or send us an email directly, our information is the following:</p>
              <div className="contact-info-group">
                <p className="contact-label">PHONE</p>
                <p className="contact-info">(707) 882-2131</p>
              </div>
              <div className="contact-info-group">
                <p className="contact-label">EMAIL</p>
                <p className="contact-info">info@arenaunionelementary.org</p>
              </div>
            </div>
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h3>Contact Us</h3>
              </div>
              <div className="contact-form-inputs">
                <div className="input-group">
                  <p className="input-label">Name</p>
                  <input type="text" className="input-field"/>
                </div>
                <div className="input-group">
                  <p className="input-label">Email</p>
                  <input type="text" className="input-field"/>
                </div>
                <div className="input-group">
                  <p className="input-label">Message</p>
                  <textarea className="input-field" id=""></textarea>
                </div>
                <p className="submit-button">Submit</p>

              </div>
            </div>
            <div className="hide-mobile contact-blurb-container">
              <h3 className="contact-blurb-header">Ready to Enroll?</h3>
              <p className="contact-blurb-body">We're so glad to hear it! Please send us an email using the form on the left and we'll get back to you as soon as we can. If you'd rather give us a call, or send us an email directly, our information is the following:</p>
              <div className="contact-info-group">
                <p className="contact-label">PHONE</p>
                <p className="contact-info">(707) 882-2131</p>
              </div>
              <div className="contact-info-group">
                <p className="contact-label">EMAIL</p>
                <p className="contact-info">info@arenaunionelementary.org</p>
              </div>
            </div>
          </div>

        </div>

        <div className="footer">
          <p className="footer-element school-info">AUES | PO BOX 45 | 20 SCHOOL STREET | POINT ARENA, CA 95468 | 707.882.2131 | 707.882.3076 (FAX)</p>
          <p className="footer-element copyright">{new Date().getFullYear()} &copy; Arena Union Elementary School</p>
        </div>

      </div>
    );
  }
}





const mapStateToProps = (state) => {
  return {
    appReducer: state.appReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({
        type: "SET_DATA",
        payload: data
      });
    },
    setSchedule: (myBool) => {
      dispatch({
        type: "SET_SCHEDULE",
        payload: myBool
      });
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
