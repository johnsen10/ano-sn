import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import EntryScreen from './screens/EntryScreen';
import HomeScreen from './screens/HomeScreen';
import JoinUsScreen from './screens/JoinUsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import DetailScreen from './screens/DetailScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<EntryScreen/>}>
            <Route index element = {<HomeScreen/>}/>
            <Route path='a-propos' element = {<AboutUsScreen/>}/>
            <Route path='nous-joindre' element = {<JoinUsScreen/>}/>
            <Route path='auto-detail/:id' element = {<DetailScreen/>}/>
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
