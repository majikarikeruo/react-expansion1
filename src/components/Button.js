const Button = ({ choice, onChoiceClick }) => {
  const choices = ["グー", "チョキ", "パー"];

  return (
    <button
      onClick={() => onChoiceClick(choice)}
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {choices[choice]}
    </button>
  );
};

export default Button;
