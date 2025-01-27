"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex items-center text-4xl">
            <span> + </span>
            <Image
              className="mx-2"
              src="/firebase.svg"
              alt="firebase logo"
              width={48}
              height={48}
              priority
            />
            <span>Firebase</span>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Start by creating a Firebase project and configure it in your{" "}
            <code className="step-code">firebase/config</code> file. Add your
            Firebase credentials (API key, Auth domain, etc.) using{" "}
            <code className="step-code">process.env.</code> for environment
            variable safety.
          </li>
          <li className="mb-2">
            Define your Firebase configuration in the{" "}
            <code className="step-code">firebase/config</code> file. Make sure
            to import and initialize Firebase using the configuration from the
            environment variables.
          </li>
          <li className="mb-2">
            Add Firebase actions such as <code className="step-code">get</code>,{" "}
            <code className="step-code">post</code>, and{" "}
            <code className="step-code">update</code> in the{" "}
            <code className="step-code">firebase/actions</code> file to handle
            CRUD operations on your Firebase data.
          </li>
          <li className="mb-2">
            For user authentication, use Firebase{" "}
            <code className="step-code">firebase/auth</code> in the{" "}
            <code className="step-code">firebase/actions</code> file to
            implement user login, registration, and logout functionality.
          </li>
          <li className="mb-2">
            To persist user sessions across page reloads, integrate Firebase's{" "}
            <code className="step-code">onAuthStateChanged</code> method to
            manage user authentication state in your application.
          </li>
          <li className="mb-2">
            For storing and managing files (like images or documents), set up
            Firebase <code className="step-code">firebase/storage</code> and
            create upload/download functions in the{" "}
            <code className="step-code">firebase/actions</code> file.
          </li>
          <li className="mb-2">
            For managing data in Firestore, use Firebase{" "}
            <code className="step-code">firebase/firestore</code> to store and
            retrieve structured data. Define your Firestore collection structure
            and create functions for adding, retrieving, and updating documents.
          </li>
          <li className="mb-2">
            Use the <code className="step-code">.env.example</code> file to
            reference the environment variables, then create a{" "}
            <code className="step-code">.env</code> file to securely store your
            Firebase credentials.
          </li>
          <li>
            Save your files and test your Firebase connection by performing
            authentication, CRUD operations in Firestore, file uploads to
            Storage, and ensuring data is properly fetched, added, or updated.
          </li>
        </ol>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://templates.anarr.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore all templates
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://firebase.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase docs →
          </a>
        </div>
      </main>
    </div>
  );
}
