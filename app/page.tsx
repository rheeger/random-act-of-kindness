import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import fetchRandomOrg from "./random-org";

const frameMetadata = getFrameMetadata({
  buttons: ['Find a Nonprofit'],
  image: 'https://storage.googleapis.com/endaoment-static/random-frame-of-kindness.png',
  post_url: 'https://random-frame-of-kindness.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Random Frame of Kindness',
  description: 'Give it away, give it away, give it away now.',
  openGraph: {
    title: 'Random Frame of Kindness',
    description: 'Random Frame of Kindness',
    images: ['https://storage.googleapis.com/endaoment-static/random-frame-of-kindness.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
      <>
        <h1><a href='https://app.endaoment.org/explore'>The meaning of life is to find your gift. The purpose of life is
          to give it away.</a></h1>
        <h2>— Pablo Picasso</h2>
      </>
  );
}
