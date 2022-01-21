import Pencil from '../../assets/pencil.svg';
import Delete from '../../assets/Delete.svg';

const Item = ({
  id,
  title,
  status,
  removeItem,
  editItem,
  changeItemStatus,
}) => {
  return (
    <>
      <article className='flex items-center justify-center w-full h-11'>
        <div className='check-button'>
          <input
            type='checkbox'
            checked={status}
            onChange={() => changeItemStatus(id)}
          />
        </div>
        <p
          className={
            status
              ? 'mt-[3px] ml-[15px] w-full h-[19px] font-[Roboto] text-base font-semibold leading-normal text-left text-[#545454] line-through'
              : 'mt-[3px] ml-[15px] w-full h-[19px] font-[Roboto] text-base font-semibold leading-normal text-left text-[#545454]'
          }
        >
          {title}
        </p>
        <div className='flex items-start mr-16'>
          {!status && (
            <button
              className='border-none outline-none bg-transparent cursor-pointer mr-8 hover:bg-blue-100'
              onClick={() => editItem(id)}
            >
              <img src={Pencil} alt='edit' />
            </button>
          )}
          <button
            className='border-none outline-none bg-transparent  cursor-pointer hover:bg-red-100'
            onClick={() => removeItem(id)}
          >
            <img src={Delete} alt='delete' />
          </button>
        </div>
      </article>
      <div className='w-full h-px bg-[#dedede]' />
    </>
  );
};

export default Item;
