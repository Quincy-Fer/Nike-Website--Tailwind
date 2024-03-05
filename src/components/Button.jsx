const Button = ({ label, iconUrl }) => {
  return (
    <div>
      <button className="">{label} <img src={iconUrl} alt="" /></button>
    </div>
  );
};

export default Button;
