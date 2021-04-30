const Button = ({ elem, index, counter, setCounter, role }) => {
  const newTab = [...counter];
  const handleClick = () => {
    role === "-" && (newTab[index] = elem - 1);
    role === "+" && (newTab[index] = elem + 1);
    role === "Reset" && (newTab[index] = 0);
    setCounter(newTab);
  };

  return (
    <button
      onClick={handleClick}
      disabled={
        (role === "-" && newTab[index] <= 0) ||
        (role === "+" && newTab[index] >= 10) ||
        (role === "reset" && newTab[index] === 0)
      }
      className={role === "Reset" && newTab[index] === 0 ? "disabled" : null}
    >
      {role}
    </button>
  );
};

export default Button;
