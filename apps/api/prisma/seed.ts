import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Schemas
  await prisma.categorySchema.upsert({
    where: { category: 'PLUMBING' },
    update: { fields: [{ name:'issueType', type:'select', options:['Leak','Clog','Burst','Backflow','Other'], required:true }, { name:'waterShutoffAvailable', type:'boolean', required:true }] },
    create: { category: 'PLUMBING', fields: [{ name:'issueType', type:'select', options:['Leak','Clog','Burst','Backflow','Other'], required:true }, { name:'waterShutoffAvailable', type:'boolean', required:true }] }
  });
  await prisma.categorySchema.upsert({
    where: { category: 'ROOFING' },
    update: { fields: [{ name:'roofAccess', type:'boolean' }, { name:'leakLocation', type:'string' }] },
    create: { category: 'ROOFING', fields: [{ name:'roofAccess', type:'boolean' }, { name:'leakLocation', type:'string' }] }
  });

  const pm = await prisma.user.upsert({
    where: { email: 'pm@example.com' },
    update: {},
    create: { email: 'pm@example.com', name: 'PM One', role: 'PROPERTY_MANAGER' }
  });
  const sp = await prisma.user.upsert({
    where: { email: 'provider@example.com' },
    update: {},
    create: { email: 'provider@example.com', name: 'Provider One', role: 'SERVICE_PROVIDER' }
  });

  const job = await prisma.job.create({
    data: { title: 'Roof leak repair at 123 King St', category: 'ROOFING', budgetMin: 500, budgetMax: 1500, city: 'Toronto', dynamicFields: { roofAccess: true, leakLocation: 'Unit 405' } }
  });

  await prisma.bid.create({ data: { jobId: job.id, providerId: sp.id, amount: 900 } });
  await prisma.calendarEvent.create({ data: { jobId: job.id, type:'SITE_VISIT', start: new Date(Date.now()+86400000), end: new Date(Date.now()+90000000), location:'123 King St' } });
}

main().then(()=>prisma.$disconnect()).catch(async e=>{ console.error(e); await prisma.$disconnect(); process.exit(1); });
