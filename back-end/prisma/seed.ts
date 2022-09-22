import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Running Seed...");

  const students = [
    { name: "Aluno 1" },
    { name: "Aluno 2" },
    { name: "Aluno 3" }
  ]

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true
  });
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})