import * as React from "react";
export default function BrahmaReact() {
  return (
    <main style={{ padding: 48, fontFamily: "-apple-system, Roboto, sans-serif" }}>
      <h1>Brahma-React</h1>
      <p>
        React + server-integration starter that demonstrates SSR/SSG patterns when your backend is a Rust runtime.
      </p>
      <p><a href="/">← Back to Home</a></p>
    </main>
  );
}
export const Head = () => <title>Brahma-React · Hyper-Forge</title>;
