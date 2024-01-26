// import React from 'react';
// import Navbar from './components/Navbar';
// import Chat from './components/Chat';

// import { auth } from './firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const style = {
//   appContainer: `max-w-[728px] mx-auto text-center`,
//   sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
// };

// function App() {
//   const [user] = useAuthState(auth);
//   //  console.log(user)
//   return (
//     <div className={style.appContainer}>
//       <section className='{style.sectionContainer}'>
//         {/* Navbar */}
//         <Navbar />
//         {user ? <Chat /> : null}
//       </section>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import DecryptPage from './components/DecryptPage';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const style = {
  appContainer: `max-w-[85rem] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-[url('img/images.png')] bg-contain  mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          {/* Navbar */}
          <Navbar  />
          <Routes>
            <Route path="/" element={user ? <Chat /> : null} />
            <Route path="/decrypt" element={<DecryptPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
