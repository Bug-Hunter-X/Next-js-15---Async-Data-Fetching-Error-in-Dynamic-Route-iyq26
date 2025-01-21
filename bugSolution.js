```javascript
// pages/about.js
import { Suspense } from 'react';

export default function About() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DataFetcher />
    </Suspense>
  );
}

function DataFetcher() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>  
  if (!data) return <div>loading...</div>
  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());
import useSWR from 'swr';
```
```javascript
//pages/api/data.js

export default async function handler(req, res) {
  res.status(200).json({ message: 'Hello from API!' });
}
```