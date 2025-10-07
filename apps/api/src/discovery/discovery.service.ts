import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscoveryService {
  findExternal(category:string, city:string){
    // Stub: In production, query Google Places / Yelp, etc.
    return [
      { company: 'Pro '+category+' Inc', rating: 4.7, email: 'contact@pro.inc' },
      { company: city+' '+category+' Experts', rating: 4.5, email: 'hello@experts.com' }
    ];
  }
  buildInviteEmail(job:any, company:string){
    return {
      subject: `Invitation to bid on a commercial ${job.category} job in ${job.city||'your area'}`,
      body: `Hi ${company},\nA local property manager posted ${job.title}. Budget ${job.budgetMin}-${job.budgetMax}.\nLink: https://app.example.com/invite?job=${job.id}`
    };
  }
}
