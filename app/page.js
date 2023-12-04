import React from 'react';
import Link from 'next/link'


export default function Home() {
  return (
    <div>
        <h1>الصفحة الرئيسية</h1>
        
        <Link href="/student">الذهاب الى الطلاب</Link>
        <hr></hr>
        

        <Link href="/programs">الذهاب الى البرامج</Link>
        <hr></hr>
        

    </div >

    
  );
}
