import { A } from "@solidjs/router";

export const Nav = () => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="grid h-full max-w-xs grid-cols-2 mx-auto font-medium">
        <A
          href="/"
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <sl-icon prop:name="house" class=" text-2xl mb-2"></sl-icon>
          <div>Home</div>
        </A>
        <A
          href="/history"
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <sl-icon prop:name="gear" class=" text-2xl mb-2"></sl-icon>
          <div>History</div>
        </A>
      </div>
    </div>
  );
};
