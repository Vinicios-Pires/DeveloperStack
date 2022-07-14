import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService from "../services/questionService.js";

export async function create(req: Request, res: Response) {
	// TODO
	const { question }: { question: string } = req.body;

	await questionService.createQuestion(question);
	res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
	// TODO
	const { id } = req.params;
	const { answer }: { answer: string } = req.body;

	await answerService.createAnswer(Number(id), answer);
	res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
	// TODO
	const questions = await questionService.getAllQuestions();
	res.send(questions);
}

export async function getById(req: Request, res: Response) {
	// TODO
	const { id } = req.params;

	const question = await questionService.getQuestionById(Number(id));
	res.send(question);
}
