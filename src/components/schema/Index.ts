import { Schema } from "prosemirror-model";
import nodes from './Nodes';
import marks from './Marks';

export const schema = new Schema({
    nodes: nodes,
    marks: marks
});