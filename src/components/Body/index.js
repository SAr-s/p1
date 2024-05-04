// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          <div className={showLeftNavbar ? 'show1' : 'hide1'}>
            <h1 className="heading">Left Navbar Menu</h1>
            <ul className="item-list">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3 </li>
              <li>item 4</li>
            </ul>
          </div>
          <div className={showContent ? 'show2' : 'hide1'}>
            <h1 className="heading">Content</h1>
            <p>Lorem ipsum hello who are you</p>
          </div>
          <div className={showRightNavbar ? 'show1' : 'hide1'}>
            <h1 className="heading">Right Navbar </h1>
            <div>Ad 1</div>
            <div>Ad 2</div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
