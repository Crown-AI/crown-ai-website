import "../../app/globalicons.css";
export function Graph() {
  function BarItem() {
    return <div>Item</div>;
  }
  return (
    <div className="bar-graph">
      <div className="bars-list">
        <BarItem />
        <BarItem />
        <BarItem />
        <BarItem />
      </div>
      <div className="bars-line" />
    </div>
  );
}
