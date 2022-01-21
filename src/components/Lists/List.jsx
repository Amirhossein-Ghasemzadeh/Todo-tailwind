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
    <div className='flex flex-col w-[1125px] pt-11 pr-[49px] pb-10 pl-[50px] mt-[68px] mr-[158px] mb-[243px] ml-[158px] rounded-bl-[25px] rounded-br-[25px] bg-white'>
      <div className='flex items-center justify-between  w-full h-12 mb-[22px] ml-0.5 pb-0.5 font-normal font-[Roboto]'>
        <div className='flex items-center w-[50px] h-10 text-[44px] text-[#000]'>
          {day}
          <div className='flex flex-col items-center justify-center text-base ml-[5px]'>
            <span className='text-[#000] font-semibold'>{shortMonth}</span>
            <span className='text-[#545454]'>{year}</span>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <button
            onClick={() => setStatus(false)}
            className={
              !status
                ? 'text-[#55dddd] font-black leading-[19px] font-[Roboto] text-base cursor-pointer border-none outline-none bg-transparent'
                : 'text-base font-semibold font-[Roboto] leading-[19px] cursor-pointer border-none outline-none bg-transparent'
            }
          >
            inCompleted task
          </button>
          <button
            onClick={() => setStatus(true)}
            className={
              status
                ? 'text-[#55dddd] font-black leading-[19px] font-[Roboto] text-base cursor-pointer border-none outline-none bg-transparent ml-[27px]'
                : 'text-base font-semibold font-[Roboto] leading-[19px] cursor-pointer border-none outline-none bg-transparent ml-[27px]'
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
            className='flex flex-col items-center justify-center ml-0.5 mb-2.5'
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
