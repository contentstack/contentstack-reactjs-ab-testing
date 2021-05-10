import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getEntry } from './Helper';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footer: '',
    };
  }

  componentDidMount() {
    getEntry('footer')
      .then((data) => {
        this.setState({
          footer: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.footer !== '') {
      const blockOne = this.state.footer[0].footer_section.footer_menu[0].footer_content;
      const blockTwo = this.state.footer[0].footer_section.footer_menu[1].footer_content;
      const blockThree = this.state.footer[0].footer_section.footer_menu[2].footer_content;
      const copyright = this.state.footer[0].copy_rights;

      return (
        <footer className="footer">
          <div className="footer-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <h5>{this.state.footer[0].footer_section.footer_menu[0].title}</h5>
                  {ReactHtmlParser(blockOne)}
                </div>
                <div className="col-sm-6 col-md-4">
                  <h5>{this.state.footer[0].footer_section.footer_menu[1].title}</h5> {ReactHtmlParser(blockTwo)}
                </div>
                <div className="col-sm-6 col-md-4">
                  <h5>{this.state.footer[0].footer_section.footer_menu[2].title}</h5> {ReactHtmlParser(blockThree)}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <span>{ReactHtmlParser(copyright)}</span>
          </div>
        </footer>
      );
    } else {
      return null;
    }
  }
}

export default Footer;
