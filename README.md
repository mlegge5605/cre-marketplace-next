# CRE Services Marketplace — Next Commit (Modules Added)

This update adds the core flows you requested:

- Dynamic category **Job Form Engine**
- **Provider Matching** & recommendations
- **External Provider Discovery** + email invitations
- **Bidding workflow** (submit/review/accept)
- **Site-visit scheduling**
- **Contracts** (template → sign stub)
- **Stripe Connect Escrow** (stubs + webhooks)
- **Messaging** (in-app) + Notifications stubs
- **Reviews** (post-completion)
- **Admin** (edit schemas)

See `/apps/api/src/*` for new modules and `/apps/web/app/*` for pages.

## Migrate + seed
```bash
cp .env.example .env  # set DATABASE_URL etc.
pnpm -C apps/api prisma:migrate
```

## Run
```bash
pnpm dev
# web http://localhost:3000, api http://localhost:4000
```
