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
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value

      const onCheckBox1 = (event, type) => {
        onToggleShowContent(type, event.target.checked)
      }

      const onCheckBox2 = (event, type) => {
        onToggleShowLeftNavbar(type, event.target.checked)
      }

      const onCheckBox3 = (event, type) => {
        onToggleShowRightNavbar(type, event.target.checked)
      }

      return (
        <div className="controller">
          <h1 className="hea">Layout</h1>
          <ul>
            <li>
              <input
                type="checkbox"
                id="content"
                onChange={e => onCheckBox1(e, 'showContent')}
                checked={showContent}
                className="checkbox1"
              />
              <label htmlFor="content" className="hea1">
                Content
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={e => onCheckBox2(e, 'showLeftNavbar')}
                checked={showLeftNavbar}
                className="checkbox1"
              />
              <label htmlFor="leftNavbar" className="hea1">
                Left Navbar
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="RightNavbar"
                onChange={e => onCheckBox3(e, 'showRightNavbar')}
                checked={showRightNavbar}
                className="checkbox1"
              />
              <label htmlFor="rightNavbar" className="hea1">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
