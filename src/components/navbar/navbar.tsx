import { Button } from "@mui/material";
import Image from "next/image";

export function NavBar() {
  const Login = () => {
    window.location.href = "/auth/login";
  };
  return (
    <div className="links">
      <Image
        src={"/Crown.png"}
        id="navImg"
        alt="AI"
        width={110}
        height={110}
        draggable="false"
      ></Image>
      <section>
        <ul>
          <li>
            <a href="#">LATEST PRODUCT</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">OUR TEAM</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </section>
      <div id="loginButton">
        <Button variant="outlined" id="login" onClick={Login}>
          Login
        </Button>
      </div>
    </div>
  );
}
