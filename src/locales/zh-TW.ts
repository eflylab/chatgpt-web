export default {
  common: {
    add: '新增',
    addSuccess: '新增成功',
    edit: '編輯',
    editSuccess: '編輯成功',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    save: '儲存',
    saveSuccess: '儲存成功',
    reset: '重設',
    action: '操作',
    export: '匯出',
    exportSuccess: '匯出成功',
    import: '匯入',
    importSuccess: '匯入成功',
    clear: '清除',
    clearSuccess: '清除成功',
    yes: '是',
    no: '否',
    confirm: '確認',
    download: '下載',
    noData: '目前無資料',
    wrong: '發生錯誤，請稍後再試。',
    success: '操作成功',
    failed: '操作失敗',
    verify: '驗證',
    unauthorizedTips: '未經授權，請先進行驗證。',
  },
  chat: {
    placeholder: '來說點什麼...（Shift + Enter = 換行）',
    placeholderMobile: '來說點什麼...',
    copy: '複製',
    copied: '複製成功',
    copyCode: '複製代碼',
    clearChat: '清除對話',
    clearChatConfirm: '是否清空對話?',
    exportImage: '儲存對話為圖片',
    exportImageConfirm: '是否將對話儲存為圖片?',
    exportSuccess: '儲存成功',
    exportFailed: '儲存失敗',
    usingContext: '上下文模式',
    turnOnContext: '啟用上下文模式，在此模式下，發送訊息會包含之前的聊天記錄。',
    turnOffContext: '關閉上下文模式，在此模式下，發送訊息不會包含之前的聊天記錄。',
    limitContext: '已達會話限制，將丟棄當前上下文信息，請重新開始新的聊天。',
    deleteMessage: '刪除訊息',
    deleteMessageConfirm: '是否刪除此訊息?',
    deleteHistoryConfirm: '確定刪除此紀錄?',
    clearHistoryConfirm: '確定清除紀錄?',
    preview: '預覽',
    showRawText: '顯示原文',
  },
  setting: {
    setting: '設定',
    general: '總覽',
    advanced: '高級',
    advance: '高級',
    config: '設定',
    avatarLink: '頭貼連結',
    name: '名稱',
    description: '描述',
    role: '角色設定',
    resetUserInfo: '重設使用者資訊',
    chatHistory: '紀錄',
    theme: '主題',
    language: '語言',
    api: 'API',
    reverseProxy: '反向代理',
    timeout: '逾時',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
    balance: 'API余額',

    chatgpt_memory_title: '記憶力',
    chatgpt_memory_memo: '記憶力越強，ChatGPT 在對話過程中能記住的上下文越多，但可能會消耗更多的費用',
    chatgpt_memory_choice_1: '普通記憶(5條)',
    chatgpt_memory_choice_2: '中等記憶(20條)',
    chatgpt_memory_choice_3: '最強記憶(全部)',

    chatgpt_top_p_title: '性格',
    chatgpt_top_p_1_memo: '傾向於提供精確的分析，減少 ChatGpt 胡說八道的可能性',
    chatgpt_top_p_2_memo: '兼顧回答的准確性和想像力',
    chatgpt_top_p_3_memo: '傾向於提供更豐富的資訊',
    chatgpt_top_p_choice_1: '准確可信',
    chatgpt_top_p_choice_2: '平衡性格',
    chatgpt_top_p_choice_3: '發散思維',
    about_head: '本項目原作者為Chanzhaoyu，經eflyfeng分叉和修改，基於 MIT 協議開源。',
    about_body: '如果你覺得此項目對你有幫助，請在Github給我點個Star；如果你希望捐助，請捐助原作者，謝謝你！',

  },
  store: {
    local: '本機',
    online: '線上',
    title: '標題',
    description: '描述',
    clearStoreConfirm: '是否清除資料？',
    importPlaceholder: '請將 JSON 資料貼在此處',
    addRepeatTitleTips: '標題重複，請重新輸入',
    addRepeatContentTips: '內容重複：{msg}，請重新輸入',
    editRepeatTitleTips: '標題衝突，請重新修改',
    editRepeatContentTips: '內容衝突{msg} ，請重新修改',
    importError: '鍵值不符合',
    importRepeatTitle: '因標題重複跳過：{msg}',
    importRepeatContent: '因內容重複跳過：{msg}',
    onlineImportWarning: '注意：請檢查 JSON 檔案來源！',
    downloadError: '請檢查網路狀態與 JSON 檔案有效性',
  },
}
