import { useState } from 'react';
import Item from '../Item/Item';

const List = ({ list, removeItem, editItem, changeItemStatus }) => {
  const [status, setStatus] = useState(false);

  const getTime = new Date();
  const shortMonth = getTime.toLocaleString('en-us', { month: 'short' });
  const year = getTime.getFullYear();
  const day = getTime.getDate();

  let selectedData = list.filter((item) => item.status === status);

  return (
    <div className='flex flex-col w-[1125px] pt-[44px] pr-[49px] pb-[40px] pl-[50px] mt-[68px] mr-[158px] mb-[243px] ml-[158px] rounded-bl-[25px] rounded-br-[25px] bg-white'>
      <div className='flex items-center justify-between  w-full h-[48px] mb-[22px] ml-[2px] pb-[2px] font-normal font-[Roboto]'>
        <div className='flex items-center w-[50px] h-[40px] text-[44px] text-[#000]'>
          {day}
          <div className='flex flex-col items-center justify-center text-[16px] ml-[5px]'>
            <span className='text-[#000] font-semibold'>{shortMonth}</span>
            <span className='text-[#545454]'>{year}</span>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <button
            onClick={() => setStatus(false)}
            className={
              !status
                ? 'text-[#55dddd] font-black leading-[19px] font-[Roboto] text-[16px] cursor-pointer border-none outline-none bg-transparent'
                : 'text-[16px] font-semibold font-[Roboto] leading-[19px] cursor-pointer border-none outline-none bg-transparent'
            }
          >
            inCompleted task
          </button>
          <button
            onClick={() => setStatus(true)}
            className={
              status
                ? 'text-[#55dddd] font-black leading-[19px] font-[Roboto] text-[16px] cursor-pointer border-none outline-none bg-transparent ml-[27px]'
                : 'text-[16px] font-semibold font-[Roboto] leading-[19px] cursor-pointer border-none outline-none bg-transparent ml-[27px]'
            }
          >
            Completed task
          </button>
        </div>
      </div>
      {/* add Item to list */}
      {selectedData.map((item) => {
        const { id, title, status } = item;
        return (
          <div
            className='flex flex-col items-center justify-center ml-[2px] mb-[10px]'
            key={id}
          >
            <Item
              id={id}
              status={status}
              title={title}
              removeItem={removeItem}
              editItem={editItem}
              changeItemStatus={changeItemStatus}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
