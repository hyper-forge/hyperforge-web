import * as React from "react";
export default function BrahmaVue() {
  return (
    <main style={{ padding: 48, fontFamily: "-apple-system, Roboto, sans-serif" }}>
      <h1>Brahma-Vue</h1>
      <p>
        Vite + Vue starter tuned for edge/WASM integration and fast hydration patterns. Perfect for JAMstack + Rust backends.
      </p>
      <p><a href="/">← Back to Home</a></p>
    </main>
  );
}
export const Head = () => <title>Brahma-Vue · Hyper-Forge</title>;
