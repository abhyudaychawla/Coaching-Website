import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed testimonials
  const testimonials = [
    {
      quote: "I came to Anjali feeling completely lost about a major life decision. Within three sessions, I had not just clarity about the decision — I had clarity about myself. That's the real gift.",
      author: "Priya M.",
      location: "Mumbai",
      category: "clarity",
      featured: true,
      approved: true,
      sortOrder: 1,
    },
    {
      quote: "I'd been overthinking the same relationship situation for two years. Anjali helped me see it from a completely different angle, and more importantly, helped me trust what I already knew.",
      author: "Kavya R.",
      location: "Bangalore",
      category: "relationships",
      featured: true,
      approved: true,
      sortOrder: 2,
    },
    {
      quote: "The coaching sessions felt like a conversation with someone who genuinely understood what I was going through — without judgment, without rushing me to 'fix' anything. Just space to breathe and think.",
      author: "Arjun S.",
      location: "Delhi",
      category: "transition",
      featured: true,
      approved: true,
      sortOrder: 3,
    },
    {
      quote: "I was at a crossroads professionally and personally, and felt paralyzed. Anjali's approach is gentle but incisive — she asks the questions that cut through the noise.",
      author: "Meera T.",
      location: "Hyderabad",
      category: "clarity",
      featured: false,
      approved: true,
      sortOrder: 4,
    },
    {
      quote: "What I appreciated most was that she never told me what to do. She helped me find what I already knew, but couldn't see through the fog.",
      author: "Rahul D.",
      location: "Pune",
      category: "transition",
      featured: false,
      approved: true,
      sortOrder: 5,
    },
    {
      quote: "Six months ago I couldn't make a single decision without spiraling. Today I feel genuinely grounded. I didn't expect coaching to change that — but it did.",
      author: "Naina K.",
      location: "Singapore",
      category: "confidence",
      featured: true,
      approved: true,
      sortOrder: 6,
    },
  ];

  console.log("Seeding testimonials...");
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({ data: testimonials });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
