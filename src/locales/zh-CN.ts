export default {
  common: {
    add: '添加',
    addSuccess: '添加成功',
    edit: '编辑',
    editSuccess: '编辑成功',
    delete: '删除',
    deleteSuccess: '删除成功',
    save: '保存',
    saveSuccess: '保存成功',
    reset: '重置',
    action: '操作',
    export: '导出',
    exportSuccess: '导出成功',
    import: '导入',
    importSuccess: '导入成功',
    clear: '清空',
    clearSuccess: '清空成功',
    yes: '是',
    no: '否',
    confirm: '确定',
    download: '下载',
    noData: '暂无数据',
    wrong: '好像出错了，请稍后再试。',
    success: '操作成功',
    failed: '操作失败',
    verify: '验证',
    unauthorizedTips: '未经授权，请先进行验证。',
  },
  chat: {
    newChatButton: '新建聊天',
    placeholder: '来说点什么吧...（Shift + Enter = 换行，"/" 触发提示词）',
    placeholderMobile: '来说点什么...',
    copy: '复制',
    copied: '复制成功',
    copyCode: '复制代码',
    clearChat: '清空会话',
    clearChatConfirm: '是否清空会话?',
    exportImage: '保存会话到图片',
    exportImageConfirm: '是否将会话保存为图片?',
    exportSuccess: '保存成功',
    exportFailed: '保存失败',
    usingContext: '上下文模式',
    turnOnContext: '当前模式下, 发送消息会携带之前的聊天记录',
    turnOffContext: '当前模式下, 发送消息不会携带之前的聊天记录',
    limitContext: '已达会话限制，将丢弃当前上下文信息，请重新开始新的聊天',
    deleteMessage: '删除消息',
    deleteMessageConfirm: '是否删除此消息?',
    deleteHistoryConfirm: '确定删除此记录?',
    clearHistoryConfirm: '确定清空聊天记录?',
    preview: '预览',
    showRawText: '显示原文',
  },
  setting: {
    setting: '设置',
    general: '总览',
    advanced: '高级',
    advance: '高级',
    config: '配置',
    avatarLink: '头像链接',
    name: '名称',
    description: '描述',
    role: '角色设定',
    temperature: 'Temperature',
    top_p: 'Top_p',
    resetUserInfo: '重置用户信息',
    chatHistory: '聊天记录',
    theme: '主题',
    language: '语言',
    api: 'API',
    reverseProxy: '反向代理',
    timeout: '超时',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
    balance: 'API余额',
    monthlyUsage: '本月使用量',

    chatgpt_memory_title: '记忆力',
    chatgpt_memory_memo: '记忆力越强，ChatGPT 在对话过程中能记住的上下文越多，但会消耗更多的费用',
    chatgpt_memory_choice_1: '5条',
    chatgpt_memory_choice_2: '20条',
    chatgpt_memory_choice_3: '最强记忆(全部)',

    chatgpt_top_p_title: '性格',
    chatgpt_top_p_1_memo: '倾向于提供精确的分析，减少ChatGpt胡说八道的可能性',
    chatgpt_top_p_2_memo: '兼顾回答的准确性和想象力',
    chatgpt_top_p_3_memo: '倾向于提供更丰富的信息',
    chatgpt_top_p_choice_1: '准确可信',
    chatgpt_top_p_choice_2: '平衡性格',
    chatgpt_top_p_choice_3: '发散思维',
  },
  store: {
    siderButton: '提示词商店',
    local: '本地',
    online: '在线',
    title: '标题',
    description: '描述',
    clearStoreConfirm: '是否清空数据？',
    importPlaceholder: '请粘贴 JSON 数据到此处',
    addRepeatTitleTips: '标题重复，请重新输入',
    addRepeatContentTips: '内容重复：{msg}，请重新输入',
    editRepeatTitleTips: '标题冲突，请重新修改',
    editRepeatContentTips: '内容冲突{msg} ，请重新修改',
    importError: '键值不匹配',
    importRepeatTitle: '标题重复跳过：{msg}',
    importRepeatContent: '内容重复跳过：{msg}',
    onlineImportWarning: 'tips：输入 / 会唤醒prompt提示',
    downloadError: '请检查网络状态与 JSON 文件有效性',
  },
}
