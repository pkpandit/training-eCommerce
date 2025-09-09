import React from "react";
import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsPeople,
} from "react-icons/bs";
const Stats = () => {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <BsEmojiSmile />

              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              >
                232
              </span>
              <p>
                <strong>Happy Clients</strong> <span>consequuntur quae</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <BsJournalRichtext />

              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              >
                521
              </span>
              <p>
                <strong>Projects</strong>
                <span>adipisci atque cum quia aut</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <BsHeadset />

              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              >
                1453
              </span>
              <p>
                <strong>Hours Of Support</strong>
                <span>aut commodi quaerat</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <BsPeople />

              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              >
                32
              </span>
              <p>
                <strong>Hard Workers</strong>
                <span>rerum asperiores dolor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
