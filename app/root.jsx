

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";


import Header from "./components/header";
import Footer from "./components/footer";
import stylesheet from "~/tailwind.css";
import styles from "./styles/index.css"



export const links = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'stylesheet', href: styles},
  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'},
  { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true'},
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Outfit:wght@400;700;900&display=swap'},
];

export function meta() {
  return[
    {
      title: 'Abstract'
      
    },{
      charset: 'utf-8'
    },{
      viewport: 'width=device-width,initial-scale=1'
    }
  ]
}

export default function App() {

  return(
    <Document>
      <Outlet/>
    </Document>
  )
}


export function Document({children}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-lato text-2xl ">
        <Header/>
        {children}
        <Footer/>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
