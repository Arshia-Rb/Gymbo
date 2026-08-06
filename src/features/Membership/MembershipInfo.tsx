import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";

const USER_ID = "LKHVKJHFKAHKUHF6253";
function MembershipInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  useEffect(function () {
    async function getQrCode() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.qrserver.com/v1/create-qr-code/?data=${USER_ID}&size=1000x1000`,
        );

        // This is so the image loads first then the component gets rendered, so the image wont flash in.
        const img = new Image();
        img.src = res.url;

        img.onload = () => {
          setImgUrl(res.url);
          console.log(res.url);
          setIsLoading(false);
        };

        ////
      } catch (error) {
        console.error(error, "something went wrong");
      }
    }

    getQrCode();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <article className="flex w-fit flex-col items-center gap-10 rounded-2xl bg-neutral-900 p-8 text-white">
      <table>
        <tbody className="flex flex-col gap-10">
          <tr>
            <th className="text-stone-400">Plan:</th>
            <td className="pl-10 text-xl font-medium">Basic</td>
          </tr>
          <tr>
            <th className="text-stone-400">Days remaining:</th>
            <td className="pl-10 text-xl font-medium">27 Days</td>
          </tr>
          <tr>
            <th className="text-stone-400">Usage remaining:</th>
            <td className="pl-10 text-xl font-medium">13 Usages</td>
          </tr>
        </tbody>
      </table>

      <img className="h-50 w-50" src={imgUrl} />
    </article>
  );
}

export default MembershipInfo;
