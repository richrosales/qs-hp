import * as React from 'react';

import Layout from '@/components/layout/Layout';
// import Image from 'next/image';
// import ArrowLink from '@/components/links/ArrowLink';
// import ButtonLink from '@/components/links/ButtonLink';
// import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [isActive, setActive] = React.useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <button className='btn-toggle' onClick={toggleClass}>
        Toggle Grid
      </button>

      <main className={isActive ? 'show-grid' : undefined}>
        <div className='bg-white'>
          <div className='container relative flex flex-col items-center justify-center min-h-screen text-left'>
            <section className='section grid-overlay'>
              <div className='w-full section-heading'>
                <h2>H2 Heading</h2>
                <p className='body-copy'>
                  Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam vel fringilla nulla, ut ullamcorper purus.
                  Vivamus sed imperdiet ante. Cras in rutrum est. Aenean lacinia
                  nibh.
                </p>
              </div>
              <div className='grid grid-cols-12 gap-14'>
                <article className='col-span-12 card lg:col-span-8'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_2up_card_lg.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='relative card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
                <article className='col-span-12 card lg:col-span-4'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_2up_card_sm.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='relative card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
              </div>
            </section>
            <section className='section'>
              <div className='w-full section-heading'>
                <h2>H2 Heading</h2>
                <p className='body-copy'>
                  Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam vel fringilla nulla, ut ullamcorper purus.
                  Vivamus sed imperdiet ante. Cras in rutrum est. Aenean lacinia
                  nibh.
                </p>
              </div>
              <div className='grid grid-cols-12 gap-14'>
                <article className='col-span-12 card lg:col-span-6'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_2up_card.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='relative card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
                <article className='col-span-12 card lg:col-span-6'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_2up_card.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='relative card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
              </div>
            </section>
            <section className='section'>
              <div className='w-full section-heading'>
                <h2>H2 Heading</h2>
                <p className='body-copy'>
                  Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam vel fringilla nulla, ut ullamcorper purus.
                  Vivamus sed imperdiet ante. Cras in rutrum est. Aenean lacinia
                  nibh.
                </p>
              </div>
              <div className='grid grid-cols-12 gap-14'>
                <article className='relative col-span-12 card card-tile lg:col-span-4'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_3up_card.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='card-overlay'>
                    <div className='card-body'>
                      <h4>Lorem Ipsum Sit Dolor Amet</h4>
                      <button className='btn-shop'>Shop Now</button>
                    </div>
                  </div>
                </article>
                <article className='relative col-span-12 card card-tile lg:col-span-4'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_3up_card.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='card-overlay'>
                    <div className='card-body'>
                      <h4>Lorem Ipsum Sit Dolor Amet</h4>
                      <button className='btn-shop'>Shop Now</button>
                    </div>
                  </div>
                </article>
                <article className='relative col-span-12 card card-tile lg:col-span-4'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_3up_card.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='card-overlay'>
                    <div className='card-body'>
                      <h4>Lorem Ipsum Sit Dolor Amet</h4>
                      <button className='btn-shop'>Shop Now</button>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
          <section className='mt-16 section bg-gray'>
            <div className='container'>
              <div className='w-full section-heading'>
                <h2>H2 Heading</h2>
                <p className='body-copy'>
                  Body Copy - Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam vel fringilla nulla, ut ullamcorper purus.
                  Vivamus sed imperdiet ante. Cras in rutrum est. Aenean lacinia
                  nibh.
                </p>
              </div>
            </div>
            <div className='pb-48 ocean-bg'>
              <div className='container grid grid-cols-12 gap-14'>
                <article className='relative col-span-12 card lg:col-span-3'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_3up_with_background_card_sm_1.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='centered card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
                <article className='card relative col-span-12 lg:col-span-6 lg:-mt-[4.2rem]'>
                  <div className='relative card-img '>
                    <img
                      src='/images/desktop_3up_with_background_card_lg@2x.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='card-body centered'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
                <article className='relative col-span-12 card lg:col-span-3'>
                  <div className='relative card-img'>
                    <img
                      src='/images/desktop_3up_with_background_card_sm.jpg'
                      alt='Picture of the author'
                      width='100%'
                      height='auto'
                    />
                  </div>
                  <div className='centered card-body'>
                    <h4>H4 Heading</h4>
                    <p className='body-copy-sm'>
                      Body Copy SM - Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                    </p>
                    <button className='btn-shop'>Shop Now</button>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
