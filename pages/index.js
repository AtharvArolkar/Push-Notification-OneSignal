import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    //   window.OneSignal = window.OneSignal || [];

    // OneSignal.push(function() {
    //   OneSignal.init({
    //     appId: "b5b2ecf6-847a-427d-bfca-bad2804be000",
    //     safari_web_id: "web.onesignal.auto.092506a7-b452-4a06-a822-c1d343884087",
    //     notifyButton: {
    //       enable: true,
    //     },
    //     // subdomainName: "push-not",
    //   });
    // },[]);

    //   return () => {
    //       window.OneSignal = undefined;
    //   };
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "78417f63-3be8-4dff-829a-35853d9c9801",
      });
    });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>OneSignal + Next.js</title>
        <meta
          name="description"
          content="Integrating OneSignal with a Next.js app."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="/Push-Notification-OneSignal-main/public/js/index.js"></script>
      </Head>

      <main className={styles.main}>
        <div>
          <button className={`addbutton btn waves-effect waves-light`} >Add to home screen
            {/* <i className="material-icons right">send</i> */}
          </button>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>

        </a>
      </footer>
      <Script>
        {`
            let deferredPrompt;
            const addBtn = document.querySelector(".addbutton");
            console.log(addBtn);
            addBtn.style.display = "none";
            
            window.addEventListener("beforeinstallprompt", (e) => {
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;
                // Update UI to notify the user they can add to home screen
                addBtn.style.display = "block";
                listenToUserAction();
            });
            
            // listen to install button clic
            function listenToUserAction() {
                addBtn.addEventListener("click", presentAddToHome);
            }
            
            // addBtn.addEventListener("click", (e) => {
            
            function presentAddToHome() {
                // hide our user interface that shows our A2HS button
                addBtn.style.display = "none";
                // Show the prompt
                deferredPrompt.prompt();
                // Wait for the user to respond to the prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === "accepted") {
                        console.log("User accepted the A2HS prompt");
                    } else {
                        console.log("User dismissed the A2HS prompt");
                    }
                    deferredPrompt = null;
                });
            };
        `}
      </Script>
    </div>
  )
}
