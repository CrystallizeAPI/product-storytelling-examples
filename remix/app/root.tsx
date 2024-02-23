import {
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./styles/tailwind.css";
import { BasketProvider } from "./components/basket";
import { locale } from "./config/locale";
import { BasketButton } from "./components/basket/basket-button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorComponent } from "./components/404";
import CrystallizeLogo from "../assets/crystallize-logo.svg"
import Logo from "../assets/logo.svg"

const queryClient = new QueryClient();

export const meta: MetaFunction = () => {
  return { title: "Dounut" };
};

export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }];
}

export const loader: LoaderFunction = () => {
  return {
    ENV: {
      SERVICE_API_URL: process.env.SERVICE_API_URL,
      TENANT_IDENTIFIER: process.env.CRYSTALLIZE_TENANT_IDENTIFIER,
      NODE_EXECUTION_MODE: process.env.NODE_EXECUTION_MODE,
    },
  };
};

export default function App() {
  const data = useLoaderData();

  if (typeof window !== "undefined") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }

  return (
    <html lang="en" className="bg-primary relative z-10">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-icon"
          href="/icons/windows11/Square150x150Logo.scale-100.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/windows11/Square150x150Logo.scale-100.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/windows11/Square150x150Logo.scale-100.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-startup-image"
          href="/images/icons/windows11/Square150x150Logo.scale-100.png"
        />
        <meta name="apple-mobile-web-app-title" content="Dounot" />
        <link rel="manifest" href="/manifest.json" />

        <Meta />
        <Links />

        <script suppressHydrationWarning={true} type="text/css">
          {
            '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 3!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.underline{text-decoration:underline}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}}'
          }
        </script>
        <script
          defer
          src="https://pim.crystallize.com/static/frontend-preview-listener.js"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <BasketProvider locale={locale}>
            <Layout>
              <Outlet />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
                }}
              ></script>

              <ScrollRestoration />
              {data.ENV.NODE_EXECUTION_MODE === "development" && <LiveReload />}
            </Layout>
          </BasketProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <div className="remix-app lg:w-content w-full mx-auto p-8 sm:px-6">
      <header className="remix-app__header">
        <div className="container remix-app__header-content flex justify-between">
          <Link
            prefetch="intent"
            to="/"
            title="Remix"
            className="remix-app__header-home-link"
          >
            <img src={Logo} alt="Crystallize" />
          </Link>
          <Link
            prefetch="intent"
            to="/cart"
            title="Your cart"
            className="remix-app__header-link"
          >
            <BasketButton />
          </Link>
        </div>
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content mt-40">
        <div className="flex items-center gap-1 mt-10 text-text">
          <img src={CrystallizeLogo} alt="Crystallize" />
          Powered by <a href="https://crystallize.com">
            Crystallize</a> + <a href="https://remix.run">Remix</a>
        </div>
        </div>
      </footer>
    </div>
  );
}


export function ErrorBoundary() {
  return (
    <html className="bg-primary">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body style={{ height: "100vh" }}>
        <Layout>
          <ErrorComponent />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html className="bg-primary">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body style={{ height: "100vh" }}>
        <Layout>
          <ErrorComponent />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
