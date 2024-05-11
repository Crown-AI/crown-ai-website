export const PointOut = () => {
  var cursor = document.getElementById("mouse") as HTMLImageElement;
  cursor.srcset = "/pointer.png";
  cursor.height = 30;
  cursor.width = 20;
};

export const PointBack = () => {
  var cursor = document.getElementById("mouse") as HTMLImageElement;
  cursor.srcset = "/cursor.png";
  cursor.height = 30;
  cursor.width = 30;
};
