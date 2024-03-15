// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="layout-box">
          <h1 className="heading">Layout</h1>
          <div>
            <div className="configuration-item">
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                onClick={onToggleShowContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="configuration-item">
              <input
                id="left-navbar"
                type="checkbox"
                checked={showLeftNavbar}
                onClick={onToggleShowLeftNavbar}
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="configuration-item">
              <input
                id="right-navbar"
                type="checkbox"
                checked={showRightNavbar}
                onClick={onToggleShowRightNavbar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
