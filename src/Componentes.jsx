function Input(props) {
  return (
    <input
      className="border-2 rounded-md bg-white outline-red-900 border-red-900 px-4 py-2 text-black font-playfair"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
function Button(props) {
  return (
    <button
      className={`bg-white border-red-900 border-2 px-4 py-2 rounded-md font-playfair text-black ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export { Input, Button };
