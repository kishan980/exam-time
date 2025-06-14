import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import FetchData from './components/FetchData';
import FocusInput from './components/FocusInput';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>1-2. List with Add Item</h2>
        <AddItem />
        <hr />
        <h2>3-4. Fetch Data</h2>
        <FetchData />
        <hr />
        <h2>5. Focus Input with useRef</h2>
        <FocusInput />
        <hr />
        <h2>6. Simple Form</h2>
        <SimpleForm />
      </div>
    </div>
  );
}

export default App;
