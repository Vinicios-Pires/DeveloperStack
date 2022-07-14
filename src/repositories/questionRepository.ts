import prisma from "../config/database.js";

// TODO
export async function createQuestion(question: string) {
	await prisma.question.create({
		data: {
			question,
		},
	});
}

export async function getAllQuestions() {
	return await prisma.question.findMany();
}

export async function getQuestionById(id: number) {
	return await prisma.question.findMany({
		where: {
			id,
		},
		include: {
			answers: {
				select: {
					answer: true,
				},
			},
		},
	});
}
