export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <header style={{ padding: 16, borderBottom: '1px solid #eee', display: 'flex', gap: 16 }}>
          <a href="/"><strong>CRE Services Marketplace</strong></a>
          <a href="/post">Post a Job</a>
          <a href="/provider">Provider Dashboard</a>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}
