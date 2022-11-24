import { Input } from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Input
        onChange={onChange}
        type="text"
        value={value}
        name="filter"
        id="filter"
      />
    </div>
  );
};

export default Filter;
