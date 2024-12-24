import axios from 'axios';

const useInstantDB = () => {
  const fetchMessages = async (contactId) => {
    const response = await axios.get(`https://api.instantdb.com/messages/${contactId}`);
    return response.data;
  };

  const sendMessage = async (contactId, message) => {
    await axios.post(`https://api.instantdb.com/messages/${contactId}`, { message });
  };

  return { fetchMessages, sendMessage };
};

export default useInstantDB;
