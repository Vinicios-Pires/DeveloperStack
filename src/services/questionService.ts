import * as questionRepository from "./../repositories/questionRepository.js";

import { question } from "@prisma/client";

export type CreateQuestionData = Omit<question, "id">;

// TODO
async function createQuestion(question: string) {
	await questionRepository.createQuestion(question);
}

async function getAllQuestions() {
	return await questionRepository.getAllQuestions();
}

async function getQuestionById(id: number) {
	return await questionRepository.getQuestionById(id);
}

const questionService = {
	createQuestion,
	getAllQuestions,
	getQuestionById,
};
export default questionService;
