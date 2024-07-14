declare module "@dabeng/react-orgchart" {
 import { ComponentType } from "react";

 export interface Node {
  //   id: string;
  name?: string;
  title?: string;
  children?: Node[];
 }

 export interface ChartProps {
  datasource: Node;
  chartClass?: string;
  containerClass?: string;
  collapsible?: boolean;
  draggable?: boolean;
  multipleSelect?: boolean;
  NodeTemplate?: ComponentType<any>;
  onClickChart?: () => void;
  onClickNode?: (node: Node) => void;
  pan?: boolean;
  zoom?: boolean;
  zoominLimit?: number;
  zoomoutLimit?: number;
  parentNodeSymbol?: string;
 }

 const ChartContainer: ComponentType<ChartProps>;
 export default ChartContainer;
}
