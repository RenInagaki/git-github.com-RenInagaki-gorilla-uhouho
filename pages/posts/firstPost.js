import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>最初のゴリラ</title>
            </Head>
            <h1>最初のゴリラ</h1>
            <Link href="/">ゴリラへ戻る</Link>
        </div>
    );
}