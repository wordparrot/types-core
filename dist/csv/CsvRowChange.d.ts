export interface CsvRowChange {
    y: number;
    oldY?: number;
    rowKey: string;
    code: string;
    indexesChanged: number[];
    original?: any[];
    cells: any[];
}
