import prisma from "../config/database.js";

// TODO
export async function createAnswer(id: number, answer: string) {
	await prisma.answer.create({
		data: {
			questionId: id,
			answer,
		},
	});
}
