import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

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
            <div className="hero-container">
              <div className="hero-image"> </div>
              <div className="hero-text">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites.
                Open a new browser tab and see your sites load instantly.
              Try it for free.</p>
                <div className="call-to-action row">
                  <a href="#" className="btn btn-primary">Get it on Chrome</a>
                  <a href="#" className="btn btn-secondary">Get it on Firefox</a>
                </div>
              </div>
            </div>
          </section>
          <section id="features">
            <div className="container features-container">
              <h2>Features</h2>
              <p>Our aim is to make it quick and easy for you to access your favorite websites.
              Your bookmarks sync between your devices so you can access them on the go.
              </p>
              {/* TODO: make a tab controller component */}
              <div className="tab-controller">
                <div className="tab-bar">
                  <button className="tab-item active">Simple Bookmarking</button>
                  <button className="tab-item">Speedy Searching</button>
                  <button className="tab-item">Easy Sharing</button>
                </div>
                <div className="tab-container">
                  <div className="tab-content active">
                    <div className="tab-image-container">
                      <div className="tab-image-background"></div>
                      <img className="tab-image" src="/images/illustration-features-tab-1.svg" alt="Illustration features 1" />                      
                    </div>
                    <div className="tab-text">
                      <h3>Bookmark in one click</h3>
                      <p>Organize your bookmarks however you like.
                      Our simple drag-and-drop interface gives you complete control over how you manage your
                      favourite sites.</p>
                      <button className="btn btn-primary">More Info</button>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-image-container">
                      <div className="tab-image-background"></div>
                      <img className="tab-image" src="/images/illustration-features-tab-2.svg" alt="Illustration features 1" />                      
                    </div>
                    <div className="tab-text">
                    <h3>Intelligent search</h3>
                    <p>Our powerful search feature will help you find saved sites in no time at all.
                      No need to trawl through all of your bookmarks.</p>
                    <button className="btn btn-primary">More Info</button>
                    </div>                    
                  </div>
                  <div className="tab-content">
                  <div className="tab-image-container">
                      <div className="tab-image-background"></div>
                      <img className="tab-image" src="/images/illustration-features-tab-3.svg" alt="Illustration features 1" />                      
                    </div>
                    <div className="tab-text">
                    <h3>Share your bookmarks</h3>
                    <p>Easily share your bookmarks and collections with others.
                      Create a shareable link that you can send at the click of a button.</p>
                    <button className="btn btn-primary">More Info</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="download">
            <div className="container download-container">
              <h2>Download the extension</h2>
              <p>We’ve got more browsers in the pipeline.
            Please do let us know if you’ve got a favorite you’d like us to prioritize.</p>
              <div className="cards-container">
                {/** TODO: make a card component */}
                <div className="card">
                  <img src="/images/logo-chrome.svg" alt="Chrome Logo" />
                  <h3>Add to Chrome</h3>
                  <p>Minimum version 62</p>
                  <hr className="dots" />
                  <button className="btn btn-primary">Add &amp; Install Extension</button>
                </div>
                <div className="card">
                  <img src="/images/logo-firefox.svg" alt="Firefox Logo" />
                  <h3>Add to Firefox</h3>
                  <p>Minimum version 55</p>
                  <hr className="dots" />
                  <button className="btn btn-primary">Add &amp; Install Extension</button>
                </div>
                <div className="card">
                  <img src="/images/logo-opera.svg" alt="Opera Logo" />
                  <h3>Add to Opera</h3>
                  <p>Minimum version 46</p>
                  <hr className="dots" />
                  <button className="btn btn-primary">Add &amp; Install Extension</button>
                </div>
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
              <label for="item-0" className="toggle-label">What is Bookmark?</label>
              <div id="content-0" className="collapsible-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce tincidunt justo eget ultricies fringilla.
            Phasellus blandit ipsum quis quam ornare mattis.</p>
              </div>
            <input id="item-1" className="toggle" type="checkbox" />
              <label for="item-1" className="toggle-label">How can I request a new browser?</label>
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
              <label for="item-2" className="toggle-label">Is there a mobile app?</label>
              <div id="content-2" className="collapsible-content">
                <p>Sed consectetur quam id neque fermentum accumsan.
            Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.
            Cras in ligula quis est pharetra mattis sit amet pharetra purus.
            Sed sollicitudin ex et ultricies bibendum.</p>
              </div>
            <input id="item-3" className="toggle" type="checkbox" />
              <label for="item-3" className="toggle-label">What about other Chromium browsers?</label>
              <div id="content-3" className="collapsible-content">
                <p>Integer condimentum ipsum id imperdiet finibus.
            Vivamus in placerat mi, at euismod dui.
            Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>

              </div>
            </div>
            </div>            
          </section>
          <p>
            
            
            

            
            

            
            
            More Info

            35,000+ already joined
            Stay up-to-date with what we’re doing
            Contact Us
            Features
            Pricing
            Contact
           </p>
        </main>
        <Footer />
      </div>
    </>
  )
}
