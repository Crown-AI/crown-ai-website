"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../globalicons.css";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function About() {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [router, session.status]);
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
          cursor: "none",
          overflow: "hidden",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          console.log(mouse);
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
      >
        <Image
          src={"/cursor.png"}
          alt="cursor"
          id="mouse"
          width={30}
          height={30}
          style={{
            display: "block",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Image
          src={"/pointer.png"}
          alt="cursor"
          id="pointer"
          width={20}
          height={30}
          style={{
            display: "none",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <nav
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            wordSpacing: 2,
            gap: 5,
            cursor: "none",
          }}
        >
          <NavBar />
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
            onMouseOver={(e) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/text-cursor.png";
            }}
            onMouseOut={(d) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/cursor.png";
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
            onMouseOver={(e) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/text-cursor.png";
            }}
            onMouseOut={(d) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/cursor.png";
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
          <Typography
            variant="h2"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, gold, silver, brown, red, green, aqua)",
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            onMouseOver={(e) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/text-cursor.png";
            }}
            onMouseOut={(d) => {
              var cursor = document.getElementById("mouse") as HTMLImageElement;
              cursor.srcset = "/cursor.png";
            }}
          >
            Contributors
          </Typography>
          <Stack
            id="idea"
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 40,
              rowGap: 5,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                width: 400,
                height: 2000,
                border: "1px solid rgb(128, 128, 128)",
                padding: "10px",
                boxSizing: "border-box",
                boxShadow: "0 0 50px rgb(128, 128, 128)",
                cursor: "none",
                overflowY: "scroll",
              }}
            >
              <Image
                alt="HJ"
                src={"/bw.jpg"}
                width={200}
                height={200}
                style={{ borderRadius: "100px" }}
                draggable={"false"}
              ></Image>
              <Typography
                variant="h3"
                style={{ fontFamily: "'Indie Flower', cursive" }}
                onMouseOver={(e) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(d) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              >
                Harrison JA
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Tillana', system-ui",
                  color: "black",
                }}
                onMouseOver={(e) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(d) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              >
                Meet Harrison, a student with a passion for technology and
                agriculture. With a keen interest in problem-solving and a
                desire to make a difference, Harrison embarked on an exciting
                journey to develop an agricultural chatbot project. The project
                aimed to create a chatbot that would provide agricultural
                information, answer frequently asked questions, guide users
                through procedures and processes, and offer evaluation
                instruments for students and farmers. By combining their love
                for technology and agriculture, Harrison sought to develop a
                tool that would help farmers, students, and anyone interested in
                agriculture. Throughout the project, He learned about chatbot
                development, artificial intelligence, and agricultural
                practices. They researched existing chatbots and their features,
                identified gaps, and designed a chatbot that would cater to the
                unique needs of the agricultural community. Along the way, He
                gained valuable skills in programming, problem-solving, and
                project management. The agricultural chatbot project has the
                potential to make a significant impact on the agricultural
                community. By providing easy access to information, answering
                frequently asked questions, and offering evaluation instruments,
                the chatbot can help farmers and students improve their
                agricultural practices and make more informed decisions. The
                project also highlights the potential of young people to make a
                difference in their communities through innovation and
                technology. He plans to continue developing the agricultural
                chatbot project, adding more features and expanding its reach.
                They also hope to inspire other young people to explore the
                intersection of technology and agriculture and to use their
                skills to make a positive impact on their communities. In
                conclusion, Harrison&apos;s agricultural chatbot project is a
                testament to the power of innovation, technology, and a passion
                for making a difference. By combining their interests and
                skills, He has created a project that has the potential to
                transform the agricultural community and inspire other young
                people to do the same.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "black", width: 220 }}
                onMouseEnter={(o) => {
                  o.preventDefault();
                  var contact = document.getElementById(
                    "contact",
                  ) as HTMLButtonElement;
                  contact.style.backgroundColor = "red";
                  contact.style.color = "black";
                  contact.style.transition = "1s ease-in-out";
                }}
                onMouseOut={(y) => {
                  y.preventDefault();
                  var contact = document.getElementById(
                    "contact",
                  ) as HTMLButtonElement;
                  contact.style.backgroundColor = "black";
                  contact.style.color = "white";
                  contact.style.transition = "1s ease-in-out";
                }}
                id="contact"
                onClick={(u) => {
                  u.preventDefault();
                  router.push("/contact");
                }}
              >
                Contact
              </Button>
            </div>
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                width: 400,
                border: "1px solid rgb(128, 128, 128)",
                padding: "10px",
                boxSizing: "border-box",
                boxShadow: "0 0 50px rgb(128, 128, 128)",
                gap: 50,
                marginLeft: 70,
              }}
            >
              <Image
                alt="RTM"
                src={"/rtm.jpg"}
                width={200}
                height={200}
                style={{ borderRadius: "100px" }}
                draggable={"false"}
              ></Image>
              <Typography
                variant="h3"
                style={{ fontFamily: "'Indie Flower', cursive" }}
                onMouseOver={(e) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(d) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              >
                Raphaël TM
              </Typography>
              <Typography
                variant="h5"
                style={{ fontFamily: "'Tillana', system-ui", color: "black" }}
                onMouseOver={(e) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(d) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
              >
                As a mentee, I had the privilege of working with a dedicated and
                experienced mentor through{" "}
                <a href="https://tembotechventures.com/">
                  TTV(Tembo Tech Ventures)
                </a>{" "}
                on a programming project. Our mentor, with a rich background in
                the tech industry and expertise in various programming languages
                such as JavaScript, TypeScript, C#, and SQL, provided invaluable
                guidance and support throughout the project. Our mentor&apos;s
                approach was structured and well-designed, with a focus on
                creating a productive learning environment. We established a
                regular meeting schedule, planned topics in advance, and kept
                track of our discussions. This framework allowed us to make the
                most of our mentoring sessions, addressing specific questions,
                overcoming blockers, and engaging in pair programming sessions.
                The mentor&apos;s guidance was instrumental in helping me
                understand complex concepts and improve my problem-solving
                skills. They introduced me to valuable resources and tools, such
                as VS code extensions for pair programming, which significantly
                enhanced my learning experience. Moreover, our mentor fostered a
                sense of community and support, encouraging open discussions and
                the exchange of ideas. This collaborative approach not only
                helped me grow as a programmer but also instilled in me a deeper
                appreciation for the power of mentorship in personal and
                professional development. In conclusion, our mentor&apos;s
                expertise, dedication, and thoughtful mentoring approach played
                a crucial role in the success of our programming project. Their
                guidance has left a lasting impact on my learning journey, and I
                am grateful for the opportunity to have worked with such an
                inspiring mentor through{" "}
                <a href="https://tembotechventures.com/">TTV</a>.
              </Typography>
              <Button
                variant="contained"
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  width: 220,
                  top: 50,
                }}
                onMouseEnter={(o) => {
                  o.preventDefault();
                  var contact = document.getElementById(
                    "rtc",
                  ) as HTMLButtonElement;
                  contact.style.backgroundColor = "red";
                  contact.style.color = "black";
                  contact.style.transition = "1s ease-in-out";
                }}
                onMouseOut={(y) => {
                  y.preventDefault();
                  var contact = document.getElementById(
                    "rtc",
                  ) as HTMLButtonElement;
                  contact.style.backgroundColor = "black";
                  contact.style.color = "white";
                  contact.style.transition = "1s ease-in-out";
                }}
                id="rtc"
                onClick={(u) => {
                  u.preventDefault();
                  router.push("/contact");
                }}
              >
                Contact
              </Button>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
