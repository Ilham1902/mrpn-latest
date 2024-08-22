import {ProjectDefaultDto} from "@/lib/core/context/rkpContext";

export interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
 project?: string;
 tabLevel?: string;
}

export interface SxParams {
 tabLevel?: string;
 variant?: string;
}
