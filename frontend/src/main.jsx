// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'
// import { AuthProvider } from '@asgardeo/react'

const authConfig = {
  clientId: "UpgcjVlB3dRT5WGqHzBmAVC3BjIa",
  baseUrl: "https://api.asgardeo.io/t/sabtamorg",
  signInRedirectURL: window.location.origin,
  signOutRedirectURL: window.location.origin,
  scope: ["openid", "profile"]
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider config={authConfig}>
      <App />
    </AsgardeoProvider>
  </StrictMode>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AsgardeoProvider
//       clientId="UpgcjVlB3dRT5WGqHzBmAVC3BjIa"
//       baseUrl="https://api.asgardeo.io/t/sabtamorg"
//       signInRedirectURL={window.location.origin}
//       signOutRedirectURL={window.location.origin}
//       scope=["openid", "profile"]
//     >
//       <App />
//     </AsgardeoProvider>
//   </StrictMode>
// )