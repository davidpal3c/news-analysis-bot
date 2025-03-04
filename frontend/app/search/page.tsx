'use client';
import styles from "../page.module.css"
import { useState } from 'react';
import InputForm from '../components/input-form';
import Header from '../components/header/view';
import Link from "next/link";

const Search = () => {
  const [submittedData, setSubmittedData] = useState<string | null>(null);

  const handleDataSubmit = (data: string) => {
    setSubmittedData(data);
    console.log(submittedData);
    // Here you can handle the submitted data, e.g., send it to an API
  };

  return (
    <div>
      <Header/>
      <div className={styles.bodyDiv}>
        <div className={styles.navBar}>
          <Link href="/">Home</Link>
          <Link className={styles.active} href="">Search</Link>
        </div>
        <h1 className={styles.bodyTitle}>Search for the Hottest News</h1>
      </div>
      
      <div className="flex flex-col items-center mt-8 ">
        <InputForm onSubmit={handleDataSubmit} />
        {submittedData && (
          <div className="mt-4 p-4 bg-white border rounded shadow">
            <h2 className="font-semibold">Submitted Data:</h2>
            <p>{submittedData}</p>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Search;
