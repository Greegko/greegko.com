import { For } from "solid-js";

export const MainPage = props => {
  return (
    <div class="p-6 max-w-5xl mx-auto">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">John Developer</h1>
        <nav>
          <a href="#projects" class="mr-4 text-gray-600 hover:text-black">
            Projects
          </a>
          <a href="#libraries" class="text-gray-600 hover:text-black">
            Libraries
          </a>
        </nav>
      </header>

      <section id="projects" class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Active Projects</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <For each={props.data.projects}>
            {project => (
              <div class="shadow-lg rounded-lg p-4 border border-gray-200">
                <h3 class="text-lg font-semibold">{project.name}</h3>
                <p class="text-sm text-gray-600 mb-2">{project.description}</p>
                <div class="text-xs text-gray-500 flex items-center">
                  <span class="mr-2">&lt;/&gt;</span>
                  {project.stack.join(", ")}
                </div>
              </div>
            )}
          </For>
        </div>
      </section>

      <section id="libraries">
        <h2 class="text-xl font-semibold mb-4">GitHub Libraries</h2>
        <div class="space-y-4">
          <For each={props.data.projects}>
            {library => (
              <div class="shadow-md rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                <div>
                  <h3 class="text-lg font-semibold">{library.name}</h3>
                  <p class="text-sm text-gray-600">{library.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>

      <footer class="mt-8 text-center text-sm text-gray-500">&copy; 2025 John Developer. All rights reserved.</footer>
    </div>
  );
};
