import { _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";

describe("test save function work and return the saved questions", () => {
	it('will return save question', async () => {
		const question = {
			optionOneText: "option1",
			optionTwoText: "option2",
			author: "test"
		}
		const returnQuestion = await _saveQuestion(question);
		expect(returnQuestion.author).toEqual(question.author);
	})
})

describe("test save function not work and return the error", () => {
	it('will return error', async () => {
		const question = {
			optionOneText: "option1",
			optionTwoText: "option2",
		}

		await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
	})
})

describe("test save answer function work and return the answer", () => {
	it('will return true', async () => {
		const answer = {
			authedUser: "sarahedo",
			qid: "8xf0y6ziyjabvozdd253nd",
			answer: "optionOne"
		}
		const returnedAnswer = await _saveQuestionAnswer(answer);
		expect(returnedAnswer).toEqual(true);
	})
})

describe("test save answer function not work and return the error", () => {
	it('will return error', async () => {
		const answer = {
			authedUser: "sarahedo",
			qid: "8xf0y6ziyjabvozdd253nd",
		}

		await expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
	})
})


