import { Box, Stack, Typography } from "@mui/material";
import "../globalicons.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faFacebookSquare,
  faGooglePlus,
  faLinkedin,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "@/components/navbar/navbar";

export default function OurTeam() {
  return (
    <Box>
      <Stack className="teamHome">
        <nav>
          <NavBar />
        </nav>
        <div className="container">
          <Typography
            variant="h1"
            style={{
              display: "flex",
              position: "relative",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              color: "gray",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Our Team
          </Typography>
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <Image alt="Boss" src="/pablo.jpg" height={350} width={350} />
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus">
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-linkedin">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          style={{ fontSize: 24, width: 24, height: 24 }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="team-content">
                  <div className="team-info">
                    <Typography variant="h5" className="title">
                      Harrison John-A.
                    </Typography>
                    <span className="post">Founder and CEO</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <Image alt="JU" src={"/webd.jpg"} height={350} width={350} />
                  <ul className="social">
                    <li>
                      <a href="#" className="fab fa-facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-twitter">
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-google-plus">
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fab fa-linkedin">
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          style={{ fontSize: 24, width: 24, height: 24 }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="team-content">
                  <div className="team-info">
                    <Typography variant="h5" className="title">
                      Wilfred Thompson
                    </Typography>
                    <span className="post">Web Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </Box>
  );
}
