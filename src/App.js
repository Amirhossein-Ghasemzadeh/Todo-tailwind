import { useEffect, useState } from 'react';
import List from './components/Lists/List';
import Navbar from './components/Navbar/Navbar';
import Overlays from './components/Modal/Ovelays';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Handle Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    } else if (name && isEditing) {
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, title: name } : item
        )
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      setModalIsOpen(false);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        status: false,
      };
      setList([...list, newItem]);
      setName('');
      setModalIsOpen(false);
    }
  };

  // Remove Item
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Edit Item
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setModalIsOpen(true);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  // toggle Item
  const changeItemStatus = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className='w-[1440px] grid justify-center my-[10px] mx-auto bg-bgHero '>
      <Navbar />
      {/* List component*/}
      <List
        editItem={editItem}
        list={list}
        removeItem={removeItem}
        setModalIsOpen={setModalIsOpen}
        changeItemStatus={changeItemStatus}
      />
      {/*  circle add Item Button */}
      <div className='mt-0 mr-[226px] mb-[17px] ml-[1158px]'>
        <button
          className='w-14 h-14 text-[20px] border-none outline-none text-[#fff] bg-[#609fff]  rounded-full text-center cursor-pointer'
          onClick={() => setModalIsOpen(true)}
        >
          +
        </button>
      </div>
      {/* modal */}
      <Overlays
        handleSubmit={handleSubmit}
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        setName={setName}
        name={name}
        isEditing={isEditing}
      />
    </div>
  );
}

export default App;
