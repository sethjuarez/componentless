import Head from "next/head";
import Image from "next/image";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { useEffect, useState } from "react";
import { initDiagram } from "@services/diagram";
import { useSession } from "next-auth/react";
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const handleModelChange = (changes: go.IncrementalData) => {
  console.log(changes);
};

export default function Home() {
  const appInsights = useAppInsightsContext();
  const [sent, setSent] = useState(false);
  const { data, status } = useSession();
  useEffect(() => {
    const user = {
      name: data?.user?.name || "",
      email: data?.user?.email || "",
      expires: data?.expires || "",
      status: status,
      host: window ? window.location.hostname : "unknown",
    };

    if (
      user.status === "authenticated" &&
      !user.host.toLowerCase().includes("localhost") &&
      !sent
    ) {
      console.log(user);
      appInsights.trackEvent({ name: "User", properties: user });
      setSent(true);
    }
  }, [data, status, appInsights, sent]);

  const useFirst = true;
  /*{
      key: 1,
      title: "SQL Server Query",
      text: "Fetch data from SQL Server",
      image: "/icons/SQL-Database.svg",
      loc: "400 0",
      category: "transform",
    },
    {
      key: 2,
      title: "Text Analytics Query",
      text: "Run Text Analytics",
      image: "/icons/Cognitive-Services.svg",
      loc: "400 0",
      category: "transform",
    },
    {
      key: 3,
      title: "Custom Script Processor",
      text: "Run Script",
      image: "/icons/Code.svg",
      loc: "400 0",
      category: "transform",
    },*/

  const data1 = [
    {
      key: 0,
      text: "input1",
      loc: "800 800",
      category: "input",
    },
    {
      key: 1,
      text: "input2",
      loc: "800 800",
      category: "input",
    },
    {
      key: 2,
      title: "Cognitive Services Query (2)",
      text: "Fetch data from Azure Cognitive Services",
      image: "/icons/Search-Services.svg",
      loc: "0 0",
      category: "transform",
    },

    {
      key: 3,
      title: "Azure Functions (3)",
      text: "Process using Azure Functions",
      image: "/icons/Function-Apps.svg",
      loc: "800 800",
      category: "transform",
    },
    {
      key: 4,
      title: "SQL Server Query (4)",
      text: "Fetch data from SQL Server",
      image: "/icons/SQL-Database.svg",
      loc: "400 0",
      category: "transform",
    },
    {
      key: 8,
      title: "Package Text (8)",
      text: "Process prompt template",
      image: "/icons/Cubes.svg",
      loc: "400 0",
      category: "transform",
    },
    {
      key: 5,
      title: "Azure OpenAI Service (5)",
      text: "Send prompt to Azure OpenAI",
      image: "/icons/OpenAI_Logo.svg",
      loc: "400 0",
      category: "transform",
      color: "black",
    },
    {
      key: 6,
      title: "Custom Script Processor (6)",
      text: "Post Processing",
      image: "/icons/Code.svg",
      loc: "400 0",
      category: "transform",
    },
    {
      key: 7,
      text: "output",
      loc: "800 800",
      category: "output",
    },
  ];

  const link1: any = [
    { key: -1, from: 0, fromPort: "io", to: 2, toPort: "tin" },
    { key: -3, from: 1, fromPort: "io", to: 4, toPort: "tin" },
    { key: -5, from: 3, fromPort: "tsucout", to: 8, toPort: "tin" },
    { key: -6, from: 2, fromPort: "tsucout", to: 8, toPort: "tin" },
    { key: -10, from: 8, fromPort: "tsucout", to: 5, toPort: "tin" },
    { key: -7, from: 4, fromPort: "tsucout", to: 3, toPort: "tin" },
    { key: -8, from: 5, fromPort: "tsucout", to: 6, toPort: "tin" },
    { key: -9, from: 6, fromPort: "tsucout", to: 7, toPort: "out" },
  ];

  const data2 = [
    { key: 0, text: "input1", color: "lightblue", category: "input" },
    { key: 1, text: "input2", color: "orange" },
    { key: 2, text: "Gamma", color: "lightgreen" },
    { key: 3, text: "Delta", color: "pink" },
    { key: 4, text: "Farsi", color: "#c0c0c0" },
    { key: 5, text: "API Call", color: "#cf5555" },
  ];

  const link2 = [
    { key: -1, from: 0, to: 3 },
    { key: -2, from: 1, to: 2 },
    { key: -3, from: 3, to: 4 },
    { key: -4, from: 4, to: 5 },
    { key: -5, from: 2, to: 5 },
  ];

  return (
    <>
      <Head>
        <title>Serverless AzureML Components</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <ReactDiagram
          initDiagram={initDiagram}
          divClassName="diagram-component"
          style={{ height: "100vh", width: "100vw" }}
          nodeDataArray={useFirst ? data1 : data2}
          linkDataArray={useFirst ? link1 : link2}
          onModelChange={handleModelChange}
        />
      </main>
    </>
  );
}
