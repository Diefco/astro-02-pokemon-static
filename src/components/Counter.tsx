import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <div class="grid gap-4 mt-5">
      {/* <h1 class="text-5xl">Counter</h1> */}
      <div>{props.children}</div>
      <h3 class="text-xl">Value: {counter()}</h3>
      <div>
        <button
          onClick={() => setCounter((prev) => ++prev)}
          class="bg-blue-500 p-2 w-12 mr-2 rounded"
        >
          +1
        </button>
        <button
          onClick={() => setCounter((prev) => --prev)}
          class="bg-blue-500 p-2 w-12 mr-2 rounded"
        >
          -1
        </button>
      </div>
    </div>
  );
};
