import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Admin } from "@repo/ui/admin";
import React from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web" className={styles.secondary}>
        Hello Biaatch
      </Button>
      <Admin></Admin>
    </div>
  );
}
