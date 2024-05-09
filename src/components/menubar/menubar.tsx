import { Stack } from "@mui/material";
import Link from "next/link";

export function MenuBar() {
  const pointer = () => {
    var cursor = document.getElementById("mouse") as HTMLElement;
    var pointer = document.getElementById("pointer") as HTMLElement;
    pointer!.style.display = "block";
    cursor!.style.display = "none";
  };
  const cursor = () => {
    var cursor = document.getElementById("mouse") as HTMLElement;
    var pointer = document.getElementById("pointer") as HTMLElement;
    pointer!.style.display = "none";
    cursor!.style.display = "block";
  };
  return (
    <Stack>
      <span
        className="material-symbols-outlined"
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          WebkitBackdropFilter: "blur(1px)",
          backdropFilter: "blur(1px)",
          cursor: "none",
        }}
        id="menu"
        onMouseEnter={(m) => {
          m.preventDefault();
          var cursor = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          var menu = document.getElementById("menu") as HTMLElement;
          pointer!.style.display = "block";
          cursor!.style.display = "none";
          menu.style.backgroundColor = "black";
          menu.style.color = "white";
          menu.style.borderRadius = "20px";
        }}
        onMouseOut={(u) => {
          u.preventDefault();
          var cursor = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          var menu = document.getElementById("menu") as HTMLElement;
          pointer!.style.display = "none";
          cursor!.style.display = "block";
          menu.style.backgroundColor = "transparent";
          menu.style.color = "black";
          menu.style.borderRadius = "10px";
        }}
        onClick={(m) => {
          m.preventDefault();
          var health = document.getElementById("health") as HTMLElement;
          var safety = document.getElementById("safety") as HTMLElement;
          var end = document.getElementById("back") as HTMLElement;
          var times = document.getElementById("x") as HTMLElement;
          var menu = document.getElementById("menu") as HTMLElement;
          var support = document.getElementById("support") as HTMLElement;
          var help = document.getElementById("help") as HTMLElement;
          health.style.color = "red";
          health.style.transition = "2s ease-in-out";
          safety.style.color = "red";
          safety.style.transition = "2s ease-in-out";
          end.style.width = "230px";
          end.style.transition = "2s ease-in-out";
          support.style.color = "red";
          support.style.transition = "2s ease-in-out";
          help.style.color = "red";
          help.style.transition = "2s ease-in-out";
          times.style.display = "flex";
          times.style.color = "gray";
          times.style.fontSize = "20px";
          times.style.transition = "3s ease-in-out";
          menu.style.display = "none";
        }}
      >
        menu
      </span>
      <div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            height: "100vh",
            backgroundColor: "black",
            width: 0,
            zIndex: 9998,
          }}
          id="back"
        >
          <span
            className="material-symbols-outlined"
            style={{
              display: "flex",
              position: "relative",
              fontSize: 0,
              top: -330,
              left: 173,
              cursor: "none",
              color: "transparent",
            }}
            id="x"
            onMouseOver={(r) => {
              var cursor = document.getElementById("mouse") as HTMLElement;
              var pointer = document.getElementById("pointer") as HTMLElement;
              pointer!.style.display = "block";
              cursor!.style.display = "none";
            }}
            onMouseEnter={(r) => {
              r.preventDefault();
              var cursor = document.getElementById("mouse") as HTMLElement;
              var pointer = document.getElementById("pointer") as HTMLElement;
              var times = document.getElementById("x") as HTMLElement;
              pointer!.style.display = "block";
              cursor!.style.display = "none";
              times.style.color = "red";
              times.style.transition = "0s";
            }}
            onMouseOut={(b) => {
              b.preventDefault();
              var cursor = document.getElementById("mouse") as HTMLElement;
              var pointer = document.getElementById("pointer") as HTMLElement;
              var times = document.getElementById("x") as HTMLElement;
              pointer!.style.display = "none";
              cursor!.style.display = "block";
              times.style.color = "grey";
              times.style.transition = "0s";
            }}
            onClick={(h) => {
              h.preventDefault();
              var health = document.getElementById("health") as HTMLElement;
              var safety = document.getElementById("safety") as HTMLElement;
              var end = document.getElementById("back") as HTMLElement;
              var support = document.getElementById("support") as HTMLElement;
              var help = document.getElementById("help") as HTMLElement;
              var times = document.getElementById("x") as HTMLElement;
              var menu = document.getElementById("menu") as HTMLElement;
              health.style.color = "transparent";
              health.style.transition = "1s ease-in-out";
              safety.style.color = "transparent";
              safety.style.transition = "1s ease-in-out";
              end.style.width = "0";
              end.style.transition = "2s ease-in-out";
              support.style.color = "transparent";
              support.style.transition = "1s ease-in-out";
              help.style.color = "transparent";
              help.style.transition = "1s ease-in-out";
              times.style.fontSize = "0";
              times.style.color = "transparent";
              times.style.transition = "1s ease-in-out";
              menu.style.display = "flex";
            }}
          >
            close
          </span>
          <span
            className="material-symbols-outlined"
            id="health"
            style={{ color: "transparent", position: "relative", top: -220 }}
          >
            health_and_safety
          </span>
          <h5
            style={{
              color: "transparent",
              position: "relative",
              top: -220,
              cursor: "none",
            }}
            id="safety"
          >
            Safety
          </h5>
          <span
            className="material-symbols-outlined"
            id="support"
            style={{
              color: "transparent",
              position: "relative",
              top: -160,
              left: -65,
            }}
          >
            cloud
          </span>
          <Link href="/weather">
            <h5
              style={{
                color: "transparent",
                position: "relative",
                top: -160,
                left: -63,
              }}
              onMouseOver={pointer}
              onMouseOut={cursor}
              id="help"
            >
              Weather Forecast
            </h5>
          </Link>
        </div>
      </div>
    </Stack>
  );
}
