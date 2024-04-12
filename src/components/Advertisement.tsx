import { useEffect } from "preact/hooks";
import ads from "../../config/secret/ads.json";
import "./style/advertisement.scss";

interface AdvertisementProps {
  client: string;
  slot: string;
  format: string;
  responsive: boolean;
  horizontal: boolean;
}

async function loadGoogleAd(client: string) {
  await import(
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`
  ).then(() => {
    // @ts-ignore
    var adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  });
}

export function Advertisement(props: AdvertisementProps) {
  useEffect(() => {
    loadGoogleAd(props.client);
  }, []);

  const containerClasses = ["googleads-container"];
  if (props.horizontal) containerClasses.push("googleads-horizontal");

  return (
    <div className={containerClasses.join(" ")}>
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client={props.client}
        data-ad-slot={props.slot}
        // data-ad-format={props.format}
        // data-full-width-responsive={new String(props.responsive)}
      ></ins>
    </div>
  );
}

export const Vertical1 = <Advertisement {...ads["vertical-1"]} />;
export const Vertical2 = <Advertisement {...ads["vertical-2"]} />;
export const Horizontal1 = <Advertisement {...ads["horizontal-1"]} />;
