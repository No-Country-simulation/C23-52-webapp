export const CardMemberships = ({ type, benefits, price }) => {
  return (
    <div className='border px-7 py-14 lg:px-28 shadow-xl lg:py-60 rounded-2xl'>
      <h4>{type}</h4>
      <p>{benefits}</p>
      <span>{price}</span>
    </div>
  );
};
