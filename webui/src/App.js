import {Routes, Route} from 'react-router-dom'
import {Home, About, Navber, Login, PostQuestions, UserAccount, UserAns, UserQuestions, Questions, Signup, QuestionsAns, Footer, ChangePassword, ForgotPassword, AdminQuestions,AdminUserAccounts ,AdminQuestionsAns} from './Constant/pageConstant/pageConstant'
// import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/changePassword' element={<ChangePassword/>}/>
        {/* <Route path='/postQuestion' element={<PostQuestions/>}/> */}
        <Route path='/userAccount' element={<UserAccount/>}/>
        <Route path='/userAns' element={<UserAns/>}/>
        <Route path='/userQuestion' element={<UserQuestions/>}/>
        <Route path='/question' element={<Questions/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/questionAns' element={<QuestionsAns/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/admin/questions' element={<AdminQuestions/>}/>
        <Route path='/admin/questionsAns' element={<AdminQuestionsAns/>}/>
        <Route path='/admin/users' element={<AdminUserAccounts/>}/>
      </Routes>
    </>
  );
}

export default App;
