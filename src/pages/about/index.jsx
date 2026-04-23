import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Intro from '@/components/InnerPages/About/Intro';
import Team from '@/components/Startup/Team';
import CallToAction from '@/components/Startup/CallToAction';
import Footer from '@/components/HomeMain/Footer';

function PageAbout() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "We're a digital agency based in Valencia.",
    text: "About Us"
  }

  return (
    <>
      <Head>
        <title>JB Web Media - About</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Intro />
        {/* <Team /> */}
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;