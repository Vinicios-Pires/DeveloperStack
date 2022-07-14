// TODO
import * as answerRepository from "./../repositories/answerRepository.js";
import { answer } from "@prisma/client";

export type CreateAnswerData = Omit<answer, "id" | "questionId">;

async function createAnswer(id: number, answer: string) {
	await answerRepository.createAnswer(id, answer);
}

const answerService = {
	createAnswer,
};
export default answerService;
