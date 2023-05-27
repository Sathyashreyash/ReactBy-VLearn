// import React from 'react'
// import './Header.css'

// export default function Header() {
//     return (
//         <div className='header'>
//             <h1>Header</h1>
//             <p style={{color: "red"}}>Contact Us</p>
//         </div>
//     )
// }

import React from 'react'
import Footer from './Footer'
export default function Header(myname, mynumber) {
    console.log(myname, mynumber);
  return (
    <div>
        {/* // My name is {myname}
        // My name is {mynumber}
        <Footer copyright={obj}/> */}
        <Footer />
    </div>
  )
}
