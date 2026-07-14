import './App.css';
import { students } from './data/students';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StudentList } from './components/StudentList';

function App() {

  	return (
		<>
			<Header developer="Muhammad Faheem Sikandar" />
			<Stats />
			<StudentList students={students} />
			<Footer />
		</>
  	)
}

export default App;
