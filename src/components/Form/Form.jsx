const Form = ({ handleSubmit, isEditing, setName, name, setModalIsOpen }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='font-[Roboto] font-bold'>
        <p
          className='w-full h-[35px] mr-[441.2px] mb-[20px] pr-[2.8px] text-[#545454] text-[30px] font-[Roboto] font-bold'
          fontFamily='Roboto'
        >
          {!isEditing ? 'New Todo' : 'Edit Todo'}
        </p>
        <p className='w-full h-[43px] mb-[12px] text-[16px] text-[#000] font-[Roboto] font-bold'>
          Please write content of todo in input below!
        </p>
        <input
          type='text'
          placeholder='Do Something!'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=' w-full h-[32px] pb-[8px]  mb-[7px]  border-none outline-none text-[14px] bg[#fff] placeholder:h-[26px] placeholder:pl-[10px] placeholder:text-[#828282] placeholder:text-left placeholder:leading-[16.41px]'
        />
        <div className='w-full h-[1px] bg-[#dedede] mb-[18px]' />
        <div className='flex flex-row-reverse items-center mb-2'>
          <button
            type='submit'
            className='h-[15px] text-[16px] border-none outline-none cursor-pointer text-center w-[62px] text-[#609fff] bg-transparent '
          >
            Add
          </button>
          <button
            type='button'
            className='h-[15px] text-[16px] border-none outline-none cursor-pointer text-center w-[66px] text-[#828282] bg-transparent
            hover:text-red-400'
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
