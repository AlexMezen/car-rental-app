import './Welcome/Header.css';
import Welcomeheader from './Welcome/Welcomeheader'
import Welcome from './Welcome/Welcome';
import CarCard from './Welcome/CarCard';

function App() {
  let cars =[
    { id: 1, brand: "Volkswagen", model: "Polo", type: "economy", year: "2012", pricePerDay: "17", gearbox: "AT", engine: "1.6"},
    { id: 2, brand: "Hyundai", model: "i20", type: "economy", year: "2018", pricePerDay: "16", gearbox: "AT", engine: "1.4"},
    { id: 3, brand: "Mitsubishi", model: "Lancer", type: "standart", year: "2009", pricePerDay: "17", gearbox: "M", engine: "1.5"},
    { id: 4, brand: "Skoda", model: "Rapid", type: "standart", year: "2019", pricePerDay: "20", gearbox: "M", engine: "1.4"},
    { id: 5, brand: "Toyota", model: "Rav4", type: "SUV", year: "2012", pricePerDay: "40", gearbox: "AT", engine: "2.2"},
    { id: 6, brand: "Suzuki", model: "Vitara", type: "SUV", year: "2015", pricePerDay: "21.34", gearbox: "M", engine: "1.6"},
    { id: 7, brand: "Volkswagen", model: "Passat", type: "luxury", "year": "2016", "pricePerDay": "37.79", gearbox: "AT", engine: "2"},
    { id: 8, brand: "Audi", model: "A4", type: "luxury", year: "2012", pricePerDay: "44", gearbox: "AT", engine: "2"}
]
  return (
    <div className="App">
        <Welcomeheader/>
        <Welcome/>
        <CarCard cars = {cars}/>
    </div>
  );
}

export default App;