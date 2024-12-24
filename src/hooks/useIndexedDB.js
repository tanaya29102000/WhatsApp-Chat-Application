import Dexie from 'dexie';

const useIndexedDB = () => {
  const db = new Dexie('ChatApp');
  db.version(1).stores({
    messages: '++id,contactId,text,sent',
  });

  const saveMessage = async (contactId, message) => {
    await db.messages.add({ contactId, ...message });
  };

  const getMessages = async (contactId) => {
    return await db.messages.where('contactId').equals(contactId).toArray();
  };

  return { saveMessage, getMessages };
};

export default useIndexedDB;
