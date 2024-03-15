// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="Body">
          {showLeftNavbar ? (
            <div className="box">
              <h1> Left Navbar Menu</h1>
              <ul className="left-navbar-list">
                <li> Item 1</li>
                <li> Item 2</li>
                <li> Item 3</li>
                <li> Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}

          {showContent ? (
            <div className="box content">
              <h1> Content </h1>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <div className="box right-position">
              <h1>Right Navbar Menu</h1>
              <div className="right-navbar-boxes">
                <div className="ad">Ad 1</div>
                <div className="ad">Ad 2</div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
