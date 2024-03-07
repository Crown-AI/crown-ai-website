"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../globalicons.css";

export default function About() {
  const router = useRouter();
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(255, 0, 255, 0.3), rgba(0, 0, 255, 0.3)),url('/ait.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <nav
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            wordSpacing: 2,
            gap: 5,
          }}
        >
          <span className="material-symbols-outlined">home</span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            id="home"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </p>
          <span
            className="material-symbols-outlined"
            id="contacts"
            style={{ marginLeft: 40 }}
          >
            contacts_product
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Contact us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 30 }}
          >
            local_library
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(t) => {
              t.preventDefault();
              router.push("/about");
            }}
          >
            About us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            chat
          </span>
          <p
            id="chats"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/chat");
            }}
          >
            Chats & Privacy
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            forum
          </span>
          <p
            id="p2b"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            PrimeAI
          </p>
        </nav>
        <Stack
          style={{
            display: "flex",
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            overflowX: "hidden",
            overflowY: "scroll",
            height: 500,
            width: 1100,
            top: 100,
            left: 100,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            style={{
              fontFamily: "'Indie Flower', cursive",
              color: "rgb(0, 245, 230)",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: "'Ojuju', sans-serif",
              color: "rgba(255, 0, 0, 1)",
            }}
          >
            In the heart of the digital agricultural revolution, our AI
            agricultural website stands as a pioneer in merging cutting-edge
            technology with age-old farming practices. With a passion for
            innovation and a commitment to sustainability, we have been at the
            forefront of harnessing the power of artificial intelligence to
            transform the way we cultivate the land and feed the world. Our
            journey began with a vision to bridge the gap between traditional
            farming methods and modern technological advancements, paving the
            way for a more efficient, productive, and environmentally conscious
            agricultural sector.{" "}
            <p>
              {" "}
              At our core, we are a team of dedicated experts in agriculture,
              data science, and artificial intelligence, united by a common goal
              to revolutionize the way food is grown and distributed. Through
              years of research, development, and hands-on experience in the
              field, we have honed our AI algorithms to optimize crop
              management, resource allocation, and decision-making processes for
              farmers of all scales. By leveraging the power of data analytics,
              predictive modeling, and machine learning, we empower farmers to
              make informed decisions that drive profitability while minimizing
              environmental impact.
            </p>
            <p>
              Our AI agricultural website serves as a digital hub where farmers
              can access cutting-edge tools, resources, and insights to enhance
              their farming practices. From precision agriculture techniques to
              smart irrigation systems, we offer a comprehensive suite of
              solutions tailored to meet the unique needs of modern agriculture.
              Through our platform, farmers can connect with industry experts,
              share best practices, and stay informed about the latest trends in
              AI technology for agriculture. Join us on this transformative
              journey as we continue to shape the future of farming through
              innovation, sustainability, and collaboration.
            </p>
            <p>
              With a deep-rooted commitment to sustainability and a relentless
              pursuit of excellence, our AI agricultural website is dedicated to
              empowering farmers with the tools they need to thrive in an
              ever-evolving industry. Together, we are reimagining agriculture
              for a brighter tomorrow – one where technology and tradition
              harmoniously coexist to feed a growing population while preserving
              our planet for future generations. Welcome to our community where
              innovation meets cultivation, and together, we sow the seeds of
              progress in the fields of tomorrow.
            </p>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
