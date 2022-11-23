import { useEffect } from "react";


export default function Notes(){
    
    return <>
    {useEffect(() => {
        window.OneSignal = window.OneSignal || [];
      OneSignal.push(function() {
        OneSignal.init({
          appId: "5ceb58cc-97ee-4d13-a80f-7e5a68c19836",
          safari_web_id: "web.onesignal.auto.246fdfe2-a404-4d40-aa8a-d2b211d431d5",
          notifyButton: {
            enable: true,
          },
          subdomainName: "push-not",
        });
      });
    
        return () => {
            window.OneSignal = undefined;
        };
    }, [])}
    </>
}