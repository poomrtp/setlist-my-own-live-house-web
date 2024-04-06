import MostListenedContainer from '@/components/most-listened/mostListenedContainer';
import Head from 'next/head';
import React from 'react';

function MostListenedPage() {
  return (
    <>
      <Head>
        <title>My own Live House</title>
        <meta property="og:title" content="My own Live House" key="title" />
        <meta name="keywords" content="setlist, spotify, music," />
        <meta name="author" content="Ratthapon Sananaur" />
      </Head>
      <MostListenedContainer />
    </>
  );
}

export default MostListenedPage;
