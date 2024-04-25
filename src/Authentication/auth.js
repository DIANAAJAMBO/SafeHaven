import axios from 'axios';

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post('https://safeheaven-lnt5.onrender.com/login', { email, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return true;
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};
