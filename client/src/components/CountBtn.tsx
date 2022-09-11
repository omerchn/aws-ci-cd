import { useState } from "react"

export default function CountBtn() {

  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)} data-testid="count-btn" style={{ outline: 'none' }}>
      count is {count}
    </button>
  )
}