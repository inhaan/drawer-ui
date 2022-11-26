interface Props {
  height?: number | string;
}

const Spacer = ({ height }: Props) => {
  return (
    <div
      style={{
        height,
      }}
    ></div>
  );
};

export default Spacer;
