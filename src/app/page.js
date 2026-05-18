import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

export default function Home() {
  return <>This is Home Page...</>;
}
