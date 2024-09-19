'use client'

import { FormEvent, useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("")
  const item1 = 0

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(text)
  }

  return (
    <div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="input" onChange={(e) => setText(e.target.value as string)} value={text}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
