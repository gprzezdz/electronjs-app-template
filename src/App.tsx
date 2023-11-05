
function MyButton() {
  return (
    <button className="bg-slate-300 p-2 rounded-md">
      I'm a button
    </button>
  );
}


function App() {
return (
  <>
    <h1 className="m-auto w-fit font-bold text-white">Template</h1>
    <MyButton/>
  </>
);
}

export default App;