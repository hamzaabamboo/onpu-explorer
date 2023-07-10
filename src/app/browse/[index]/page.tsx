import { Layout } from "@/components/Layout";
import { Navigation } from "@/components/common/Navigation";
import { AllViewer } from "@/components/home/AllViewer";
import { HomeIntro } from "@/components/home/HomeIntro";
import { KANA_COLUMNS, KANA_ROWS } from "@/data/gojuuon";
import { PhoneticSemanticData } from "@/types";
import { readFile } from "fs/promises";
import { join } from "path";

export async function generateStaticParams() { 
  return Array(KANA_ROWS.length).fill("").map((_,idx) => ({ index: idx.toString() }))
}

const fetchData = async (row: number) => {
   const data = JSON.parse(await readFile(join(__dirname, "../../../../../src/data/onpubushu.json"),"utf-8")) 
   const kanjiData = JSON.parse(await readFile(join(__dirname, `../../../../../src/data/kanji-data/${row}.json`),"utf-8")) 

   return {
    wordsData: data.filter((d:PhoneticSemanticData) => KANA_COLUMNS[row].includes(d.pronounciation[0])),
    kanjiData
   }
}

export default async function Home(props: { params: { index: number } }) {
    const { index } = props.params;
  const { wordsData, kanjiData } = await fetchData(Number(index));

  return (
    <Layout>
      <HomeIntro />
      <Navigation />
      <AllViewer data={wordsData} kanjiData={kanjiData} showDetails/>
    </Layout>
  )
}
