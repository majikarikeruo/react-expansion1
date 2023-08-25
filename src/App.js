import { useState } from "react";

import "./App.css";

import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

const choices = ["グー", "チョキ", "パー"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  /**
   * @function handlePlayerChoice
   * @description プレイヤーの手をセットする
   *
   */
  const handlePlayerChoice = (choice) => {
    const player = _getPlayerChoice(choice);
    const computer = _getComputerChoice();
    decideResult(player, computer);
  };

  /**
   * @function _getPlayerChoice
   * @description コンピューターの手をランダムに決定する
   * @param {number} choice - プレイヤーの選択
   */
  const _getPlayerChoice = (choice) => {
    setPlayerChoice(choice);
    return choice;
  };

  /**
   * @function _getComputerChoice
   * @description コンピューターの手をランダムに決定する
   * @returns {number} - コンピューターの選択
   */
  const _getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  /**
   * @function decideResult
   * @description 勝敗を決定する
   */
  const decideResult = (player, computer) => {
    if (player === computer) {
      setResult("あいこ");
    } else if (
      (player === 0 && computer === 1) ||
      (player === 1 && computer === 2) ||
      (player === 2 && computer === 0)
    ) {
      setResult("勝ち");
    } else {
      setResult("負け");
    }
  };

  return (
    <div className="App p-8">
      <h1 className="mb-8 text-4xl font-bold">じゃんけんゲーム</h1>

      <div className="mb-8">
        <Heading text="あなたの手" />
        <Button choice={0} setPlayerChoice={() => handlePlayerChoice(0)} />
        <Button choice={1} setPlayerChoice={() => handlePlayerChoice(1)} />
        <Button choice={2} setPlayerChoice={() => handlePlayerChoice(2)} />
      </div>
      <div className="mb-8">
        <Heading text="コンピューターの手" />
        <Text text={choices[computerChoice]} />
      </div>
      <div className="mb-8">
        <Heading text="結果" />
        <Text text={result} />
      </div>
    </div>
  );
}

export default App;
