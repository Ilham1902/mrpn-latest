declare module "@dabeng/react-orgchart" {
 import { ComponentType } from "react";

 export interface Node {
  name?: React.ReactNode;
  title?: React.ReactNode;
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

declare module "*.svg" {
 const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
 export default content;
}
