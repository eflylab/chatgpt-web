/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

// 验证执行 node ./src/test/chatgpt.test.mjs
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

if (!process.env.OPENAI_API_KEY)
  console.error('未配置 OPENAI KEY')

const options = {
  apiKey: process.env.OPENAI_API_KEY,
  completionParams: {
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    top_p: 0.8,
  },
}

function setupProxy(options) {
  options.fetch = (url, options) => {
    return fetch(url, { ...options })
  }
}
setupProxy(options)


const stream = false;
const data = {
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant.',
    },
    {
      role: 'user',
      content: '你好，我的名字叫多多',
    },
    {
      role: 'assistant',
      content: '你好，多多！有什么我可以帮助你的吗？',
    },
    {
      role: 'user',
      content: '向量数据库是什么?与关系数据库有什么区别？',
    },
    {
      role: 'assistant',
      content: '向量数据库是一种。',
    },
    {
      role: 'user',
      content: '我的名字是什么？我们在讨论什么内容？',
    },
  ],
	"stream": stream
};
(async () => {
  const url = 'https://api.openai.com/v1/chat/completions'

  const headers = {
    'Authorization': `Bearer ${options.apiKey}`,
    'Content-Type': 'application/json',
  }

  let response = await options.fetch(url, { headers, method: 'POST', body: JSON.stringify(data) })
    // .then(response => response.json())
    // .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.log('Error:', error))

		//是否流式输出
		if(stream){
			// 检查响应是否正常
			if (!response.ok) {
				console.error(`Received a non-OK status: ${response.status}`);
				return;
			}
			// 监听 data 事件
			response.body.on('data', (chunk) => {
				console.log(`Received data: ${chunk}`);
			});

			// 监听 end 事件
			response.body.on('end', () => {
				console.log('Stream ended.');
			});
		}
		else{
			//一次性输出
			let data =  await response.json();
			console.info(data);
			console.log(JSON.stringify(data))
		}

})()

/*
const api = new ChatGPTAPI(options)
(
  async () => {
  // send a message and wait for the response
    let q = '向量数据库是什么? '
    let res = await api.sendMessage(q)
    console.info('\n\n')
    console.log(q, `\n${res.text}`)

    // send a follow-up
    q = '你能扩展一下吗? '
    res = await api.sendMessage(q, {
      parentMessageId: res.id,
    })
    console.info('\n\n')
    console.log(q, `\n${res.text}`)

    // send another follow-up
    q = '我们在讨论什么?'
    res = await api.sendMessage(q, {
      parentMessageId: res.id,
    })
    console.info('\n\n')
    console.log(q, `\n${res.text}`)
  })() */
