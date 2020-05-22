const model = {
  listConversations: null, // danh sách những cuộc hội thoại người dùng tham gia
  currentConversation: null, // cuộc hội thoại người dùng đang trỏ vào
  saveListConversations(conversations) {
    model.listConversations = conversations
  },
  saveCurrentConversation(conversation) {
    model.currentConversation = conversation
  }
}