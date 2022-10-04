import { BsCheckLg } from 'react-icons/bs';

const SingleEndPoint = (props) => {
  return (
    <div className='flex items-center justify-center mt-16'>
      <div className='flex flex-col text-start rounded-md border-b-8 border-b-Primary justify-between w-60 h-80 bg-LightestShade relative'>
        <div className='w-16 rounded-full absolute right-[88px] bottom-[290px] bg-LightestShade'>
          <img src={props.image}></img>
        </div>
        <div className='flex flex-col align-center'>
          <h1 className='text-center text-xl font-semibold mt-10'>
            {props.title}
          </h1>
          <h2 className='font-semibold mt-10 flex mx-4'>
            <BsCheckLg className='text-Primary mr-2' /> {props.char1}
          </h2>
          <h2 className='font-semibold mt-10 flex mx-4'>
            <BsCheckLg className='text-Primary mr-2' /> {props.char2}
          </h2>
          <h2 className='font-semibold mt-10 flex mx-4'>
            <BsCheckLg className='text-Primary mr-2' /> {props.char3}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleEndPoint;
