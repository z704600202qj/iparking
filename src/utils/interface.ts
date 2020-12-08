/**
 * 右点击参数
 */
interface RightClickItem {
  name: string;
  handle: () => void;
}
/**
 * 单个文件item
 */
interface FileItemProps {
  name: string;
  type: string;
  id: string;
  select?: boolean;
}

export {
  RightClickItem,
  FileItemProps
};