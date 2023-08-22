import "../../css/Gellary/GellaryCard.css";

function GellaryCard() {
  return (
    <div className="card-container">
      <CardBox />
    </div>
  );
}
export default GellaryCard;

function CardBox() {
  const arr = [1, 2, 3];
  return (
    <div>
      <div className="cb">
        {arr.map(() => (
          <div className="card-box">
            <div className="card">
              <div className="card-photoBox">
                <div className="card-photo">
                  <img
                    src="https://i.pinimg.com/736x/14/1d/92/141d920019a67d78d3e05752bce549d7.jpg"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="card-infoBox">
                <div className="card-subject">
                  오늘 택배 꼭 와야..아니 일곱 시 이전에 와야하는데
                </div>
                <div className="card-date">2023.01.02</div>
                <div className="card-view">조회수 : 3</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="Complete-btnBox"
        style={{ height: "150px", marginTop: "0px" }}
      >
        <div className="Complete-btn Complete-cancel" onClick={() => {}}>
          더보기
        </div>
      </div>
    </div>
  );
}
