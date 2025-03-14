interface BoxProps {
  content: string;
}

export const Box = ({ content }: BoxProps) => {
  return (
    <div className="flex space-x-2">
      <span className="px-2 py-1 bg-accent text-sm rounded">{content}</span>
    </div>
  );
};
