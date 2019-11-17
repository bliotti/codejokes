import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  const aa = [
    'https://hackernoon.com/Devimg/logo-hn.png',
    'https://hackernoon.com/topnav/seen_white_cropped.png',
    'https://hackernoon.com/hn-images/1*_GNHlSp-ctornHauDDiBiA.jpeg',
    'https://hackernoon.com/hn-images/1*Y0tJ_VOlSidCqBIT9TTkyg.jpeg',
    'https://hackernoon.com/hn-images/1*qdsOHGtDPsXHDb7GZ6X8CQ.gif',
    'https://hackernoon.com/hn-images/1*c9zuInVQFcs6gtk4ZVxBlA.jpeg',
    'https://hackernoon.com/hn-images/1*PdKeUpPIa9ApLb2hcvnPXw.png',
    'https://hackernoon.com/hn-images/1*tO2UvhOdAdZpKKZOj2BA-g.png',
    'https://hackernoon.com/hn-images/1*MAQ2E9rXy7DwaZPX5K78wA.jpeg',
    'https://hackernoon.com/hn-images/1*yM0ipmW5JP41ee-m5Q7KPQ.jpeg',
    'https://hackernoon.com/hn-images/1*NSVfi_R4_UrJ12PRJ6Rg5Q.jpeg',
    'https://hackernoon.com/hn-images/1*7eXoCoTbeFYtWqnmxLJX0g.jpeg',
    'https://hackernoon.com/hn-images/1*t3E9-ifBK5Es39pIox9tCA.png',
    'https://hackernoon.com/hn-images/1*oy7H0sovZhPjY17f5G6fUw.png',
    'https://hackernoon.com/hn-images/1*rtRrPznqx1iWKtmJJ_oiVQ.png',
    'https://hackernoon.com/hn-images/1*tGFyroolzUR7E0gBoiY11w.png',
    'https://hackernoon.com/hn-images/1*TPiMsWm4PHQ4NXtCRHRZ6g.png',
    'https://hackernoon.com/hn-images/1*jdbZH4jl7CteKX5Jru_HpA.jpeg',
    'https://hackernoon.com/hn-images/1*hrBszBQU8Fh30OowYNufrw.jpeg',
    'https://hackernoon.com/hn-images/1*j80tBUC6gFi6E6mCqGUTrw.jpeg',
    'https://hackernoon.com/hn-images/1*CtIdTEzKtQo-9Bc9ljArEA.png',
    'https://i.ytimg.com/vi/QMYfkOtYYlg/hqdefault.jpg',
    'https://hackernoon.com/hn-images/1*ZWiLdOvoBJfothi4Z1zj2A.jpeg',
    'https://hackernoon.com/hn-images/1*M9_LQ_1pWnmW3zdKXXu_BA.png',
    'https://hackernoon.com/hn-images/1*PtmNHubOdr0Cd1A4p8T2kg.jpeg',
    'https://hackernoon.com/hn-images/1*3IZuJIKnn5EYF86_uMxn-w.png',
    'https://hackernoon.com/hn-images/1*NlbZfXAMZB7zBwuV_fNLug.png',
    'https://hackernoon.com/hn-images/1*SYT31XMNWdEPp1ogEJPRVw.png',
    'https://hackernoon.com/hn-images/1*uJoNo--Z68WoX6FASkR_pg.png',
    'https://hackernoon.com/hn-images/1*Rl0NfPha2vlubHDuY5FMaw.png',
    'https://hackernoon.com/hn-images/1*VsTynocxe5Fu83dNo2YPGg.png',
    'https://hackernoon.com/hn-images/1*3AKcl05VwTCqxG4rQBf-SA.png',
    'https://ucarecdn.com/57662ddc-da7c-407b-afcb-cb45184b2705/',
    'https://hackernoon.com/Devimg/hn-logo.png',
    'https://hackernoon.com/Devimg/logo-hn.png',
    'https://hackernoon.com/topnav/seen_white_cropped.png',
    'https://hackernoon.com/hn-images/1*d-cZ925q28XNfiuacHPECg.jpeg',
    'https://hackernoon.com/hn-images/1*ZLHl65vQIvyBajnVo0iG1Q.jpeg',
    'https://hackernoon.com/hn-images/1*7Cr9heedHTMbfFpmdQu19Q.png',
    'https://hackernoon.com/hn-images/1*oFXzAM5EAnbNS2HdY1JAXw.png',
    'https://hackernoon.com/hn-images/1*RBwphQ4JYVnZoap_l0LULg.png',
    'https://hackernoon.com/hn-images/1*58aGAgkLo1krJLlXcPGmtg.png',
    'https://hackernoon.com/hn-images/1*h9RucVrMEx7xx3AuFzL64Q.jpeg',
    'https://hackernoon.com/hn-images/1*Hxvi22N3iKIlmkDUc-Nntg.jpeg',
    'https://hackernoon.com/hn-images/1*8u3Zkrk4h-h43AWbfjILIg.jpeg',
    'https://hackernoon.com/hn-images/1*-PtHOUTzCfZtVDeKpPsSYQ.jpeg',
    'https://hackernoon.com/hn-images/1*91TU3cpAL4YKpSkA1PbFbg.jpeg',
    'https://hackernoon.com/hn-images/1*_PqrrY5Cgwd1Xhfh0yaOAg.jpeg',
    'https://hackernoon.com/hn-images/1*FksjcXSnwcN1scavwAYi2A.jpeg',
    'https://hackernoon.com/hn-images/1*kW9i1BnnRi9K6-GEe27zfw.png',
    'https://hackernoon.com/hn-images/1*AjsY3m_5FJFZV8JsINJNEw.jpeg',
    'https://ucarecdn.com/57662ddc-da7c-407b-afcb-cb45184b2705/',
    'https://hackernoon.com/Devimg/hn-logo.png',
  ]

  return (
    <div className="App">
      <h2>Hello CodeSandbox</h2>
      <h2>Start editing to see some magic happen!</h2>
      {aa.map((x, i) => (
        <img width={45 * (i % 2).toString()} height="45" alt={`${x}`} src={x} />
      ))}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
