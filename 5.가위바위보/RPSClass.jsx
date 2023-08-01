import React, { Component } from "react";

const rpsCoords = {
  가위: '-450px',
  바위: '-105px',
  보: '-280px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rpsCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

class RPS extends Component {
  state = {
    result: '',
    imgCoord: rpsCoords.가위,
    score: 0,
  };

  interval;

  componentDidMount() { //컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 한다.
    this.interval = setInterval(this.changeHand, 100);
  }

  componentDidUpdate() { //리렌더링 후

  }

  componentWillUnmount() { //컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 한다.
    clearInterval(this.interval);
  }

  changeHand = () => {
    const {imgCoord} = this.state;
    if (imgCoord === rpsCoords.가위) {
      this.setState({
        imgCoord: rpsCoords.바위,
      });
    } else if (imgCoord === rpsCoords.바위) {
      this.setState({
        imgCoord: rpsCoords.보,
      });
    } else if (imgCoord === rpsCoords.보) {
      this.setState({
        imgCoord: rpsCoords.가위,
      });
    }
  }

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScroe = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScroe;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다.',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      })
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다.',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://t4.ftcdn.net/jpg/03/32/86/27/360_F_332862747_zb0oXy6txyqlopzJAW3UNQJCPxTg7eUx.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="scissors" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RPS;