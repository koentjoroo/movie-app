import Head from 'next/head'

import { ReactNode } from "react"
import { Footer } from './footer'
import { Navbar } from "./navbar"

export type LayoutProps = {
  children: ReactNode
  title: string
}

export const PageLayout = (props: LayoutProps) => {

  return (
    <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar />
    {props.children}
    <Footer />
    </>
  )
}
