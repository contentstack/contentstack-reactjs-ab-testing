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
      return (
        <footer className="footer">
          <div className="footer-content">
            <div className="container">
              <div className="row">
                {this.state.footer.map((index) => {
                  return index.footer_section.footer_menu.map((value,i) => {
                    if (value) {
                      return (
                        <div className="col-sm-6 col-md-4" key={i}>
                          <h5>{value.title}</h5>
                          {ReactHtmlParser(value.footer_content)}
                        </div>
                      );
                    }
                  });
                })}
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            {this.state.footer.map((value) => {
              return (
                <>
                  <span>{ReactHtmlParser(value.copy_rights)}</span>
                </>
              );
            })}
          </div>
        </footer>
      );
    } else {
      return null;
    }
  }
}

export default Footer;
