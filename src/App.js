import Header from './components/Header'

import initialEmails from './data/emails'

const filterUnreadEmails = emails => emails.filter(email => !email.read)

import './App.css'
import { useState } from 'react'

function App() {

  const [emails, setEmails] = useState (initialEmails)
  const [isHidingEmailsChecked, setisHidingEmailsChecked] = useState(false)
  console.log("initial Emails: ", emails, 'isHidingEmailsChecked: ', isHidingEmailsChecked)


  const toggleRead = targetEmail => {
    console.log("inside targetedEmail: ", targetEmail, emails)

    const updatedEmails = emails.map(email => {
      console.log("inside toggleRead map: ", email, targetEmail)
      
      if (email.id === targetEmail.id) {
        console.log('Found email: ', email, targetEmail.read)
 
        const updatedEmail = { 
          ... targetEmail, 
          read: !targetEmail.read
        }
        console.log('updatedEmail: ', updatedEmail)

        return updatedEmail
      } else {
        return email
      }
    })
    console.log(updatedEmails)
    
    setEmails(updatedEmails)
  } 

  const toggleStarred = targetEmail => {
    console.log("inside toggleStarred: ", targetEmail, emails)

    const updatedEmails = emails.map (email => {
      console.log('inside toggleStarred map: ', email, targetEmail)

      if(email.id === targetEmail.id) { 
        console.log('found Email:', email, targetEmail.starred)

        const updatedEmail = { 
          ... targetEmail, 
          starred: !targetEmail.starred
        }
        console.log('updatedEmail: ', updatedEmail)

        return updatedEmail
      } else {
        return email
      }
    })
    console.log("updatedEmails: ", updatedEmails)
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (isHidingEmailsChecked) {
    filteredEmails = filterUnreadEmails(emails)
  } 

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
              checked={isHidingEmailsChecked}
              onChange={event => setisHidingEmailsChecked(event.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {   /* Render a list of emails here */

          } 
          { filteredEmails.map(email => { 

      emails.map(email => {
        return (
          <li className = {email.read ? 'email read' : 'email'} >
            <div className = "select">
            <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                    />
            </div>

            <div className = "select">
            <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStarred(email)}
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
      })}
      </ul>
      </main>
    </div>
  )
}

export default App
