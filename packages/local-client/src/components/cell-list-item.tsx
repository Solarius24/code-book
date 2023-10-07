import '@cli-jsnote-sol/local-client/src/components/cell-list-item.css';
import { Cell } from '@cli-jsnote-sol/local-client/src/state';
import CodeCell from '@cli-jsnote-sol/local-client/src/components/code-cell';
import TextEditor from '@cli-jsnote-sol/local-client/src/components/text-editor';
import ActionBar from '@cli-jsnote-sol/local-client/src/components/action-bar';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
