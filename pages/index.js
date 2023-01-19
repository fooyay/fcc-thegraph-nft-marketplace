import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    // How do we show recently listed NFTs?

    // We will index the events off-chain and then read from our database.
    // Setup a server to listen for those events to be fired, and we will add them to a database to query.

    // Woah, isn't that centralized?
    // TheGraph does this in a decentralized way
    // Moralis does it in a centralized way and comes with a ton of other features.

    // All our logic is still 100% on chain.
    // Speed & Development time.
    // It's really hard to start a prod blockchain project 100% decentralized.
    // They are working on open sourcing their code.
    // Feature richness.
    // We can create more features with a centralized back end to start
    // as more decentralized tools are being created.
    // Local development

    return <div className={styles.container}>Hi</div>
}
