import { useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState("ShinCode");

  console.log("rendering!");

  const handleAddAge = () => {
    setAge((state) => state + 1);
    setAge((state) => state + 1);
    setAge((state) => state + 1);

    console.log(name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <button
        onClick={handleAddAge}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
