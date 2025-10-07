'use client';
import { useEffect, useState } from 'react';

export default function ProviderDashboard() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [amount, setAmount] = useState(500);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    fetch(`${base}/jobs`).then(r=>r.json()).then(setJobs);
  }, []);

  const bid = async (jobId: string) => {
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    await fetch(`${base}/bids`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jobId, providerId: 'provider-1', amount }) });
    alert('Bid submitted');
  };

  return (
    <div>
      <h1>Provider Dashboard</h1>
      <ul>
        {jobs.map(j => (
          <li key={j.id} style={{ marginBottom: 8 }}>
            {j.title} — {j.category}
            <div>
              <input type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value))} />
              <button onClick={() => bid(j.id)}>Bid</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
