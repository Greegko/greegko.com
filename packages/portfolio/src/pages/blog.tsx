export default function BlogPost() {
  return (
    <div class="p-6 max-w-3xl mx-auto">
      <header class="mb-6">
        <h1 class="text-3xl font-bold">Building a Real-time Chat Application with WebSockets</h1>
        <div class="flex space-x-2 text-gray-600 mt-2">
          <span class="px-2 py-1 bg-gray-100 rounded">WebSocket</span>
          <span class="px-2 py-1 bg-gray-100 rounded">React</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Node.js</span>
        </div>
      </header>

      <p class="text-gray-700 mb-4">
        In this tutorial, we'll explore how to build a real-time chat application using WebSocket technology. We'll use
        React for the frontend and Node.js for the backend to create a seamless chat experience.
      </p>

      <h2 class="text-2xl font-semibold mt-6">Project Setup</h2>
      <p class="text-gray-700 mb-4">
        First, let's set up our development environment and install the necessary dependencies.
      </p>
      <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>
          {`
          npm create vite@latest chat-app --template react cd chat-app npm install socket.io-client
          @tailwindcss/typography npm install -D tailwindcss postcss autoprefixer
          `}
        </code>
      </pre>

      <h2 class="text-2xl font-semibold mt-6">Application Interface</h2>
      <p class="text-gray-700 mb-4">Here's how our chat application looks in action:</p>
      <div class="flex justify-center">
        <img
          src="/images/chat-example.png"
          alt="Chat Application Example"
          class="border border-gray-300 rounded-lg shadow-md max-w-full h-auto"
        />
      </div>

      <h2 class="text-2xl font-semibold mt-6">WebSocket Implementation</h2>
      <p class="text-gray-700 mb-4">The core of our real-time functionality lies in the WebSocket implementation:</p>
      <pre class="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code>
          {`
          const socket = new WebSocket('ws://localhost:3000');
          socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            updateChat(message);
          };
          `}
        </code>
      </pre>

      <footer class="mt-8 text-center text-sm text-gray-500">&copy; 2025 John Developer. All rights reserved.</footer>
    </div>
  );
}
