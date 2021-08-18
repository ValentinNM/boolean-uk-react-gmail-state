import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {

  const [emails, setEmails] = useState (initialEmails)
  console.log("initial Emails: ", emails)

  // const renderEmail = emails.map(email => <li className="email">{
    
  //   // {__html: email.sender },
  //   // email.starred 
  //   email.title
    
  //   }
  //   </li> )

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {/* Render a list of emails here */
      // renderEmail

      emails.map(email => {
        return (
          <li className ="email read">
            <div className = "select">
            <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => {}}
                    />
            </div>

            <div className = "select">
            <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => {}}
                    />
            </div>

          <div className = "">
            {email.sender}
            </div> 

            <div className = "title">
              {email.title}
            </div>

          </li>
        )
        
      })

      }
      </ul>
      </main>
    </div>
  )
}

export default App
