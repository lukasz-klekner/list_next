import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      Homepage
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        accusantium id. Laboriosam corporis cumque, perspiciatis amet
        consequatur, optio, aliquam asperiores illum reiciendis nihil dolorem.
        Earum, ducimus. Perferendis sunt odit tempore.
      </p>
      <Footer />
    </div>
  )
}
