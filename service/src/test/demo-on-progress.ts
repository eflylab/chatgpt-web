/**
 * Demo CLI for testing the `onProgress` streaming support.
 * ref: https://github.com/transitive-bullshit/chatgpt-api/blob/main/demos/demo-conversation.ts
 * ```
 * npx tsx ./src/test/demo-on-progress.ts
 * ```
 */

import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { ChatGPTAPI } from 'chatgpt'

dotenv.config()

function setupProxy(options) {
	options.fetch = (url, options) => {
		return fetch(url, { ...options })
	}
}
const options = {
	apiKey: process.env.OPENAI_API_KEY,
	completionParams: { model: 'gpt-3.5-turbo' },
	debug: true
};

setupProxy(options)

const api = new ChatGPTAPI(options)

// steam demo
async function demo_on_progress() {

	const prompt
		= '你好，我是多多。'

	console.log(prompt)
	const res = await api.sendMessage(prompt, {
		onProgress: (partialResponse) => {
			console.log(partialResponse.text)
		},
	})
	console.log(res.text)
}

// 对话记录 demo
async function demo_conversation() {
	const prompt = '我的名字是多多'
	let res = await (api.sendMessage(prompt))
	console.info("\n\nres=");
	console.info(res);
	console.info("\n\ntext=");
	console.log('\n' + res.text + '\n')

	const prompt2 = '你知道我的名字吗？'

	res = await (
		api.sendMessage(prompt2, {
			parentMessageId: res.id
		})
	)
	console.log('\n' + res.text + '\n')

	const prompt3 = '我们在讨论什么内容？'

	res = await (
		api.sendMessage(prompt3, {
			parentMessageId: res.id
		})
	)
	console.log('\n' + res.text + '\n')

}

demo_on_progress().catch((err) => {
	console.error(err)
	process.exit(1)
})
