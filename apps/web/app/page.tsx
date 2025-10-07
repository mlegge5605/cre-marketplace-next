'use client';
import { useEffect, useState } from 'react';

type Job = { id: string; title: string; category: string; status: string; budgetMin?: number; budgetMax?: number; };

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/jobs')
      .then(r => r.json()).then(setJobs).catch(() => setJobs([]));
  }, []);
  return (
    <div>
      <h1>Open Jobs</h1>
      <ul>
        {jobs.map(j => (
          <li key={j.id}><a href={`/jobs/${j.id}`}>{j.title}</a> — {j.category} — {j.status}</li>
        ))}
      </ul>
    </div>
  );
}
