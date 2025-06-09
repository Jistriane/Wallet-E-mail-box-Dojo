// Serviço de integração com o contrato inteligente de e-mail
export const sendEmail = async (to: string, subject: string, content: string) => {
  // Lógica de envio de e-mail via contrato
};

export const getInbox = async (address: string) => {
  // Lógica para buscar caixa de entrada
};

export const getSent = async (address: string) => {
  // Lógica para buscar enviados
};

export const markAsRead = async (index: number) => {
  // Lógica para marcar como lido
};

export const deleteEmail = async (index: number) => {
  // Lógica para deletar e-mail
};

export const addToSpam = async (spammer: string) => {
  // Lógica para adicionar à lista de spam
};

export const removeFromSpam = async (address: string) => {
  // Lógica para remover da lista de spam
}; 