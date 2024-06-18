import Image from "next/image";

export function NavBar() {
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
    </div>
  );
}
