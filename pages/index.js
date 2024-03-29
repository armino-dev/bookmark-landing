import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import TabController from '../components/tabController'
import { tabData } from '../data/tabData'
import { cardsData } from '../data/cardsData'
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
    return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Mentor | Bookmark Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="wrapper">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="features">
            <div className="container features-container">
              <h2>Features</h2>
              <p>Our aim is to make it quick and easy for you to access your favorite websites.
              Your bookmarks sync between your devices so you can access them on the go.
              </p>
              <TabController activeTab={0} tabData={tabData}/>              
            </div>
          </section>
          <section id="download">
            <div className="container download-container">
              <h2>Download the extension</h2>
              <p>We’ve got more browsers in the pipeline.
            Please do let us know if you’ve got a favorite you’d like us to prioritize.</p>
              <div className="cards-container">
                {cardsData && cardsData.map((card, index) => {
                    return <Card key={index} card={card} />               
                })}
              </div>
            </div>
          </section>
          <section id="faq">
            <div className="container faq-container">
              <h2>Frequently Asked Questions</h2>
              <p>Here are some of our FAQs.
            If you have any other questions you’d like answered please feel free to email us.</p>
              {/** TODO: make a collapsible component */}
              <div className="collapsible-container">
                <input id="item-0" className="toggle" type="checkbox" />
                <label htmlFor="item-0" className="toggle-label">What is Bookmark?</label>
                <div id="content-0" className="collapsible-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce tincidunt justo eget ultricies fringilla.
            Phasellus blandit ipsum quis quam ornare mattis.</p>
                </div>
                <input id="item-1" className="toggle" type="checkbox" />
                <label htmlFor="item-1" className="toggle-label">How can I request a new browser?</label>
                <div id="content-1" className="collapsible-content">
                  <p>Vivamus luctus eros aliquet convallis ultricies.
                  Mauris augue massa, ultricies non ligula.
                  Suspendisse imperdiet.
                  Vivamus luctus eros aliquet convallis ultricies.
                  Mauris augue massa, ultricies non ligula.
                  Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                  Mauris augue massa, ultricies non ligula.
            Suspendisse imperdiet.</p>
                </div>
                <input id="item-2" className="toggle" type="checkbox" />
                <label htmlFor="item-2" className="toggle-label">Is there a mobile app?</label>
                <div id="content-2" className="collapsible-content">
                  <p>Sed consectetur quam id neque fermentum accumsan.
                  Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.
                  Cras in ligula quis est pharetra mattis sit amet pharetra purus.
            Sed sollicitudin ex et ultricies bibendum.</p>
                </div>
                <input id="item-3" className="toggle" type="checkbox" />
                <label htmlFor="item-3" className="toggle-label">What about other Chromium browsers?</label>
                <div id="content-3" className="collapsible-content">
                  <p>Integer condimentum ipsum id imperdiet finibus.
                  Vivamus in placerat mi, at euismod dui.
            Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>

                </div>
              </div>
              <button className="btn btn-primary">More info</button>
            </div>
          </section>

          <section id="contact">
            <div className="container contact-container">
              <span className="followers">35,000+ already joined</span>
              <h2>Stay up-to-date with what we’re doing</h2>     
              <form>
                  <input type="email" placeholder="Enter your email address" aria-label="Email" />
                  <button type="submit" className="btn btn-red">Contact Us</button>
              </form>         
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
