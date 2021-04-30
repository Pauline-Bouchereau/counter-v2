const addCounterButton = ({ counter, setCounter }) => {
  const handleClick = () => {
    const newTab = [...counter];
    newTab.push(0);
    setCounter(newTab);
  };

  return (
    <button
      onClick={handleClick}
      disabled={counter.length >= 3}
      className={counter.length >= 3 && "disabled"}
    >
      Add Counter
    </button>
  );
};

export default addCounterButton;
