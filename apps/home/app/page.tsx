import Image from "next/image";
import { Card } from "@cuspy-apps/ui/card";
import styles from "./page.module.css";
import { Button } from "@cuspy-apps/ui/button";
 

const LINKS = [
  {
    title: "XCEND",
    href: "https://www.xcend.co/",
    description: "The premium full-service share and unit registry led by a team with unrivalled sector expertise.",
  },
  {
    title: "COMPANY SERVICES",
    href: "https://www.xcend.co/companies",
    description: "We provide a full range of expert registry services to organisations ranging from small unlisted growth companies right through to larger exchange listed companies.",
  },
  {
    title: "FUND SERVICES",
    href: "https://www.xcend.co/funds",
    description: "We provide a full range of expert unit registry services and solutions to Managers and Trustees/Responsible Entities (REs) across Australia.",
  },
  {
    title: "About us",
    href: "https://www.xcend.co/about",
    description:
      "Find more about us and our board here.",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Home app
        </p>
        <div>
          <a
            href="https://www.xcend.co/"
            rel="noopener noreferrer"
            target="_blank"
          >
            By XCEND
          </a>
        </div>
      </div>

  

      <h1>
        Welcome home.
      </h1>

      <Button appName="Home" className={styles.button}>
       Get started
      </Button>

      <div className={styles.grid}>
        {LINKS.map(({ title, href, description }) => (
          <Card className={styles.card} href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  );
}
