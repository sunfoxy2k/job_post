import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";

import { ImageNode } from "./customeNode/ImageNode";

const editorNodes = [
    ListNode, 
    ListItemNode, 
    ImageNode, 
    AutoLinkNode, 
    LinkNode,
    HeadingNode,
    QuoteNode,
    TableCellNode,
    TableNode,
    TableRowNode
];

export default editorNodes;
