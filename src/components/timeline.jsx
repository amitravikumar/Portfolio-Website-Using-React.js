import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Business Intern at BYJU's - Careerlabs, Mumbai, IN <span> June 2020 - August 2020</span></h2>
                        <p>• Managed the strong partnerships with all the tie ups in the regions - Mumbai and Gujarat</p>
                        <p>• Created strategies to improve the coordination and engagement with prospective clients</p>
                        <p>• Worked with other teams in order to strategize and make operations more fluent and fruitful</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                      <h2>Technical Head, Pillai's Alegria, Mumbai, India, Bengaluru <span> October 2018 - February 2019</span></h2>
                        <p>• Worked with the team on developing Web and Mobile based application.</p>
                        <p>• Dynamic Mobile application using Kotlin for the high engagement rate during the event</p>
                        <p>• Website for constant updates and assistance throughout the event</p>
                        <p>• Improved engagement by 32% through in application contests</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
