const BASE_URL = 'http://localhost:5000'
const QUESTION_SUB_URL = '/api/v1/query'
const ANS_SUB_URL = '/api/v1/ans'

const apiConstant ={
    // Users
    login:`${BASE_URL}/api/v1/user/login`,
    signup:`${BASE_URL}/api/v1/user/register`,
    logout:`${BASE_URL}/api/v1/user/logout`,
    allUsers:`${BASE_URL}/api/v1/user/all`,
    userSelf:`${BASE_URL}/api/v1/user/me`,
    deleteSelf:`${BASE_URL}/api/v1/user/deleteSelf`,
    updatePassword:`${BASE_URL}/api/v1/user/updatePassword`,
    forgotPassword:`${BASE_URL}/api/v1/user/forgotPassword`,
    resetPassword:`${BASE_URL}/api/v1/user/resetPassword`, // :restToken

    updateUser:`${BASE_URL}/api/v1/user/updateUser`, //--Admin /:ID
    deleteUser:`${BASE_URL}/api/v1/user/delete`,  //--Admin /:ID

    // Questions
    questions:`${BASE_URL}${QUESTION_SUB_URL}`, // :ID --One Question , Admin-- (Update Delete)
    userQuestions:`${BASE_URL}${QUESTION_SUB_URL}/own`, // :ID --One Question , Update, Delete
    like:`${BASE_URL}${QUESTION_SUB_URL}/like`,  // :ID
    unlike:`${BASE_URL}${QUESTION_SUB_URL}/unlike`, // :ID
   

    //
    ans:`${BASE_URL}${ANS_SUB_URL}`, // Own Ans, :ID-- Post Ans, :AnsID-- Update Ans, /:AnsID/:ID --Admin Delete  
    ansOwn:`${BASE_URL}${ANS_SUB_URL}/own`, // /:AnsID/:ID --Own Delete
    ansLike:`${BASE_URL}${ANS_SUB_URL}/like`, // :AnsID
    ansUnlike:`${BASE_URL}${ANS_SUB_URL}/unlike` // :AnsID
}   

export default apiConstant