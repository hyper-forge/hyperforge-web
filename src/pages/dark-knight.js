import * as React from "react";
export default function DarkKnight() {
  return (
    <main style={{ padding: 48, fontFamily: "-apple-system, Roboto, sans-serif" }}>
      <h1>Dark-Knight</h1>
      <p>
        Experimental coroutine / mini-scheduler framework in Rust. Focused on tiny stacks, scheduling,
        and exploring coroutine ergonomics for fast I/O.
      </p>
      <p><a href="/">← Back to Home</a></p>
    </main>
  );
}
export const Head = () => <title>Dark-Knight · Hyper-Forge</title>;
