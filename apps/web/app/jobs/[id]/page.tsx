'use client';
import { useEffect, useState } from 'react';

export default function JobDetail({ params }: any) {
  const id = params.id;
  const [job, setJob] = useState<any>(null);
  const [bids, setBids] = useState<any[]>([]);
  const [recs, setRecs] = useState<any[]>([]);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    fetch(`${base}/jobs/${id}`).then(r=>r.json()).then(setJob);
    fetch(`${base}/bids?jobId=${id}`).then(r=>r.json()).then(setBids);
    fetch(`${base}/jobs/${id}/recommendations`).then(r=>r.json()).then(setRecs);
  }, [id]);

  if (!job) return <div>Loading...</div>;
  return (
    <div>
      <h1>{job.title}</h1>
      <p>Category: {job.category} — Budget: ${job.budgetMin ?? 0}-{job.budgetMax ?? 0}</p>
      <h3>Bids</h3>
      <ul>{bids.map(b => <li key={b.id}>${b.amount} by {b.providerId}</li>)}</ul>
      <h3>Recommended Providers</h3>
      <ul>{recs.map((r:any) => <li key={r.id}>{r.name} — score {r.score}</li>)}</ul>
    </div>
  );
}
