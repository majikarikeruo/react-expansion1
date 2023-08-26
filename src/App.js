import { useState } from "react";

/** Components */
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

/** constant */
import choices from "./constant";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  /***************************************
   * @function handlePlayerChoice
   * @description じゃんけんの処理を実施する
   ***************************************/
  const handleChoice = (choice) => {
    const computer = Math.floor(Math.random() * choices.length);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(decideResult(choice, computer));
  };

  /**************************************
   * @function decideResult
   * @description 勝敗を決定する
   * @returns {string} 勝敗
   **************************************/
  const decideResult = (player, computer) => {
    if (player === computer) {
      return "あいこ";
    } else if (
      (player === 0 && computer === 1) ||
      (player === 1 && computer === 2) ||
      (player === 2 && computer === 0)
    ) {
      return "勝ち";
    } else {
      return "負け";
    }
  };

  return (
    <div className="App p-8">
      <h1 className="mb-8 text-4xl font-bold">じゃんけんゲーム</h1>

      <div className="mb-8">
        <Heading text="あなたの手" />
        {choices.map((_, index) => (
          <Button
            choice={index}
            onChoiceClick={() => handleChoice(index)}
            key={index}
          />
        ))}
        {playerChoice !== null && <Text text={choices[playerChoice]} />}
      </div>
      <div className="mb-8">
        <Heading text="コンピューターの手" />
        {computerChoice !== null && <Text text={choices[computerChoice]} />}
      </div>
      <div className="mb-8">
        <Heading text="結果" />
        {result !== "" && <Text text={result} />}
      </div>
    </div>
  );
}

export default App;
