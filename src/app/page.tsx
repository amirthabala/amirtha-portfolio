import MainComponent from "@/components/MainComponent";
import { headers } from "next/headers";
import { userAgent } from "next/server";

const Home = async () => {
  const Headers = await headers();
  const { device } = userAgent({ headers: Headers });
  const isMobile = device?.type === "mobile";

  return <MainComponent isMobile={isMobile} />;
};

export default Home;
