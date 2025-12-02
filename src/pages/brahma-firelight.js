import * as React from "react";
export default function BrahmaFirelight() {
  return (
    <main style={{ padding: 48, fontFamily: "-apple-system, Roboto, sans-serif" }}>
      <h1>Brahma-Firelight</h1>
      <p>
        Rust-based JS runtime and integration patterns: zero-copy FFI, V8 bindings, and a WASM-first
        deploy model. Ideal for micro-handlers and ultra-low latency services.
      </p>
      <p><a href="/">← Back to Home</a></p>
    </main>
  );
}
export const Head = () => <title>Brahma-Firelight · Hyper-Forge</title>;
