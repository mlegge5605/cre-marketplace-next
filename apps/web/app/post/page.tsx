'use client';
import { useEffect, useState } from 'react';

type Schema = { category: string; fields: { name: string; type: string; options?: string[]; required?: boolean }[] };

export default function PostJobPage() {
  const [schemas, setSchemas] = useState<Schema[]>([]);
  const [category, setCategory] = useState('PLUMBING');
  const [title, setTitle] = useState('');
  const [payload, setPayload] = useState<Record<string, any>>({});

  useEffect(() => {
    fetch((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/schemas')
      .then(r => r.json()).then(setSchemas).catch(() => setSchemas([]));
  }, []);

  const schema = schemas.find(s => s.category === category);

  const submit = async () => {
    const body = { title, category, dynamicFields: payload, budgetMin: 100, budgetMax: 500 };
    await fetch((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000') + '/jobs', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    });
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Post a Job</h1>
      <label>Title <input value={title} onChange={e=>setTitle(e.target.value)} /></label>
      <div>
        <label>Category </label>
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          {schemas.map(s => <option key={s.category} value={s.category}>{s.category}</option>)}
        </select>
      </div>
      {schema && schema.fields.map(f => (
        <div key={f.name} style={{ marginTop: 8 }}>
          <label>{f.name} </label>
          {f.type === 'select' ? (
            <select onChange={e=>setPayload(p=>({ ...p, [f.name]: e.target.value }))}>
              <option value="">--</option>
              {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <input onChange={e=>setPayload(p=>({ ...p, [f.name]: e.target.value }))} />
          )}
        </div>
      ))}
      <button onClick={submit} style={{ marginTop: 12 }}>Create Job</button>
    </div>
  );
}
