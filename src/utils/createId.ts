import { customAlphabet } from 'nanoid';

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const length = 12;

const nanoid = customAlphabet(alphabet, length);

export default function createId() {
  return nanoid();
}
