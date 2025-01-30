export const CardMemberships = ({ type, benefits, price }) => {
  return (
    <div className='border px-28 shadow-xl py-60 rounded-2xl'>
      <h4>{type}</h4>
      <p>{benefits}</p>
      <span>{price}</span>
    </div>
  );
};
