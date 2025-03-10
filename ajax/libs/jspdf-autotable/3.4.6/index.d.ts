// Generated by dts-bundle-generator v4.3.0

export declare type jsPDFConstructor = any;
export declare type jsPDFDocument = any;
export declare type Opts = {
	[key: string]: string | number;
};
declare class DocHandler {
	private readonly jsPDFDocument;
	readonly userStyles: Partial<Styles>;
	constructor(jsPDFDocument: jsPDFDocument);
	static setDefaults(defaults: UserOptions, doc?: jsPDFDocument | null): void;
	private static unifyColor;
	applyStyles(styles: Partial<Styles>, fontOnly?: boolean): void;
	splitTextToSize(text: string | string[], size: number, opts: Opts): string[];
	rect(x: number, y: number, width: number, height: number, fillStyle: string): any;
	getPreviousAutoTable(): Table;
	getTextWidth(text: string | string[]): number;
	getDocument(): any;
	setPage(page: number): void;
	addPage(): any;
	getFontList(): {
		[key: string]: string[];
	};
	getGlobalOptions(): UserOptions;
	getDocumentOptions(): UserOptions;
	pageSize(): {
		width: number;
		height: number;
	};
	scaleFactor(): number;
	pageNumber(): number;
}
declare class HookData {
	table: Table;
	pageNumber: number;
	pageCount: number;
	settings: Settings;
	doc: jsPDFDocument;
	cursor: {
		x: number;
		y: number;
	};
	constructor(table: Table, doc: DocHandler);
}
declare class CellHookData extends HookData {
	cell: Cell;
	row: Row;
	column: Column;
	section: 'head' | 'body' | 'foot';
	constructor(table: Table, doc: DocHandler, cell: Cell, row: Row, column: Column);
}
export declare type MarginPadding = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};
export declare type PageHook = (data: HookData) => void | boolean;
export declare type CellHook = (data: CellHookData) => void | boolean;
export interface HookProps {
	didParseCell: CellHook[];
	willDrawCell: CellHook[];
	didDrawCell: CellHook[];
	didDrawPage: PageHook[];
}
export interface Settings {
	includeHiddenHtml: boolean;
	useCss: boolean;
	theme: 'striped' | 'grid' | 'plain';
	startY: number;
	margin: MarginPadding;
	pageBreak: 'auto' | 'avoid' | 'always';
	rowPageBreak: 'auto' | 'avoid';
	tableWidth: 'auto' | 'wrap' | number;
	showHead: 'everyPage' | 'firstPage' | 'never';
	showFoot: 'everyPage' | 'lastPage' | 'never';
	tableLineWidth: number;
	tableLineColor: Color;
}
export interface StylesProps {
	styles: Partial<Styles>;
	headStyles: Partial<Styles>;
	bodyStyles: Partial<Styles>;
	footStyles: Partial<Styles>;
	alternateRowStyles: Partial<Styles>;
	columnStyles: {
		[key: string]: Partial<Styles>;
	};
}
declare class Table {
	id?: string | number;
	cursor: {
		x: number;
		y: number;
	};
	settings: Settings;
	styles: StylesProps;
	columns: Column[];
	head: Row[];
	body: Row[];
	foot: Row[];
	wrappedWidth: number;
	minWidth: number;
	width: number;
	height: number;
	headHeight: number;
	footHeight: number;
	startPageNumber: number;
	pageNumber: number;
	pageCount: number;
	pageStartX: number;
	pageStartY: number;
	finalY: number;
	hooks: HookProps;
	constructor(id: string | number | undefined, settings: Settings, styles: StylesProps, hooks: HookProps, content: {
		body: Row[];
		head: Row[];
		foot: Row[];
		columns: Column[];
	});
	allRows(): Row[];
	callCellHooks(doc: DocHandler, handlers: CellHook[], cell: Cell, row: Row, column: Column): boolean;
	callEndPageHooks(doc: DocHandler): void;
}
declare class Row {
	raw: HTMLTableRowElement | RowInput;
	element?: HTMLTableRowElement;
	index: number;
	cells: {
		[key: string]: Cell;
	};
	section: Section;
	height: number;
	maxCellHeight: number;
	x: number;
	y: number;
	spansMultiplePages: boolean;
	constructor(raw: RowInput | HTMLTableRowElement, index: number, section: Section);
	hasRowSpan(columns: Column[]): boolean;
	canEntireRowFit(height: number): boolean;
	getMinimumRowHeight(columns: Column[], doc: DocHandler): number;
}
export declare type Section = 'head' | 'body' | 'foot';
declare class Cell {
	raw: HTMLTableCellElement | CellInput;
	styles: Styles;
	text: string[];
	section: Section;
	contentHeight: number;
	contentWidth: number;
	wrappedWidth: number;
	minReadableWidth: number;
	minWidth: number;
	width: number;
	height: number;
	textPos: {
		y: number;
		x: number;
	};
	x: number;
	y: number;
	colSpan: number;
	rowSpan: number;
	constructor(raw: CellInput, styles: Styles, section: Section);
	getContentHeight(doc: DocHandler): number;
	padding(name: 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right'): number;
}
declare class Column {
	raw: ColumnInput | null;
	dataKey: string | number;
	index: number;
	wrappedWidth: number;
	minReadableWidth: number;
	minWidth: number;
	width: number;
	constructor(dataKey: string | number, raw: ColumnInput | null, index: number);
	getMaxCustomCellWidth(table: Table): number;
}
export interface Styles {
	font: 'helvetica' | 'times' | 'courier' | string;
	fontStyle: 'normal' | 'bold' | 'italic' | 'bolditalic';
	overflow: 'linebreak' | 'ellipsize' | 'visible' | 'hidden' | Function;
	fillColor: Color;
	textColor: Color;
	halign: 'left' | 'center' | 'right' | 'justify';
	valign: 'top' | 'middle' | 'bottom';
	fontSize: number;
	cellPadding: MarginPaddingInput;
	lineColor: Color;
	lineWidth: number;
	cellWidth: 'auto' | 'wrap' | number;
	minCellHeight: number;
	minCellWidth: number;
}
export interface UserOptions {
	includeHiddenHtml?: boolean;
	useCss?: boolean;
	theme?: 'striped' | 'grid' | 'plain' | null;
	startY?: number | false;
	margin?: MarginPaddingInput;
	pageBreak?: 'auto' | 'avoid' | 'always';
	rowPageBreak?: 'auto' | 'avoid';
	tableWidth?: 'auto' | 'wrap' | number;
	showHead?: 'everyPage' | 'firstPage' | 'never' | boolean;
	showFoot?: 'everyPage' | 'lastPage' | 'never' | boolean;
	tableLineWidth?: number;
	tableLineColor?: Color;
	tableId?: string | number;
	head?: RowInput[];
	body?: RowInput[];
	foot?: RowInput[];
	html?: string | HTMLTableElement;
	columns?: ColumnInput[];
	styles?: Styles;
	bodyStyles?: Styles;
	headStyles?: Styles;
	footStyles?: Styles;
	alternateRowStyles?: Styles;
	columnStyles?: {
		[key: string]: Styles;
	};
	didParseCell?: CellHook;
	willDrawCell?: CellHook;
	didDrawCell?: CellHook;
	didDrawPage?: PageHook;
}
export declare type ColumnInput = string | number | {
	header?: string;
	title?: string;
	footer?: string;
	dataKey?: string | number;
	key?: string | number;
};
export declare type Color = [number, number, number] | number | string | false;
export declare type MarginPaddingInput = number | number[] | {
	top?: number;
	right?: number;
	bottom?: number;
	left?: number;
	horizontal?: number;
	vertical?: number;
};
export interface CellDef {
	rowSpan?: number;
	colSpan?: number;
	styles?: Partial<Styles>;
	content?: string | string[] | number;
	title?: string;
	_element?: HTMLTableCellElement;
}
declare class HtmlRowInput extends Array<CellInput> {
	_element: HTMLTableRowElement;
	constructor(element: HTMLTableRowElement);
}
export declare type CellInput = null | string | string[] | number | boolean | CellDef;
export declare type RowInput = {
	[key: string]: CellInput;
} | HtmlRowInput | CellInput[];
export declare function applyPlugin(jsPDF: jsPDFConstructor): void;
export declare type autoTable = (options: UserOptions) => void;
export declare function autoTable(jsPDF: jsPDFConstructor, options: UserOptions): void;

export {};
